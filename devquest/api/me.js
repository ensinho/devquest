import { createHandler, consumeRate } from '../server/http.js';
import { refs, addEvent, nameFromEmail, publicUser, toJson, bumpCounters, Timestamp, SCHEMA_VERSION } from '../server/repository.js';
import { applyProfilePatch, normalizeProgress, pickProgress } from '../server/progressEngine.js';
import { hashId } from '../server/metadata.js';
import { HttpError } from '../server/errors.js';
import { getAdmin } from '../server/firebaseAdmin.js';

const RECENT_LOGIN_MS = 10 * 60 * 1000;

function accountView(account, user) {
  return {
    email: user.email,
    emailVerified: user.emailVerified,
    provider: user.provider,
    memberSince: toJson(account.createdAt ?? null),
    lastSignInAt: toJson(account.lastSignInAt ?? null),
    signInCount: account.signInCount ?? 0,
    sessionCount: account.sessionCount ?? 0,
    activeDays: account.activity?.activeDays ?? 0,
    dayStreak: account.activity?.dayStreak ?? 0,
    longestDayStreak: account.activity?.longestDayStreak ?? 0,
    deviceCount: account.deviceCount ?? 0,
    devices: Object.entries(account.devices ?? {}).map(([id, d]) => ({
      id,
      browser: d.browser,
      os: d.os,
      deviceType: d.deviceType,
      lastSeenAt: toJson(d.lastSeenAt ?? null),
      sessions: d.sessions ?? 0,
    })),
    lastCountry: account.lastSeen?.geo?.country ?? null,
    isAdmin: user.isAdmin,
  };
}

/**
 * GET    /api/me  profile, progress and a curated view of account metadata
 * PATCH  /api/me  { name?, companionName?, avatarId?, accessoryId?, soundEnabled?, theme? }
 * DELETE /api/me  erases every document and the auth user (requires a sign-in < 10 min old)
 */
export default createHandler({
  async GET({ user }) {
    const r = refs(user.uid);
    const [userSnap, accountSnap] = await r.db.getAll(r.user, r.account);
    if (!userSnap.exists) throw new HttpError(404, 'session_required', 'Conta ainda não iniciada.');
    return {
      user: publicUser(userSnap.data(), nameFromEmail(user.email)),
      account: accountView(accountSnap.exists ? accountSnap.data() : {}, user),
    };
  },

  async PATCH({ req, user }) {
    const now = Date.now();
    const r = refs(user.uid);
    const fallbackName = nameFromEmail(user.email);
    return r.db.runTransaction(async (tx) => {
      const [userSnap, limitsSnap] = await tx.getAll(r.user, r.limits);
      if (!userSnap.exists) throw new HttpError(409, 'session_required', 'Conta ainda não iniciada. Recarregue a página.');
      tx.set(r.limits, consumeRate(limitsSnap, { bucket: 'profile', limit: 30, windowMs: 60_000, now }), { merge: true });
      const existing = userSnap.data();
      const { progress, preferences, fields } = applyProfilePatch(normalizeProgress(existing, fallbackName), req.body);
      const patch = { ...pickProgress(progress), schemaVersion: SCHEMA_VERSION, updatedAt: Timestamp.fromMillis(now) };
      for (const [key, value] of Object.entries(preferences)) patch[`preferences.${key}`] = value;
      tx.update(r.user, patch);
      const cosmeticOnly = fields.every((f) => f === 'soundEnabled' || f === 'theme');
      if (!cosmeticOnly) addEvent(tx, r.events, { type: 'profile_updated', data: { fields } });
      return {
        user: publicUser({ ...existing, ...pickProgress(progress), preferences: { ...(existing.preferences ?? {}), ...preferences } }, fallbackName),
      };
    });
  },

  async DELETE({ user, res }) {
    if (!user.authTime || Date.now() - user.authTime > RECENT_LOGIN_MS) {
      throw new HttpError(401, 'recent_login_required', 'Confirme sua senha para excluir a conta.');
    }
    const r = refs(user.uid);
    const snap = await r.user.get();
    const lifetimeXp = snap.exists ? snap.data().lifetimeXp ?? 0 : 0;
    await r.db.recursiveDelete(r.user);
    await r.db.collection('audit').add({
      type: 'account_deleted',
      subject: hashId(user.uid),
      lifetimeXp,
      at: Timestamp.now(),
    });
    await r.db.runTransaction(async (tx) => bumpCounters(tx, r.stats, { deletedAccounts: 1 }));
    await getAdmin().auth.deleteUser(user.uid);
    res.setHeader('Clear-Site-Data', '"storage"');
    return { deleted: true };
  },
});

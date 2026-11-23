import { createHandler, consumeRate } from '../server/http.js';
import { refs, addEvent, bumpCounters, nameFromEmail, publicUser, toJson, FieldValue, Timestamp, SCHEMA_VERSION } from '../server/repository.js';
import { createDefaultProgress } from '../src/utils/progress.js';
import { normalizeProgress, rebuildProgress, hasAnyProgress } from '../server/progressEngine.js';
import { sanitizeClientInfo, parseUserAgent, geoFromRequest, hashIp, localDateKey, previousDateKey } from '../server/metadata.js';

const MAX_DEVICES = 8;
const IMPORT_WINDOW_MS = 30 * 60 * 1000;
const SESSION_EVENT_GAP_MS = 30 * 60 * 1000;

/**
 * POST /api/session — called after every sign-in and app load.
 * Bootstraps (or migrates) the account, optionally imports guest progress into
 * a brand-new account, and records sign-in, device, geo and activity metadata.
 */
export default createHandler({
  async POST({ req, user }) {
    const now = Date.now();
    const nowTs = Timestamp.fromMillis(now);
    const client = sanitizeClientInfo(req.body.client);
    const ua = parseUserAgent(req.headers['user-agent']);
    const geo = geoFromRequest(req);
    const ipHash = hashIp(req);
    const timezone = client.timezone ?? geo.timezone;
    const today = localDateKey(now, timezone);
    const fallbackName = nameFromEmail(user.email);
    const r = refs(user.uid);

    const result = await r.db.runTransaction(async (tx) => {
      const [userSnap, accountSnap, limitsSnap] = await tx.getAll(r.user, r.account, r.limits);
      tx.set(r.limits, consumeRate(limitsSnap, { bucket: 'session', limit: 20, windowMs: 60_000, now }), { merge: true });

      const account = accountSnap.exists ? accountSnap.data() : {};
      const existing = userSnap.exists ? userSnap.data() : null;
      let created = false;
      let imported = false;
      let userDoc;

      if (!existing) {
        created = true;
        const guest = req.body.guestProgress;
        let progress = createDefaultProgress(fallbackName);
        let lifetimeXp = 0;
        if (guest && typeof guest === 'object' && hasAnyProgress(normalizeProgress(guest))) {
          const rebuilt = rebuildProgress(guest, fallbackName);
          progress = rebuilt.progress;
          lifetimeXp = rebuilt.xpEarned;
          imported = true;
        }
        userDoc = {
          ...progress,
          schemaVersion: SCHEMA_VERSION,
          lifetimeXp,
          counters: {},
          preferences: client.theme ? { theme: client.theme } : {},
          createdAt: nowTs,
          updatedAt: nowTs,
          ...(imported ? { importedAt: nowTs } : {}),
        };
        tx.set(r.user, userDoc);
        bumpCounters(tx, r.stats, { users: 1, ...(imported ? { guestImports: 1 } : {}) });
      } else {
        const progress = normalizeProgress(existing, fallbackName);
        const createdAt = existing.createdAt ?? Timestamp.fromDate(userSnap.createTime.toDate());
        const guest = req.body.guestProgress;
        const canImport =
          !hasAnyProgress(progress) &&
          progress.level === 1 &&
          now - createdAt.toMillis() < IMPORT_WINDOW_MS &&
          guest && typeof guest === 'object' && hasAnyProgress(normalizeProgress(guest));
        if (canImport) {
          const rebuilt = rebuildProgress(guest, progress.name);
          userDoc = { ...existing, ...rebuilt.progress, lifetimeXp: rebuilt.xpEarned, importedAt: nowTs };
          imported = true;
          bumpCounters(tx, r.stats, { guestImports: 1 });
        } else {
          userDoc = { ...existing, ...progress };
        }
        userDoc = {
          ...userDoc,
          schemaVersion: SCHEMA_VERSION,
          createdAt,
          updatedAt: existing.schemaVersion === SCHEMA_VERSION && !imported ? existing.updatedAt ?? nowTs : nowTs,
        };
        if (existing.schemaVersion !== SCHEMA_VERSION) {
          userDoc.lifetimeXp = existing.lifetimeXp ?? 0;
          userDoc.counters = existing.counters ?? {};
          userDoc.preferences = existing.preferences ?? {};
          bumpCounters(tx, r.stats, { migratedUsers: 1 });
        }
        if (existing.schemaVersion !== SCHEMA_VERSION || imported) tx.set(r.user, userDoc);
      }

      // ---- account metadata (server-only document) ----
      const isNewSignIn = user.authTime && user.authTime !== account.lastAuthTime;
      const lastActive = account.activity?.lastActiveDate;
      let dayStreak = account.activity?.dayStreak ?? 0;
      let activeDays = account.activity?.activeDays ?? 0;
      if (lastActive !== today) {
        activeDays += 1;
        dayStreak = lastActive === previousDateKey(today) ? dayStreak + 1 : 1;
      }
      const longestDayStreak = Math.max(account.activity?.longestDayStreak ?? 0, dayStreak);

      const deviceId = client.deviceId ?? `ua-${ipHash ?? 'unknown'}`.slice(0, 64);
      const devices = { ...(account.devices ?? {}) };
      const prior = devices[deviceId];
      devices[deviceId] = {
        browser: ua.browser,
        browserMajor: ua.browserMajor,
        os: ua.os,
        deviceType: ua.deviceType,
        userAgent: ua.userAgent,
        screen: client.screen ?? null,
        viewport: client.viewport ?? null,
        touch: client.touch ?? null,
        standalone: client.standalone ?? null,
        cores: client.cores ?? null,
        memoryGb: client.memoryGb ?? null,
        connection: client.connection ?? null,
        firstSeenAt: prior?.firstSeenAt ?? nowTs,
        lastSeenAt: nowTs,
        sessions: (prior?.sessions ?? 0) + 1,
        lastCountry: geo.country ?? null,
      };
      const ordered = Object.entries(devices).sort(
        ([, a], [, b]) => (b.lastSeenAt?.toMillis?.() ?? 0) - (a.lastSeenAt?.toMillis?.() ?? 0)
      );
      const trimmedDevices = Object.fromEntries(ordered.slice(0, MAX_DEVICES));

      const seen = {
        at: nowTs,
        deviceId,
        ipHash: ipHash ?? null,
        geo,
        browser: ua.browser,
        os: ua.os,
        deviceType: ua.deviceType,
      };

      const accountDoc = {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        provider: user.provider,
        locale: client.locale ?? account.locale ?? null,
        languages: client.languages ?? account.languages ?? [],
        timezone: timezone ?? account.timezone ?? null,
        preferences: {
          theme: client.theme ?? null,
          colorScheme: client.colorScheme ?? null,
          reducedMotion: client.reducedMotion ?? null,
        },
        appVersion: client.appVersion ?? null,
        lastSeen: seen,
        lastAuthTime: user.authTime || account.lastAuthTime || null,
        devices: trimmedDevices,
        deviceCount: Object.keys(trimmedDevices).length,
        activity: { lastActiveDate: today, activeDays, dayStreak, longestDayStreak },
        sessionCount: FieldValue.increment(1),
        updatedAt: nowTs,
      };
      if (!accountSnap.exists) {
        accountDoc.createdAt = nowTs;
        accountDoc.firstSeen = {
          ...seen,
          referrer: client.referrer ?? null,
          landingPath: client.landingPath ?? null,
          utm: client.utm ?? null,
        };
      }
      if (isNewSignIn) {
        accountDoc.signInCount = FieldValue.increment(1);
        accountDoc.lastSignInAt = Timestamp.fromMillis(user.authTime);
      }
      tx.set(r.account, accountDoc, { merge: true });

      const lastSeenMs = account.lastSeen?.at?.toMillis?.() ?? 0;
      const quiet = now - lastSeenMs > SESSION_EVENT_GAP_MS || account.lastSeen?.deviceId !== deviceId;
      if (created) {
        addEvent(tx, r.events, { type: 'account_created', data: { imported, provider: user.provider } }, { deviceId, country: geo.country ?? null });
      } else if (imported) {
        addEvent(tx, r.events, { type: 'guest_imported', data: {} }, { deviceId });
      }
      if (isNewSignIn) {
        addEvent(tx, r.events, { type: 'signed_in', data: { provider: user.provider } }, { deviceId, country: geo.country ?? null });
      } else if (quiet && !created) {
        addEvent(tx, r.events, { type: 'session_resumed', data: {} }, { deviceId, country: geo.country ?? null });
      }
      if (lastActive !== today) bumpCounters(tx, r.stats, { activeUserDays: 1 });

      return {
        created,
        imported,
        user: publicUser(userDoc, fallbackName),
        account: {
          email: user.email,
          emailVerified: user.emailVerified,
          provider: user.provider,
          activeDays,
          dayStreak,
          longestDayStreak,
          deviceCount: Object.keys(trimmedDevices).length,
          memberSince: toJson(accountSnap.exists ? account.createdAt ?? nowTs : nowTs),
        },
      };
    });

    return result;
  },
});

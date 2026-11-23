import { createHandler, consumeRate } from '../server/http.js';
import { refs, addEvent, bumpCounters, nameFromEmail, publicUser, userCounters, FieldValue, Timestamp, SCHEMA_VERSION } from '../server/repository.js';
import { runAction, normalizeProgress, pickProgress } from '../server/progressEngine.js';
import { ensureSandbox } from '../server/sandbox.js';
import { HttpError } from '../server/errors.js';

/**
 * POST /api/progress { action, ... }
 * Server-authoritative game actions: quest (re-validates the submitted code,
 * JS runs in a QuickJS sandbox), quiz, guide, pet, onboarding, skipOnboarding,
 * reset. Every change is transactional and leaves an activity event.
 */
export default createHandler({
  async POST({ req, user }) {
    if (req.body.action === 'quest') await ensureSandbox();
    const now = Date.now();
    const nowTs = Timestamp.fromMillis(now);
    const r = refs(user.uid);
    const fallbackName = nameFromEmail(user.email);

    return r.db.runTransaction(async (tx) => {
      const [userSnap, limitsSnap] = await tx.getAll(r.user, r.limits);
      if (!userSnap.exists) {
        throw new HttpError(409, 'session_required', 'Conta ainda não iniciada. Recarregue a página.');
      }
      const rate = consumeRate(limitsSnap, { bucket: 'progress', limit: 40, windowMs: 60_000, now });

      const existing = userSnap.data();
      const limits = limitsSnap.exists ? limitsSnap.data() : {};
      const current = normalizeProgress(existing, fallbackName);
      const result = runAction(current, req.body, { now, lastPetAt: limits.lastPetAt ?? 0 });
      const next = pickProgress(result.progress);

      const changed = JSON.stringify(next) !== JSON.stringify(pickProgress(current));
      if (changed || result.counters || result.xpEarned) {
        tx.update(r.user, {
          ...next,
          schemaVersion: SCHEMA_VERSION,
          updatedAt: nowTs,
          ...(result.xpEarned ? { lifetimeXp: FieldValue.increment(result.xpEarned) } : {}),
          ...userCounters(result.counters),
        });
      }

      tx.set(r.limits, { ...rate, ...(result.lastPetAt ? { lastPetAt: result.lastPetAt } : {}) }, { merge: true });
      addEvent(tx, r.events, result.event);
      if (result.solution) {
        tx.set(r.solutions.doc(result.solution.questId), {
          ...result.solution,
          acceptedAt: nowTs,
        });
      }
      bumpCounters(tx, r.stats, {
        ...(result.counters ?? {}),
        ...(result.xpEarned ? { xpAwarded: result.xpEarned } : {}),
      });

      const nextDoc = { ...existing, ...next, lifetimeXp: (existing.lifetimeXp ?? 0) + (result.xpEarned ?? 0) };
      return { outcome: result.outcome, user: publicUser(nextDoc, fallbackName) };
    });
  },
});

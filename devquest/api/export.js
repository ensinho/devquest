import { createHandler } from '../server/http.js';
import { refs, toJson } from '../server/repository.js';
import { HttpError } from '../server/errors.js';

/** GET /api/export — every document stored about the caller, as a JSON download (LGPD art. 18). */
export default createHandler({
  async GET({ user, res }) {
    const r = refs(user.uid);
    const [userSnap, accountSnap, events, solutions] = await Promise.all([
      r.user.get(),
      r.account.get(),
      r.events.orderBy('at', 'desc').limit(2000).get(),
      r.solutions.get(),
    ]);
    if (!userSnap.exists) throw new HttpError(404, 'session_required', 'Conta ainda não iniciada.');
    res.setHeader('Content-Disposition', `attachment; filename="devquest-dados-${new Date().toISOString().slice(0, 10)}.json"`);
    return {
      exportedAt: new Date().toISOString(),
      uid: user.uid,
      profile: toJson(userSnap.data()),
      account: toJson(accountSnap.exists ? accountSnap.data() : null),
      solutions: solutions.docs.map((d) => ({ id: d.id, ...toJson(d.data()) })),
      events: events.docs.map((d) => ({ id: d.id, ...toJson(d.data()) })),
    };
  },
});

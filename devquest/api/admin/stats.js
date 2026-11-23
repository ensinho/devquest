import { createHandler } from '../../server/http.js';
import { getAdmin } from '../../server/firebaseAdmin.js';
import { toJson } from '../../server/repository.js';

/** GET /api/admin/stats — aggregate counters and the newest players. Requires the `admin` custom claim. */
export default createHandler(
  {
    async GET() {
      const { db } = getAdmin();
      const users = db.collection('users');
      const [stats, total, recent] = await Promise.all([
        db.collection('stats').doc('global').get(),
        users.count().get(),
        users.orderBy('createdAt', 'desc').limit(20).get(),
      ]);
      return {
        totals: { users: total.data().count, ...toJson(stats.exists ? stats.data() : {}) },
        recent: recent.docs.map((d) => {
          const u = d.data();
          return {
            uid: d.id,
            name: u.name,
            level: u.level,
            mascotStage: u.mascotStage,
            questsCompleted: (u.completedQuests ?? []).length,
            lifetimeXp: u.lifetimeXp ?? 0,
            createdAt: toJson(u.createdAt ?? null),
            updatedAt: toJson(u.updatedAt ?? null),
          };
        }),
      };
    },
  },
  { admin: true }
);

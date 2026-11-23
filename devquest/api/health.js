import { createHandler } from '../server/http.js';

/** GET /api/health — liveness probe (no auth, no data). */
export default createHandler(
  {
    async GET() {
      return {
        ok: true,
        service: 'devquest-api',
        env: process.env.VERCEL_ENV ?? 'local',
        commit: (process.env.VERCEL_GIT_COMMIT_SHA ?? '').slice(0, 7) || null,
        time: new Date().toISOString(),
      };
    },
  },
  { auth: false }
);

/**
 * Grants or revokes the `admin` custom claim (used by GET /api/admin/stats).
 *   FIREBASE_SERVICE_ACCOUNT_B64=... node scripts/set-role.mjs <uid|email> [admin|player]
 * The user must sign in again (or refresh their token) to pick up the change.
 */
import { getAdmin } from '../server/firebaseAdmin.js';

const [target, role = 'admin'] = process.argv.slice(2);
if (!target) {
  console.error('usage: node scripts/set-role.mjs <uid|email> [admin|player]');
  process.exit(1);
}
const { auth } = getAdmin();
const user = target.includes('@') ? await auth.getUserByEmail(target) : await auth.getUser(target);
const claims = { ...(user.customClaims ?? {}) };
if (role === 'admin') claims.admin = true;
else delete claims.admin;
await auth.setCustomUserClaims(user.uid, claims);
console.log(`${user.uid}: claims = ${JSON.stringify(claims)}`);

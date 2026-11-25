/**
 * Live end-to-end check of the deployed API + Firestore rules.
 * Creates throwaway accounts (@devquest-test.example) and deletes them at the end.
 * Reads VITE_FIREBASE_API_KEY (and optional VITE_FIREBASE_PROJECT_ID) from the
 * environment or devquest/.env.local.
 *   node scripts/e2e-api.mjs https://devquest-rpg.vercel.app
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return;
  for (const raw of readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    const val = line.slice(eq + 1).trim().replace(/^(['"])(.*)\1$/, '$2');
    if (key && !(key in process.env)) process.env[key] = val;
  }
}

loadEnvFile(resolve(dirname(fileURLToPath(import.meta.url)), '../.env.local'));

const BASE = process.argv[2] ?? 'https://devquest-rpg.vercel.app';
const KEY = process.env.VITE_FIREBASE_API_KEY;
const PROJECT = process.env.VITE_FIREBASE_PROJECT_ID ?? 'dev-quest-70563';

if (!KEY) {
  console.error('Missing VITE_FIREBASE_API_KEY. Set it in devquest/.env.local or pass it via the environment.');
  process.exit(1);
}
const email = `e2e-${Date.now()}@devquest-test.example`;
const password = `T3st-${Math.random().toString(36).slice(2)}!`;
const results = [];
const check = (name, ok, extra = '') => {
  results.push(ok);
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? `  — ${extra}` : ''}`);
};

async function idt(path, body) {
  const r = await fetch(`https://identitytoolkit.googleapis.com/v1/${path}?key=${KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Referer: `${BASE}/` },
    body: JSON.stringify(body),
  });
  return r.json();
}

async function api(path, token, { method = 'GET', body, origin = BASE } = {}) {
  const r = await fetch(`${BASE}/api/${path}`, {
    method,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...(origin ? { Origin: origin } : {}),
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return { status: r.status, data: await r.json().catch(() => ({})) };
}

async function firestore(method, path, token, body) {
  const r = await fetch(`https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/${path}`, {
    method,
    headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  return r.status;
}

const signUp = await idt('accounts:signUp', { email, password, returnSecureToken: true });
let token = signUp.idToken;
const uid = signUp.localId;
check('sign up via Firebase Auth', Boolean(token));

const guest = { name: 'E2E', completedQuests: ['q1', 'q99'], level: 50, currentXp: 99999, onboardingCompleted: true, bondPoints: 5000 };
const s = await api('session', token, {
  method: 'POST',
  body: { client: { deviceId: 'e2e-device-0001', timezone: 'America/Fortaleza', theme: 'dark', screen: { w: 1440, h: 900, dpr: 1 } }, guestProgress: guest },
});
check('session bootstraps + imports guest', s.status === 200 && s.data.created && s.data.imported, `status ${s.status}`);
check('import recomputes forged level/xp', s.data.user?.level < 5 && s.data.user?.completedQuests?.join() === 'q1', `level ${s.data.user?.level}`);

const bad = await api('progress', token, { method: 'POST', body: { action: 'quest', questId: 'q2', code: '<a>nope</a>' } });
check('server rejects invalid quest code (422)', bad.status === 422, bad.data?.error?.code);

const good = await api('progress', token, { method: 'POST', body: { action: 'quest', questId: 'q2', code: '<a href="https://devquest.app">DevQuest</a>' } });
check('server accepts valid quest code', good.status === 200 && good.data.user.completedQuests.includes('q2'), `status ${good.status} ${good.data?.error?.message ?? ''}`);

const locked = await api('progress', token, { method: 'POST', body: { action: 'quest', questId: 'q18', code: 'const arr=[1,2,3,4,5]; const newArr = arr.filter(n=>n>2);' } });
check('locked skill refused (409)', locked.status === 409, locked.data?.error?.code);

const patch = await api('me', token, { method: 'PATCH', body: { name: 'Ana <b>', level: 99 } });
check('profile patch rejects unknown fields', patch.status === 400, patch.data?.error?.message);
const patch2 = await api('me', token, { method: 'PATCH', body: { name: 'Ana <b>', theme: 'light' } });
check('profile patch sanitises name', patch2.status === 200 && patch2.data.user.name === 'Ana b', patch2.data.user?.name);

const me = await api('me', token);
check('GET /api/me returns account view', me.status === 200 && me.data.account.deviceCount === 1 && me.data.account.email === email);

const evil = await api('me', token, { origin: 'https://evil.example' });
check('foreign origin blocked', evil.status === 403);

// Firestore rules (client SDK path, REST equivalent)
check('rules: owner can read own doc', (await firestore('GET', `users/${uid}`, token)) === 200);
check('rules: owner cannot write own doc', (await firestore('PATCH', `users/${uid}?updateMask.fieldPaths=level`, token, { fields: { level: { integerValue: '99' } } })) === 403);
check('rules: private metadata hidden', (await firestore('GET', `users/${uid}/private/account`, token)) === 403);
check('rules: other users hidden', (await firestore('GET', 'users/someone-else', token)) === 403);
check('rules: stats hidden', (await firestore('GET', 'stats/global', token)) === 403);
check('rules: unauthenticated denied', (await firestore('GET', `users/${uid}`)) === 403);

const exp = await api('export', token);
check('export contains events + solutions', exp.status === 200 && exp.data.events.length >= 2 && exp.data.solutions.length === 1, `events ${exp.data.events?.length} solutions ${exp.data.solutions?.length}`);
check('export holds metadata (device, geo, ipHash, no raw IP)', Boolean(exp.data.account?.devices?.['e2e-device-0001']) && /^[0-9a-f]{24}$/.test(exp.data.account?.lastSeen?.ipHash ?? '') , JSON.stringify(exp.data.account?.lastSeen?.geo ?? {}));

// JS quest validated inside the QuickJS sandbox on Vercel: unlock JS by importing a second throwaway account
const s2 = await idt('accounts:signUp', { email: `js-${email}`, password, returnSecureToken: true });
await api('session', s2.idToken, { method: 'POST', body: { client: {}, guestProgress: { completedQuests: ["q1","q2","boss-html","q4","q-css-grid","boss-css"] } } });
const js = await api('progress', s2.idToken, { method: 'POST', body: { action: 'quest', questId: 'q7', code: 'const hero = "Kitsuby"; console.log(hero);' } });
check('JS quest validated in QuickJS sandbox', js.status === 200 && js.data.user.completedQuests.includes('q7'), `status ${js.status} ${js.data?.error?.message ?? ''}`);
const escape = await api('progress', s2.idToken, { method: 'POST', body: { action: 'quest', questId: 'q18', code: 'const arr=[1,2,3,4,5]; const newArr = typeof process === "undefined" ? [0] : [3,4,5]; arr.filter(()=>1);' } });
check('sandbox has no process (escape attempt fails)', escape.status === 422, escape.data?.error?.code);
const loop = await api('progress', s2.idToken, { method: 'POST', body: { action: 'quest', questId: 'q18', code: 'arr.filter(x=>x); while(true){}' } });
check('infinite loop is cut off', loop.status === 422, `status ${loop.status}`);
await api('me', s2.idToken, { method: 'DELETE' });

const admin = await api('admin/stats', token);
check('admin endpoint forbidden for players', admin.status === 403);

// burst → rate limit
let limited = false;
for (let i = 0; i < 45 && !limited; i += 1) {
  const r = await api('progress', token, { method: 'POST', body: { action: 'pet' } });
  if (r.status === 429) limited = true;
}
check('rate limiter kicks in', limited);

const del = await api('me', token, { method: 'DELETE' });
check('delete account (fresh login)', del.status === 200 && del.data.deleted, `status ${del.status}`);
const after = await idt('accounts:signInWithPassword', { email, password, returnSecureToken: true });
check('auth user removed', Boolean(after.error));

console.log(`\n${results.filter(Boolean).length}/${results.length} passed`);
process.exit(results.every(Boolean) ? 0 : 1);

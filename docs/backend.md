# DevQuest Backend — Accounts, API & Deploy

Production: **https://devquest-rpg.vercel.app** (Vercel project `devquest`, Firebase project `dev-quest-70563`).

## Architecture

```text
Browser (React)                     Vercel (gru1, Node 24)                 Firebase (southamerica-east1)
───────────────                     ──────────────────────                 ─────────────────────────────
Guest  → localStorage only
Account→ Firebase Auth (email/senha) ─ ID token ─►  api/*  (firebase-admin) ─► Firestore (Admin SDK, bypasses rules)
       ← onSnapshot users/{uid} (read-only, enforced by firestore.rules) ◄──────────────────────────────┘
```

- **Writes only through the API.** `firestore.rules` gives the browser `get` on its own `users/{uid}` (plus `events`, `solutions`) and nothing else. Every progress change is a transaction in `api/progress.js`.
- **Server-authoritative progress.** The API re-runs the same curriculum validators (`src/utils/codeValidator.js`, `src/data/gameData.js`) and XP rules (`src/utils/progress.js`) the client uses for its optimistic UI. Forged XP/levels are impossible; guest progress is imported by **replaying** claimed ids through the real rules (`rebuildProgress`).
- **Learner JS never runs in the API process.** Quests that evaluate code use `runSnippet` (`src/utils/snippetRunner.js`); the server swaps in a QuickJS WebAssembly sandbox (`server/sandbox.js`: 16 MB heap, 512 KB stack, 150 ms deadline, no host bindings).

## Endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/health` | liveness (no auth) |
| POST | `/api/session` | bootstrap/migrate account, import guest progress (new accounts only), record device/geo/sign-in metadata |
| GET | `/api/me` | profile + curated account view |
| PATCH | `/api/me` | `name`, `companionName`, `avatarId`, `accessoryId` (must be unlocked), `soundEnabled`, `theme` |
| DELETE | `/api/me` | erase all documents + auth user (requires sign-in < 10 min; client re-auths with password) |
| POST | `/api/progress` | `{action}`: `quest` (code re-validated), `quiz`, `guide`, `pet` (4 s server cooldown), `onboarding` (spell re-checked), `skipOnboarding`, `reset` |
| GET | `/api/export` | LGPD export: profile, account metadata, solutions, events |
| GET | `/api/admin/stats` | aggregate counters + newest players (`admin` custom claim) |

Errors are always `{ error: { code, message }, requestId }` with PT-BR messages.

## Firestore layout

| Path | Contents | Browser access |
|---|---|---|
| `users/{uid}` | progress, `lifetimeXp`, `counters`, `preferences`, timestamps, `schemaVersion: 2` | owner read |
| `users/{uid}/events/{id}` | activity log (`quest_completed`, `quiz_answered`, `signed_in`, …) | owner read |
| `users/{uid}/solutions/{questId}` | accepted code per quest | owner read |
| `users/{uid}/private/account` | email, provider, sign-in count, devices (≤ 8: browser, OS, screen, …), first/last seen (country/region/city, salted IP hash), locale, timezone, UTM/referrer, day streak | none |
| `users/{uid}/private/limits` | rate-limit windows, pet cooldown | none |
| `stats/global` | counters (users, quests, XP awarded, …) | none |
| `audit/{id}` | anonymised deletion log | none |

Legacy documents (written by the old client) are normalised and migrated on the user's next `/api/session`.

## Security controls

- ID tokens verified with revocation check; anonymous providers refused.
- Origin allow-list (`ALLOWED_ORIGINS` + Vercel URLs), JSON-only bodies ≤ 64 KB, whitelisted and length-capped fields, control/bidi characters stripped.
- Per-user fixed-window rate limits inside the same transaction (session 20/min, progress 40/min, profile 30/min).
- Dedicated service account `devquest-api@…` with only `roles/datastore.user` + `roles/firebaseauth.admin`; key stored only as an encrypted Vercel env var.
- Firebase browser key restricted to the project's referrers and Firebase APIs.
- Headers (`vercel.json`): CSP, HSTS, `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`. CSP allows `'unsafe-eval'` only because the in-browser editor evaluates the learner's own code.
- Privacy: no raw IP, no coordinates, export + delete in the UI (Herói & Mascote → Conta).

## Operations

```bash
cd devquest
npm run deploy:vercel          # production deploy (vercel CLI, linked project)
npm run deploy:rules           # firestore.rules + indexes (firebase CLI)
node scripts/e2e-api.mjs https://devquest-rpg.vercel.app   # 25 live checks with throwaway accounts
FIREBASE_SERVICE_ACCOUNT_B64=… node scripts/set-role.mjs <uid|email> admin
```

Environment variables (Vercel, production + preview): `VITE_FIREBASE_*` (public web config), `FIREBASE_SERVICE_ACCOUNT_B64` (sensitive), `IP_HASH_SALT` (sensitive), `ALLOWED_ORIGINS`.
Local dev: `.env.local` holds the public `VITE_FIREBASE_*`; set `VITE_API_PROXY=https://devquest-rpg.vercel.app` to use the deployed API from `npm run dev`.

**Rotating the service-account key:** Google Cloud console → IAM → Service accounts → `devquest-api` → Keys → add key (JSON) → base64 the `{project_id, client_email, private_key}` subset → `vercel env add FIREBASE_SERVICE_ACCOUNT_B64 production --sensitive --force` → redeploy → delete the old key.

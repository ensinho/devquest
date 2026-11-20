# DevQuest Wounds — Lessons Learned & Regression Prevention

> Every hard bug, layout breakage, or architectural trap gets a concise entry here: **Symptom → Root Cause → Prevention Rule**. Read this before modifying core flows so we never regress.

---

### W-001 — `App.jsx` `useEffect` self-triggering loop on `skills`
- **Symptom:** Continuous re-renders whenever `userProgress` is loaded.
- **Root Cause:** `App.jsx` had `useEffect(..., [userProgress, skills])` calling `setSkills(newSkills)` on every execution, creating a brand-new array reference each cycle.
- **Prevention Rule:** Derive computed `skills` status with `useMemo` from `initialSkillsData` + `userProgress.completedQuests` instead of mirroring derived state via `useEffect` + `setState`.

### W-002 — Tailwind CDN colliding with Vite boilerplate & inline `<style>`
- **Symptom:** Unpredictable cascade, external runtime network dependencies (`cdn.tailwindcss.com`, `script-tutorials.com`), slow First Paint, and zero Light Mode support.
- **Root Cause:** `devquest/index.html` loaded Tailwind Play CDN while `src/index.css` kept the stock Vite template styles and `App.jsx` injected raw CSS strings.
- **Prevention Rule:** All design tokens and component styles live in `devquest/src/styles/` (3-layer CSS token pipeline). Never load CSS frameworks from runtime CDNs or inject `<style>` blocks inside JSX.

### W-003 — Hardcoded hex values & nested `border-2` boxes breaking theme parity
- **Symptom:** Visual clutter ("box-in-box-in-box"), unreadable elements if theme switches, and inconsistent gold/red/purple shades (`#16213E`, `#E94560`, `#F0A500`, `#0D1117`).
- **Root Cause:** Components applied `border-2` at every nesting level and hardcoded hex colors directly in JSX classes and inline SVGs.
- **Prevention Rule:** Follow the **0-1-2 containment rule** (use `--color-bg` → `--color-surface` → `--color-surface-raised`) and allow **zero raw hex/rgb values** outside `tokens.primitives.css`.

### W-004 — Non-semantic interactive controls & hidden mascot on mobile
- **Symptom:** Skill tree nodes cannot be tabbed/activated via keyboard (`<div onClick>`), and the signature mascot disappears completely below `1024px` (`hidden lg:block`).
- **Root Cause:** Interactive nodes used `<div>` instead of `<button>`, and mascot positioning relied on absolute desktop-only placement.
- **Prevention Rule:** Every interactive node must be a semantic `<button>` with `:focus-visible` ring and `aria-pressed`/`aria-disabled`. Every signature element (Companion Camp, Skill Map) must have a first-class mobile layout at `390×844`.

### W-005 — Auth wall blocking immediate portfolio inspection
- **Symptom:** First-time visitors (or local environments without Firebase `.env`) hit a blank "Aguardando um Herói..." screen behind an auth modal.
- **Root Cause:** `App.jsx` gated the entire `<main>` tree behind `currentUser && userProgress` with no guest/demo fallback.
- **Prevention Rule:** Support a zero-friction Guest / Local Sandbox mode (persisted in `localStorage`) so anyone opening DevQuest experiences the Skill Map, Quests, and Companion Camp within 3 seconds, with optional account sync via Firebase.

### W-006 — Mixed copy languages across screens
- **Symptom:** Auth modal and loading screen appeared in PT-BR while header, quests, guides, and character page were in EN.
- **Root Cause:** Features were written incrementally without a single copy/locale standard.
- **Prevention Rule:** Keep product copy consistent in the chosen primary language (or backed by a single i18n dictionary) and check copy consistency during visual QA.

### W-007 — Eager Firebase initialization crashing boot when `.env` is absent
- **Symptom:** Blank screen and `Firebase: Error (auth/invalid-api-key)` thrown before React mounts in local preview/Playwright runs without `.env`.
- **Root Cause:** `src/firebase/config.js` called `initializeApp()` and `getAuth()` unconditionally at module evaluation time, and `main.jsx` eagerly imported `App.jsx`.
- **Prevention Rule:** Guard Firebase initialization behind `isFirebaseConfigured` (checking `VITE_FIREBASE_API_KEY`, `projectId`, `appId`), gracefully degrade when `auth`/`db` are null, and lazy-load isolated showcase/preview routes.

### W-008 — Fixed floating mentor dock overlapping right-column quest actions & duplicate mascot on screen
- **Symptom:** On Desktop `1440×900`, the fixed bottom-right `CompanionMentorDock` sat directly on top of the second quest's "Iniciar" button while `CompanionCamp` was already visible at the top. Also `.dq-btn-secondary` blended into `.dq-quest-item` because both used `--color-surface-raised`.
- **Root Cause:** Fixed dock rendered unconditionally on `QuestsPage` without checking scroll visibility of `CompanionCamp`, and secondary buttons shared the exact same surface token as their parent card.
- **Prevention Rule:** Only show the floating dock when `CompanionCamp` is scrolled out of view (`scrollY > 260`) or on secondary pages, reserve bottom padding (`7rem`) for scroll clearance, and step secondary buttons inside raised cards back to `--color-surface` + `--shadow-sm`.

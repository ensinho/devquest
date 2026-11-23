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

### W-009 — Translucent `opacity < 1` on locked skill nodes leaking SVG edges underneath
- **Symptom:** On Desktop `Constellation Skill Map` (especially Warm Vellum Light Mode), dashed SVG prerequisite paths visibly bled through locked skill node cards.
- **Root Cause:** `.dq-skill-node--locked` used `opacity: 0.72` instead of an opaque recessed surface token, making the card semi-transparent over the SVG layer.
- **Prevention Rule:** Keep node surfaces 100% opaque (`opacity: 1`) using dedicated semantic tokens (`--color-node-available-bg`, `--color-node-locked-bg`) and express locked state via solid tonal recess + muted ink (`--skill-node-ink-locked`).

### W-010 — Mini companion accessories covering 36px avatars & onboarding orb overlapping stage selector
- **Symptom:** On `variant="mini"` (`36px`) avatars in mobile hero/onboarding cards, the `</>` spark pill covered Kitsuby's face; on `390×844` onboarding Step 1, `.dq-onb-orb--c` (`bottom: 24%`) collided with the stage pill bar.
- **Root Cause:** Accessory overlays assumed camp/altar dimensions (`108px+`), and decorative orbs used bottom-relative offsets overlapping bottom-anchored controls on compact screens.
- **Prevention Rule:** Suppress floating accessory overlays on `variant="mini"` (`36px`), anchor decorative orbs strictly in upper/side clear zones, and visually inspect every real PNG at `390×844`.

### W-011 — CodeEditor caret drifting horizontally away from syntax-highlighted text
- **Symptom:** Typing inside `CodeEditor` showed the blinking caret offset several pixels from the highlighted characters (`<h1>|</h1>` visually landed over `/`).
- **Root Cause:** `<pre class="dq-ide-highlight"><code>` let browser UA `code { font-family: monospace }` override `JetBrains Mono` while `<textarea>` used `JetBrains Mono`; additionally `.dq-tok-tag`/`.dq-tok-keyword` applied `font-weight: 600` and ligatures/scrollbars differed between the two layers.
- **Prevention Rule:** Explicitly inherit all font/box metrics onto `.dq-ide-code`, enforce uniform `font-weight: 400`, `font-variant-ligatures: none`, and matching `overflow-y: scroll; scrollbar-gutter: stable;` on both `.dq-ide-highlight` and `.dq-ide-textarea`.

### W-012 — Inline CSS variable silently beat a responsive size override
- **Symptom:** At `390×844` the habitat fox rendered at 168px and was pushed under the speech bubble; the mobile `--px-size: 116px` rule did nothing.
- **Root Cause:** `PixelCompanion` writes `--px-size` in its inline `style`, and an inline custom property always out-ranks a stylesheet declaration of the same property on the same element.
- **Prevention Rule:** Size sprites from JS (`size` prop via a `matchMedia` hook) or override the consuming property (`width`/`height`) from a more specific selector — never re-declare a variable the component sets inline.

### W-013 — `preserveAspectRatio="xMidYMax slice"` cropped the scene's landmarks
- **Symptom:** On the tall desktop habitat the den, sign post and a cloud were invisible; on the wide mobile habitat they appeared.
- **Root Cause:** `slice` scales to cover; in a portrait container only the middle ~35% of the 192-unit scene stays visible.
- **Prevention Rule:** Keep every meaningful scene prop inside the central band (x≈62–130 of 192) and capture both a portrait (desktop column) and a landscape (mobile) habitat before shipping.

### W-014 — Mobile dock clearance created desktop scroll on a one-screen layout
- **Symptom:** The desktop home was designed to fit `100dvh` but the page still scrolled by ~80px.
- **Root Cause:** `.dq-app` reserves `6rem` bottom padding for the mobile floating dock at every width.
- **Prevention Rule:** One-screen pages override the shell's bottom padding at `min-width: 769px` (`.dq-app--quests`) and size themselves with `calc(100dvh - chrome)`.

### W-015 — The anti-slop gate flagged a comment
- **Symptom:** `tokens.test.js` failed on a new stylesheet with no `!important` declarations.
- **Root Cause:** The file's header comment literally said "no !important"; the gate is a plain regex over the file.
- **Prevention Rule:** Describe the rule in words ("no specificity hacks") in comments; new stylesheets are picked up by the gate automatically (every `src/styles/*.css` except primitives).

### W-016 — Server-side quest validation would have been remote code execution
- **Symptom:** Moving quest validation to the API meant `q7`/`q18` checks called `new Function(learnerCode)()` inside the Vercel function — any player could read `process.env` (service-account key).
- **Root Cause:** Curriculum checks were written for the browser, where executing the learner's own code is harmless.
- **Prevention Rule:** Quest checks never call `new Function`/`eval` directly; they use `runSnippet` (`src/utils/snippetRunner.js`). The API installs the QuickJS sandbox (`server/sandbox.js`) before validating. `server/progressEngine.test.js` asserts the sandbox has no `process`/`require`/`fetch` and kills infinite loops.

### W-017 — `ERR_REQUIRE_ESM` crashed every Vercel function at boot
- **Symptom:** All `/api/*` returned `FUNCTION_INVOCATION_FAILED`; logs showed `require() of ES Module jose/dist/webapi/index.js from jwks-rsa`.
- **Root Cause:** `firebase-admin@14` pulls `jwks-rsa@4` → ESM-only `jose@6`; Vercel's function loader doesn't support `require(esm)` even on Node 24.
- **Prevention Rule:** Pin `firebase-admin@^13` (jwks-rsa 3 / CJS jose 4) until Vercel supports it; after any backend dependency bump, `curl /api/health` on the deployment before aliasing.

### W-018 — Playwright `networkidle` never settles for signed-in pages
- **Symptom:** `page.goto(..., { waitUntil: 'networkidle' })` timed out after sign-in.
- **Root Cause:** The Firestore `onSnapshot` listener keeps a long-poll WebChannel open.
- **Prevention Rule:** Use `waitUntil: 'load'` + explicit `waitForSelector` for authenticated captures.

### W-019 — Double "show password" eye in Edge
- **Symptom:** The password field showed Edge's native reveal button next to ours.
- **Root Cause:** Chromium-Edge adds `::-ms-reveal` to `type=password` inputs.
- **Prevention Rule:** Any custom reveal toggle hides `::-ms-reveal` and `::-ms-clear` on its input.

### W-020 — Mirrored card showing through the pack mid-flip
- **Symptom:** During the onboarding pack tear, the companion card appeared mirrored and see-through on top of the pack.
- **Root Cause:** The card rotates from `rotateY(180deg)` while stacked above the pack; its back face renders by default and it sat on a higher z-index.
- **Prevention Rule:** Any flip-in reveal sets `backface-visibility: hidden` on the flipping element and starts *behind* the thing it emerges from; stack reveal layers in one grid cell (`grid-area: 1/1`) instead of toggling `position: absolute`, so nothing jumps when the state flips.
- **Verify:** Scrub the timeline with `document.getAnimations().forEach(a => { a.pause(); a.currentTime = t })` and screenshot key frames.

### W-021 — WAAPI animations finished instantly in production only
- **Symptom:** The trail fox teleported and stations popped open with no flip on the deployed build; in dev everything animated.
- **Root Cause:** `durationToken()` did `parseFloat(getPropertyValue('--duration-flip'))`; the production CSS minifier rewrites `640ms` as `.64s`, so the duration became 0.64 ms.
- **Prevention Rule:** Never `parseFloat` a CSS time and assume ms. Read motion tokens through `parseCssTime`/`durationToken` (`src/utils/motion.js`, unit-tested) and verify motion on `npm run build` + `vite preview`, not only `npm run dev`.
- **Verify:** Sample `document.getAnimations()` in real time (rAF loop) after the trigger; a run that disappears right after its delay has a ~0 duration.

### W-022 — Level-up badge numeral invisible; toast covering the celebration sheet
- **Symptom:** "Nível N" rendered as a plain mint disc; on phones the quest toast sat on top of the level-up sheet's title.
- **Root Cause:** The face was `--color-gold-soft` (translucent) over a solid `--color-gold` ring, with `--color-gold` text — mint on mint. The toast's `--z-toast` outranks `--z-modal`.
- **Prevention Rule:** Soft (`-soft`) tokens are tints, never a standalone face: layer them over an opaque surface and pair them with the matching `-ink`. While a modal is open, the toast drops under the backdrop (`motion.css`).

### W-023 — Home transitions never played after a quest
- **Symptom:** Completing a quest never showed the station unlock flip or the trail lighting up.
- **Root Cause:** `Trail` diffed statuses against a `useRef` of its previous render, but quests are won in the Arena and the Home remounts on the way back, so "previous" was always the current state.
- **Prevention Rule:** Changes earned on another page are diffed against what the player last *saw* (module-scope snapshot, see `lastSeenTrail` / `lastSeenXp`), and the catch-up choreography plays on arrival. Scrub it with `page.clock.pauseAt()` so app timers can't cancel runs mid-capture.

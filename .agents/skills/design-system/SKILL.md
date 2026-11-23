---
name: design-system
description: DevQuest's 3-layer CSS token architecture, the "Toca" world (Noite na Toca dark / Dia na Toca light), the pixel-art fox companion, 0-1-2 containment, typography, and authorial visual signature. Mandatory reading before editing any UI or CSS.
---

# DevQuest Design System — "Modern Arcane Codex"

## 1. Visual Identity Philosophy — "Toca"
DevQuest is a **cozy pixel-fox learning game**: a hand-drawn fox (Kitsuby → Pyrokit → Archkits) lives in a little den on your screen, walks a serpentine trail of 9 skill stations with you, and reacts to every line of code. The interface is soft, round and chunky (Fredoka + Nunito, generous radii, "squishy" buttons with a 3px bottom edge) while the code surfaces stay precise (JetBrains Mono).

**Anti-AI-Slop Mandate:**
- No cream-paper + serif editorial look, no near-black + single neon accent dashboard.
- No glow spam, no gradient text, no unicode glyphs standing in for icons (use lucide or authored pixel SVG).
- No eyebrow labels above headings; no coloured `border-left` callouts.
- No hardcoded colours or eyeballed margins.

## 2. Three-Layer CSS Token Architecture (`devquest/src/styles/`)

All styling flows strictly downward through 3 layers:

1. **Layer 1 — Primitives (`tokens.primitives.css`):**
   Raw palette ramps (`--primitive-obsidian-*`, `--primitive-vellum-*`, `--primitive-ember-*`, `--primitive-gold-*`, `--primitive-teal-*`, `--primitive-crimson-*`, `--primitive-violet-*`), spacing (`--space-1` to `--space-16`), radii (`--radius-sm` to `--radius-full`), type scale (`--text-2xs` to `--text-3xl`), motion durations & curves (`--duration-press/fast/base/slow/flip/shake/travel/reveal`, `--ease-out/pop/standard/flip/drawer/travel`), z-index layers. JS motion (WAAPI) reads the same tokens through `src/utils/motion.js` (`play`, `shake`, `durationToken`), which also no-ops under reduced motion.
   *Never reference primitive tokens directly in page/component CSS.*

2. **Layer 2 — Semantic (`tokens.semantic.css`):**
   Maps primitives to meaning across **Dark (`Noite na Toca`, default)** and **Light (`Dia na Toca`, `[data-theme="light"]`)**:
   - Surfaces: `--color-bg`, `--color-surface`, `--color-surface-raised`, `--color-surface-sunken`, `--color-overlay`
   - Ink: `--color-text`, `--color-text-secondary`, `--color-text-muted`, `--color-text-inverse`
   - Meaning:
     - `--color-primary` / `--color-primary-hover` / `--color-primary-soft` (**Ember Amber**): ONLY primary CTA, active selection, `:focus-visible` ring.
     - `--color-gold` / `--color-gold-soft` (**Relic Gold**): ONLY earned achievements (XP gained, Level Up, completed skills, mastery seals).
     - `--color-live` / `--color-live-soft` (**Arcane Teal**): ONLY unlocked/available skills, live dependency paths, passing code validation.
     - `--color-danger` / `--color-danger-soft` (**Crimson Seal**): ONLY Boss Fights, syntax/test errors, destructive actions (logout/reset).
     - `--color-arcane` / `--color-arcane-soft` (**Arcane Violet**): ONLY mascot evolution milestones and Final Full-Stack Mastery node.
   - Hairlines & depth: `--color-border-subtle`, `--color-border-strong`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--focus-ring`.

3. **Layer 3 — Components (`tokens.components.css`):**
   Dedicated component tokens (`--btn-primary-bg`, `--card-bg`, `--skill-node-*`, `--xp-bar-*`, `--companion-*`, `--modal-*`, `--code-bg`) and reusable primitive utility classes.

**Golden Rule:** **Zero raw hex / rgb / rgba / hsl values in screen or component CSS.** Any exception is a lint/review failure.

---

## 3. Containment Rules (0-1-2 Rule)
- **Level 0 (`--color-bg`):** Full-viewport canvas.
- **Level 1 (`--color-surface`):** Primary structural regions (Header, Skill Map container, Side Panel, Guides grid container). Separated by tonal step + subtle hairline *only when needed*.
- **Level 2 (`--color-surface-raised`):** Interactive items, active cards, modals, popovers, code blocks.
- **NEVER nest `1px` or `2px` solid borders** (bordered card inside bordered panel inside bordered page). Prefer tonal contrast + spacing (`--space-4`, `--space-6`).

---

## 4. Single Primary CTA Rule
- Every screen and every modal has **at most ONE primary filled button** (`--btn-primary-bg`).
- Secondary actions use subtle tonal fill (`--btn-secondary-bg`) or ghost treatment (`--btn-ghost-*`).
- Destructive actions (Logout, Reset) are never styled as primary amber CTAs; use `--color-danger` ghost or outline styling.

---

## 5. Typography System
- **Display (`--font-display`):** `Fredoka` (rounded, chunky; width axis 75–125) — wordmark, page titles, station names, quest titles, plates, numerals.
- **UI & Reading (`--font-sans`):** `Nunito` — body copy, labels, descriptions.
- **Code (`--font-mono`):** `JetBrains Mono` — editor, starter code, validator checks.
- **Numeric Stability:** `font-variant-numeric: tabular-nums` (`.dq-tabular`) on XP, levels, ratios (`2/4`); XP and level in the header roll digit-by-digit (`RollingNumber`).

## 6. Authorial Visual Signature
1. **The Toca (`components/home/Habitat.jsx`, `habitatArt.js`):** a pixel landscape that is day in light theme and night in dark (stars, moon, fireflies). The sun/moon is a real theme toggle. The fox (`PixelCompanion`) wanders, looks around, naps after 40s without input (wakes on any pointer/key), eats a snack, takes pets (pixel hearts), asks the quick quiz in its speech bubble, and XP floats up like a damage number. Reduced motion freezes every loop.
2. **The Serpentine Trail (`components/home/Trail.jsx`, `trailLayout.js`):** 9 stations snaking left→right→left; progress rings in earned mint, locked stations show a paw-print card back, live segments flow in cobalt, the mini fox stands on the current station. Coming back from a won quest replays a catch-up: the station stamps, the segment lights, the next station flips open and the mini fox walks there (`Trail.jsx`, diffed against the last trail the player saw).
3. **Companion stages recolour the app** through `--color-stage*` and `[data-companion-stage]`. Sprite inks live in `--pixel-s{1,2,3}-*` and stay the same in both themes.
4. **Desktop home fits one screen** (Toca · Trail · Station panel, `height: 100dvh - chrome`); mobile stacks Toca → next quest → trail.

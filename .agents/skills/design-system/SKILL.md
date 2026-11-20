---
name: design-system
description: DevQuest's 3-layer CSS token architecture, Obsidian Scriptorium (Dark) & Warm Vellum (Light) themes, 0-1-2 containment rules, typography hierarchy, and authorial visual signature. Mandatory reading before editing any UI or CSS.
---

# DevQuest Design System — "Modern Arcane Codex"

## 1. Visual Identity Philosophy
DevQuest blends the **editorial clarity of modern developer tools** (clean typography, calm tonal layering, crisp tabular numbers) with the **tactile warmth of a tactical RPG codex** (amber forge highlights, relic gold achievements, living pixel-art companion, constellation skill map).

**Anti-AI-Slop Mandate:**
- No generic purple-neon SaaS gradients.
- No heavy glassmorphism stacked over body text.
- No decorative glow spam or rainbow borders.
- No hardcoded colors or "eyeballed" margins.

---

## 2. Three-Layer CSS Token Architecture (`devquest/src/styles/`)

All styling flows strictly downward through 3 layers:

1. **Layer 1 — Primitives (`tokens.primitives.css`):**
   Raw palette ramps (`--primitive-obsidian-*`, `--primitive-vellum-*`, `--primitive-ember-*`, `--primitive-gold-*`, `--primitive-teal-*`, `--primitive-crimson-*`, `--primitive-violet-*`), spacing (`--space-1` to `--space-16`), radii (`--radius-sm` to `--radius-full`), type scale (`--text-2xs` to `--text-3xl`), motion durations & curves (`--duration-press`, `--duration-fast`, `--duration-base`, `--ease-pop`, `--ease-out`), z-index layers.
   *Never reference primitive tokens directly in page/component CSS.*

2. **Layer 2 — Semantic (`tokens.semantic.css`):**
   Maps primitives to meaning across **Dark (`Obsidian Scriptorium`, default)** and **Light (`Warm Vellum`, `[data-theme="light"]`)**:
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
- **Display (`--font-display`):** `Fraunces` (variable serif with subtle optical sizing) — reserved for brand wordmark, page H1/H2, Boss titles, Level Up numerals, and Guide titles. Never use for micro-labels (`< 14px`) or dense button rows.
- **UI & Reading (`--font-sans`):** `Plus Jakarta Sans` — clean, high-legibility UI chrome, quest descriptions, and guide prose.
- **Code (`--font-mono`):** `JetBrains Mono` — Challenge editor, inline code tokens, and Grimoire code snippets.
- **Numeric Stability:** Always apply `font-variant-numeric: tabular-nums` (`class="tabular-nums"`) on XP counters, levels, progress ratios (`2/4`), and timers.

---

## 6. Authorial Visual Signature
1. **Companion Camp (Living Pixel-Art Habitat):**
   - Render mascot sprites with `image-rendering: pixelated` so pixel edges stay razor-sharp.
   - Frame the mascot inside a calm circular/arched SVG pedestal whose ambient aura reflects its current evolution stage (`--color-live` → `--color-primary` → `--color-arcane`) and displays contextual tips rather than static filler.
   - Provide a full habitat on desktop and a compact companion pill/card on mobile (`390×844`) — never `display: none` the mascot on mobile.
2. **Constellation Skill Map:**
   - Curved SVG paths (`cubic Bézier`) linking prerequisites; locked paths are muted dashed hairlines, active paths glow subtly in `--color-live`, mastered paths turn `--color-gold`.
   - On mobile (`< 768px`), adapt gracefully to a connected vertical quest trail so no node shrinks below `44px` or causes horizontal overflow.

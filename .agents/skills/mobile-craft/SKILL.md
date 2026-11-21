---
name: mobile-craft
description: Native-grade mobile UI/UX design and React mobile web/PWA development doctrine for DevQuest. Covers editorial onboarding carousels, thumb-zone ergonomics, floating pill bottom docks, stacked hero summary cards, scannable lists, safe-area insets, and touch performance.
---

# DevQuest Mobile Craft — Design & Development Doctrine

> **Core Rule:** Mobile is **never** a shrunk-down desktop. Design and engineer for one-handed thumb ergonomics, immediate visual calm, tactile feedback, and zero vertical or horizontal clutter at `390×844` (and `360px`–`430px` modern phones).

---

## 1. Editorial Onboarding Carousel Pattern (3-Slide Clean Flow)

Inspired by best-in-class consumer mobile onboarding (full-bleed expressive artwork + razor-sharp typography + single thumb-zone pill CTA):

- **Zero Background Noise:** On mobile (`< 768px`), onboarding fills the viewport cleanly (`100dvh`) instead of hovering awkwardly over a cluttered blurred header.
- **50 / 50 Vertical Rhythm:**
  1. **Upper Hero Artwork Card (46%–54% of viewport height):** Rounded container (`var(--radius-2xl)` / `28px`), curated stage-harmonized atmosphere, expressive character/mascot focal point + subtle floating contextual orbs, optional compact interactive preview inside the card.
  2. **Segmented Pill Progress Bar:** 3 horizontal pill tracks (`--- --- ---`) centered cleanly beneath the card — tappable to jump between slides and synchronized with horizontal touch swipes (`touchStart` → `touchEnd`, threshold `>= 42px`).
  3. **Editorial Copy Block:** Short 2-line Display headline (`--font-display`) + 1 calm supporting line (`max-width: 34ch`). Never cram 3 forms and 2 paragraphs onto Slide 1.
  4. **Pinned Thumb-Zone Action Stack:** One full-width high-contrast pill primary CTA (`border-radius: var(--radius-full)`, `min-height: 3.25rem` / `52px`) + one quiet ghost text action directly beneath ("Pular introdução" / "Voltar"), padded safely above `env(safe-area-inset-bottom)`.
- **Zero Vertical Clipping Guarantee:** Every slide must fit cleanly inside `390×844` so the Primary CTA is **always visible without scrolling**.

---

## 2. Thumb-Zone Architecture & Navigation Shell

- **Single-Row Compact Mobile Top Bar (`< 768px`):**
  - **Left:** Compact identity pill (Class Sigil avatar + Hero Name & Level badge).
  - **Right:** At most 2–3 circular `44×44px` ghost/raised icon buttons (Sound, Theme, Sync).
  - **NEVER** stack 3 rows of brand + XP + multi-line wrapping nav tabs in the mobile header.
- **Floating Pill Bottom Navigation Dock (`< 768px`):**
  - Anchored cleanly at `bottom: max(0.875rem, env(safe-area-inset-bottom))`, centered pill (`border-radius: var(--radius-full)`), translucent elevated surface (`--color-surface-glass` + `backdrop-filter: blur(14px)`) + `--shadow-lg`.
  - Strictly **3–4 single-word destinations** (`Mapa`, `Arena`, `Grimórios`, `Herói`) — never wrap labels onto two lines.
  - Active destination receives a tactile pill highlight (`--color-primary-soft` + `--color-primary` ink) and `min-height: 44px`.
  - Reserve bottom clearance (`padding-bottom: calc(6.25rem + env(safe-area-inset-bottom))`) on `.dq-app` so content and toasts never collide with the dock.
  - Hide redundant floating FABs (`CompanionMentorDock`) on mobile `< 768px` so there are zero overlapping floating layers.

---

## 3. Stacked Hero Summary Card & Scannable Mobile Lists

- **Hero Progress Card + Quick-Action Tray:**
  - Top card: Stage-harmonized surface displaying primary metric (`Nível` + `XP` in crisp `tabular-nums`), compact progress track, live Companion presence, and a tactile circular launch CTA (`▶`).
  - Attached sunken tray directly below: 3 equal-width thumb actions separated by subtle vertical hairlines (`Continuar`, `Carinho`, `Quiz +15`).
- **Action-First Mobile Ordering:**
  - Never bury the user's primary actionable quests behind 1,200px of locked nodes or uncollapsed sidebars.
  - On `QuestsPage` mobile: Hero Progress Card → Active Skill Quests (immediately tappable!) → Scannable Compact Constellation Trail (token-list style rows: icon tile + title/subtitle + tabular progress `0/3` + status indicator) → Companion Camp.
  - On `ArenaPage` mobile: Collapsible 1-row Quest Selector Drawer at top → Immediate Quest Header, Mentor Strip, and Lexical Code Editor above the fold.

---

## 4. Touch Ergonomics, Safe Areas & Mobile Web Resilience

1. **Viewport & Safe Areas:**
   - `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />`
   - Use `100dvh` (with `100vh` fallback) for full-height overlays and onboarding.
   - Respect `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.
2. **Touch Targets & Hit Slop:**
   - Minimum `44×44px` on every interactive control (`button`, tab, chip, close button, skill row).
   - Minimum `8px` (`--space-2`) separation between adjacent tappable targets.
   - Apply `touch-action: manipulation` on interactive controls to eliminate double-tap zoom delay.
3. **Typography & Input Guardrails:**
   - All `<input>`, `<textarea>`, and `<select>` elements MUST be `>= 16px` (`var(--text-base)`) below `768px` to prevent iOS Safari auto-zoom.
   - Keep `font-variant-numeric: tabular-nums` on every counter, XP bar, and ratio.
4. **Bottom Sheets & Gestures:**
   - Standard modals (`GuideModal`, `AuthModal`, celebrations) anchor cleanly to the bottom below `640px` with rounded top corners (`--radius-2xl`), a subtle top drag-indicator pill, and `env(safe-area-inset-bottom)` padding.
   - Guard hover styles strictly behind `@media (hover: hover) and (pointer: fine)` to prevent sticky hover states on touch screens.
5. **Token & Theme Parity:**
   - Every mobile surface, floating dock, onboarding hero artwork card, and stacked tray MUST use 3-layer CSS tokens (`tokens.primitives.css` → `tokens.semantic.css` → `tokens.components.css`) and pass both **Dark (Obsidian Scriptorium)** and **Light (Warm Vellum)** visual inspection at `390×844`.

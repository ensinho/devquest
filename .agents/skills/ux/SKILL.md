---
name: ux
description: Interaction design, perceived latency, feedback loops, keyboard ergonomics, accessibility (WCAG AA/AAA), mobile native feel, and performance budget for DevQuest. Mandatory reading before designing or editing UI flows.
---

# DevQuest UX Craft & Interaction Standards

## 1. Fewer Steps, Immediate Response, Honest Waiting
- **3-Second Portfolio Impact:** A visitor opening DevQuest should immediately see the Skill Map, Companion Camp, and an actionable quest — never a dead-end wall. Offer local Guest/Demo persistence alongside Firebase auth.
- **Tactile Press Feedback:** Every interactive button/node responds within `100ms` (`transform: scale(0.97)` using `--duration-press`).
- **Reversible Over Interruptive:** Prefer undoable toasts (`aria-live="polite"`) over nagging confirmation modals whenever an action is safely reversible.
- **Honest Progress & Micro-Celebration:**
  - Submitting a quest shows immediate inline validation (syntax hint vs test failure), smooth XP bar fill (`tabular-nums`), and a clean non-blocking celebration when leveling up.
  - Never freeze the UI during animations; all transitions must be interruptible (`transform`/`opacity` composite-only).

---

## 2. Keyboard-First Ergonomics
Every core workflow must be 100% operable without a mouse:
- `Tab` / `Shift+Tab`: logical focus order with high-contrast `:focus-visible` ring (`--focus-ring`).
- `Esc`: closes active modal, drawer, or popover and clears active search/filter.
- `↑` `↓` `←` `→` + `Enter`: navigate skill nodes, quest items, and guide cards.
- `Ctrl/Cmd + Enter`: run/check code inside `ChallengeModal`.
- `/`: focus quick filter/search when present.

---

## 3. Accessibility (A11y — Non-Negotiable)
- **Contrast:** Minimum WCAG AA (`4.5:1` body, `3:1` large text/UI icons) in **both** Dark (*Obsidian Scriptorium*) and Light (*Warm Vellum*) modes. Target AAA (`>= 7:1`) for primary body text.
- **Semantic HTML:**
  - Use `<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, `<button>`, `<dialog>`/`role="dialog"`.
  - **Zero `<div onClick>` or `<span onClick>`** — interactive elements must be native `<button>` or `<a href>`.
  - Icon-only buttons (close, theme toggle, mobile menu) MUST have descriptive `aria-label`.
  - Dynamic feedback (code errors, XP gained, theme changed) MUST announce via `aria-live="polite"` (or `assertive` for critical errors).
- **Focus Trapping:** Modals trap focus inside the dialog and restore focus to the trigger button on close.
- **Reduced Motion:** Respect `@media (prefers-reduced-motion: reduce)` by disabling float/pulse/spin animations and replacing spring transitions with instant or subtle opacity fades.

---

## 4. Mobile with Native App Feel (`390×844`)
- **Touch Targets:** Minimum `44×44px` hit area for every tappable button, node, tab, and close icon.
- **Bottom Sheets:** Below `640px`, modals (`ChallengeModal`, `GuideModal`, `AuthModal`) anchor to the bottom as sheets with comfortable thumb reach.
- **No iOS Auto-Zoom:** All `<input>`, `<textarea>`, and `<select>` elements use `font-size >= 16px` on mobile viewports.
- **Sticky Hover Guard:** Wrap hover-only visual shifts in `@media (hover: hover) and (pointer: fine)` so touch taps never leave buttons visually "stuck".
- **Zero Horizontal Overflow:** Validate `document.documentElement.scrollWidth <= window.innerWidth` at `390px`. Nothing clipped behind sticky headers or bottom bars.

---

## 5. Performance & Public Web Readiness
- Preconnect/self-host typography (`Fraunces`, `Plus Jakarta Sans`, `JetBrains Mono`) with `display=swap`.
- Lazy-load heavy modals or guide views where appropriate; set `loading="lazy"` and `decoding="async"` on secondary images.
- Keep `main.jsx` free of external CDN scripts (no `cdn.tailwindcss.com`, no third-party hotlinked textures/Pinterest avatars in production).
- Include proper `<title>`, `<meta name="description">`, theme-color, and Open Graph (`og:title`, `og:description`, `og:image` `1200×630`) metadata for clean portfolio link previews.

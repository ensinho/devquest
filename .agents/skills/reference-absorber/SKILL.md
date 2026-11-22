---
name: reference-absorber
description: Process for capturing, dissecting, and translating external UI libraries, design inspiration sites, and local screenshots into DevQuest's 3-layer CSS token system without copying raw styles or generic templates.
---

# DevQuest Reference Absorber

## 1. Core Principle: Absorb Craft, Translate to Tokens
External UI libraries and reference screenshots are **craft ingredients**, never copy-paste templates.
- **NEVER** import raw unstyled colors, hardcoded Tailwind hex utilities, or foreign typography from a reference.
- **ALWAYS** translate proportions, micro-interactions, keyboard mechanics, and composition rhythm into DevQuest's 3-layer tokens (`tokens.primitives.css` → `tokens.semantic.css` → `tokens.components.css`).

---

## 2. Local Reference Vault (`design-references/`, Gitignored)
Keep all absorbed references organized inside `design-references/`:
- `design-references/07-UI-LIBRARIES-AND-SITES.md` — Curated catalog of UI libraries mapped to specific DevQuest components and anti-slop guardrails.
- `design-references/08-VISUAL-INSPIRATION-LOG.md` — Structured dissections of screenshots or live product patterns saved in `captures/`.
- `design-references/captures/` — Local PNG captures of inspiring interfaces, animations, or visual benchmarks.

---

## 3. Absorption Workflow (4 Steps)
When the user shares a screenshot, URL, or UI library component to take inspiration from:
1. **Archive:** Save local captures inside `design-references/captures/` with a descriptive kebab-case name (`yyyy-mm-dd-source-pattern.png`).
2. **Dissect (4 Lenses):** Log an entry in `design-references/08-VISUAL-INSPIRATION-LOG.md` breaking down:
   - *Layout & Density:* Grid structure, negative space ratio, elevation steps.
   - *Interaction & Motion:* Hover/press feel, transitions (`transform`/`opacity`), keyboard cues.
   - *Visual Hierarchy:* How the single primary CTA stands out; how secondary metadata stays quiet.
   - *What to Reject (Anti-Slop):* Excess blur, neon glow, nested borders, or unreadable light-mode shortcuts.
3. **Translate to DevQuest Tokens:** Explicitly map the pattern onto `--color-bg`, `--color-surface`, `--color-surface-raised`, `--color-primary`, `--color-gold`, `--color-live`, `--space-*`, and `--duration-*`.
4. **Verify Visually & Through the Anti-Slop Gate:** Run `npm test` (including `tokens.test.js` Anti-Slop Gate: zero raw hex, zero `--primitive-*` leaks, zero `!important` hacks, zero CDN/inline `<style>` slop) and validate in Playwright across Desktop Dark (`1440×900`), Desktop Light (`1440×900`), and Mobile (`390×844`).

---

## 4. Absorbed Craft Patterns (Always Prefer These Over Heavy Libraries)
- **Automated Anti-Slop Gate (UIZZE / pen.dev pattern):** Keep design rules executable inside `devquest/src/styles/tokens.test.js` so regressions fail deterministically before commit.
- **Zero-JS Animated SVG Micro-Icons (ThinkUI pattern):** Prefer lightweight inline SVG + CSS `stroke-dashoffset` / `transform` micro-motions (`AnimatedCheckIcon`, subtle icon hover tilt, CTA arrow glide) over heavy icon animation runtimes.
- **Tactile Codex Paper Motion (PaperAnimation pattern):** Use subtle composite-only (`transform`/`opacity`) parchment card lifts and passing-check stamp pops that honor DevQuest's *Warm Vellum* & *Obsidian Scriptorium* codex identity while respecting `prefers-reduced-motion: reduce`.
- **Spatial Grounding Without WebGL Bloat (Tripo3D discipline):** Ground 2.5D companions with soft directional floor shadows and optical depth rather than shipping multi-megabyte WebGL scenes on mobile.

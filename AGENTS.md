# AGENTS.md — DevQuest Engineering & Product Craft Playbook

> **Universal operating manual** for every AI agent (Antigravity/Gemini, Claude Code, Codex, Cursor) working in this repository.
> Goal: craft **DevQuest** into a clean, accessible, creative, responsive, portfolio-grade RPG Full-Stack learning product.

---

## 1. Repository Layout

```text
devquest/ (git root)
├── AGENTS.md                         # This playbook (source of truth)
├── GEMINI.md                         # Fast-boot pointer for Gemini / Antigravity
├── .gitignore                        # Ignores design-references/, env files, builds
├── docs/
│   ├── index.md                      # Modular documentation map
│   └── wounds.md                     # Bug & regression diary (never repeat mistakes)
├── .agents/
│   └── skills/
│       ├── design-system/SKILL.md    # 3-layer tokens, 0-1-2 containment, visual identity
│       ├── ux/SKILL.md               # Flows, latency, keyboard, a11y, mobile craft
│       ├── mobile-craft/SKILL.md     # Native-grade mobile onboarding, thumb-zone, floating dock
│       ├── visual-fixer/SKILL.md     # Full-stack UI debugging & Playwright verification
│       └── reference-absorber/SKILL.md # Translating external UI references into tokens
├── design-references/                # Gitignored local vault of UI libraries & prints
└── devquest/                         # React 19 + Vite 7 + Firebase web app
    ├── index.html
    ├── package.json
    └── src/
        ├── styles/                   # 3-layer CSS tokens (primitives -> semantic -> components)
        ├── utils/                    # Pure logic & theme utilities (unit tested)
        ├── components/               # Reusable UI components & modals
        ├── pages/                    # Quests, Guides, Character
        └── assets/                   # Pixel-art mascot sprites & static assets
```

All app commands (`npm run ...`) run inside `devquest/`.

---

## 2. Mandatory Reading Before Any UI Edit

Before modifying CSS, layout, components, pages, or modals, you **MUST** read:
1. `.agents/skills/design-system/SKILL.md`
2. `.agents/skills/ux/SKILL.md`
3. `.agents/skills/mobile-craft/SKILL.md`
4. `.agents/skills/visual-fixer/SKILL.md`
5. `.agents/skills/reference-absorber/SKILL.md`
6. `docs/wounds.md` (to avoid re-introducing known regressions)
7. Relevant catalogs in `design-references/` when introducing new interaction patterns.

---

## 3. Non-Negotiable Visual & Design System Rules

1. **3-Layer CSS Tokens Only:** `primitives` → `semantic` → `components` (`devquest/src/styles/`).
   - **Zero raw hex/rgb/rgba/hsl values** in screen or component CSS. Every color, spacing step, radius, font size, and transition duration must reference a semantic or component token.
2. **Dark + Light Parity:** Every view and state must work in **Obsidian Scriptorium (Dark)** and **Warm Vellum (Light)** (`data-theme="dark" | "light"`). Never leave light mode broken or unreadable.
3. **Calm Containment (0-1-2 Rule):**
   - Never nest `1px` or `2px` solid borders inside bordered panels inside bordered sections.
   - Separate hierarchy with **tonal elevation** (`--color-bg` → `--color-surface` → `--color-surface-raised`) and generous spacing.
4. **One Primary CTA per Screen / Modal:** Only one element per view/dialog receives the primary `--color-primary` fill. Secondary actions stay tonal or ghost.
5. **Semantic Color Discipline:**
   - `--color-primary` (Ember Amber): primary CTA, selected node, active focus.
   - `--color-gold` (Relic Gold): earned progress only (XP, level up, completed badges).
   - `--color-live` (Arcane Teal): available/unlocked skills, active paths, passing code checks.
   - `--color-danger` (Crimson Seal): Boss Fights, syntax/test errors, destructive actions.
   - `--color-arcane` (Arcane Violet): mascot evolution & Final Mastery node only.
6. **Authorial Visual Signature:** Protect and elevate DevQuest's two signature pieces — the **Companion Camp** (reactive pixel-art mascot habitat) and the **Constellation Skill Map** (living curved dependency graph, vertical trail on mobile).

---

## 4. Visual-First Protocol (Before Coding Multiple Layout Directions)

Whenever a task has **2 or more viable visual/layout directions** (e.g., Skill Map layouts, Companion Camp placements, Hero/Onboarding flows, Challenge Editor layouts):
1. **Do NOT guess directly in production code.**
2. Start the local dev server (`npm run dev` inside `devquest/`).
3. Render isolated preview variants using **Playwright headless** (Chromium/Edge) consuming the **real 3-layer CSS tokens** from `devquest/src/styles/`.
4. Save real PNG captures and present a **comparative Markdown summary** with the PNGs side-by-side (pros, trade-offs, recommendation) for user approval before editing production components.

---

## 5. Parallel Subagent Orchestration (Strictly Disjoint File Ownership)

When a deliverable decomposes into 2+ independent fronts (for example: Header/Nav + Skill Map + Challenge Modal):
1. Spawn parallel subagents where **every subagent owns a strictly disjoint list of files**.
2. **Never allow two subagents to edit the same file** (especially shared state in `App.jsx`, token files, barrel exports, or translation dictionaries).
3. The coordinator owns shared contracts/types/tokens, integrates the outputs, resolves cross-component wiring, and executes the final Verification Gate.

---

## 6. Mandatory Verification Gate (Before Concluding Any Task)

A task is **NOT complete** until all four checks pass in the current state:

1. **Unit Tests:** `npm test` (Vitest) — 100% passing.
2. **Lint (Zero Warnings):** `npm run lint` (`eslint . --max-warnings 0`) — 0 errors, 0 warnings.
3. **Production Build:** `npm run build` (`vite build`) — clean bundle with 0 errors.
4. **Real Visual Inspection (Playwright Headless):**
   Capture and **open/inspect every PNG** across all 3 mandatory viewports:
   - **Desktop Dark:** `1440×900` (`data-theme="dark"`)
   - **Desktop Light:** `1440×900` (`data-theme="light"`)
   - **Mobile:** `390×844` (check both themes when touching shared layout)
   Verify: zero horizontal overflow, zero clipping/truncation, readable contrast (AA/AAA), visible `:focus-visible` states, touch targets `>= 44px` on mobile, and clean 0-1-2 elevation.

---

## 7. Living Memory (`docs/wounds.md`)

Whenever you fix a tricky bug, layout trap, or recurring pitfall, append a concise 5-line entry to `docs/wounds.md` (`Symptom → Root Cause → Prevention Rule`) so the codebase gets stronger with every iteration.

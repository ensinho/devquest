# GEMINI.md — Fast Boot for Gemini / Antigravity Agents

Read `AGENTS.md` in full at the start of any non-trivial session. This file is the quick-reference checklist for Gemini/Antigravity runs in **DevQuest**.

## Mandatory Pre-Flight (UI & Product Tasks)
Before writing or editing any UI/CSS/component code, read all five project skills:
- `.agents/skills/design-system/SKILL.md`
- `.agents/skills/ux/SKILL.md`
- `.agents/skills/mobile-craft/SKILL.md`
- `.agents/skills/visual-fixer/SKILL.md`
- `.agents/skills/reference-absorber/SKILL.md`
- Plus `docs/wounds.md` for known traps.

## Operating Protocols
1. **Visual-First:** If a feature has multiple layout/visual directions, render real PNG previews via Playwright headless over the local Vite dev server (`devquest/`) using our actual CSS tokens, and present a comparative Markdown doc before altering production code.
2. **Disjoint Subagents:** When fanning out work across parallel subagents, assign strictly disjoint file lists. Never let two agents modify the same file; keep integration and final verification in the coordinator.
3. **Zero Raw Hex / 0-1-2 Containment:** Never hardcode hex/rgb colors in screen CSS, never nest `1px`/`2px` borders, and keep strictly **1 primary CTA** per screen or modal.
4. **Mandatory Completion Gate (run inside `devquest/`):**
   - `npm test` (Vitest unit tests pass)
   - `npm run lint` (`eslint . --max-warnings 0` — 0 errors, 0 warnings)
   - `npm run build` (`vite build` succeeds cleanly)
   - Playwright headless visual inspection of real PNGs in **Desktop Dark (`1440×900`)**, **Desktop Light (`1440×900`)**, and **Mobile (`390×844`)** — actually open and inspect each screenshot with `read_file`.

## App Location
- Git root: `C:\Users\Administrador\orca\devquest`
- Vite React app: `C:\Users\Administrador\orca\devquest\devquest`
- CSS Tokens: `C:\Users\Administrador\orca\devquest\devquest\src\styles\`

---
name: visual-fixer
description: Full-stack UI, state, and flow verification specialist using Playwright headless Chromium/Edge against the real Vite dev server across Desktop Dark (1440x900), Desktop Light (1440x900), and Mobile (390x844).
---

# DevQuest Visual Fixer & Verification Protocol

## 1. Mission
Never rely on mental CSS rendering or assumptions. Inspect the **actual rendered pixels** in a real browser engine, catch subtle layout, contrast, truncation, and state bugs, and fix root causes cleanly across React state + CSS tokens.

---

## 2. Visual-First Prototyping Workflow (Multiple Directions)
When tasked with a layout or design decision that has 2–3 strong directions:
1. Ensure the local Vite dev server is running (`npm run dev` inside `devquest/`).
2. Build lightweight isolated preview pages or query-driven preview states (`?preview=variant-a`, `?preview=variant-b`) that import `src/styles/tokens.css` directly.
3. Capture PNGs using Playwright headless across Desktop Dark, Desktop Light, and Mobile.
4. Open and visually inspect every PNG using `read_file`.
5. Present a comparative Markdown summary with embedded/linked PNGs and concrete trade-offs so the user chooses before production components are rewritten.

---

## 3. Mandatory 3-Viewport Inspection Matrix
Before completing any UI change, capture and **visually inspect** all 3 baseline viewports (plus interactive states like open modal/selected skill when touched):

| Target | Viewport | Theme Attribute | Key Checks |
| :--- | :--- | :--- | :--- |
| **Desktop Dark** | `1440×900` | `data-theme="dark"` | Visual hierarchy, 0-1-2 elevation, zero nested borders, 1 primary CTA, balanced 2-column density |
| **Desktop Light** | `1440×900` | `data-theme="light"` | Dia na Toca legibility, AA/AAA contrast on muted text, SVG paths visible, shadows not muddy |
| **Mobile** | `390×844` | `dark` (and `light` on layout changes) | Zero horizontal scroll (`scrollWidth <= innerWidth`), `>=44px` tap targets, readable `>=16px` inputs, Companion Camp & Skill Map usable |

---

## 4. Defect-Hunting Checklist (While Inspecting Every PNG)
Scan each screenshot systematically from top to bottom:
- [ ] **Overflow & Clipping:** Any horizontal scrollbar, cut-off text, clipped modal footer, or badge colliding with icon?
- [ ] **Containment Violation:** Are there nested `1px`/`2px` borders creating visual noise instead of tonal steps?
- [ ] **CTA Dilution:** Is more than one button screaming with primary amber fill on the same screen?
- [ ] **Contrast Failure:** Are muted labels, disabled states, code comments, or SVG arrows faint in Light or Dark mode?
- [ ] **Alignment & Rhythm:** Are icons optically centered with text, numbers using `tabular-nums`, and spacing adhering to `--space-*` steps?
- [ ] **Console & Runtime Hygiene:** Zero uncaught console errors, zero failed network requests (`404`/`500`), zero React hydration/key/effect warnings.

---

## 5. Playwright Headless Execution Notes (Windows)
- Prefer Playwright using system-installed **Microsoft Edge** (`channel: 'msedge'`) or **Chromium** if Playwright browsers are not downloaded, keeping runs fast and deterministic.
- Wait for `document.fonts.ready` and `networkidle` (or explicit element visibility) before `page.screenshot({ fullPage: true })`.
- Store temporary verification scripts in the conversation scratch directory or `tmp-visual-checks/` (gitignored), and clean up stray dev server processes when done.
- Whenever a subtle visual bug is solved, log the lesson in `docs/wounds.md`.

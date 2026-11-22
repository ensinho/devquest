---
name: guided-clarity
description: Cognitive load reduction, progressive disclosure, Hick's/Miller's Law information density budgets, and Duolingo/Linear-inspired guided UX flows for DevQuest. Mandatory reading when organizing screens, dashboards, or learning paths.
---

# DevQuest Guided Clarity — Progressive Disclosure & Cognitive Load Doctrine

> **Core Rule:** Capability should never feel like clutter. Every screen must answer **"What should I do next?"** in under **1.5 seconds**, revealing secondary complexity strictly on demand.

---

## 1. Cognitive Load Laws (Hard Guardrails)

1. **Hick's Law (Choice Discipline):**
   - Limit each visible card or section to **1 primary goal** and **at most 2–3 secondary triggers**.
   - Never dump customization settings (accessories, evolution previews, expression testers) onto the main action dashboard when a dedicated profile screen (`Herói & Mascote`) already owns them.
2. **Miller's Law (Chunking `<= 5` Items):**
   - Group related settings behind clean segmented tabs (`Mascote` | `Herói` | `Sessão`) instead of vertical walls of 20+ controls.
   - Collapse locked future curriculum chapters by default so learners focus on what is playable **right now**.
3. **Zero Duplicate Telemetry:**
   - Never display the same stat or progress bar twice on the same viewport (e.g., if Level + XP bar lives in the Header, do NOT repeat another full XP bar inside the Welcome Hero).
4. **Sherpa Guided Framing (Duolingo Pattern):**
   - Number sequential steps (`1`, `2`, `3`) and explicitly highlight the single active/recommended next quest (`"Próximo passo"` / `"Recomendado agora"`).
   - Provide calm, 1-sentence contextual guidance from Kitsuby rather than walls of technical copy.

---

## 2. Progressive Disclosure Patterns (Linear Pattern)

| Pattern | When to Use in DevQuest | Example |
| :--- | :--- | :--- |
| **Dedicated Home vs. Studio Separation** | Keep Home focused on *orientation + next action*; move deep customization to `Herói & Mascote` | Home shows greeting, Kitsuby tip, Next Mission CTA, and Skill Map; Evolution/Accessories live in `Herói & Mascote` |
| **Collapsed Locked Chapters** | Long curriculum lists where 70%+ items are locked | Arena sidebar shows unlocked skills open, and tucks locked skills inside a 1-click `"Próximas trilhas (8)"` toggle |
| **On-Demand Technical Telemetry (`<details>`)** | Compiler/lexer metrics helpful to advanced devs but noisy for beginners | Arena `Diagnóstico` foregrounds plain-language requirements & checklist; token counts tuck into `"Detalhes do analisador léxico"` |
| **Segmented Customization Tabs** | Multi-concern settings pages (`CharacterPage`) | Tabs `Mascote` · `Herói` · `Sessão` isolate destructive actions (`Reiniciar Progresso`) from playful customization |
| **Inline Expandable Micro-Activity** | Optional bonus activities like Flash Quizzes | `Quiz (+15 XP)` stays a clean single pill until clicked, expanding inline without leaving the page |

---

## 3. Screen Information-Density Audit Checklist

Before finalizing any screen in DevQuest, verify:
- [ ] **1.5-Second Scan Test:** Is the single primary CTA immediately obvious above the fold on `1440×900` and `390×844`?
- [ ] **No Duplicate Widgets:** Are XP bars, mascot avatars, or customization controls shown only once per screen?
- [ ] **Noise Stripped:** Are compiler stats, locked future modules, and destructive actions tucked behind progressive disclosure?
- [ ] **Guided Sequencing:** Does the learner clearly see Step 1 → Step 2 → Boss without guessing?
- [ ] **Breathing Space:** Does the screen feel calm, intentional, and spacious in both **Obsidian Dark** and **Warm Vellum Light**?

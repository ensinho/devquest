# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary (confirmed 2026-11-22):** recruiters and hiring reviewers opening Enzo's portfolio link. They give it about 30 seconds, usually on a laptop, sometimes on a phone from a LinkedIn/GitHub message. They must instantly understand "this is a real, working product" and feel the author's craft.
- **Secondary (inferred from the product itself):** Portuguese-speaking beginners learning web development who actually play through the quests.

## Product Purpose

DevQuest turns a full-stack web curriculum (HTML → CSS → JS → Tokens/UI → React → Node → A11y/Testes → SQL → Maestria) into an RPG: a dependency map of skills, 22 quests with a live in-browser code editor that lexes and validates as you type, short guides ("Grimórios"), and a companion creature that reacts to your code and evolves as you progress. Success = a first-time visitor writes and passes a real line of code within a minute, and a recruiter leaves remembering the companion and the map.

## Positioning

A learning RPG where the code checks are real (custom lexer + validator in `src/utils/`), progress is persisted locally with zero sign-up, and a companion creature with three evolution stages (Kitsuby → Pyrokit → Archkits) reacts to what you type. Built solo as a portfolio piece: React 19 + Vite 7, optional Firebase sync, hand-built token design system with automated anti-slop tests.

## Operating Context

- Opened cold from a link; no account required (guest progress in `localStorage`). Accounts are optional and import the guest progress on sign-up.
- Production: https://devquest-rpg.vercel.app (Vercel functions + Firebase Auth/Firestore; see `docs/backend.md`). GitHub Pages under `/devquest/` remains a guest-only mirror.
- Copy language: PT-BR.

## Capabilities and Constraints

- 9 skills with prerequisites, 22 quests (incl. Boss Fights), 4 guides, quick quizzes, XP/levels, bond points, accessories, 3 companion stages.
- Live code editor with syntax highlighting, checklist and safe HTML preview; Ctrl+Enter validates.
- Accounts (email/password, reset, verification), server-authoritative progress (the API re-validates every quest; learner JS runs in a QuickJS sandbox), activity log, per-quest solutions, device/geo metadata, LGPD export and self-service deletion.
- Themes: dark and light, both mandatory (AGENTS.md).
- 3-layer CSS token pipeline (primitives → semantic → components), zero raw colors outside primitives, enforced by `tokens.test.js`.
- Verification gate: vitest, eslint 0 warnings, vite build, Playwright captures at 1440×900 dark/light and 390×844.

## Brand Commitments

- Name: DevQuest. Companion names and lore (Kitsuby, Pyrokit, Archkits, Grimórios, Arena) are current but the user allowed changing everything.
- Companion art direction (decided 2026-11-23): the original hand-drawn pixel-art fox (Kitsuby → Pyrokit → Archkits) is the heart of the product; the look must stay cute and characterful (user feedback: the card-only redesign "lost the essence"). The v1 blob stays reachable at `?mascot=blob` for comparison only.
- Desktop home must fit one screen; mobile keeps scrolling minimal.
- No third-party IP in shipped UI (existing Pokémon sprites in `src/assets/` must not be used).

## Evidence on Hand

- Real working curriculum and validators in `devquest/src/data/gameData.js` and `devquest/src/utils/`.
- No testimonials, user counts or metrics exist. Never invent them.

## Product Principles

1. Show the working thing first: the editor, the map and the companion are the proof.
2. Zero friction: playable within seconds, no sign-up wall.
3. The companion is a character, not a decoration: it reacts to real events.
4. Every state works in both themes, by keyboard, and at 390px.

## Accessibility & Inclusion

WCAG AA minimum in both themes, keyboard-complete flows, reduced-motion respected, 44px touch targets on mobile.

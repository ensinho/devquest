# DevQuest — Modern Arcane Codex

**Produção:** https://devquest-rpg.vercel.app

> RPG interativo de aprendizado Full-Stack com **Constellation Skill Map**, **20 desafios reais de código com checklist ao vivo**, **Grimórios técnicos** e um **mascote 2.5D evolutivo** (`open-bot-avatar`) que harmoniza o tema inteiro do produto.

---

## Destaques do Produto

- **Mascote 2.5D Evolutivo (`Kitsuby → Pyrokit → Archkits`):** renderizado com `open-bot-avatar`, segue o cursor, reage ao toque/carinho, sobe de **Vínculo**, desbloqueia **6 acessórios**, aplica **Desafios Relâmpago (+15 XP)** e atua como tutor ao vivo dentro da Arena de Código.
- **Tema Dinâmico Sincronizado ao Mascote:** sistema de **CSS Tokens em 3 camadas** (`primitives → semantic → components`) com paridade **Dark (*Obsidian Scriptorium*)** e **Light (*Warm Vellum*)** harmonizando automaticamente para *Toca da Centelha* (Teal), *Forja das Chamas* (Âmbar) e *Observatório Arcano* (Violeta).
- **Onboarding Interativo em 3 Passos:** apresentação animada com o mascote, primeira centelha de código validada ao vivo (+25 XP) e escolha de selo/tema.
- **Contas com backend próprio (opcional):** jogue sem login; ao criar conta o progresso local vai junto. Uma API em Vercel Functions + Firebase Admin revalida cada quest no servidor (JS do aluno roda num sandbox QuickJS/WebAssembly), registra histórico, soluções e dispositivos, e oferece exportação e exclusão de dados (LGPD). Detalhes em [`docs/backend.md`](../docs/backend.md).
- **Acessibilidade & Mobile Nativo (`390×844`):** navegação por teclado, `Ctrl+Enter` na Arena, `Esc` nos modais, alvos de toque `>= 44px`, bottom sheets abaixo de `640px` e suporte a `prefers-reduced-motion`.

---

## Rodando Localmente

```bash
cd devquest
npm install
npm run dev
```

Abra `http://localhost:5173/devquest/`.

- Showcase isolado do Design System: `http://localhost:5173/devquest/?showcase=design-system`
- Forçar replay do Onboarding: `http://localhost:5173/devquest/?onboarding=1`

---

## Scripts de Qualidade (Verification Gate)

```bash
cd devquest
npm test          # Vitest (tokens, tema, progresso, validação open-bot-avatar e integridade das 20 quests)
npm run lint      # ESLint com --max-warnings 0
npm run build     # Bundle de produção Vite
npm run verify    # Roda test + lint + build em sequência
```

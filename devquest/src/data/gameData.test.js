import { describe, it, expect } from 'vitest';
import { INITIAL_SKILLS, INITIAL_QUESTS } from './gameData.js';
import { validateQuestCode } from '../utils/codeValidator.js';

const CANONICAL_SOLUTIONS = {
  q1: '<h1>Welcome to DevQuest</h1>',
  q2: '<a href="https://devquest.app">Abrir Portal</a>',
  'boss-html': '<section><h1>DevQuest</h1><p>Jornada</p><button>Ir</button></section>',
  q4: 'p { color: var(--color-primary); }',
  'q-css-grid': '.cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }',
  'boss-css': '.arena { display: flex; justify-content: center; align-items: center; }',
  q7: 'const hero = "Kitsuby";',
  q18: 'const arr = [1, 2, 3, 4, 5]; const newArr = arr.filter((n) => n > 2);',
  'boss-js': 'async function getQuestData() { const r = await fetch("https://api.devquest.com/quests"); return r.json(); }',
  q5: '<div class="flex items-center justify-center"><p>Oi</p></div>',
  'boss-ui-token': '.card { background-color: var(--color-surface); border-radius: var(--radius-lg); padding: var(--space-4); }',
  q10: '<Hero name="Kitsuby" />',
  'q-react-state': 'function Counter() { const [xp, setXp] = useState(0); }',
  'boss-react': '<ul>{quests.map((q) => <li key={q.id}>{q.title}</li>)}</ul>',
  'q-node-get': 'app.get("/health", (req, res) => res.json({ ok: true }));',
  q19: 'app.post("/users", (req, res) => res.json({ name: req.body.name }));',
  'q-a11y-label': '<button type="button" aria-label="Alternar tema">☀</button>',
  'boss-vitest': 'function runTest() { expect(sum(2, 3)).toBe(5); }',
  'q-sql-where': 'SELECT name FROM users WHERE level >= 5 ORDER BY level DESC;',
  q20: 'SELECT u.name, p.title FROM users u JOIN posts p ON u.id = p.user_id;',
  'boss-sql': 'SELECT category, COUNT(*) FROM skills GROUP BY category;',
  'boss-fullstack': '// React frontend, Express API rota protegida com JWT e banco SQL',
};

describe('gameData quest integrity and lexical validation', () => {
  it('ensures every quest maps to a valid skill and has unique IDs, hints, and checks', () => {
    const skillIds = new Set(INITIAL_SKILLS.map((s) => s.id));
    const questIds = new Set();

    expect(INITIAL_SKILLS).toHaveLength(9);
    expect(INITIAL_QUESTS).toHaveLength(22);

    for (const quest of INITIAL_QUESTS) {
      expect(questIds.has(quest.id), `Duplicate quest id: ${quest.id}`).toBe(false);
      questIds.add(quest.id);
      expect(skillIds.has(quest.skillId), `Unknown skillId: ${quest.skillId}`).toBe(true);
      expect(quest.hint).toBeTruthy();
      expect(quest.hint2).toBeTruthy();
      expect(Array.isArray(quest.checks) && quest.checks.length > 0).toBe(true);
    }
  });

  it('rejects starterCode and passes validateQuestCode on canonical solutions for all 22 quests', () => {
    for (const quest of INITIAL_QUESTS) {
      expect(
        quest.solution(quest.starterCode),
        `Quest ${quest.id} starterCode should not already pass`
      ).toBe(false);

      const answer = CANONICAL_SOLUTIONS[quest.id];
      expect(answer, `Missing canonical solution for ${quest.id}`).toBeTruthy();

      const report = validateQuestCode(quest, answer);
      expect(
        report.isValid,
        `Quest ${quest.id} failed validateQuestCode: ${JSON.stringify(report.diagnostics)}`
      ).toBe(true);
    }
  });
});

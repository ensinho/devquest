import { describe, it, expect } from 'vitest';
import { tokenizeCode, inspectLexicalHealth } from './codeLexer.js';
import { validateQuestCode } from './codeValidator.js';
import { INITIAL_QUESTS } from '../data/gameData.js';

describe('lexical analyzer and structural validator', () => {
  it('tokenizes HTML, CSS, JS, and SQL accurately', () => {
    const html = tokenizeCode('<h1 class="hero">DevQuest</h1>', 'html');
    expect(html.some((t) => t.type === 'tag' && t.value === 'h1')).toBe(true);
    expect(html.some((t) => t.type === 'attr' && t.value === 'class')).toBe(true);
    expect(html.some((t) => t.type === 'string' && t.value === '"hero"')).toBe(true);

    const css = tokenizeCode('.card { color: var(--color-primary); }', 'css');
    expect(css.some((t) => t.type === 'tag' && t.value === '.card')).toBe(true);
    expect(css.some((t) => t.type === 'attr' && t.value === 'color')).toBe(true);
    expect(css.some((t) => t.type === 'string' && t.value === '--color-primary')).toBe(true);

    const js = tokenizeCode('async function run() { return await fetch("/api"); }', 'js');
    expect(js.some((t) => t.type === 'keyword' && t.value === 'async')).toBe(true);
    expect(js.some((t) => t.type === 'function' && t.value === 'fetch')).toBe(true);

    const sql = tokenizeCode('SELECT name FROM users WHERE level >= 5;', 'sql');
    expect(sql.some((t) => t.type === 'keyword' && t.value === 'SELECT')).toBe(true);
    expect(sql.some((t) => t.type === 'number' && t.value === '5')).toBe(true);
  });

  it('catches unclosed tags, unbalanced braces, and unclosed strings', () => {
    const brokenHtml = inspectLexicalHealth('<h1>Welcome to DevQuest', 'html');
    expect(brokenHtml.ok).toBe(false);
    expect(brokenHtml.issues[0]).toContain('<h1>');

    const brokenCss = inspectLexicalHealth('.arena { display: flex;', 'css');
    expect(brokenCss.ok).toBe(false);
    expect(brokenCss.issues[0]).toContain('}');

    const brokenJs = inspectLexicalHealth('const hero = "Kitsuby;', 'js');
    expect(brokenJs.ok).toBe(false);
    expect(brokenJs.issues[0]).toContain('String');
  });

  it('rejects malformed syntax in validateQuestCode and passes clean code', () => {
    const q1 = INITIAL_QUESTS.find((q) => q.id === 'q1');
    const bad = validateQuestCode(q1, '<h1>Welcome to DevQuest');
    expect(bad.isValid).toBe(false);
    expect(bad.diagnostics.length).toBeGreaterThan(0);

    const good = validateQuestCode(q1, '<h1>Welcome to DevQuest</h1>');
    expect(good.isValid).toBe(true);
    expect(good.diagnostics).toEqual([]);
  });
});

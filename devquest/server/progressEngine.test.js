import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { newQuickJSWASMModuleFromVariant } from 'quickjs-emscripten-core';
import releaseVariant from '@jitl/quickjs-singlefile-mjs-release-sync';
import {
  runAction,
  normalizeProgress,
  rebuildProgress,
  applyProfilePatch,
  cleanText,
  LIMITS,
} from './progressEngine.js';
import { createQuickJsRunner } from './sandbox.js';
import { setSnippetRunner } from '../src/utils/snippetRunner.js';
import { createDefaultProgress } from '../src/utils/progress.js';
import { INITIAL_QUESTS, INITIAL_GUIDES } from '../src/data/gameData.js';
import { COMPANION_QUIZZES } from '../src/data/companionAvatars.js';

const fresh = () => normalizeProgress(createDefaultProgress('Ana'));
const ctx = { now: 1_000_000, lastPetAt: 0 };

describe('runAction · quest', () => {
  it('accepts valid code and awards the quest XP', () => {
    const r = runAction(fresh(), { action: 'quest', questId: 'q1', code: '<h1>Welcome to DevQuest</h1>' }, ctx);
    expect(r.progress.completedQuests).toEqual(['q1']);
    expect(r.outcome.xpGained).toBe(INITIAL_QUESTS.find((q) => q.id === 'q1').xp);
    expect(r.event.type).toBe('quest_completed');
    expect(r.solution.code).toContain('Welcome');
  });

  it('rejects code that fails the server re-validation (422)', () => {
    expect(() => runAction(fresh(), { action: 'quest', questId: 'q1', code: '<h1>oi</h1>' }, ctx)).toThrowError(
      expect.objectContaining({ status: 422, code: 'validation_failed' })
    );
  });

  it('refuses quests of a locked skill (409)', () => {
    const locked = INITIAL_QUESTS.find((q) => q.skillId === 'react');
    expect(() => runAction(fresh(), { action: 'quest', questId: locked.id, code: 'x' }, ctx)).toThrowError(
      expect.objectContaining({ status: 409, code: 'skill_locked' })
    );
  });

  it('is idempotent for an already completed quest', () => {
    const once = runAction(fresh(), { action: 'quest', questId: 'q1', code: '<h1>Welcome to DevQuest</h1>' }, ctx);
    const twice = runAction(once.progress, { action: 'quest', questId: 'q1', code: '<h1>Welcome to DevQuest</h1>' }, ctx);
    expect(twice.outcome.alreadyCompleted).toBe(true);
    expect(twice.progress).toBe(once.progress);
  });

  it('rejects unknown quests and oversized code', () => {
    expect(() => runAction(fresh(), { action: 'quest', questId: 'nope', code: 'x' }, ctx)).toThrowError(
      expect.objectContaining({ status: 404 })
    );
    expect(() =>
      runAction(fresh(), { action: 'quest', questId: 'q1', code: 'a'.repeat(LIMITS.code + 1) }, ctx)
    ).toThrowError(expect.objectContaining({ status: 400 }));
  });
});

describe('runAction · quiz, guide, pet, onboarding', () => {
  it('only rewards the correct quiz answer', () => {
    const quiz = COMPANION_QUIZZES[0];
    const wrong = runAction(fresh(), { action: 'quiz', quizId: quiz.id, answerIndex: (quiz.correctIndex + 1) % quiz.options.length }, ctx);
    expect(wrong.outcome.correct).toBe(false);
    expect(wrong.outcome.xpGained).toBe(0);
    const right = runAction(fresh(), { action: 'quiz', quizId: quiz.id, answerIndex: quiz.correctIndex }, ctx);
    expect(right.outcome.correct).toBe(true);
    expect(right.progress.completedQuizzes).toContain(quiz.id);
  });

  it('enforces the pet cooldown on the server clock', () => {
    const first = runAction(fresh(), { action: 'pet' }, { now: 10_000, lastPetAt: 0 });
    expect(first.outcome.rewarded).toBe(true);
    const spam = runAction(first.progress, { action: 'pet' }, { now: 10_500, lastPetAt: first.lastPetAt });
    expect(spam.outcome.rewarded).toBe(false);
    expect(spam.progress.bondPoints).toBe(first.progress.bondPoints);
  });

  it('checks the onboarding spell itself instead of trusting the client', () => {
    const lied = runAction(fresh(), { action: 'onboarding', name: 'Ana', spellCode: '<p>nope</p>' }, ctx);
    expect(lied.outcome.spellPassed).toBe(false);
    expect(lied.outcome.xpGained).toBe(0);
    const real = runAction(fresh(), { action: 'onboarding', name: 'Ana', spellCode: '<h1>DevQuest</h1>' }, ctx);
    expect(real.outcome.xpGained).toBe(25);
    expect(real.progress.onboardingCompleted).toBe(true);
  });

  it('studies a guide once', () => {
    const guideId = INITIAL_GUIDES[0].id;
    const r = runAction(fresh(), { action: 'guide', guideId }, ctx);
    expect(r.outcome.xpGained).toBe(LIMITS.guideXp);
    const again = runAction(r.progress, { action: 'guide', guideId }, ctx);
    expect(again.outcome.alreadyStudied).toBe(true);
  });

  it('rejects unknown actions', () => {
    expect(() => runAction(fresh(), { action: 'giveMeXp' }, ctx)).toThrowError(expect.objectContaining({ status: 400 }));
  });
});

describe('guest import and sanitising', () => {
  it('recomputes XP/level from claimed ids and drops forged numbers', () => {
    const forged = {
      name: 'Hacker<script>',
      level: 99,
      currentXp: 999999,
      mascotStage: 3,
      completedQuests: ['q1', 'q1', 'not-a-quest'],
      bondPoints: 1_000_000,
    };
    const { progress, xpEarned } = rebuildProgress(forged, 'x');
    expect(progress.name).toBe('Hackerscript');
    expect(progress.completedQuests).toEqual(['q1']);
    expect(progress.level).toBeLessThan(5);
    expect(xpEarned).toBe(INITIAL_QUESTS.find((q) => q.id === 'q1').xp);
    expect(progress.bondPoints).toBeLessThanOrEqual(10 + 18 + LIMITS.importExtraBond);
  });

  it('ignores claimed quests whose prerequisites were never met', () => {
    const reactQuest = INITIAL_QUESTS.find((q) => q.skillId === 'react');
    const { progress } = rebuildProgress({ completedQuests: [reactQuest.id] }, 'x');
    expect(progress.completedQuests).toEqual([]);
  });

  it('cleans names: control/bidi characters, brackets and length', () => {
    expect(cleanText(' a‮b\u0000c<>  d ', 32)).toBe('abc d');
    expect(cleanText('x'.repeat(50), 32)).toHaveLength(32);
  });

  it('whitelists profile patch fields and locks accessories', () => {
    expect(() => applyProfilePatch(fresh(), { level: 50 })).toThrowError(expect.objectContaining({ status: 400 }));
    expect(() => applyProfilePatch(fresh(), { accessoryId: 'crown' })).toThrowError();
    const ok = applyProfilePatch(fresh(), { name: '  Bia  ', theme: 'light', soundEnabled: true });
    expect(ok.progress.name).toBe('Bia');
    expect(ok.preferences.theme).toBe('light');
  });
});

describe('QuickJS sandbox for JS quests', () => {
  beforeAll(async () => {
    const QuickJS = await newQuickJSWASMModuleFromVariant(releaseVariant);
    setSnippetRunner(createQuickJsRunner(QuickJS, { deadlineMs: 200 }));
  });
  afterAll(() => setSnippetRunner(null));

  it('validates q7 and q18 inside the sandbox', () => {
    const base = { ...fresh(), completedQuests: INITIAL_QUESTS.filter((q) => ['html', 'css'].includes(q.skillId)).map((q) => q.id) };
    const q7 = runAction(base, { action: 'quest', questId: 'q7', code: 'const hero = "Kitsuby"; console.log(hero);' }, ctx);
    expect(q7.progress.completedQuests).toContain('q7');
    const q18 = runAction(base, { action: 'quest', questId: 'q18', code: 'const arr = [1, 2, 3, 4, 5];\nconst newArr = arr.filter((n) => n > 2);' }, ctx);
    expect(q18.progress.completedQuests).toContain('q18');
  });

  it('has no access to the host (process, require, fetch)', async () => {
    const { runSnippet } = await import('../src/utils/snippetRunner.js');
    expect(runSnippet('const leak = typeof process + typeof require + typeof fetch;', 'leak')).toEqual({
      ok: true,
      value: 'undefinedundefinedundefined',
    });
  });

  it('kills infinite loops by deadline', async () => {
    const { runSnippet } = await import('../src/utils/snippetRunner.js');
    const started = Date.now();
    expect(runSnippet('while (true) {} const hero = "x";', 'hero').ok).toBe(false);
    expect(Date.now() - started).toBeLessThan(2000);
  });
});

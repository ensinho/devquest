import { describe, it, expect } from 'vitest';
import {
  createDefaultProgress,
  deriveSkillsAndClass,
  applyQuestCompletion,
  applyBonusActivity,
  getBondInfo,
} from './progress.js';

describe('game progress, bond affinity, and derived skill tree logic', () => {
  it('starts with HTML5 available and dependent skills locked', () => {
    const { skills, heroClass } = deriveSkillsAndClass([]);
    const html = skills.find((s) => s.id === 'html');
    const css = skills.find((s) => s.id === 'css');
    const js = skills.find((s) => s.id === 'js');

    expect(html.status).toBe('available');
    expect(css.status).toBe('locked');
    expect(js.status).toBe('locked');
    expect(heroClass).toBe('Aprendiz do Códice');
  });

  it('unlocks CSS3 and JS after completing all HTML5 quests and upgrades class', () => {
    const { skills, heroClass } = deriveSkillsAndClass(['q1', 'q2', 'boss-html']);
    expect(skills.find((s) => s.id === 'html').status).toBe('completed');
    expect(skills.find((s) => s.id === 'css').status).toBe('available');
    expect(skills.find((s) => s.id === 'js').status).toBe('available');
    expect(heroClass).toBe('Construtor Semântico');
  });

  it('grants XP, bond points, streak, level up, and evolution without double-counting', () => {
    let state = createDefaultProgress('Enzo');

    const r1 = applyQuestCompletion(state, 'q1');
    expect(r1.xpGained).toBe(35);
    expect(r1.nextProgress.streak).toBe(1);
    expect(r1.nextProgress.bondPoints).toBeGreaterThan(state.bondPoints);
    state = r1.nextProgress;

    const dup = applyQuestCompletion(state, 'q1');
    expect(dup.xpGained).toBe(0);

    const r2 = applyQuestCompletion(state, 'q2');
    expect(r2.evolved).toBe(true);
    expect(r2.newStage).toBe(2);
    state = r2.nextProgress;

    const r3 = applyQuestCompletion(state, 'boss-html');
    expect(r3.leveledUp).toBe(true);
    expect(r3.newLevel).toBe(2);
  });

  it('tracks companion bond level and bonus XP from flash quizzes and studied guides', () => {
    let state = createDefaultProgress('Enzo');
    expect(getBondInfo(state.bondPoints).bondLevel).toBe(1);

    const study1 = applyBonusActivity(state, { xp: 10, bondGain: 12, guideId: 'async' });
    expect(study1.xpGained).toBe(10);
    expect(study1.nextProgress.studiedGuides).toContain('async');
    state = study1.nextProgress;

    // Reading the same guide again does not farm XP
    const studyDup = applyBonusActivity(state, { xp: 10, bondGain: 12, guideId: 'async' });
    expect(studyDup.xpGained).toBe(0);

    const quiz1 = applyBonusActivity(state, { xp: 15, bondGain: 20, quizId: 'quiz-semantic' });
    expect(quiz1.xpGained).toBe(15);
    expect(getBondInfo(quiz1.nextProgress.bondPoints).bondLevel).toBeGreaterThanOrEqual(2);
  });
});

import { describe, it, expect } from 'vitest';
import { validateAvatar } from 'open-bot-avatar';
import {
  COMPANION_STAGES,
  COMPANION_ACCESSORIES,
  COMPANION_QUIZZES,
  isAccessoryUnlocked,
  getCompanionStageForProgress,
  getNextEvolutionRequirement,
} from './companionAvatars.js';

describe('companion open-bot-avatar definitions and cohesion data', () => {
  it('validates all 3 evolutionary stages against the official open-bot-avatar contract', () => {
    expect(COMPANION_STAGES).toHaveLength(3);

    for (const stage of COMPANION_STAGES) {
      const result = validateAvatar(stage.definition);
      expect(
        result.ok,
        `Stage ${stage.id} failed validation: ${JSON.stringify(result.errors ?? [])}`
      ).toBe(true);
      expect(stage.realmName).toBeTruthy();
      expect(stage.elementLabel).toBeTruthy();
    }
  });

  it('scales up physical size and 3D depth across evolutions', () => {
    expect(COMPANION_STAGES[1].sizePx.camp).toBeGreaterThan(COMPANION_STAGES[0].sizePx.camp);
    expect(COMPANION_STAGES[2].sizePx.camp).toBeGreaterThan(COMPANION_STAGES[1].sizePx.camp);
    expect(COMPANION_STAGES[1].depth).toBeGreaterThan(COMPANION_STAGES[0].depth);
    expect(COMPANION_STAGES[2].depth).toBeGreaterThan(COMPANION_STAGES[1].depth);
  });

  it('computes evolution stage, remaining quests, and accessory unlocks accurately', () => {
    expect(getCompanionStageForProgress(0, 1)).toBe(1);
    expect(getCompanionStageForProgress(2, 1)).toBe(2);
    expect(getCompanionStageForProgress(5, 2)).toBe(3);

    const nextFrom1 = getNextEvolutionRequirement(1, 1);
    expect(nextFrom1.nextStage.id).toBe('pyrokit');
    expect(nextFrom1.remainingQuests).toBe(1);
    expect(getNextEvolutionRequirement(3, 6)).toBeNull();

    const scarf = COMPANION_ACCESSORIES.find((a) => a.id === 'scarf');
    expect(isAccessoryUnlocked(scarf, 0, 1)).toBe(false);
    expect(isAccessoryUnlocked(scarf, 0, 2)).toBe(true);
  });

  it('provides well-formed flash quizzes for companion teaching', () => {
    expect(COMPANION_QUIZZES.length).toBeGreaterThanOrEqual(5);
    for (const quiz of COMPANION_QUIZZES) {
      expect(quiz.options.length).toBeGreaterThanOrEqual(3);
      expect(quiz.correctIndex).toBeGreaterThanOrEqual(0);
      expect(quiz.correctIndex).toBeLessThan(quiz.options.length);
    }
  });
});

/**
 * Server-authoritative progress rules. Pure functions (no Firestore) so they
 * are unit-tested and reuse the exact same curriculum, validators and XP math
 * the client uses for its optimistic UI.
 */
import { INITIAL_QUESTS, INITIAL_GUIDES, HERO_SIGILS } from '../src/data/gameData.js';
import {
  COMPANION_QUIZZES,
  COMPANION_ACCESSORIES,
  isAccessoryUnlocked,
} from '../src/data/companionAvatars.js';
import {
  createDefaultProgress,
  applyQuestCompletion,
  applyBonusActivity,
  getBondInfo,
  deriveSkillsAndClass,
} from '../src/utils/progress.js';
import { validateQuestCode } from '../src/utils/codeValidator.js';
import { isSpellPassed } from '../src/utils/onboardingSpell.js';
import { HttpError, badRequest } from './errors.js';

export const LIMITS = Object.freeze({
  code: 20000,
  name: 32,
  companionName: 24,
  petCooldownMs: 4000,
  petBond: 10,
  guideXp: 10,
  guideBond: 12,
  quizBond: 15,
  importExtraBond: 200,
});

const QUEST_BY_ID = new Map(INITIAL_QUESTS.map((q) => [q.id, q]));
const GUIDE_IDS = new Set(INITIAL_GUIDES.map((g) => g.id));
const QUIZ_BY_ID = new Map(COMPANION_QUIZZES.map((q) => [q.id, q]));
const SIGIL_IDS = new Set(HERO_SIGILS.map((s) => s.id));
const ACCESSORY_BY_ID = new Map(COMPANION_ACCESSORIES.map((a) => [a.id, a]));

export const PROGRESS_KEYS = Object.freeze(Object.keys(createDefaultProgress()));

// C0/C1 controls, zero-width and bidi-override characters
// eslint-disable-next-line no-control-regex -- stripping control characters is the point
const CONTROL_CHARS = new RegExp('[\u0000-\u001f\u007f-\u009f\u200b-\u200f\u202a-\u202e\u2066-\u2069]', 'g');

/** Trimmed, single-line, NFC text without control/bidi characters or angle brackets. */
export function cleanText(value, max) {
  if (typeof value !== 'string') return '';
  return value
    .normalize('NFC')
    .replace(CONTROL_CHARS, '')
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function clampInt(value, min, max, fallback) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, Math.floor(n)));
}

function knownIds(list, allowed) {
  if (!Array.isArray(list)) return [];
  return [...new Set(list.filter((id) => typeof id === 'string' && allowed.has(id)))];
}

/** Coerces any stored or client-sent object into a valid progress record. */
export function normalizeProgress(raw = {}, fallbackName = 'Aventureiro') {
  const base = createDefaultProgress(cleanText(fallbackName, LIMITS.name) || 'Aventureiro');
  const source = raw && typeof raw === 'object' ? raw : {};
  return {
    name: cleanText(source.name, LIMITS.name) || base.name,
    companionName: cleanText(source.companionName, LIMITS.companionName),
    level: clampInt(source.level, 1, 999, base.level),
    currentXp: clampInt(source.currentXp, 0, 10_000_000, base.currentXp),
    nextLevelXp: clampInt(source.nextLevelXp, 100, 1_000_000_000, base.nextLevelXp),
    avatarId: SIGIL_IDS.has(source.avatarId) ? source.avatarId : base.avatarId,
    completedQuests: knownIds(source.completedQuests, QUEST_BY_ID),
    studiedGuides: knownIds(source.studiedGuides, GUIDE_IDS),
    completedQuizzes: knownIds(source.completedQuizzes, QUIZ_BY_ID),
    mascotStage: clampInt(source.mascotStage, 1, 3, base.mascotStage),
    accessoryId: ACCESSORY_BY_ID.has(source.accessoryId) ? source.accessoryId : base.accessoryId,
    bondPoints: clampInt(source.bondPoints, 0, 1_000_000, base.bondPoints),
    streak: clampInt(source.streak, 0, 100_000, base.streak),
    soundEnabled: source.soundEnabled === true,
    onboardingCompleted: source.onboardingCompleted === true,
  };
}

export function pickProgress(doc) {
  const out = {};
  for (const key of PROGRESS_KEYS) out[key] = doc[key];
  return out;
}

export function hasAnyProgress(progress) {
  return (
    (progress.completedQuests?.length ?? 0) > 0 ||
    (progress.studiedGuides?.length ?? 0) > 0 ||
    (progress.completedQuizzes?.length ?? 0) > 0 ||
    progress.onboardingCompleted === true
  );
}

function isSkillOpen(progress, skillId) {
  const { skills } = deriveSkillsAndClass(progress.completedQuests);
  return skills.find((s) => s.id === skillId)?.status !== 'locked';
}

function accessoryUnlocked(progress, accessoryId) {
  const accessory = ACCESSORY_BY_ID.get(accessoryId);
  if (!accessory) return false;
  const { bondLevel } = getBondInfo(progress.bondPoints);
  return isAccessoryUnlocked(accessory, progress.completedQuests.length, bondLevel);
}

/**
 * Turns a guest's local progress into a trustworthy record by replaying only
 * the ids it claims, in curriculum order, through the real XP rules. Levels,
 * XP and stage are recomputed; claimed values are never copied.
 */
export function rebuildProgress(claim, fallbackName) {
  const clean = normalizeProgress(claim, fallbackName);
  let progress = {
    ...createDefaultProgress(clean.name),
    companionName: clean.companionName,
    avatarId: clean.avatarId,
    soundEnabled: clean.soundEnabled,
    onboardingCompleted: clean.onboardingCompleted,
  };
  let xp = 0;

  const wanted = new Set(clean.completedQuests);
  let changed = true;
  while (changed) {
    changed = false;
    for (const quest of INITIAL_QUESTS) {
      if (!wanted.has(quest.id) || progress.completedQuests.includes(quest.id)) continue;
      if (!isSkillOpen(progress, quest.skillId)) continue;
      const outcome = applyQuestCompletion(progress, quest.id);
      progress = outcome.nextProgress;
      xp += outcome.xpGained;
      changed = true;
    }
  }
  for (const guideId of clean.studiedGuides) {
    const outcome = applyBonusActivity(progress, { xp: LIMITS.guideXp, bondGain: LIMITS.guideBond, guideId });
    progress = outcome.nextProgress;
    xp += outcome.xpGained;
  }
  for (const quizId of clean.completedQuizzes) {
    const quiz = QUIZ_BY_ID.get(quizId);
    const outcome = applyBonusActivity(progress, { xp: quiz.xp, bondGain: LIMITS.quizBond, quizId });
    progress = outcome.nextProgress;
    xp += outcome.xpGained;
  }

  const extraBond = Math.min(LIMITS.importExtraBond, Math.max(0, clean.bondPoints - progress.bondPoints));
  progress = { ...progress, bondPoints: progress.bondPoints + extraBond };
  if (accessoryUnlocked(progress, clean.accessoryId)) progress.accessoryId = clean.accessoryId;

  return { progress, xpEarned: xp };
}

function requireString(value, field, max) {
  if (typeof value !== 'string' || value.length === 0 || value.length > max) {
    throw badRequest(`Campo "${field}" inválido.`);
  }
  return value;
}

function summarize(outcome) {
  return {
    xpGained: outcome.xpGained ?? 0,
    bondGain: outcome.bondGain ?? 0,
    leveledUp: Boolean(outcome.leveledUp),
    newLevel: outcome.newLevel ?? null,
    evolved: Boolean(outcome.evolved),
    newStage: outcome.newStage ?? null,
  };
}

/**
 * Applies one player action. Returns the next progress, a client-facing
 * outcome, an optional activity event and counters to bump.
 *
 * ctx: { now: number (ms), lastPetAt: number (ms) }
 */
export function runAction(progress, input, ctx) {
  const action = input?.action;

  switch (action) {
    case 'quest': {
      const questId = requireString(input.questId, 'questId', 40);
      const quest = QUEST_BY_ID.get(questId);
      if (!quest) throw new HttpError(404, 'quest_not_found', 'Quest não encontrada.');
      const code = typeof input.code === 'string' ? input.code : '';
      if (code.length === 0 || code.length > LIMITS.code) throw badRequest('Código vazio ou grande demais.');
      if (progress.completedQuests.includes(questId)) {
        return { progress, outcome: { ...summarize({}), alreadyCompleted: true } };
      }
      if (!isSkillOpen(progress, quest.skillId)) {
        throw new HttpError(409, 'skill_locked', 'Essa estação ainda está bloqueada.');
      }
      const validation = validateQuestCode(quest, code);
      if (!validation.isValid) {
        throw new HttpError(422, 'validation_failed', 'O código não passou nas checagens do servidor.', {
          checks: validation.checks,
          diagnostics: validation.diagnostics.slice(0, 5),
        });
      }
      const outcome = applyQuestCompletion(progress, questId);
      return {
        progress: outcome.nextProgress,
        outcome: summarize(outcome),
        xpEarned: outcome.xpGained,
        event: {
          type: 'quest_completed',
          data: { questId, skillId: quest.skillId, xp: outcome.xpGained, boss: Boolean(quest.isBossFight), codeLength: code.length },
        },
        solution: { questId, skillId: quest.skillId, language: validation.language, code, xp: outcome.xpGained },
        counters: { questsCompleted: 1 },
      };
    }

    case 'quiz': {
      const quizId = requireString(input.quizId, 'quizId', 40);
      const quiz = QUIZ_BY_ID.get(quizId);
      if (!quiz) throw new HttpError(404, 'quiz_not_found', 'Quiz não encontrado.');
      const answerIndex = Number(input.answerIndex);
      if (!Number.isInteger(answerIndex) || answerIndex < 0 || answerIndex >= quiz.options.length) {
        throw badRequest('Resposta inválida.');
      }
      const correct = answerIndex === quiz.correctIndex;
      const event = { type: 'quiz_answered', data: { quizId, answerIndex, correct } };
      if (!correct) {
        return { progress, outcome: { ...summarize({}), correct }, event, counters: { quizWrong: 1 } };
      }
      const outcome = applyBonusActivity(progress, { xp: quiz.xp, bondGain: LIMITS.quizBond, quizId });
      return {
        progress: outcome.nextProgress,
        outcome: { ...summarize(outcome), correct },
        xpEarned: outcome.xpGained,
        event,
        counters: { quizCorrect: 1 },
      };
    }

    case 'guide': {
      const guideId = requireString(input.guideId, 'guideId', 40);
      if (!GUIDE_IDS.has(guideId)) throw new HttpError(404, 'guide_not_found', 'Grimório não encontrado.');
      if (progress.studiedGuides.includes(guideId)) {
        return { progress, outcome: { ...summarize({}), alreadyStudied: true } };
      }
      const outcome = applyBonusActivity(progress, { xp: LIMITS.guideXp, bondGain: LIMITS.guideBond, guideId });
      return {
        progress: outcome.nextProgress,
        outcome: summarize(outcome),
        xpEarned: outcome.xpGained,
        event: { type: 'guide_studied', data: { guideId } },
        counters: { guidesStudied: 1 },
      };
    }

    case 'pet': {
      if (ctx.now - (ctx.lastPetAt ?? 0) < LIMITS.petCooldownMs) {
        return { progress, outcome: { ...summarize({}), rewarded: false }, counters: { pets: 1 } };
      }
      const next = { ...progress, bondPoints: progress.bondPoints + LIMITS.petBond };
      return {
        progress: next,
        outcome: { ...summarize({ bondGain: LIMITS.petBond }), rewarded: true },
        lastPetAt: ctx.now,
        counters: { pets: 1 },
      };
    }

    case 'onboarding': {
      if (progress.onboardingCompleted) {
        return { progress, outcome: { ...summarize({}), alreadyCompleted: true } };
      }
      const name = cleanText(input.name, LIMITS.name) || progress.name;
      const companionName = cleanText(input.companionName, LIMITS.companionName);
      const avatarId = SIGIL_IDS.has(input.avatarId) ? input.avatarId : progress.avatarId;
      const spellCode = typeof input.spellCode === 'string' ? input.spellCode.slice(0, 2000) : '';
      const spellPassed = isSpellPassed(spellCode);
      const petBonus = input.petted === true ? 10 : 0;
      const base = { ...progress, name, companionName, avatarId, onboardingCompleted: true };
      const outcome = applyBonusActivity(base, {
        xp: spellPassed ? 25 : 0,
        bondGain: (spellPassed ? 20 : 5) + petBonus,
      });
      return {
        progress: outcome.nextProgress,
        outcome: { ...summarize(outcome), spellPassed },
        xpEarned: outcome.xpGained,
        event: { type: 'onboarding_completed', data: { spellPassed, petted: petBonus > 0 } },
      };
    }

    case 'skipOnboarding': {
      if (progress.onboardingCompleted) return { progress, outcome: summarize({}) };
      return {
        progress: { ...progress, onboardingCompleted: true },
        outcome: summarize({}),
        event: { type: 'onboarding_skipped', data: {} },
      };
    }

    case 'reset': {
      const fresh = {
        ...createDefaultProgress(progress.name),
        companionName: progress.companionName,
        avatarId: progress.avatarId,
        soundEnabled: progress.soundEnabled,
      };
      return {
        progress: fresh,
        outcome: summarize({}),
        event: { type: 'progress_reset', data: { previousLevel: progress.level, previousQuests: progress.completedQuests.length } },
      };
    }

    default:
      throw badRequest('Ação desconhecida.');
  }
}

const PATCHABLE = new Set(['name', 'companionName', 'avatarId', 'accessoryId', 'soundEnabled', 'theme']);

/** Validates a profile/preferences patch. Returns { progress, preferences, fields }. */
export function applyProfilePatch(progress, patch) {
  if (!patch || typeof patch !== 'object' || Array.isArray(patch)) throw badRequest('Corpo inválido.');
  const keys = Object.keys(patch);
  if (keys.length === 0) throw badRequest('Nada para atualizar.');
  const unknown = keys.filter((k) => !PATCHABLE.has(k));
  if (unknown.length) throw badRequest(`Campos não permitidos: ${unknown.join(', ')}.`);

  const next = { ...progress };
  const preferences = {};
  for (const key of keys) {
    const value = patch[key];
    switch (key) {
      case 'name':
        next.name = cleanText(value, LIMITS.name) || 'Aventureiro';
        break;
      case 'companionName':
        next.companionName = cleanText(value, LIMITS.companionName);
        break;
      case 'avatarId':
        if (!SIGIL_IDS.has(value)) throw badRequest('Selo inválido.');
        next.avatarId = value;
        break;
      case 'accessoryId':
        if (!accessoryUnlocked(progress, value)) {
          throw new HttpError(409, 'accessory_locked', 'Esse acessório ainda não foi liberado.');
        }
        next.accessoryId = value;
        break;
      case 'soundEnabled':
        if (typeof value !== 'boolean') throw badRequest('soundEnabled deve ser booleano.');
        next.soundEnabled = value;
        break;
      case 'theme':
        if (value !== 'dark' && value !== 'light') throw badRequest('Tema inválido.');
        preferences.theme = value;
        break;
      default:
        break;
    }
  }
  return { progress: next, preferences, fields: keys };
}

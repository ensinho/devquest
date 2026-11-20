import { INITIAL_SKILLS, INITIAL_QUESTS, HERO_SIGILS } from '../data/gameData.js';
import { getCompanionStageForProgress } from '../data/companionAvatars.js';

export const GUEST_STORAGE_KEY = 'devquest-guest-progress-v1';

export function createDefaultProgress(name = 'Aventureiro') {
  return {
    name,
    companionName: '',
    level: 1,
    currentXp: 0,
    nextLevelXp: 100,
    avatarId: HERO_SIGILS[0].id,
    completedQuests: [],
    studiedGuides: [],
    completedQuizzes: [],
    mascotStage: 1,
    accessoryId: 'spark',
    bondPoints: 10,
    streak: 0,
    soundEnabled: false,
    onboardingCompleted: false,
  };
}

export function getBondInfo(bondPoints = 0) {
  const safePoints = Math.max(0, Number(bondPoints) || 0);
  const bondLevel = Math.min(10, Math.floor(safePoints / 40) + 1);
  const currentInLevel = safePoints % 40;
  const titles = [
    'Curiosos',
    'Parceiros',
    'Aliados',
    'Inseparáveis',
    'Almas do Códice',
  ];
  const bondTitle = titles[Math.min(titles.length - 1, Math.floor((bondLevel - 1) / 2))];
  return {
    bondLevel,
    bondTitle,
    currentInLevel,
    nextStepPoints: 40,
    percentage: bondLevel >= 10 ? 100 : Math.round((currentInLevel / 40) * 100),
  };
}

export function loadGuestProgress(storage = typeof window !== 'undefined' ? window.localStorage : null) {
  if (!storage) {
    return createDefaultProgress();
  }
  try {
    const raw = storage.getItem(GUEST_STORAGE_KEY);
    if (!raw) {
      return createDefaultProgress();
    }
    const parsed = JSON.parse(raw);
    return {
      ...createDefaultProgress(),
      ...parsed,
      completedQuests: Array.isArray(parsed.completedQuests) ? parsed.completedQuests : [],
      studiedGuides: Array.isArray(parsed.studiedGuides) ? parsed.studiedGuides : [],
      completedQuizzes: Array.isArray(parsed.completedQuizzes) ? parsed.completedQuizzes : [],
    };
  } catch {
    return createDefaultProgress();
  }
}

export function saveGuestProgress(progress, storage = typeof window !== 'undefined' ? window.localStorage : null) {
  if (!storage) return;
  try {
    storage.setItem(GUEST_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore storage quota errors
  }
}

export function deriveSkillsAndClass(completedQuestIds, skills = INITIAL_SKILLS, quests = INITIAL_QUESTS) {
  const doneSet = new Set(completedQuestIds);

  const skillCompletionMap = new Map();
  for (const skill of skills) {
    const skillQuests = quests.filter((q) => q.skillId === skill.id);
    const doneCount = skillQuests.filter((q) => doneSet.has(q.id)).length;
    const isCompleted = skillQuests.length > 0 && doneCount === skillQuests.length;
    skillCompletionMap.set(skill.id, {
      doneCount,
      totalCount: skillQuests.length,
      isCompleted,
    });
  }

  const enrichedSkills = skills.map((skill) => {
    const meta = skillCompletionMap.get(skill.id);
    if (meta.isCompleted) {
      return { ...skill, status: 'completed', ...meta };
    }
    const depsMet = skill.dependencies.every((depId) => skillCompletionMap.get(depId)?.isCompleted);
    return {
      ...skill,
      status: depsMet ? 'available' : 'locked',
      ...meta,
    };
  });

  const completedCategories = new Set(
    enrichedSkills.filter((s) => s.status === 'completed').map((s) => s.category)
  );

  let heroClass = 'Aprendiz do Códice';
  if (completedCategories.has('mastery')) {
    heroClass = 'Grão-Mestre Full-Stack';
  } else if (completedCategories.has('logic') && completedCategories.has('backend')) {
    heroClass = 'Paladino Full-Stack';
  } else if (completedCategories.has('logic')) {
    heroClass = 'Feiticeiro de Código';
  } else if (completedCategories.has('styling')) {
    heroClass = 'Artesão de Interface';
  } else if (completedCategories.has('structure')) {
    heroClass = 'Construtor Semântico';
  }

  return { skills: enrichedSkills, heroClass };
}

function advanceXpAndStage(progress, xpDelta, completedQuestsCount) {
  let currentXp = (progress.currentXp ?? 0) + xpDelta;
  let level = progress.level ?? 1;
  let nextLevelXp = progress.nextLevelXp ?? 100;
  const oldLevel = level;

  while (currentXp >= nextLevelXp) {
    currentXp -= nextLevelXp;
    level += 1;
    nextLevelXp = Math.floor(nextLevelXp * 1.45);
  }

  const oldStage = progress.mascotStage ?? 1;
  const newStage = Math.max(oldStage, getCompanionStageForProgress(completedQuestsCount, level));

  return {
    currentXp,
    level,
    nextLevelXp,
    mascotStage: newStage,
    leveledUp: level > oldLevel,
    oldLevel,
    newLevel: level,
    evolved: newStage > oldStage,
    newStage,
  };
}

export function applyQuestCompletion(progress, questId, quests = INITIAL_QUESTS) {
  if (progress.completedQuests.includes(questId)) {
    return { nextProgress: progress, leveledUp: false, evolved: false, xpGained: 0 };
  }

  const quest = quests.find((q) => q.id === questId);
  if (!quest) {
    return { nextProgress: progress, leveledUp: false, evolved: false, xpGained: 0 };
  }

  const completedQuests = [...progress.completedQuests, questId];
  const bondGain = quest.isBossFight ? 30 : 18;
  const advanced = advanceXpAndStage(progress, quest.xp, completedQuests.length);

  return {
    nextProgress: {
      ...progress,
      completedQuests,
      currentXp: advanced.currentXp,
      level: advanced.level,
      nextLevelXp: advanced.nextLevelXp,
      mascotStage: advanced.mascotStage,
      bondPoints: (progress.bondPoints ?? 0) + bondGain,
      streak: (progress.streak ?? 0) + 1,
    },
    leveledUp: advanced.leveledUp,
    oldLevel: advanced.oldLevel,
    newLevel: advanced.newLevel,
    evolved: advanced.evolved,
    newStage: advanced.newStage,
    xpGained: quest.xp,
    bondGain,
  };
}

export function applyBonusActivity(
  progress,
  { xp = 0, bondGain = 0, guideId = null, quizId = null } = {}
) {
  const studiedGuides = progress.studiedGuides ?? [];
  const completedQuizzes = progress.completedQuizzes ?? [];

  const isDuplicateGuide = guideId && studiedGuides.includes(guideId);
  const isDuplicateQuiz = quizId && completedQuizzes.includes(quizId);

  const effectiveXp = isDuplicateGuide || isDuplicateQuiz ? 0 : xp;
  const effectiveBond = isDuplicateGuide ? 0 : bondGain;

  const nextGuides =
    guideId && !isDuplicateGuide ? [...studiedGuides, guideId] : studiedGuides;
  const nextQuizzes =
    quizId && !isDuplicateQuiz ? [...completedQuizzes, quizId] : completedQuizzes;

  const advanced = advanceXpAndStage(
    progress,
    effectiveXp,
    (progress.completedQuests ?? []).length
  );

  return {
    nextProgress: {
      ...progress,
      studiedGuides: nextGuides,
      completedQuizzes: nextQuizzes,
      currentXp: advanced.currentXp,
      level: advanced.level,
      nextLevelXp: advanced.nextLevelXp,
      mascotStage: advanced.mascotStage,
      bondPoints: (progress.bondPoints ?? 0) + effectiveBond,
    },
    xpGained: effectiveXp,
    bondGain: effectiveBond,
    leveledUp: advanced.leveledUp,
    newLevel: advanced.newLevel,
    evolved: advanced.evolved,
    newStage: advanced.newStage,
  };
}

import React, { useMemo } from 'react';
import Habitat from '../components/home/Habitat.jsx';
import Trail from '../components/home/Trail.jsx';
import StationPanel from '../components/home/StationPanel.jsx';

/**
 * Home: the Toca (fox habitat) · the trail · the selected station.
 * Desktop fits one screen with no page scroll; mobile stacks action-first.
 */
export default function QuestsPage({
  skills,
  selectedSkill,
  onSelectSkill,
  onHoverSkill,
  onLockedSkill,
  quests,
  allQuests,
  recommendedQuest,
  onStartQuest,
  onOpenCharacter,
  onToggleTheme,
  displayStage,
  accessoryId,
  companionName,
  completedCount,
  completedQuizzes,
  bondInfo,
  mentorMessage,
  avatarState,
  avatarMood,
  theme,
  onPet,
  onAnswerQuiz,
}) {
  const totalXp = useMemo(
    () => allQuests.filter((q) => q.completed).reduce((sum, q) => sum + (q.xp ?? 0), 0),
    [allQuests]
  );

  return (
    <div className="dq-home">
      <h1 className="dq-sr-only">DevQuest: trilha full-stack com um fox de estimação</h1>
      <Habitat
        displayStage={displayStage}
        accessoryId={accessoryId}
        companionName={companionName}
        completedCount={completedCount}
        bondInfo={bondInfo}
        mentorMessage={mentorMessage}
        avatarState={avatarState}
        avatarMood={avatarMood}
        theme={theme}
        totalXp={totalXp}
        completedQuizzes={completedQuizzes}
        onPet={onPet}
        onAnswerQuiz={onAnswerQuiz}
        onToggleTheme={onToggleTheme}
        onOpenCharacter={onOpenCharacter}
      />

      <Trail
        skills={skills}
        quests={allQuests}
        selectedSkillId={selectedSkill?.id ?? null}
        currentSkillId={recommendedQuest?.skillId ?? null}
        nextQuestId={recommendedQuest?.id ?? null}
        totalXp={totalXp}
        displayStage={displayStage}
        onSelectSkill={onSelectSkill}
        onHoverSkill={onHoverSkill}
        onLockedPress={onLockedSkill}
      />

      <StationPanel
        skill={selectedSkill}
        quests={quests}
        skills={skills}
        recommendedSkillId={recommendedQuest?.skillId ?? null}
        completedCount={completedCount}
        onStartQuest={onStartQuest}
        onSelectSkill={onSelectSkill}
      />
    </div>
  );
}

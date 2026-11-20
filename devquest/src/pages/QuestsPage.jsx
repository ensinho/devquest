import React from 'react';
import CompanionCamp from '../components/companion/CompanionCamp.jsx';
import SkillTree from '../components/SkillTree.jsx';
import SidePanel from '../components/SidePanel.jsx';

export default function QuestsPage({
  skills,
  selectedSkill,
  onSelectSkill,
  onHoverSkill,
  quests,
  onStartQuest,
  unlockedStage,
  displayStage,
  onPreviewStage,
  accessoryId,
  onSelectAccessory,
  companionName,
  completedCount,
  completedQuizzes,
  bondInfo,
  streak,
  mentorMessage,
  mentorTag,
  avatarState,
  avatarMood,
  theme,
  onPet,
  onAskLesson,
  onAnswerQuiz,
}) {
  return (
    <div className="dq-page-stack">
      <CompanionCamp
        unlockedStage={unlockedStage}
        displayStage={displayStage}
        onPreviewStage={onPreviewStage}
        accessoryId={accessoryId}
        onSelectAccessory={onSelectAccessory}
        companionName={companionName}
        completedCount={completedCount}
        completedQuizzes={completedQuizzes}
        bondInfo={bondInfo}
        streak={streak}
        mentorMessage={mentorMessage}
        mentorTag={mentorTag}
        avatarState={avatarState}
        avatarMood={avatarMood}
        theme={theme}
        onPet={onPet}
        onAskLesson={onAskLesson}
        onAnswerQuiz={onAnswerQuiz}
      />

      <div className="dq-quests-layout">
        <div className="dq-quests-map-col">
          <SkillTree
            skills={skills}
            selectedSkillId={selectedSkill?.id ?? null}
            onSelectSkill={onSelectSkill}
            onHoverSkill={onHoverSkill}
          />
        </div>
        <div className="dq-quests-side-col">
          <SidePanel
            skill={selectedSkill}
            quests={quests}
            onStartQuest={onStartQuest}
          />
        </div>
      </div>
    </div>
  );
}

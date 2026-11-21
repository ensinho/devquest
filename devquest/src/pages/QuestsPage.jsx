import React, { useState, useRef } from 'react';
import MobileQuestHero from '../components/MobileQuestHero.jsx';
import CompanionCamp from '../components/companion/CompanionCamp.jsx';
import SkillTree from '../components/SkillTree.jsx';
import SidePanel from '../components/SidePanel.jsx';

export default function QuestsPage({
  user,
  skills,
  selectedSkill,
  onSelectSkill,
  onHoverSkill,
  quests,
  recommendedQuest,
  totalQuests,
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
  const [quizTrigger, setQuizTrigger] = useState(0);
  const campRef = useRef(null);
  const sidePanelRef = useRef(null);

  const handleOpenQuizFromHero = () => {
    setQuizTrigger((n) => n + 1);
    campRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSelectSkillSmart = (skill) => {
    onSelectSkill(skill);
    if (window.innerWidth <= 768) {
      sidePanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div className="dq-page-stack dq-quests-page">
      <MobileQuestHero
        user={user}
        completedCount={completedCount}
        totalQuests={totalQuests}
        displayStage={displayStage}
        accessoryId={accessoryId}
        companionName={companionName}
        theme={theme}
        avatarState={avatarState}
        avatarMood={avatarMood}
        recommendedQuest={recommendedQuest}
        onStartRecommended={onStartQuest}
        onPet={onPet}
        onOpenQuiz={handleOpenQuizFromHero}
      />

      <div className="dq-quests-map-wrap">
        <SkillTree
          skills={skills}
          selectedSkillId={selectedSkill?.id ?? null}
          onSelectSkill={handleSelectSkillSmart}
          onHoverSkill={onHoverSkill}
        />
      </div>

      <div className="dq-command-deck">
        <div ref={campRef} className="dq-command-camp-wrap">
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
            quizTrigger={quizTrigger}
          />
        </div>

        <div ref={sidePanelRef} className="dq-command-side-wrap">
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

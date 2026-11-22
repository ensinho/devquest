import React from 'react';
import QuestItem from './QuestItem.jsx';

export default function QuestLog({
  quests,
  onStartQuest,
  primaryQuestId,
  nextPendingQuestId = null,
  skillLocked,
}) {
  if (!quests.length) {
    return <p className="dq-muted-text">Nenhuma quest encontrada para esta skill.</p>;
  }

  return (
    <ul className="dq-quest-list">
      {quests.map((quest, index) => (
        <QuestItem
          key={quest.id}
          quest={quest}
          stepNumber={index + 1}
          isNextStep={quest.id === nextPendingQuestId}
          onStart={onStartQuest}
          isLocked={skillLocked}
          isPrimaryCta={quest.id === primaryQuestId}
        />
      ))}
    </ul>
  );
}

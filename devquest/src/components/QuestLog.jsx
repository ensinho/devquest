import React from 'react';
import QuestItem from './QuestItem.jsx';

export default function QuestLog({ quests, onStartQuest, primaryQuestId, skillLocked }) {
  if (!quests.length) {
    return <p className="dq-muted-text">Nenhuma quest encontrada para esta skill.</p>;
  }

  return (
    <ul className="dq-quest-list">
      {quests.map((quest) => (
        <QuestItem
          key={quest.id}
          quest={quest}
          onStart={onStartQuest}
          isLocked={skillLocked}
          isPrimaryCta={quest.id === primaryQuestId}
        />
      ))}
    </ul>
  );
}

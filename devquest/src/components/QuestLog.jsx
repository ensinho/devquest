import React from 'react';
import QuestItem from './QuestItem';

const QuestLog = ({ quests, onStartQuest, skillStatus }) => {
    const isLocked = skillStatus !== 'available';
    return (
        <div className="space-y-3">
            {quests.length > 0 ? quests.map(quest => (
                <QuestItem key={quest.id} quest={quest} onStart={onStartQuest} isLocked={isLocked} />
            )) : <p className="text-amber-100/50 italic text-center p-4">No quests found for this skill.</p>}
        </div>
    );
};
export default QuestLog;
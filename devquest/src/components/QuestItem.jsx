import React from 'react';

const QuestItem = ({ quest, onStart, isLocked }) => (
  <div className={`flex items-center justify-between p-3 rounded-md transition-all duration-300 ${quest.completed ? 'bg-green-800/20 text-gray-500' : 'bg-black/20 hover:bg-black/40'} ${quest.isBossFight ? 'border-l-4 border-red-500' : ''}`}>
    <p className={`flex-grow ${quest.completed ? 'line-through' : ''}`}>{quest.title}</p>
    <div className="flex items-center gap-3 ml-4">
        <span className="text-sm font-bold text-amber-400">{quest.xp} XP</span>
        <button onClick={() => onStart(quest)} disabled={quest.completed || isLocked} className={`font-bold py-1 px-3 rounded-md text-sm shadow-md transition-all duration-200 font-cinzel text-xs disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:bg-gray-600 ${quest.isBossFight ? 'bg-red-700 text-white hover:bg-red-800 shadow-red-900/20' : 'bg-amber-700 text-white hover:bg-amber-800 shadow-amber-900/20'}`}>
            {quest.completed ? 'Done' : (quest.isBossFight ? 'Challenge' : 'Start')}
        </button>
    </div>
  </div>
);

export default QuestItem;

import React from 'react';
import { Swords, Sparkles } from 'lucide-react';
import QuestLog from './QuestLog';

const SidePanel = ({ skill, quests, onStartQuest }) => (
    <aside className="bg-parchment-dark/50 backdrop-blur-sm border-2 border-amber-800/30 p-4 md:p-6 rounded-lg shadow-lg shadow-black/30 h-full overflow-y-auto">
        {skill ? (
            <div>
                <div className="flex items-center gap-4 mb-4">
                    <div className={`p-2 bg-gradient-to-br from-gray-700/50 to-transparent rounded-md ${skill.color}`}>
                        {React.cloneElement(skill.icon, { className: "w-8 h-8" })}
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white font-cinzel">{skill.name}</h2>
                        <p className="text-amber-100/80 text-sm">{skill.description}</p>
                    </div>
                </div>
                <hr className="my-6 border-amber-800/20" />
                <div className="flex items-center gap-2 mb-4">
                    <Swords className="w-6 h-6 text-amber-400" />
                    <h3 className="text-lg md:text-xl font-semibold text-amber-400 font-cinzel">Quests</h3>
                </div>
                <QuestLog quests={quests} onStartQuest={onStartQuest} skillStatus={skill.status} />
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-amber-100/70">
                <Sparkles className="w-16 h-16 mb-4 text-amber-400/50" />
                <h2 className="text-xl md:text-2xl font-bold font-cinzel">Welcome to DevQuest!</h2>
                <p className="text-sm">Select a skill from the tree to view its details and associated quests.</p>
            </div>
        )}
    </aside>
);
export default SidePanel;

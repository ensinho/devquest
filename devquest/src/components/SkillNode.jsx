import React from 'react';
import { CheckCircle } from 'lucide-react';

const SkillNode = ({ skill, onSelect, isSelected }) => {
    const statusStyles = {
        locked: 'bg-black/50 text-gray-500 cursor-not-allowed border-gray-700',
        available: `bg-black/30 text-white hover:bg-amber-800/50 hover:shadow-lg hover:shadow-amber-500/20 border-2 ${skill.color.replace('text-', 'border-')}/50 cursor-pointer animate-pulse-slow`,
        completed: `bg-gradient-to-br from-gray-800/80 to-black/50 text-white border-2 ${skill.color.replace('text-', 'border-')} cursor-pointer shadow-lg ${skill.color.replace('text-', 'shadow-')}/20`,
    };
    const selectedStyle = isSelected ? 'ring-4 ring-offset-2 ring-offset-[#0D1117] ring-amber-400' : '';
    const Icon = React.cloneElement(skill.icon, { className: `w-8 h-8 mb-2 ${skill.status === 'locked' ? 'text-gray-600' : skill.color}` });

    return (
        <div style={{ gridRow: skill.position.row, gridColumn: skill.position.col }} className={`flex flex-col items-center justify-center text-center p-2 md:p-4 rounded-lg transition-all duration-300 shadow-md ${statusStyles[skill.status]} ${selectedStyle}`} onClick={() => skill.status !== 'locked' && onSelect(skill)}>
            {skill.status === 'completed' ? <CheckCircle className={`w-8 h-8 mb-2 ${skill.color}`} /> : Icon}
            <h3 className="font-bold text-xs md:text-sm font-cinzel">{skill.name}</h3>
        </div>
    );
};
export default SkillNode;
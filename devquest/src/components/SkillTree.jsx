import React, { useMemo } from 'react';
import SkillNode from './SkillNode';

const SkillTree = ({ skills, onSelectSkill, selectedSkillId }) => {
    const skillMap = useMemo(() => new Map(skills.map(s => [s.id, s])), [skills]);
    return (
        <div className="relative bg-parchment-dark/30 p-4 md:p-6 rounded-lg shadow-lg shadow-black/30 border-2 border-amber-800/20">
            <div className="grid grid-cols-5 grid-rows-5 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">
                {skills.map(skill => (<SkillNode key={skill.id} skill={skill} onSelect={onSelectSkill} isSelected={selectedSkillId === skill.id} />))}
            </div>
            <svg className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#F0A500" opacity="0.6" /></marker></defs>
                {skills.map(skill => skill.dependencies.map(depId => {
                    const depSkill = skillMap.get(depId);
                    if (!depSkill) return null;
                    const startX = (depSkill.position.col - 0.5) * (100 / 5) + '%';
                    const startY = (depSkill.position.row - 0.5) * (100 / 5) + '%';
                    const endX = (skill.position.col - 0.5) * (100 / 5) + '%';
                    const endY = (skill.position.row - 0.5) * (100 / 5) + '%';
                    return (<line key={`${depId}-${skill.id}`} x1={startX} y1={startY} x2={endX} y2={endY} stroke={skillMap.get(skill.id)?.status === 'locked' ? '#4A5568' : '#F0A500'} strokeWidth="2" strokeDasharray={skillMap.get(skill.id)?.status === 'locked' ? "4 4" : "none"} markerEnd="url(#arrow)" opacity="0.6" />);
                }))}
            </svg>
        </div>
    );
};
export default SkillTree;

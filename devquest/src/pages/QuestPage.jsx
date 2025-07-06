import React from 'react';
import SkillTree from '../components/SkillTree';
import SidePanel from '../components/SidePanel';
import Mascot from '../components/Mascot';

const QuestsPage = ({ skills, selectedSkill, onSelectSkill, quests, onStartQuest, mascotStage, mascotGifs }) => (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
            <SkillTree skills={skills} onSelectSkill={onSelectSkill} selectedSkillId={selectedSkill?.id} />
        </div>
        <div className="lg:col-span-1">
            <SidePanel skill={selectedSkill} quests={quests} onStartQuest={onStartQuest} />
        </div>
        <Mascot stage={mascotStage} mascotGifs={mascotGifs} />
    </div>
);
export default QuestsPage;

import React from 'react';
import { Swords, Sparkles, CheckCircle2 } from 'lucide-react';
import QuestLog from './QuestLog.jsx';

export default function SidePanel({ skill, quests, onStartQuest }) {
  if (!skill) {
    return (
      <aside className="dq-sidepanel dq-sidepanel--empty" aria-label="Detalhes da Skill">
        <Sparkles size={32} className="dq-empty-icon" aria-hidden="true" />
        <h2 className="dq-h3">Escolha uma constelação</h2>
        <p className="dq-muted-text">
          Clique em qualquer skill desbloqueada no mapa para inspecionar as quests e enfrentar o Boss da trilha.
        </p>
      </aside>
    );
  }

  const nextPendingQuest = quests.find((q) => !q.completed) ?? null;

  return (
    <aside className="dq-sidepanel" aria-label={`Quests de ${skill.name}`}>
      <div className="dq-sidepanel-head">
        <div className="dq-sidepanel-badges">
          <span
            className={`dq-badge ${
              skill.status === 'completed'
                ? 'dq-badge-gold'
                : skill.category === 'mastery'
                  ? 'dq-badge-arcane'
                  : 'dq-badge-live'
            }`}
          >
            {skill.status === 'completed' ? 'Skill Dominada' : skill.shortLabel}
          </span>
          <span className="dq-tabular dq-muted-xs">
            {skill.doneCount}/{skill.totalCount} concluídas
          </span>
        </div>
        <h2 className="dq-h2">{skill.name}</h2>
        <p className="dq-muted-text">{skill.description}</p>
      </div>

      <div className="dq-sidepanel-section">
        <div className="dq-sidepanel-subhead">
          <Swords size={16} aria-hidden="true" />
          <h3>Quests da Trilha</h3>
        </div>

        <QuestLog
          quests={quests}
          onStartQuest={onStartQuest}
          primaryQuestId={nextPendingQuest?.id ?? null}
          skillLocked={skill.status === 'locked'}
        />

        {!nextPendingQuest && quests.length > 0 && (
          <div className="dq-skill-done-banner">
            <CheckCircle2 size={16} aria-hidden="true" />
            <span>Todas as quests de {skill.name} foram concluídas!</span>
          </div>
        )}
      </div>
    </aside>
  );
}

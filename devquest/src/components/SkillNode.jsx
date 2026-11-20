import React from 'react';
import {
  Code2,
  Palette,
  Terminal,
  Sparkles,
  Atom,
  Server,
  Database,
  Crown,
  CheckCircle2,
  Lock,
  ShieldCheck,
} from 'lucide-react';

const SKILL_ICONS = {
  html: Code2,
  css: Palette,
  js: Terminal,
  tailwind: Sparkles,
  react: Atom,
  nodejs: Server,
  'a11y-tests': ShieldCheck,
  sql: Database,
  'mastery-fullstack': Crown,
};

export default function SkillNode({ skill, isSelected, onSelect, onHover }) {
  const Icon = SKILL_ICONS[skill.id] ?? Code2;
  const isLocked = skill.status === 'locked';
  const isCompleted = skill.status === 'completed';
  const isMastery = skill.category === 'mastery';

  return (
    <button
      type="button"
      disabled={isLocked}
      aria-pressed={isSelected}
      aria-label={`${skill.name} — ${isCompleted ? 'Concluída' : isLocked ? 'Bloqueada' : 'Disponível'} (${skill.doneCount} de ${skill.totalCount} quests)`}
      onClick={() => !isLocked && onSelect(skill)}
      onMouseEnter={() => onHover?.(skill)}
      onFocus={() => onHover?.(skill)}
      style={{
        '--node-col': skill.position.col,
        '--node-row': skill.position.row,
      }}
      className={[
        'dq-skill-node',
        `dq-skill-node--${skill.status}`,
        isSelected ? 'is-selected' : '',
        isMastery ? 'is-mastery' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="dq-skill-node-top">
        <span className="dq-skill-node-icon" aria-hidden="true">
          {isCompleted ? (
            <CheckCircle2 size={18} />
          ) : isLocked ? (
            <Lock size={16} />
          ) : (
            <Icon size={18} />
          )}
        </span>
        <span className="dq-skill-node-count dq-tabular">
          {skill.doneCount}/{skill.totalCount}
        </span>
      </span>

      <span className="dq-skill-node-name">{skill.name}</span>
      <span className="dq-skill-node-label">{skill.shortLabel}</span>
    </button>
  );
}

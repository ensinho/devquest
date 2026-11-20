import React from 'react';
import { Skull, Check, Play } from 'lucide-react';

export default function QuestItem({ quest, onStart, isLocked, isPrimaryCta }) {
  const isBoss = Boolean(quest.isBossFight);

  const buttonClass = quest.completed
    ? 'dq-btn dq-btn-ghost'
    : isPrimaryCta
      ? 'dq-btn dq-btn-primary'
      : isBoss
        ? 'dq-btn dq-btn-danger'
        : 'dq-btn dq-btn-secondary';

  return (
    <li
      className={[
        'dq-quest-item',
        quest.completed ? 'is-completed' : '',
        isBoss ? 'is-boss' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="dq-quest-item-info">
        <p className="dq-quest-item-title">
          {isBoss && <Skull size={14} className="dq-boss-icon" aria-hidden="true" />}
          <span>{quest.title}</span>
        </p>
        <span className="dq-quest-item-meta dq-tabular">
          {isBoss ? 'Boss Fight' : 'Quest'} · +{quest.xp} XP
        </span>
      </div>

      <button
        type="button"
        onClick={() => onStart(quest)}
        disabled={quest.completed || isLocked}
        className={buttonClass}
      >
        {quest.completed ? (
          <>
            <Check size={15} aria-hidden="true" />
            <span>Feita</span>
          </>
        ) : (
          <>
            <Play size={14} aria-hidden="true" />
            <span>{isBoss ? 'Enfrentar' : 'Iniciar'}</span>
          </>
        )}
      </button>
    </li>
  );
}

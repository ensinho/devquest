import React from 'react';
import { Skull, Check, Play } from 'lucide-react';

export default function QuestItem({
  quest,
  stepNumber,
  isNextStep = false,
  onStart,
  isLocked,
  isPrimaryCta,
}) {
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
        isNextStep && !quest.completed ? 'is-next-step' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span
        className={`dq-quest-step-num dq-tabular ${quest.completed ? 'is-done' : isBoss ? 'is-boss' : isNextStep ? 'is-next' : ''}`}
        aria-hidden="true"
      >
        {quest.completed ? <Check size={13} /> : isBoss ? <Skull size={13} /> : stepNumber}
      </span>

      <div className="dq-quest-item-info">
        <p className="dq-quest-item-title">
          <span>{quest.title}</span>
        </p>
        <span className="dq-quest-item-meta dq-tabular">
          {isNextStep && !quest.completed ? 'Próximo passo · ' : isBoss ? 'Boss Fight · ' : ''}
          +{quest.xp} XP
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

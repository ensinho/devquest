import React from 'react';
import { ArrowRight, Skull, Check, Play, Lock, CircleDashed, RotateCcw, Compass } from 'lucide-react';
import { SKILL_ICONS } from '../../data/skillIcons.js';

const NEWLINE = String.fromCharCode(10);
function NextQuest({ quest, isFirstVisit, onStartQuest }) {
  const isBoss = Boolean(quest.isBossFight);
  const lines = (quest.starterCode ?? '').split(NEWLINE);
  return (
    <li className={`dq-qnext ${isBoss ? 'is-boss' : ''}`}>
      <div className="dq-qnext-head">
        <span className="dq-qnext-tag dq-tabular">
          {isBoss ? <Skull size={13} aria-hidden="true" /> : null}
          {isBoss ? 'Boss' : 'Próxima'}
        </span>
        <span className="dq-qnext-xp dq-tabular">+{quest.xp} XP</span>
      </div>
      <h3 className="dq-qnext-title">{quest.title}</h3>
      <p className="dq-qnext-challenge">{quest.challenge}</p>

      {quest.starterCode && (
        <pre className="dq-qnext-code" aria-label="Código inicial">
          {lines.map((line, i) => (
            <span key={i} className="dq-qnext-line">
              <span className="dq-qnext-ln" aria-hidden="true">
                {i + 1}
              </span>
              <code>{line || ' '}</code>
              {i === lines.length - 1 && <span className="dq-qnext-caret" aria-hidden="true" />}
            </span>
          ))}
        </pre>
      )}

      {Array.isArray(quest.checks) && quest.checks.length > 0 && (
        <ul className="dq-qnext-checks" aria-label="O validador confere">
          {quest.checks.map((check) => (
            <li key={check.label}>
              <CircleDashed size={13} aria-hidden="true" />
              <span>{check.label}</span>
            </li>
          ))}
        </ul>
      )}

      <button type="button" className="dq-btn dq-btn-primary dq-qnext-cta" onClick={() => onStartQuest(quest)}>
        <span>{isFirstVisit ? 'Jogar a primeira quest' : isBoss ? 'Enfrentar o boss' : 'Jogar esta quest'}</span>
        <ArrowRight size={17} aria-hidden="true" />
      </button>
    </li>
  );
}

function QuestRow({ quest, index, onStartQuest }) {
  const isBoss = Boolean(quest.isBossFight);
  const isDone = Boolean(quest.completed);
  return (
    <li className={`dq-qrow ${isDone ? 'is-done' : ''} ${isBoss ? 'is-boss' : ''}`}>
      <span className="dq-qrow-no dq-tabular" aria-hidden="true">
        {isDone ? <Check size={14} strokeWidth={3} /> : isBoss ? <Skull size={14} /> : index + 1}
      </span>
      <span className="dq-qrow-body">
        <span className="dq-qrow-title">{quest.title}</span>
        <span className="dq-qrow-meta dq-tabular">
          {isDone ? 'Feita' : isBoss ? 'Boss' : 'Quest'} · +{quest.xp} XP
        </span>
      </span>
      <button
        type="button"
        className="dq-icon-btn dq-qrow-btn"
        onClick={() => onStartQuest(quest)}
        aria-label={`${isDone ? 'Rejogar' : 'Jogar'}: ${quest.title}`}
        title={isDone ? 'Rejogar' : 'Jogar'}
      >
        {isDone ? <RotateCcw size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
      </button>
    </li>
  );
}

/** The selected station: its quests, with the next one opened up and ready to play. */
export default function StationPanel({
  skill,
  quests,
  skills,
  recommendedSkillId,
  completedCount,
  onStartQuest,
  onSelectSkill,
}) {
  if (!skill) return null;
  const Icon = SKILL_ICONS[skill.id];
  const isLocked = skill.status === 'locked';
  const isDone = skill.status === 'completed';
  const nextQuest = quests.find((q) => !q.completed) ?? null;
  const missing = skill.dependencies
    .map((id) => skills.find((s) => s.id === id))
    .filter((dep) => dep && dep.status !== 'completed');
  const recommendedSkill = skills.find((s) => s.id === recommendedSkillId);

  return (
    <section className={`dq-station-panel is-${skill.status}`} aria-labelledby="station-title">
      <header className="dq-sp-head">
        <span className="dq-sp-icon" aria-hidden="true">
          {isLocked ? <Lock size={22} /> : Icon ? <Icon size={24} strokeWidth={2} /> : null}
        </span>
        <div className="dq-sp-title-col">
          <h2 id="station-title" className="dq-sp-title">
            {skill.name}
          </h2>
          <p className="dq-sp-sub dq-tabular">
            {skill.shortLabel} · {skill.doneCount}/{skill.totalCount} quests
          </p>
        </div>
      </header>

      <p className="dq-sp-desc">{skill.description}</p>

      {isLocked ? (
        <div className="dq-sp-locked">
          <p>
            Estação fechada. Termine <strong>{missing.map((m) => m.name).join(' e ')}</strong> para abrir.
          </p>
          {missing[0] && (
            <button type="button" className="dq-btn dq-btn-secondary" onClick={() => onSelectSkill(missing[0])}>
              <Compass size={15} aria-hidden="true" />
              <span>Ir para {missing[0].name}</span>
            </button>
          )}
        </div>
      ) : (
        <ol className="dq-sp-quests">
          {quests.map((quest, index) =>
            quest.id === nextQuest?.id ? (
              <NextQuest
                key={quest.id}
                quest={quest}
                isFirstVisit={completedCount === 0}
                onStartQuest={onStartQuest}
              />
            ) : (
              <QuestRow key={quest.id} quest={quest} index={index} onStartQuest={onStartQuest} />
            )
          )}
        </ol>
      )}

      {isDone && recommendedSkill && recommendedSkill.id !== skill.id && (
        <button type="button" className="dq-btn dq-btn-secondary dq-sp-onward" onClick={() => onSelectSkill(recommendedSkill)}>
          <span>Estação dominada. Seguir para {recommendedSkill.name}</span>
          <ArrowRight size={15} aria-hidden="true" />
        </button>
      )}
    </section>
  );
}

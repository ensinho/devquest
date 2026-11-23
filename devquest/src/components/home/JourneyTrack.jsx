import React, { useMemo } from 'react';

/**
 * The whole run as one strip: 22 segments grouped by skill.
 * Done = earned mint, next = signal yellow, open = cobalt outline, locked = recessed.
 */
export default function JourneyTrack({ skills, quests, nextQuestId, totalXp }) {
  const groups = useMemo(() => {
    const statusById = new Map(skills.map((s) => [s.id, s.status]));
    return skills.map((skill) => ({
      skill,
      quests: quests
        .filter((q) => q.skillId === skill.id)
        .map((q) => ({
          ...q,
          state: q.completed
            ? 'done'
            : q.id === nextQuestId
              ? 'next'
              : statusById.get(skill.id) === 'locked'
                ? 'locked'
                : 'open',
        })),
    }));
  }, [skills, quests, nextQuestId]);

  const doneCount = quests.filter((q) => q.completed).length;

  return (
    <div className="dq-journey">
      <div className="dq-journey-head dq-tabular">
        <span>
          <strong>{doneCount}</strong> de {quests.length} quests
        </span>
        <span>
          <strong>{totalXp}</strong> XP ganho
        </span>
      </div>
      <ol
        className="dq-journey-track"
        aria-label={`Jornada: ${doneCount} de ${quests.length} quests concluídas`}
      >
        {groups.map(({ skill, quests: groupQuests }) => (
          <li key={skill.id} className="dq-journey-group" title={skill.name}>
            {groupQuests.map((q) => (
              <span
                key={q.id}
                className={`dq-journey-seg is-${q.state} ${q.isBossFight ? 'is-boss' : ''}`}
                title={`${skill.name}: ${q.title}`}
              />
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
}

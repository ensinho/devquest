import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Lock, Check, Code2 } from 'lucide-react';
import PixelCompanion from '../companion/PixelCompanion.jsx';
import JourneyTrack from './JourneyTrack.jsx';
import { SKILL_ICONS } from '../../data/skillIcons.js';

import { VIEW_W, VIEW_H, stationPoint, segmentPath } from './trailLayout.js';

function Station({ skill, index, isSelected, onSelect, onHover, onLockedPress }) {
  const Icon = SKILL_ICONS[skill.id] ?? Code2;
  const { x, y } = stationPoint(index);
  const isLocked = skill.status === 'locked';
  const isDone = skill.status === 'completed';
  const pct = Math.round((skill.doneCount / Math.max(1, skill.totalCount)) * 100);

  const prevRef = useRef(skill.status);
  const [justOpened, setJustOpened] = useState(false);
  const [nudged, setNudged] = useState(false);

  useEffect(() => {
    const prev = prevRef.current;
    prevRef.current = skill.status;
    if (prev === 'locked' && skill.status !== 'locked') {
      setJustOpened(true);
      const t = window.setTimeout(() => setJustOpened(false), 900);
      return () => window.clearTimeout(t);
    }
    return undefined;
  }, [skill.status]);

  const handleClick = () => {
    if (isLocked) {
      setNudged(true);
      window.setTimeout(() => setNudged(false), 420);
      onLockedPress?.(skill);
      return;
    }
    onSelect(skill);
  };

  return (
    <button
      type="button"
      className={[
        'dq-station',
        `is-${skill.status}`,
        skill.category === 'mastery' ? 'is-mastery' : '',
        isSelected ? 'is-selected' : '',
        justOpened ? 'is-opening' : '',
        nudged ? 'is-nudged' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ left: `${(x / VIEW_W) * 100}%`, top: `${(y / VIEW_H) * 100}%`, '--ring': pct }}
      aria-pressed={isLocked ? undefined : isSelected}
      aria-disabled={isLocked || undefined}
      aria-label={`${skill.name}: ${isDone ? 'dominada' : isLocked ? 'bloqueada' : 'aberta'}, ${skill.doneCount} de ${skill.totalCount} quests`}
      onClick={handleClick}
      onMouseEnter={() => onHover?.(skill)}
      onFocus={() => onHover?.(skill)}
    >
      <span className="dq-station-disc" aria-hidden="true">
        <span className="dq-station-face">
          {isLocked ? <Lock size={20} strokeWidth={2.4} /> : <Icon size={26} strokeWidth={2} />}
        </span>
        {isDone && (
          <span className="dq-station-check">
            <Check size={12} strokeWidth={3.5} />
          </span>
        )}
      </span>
      <span className="dq-station-label">
        <span className="dq-station-name">{skill.name}</span>
        <span className="dq-station-meta dq-tabular">
          {skill.doneCount}/{skill.totalCount}
        </span>
      </span>
    </button>
  );
}

export default function Trail({
  skills,
  quests,
  selectedSkillId,
  currentSkillId,
  nextQuestId,
  totalXp,
  displayStage,
  onSelectSkill,
  onHoverSkill,
  onLockedPress,
}) {
  const segments = useMemo(
    () =>
      skills.slice(0, -1).map((skill, i) => {
        const next = skills[i + 1];
        const state =
          next.status === 'locked'
            ? 'locked'
            : skill.status === 'completed' && next.status === 'completed'
              ? 'done'
              : 'live';
        return { id: `${skill.id}-${next.id}`, d: segmentPath(i), state };
      }),
    [skills]
  );

  const currentIndex = skills.findIndex((s) => s.id === currentSkillId);
  const foxPoint = currentIndex >= 0 ? stationPoint(currentIndex) : null;
  const mastered = skills.filter((s) => s.status === 'completed').length;

  const handleKeyDown = (event) => {
    if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(event.key)) return;
    const buttons = Array.from(event.currentTarget.querySelectorAll('button.dq-station'));
    const i = buttons.indexOf(document.activeElement);
    if (i === -1) return;
    event.preventDefault();
    const delta = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1;
    buttons[(i + delta + buttons.length) % buttons.length]?.focus();
  };

  return (
    <section className="dq-trail" aria-labelledby="trail-title">
      <div className="dq-trail-head">
        <div>
          <h2 id="trail-title" className="dq-trail-title">
            Trilha full-stack
          </h2>
          <p className="dq-trail-sub">Termine uma estação para abrir a próxima.</p>
        </div>
        <span className="dq-trail-tally dq-tabular" title="Estações dominadas">
          <strong>{mastered}</strong>/{skills.length}
        </span>
      </div>

      <div className="dq-trail-stage">
        <div className="dq-trail-map" onKeyDown={handleKeyDown}>
          <svg
            className="dq-trail-path"
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {segments.map((seg) => (
              <path key={`${seg.id}-bed`} d={seg.d} className="dq-trail-bed" />
            ))}
            {segments.map((seg) => (
              <path key={seg.id} d={seg.d} className={`dq-trail-seg is-${seg.state}`} />
            ))}
          </svg>

          {skills.map((skill, index) => (
            <Station
              key={skill.id}
              skill={skill}
              index={index}
              isSelected={selectedSkillId === skill.id}
              onSelect={onSelectSkill}
              onHover={onHoverSkill}
              onLockedPress={onLockedPress}
            />
          ))}

          {foxPoint && (
            <span
              className="dq-trail-fox"
              style={{ left: `${(foxPoint.x / VIEW_W) * 100}%`, top: `${(foxPoint.y / VIEW_H) * 100}%` }}
              aria-hidden="true"
            >
              <PixelCompanion stage={displayStage} state="idle" mood="happy" size={52} accessoryId="none" />
            </span>
          )}
        </div>
      </div>

      <JourneyTrack skills={skills} quests={quests} nextQuestId={nextQuestId} totalXp={totalXp} />
    </section>
  );
}

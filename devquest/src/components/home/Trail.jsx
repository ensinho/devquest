import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Lock, Check, Code2 } from 'lucide-react';
import PixelCompanion from '../companion/PixelCompanion.jsx';
import JourneyTrack from './JourneyTrack.jsx';
import { SKILL_ICONS } from '../../data/skillIcons.js';
import { durationToken, motionToken, play, prefersReducedMotion, shake } from '../../utils/motion.js';

import {
  VIEW_W,
  VIEW_H,
  stationPoint,
  segmentPath,
  segmentState,
  trailSnapshot,
  diffTrail,
} from './trailLayout.js';

/*
 * The home remounts every time you come back from the Arena, so "what changed"
 * is measured against what the trail looked like the last time you saw it
 * (module scope = this browser session). First visit: nothing replays.
 */
let lastSeenTrail = null;

/*
 * Catch-up timeline (ms). Lead = the station you just finished; the segment,
 * the next station and the fox each hook onto the beat before them.
 *   0    finished disc stamps (420, ease-out)       120  its check pops (320, pop)
 *   220  segment lights over its old state (480)    400  next station flips open (flip)
 *   520  mini fox walks there (travel token, in-out) ~1240 done
 */
const BEAT = { check: 120, segment: 220, open: 400, walk: 520 };

function Station({ skill, index, isSelected, onSelect, onHover, onLockedPress }) {
  const Icon = SKILL_ICONS[skill.id] ?? Code2;
  const { x, y } = stationPoint(index);
  const isLocked = skill.status === 'locked';
  const isDone = skill.status === 'completed';
  const pct = Math.round((skill.doneCount / Math.max(1, skill.totalCount)) * 100);

  const handleClick = (event) => {
    if (isLocked) {
      // WAAPI restarts on every press; a CSS class would swallow double clicks.
      shake(event.currentTarget.querySelector('.dq-station-disc'));
      onLockedPress?.(skill);
      return;
    }
    onSelect(skill);
  };

  return (
    <button
      type="button"
      data-skill={skill.id}
      className={[
        'dq-station',
        `is-${skill.status}`,
        skill.category === 'mastery' ? 'is-mastery' : '',
        isSelected ? 'is-selected' : '',
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
        return { id: `${skill.id}-${next.id}`, d: segmentPath(i), state: segmentState(skill, next) };
      }),
    [skills]
  );

  const currentIndex = skills.findIndex((s) => s.id === currentSkillId);
  const foxPoint = currentIndex >= 0 ? stationPoint(currentIndex) : null;
  const mastered = skills.filter((s) => s.status === 'completed').length;

  const mapRef = useRef(null);
  const [beat, setBeat] = useState(null);
  const [walkFacing, setWalkFacing] = useState(0);

  // Layout effects: the diff and the first frame of every animation land
  // before paint, so the new state never flashes ahead of its entrance.
  useLayoutEffect(() => {
    const diff = prefersReducedMotion() ? null : diffTrail(lastSeenTrail, skills, currentIndex);
    lastSeenTrail = trailSnapshot(skills, currentIndex);
    if (diff) setBeat(diff);
  }, [skills, currentIndex]);

  useLayoutEffect(() => {
    const map = mapRef.current;
    if (!beat || !map) return undefined;
    const easeOut = motionToken('--ease-out', 'ease-out');
    const find = (selector) => map.querySelector(selector);
    const runs = [];

    beat.completed.forEach((id) => {
      runs.push(
        play(
          find(`[data-skill="${id}"] .dq-station-disc`),
          [{ transform: 'scale(1)' }, { transform: 'scale(1.14)', offset: 0.35 }, { transform: 'scale(1)' }],
          { id: 'dq-stamp', duration: durationToken('--duration-slow', 420), easing: easeOut }
        ),
        play(
          find(`[data-skill="${id}"] .dq-station-check`),
          [{ opacity: 0, transform: 'scale(0.5)' }, { opacity: 1, transform: 'none' }],
          {
            id: 'dq-stamp-check',
            duration: 320,
            delay: BEAT.check,
            easing: motionToken('--ease-pop', 'ease-out'),
            fill: 'backwards',
          }
        )
      );
    });

    beat.lit.forEach((seg) => {
      runs.push(
        play(find(`[data-seg="${seg.id}"]`), [{ opacity: 0 }, { opacity: 1 }], {
          id: 'dq-seg-lit',
          duration: 480,
          delay: BEAT.segment,
          easing: easeOut,
          fill: 'backwards',
        })
      );
    });

    beat.opened.forEach((id) => {
      runs.push(
        play(
          find(`[data-skill="${id}"] .dq-station-disc`),
          [
            { transform: 'perspective(420px) rotateY(-90deg) scale(0.8)' },
            { transform: 'perspective(420px) rotateY(0deg) scale(1.06)', offset: 0.7 },
            { transform: 'perspective(420px) rotateY(0deg) scale(1)' },
          ],
          {
            id: 'dq-station-open',
            duration: durationToken('--duration-flip', 640),
            delay: BEAT.open,
            easing: easeOut,
            fill: 'backwards',
          }
        )
      );
    });

    if (beat.fox) {
      const a = stationPoint(beat.fox.from);
      const b = stationPoint(beat.fox.to);
      const rect = map.getBoundingClientRect();
      const dx = ((a.x - b.x) / VIEW_W) * rect.width;
      const dy = ((a.y - b.y) / VIEW_H) * rect.height;
      const walkMs = durationToken('--duration-travel', 720);
      // FLIP: the fox already sits on the new station; start it on the old one.
      const travel = play(
        find('.dq-trail-fox-walk'),
        [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'translate(0, 0)' }],
        {
          id: 'dq-fox-travel',
          duration: walkMs,
          delay: BEAT.walk,
          easing: motionToken('--ease-travel', 'ease-in-out'),
          fill: 'backwards',
        }
      );
      runs.push(
        travel,
        play(
          find('.dq-trail-fox-hop'),
          [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-7px)', offset: 0.25 },
            { transform: 'translateY(0)', offset: 0.5 },
            { transform: 'translateY(-7px)', offset: 0.75 },
            { transform: 'translateY(0)' },
          ],
          { id: 'dq-fox-hop', duration: walkMs, delay: BEAT.walk, easing: 'ease-in-out' }
        )
      );
      if (travel) {
        setWalkFacing(b.x < a.x ? -1 : 1);
        travel.finished.then(() => setWalkFacing(0)).catch(() => {});
      }
    }

    // Ghost segments (the old state under a lighting segment) leave only once
    // every run has finished, never on a guessed timer.
    let alive = true;
    Promise.allSettled(runs.filter(Boolean).map((run) => run.finished)).then(() => {
      if (alive) setBeat(null);
    });
    return () => {
      alive = false;
      runs.forEach((run) => run?.cancel());
    };
  }, [beat]);

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
        <div ref={mapRef} className="dq-trail-map" onKeyDown={handleKeyDown}>
          <svg
            className="dq-trail-path"
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {segments.map((seg) => (
              <path key={`${seg.id}-bed`} d={seg.d} className="dq-trail-bed" />
            ))}
            {beat?.lit.map((seg) => (
              <path
                key={`${seg.id}-ghost`}
                d={segments.find((s) => s.id === seg.id)?.d}
                className={`dq-trail-seg is-${seg.from}`}
              />
            ))}
            {segments.map((seg) => (
              <path key={seg.id} data-seg={seg.id} d={seg.d} className={`dq-trail-seg is-${seg.state}`} />
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
              <span className="dq-trail-fox-walk">
                <span className="dq-trail-fox-hop">
                  <span className={`dq-trail-fox-face ${walkFacing < 0 ? 'is-left' : ''}`}>
                    <PixelCompanion
                      stage={displayStage}
                      state={walkFacing ? 'walk' : 'idle'}
                      mood="happy"
                      size={52}
                      accessoryId="none"
                    />
                  </span>
                </span>
              </span>
            </span>
          )}
        </div>
      </div>

      <JourneyTrack skills={skills} quests={quests} nextQuestId={nextQuestId} totalXp={totalXp} />
    </section>
  );
}

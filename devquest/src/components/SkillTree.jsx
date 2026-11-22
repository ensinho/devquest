import React, { useMemo, useRef } from 'react';
import SkillNode from './SkillNode.jsx';

const GRID_COLS = 5;
const GRID_ROWS = 3;

function getNodeCenter(pos) {
  return {
    x: ((pos.col - 0.5) / GRID_COLS) * 1200,
    y: ((pos.row - 0.5) / GRID_ROWS) * 400,
  };
}

export default function SkillTree({
  skills,
  selectedSkillId,
  onSelectSkill,
  onHoverSkill,
}) {
  const gridRef = useRef(null);
  const skillMap = useMemo(() => new Map(skills.map((s) => [s.id, s])), [skills]);

  const edges = useMemo(() => {
    const list = [];
    for (const skill of skills) {
      for (const depId of skill.dependencies) {
        const dep = skillMap.get(depId);
        if (!dep) continue;
        const from = getNodeCenter(dep.position);
        const to = getNodeCenter(skill.position);
        const midX = (from.x + to.x) / 2;
        const d = `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;
        const state =
          skill.status === 'completed'
            ? 'completed'
            : skill.status === 'available'
              ? 'live'
              : 'locked';
        list.push({ id: `${depId}-${skill.id}`, d, state });
      }
    }
    return list;
  }, [skills, skillMap]);

  const completedSkillsCount = skills.filter((s) => s.status === 'completed').length;

  const handleGridKeyDown = (event) => {
    const navKeys = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'];
    if (!navKeys.includes(event.key)) return;

    const buttons = Array.from(
      gridRef.current?.querySelectorAll('button.dq-skill-node:not(:disabled)') ?? []
    );
    if (buttons.length <= 1) return;

    const currentIdx = buttons.indexOf(document.activeElement);
    if (currentIdx === -1) return;

    event.preventDefault();
    const delta = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1;
    const nextIdx = (currentIdx + delta + buttons.length) % buttons.length;
    buttons[nextIdx]?.focus();
  };

  return (
    <section className="dq-constellation" aria-label="Constellation Skill Map">
      <div className="dq-section-header">
        <div>
          <h2 className="dq-h2">Mapa Full-Stack</h2>
          <p className="dq-section-sub">
            Selecione uma constelação ativa para ver suas missões ao lado.
          </p>
        </div>
        <span className="dq-badge dq-badge-live dq-tabular">
          {completedSkillsCount} / {skills.length} dominadas
        </span>
      </div>

      <div className="dq-map-canvas">
        <svg
          className="dq-map-edges"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {edges.map((edge) => (
            <path
              key={edge.id}
              d={edge.d}
              className={`dq-edge dq-edge--${edge.state}`}
            />
          ))}
        </svg>

        <div
          ref={gridRef}
          className="dq-map-grid"
          onKeyDown={handleGridKeyDown}
        >
          {skills.map((skill) => (
            <SkillNode
              key={skill.id}
              skill={skill}
              isSelected={selectedSkillId === skill.id}
              onSelect={onSelectSkill}
              onHover={onHoverSkill}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Geometry of the serpentine trail (pure, unit-tested). */
export const VIEW_W = 600;
export const VIEW_H = 560;
const COLS = 3;

/** Serpentine layout: row 1 left→right, row 2 right→left, row 3 left→right. */
export function stationPoint(index) {
  const row = Math.floor(index / COLS);
  const inRow = index % COLS;
  const col = row % 2 === 0 ? inRow : COLS - 1 - inRow;
  return { x: 100 + col * 200, y: 80 + row * 200, col, row };
}

export function segmentPath(fromIndex) {
  const a = stationPoint(fromIndex);
  const b = stationPoint(fromIndex + 1);
  if (a.row === b.row) return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
  const bend = a.col === COLS - 1 ? 120 : -120;
  return `M ${a.x} ${a.y} C ${a.x + bend} ${a.y}, ${b.x + bend} ${b.y}, ${b.x} ${b.y}`;
}


/** A segment between two stations: locked until the next opens, gold once both are done. */
export function segmentState(from, to) {
  if (to.status === 'locked') return 'locked';
  return from.status === 'completed' && to.status === 'completed' ? 'done' : 'live';
}

/** What the trail looked like the last time the player saw it. */
export function trailSnapshot(skills, currentIndex) {
  return {
    statuses: Object.fromEntries(skills.map((s) => [s.id, s.status])),
    currentIndex,
  };
}

/**
 * Everything that changed since `prev`, in the order the home replays it:
 * stations stamped as done → segments lighting up → stations opening → fox walk.
 * Returns null when nothing worth animating changed (or there is no history).
 */
export function diffTrail(prev, skills, currentIndex) {
  if (!prev) return null;
  const was = (id) => prev.statuses[id];
  const known = skills.every((s) => was(s.id) !== undefined);
  if (!known) return null;

  const completed = skills
    .filter((s) => s.status === 'completed' && was(s.id) !== 'completed')
    .map((s) => s.id);
  const opened = skills
    .filter((s) => s.status !== 'locked' && was(s.id) === 'locked')
    .map((s) => s.id);
  const lit = [];
  for (let i = 0; i < skills.length - 1; i += 1) {
    const before = segmentState({ status: was(skills[i].id) }, { status: was(skills[i + 1].id) });
    const now = segmentState(skills[i], skills[i + 1]);
    if (before !== now) lit.push({ id: `${skills[i].id}-${skills[i + 1].id}`, from: before });
  }
  const fox =
    prev.currentIndex >= 0 && currentIndex >= 0 && prev.currentIndex !== currentIndex
      ? { from: prev.currentIndex, to: currentIndex }
      : null;

  if (!completed.length && !opened.length && !lit.length && !fox) return null;
  return { completed, opened, lit, fox };
}

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


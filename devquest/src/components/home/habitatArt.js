/**
 * Pixel geometry for the Toca (the companion's habitat). Pure functions that
 * return SVG path data in a 192×108 grid; colours come from CSS tokens.
 */
export const SCENE_W = 192;
export const SCENE_H = 108;

/** Horizontal runs that approximate a filled circle (pixel-art disc). */
export function discPath(cx, cy, r) {
  let d = '';
  for (let y = -r; y <= r; y += 1) {
    const half = Math.round(Math.sqrt(r * r - y * y));
    if (half <= 0) continue;
    d += `M${cx - half} ${cy + y}h${half * 2}v1h-${half * 2}z`;
  }
  return d;
}

/** Top edge of a rolling hill at column x, snapped to a 2px grid. */
export function hillY(x, { base, amp, phase = 0 }) {
  const y = base - amp * Math.sin((x / SCENE_W) * Math.PI * 1.4 + phase);
  return Math.round(y / 2) * 2;
}

/** Columns from the hill edge down to the bottom of the scene. */
export function hillPath(shape, step = 2) {
  let d = '';
  for (let x = 0; x < SCENE_W; x += step) {
    const y = hillY(x, shape);
    d += `M${x} ${y}h${step}v${SCENE_H - y}h-${step}z`;
  }
  return d;
}

/** A puffy cloud made of overlapping discs. */
export function cloudPath(x, y) {
  return [discPath(x, y, 5), discPath(x + 7, y - 3, 6), discPath(x + 15, y, 5), `M${x - 4} ${y}h24v5h-24z`].join('');
}

export const FAR_HILL = Object.freeze({ base: 74, amp: 12, phase: 0.2 });
export const NEAR_GROUND = Object.freeze({ base: 88, amp: 3, phase: 1.1 });

export const STARS = Object.freeze([
  [14, 10], [34, 22], [64, 8], [71, 28], [84, 46], [96, 12], [108, 52], [118, 24], [126, 40], [133, 7], [150, 30], [176, 14], [24, 38], [88, 30], [184, 34],
]);

export const FIREFLIES = Object.freeze([
  [70, 66], [86, 58], [110, 70], [124, 60],
]);

const DEN_X = 122;

/** All static layers, computed once. */
export function buildScene() {
  const denTop = hillY(DEN_X, FAR_HILL) + 9;
  const grassTufts = [10, 40, 62, 80, 98, 112, 136, 160, 182]
    .map((x) => {
      const y = hillY(x, NEAR_GROUND);
      return `M${x} ${y - 2}h1v2h-1zM${x + 2} ${y - 3}h1v3h-1zM${x + 4} ${y - 2}h1v2h-1z`;
    })
    .join('');
  const flowersA = [66, 102, 150]
    .map((x) => `M${x} ${hillY(x, NEAR_GROUND) - 4}h2v2h-2z`)
    .join('');
  const flowersB = [86, 114]
    .map((x) => `M${x} ${hillY(x, NEAR_GROUND) - 4}h2v2h-2z`)
    .join('');
  const stems = [66, 102, 150, 86, 114]
    .map((x) => `M${x} ${hillY(x, NEAR_GROUND) - 2}h1v2h-1z`)
    .join('');

  return {
    farHill: hillPath(FAR_HILL),
    nearGround: hillPath(NEAR_GROUND),
    groundShade: `M0 ${SCENE_H - 6}h${SCENE_W}v6h-${SCENE_W}z`,
    denRim: discPath(DEN_X, denTop, 12),
    den: discPath(DEN_X, denTop + 1, 9),
    grassTufts,
    flowersA,
    flowersB,
    stems,
    cloudA: cloudPath(66, 16),
    cloudB: cloudPath(104, 36),
    stars: STARS.map(([x, y]) => `M${x} ${y}h1v1h-1z`).join(''),
    signPost: `M72 ${hillY(72, NEAR_GROUND) - 12}h2v12h-2zM66 ${hillY(72, NEAR_GROUND) - 16}h14v6h-14z`,
  };
}

/** Sun/moon disc for the sky toggle (drawn in its own 24×24 box). */
export const SKY_BODY = Object.freeze({
  disc: discPath(12, 12, 8),
  rim: discPath(12, 12, 10),
  craters: 'M8 9h2v2h-2zM13 14h3v2h-3zM14 7h1v1h-1z',
});

/** A tiny pixel heart / cookie used by reactions (8×8 boxes). */
export const HEART_PATH = 'M1 1h2v1h-2zM5 1h2v1h-2zM0 2h8v2h-8zM1 4h6v1h-6zM2 5h4v1h-4zM3 6h2v1h-2z';
export const COOKIE_PATH = discPath(4, 4, 4);
export const COOKIE_CHIPS = 'M2 2h1v1h-1zM5 3h1v1h-1zM3 5h1v1h-1z';

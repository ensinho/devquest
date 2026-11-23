import { describe, it, expect } from 'vitest';
import {
  PIXEL_GRID,
  PIXEL_LEGEND,
  PIXEL_EXPRESSIONS,
  PIXEL_PROPS,
  PIXEL_STAGES,
  deriveEarPerk,
  getPixelStage,
  getStageArt,
  haloPoints,
  resolveExpression,
  spriteToPaths,
} from './pixelSprites.js';

const KNOWN = new Set(['.', ...Object.keys(PIXEL_LEGEND)]);
const STAGES = [1, 2, 3].map((n) => [n, PIXEL_STAGES[n]]);

function expectRectangular(rows, label) {
  expect(rows.length, `${label} has rows`).toBeGreaterThan(0);
  const width = rows[0].length;
  rows.forEach((row, i) => {
    expect(row.length, `${label} row ${i} width`).toBe(width);
  });
}

function expectKnownKeys(rows, label) {
  rows.forEach((row, i) => {
    [...row].forEach((ch, x) => {
      expect(KNOWN.has(ch), `${label} row ${i} col ${x} uses unknown key "${ch}"`).toBe(true);
    });
  });
}

describe('pixel companion sprite data', () => {
  it.each(STAGES)('stage %i body and tail frames are 32×32 with known palette keys', (n, data) => {
    expect(data.stage).toBe(n);
    for (const [label, grid] of [
      ['body', data.body],
      ...data.tail.map((frame, i) => [`tail ${i}`, frame]),
    ]) {
      expectRectangular(grid, `stage ${n} ${label}`);
      expect(grid.length).toBe(PIXEL_GRID);
      expect(grid[0].length).toBe(PIXEL_GRID);
      expectKnownKeys(grid, `stage ${n} ${label}`);
    }
  });

  it.each(STAGES)('stage %i has 2 tail frames and every expression frame', (n, data) => {
    expect(data.tail).toHaveLength(2);
    expect(data.tail[0]).not.toEqual(data.tail[1]);
    const { x, y, frames } = data.eyes;
    const reference = frames.open;
    for (const expr of PIXEL_EXPRESSIONS) {
      const frame = frames[expr];
      expect(frame, `stage ${n} missing ${expr}`).toBeDefined();
      expectRectangular(frame, `stage ${n} eyes ${expr}`);
      expectKnownKeys(frame, `stage ${n} eyes ${expr}`);
      expect(frame.length).toBe(reference.length);
      expect(frame[0].length).toBe(reference[0].length);
      expect(x + frame[0].length).toBeLessThanOrEqual(PIXEL_GRID);
      expect(y + frame.length).toBeLessThanOrEqual(PIXEL_GRID);
    }
    expect(new Set(PIXEL_EXPRESSIONS.map((expr) => frames[expr].join('|'))).size).toBe(PIXEL_EXPRESSIONS.length);
  });

  it.each(STAGES)('stage %i keeps metadata, ear zones and anchors inside the grid', (n, data) => {
    expect(data.name).toBeTruthy();
    expect(data.title).toBeTruthy();
    data.ears.forEach(({ x0, x1, yBase }) => {
      expect(x0).toBeGreaterThanOrEqual(0);
      expect(x1).toBeLessThan(PIXEL_GRID);
      expect(yBase).toBeGreaterThan(0);
    });
    const props = { spark: 'spark', crown: 'crown', scarf: 'scarf', sweat: 'sweat' };
    for (const [anchor, prop] of Object.entries(props)) {
      const [ax, ay] = data.anchors[anchor];
      const sprite = PIXEL_PROPS[prop];
      expect(ax + sprite[0].length, `${anchor} x`).toBeLessThanOrEqual(PIXEL_GRID);
      expect(ay + sprite.length, `${anchor} y`).toBeLessThanOrEqual(PIXEL_GRID);
    }
    haloPoints(data.anchors.halo).forEach(({ x, y }) => {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThan(PIXEL_GRID);
      expect(y + 1).toBeLessThan(PIXEL_GRID);
    });
  });

  it('evolves: each stage occupies more pixels than the previous one', () => {
    const area = (n) => PIXEL_STAGES[n].body.join('').replace(/\./g, '').length;
    expect(area(2)).toBeGreaterThan(area(1));
    expect(area(3)).toBeGreaterThan(area(1));
  });

  it('props are rectangular and only use known palette keys', () => {
    for (const [name, rows] of Object.entries(PIXEL_PROPS)) {
      expectRectangular(rows, `prop ${name}`);
      expectKnownKeys(rows, `prop ${name}`);
    }
  });
});

describe('pixel sprite helpers', () => {
  it('spriteToPaths merges horizontal runs into one path per palette key', () => {
    const paths = spriteToPaths(['oob', '.bb'], 2, 3);
    expect(paths).toEqual({
      outline: 'M2 3h2v1h-2z',
      body: 'M4 3h1v1h-1zM3 4h2v1h-2z',
    });
  });

  it('deriveEarPerk lifts ear tips one pixel and leaves the rest untouched', () => {
    const rows = ['....', '.o..', '.b..', 'bbbb'];
    const perk = deriveEarPerk(rows, [{ x0: 0, x1: 1, yBase: 2 }]);
    expect(perk).toEqual(['.o..', '.b..', '.b..', 'bbbb']);
    expect(rows[0]).toBe('....');
  });

  it('resolveExpression maps state and mood to eye frames', () => {
    expect(resolveExpression({ state: 'idle' })).toBe('open');
    expect(resolveExpression({ state: 'idle', blinking: true })).toBe('blink');
    expect(resolveExpression({ state: 'waiting' })).toBe('open');
    expect(resolveExpression({ state: 'idle', mood: 'happy' })).toBe('happy');
    expect(resolveExpression({ state: 'done' })).toBe('happy');
    expect(resolveExpression({ state: 'working', mood: 'happy' })).toBe('focused');
    expect(resolveExpression({ state: 'blocked', mood: 'happy' })).toBe('worried');
    expect(resolveExpression({ state: 'sleep', mood: 'happy' })).toBe('blink');
    expect(resolveExpression({ state: 'eat' })).toBe('happy');
    expect(resolveExpression({ state: 'walk' })).toBe('open');
  });

  it('getPixelStage clamps unknown stages and getStageArt builds every layer', () => {
    expect(getPixelStage(0).stage).toBe(1);
    expect(getPixelStage(9).stage).toBe(3);
    expect(getPixelStage('2').stage).toBe(2);
    for (const n of [1, 2, 3]) {
      const art = getStageArt(n);
      expect(art.body.outline).toBeTruthy();
      expect(art.perk.outline).not.toBe(art.body.outline);
      expect(art.tail).toHaveLength(2);
      PIXEL_EXPRESSIONS.forEach((expr) => expect(art.eyes[expr].eye).toBeTruthy());
      expect(getStageArt(n)).toBe(art);
    }
  });
});

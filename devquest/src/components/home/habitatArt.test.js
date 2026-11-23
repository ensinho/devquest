import { describe, it, expect } from 'vitest';
import { discPath, hillY, buildScene, SCENE_W, SCENE_H, FAR_HILL, NEAR_GROUND } from './habitatArt.js';

describe('Toca habitat pixel geometry', () => {
  it('draws a disc as whole-pixel runs inside its bounding box', () => {
    const d = discPath(10, 10, 4);
    const runs = d.match(/M(\d+) (\d+)h(\d+)/g);
    expect(runs.length).toBeGreaterThan(5);
    for (const run of runs) {
      const [, x, y, w] = run.match(/M(\d+) (\d+)h(\d+)/).map(Number);
      expect(x).toBeGreaterThanOrEqual(6);
      expect(x + w).toBeLessThanOrEqual(14);
      expect(y).toBeGreaterThanOrEqual(6);
      expect(y).toBeLessThanOrEqual(14);
    }
  });

  it('keeps hills inside the scene and snapped to the 2px grid', () => {
    for (let x = 0; x < SCENE_W; x += 7) {
      for (const shape of [FAR_HILL, NEAR_GROUND]) {
        const y = hillY(x, shape);
        expect(y % 2).toBe(0);
        expect(y).toBeGreaterThan(0);
        expect(y).toBeLessThan(SCENE_H);
      }
    }
  });

  it('builds every scene layer as non-empty path data', () => {
    const scene = buildScene();
    for (const [key, value] of Object.entries(scene)) {
      expect(value, key).toMatch(/^M\d/);
    }
  });
});

import { describe, it, expect } from 'vitest';
import { stationPoint, segmentPath, VIEW_W, VIEW_H } from './trailLayout.js';

describe('serpentine trail layout', () => {
  it('snakes left→right, right→left, left→right', () => {
    expect([0, 1, 2].map((i) => stationPoint(i).col)).toEqual([0, 1, 2]);
    expect([3, 4, 5].map((i) => stationPoint(i).col)).toEqual([2, 1, 0]);
    expect([6, 7, 8].map((i) => stationPoint(i).col)).toEqual([0, 1, 2]);
  });

  it('keeps every station inside the map', () => {
    for (let i = 0; i < 9; i += 1) {
      const { x, y } = stationPoint(i);
      expect(x).toBeGreaterThan(0);
      expect(x).toBeLessThan(VIEW_W);
      expect(y).toBeGreaterThan(0);
      expect(y).toBeLessThan(VIEW_H);
    }
  });

  it('uses straight runs inside a row and U-turns between rows', () => {
    expect(segmentPath(0)).toMatch(/ L /);
    expect(segmentPath(2)).toMatch(/ C /);
    expect(segmentPath(5)).toMatch(/ C /);
  });
});

import { describe, it, expect } from 'vitest';
import {
  stationPoint,
  segmentPath,
  segmentState,
  trailSnapshot,
  diffTrail,
  VIEW_W,
  VIEW_H,
} from './trailLayout.js';

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

describe('trail catch-up diff', () => {
  const trail = (...statuses) => statuses.map((status, i) => ({ id: `s${i}`, status }));

  it('derives segment states from both ends', () => {
    expect(segmentState({ status: 'completed' }, { status: 'locked' })).toBe('locked');
    expect(segmentState({ status: 'completed' }, { status: 'available' })).toBe('live');
    expect(segmentState({ status: 'completed' }, { status: 'completed' })).toBe('done');
  });

  it('has nothing to replay on the first visit or when nothing changed', () => {
    const skills = trail('available', 'locked');
    expect(diffTrail(null, skills, 0)).toBeNull();
    expect(diffTrail(trailSnapshot(skills, 0), skills, 0)).toBeNull();
  });

  it('replays a finished station: stamp, segment, unlock and fox walk', () => {
    const before = trailSnapshot(trail('available', 'locked', 'locked'), 0);
    const after = trail('completed', 'available', 'locked');
    expect(diffTrail(before, after, 1)).toEqual({
      completed: ['s0'],
      opened: ['s1'],
      lit: [{ id: 's0-s1', from: 'locked' }],
      fox: { from: 0, to: 1 },
    });
  });

  it('ignores snapshots from a different curriculum', () => {
    const before = trailSnapshot(trail('available'), 0);
    expect(diffTrail(before, trail('completed', 'available'), 1)).toBeNull();
  });
});

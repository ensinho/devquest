import { describe, it, expect } from 'vitest';
import { parseCssTime } from './motion.js';

describe('motion tokens', () => {
  it('reads CSS times in either unit (the minifier turns 640ms into .64s)', () => {
    expect(parseCssTime('640ms', 0)).toBe(640);
    expect(parseCssTime('.64s', 0)).toBe(640);
    expect(parseCssTime(' 0.42s ', 0)).toBe(420);
    expect(parseCssTime('', 320)).toBe(320);
    expect(parseCssTime('auto', 320)).toBe(320);
  });
});

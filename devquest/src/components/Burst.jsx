import React, { useMemo } from 'react';

/**
 * Pixel sparks flung outward on a ring (decoration layer: the lead lands, the
 * sparks finish with it). Deterministic, so renders stay pure. Starts after
 * `--burst-at` (CSS) so a parent can sync it to its own impact frame.
 */
export default function Burst({ count = 16, radius = 130, className = '' }) {
  const bits = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2 + (i % 2 ? 0.18 : -0.12);
        const dist = radius * (0.62 + ((i * 37) % 11) / 24);
        return {
          x: Math.round(Math.cos(angle) * dist),
          y: Math.round(Math.sin(angle) * dist),
          size: i % 3 === 0 ? 8 : 5,
          tone: i % 4,
          // shrinking gaps: the first sparks lead, the rest trail closer together
          delay: Math.round(Math.sqrt(i % 6) * 18),
        };
      }),
    [count, radius]
  );
  return (
    <span className={`dq-burst ${className}`} aria-hidden="true">
      {bits.map((b, i) => (
        <span
          key={i}
          className={`dq-burst-bit is-tone${b.tone}`}
          style={{ '--x': `${b.x}px`, '--y': `${b.y}px`, '--s': `${b.size}px`, '--delay': `${b.delay}ms` }}
        />
      ))}
    </span>
  );
}

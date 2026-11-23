import React from 'react';

/** Two stacked collectible cards: the back card in cobalt, the front in signal yellow. */
export default function BrandMark({ size = 32 }) {
  return (
    <svg
      className="dq-brandmark"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="dq-brandmark-back" x="4" y="6" width="15" height="21" rx="2.5" transform="rotate(-12 11.5 16.5)" />
      <rect className="dq-brandmark-front" x="12" y="4" width="15" height="21" rx="2.5" />
      <path className="dq-brandmark-glyph" d="M17.2 11.2 L14.6 14.5 L17.2 17.8 M21.8 11.2 L24.4 14.5 L21.8 17.8" />
    </svg>
  );
}

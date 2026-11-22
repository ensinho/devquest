import React from 'react';

/**
 * Zero-JS-runtime animated SVG checkmark icon (ThinkUI + PaperAnimation craft).
 * Smoothly draws the check stroke via CSS stroke-dashoffset when `checked` becomes true,
 * while degrading gracefully under `prefers-reduced-motion: reduce`.
 */
export default function AnimatedCheckIcon({ checked = false, size = 16, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`dq-anim-check ${checked ? 'is-checked' : ''} ${className}`.trim()}
    >
      <circle
        cx="10"
        cy="10"
        r="8.25"
        stroke="currentColor"
        strokeWidth="1.75"
        className="dq-anim-check-ring"
      />
      <path
        d="M6.3 10.35 L8.85 12.85 L13.9 7.55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="dq-anim-check-mark"
      />
    </svg>
  );
}

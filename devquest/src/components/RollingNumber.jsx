import React from 'react';

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

/**
 * Split-flap style numeral: each digit rolls to its new value when it changes.
 * Screen readers get the plain value; the reels are decorative.
 */
export default function RollingNumber({ value, className = '' }) {
  const text = String(Math.max(0, Math.round(Number(value) || 0)));
  return (
    <span className={`dq-roll ${className}`}>
      <span className="dq-sr-only">{text}</span>
      <span className="dq-roll-reels" aria-hidden="true">
        {text.split('').map((digit, index) => (
          <span key={`${text.length}-${index}`} className="dq-roll-reel">
            <span className="dq-roll-strip" style={{ '--roll-digit': Number(digit) }}>
              {DIGITS.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}

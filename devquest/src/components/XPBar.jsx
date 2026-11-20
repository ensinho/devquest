import React from 'react';

export default function XPBar({ currentXp, nextLevelXp, compact = false }) {
  const safeNext = nextLevelXp > 0 ? nextLevelXp : 100;
  const percentage = Math.max(0, Math.min(100, Math.round((currentXp / safeNext) * 100)));

  return (
    <div
      className={`dq-xpbar ${compact ? 'dq-xpbar--compact' : ''}`}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Experiência: ${currentXp} de ${safeNext} XP`}
    >
      <div className="dq-xpbar-fill" style={{ width: `${percentage}%` }} />
    </div>
  );
}

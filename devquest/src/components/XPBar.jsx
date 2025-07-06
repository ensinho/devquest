import React from 'react';

const XPBar = ({ currentXp, nextLevelXp }) => {
  const percentage = Math.min((currentXp / nextLevelXp) * 100, 100);
  return (
    <div className="w-full bg-black/30 rounded-full h-4 border-2 border-amber-800/50 relative overflow-hidden">
      <div className="bg-gradient-to-r from-amber-500 to-amber-400 h-full rounded-full transition-all duration-500 ease-out" style={{ width: `${percentage}%` }}></div>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white/90">{currentXp} / {nextLevelXp} XP</span>
    </div>
  );
};

export default XPBar;

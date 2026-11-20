import React, { useState, useEffect } from 'react';
import { X, Compass, Heart, Sparkles } from 'lucide-react';
import CompanionAvatar from './CompanionAvatar.jsx';
import { getCompanionStageData } from '../../data/companionAvatars.js';

export default function CompanionMentorDock({
  stage,
  accessoryId,
  companionName,
  theme,
  avatarState,
  avatarMood,
  tipMessage,
  recommendedQuest,
  onLaunchRecommended,
  onPet,
  hidden = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const stageData = getCompanionStageData(stage);
  const displayName = companionName?.trim() || stageData.name;

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  if (hidden) return null;

  return (
    <div className="dq-mentor-dock" role="region" aria-label={`Mentor flutuante ${displayName}`}>
      {isOpen && (
        <div className="dq-mentor-popover" role="dialog" aria-label={`Dicas de ${displayName}`}>
          <div className="dq-mentor-popover-head">
            <span className={`dq-badge ${stageData.badgeClass}`}>
              <Sparkles size={12} aria-hidden="true" />
              {displayName} · {stageData.elementLabel}
            </span>
            <button
              type="button"
              className="dq-icon-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar painel do mentor"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>

          <p className="dq-mentor-popover-text">{tipMessage}</p>

          <div className="dq-mentor-popover-actions">
            {recommendedQuest && (
              <button
                type="button"
                className="dq-btn dq-btn-secondary"
                onClick={() => {
                  setIsOpen(false);
                  onLaunchRecommended(recommendedQuest);
                }}
              >
                <Compass size={15} aria-hidden="true" />
                <span>Ir para: {recommendedQuest.title}</span>
              </button>
            )}
            <button type="button" className="dq-btn dq-btn-ghost" onClick={onPet}>
              <Heart size={15} aria-hidden="true" />
              <span>Fazer carinho</span>
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`dq-mentor-fab ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? `Minimizar mentor ${displayName}` : `Falar com ${displayName}`}
      >
        <CompanionAvatar
          stage={stage}
          state={isOpen ? 'waiting' : avatarState}
          mood={isOpen ? 'happy' : avatarMood}
          theme={theme}
          variant="dock"
          accessoryId={accessoryId}
          companionName={displayName}
          followPointer
        />
        <span className="dq-mentor-fab-label">
          <strong>{displayName}</strong>
          <span>{isOpen ? 'Fechar guia' : 'Pedir ajuda'}</span>
        </span>
      </button>
    </div>
  );
}

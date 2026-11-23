import React, { useEffect, useRef } from 'react';
import CompanionAvatar from '../companion/CompanionAvatar.jsx';

export default function LevelUpModal({ newLevel, displayStage, accessoryId, theme, onClose }) {
  const ctaRef = useRef(null);

  useEffect(() => {
    ctaRef.current?.focus({ preventScroll: true });
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      className="dq-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="levelup-title"
      onClick={onClose}
    >
      <div className="dq-modal dq-modal--sm dq-celebrate" onClick={(e) => e.stopPropagation()}>
        <div className="dq-levelup-badge" aria-hidden="true">
          <span className="dq-levelup-label">Nível</span>
          <span className="dq-levelup-num dq-tabular">{newLevel}</span>
          <span className="dq-levelup-buddy">
            <CompanionAvatar
              stage={displayStage}
              state="done"
              mood="happy"
              theme={theme}
              variant="dock"
              accessoryId={accessoryId}
              followPointer={false}
            />
          </span>
        </div>
        <h2 id="levelup-title" className="dq-celebrate-title">
          Você subiu para o nível {newLevel}.
        </h2>
        <p className="dq-muted-text">Mais XP, mais cartas abertas. Seu mascote está mais perto de evoluir.</p>
        <button ref={ctaRef} type="button" className="dq-btn dq-btn-primary dq-celebrate-cta" onClick={onClose}>
          Continuar
        </button>
      </div>
    </div>
  );
}

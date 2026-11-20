import React, { useEffect } from 'react';
import { Award } from 'lucide-react';
import CompanionAvatar from '../companion/CompanionAvatar.jsx';

export default function LevelUpModal({ newLevel, displayStage, accessoryId, theme, onClose }) {
  useEffect(() => {
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
      <div className="dq-modal dq-modal--sm dq-modal--celebrate" onClick={(e) => e.stopPropagation()}>
        <span className="dq-badge dq-badge-gold">
          <Award size={14} aria-hidden="true" /> Novo Nível Alcançado
        </span>
        <CompanionAvatar
          stage={displayStage}
          state="done"
          mood="happy"
          theme={theme}
          variant="camp"
          accessoryId={accessoryId}
        />
        <h2 id="levelup-title" className="dq-h1 dq-tabular">
          Nível {newLevel}!
        </h2>
        <p className="dq-muted-text">
          Seu domínio do Códice cresceu. Continue vencendo quests para desbloquear novas trilhas e evoluções!
        </p>
        <button type="button" className="dq-btn dq-btn-primary" onClick={onClose}>
          Continuar Jornada
        </button>
      </div>
    </div>
  );
}

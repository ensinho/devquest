import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import CompanionAvatar from '../companion/CompanionAvatar.jsx';
import { getCompanionStageData } from '../../data/companionAvatars.js';

export default function MascotEvolutionModal({ newStage, accessoryId, theme, onClose }) {
  const stageData = getCompanionStageData(newStage);

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
      aria-labelledby="evolution-title"
      onClick={onClose}
    >
      <div className="dq-modal dq-modal--sm dq-modal--celebrate" onClick={(e) => e.stopPropagation()}>
        <span className={`dq-badge ${stageData.badgeClass}`}>
          <Sparkles size={14} aria-hidden="true" /> Evolução Desbloqueada!
        </span>

        <CompanionAvatar
          stage={newStage}
          state="done"
          mood="happy"
          theme={theme}
          variant="altar"
          accessoryId={accessoryId}
        />

        <h2 id="evolution-title" className="dq-h1">
          {stageData.name}!
        </h2>
        <p className="dq-muted-text">
          Seu companheiro evoluiu para <strong>{stageData.title}</strong> — maior, com nova silhueta 2.5D e energia renovada!
        </p>
        <button type="button" className="dq-btn dq-btn-primary" onClick={onClose}>
          Incrível, vamos codar!
        </button>
      </div>
    </div>
  );
}

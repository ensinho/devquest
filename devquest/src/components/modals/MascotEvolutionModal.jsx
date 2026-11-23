import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import CompanionAvatar from '../companion/CompanionAvatar.jsx';
import { getCompanionStageData } from '../../data/companionAvatars.js';

/** Evolution = the companion card flips over into its next form, foil on. */
export default function MascotEvolutionModal({ newStage, accessoryId, theme, onClose }) {
  const stageData = getCompanionStageData(newStage);
  const previous = getCompanionStageData(Math.max(1, newStage - 1));
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
      aria-labelledby="evolution-title"
      onClick={onClose}
    >
      <div className="dq-modal dq-modal--sm dq-celebrate" onClick={(e) => e.stopPropagation()}>
        <div className={`dq-onb-ccard dq-ccard--s${newStage} dq-celebrate-card`}>
          <span className="dq-onb-ccard-plate">
            <span>{stageData.name}</span>
            <span className="dq-tabular">{newStage}/3</span>
          </span>
          <span className="dq-onb-ccard-art">
            <CompanionAvatar
              stage={newStage}
              state="done"
              mood="happy"
              theme={theme}
              variant="altar"
              accessoryId={accessoryId}
            />
          </span>
          <span className="dq-onb-ccard-type">
            <Sparkles size={12} aria-hidden="true" />
            {stageData.title} · {stageData.elementLabel}
          </span>
          <span className="dq-onb-ccard-foil" aria-hidden="true" />
        </div>

        <h2 id="evolution-title" className="dq-celebrate-title">
          {previous.name} virou {stageData.name}.
        </h2>
        <p className="dq-muted-text">
          Nova forma, nova cor: o app inteiro agora acompanha a {stageData.realmName}.
        </p>
        <button ref={ctaRef} type="button" className="dq-btn dq-btn-primary dq-celebrate-cta" onClick={onClose}>
          Voltar ao mapa
        </button>
      </div>
    </div>
  );
}

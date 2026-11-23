import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import CompanionAvatar from '../companion/CompanionAvatar.jsx';
import Burst from '../Burst.jsx';
import { getCompanionStageData } from '../../data/companionAvatars.js';

function StageCard({ stage, accessoryId, theme, className }) {
  const data = getCompanionStageData(stage);
  return (
    <div className={`dq-onb-ccard dq-evo-card ${className}`} data-companion-stage={stage}>
      <span className="dq-onb-ccard-plate">
        <span>{data.name}</span>
        <span className="dq-tabular">{stage}/3</span>
      </span>
      <span className="dq-onb-ccard-art">
        <CompanionAvatar
          stage={stage}
          state="done"
          mood="happy"
          theme={theme}
          variant="altar"
          accessoryId={accessoryId}
        />
      </span>
      <span className="dq-onb-ccard-type">
        <Sparkles size={12} aria-hidden="true" />
        {data.title} · {data.elementLabel}
      </span>
      <span className="dq-onb-ccard-foil" aria-hidden="true" />
    </div>
  );
}

/*
 * Evolution: the old form's card charges up (anticipation), turns edge-on as
 * the stage-coloured flash peaks, and the new form flips face-up in its own
 * colours; sparks finish with its settle. Timeline lives in binder.css
 * (CELEBRATIONS). The "evolve" arpeggio (App) climbs into the flash.
 */
export default function MascotEvolutionModal({ newStage, accessoryId, theme, onClose }) {
  const stageData = getCompanionStageData(newStage);
  const previousStage = Math.max(1, newStage - 1);
  const previous = getCompanionStageData(previousStage);
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
        <div className="dq-evo-stage">
          {previousStage !== newStage && (
            <StageCard
              stage={previousStage}
              accessoryId={accessoryId}
              theme={theme}
              className="dq-evo-card--old"
            />
          )}
          <span className="dq-evo-flash" aria-hidden="true" />
          <StageCard stage={newStage} accessoryId={accessoryId} theme={theme} className="dq-evo-card--new" />
          <Burst className="dq-burst--evo" count={18} radius={150} />
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

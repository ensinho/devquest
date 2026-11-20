import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import CompanionAvatar from '../companion/CompanionAvatar.jsx';
import { getCompanionStageData } from '../../data/companionAvatars.js';

export default function GuideModal({
  guide,
  isStudied,
  displayStage,
  accessoryId,
  companionName,
  theme,
  onFinishReading,
  onClose,
}) {
  const stageData = getCompanionStageData(displayStage);
  const displayName = companionName?.trim() || stageData.name;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleCompleteStudy = () => {
    onFinishReading?.(guide);
    onClose();
  };

  return (
    <div
      className="dq-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
      onClick={onClose}
    >
      <div className="dq-modal dq-modal--lg" onClick={(e) => e.stopPropagation()}>
        <div className="dq-modal-head">
          <div>
            <span className="dq-badge dq-badge-primary">{guide.category}</span>
            <h2 id="guide-modal-title" className="dq-h2">
              {guide.title}
            </h2>
          </div>
          <button
            type="button"
            className="dq-icon-btn"
            onClick={onClose}
            aria-label="Fechar grimório"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="dq-challenge-mentor">
          <CompanionAvatar
            stage={displayStage}
            state="idle"
            mood="happy"
            theme={theme}
            variant="dock"
            accessoryId={accessoryId}
            companionName={displayName}
            followPointer
          />
          <div className="dq-challenge-mentor-copy">
            <span className="dq-micro-label">Resumo de {displayName}</span>
            <p>{guide.mentorSummary}</p>
          </div>
        </div>

        <div className="dq-guide-body">
          {guide.content.map((item, index) => {
            if (item.type === 'h3') {
              return (
                <h3 key={index} className="dq-h3">
                  {item.text}
                </h3>
              );
            }
            if (item.type === 'p') {
              return (
                <p key={index} className="dq-guide-p">
                  {item.text}
                </p>
              );
            }
            if (item.type === 'code') {
              return (
                <pre key={index} className="dq-guide-code">
                  <code>{item.text}</code>
                </pre>
              );
            }
            return null;
          })}
        </div>

        <div className="dq-modal-foot dq-modal-foot--end">
          <button type="button" className="dq-btn dq-btn-primary" onClick={handleCompleteStudy}>
            <CheckCircle2 size={16} aria-hidden="true" />
            <span>
              {isStudied
                ? 'Voltar para a Biblioteca'
                : 'Concluir Leitura (+10 XP + Vínculo)'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

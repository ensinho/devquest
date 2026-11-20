import React, { useState, useEffect, useRef, useMemo } from 'react';
import { X, Skull, Lightbulb, Play, CheckCircle2, Circle } from 'lucide-react';
import CompanionAvatar from '../companion/CompanionAvatar.jsx';
import { getCompanionStageData } from '../../data/companionAvatars.js';

export default function ChallengeModal({
  quest,
  displayStage,
  accessoryId,
  companionName,
  theme,
  onClose,
  onComplete,
  onSound,
}) {
  const [code, setCode] = useState(quest.starterCode);
  const [error, setError] = useState('');
  const [hintLevel, setHintLevel] = useState(0); // 0 = hidden, 1 = conceptual, 2 = pattern example
  const [success, setSuccess] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimerRef = useRef(null);

  const stageData = getCompanionStageData(displayStage);
  const displayName = companionName?.trim() || stageData.name;
  const isBoss = Boolean(quest.isBossFight);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    };
  }, [onClose]);

  const liveChecks = useMemo(() => {
    const list = quest.checks ?? [];
    return list.map((item) => ({
      label: item.label,
      passed: Boolean(item.test(code)),
    }));
  }, [quest.checks, code]);

  const allChecksPassed =
    liveChecks.length > 0 && liveChecks.every((item) => item.passed);

  const handleCodeChange = (nextVal) => {
    setCode(nextVal);
    setError('');
    setIsTyping(true);
    if (typingTimerRef.current) window.clearTimeout(typingTimerRef.current);
    typingTimerRef.current = window.setTimeout(() => setIsTyping(false), 900);
  };

  const handleCheckCode = () => {
    setError('');
    try {
      if (quest.solution(code)) {
        setSuccess(true);
        onSound?.('win');
        window.setTimeout(() => {
          onComplete(quest.id);
          onClose();
        }, 1150);
      } else {
        onSound?.('error');
        setError(
          'Quase lá! Confira os itens pendentes no checklist ao lado ou peça uma dica.'
        );
      }
    } catch {
      onSound?.('error');
      setError('Há um erro de sintaxe no seu código. Revise parênteses, chaves e aspas!');
    }
  };

  const handleCycleHint = () => {
    onSound?.('check');
    setHintLevel((prev) => (prev >= 2 ? 0 : prev + 1));
  };

  const handleKeyDownEditor = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      handleCheckCode();
    }
  };

  // Keep the companion's adorable 2.5D face visible and expressive throughout the challenge
  const mentorState = success
    ? 'done'
    : error
      ? 'blocked'
      : isTyping
        ? 'working'
        : allChecksPassed
          ? 'done'
          : 'idle';

  const mentorMood = success || allChecksPassed || hintLevel > 0 ? 'happy' : 'neutral';

  const mentorLine = success
    ? `Mandou muito bem! +${quest.xp} XP e +Vínculo direto pra nossa dupla!`
    : error
      ? error
      : hintLevel === 2
        ? quest.hint2 ?? quest.hint
        : hintLevel === 1
          ? quest.hint
          : allChecksPassed
            ? 'Todos os requisitos acenderam! Pressione Ctrl+Enter ou clique em Validar!'
            : isTyping
              ? 'Estou acompanhando cada linha ao vivo — olho no checklist!'
              : isBoss
                ? 'Batalha de Boss! Vamos derrubar um requisito de cada vez juntos.'
                : 'Escreva sua solução abaixo — vou conferindo os requisitos com você!';

  const hintBtnLabel =
    hintLevel === 0
      ? 'Pedir dica (1/2)'
      : hintLevel === 1
        ? 'Ver exemplo (2/2)'
        : 'Ocultar dica';

  return (
    <div
      className="dq-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="challenge-modal-title"
      onClick={onClose}
    >
      <div
        className={`dq-modal dq-modal--lg ${isBoss ? 'dq-modal--boss' : ''} ${success ? 'dq-modal--success' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="dq-modal-head">
          <div>
            <span className={`dq-badge ${isBoss ? 'dq-badge-danger' : 'dq-badge-primary'}`}>
              {isBoss ? (
                <>
                  <Skull size={13} aria-hidden="true" /> Boss Fight · +{quest.xp} XP
                </>
              ) : (
                `Quest · +${quest.xp} XP`
              )}
            </span>
            <h2 id="challenge-modal-title" className="dq-h2">
              {quest.title}
            </h2>
          </div>

          <button
            type="button"
            className="dq-icon-btn"
            onClick={onClose}
            aria-label="Fechar desafio"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <p className="dq-challenge-desc">{quest.challenge}</p>

        <div className="dq-challenge-mentor" aria-live="polite">
          <CompanionAvatar
            stage={displayStage}
            state={mentorState}
            mood={mentorMood}
            theme={theme}
            variant="modal"
            accessoryId={accessoryId}
            companionName={displayName}
            followPointer
          />
          <div className="dq-challenge-mentor-copy">
            <span className="dq-micro-label">{displayName} · Mentor da Arena</span>
            <p className={error ? 'dq-text-danger' : success || allChecksPassed ? 'dq-text-live' : ''}>
              {mentorLine}
            </p>
          </div>
        </div>

        {liveChecks.length > 0 && (
          <ul className="dq-live-checks" aria-label="Checklist em tempo real do código">
            {liveChecks.map((check) => (
              <li
                key={check.label}
                className={`dq-live-check-item ${check.passed ? 'is-passed' : ''}`}
              >
                {check.passed ? (
                  <CheckCircle2 size={15} aria-hidden="true" />
                ) : (
                  <Circle size={15} aria-hidden="true" />
                )}
                <span>{check.label}</span>
              </li>
            ))}
          </ul>
        )}

        <label className="dq-editor-wrap">
          <span className="dq-micro-label">Editor de Código (Ctrl+Enter para validar)</span>
          <textarea
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            onKeyDown={handleKeyDownEditor}
            className="dq-code-editor"
            spellCheck="false"
            autoFocus
            rows={7}
          />
        </label>

        <div className="dq-modal-foot">
          <button
            type="button"
            className="dq-btn dq-btn-secondary"
            onClick={handleCycleHint}
          >
            <Lightbulb size={15} aria-hidden="true" />
            <span>{hintBtnLabel}</span>
          </button>

          <button
            type="button"
            className="dq-btn dq-btn-primary"
            onClick={handleCheckCode}
            disabled={success}
          >
            {success ? (
              <>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span>Vitória!</span>
              </>
            ) : (
              <>
                <Play size={15} aria-hidden="true" />
                <span>{isBoss ? 'Derrotar Boss' : 'Validar Código'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

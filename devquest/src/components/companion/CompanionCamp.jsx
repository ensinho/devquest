import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Zap,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Skull,
  SlidersHorizontal,
} from 'lucide-react';
import CompanionAvatar from './CompanionAvatar.jsx';
import {
  COMPANION_QUIZZES,
  getCompanionStageData,
} from '../../data/companionAvatars.js';

export default function CompanionCamp({
  user,
  skills = [],
  recommendedQuest,
  onStartQuest,
  onOpenCharacter,
  totalQuests,
  displayStage,
  accessoryId,
  companionName,
  completedCount,
  completedQuizzes,
  bondInfo,
  mentorMessage,
  avatarState,
  avatarMood,
  theme,
  onPet,
  onAnswerQuiz,
  quizTrigger = 0,
}) {
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizCursor, setQuizCursor] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (quizTrigger > 0) {
      setQuizOpen(true);
      setSelectedOption(null);
    }
  }, [quizTrigger]);

  const stageData = getCompanionStageData(displayStage);
  const displayName = companionName?.trim() || stageData.name;
  const heroName = user?.name?.trim() || 'Aventureiro';

  const activeQuiz = COMPANION_QUIZZES[quizCursor % COMPANION_QUIZZES.length];
  const quizAlreadyDone = completedQuizzes.includes(activeQuiz.id);

  const recommendedSkill = recommendedQuest
    ? skills.find((s) => s.id === recommendedQuest.skillId) ?? null
    : null;

  const stepLabel = recommendedSkill
    ? `Passo ${Math.min(recommendedSkill.doneCount + 1, recommendedSkill.totalCount)} de ${recommendedSkill.totalCount} · ${recommendedSkill.name}`
    : 'Próximo passo';

  const greetingTitle =
    completedCount === 0
      ? `Olá, ${heroName}!`
      : `Bom te ver de volta, ${heroName}!`;

  const handleToggleQuiz = () => {
    setQuizOpen((prev) => !prev);
    setSelectedOption(null);
  };

  const handlePickOption = (optionIndex) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === activeQuiz.correctIndex;
    onAnswerQuiz?.(activeQuiz, isCorrect);
  };

  const handleNextQuiz = () => {
    setQuizCursor((prev) => (prev + 1) % COMPANION_QUIZZES.length);
    setSelectedOption(null);
  };

  return (
    <section className="dq-welcome-hero" aria-label={`Boas-vindas e próximo passo — ${stageData.realmName}`}>
      <div className="dq-welcome-grid">
        {/* Left: Calm Personal Greeting + Living Companion */}
        <div className="dq-welcome-main">
          <div className="dq-welcome-avatar-col">
            <CompanionAvatar
              stage={displayStage}
              state={quizOpen && selectedOption === null ? 'waiting' : avatarState}
              mood={
                selectedOption !== null
                  ? selectedOption === activeQuiz.correctIndex
                    ? 'happy'
                    : 'neutral'
                  : avatarMood
              }
              theme={theme}
              variant="camp"
              accessoryId={accessoryId}
              companionName={displayName}
              interactive
              onPet={onPet}
            />
            <span className="dq-welcome-pet-hint">Clique em {displayName}</span>
          </div>

          <div className="dq-welcome-copy" aria-live="polite">
            <div className="dq-welcome-meta dq-tabular">
              <span className="dq-eyebrow">
                <Sparkles size={13} aria-hidden="true" />
                {stageData.realmName}
              </span>
              <span className="dq-welcome-dot" aria-hidden="true">·</span>
              <span className="dq-muted-xs">
                {completedCount}/{totalQuests} quests
              </span>
              <span className="dq-welcome-dot" aria-hidden="true">·</span>
              <span className="dq-muted-xs">
                Vínculo Nv.{bondInfo.bondLevel}
              </span>
            </div>

            <h1 className="dq-welcome-heading">{greetingTitle}</h1>
            <p className="dq-welcome-quote">{mentorMessage}</p>

            <div className="dq-camp-actions">
              <button type="button" className="dq-btn dq-btn-secondary" onClick={handleToggleQuiz}>
                <Zap size={15} aria-hidden="true" />
                <span>{quizOpen ? 'Fechar quiz' : 'Quiz rápido (+15 XP)'}</span>
              </button>
              <button type="button" className="dq-btn dq-btn-ghost" onClick={onOpenCharacter}>
                <SlidersHorizontal size={15} aria-hidden="true" />
                <span>Personalizar {displayName}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Single Guided Next-Step Card (1 Primary CTA) */}
        <div className="dq-welcome-mission">
          {recommendedQuest ? (
            <div className="dq-mission-spotlight">
              <div className="dq-mission-spotlight-top">
                <span className="dq-eyebrow">
                  {recommendedQuest.isBossFight ? (
                    <>
                      <Skull size={12} aria-hidden="true" /> Boss · {recommendedSkill?.name ?? 'Desafio'}
                    </>
                  ) : (
                    stepLabel
                  )}
                </span>
                <span className="dq-badge dq-badge-gold dq-tabular">+{recommendedQuest.xp} XP</span>
              </div>
              <h2 className="dq-h3">{recommendedQuest.title}</h2>
              <p className="dq-muted-text">{recommendedQuest.challenge}</p>
              <button
                type="button"
                className="dq-btn dq-btn-primary dq-mission-cta"
                onClick={() => onStartQuest(recommendedQuest)}
              >
                <span>
                  {completedCount === 0 ? 'Começar Primeira Quest' : 'Continuar Jornada'}
                </span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <div className="dq-mission-spotlight">
              <span className="dq-badge dq-badge-gold">Códice Completo</span>
              <h2 className="dq-h3">Todas as constelações dominadas!</h2>
              <p className="dq-muted-text">
                Explore os Grimórios ou pratique livremente na Arena de Código.
              </p>
            </div>
          )}
        </div>
      </div>

      {quizOpen && (
        <div className="dq-quiz-card" role="region" aria-label="Desafio Relâmpago do Mascote">
          <div className="dq-quiz-head">
            <span className="dq-badge dq-badge-primary">
              <Zap size={12} aria-hidden="true" /> Quiz com {displayName} · {activeQuiz.skill}
            </span>
            <span className="dq-muted-xs dq-tabular">
              {quizAlreadyDone ? 'Treino livre' : `+${activeQuiz.xp} XP + Vínculo`}
            </span>
          </div>

          <p className="dq-quiz-question">{activeQuiz.question}</p>

          <div className="dq-quiz-options">
            {activeQuiz.options.map((opt, idx) => {
              const isChosen = selectedOption === idx;
              const isCorrect = idx === activeQuiz.correctIndex;
              let stateClass = '';
              if (selectedOption !== null) {
                if (isCorrect) stateClass = 'is-correct';
                else if (isChosen) stateClass = 'is-wrong';
              }
              return (
                <button
                  key={opt}
                  type="button"
                  disabled={selectedOption !== null}
                  onClick={() => handlePickOption(idx)}
                  className={`dq-quiz-option ${stateClass}`}
                >
                  <span>{opt}</span>
                  {selectedOption !== null && isCorrect && <CheckCircle2 size={16} aria-hidden="true" />}
                  {selectedOption !== null && isChosen && !isCorrect && <XCircle size={16} aria-hidden="true" />}
                </button>
              );
            })}
          </div>

          {selectedOption !== null && (
            <div className="dq-quiz-feedback">
              <p>
                <strong>{displayName}:</strong>{' '}
                {selectedOption === activeQuiz.correctIndex
                  ? activeQuiz.rightText
                  : activeQuiz.wrongText}
              </p>
              <button type="button" className="dq-btn dq-btn-secondary" onClick={handleNextQuiz}>
                Próxima pergunta
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

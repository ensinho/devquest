import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, BookOpen, Zap, Flame, CheckCircle2, XCircle, Lock } from 'lucide-react';
import CompanionAvatar from './CompanionAvatar.jsx';
import {
  COMPANION_STAGES,
  COMPANION_ACCESSORIES,
  COMPANION_QUIZZES,
  isAccessoryUnlocked,
  getCompanionStageData,
  getNextEvolutionRequirement,
} from '../../data/companionAvatars.js';

export default function CompanionCamp({
  unlockedStage,
  displayStage,
  onPreviewStage,
  accessoryId,
  onSelectAccessory,
  companionName,
  completedCount,
  completedQuizzes,
  bondInfo,
  streak,
  mentorMessage,
  mentorTag,
  avatarState,
  avatarMood,
  theme,
  onPet,
  onAskLesson,
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
  const nextEvo = getNextEvolutionRequirement(unlockedStage, completedCount);
  const isPreviewing = displayStage !== unlockedStage;

  const activeQuiz = COMPANION_QUIZZES[quizCursor % COMPANION_QUIZZES.length];
  const quizAlreadyDone = completedQuizzes.includes(activeQuiz.id);

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
    <section className="dq-camp" aria-label={`Companion Camp — ${stageData.realmName}`}>
      <div className="dq-camp-visual">
        <div className="dq-camp-pedestal">
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
          <div className="dq-camp-identity">
            <div className="dq-camp-title-row">
              <span className={`dq-badge ${stageData.badgeClass}`}>
                Estágio {stageData.stage} · {displayName}
              </span>
              {isPreviewing && <span className="dq-badge dq-badge-gold">Prévia</span>}
            </div>
            <p className="dq-camp-subtitle">
              {stageData.title} · {stageData.realmName}
            </p>
          </div>
        </div>

        <div className="dq-camp-speech" aria-live="polite">
          <div className="dq-camp-speech-top">
            <span className="dq-eyebrow">
              <Sparkles size={13} aria-hidden="true" />
              {mentorTag}
            </span>

            <div className="dq-camp-telemetry dq-tabular">
              <span className="dq-badge dq-badge-primary">
                ♥ Vínculo Nv.{bondInfo.bondLevel} · {bondInfo.bondTitle}
              </span>
              {streak > 0 && (
                <span className="dq-badge dq-badge-gold">
                  <Flame size={12} aria-hidden="true" /> {streak} em sequência
                </span>
              )}
            </div>
          </div>

          <p className="dq-camp-quote">{mentorMessage}</p>

          <div className="dq-bond-bar-wrap">
            <div className="dq-bond-bar-meta dq-tabular">
              <span>Afinidade com {displayName}</span>
              <span>
                {bondInfo.currentInLevel} / {bondInfo.nextStepPoints}
              </span>
            </div>
            <div className="dq-bond-track" role="progressbar" aria-valuenow={bondInfo.percentage} aria-valuemin={0} aria-valuemax={100} aria-label="Nível de afinidade com o mascote">
              <div className="dq-bond-fill" style={{ width: `${bondInfo.percentage}%` }} />
            </div>
          </div>

          <div className="dq-camp-actions">
            <button type="button" className="dq-btn dq-btn-secondary" onClick={onPet}>
              <Heart size={15} aria-hidden="true" />
              <span>Carinho</span>
            </button>
            <button type="button" className="dq-btn dq-btn-secondary" onClick={handleToggleQuiz}>
              <Zap size={15} aria-hidden="true" />
              <span>{quizOpen ? 'Fechar quiz' : 'Quiz (+15 XP)'}</span>
            </button>
            <button type="button" className="dq-btn dq-btn-ghost" onClick={onAskLesson}>
              <BookOpen size={15} aria-hidden="true" />
              <span>Dica da skill</span>
            </button>
          </div>
        </div>
      </div>

      {quizOpen && (
        <div className="dq-quiz-card" role="region" aria-label="Desafio Relâmpago do Mascote">
          <div className="dq-quiz-head">
            <span className="dq-badge dq-badge-primary">
              <Zap size={12} aria-hidden="true" /> Treino com {displayName} · {activeQuiz.skill}
            </span>
            <span className="dq-muted-xs dq-tabular">
              {quizAlreadyDone ? 'Já completado (treino livre)' : `+${activeQuiz.xp} XP + Vínculo`}
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

      <div className="dq-camp-footer">
        <div className="dq-evo-track">
          <span className="dq-micro-label">
            Linha Evolutiva &amp; Tema do Sistema (clique para harmonizar o app!)
          </span>
          <div className="dq-pill-group" role="group" aria-label="Estágios evolutivos do mascote">
            {COMPANION_STAGES.map((item) => {
              const unlocked = item.stage <= unlockedStage;
              const active = item.stage === displayStage;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onPreviewStage(item.stage)}
                  aria-pressed={active}
                  className={`dq-stage-pill ${active ? 'is-active' : ''} ${unlocked ? 'is-unlocked' : ''}`}
                >
                  <span className="dq-tabular">{item.stage}.</span> {item.name}
                  <span className="dq-stage-pill-tag">
                    {unlocked ? item.elementLabel : 'Prévia'}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="dq-evo-caption dq-tabular">
            {nextEvo
              ? `Faltam ${nextEvo.remainingQuests} ${nextEvo.remainingQuests === 1 ? 'quest' : 'quests'} para evoluir para ${nextEvo.nextStage.name} (${nextEvo.nextStage.realmName}).`
              : `Evolução máxima alcançada — ${displayName} ilumina todo o Observatório Arcano!`}
          </p>
        </div>

        <div className="dq-acc-track">
          <span className="dq-micro-label">Acessórios de {displayName}</span>
          <div className="dq-pill-group" role="group" aria-label="Acessórios do mascote">
            {COMPANION_ACCESSORIES.map((acc) => {
              const unlocked = isAccessoryUnlocked(acc, completedCount, bondInfo.bondLevel);
              const active = accessoryId === acc.id;
              return (
                <button
                  key={acc.id}
                  type="button"
                  disabled={!unlocked}
                  onClick={() => onSelectAccessory(acc.id)}
                  aria-pressed={active}
                  title={unlocked ? acc.description : acc.description}
                  className={`dq-stage-pill ${active ? 'is-active' : ''}`}
                >
                  <span aria-hidden="true">
                    {unlocked ? acc.symbol : <Lock size={11} />}
                  </span>{' '}
                  {acc.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useMemo } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Circle,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Heart,
  Wand2,
} from 'lucide-react';
import CompanionAvatar from '../companion/CompanionAvatar.jsx';
import { COMPANION_STAGES, getCompanionStageData } from '../../data/companionAvatars.js';
import { HERO_SIGILS } from '../../data/gameData.js';

const TOTAL_STEPS = 3;

export default function OnboardingModal({
  initialName,
  initialCompanionName,
  initialAvatarId,
  theme,
  soundEnabled,
  previewStage,
  onPreviewStage,
  onToggleTheme,
  onToggleSound,
  onComplete,
  onSkip,
  onSound,
}) {
  const [step, setStep] = useState(1);
  const [heroName, setHeroName] = useState(initialName || 'Aventureiro');
  const [companionName, setCompanionName] = useState(initialCompanionName || '');
  const [avatarId, setAvatarId] = useState(initialAvatarId || HERO_SIGILS[0].id);
  const [spellCode, setSpellCode] = useState('<h1></h1>');
  const [petCount, setPetCount] = useState(0);

  const stageNum = previewStage ?? 1;
  const stageData = getCompanionStageData(stageNum);
  const activeCompanionName = companionName.trim() || stageData.name;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onSkip();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onSkip]);

  const spellChecks = useMemo(
    () => [
      {
        label: 'Tag <h1> aberta e fechada',
        passed: /<h1[\s>]/i.test(spellCode) && /<\/h1>/i.test(spellCode),
      },
      {
        label: 'Saudação contendo "DevQuest"',
        passed: spellCode.toLowerCase().includes('devquest'),
      },
    ],
    [spellCode]
  );

  const spellPassed = spellChecks.every((c) => c.passed);

  const handlePet = () => {
    setPetCount((c) => c + 1);
    onSound?.('pet');
  };

  const handleQuickFillSpell = () => {
    setSpellCode('<h1>Olá DevQuest!</h1>');
    onSound?.('win');
  };

  const handleFinish = () => {
    onSound?.('win');
    onComplete({
      name: heroName.trim() || 'Aventureiro',
      companionName: companionName.trim(),
      avatarId,
      spellPassed,
      petBonus: petCount > 0 ? 10 : 0,
    });
  };

  const stepProgressPct = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div
      className="dq-modal-backdrop dq-onboarding-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
    >
      <div className="dq-modal dq-modal--lg dq-onboarding-card">
        <div className="dq-onboarding-top">
          <div className="dq-onboarding-stepper">
            <span className="dq-badge dq-badge-primary dq-tabular">
              <Sparkles size={12} aria-hidden="true" /> Passo {step} de {TOTAL_STEPS}
            </span>
            <div className="dq-onboarding-bar" aria-hidden="true">
              <div className="dq-onboarding-bar-fill" style={{ width: `${stepProgressPct}%` }} />
            </div>
          </div>

          <button type="button" className="dq-btn dq-btn-ghost" onClick={onSkip}>
            Pular tour
          </button>
        </div>

        <div key={step} className="dq-onboarding-stage">
          {step === 1 && (
            <div className="dq-onboarding-step">
              <div className="dq-onboarding-hero">
                <div className="dq-onboarding-mascot-pedestal">
                  <CompanionAvatar
                    stage={stageNum}
                    state={petCount > 0 ? 'done' : 'idle'}
                    mood="happy"
                    theme={theme}
                    variant="camp"
                    accessoryId="spark"
                    companionName={activeCompanionName}
                    interactive
                    onPet={handlePet}
                  />
                  <button
                    type="button"
                    className="dq-btn dq-btn-secondary"
                    onClick={handlePet}
                  >
                    <Heart size={14} aria-hidden="true" />
                    <span>
                      {petCount > 0
                        ? `${activeCompanionName} adorou! (${petCount})`
                        : `Tocar em ${activeCompanionName}`}
                    </span>
                  </button>
                </div>

                <div className="dq-onboarding-copy">
                  <span className="dq-eyebrow">{stageData.realmName}</span>
                  <h2 id="onboarding-title" className="dq-h1">
                    Bem-vindo ao DevQuest!
                  </h2>
                  <p className="dq-muted-text">
                    Conheça <strong>{activeCompanionName}</strong>: seu companheiro 2.5D que segue seu cursor, ensina código ao vivo e transforma o tema inteiro do app conforme evolui!
                  </p>

                  <div className="dq-onboarding-inputs">
                    <label className="dq-field">
                      <span>Seu nome na Guilda</span>
                      <input
                        type="text"
                        value={heroName}
                        maxLength={28}
                        onChange={(e) => setHeroName(e.target.value)}
                        className="dq-input"
                        placeholder="Aventureiro"
                      />
                    </label>
                    <label className="dq-field">
                      <span>Apelido do Mascote (opcional)</span>
                      <input
                        type="text"
                        value={companionName}
                        maxLength={20}
                        onChange={(e) => setCompanionName(e.target.value)}
                        className="dq-input"
                        placeholder="Kitsuby"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="dq-onboarding-evo-preview">
                <span className="dq-micro-label">
                  Experimente clicar nos estágios para ver o tema mudar agora mesmo:
                </span>
                <div className="dq-pill-group">
                  {COMPANION_STAGES.map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => {
                        onSound?.('check');
                        onPreviewStage(st.stage);
                      }}
                      aria-pressed={stageNum === st.stage}
                      className={`dq-stage-pill ${stageNum === st.stage ? 'is-active' : ''}`}
                    >
                      {st.stage}. {st.name}
                      <span className="dq-stage-pill-tag">{st.elementLabel}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="dq-onboarding-step">
              <div className="dq-challenge-mentor">
                <CompanionAvatar
                  stage={stageNum}
                  state={spellPassed ? 'done' : 'working'}
                  mood={spellPassed ? 'happy' : 'neutral'}
                  theme={theme}
                  variant="modal"
                  accessoryId="spark"
                  companionName={activeCompanionName}
                  followPointer
                />
                <div className="dq-challenge-mentor-copy">
                  <span className="dq-eyebrow">Primeira Centelha · +25 XP de Boas-vindas</span>
                  <h2 id="onboarding-title" className="dq-h2">
                    {spellPassed
                      ? 'Feitiço conjurado com perfeição!'
                      : 'Escreva sua primeira linha de código comigo'}
                  </h2>
                  <p className={spellPassed ? 'dq-text-live' : 'dq-muted-text'}>
                    {spellPassed
                      ? `${activeCompanionName} brilhou! Você desbloqueou +25 XP e +20 de Vínculo iniciais.`
                      : 'Coloque "Olá DevQuest" dentro da tag <h1> abaixo e veja o checklist acender ao vivo!'}
                  </p>
                </div>
              </div>

              <ul className="dq-live-checks" aria-label="Checklist da primeira centelha">
                {spellChecks.map((check) => (
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

              <label className="dq-editor-wrap">
                <span className="dq-micro-label">Editor Rápido</span>
                <textarea
                  value={spellCode}
                  onChange={(e) => setSpellCode(e.target.value)}
                  className="dq-code-editor"
                  spellCheck="false"
                  rows={3}
                />
              </label>

              {!spellPassed && (
                <div>
                  <button
                    type="button"
                    className="dq-btn dq-btn-secondary"
                    onClick={handleQuickFillSpell}
                  >
                    <Wand2 size={15} aria-hidden="true" />
                    <span>Preencher exemplo mágico</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="dq-onboarding-step">
              <div className="dq-challenge-mentor">
                <CompanionAvatar
                  stage={stageNum}
                  state="done"
                  mood="happy"
                  theme={theme}
                  variant="modal"
                  accessoryId="spark"
                  companionName={activeCompanionName}
                  followPointer
                />
                <div className="dq-challenge-mentor-copy">
                  <span className="dq-eyebrow">Quase pronto</span>
                  <h2 id="onboarding-title" className="dq-h2">
                    Escolha seu Selo e a atmosfera do Códice
                  </h2>
                  <p className="dq-muted-text">
                    Você pode alterar tudo isso depois em <strong>Herói &amp; Mascote</strong>.
                  </p>
                </div>
              </div>

              <div>
                <span className="dq-micro-label">Selo da Classe</span>
                <div className="dq-sigil-grid" role="group" aria-label="Escolher selo de classe">
                  {HERO_SIGILS.map((sigil) => (
                    <button
                      key={sigil.id}
                      type="button"
                      onClick={() => {
                        onSound?.('check');
                        setAvatarId(sigil.id);
                      }}
                      aria-pressed={avatarId === sigil.id}
                      className={`dq-sigil-option ${avatarId === sigil.id ? 'is-selected' : ''}`}
                    >
                      <span className="dq-sigil-glyph" aria-hidden="true">
                        {sigil.glyph}
                      </span>
                      <span className="dq-sigil-name">{sigil.role}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="dq-onboarding-prefs">
                <button
                  type="button"
                  className="dq-btn dq-btn-secondary"
                  onClick={onToggleTheme}
                >
                  {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
                  <span>
                    {theme === 'dark' ? 'Testar Warm Vellum (Claro)' : 'Voltar para Obsidian (Escuro)'}
                  </span>
                </button>

                <button
                  type="button"
                  className="dq-btn dq-btn-secondary"
                  onClick={onToggleSound}
                >
                  {soundEnabled ? (
                    <Volume2 size={16} aria-hidden="true" />
                  ) : (
                    <VolumeX size={16} aria-hidden="true" />
                  )}
                  <span>{soundEnabled ? 'Sons sutis: Ligados' : 'Sons sutis: Silencioso'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="dq-modal-foot">
          {step > 1 ? (
            <button
              type="button"
              className="dq-btn dq-btn-secondary"
              onClick={() => setStep((s) => s - 1)}
            >
              <ArrowLeft size={15} aria-hidden="true" />
              <span>Voltar</span>
            </button>
          ) : (
            <span className="dq-muted-xs">Progresso salvo automaticamente no navegador</span>
          )}

          {step < TOTAL_STEPS ? (
            <button
              type="button"
              className="dq-btn dq-btn-primary"
              onClick={() => {
                onSound?.('check');
                setStep((s) => s + 1);
              }}
            >
              <span>{step === 1 ? 'Próximo: Primeira Centelha' : 'Escolher Selo & Tema'}</span>
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          ) : (
            <button type="button" className="dq-btn dq-btn-primary" onClick={handleFinish}>
              <span>Entrar na {stageData.realmName}</span>
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

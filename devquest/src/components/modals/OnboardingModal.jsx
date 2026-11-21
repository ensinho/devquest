import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  CheckCircle2,
  Circle,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Wand2,
  Sparkles,
  Code2,
  Braces,
  Zap,
} from 'lucide-react';
import CompanionAvatar from '../companion/CompanionAvatar.jsx';
import { COMPANION_STAGES, getCompanionStageData } from '../../data/companionAvatars.js';
import { HERO_SIGILS } from '../../data/gameData.js';

const TOTAL_STEPS = 3;

function getInitialStep() {
  const stepParam = Number(new URLSearchParams(window.location.search).get('onboardingStep'));
  if (stepParam >= 1 && stepParam <= TOTAL_STEPS) return stepParam;
  return 1;
}

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
  const [step, setStep] = useState(getInitialStep);
  const [heroName, setHeroName] = useState(initialName || 'Aventureiro');
  const [companionName] = useState(initialCompanionName || '');
  const [avatarId, setAvatarId] = useState(initialAvatarId || HERO_SIGILS[0].id);
  const [spellCode, setSpellCode] = useState('<h1></h1>');
  const [petCount, setPetCount] = useState(0);
  const touchStartXRef = useRef(null);

  const stageNum = previewStage ?? 1;
  const stageData = getCompanionStageData(stageNum);
  const activeCompanionName = companionName.trim() || stageData.name;
  const activeSigil = HERO_SIGILS.find((s) => s.id === avatarId) ?? HERO_SIGILS[0];

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onSkip();
        return;
      }
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (event.key === 'ArrowRight' && step < TOTAL_STEPS) {
        onSound?.('check');
        setStep((s) => Math.min(TOTAL_STEPS, s + 1));
      } else if (event.key === 'ArrowLeft' && step > 1) {
        onSound?.('check');
        setStep((s) => Math.max(1, s - 1));
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onSkip, onSound, step]);

  const spellChecks = useMemo(
    () => [
      {
        label: 'Tag <h1> aberta e fechada',
        passed: /<h1[\s>]/i.test(spellCode) && /<\/h1>/i.test(spellCode),
      },
      {
        label: 'Texto "DevQuest"',
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

  const handleNext = () => {
    if (step < TOTAL_STEPS) {
      onSound?.('check');
      setStep((s) => s + 1);
      return;
    }
    onSound?.('win');
    onComplete({
      name: heroName.trim() || 'Aventureiro',
      companionName: companionName.trim(),
      avatarId,
      spellPassed,
      petBonus: petCount > 0 ? 10 : 0,
    });
  };

  const handleSecondary = () => {
    if (step === 1) {
      onSkip();
      return;
    }
    onSound?.('check');
    setStep((s) => Math.max(1, s - 1));
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    const startX = touchStartXRef.current;
    touchStartXRef.current = null;
    if (startX === null) return;
    const endX = event.changedTouches[0]?.clientX ?? startX;
    const delta = startX - endX;
    if (Math.abs(delta) < 48) return;

    if (delta > 0 && step < TOTAL_STEPS) {
      onSound?.('check');
      setStep((s) => s + 1);
    } else if (delta < 0 && step > 1) {
      onSound?.('check');
      setStep((s) => s - 1);
    }
  };

  const primaryLabel =
    step === 1
      ? 'Começar Jornada'
      : step === 2
        ? spellPassed
          ? 'Garantir +25 XP e Avançar'
          : 'Continuar'
        : `Entrar na ${stageData.realmName}`;

  const secondaryLabel = step === 1 ? 'Pular introdução' : 'Voltar';

  return (
    <div
      className="dq-onb-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="dq-onb-sheet">
        {/* Visual Hero Card (Upper half on mobile, Left column on desktop) */}
        <div className={`dq-onb-visual dq-onb-visual--step${step}`}>
          <svg className="dq-onb-rings" viewBox="0 0 360 360" aria-hidden="true">
            <circle cx="180" cy="180" r="68" />
            <circle cx="180" cy="180" r="114" />
            <circle cx="180" cy="180" r="160" />
          </svg>

          <div className="dq-onb-visual-top">
            <span className="dq-onb-realm-chip">
              <Sparkles size={12} aria-hidden="true" />
              <span>{stageData.realmName}</span>
            </span>

            <div className="dq-onb-utility-row">
              <button
                type="button"
                className="dq-onb-mini-icon"
                onClick={onToggleSound}
                aria-pressed={soundEnabled}
                aria-label={soundEnabled ? 'Desativar sons' : 'Ativar sons sutis'}
              >
                {soundEnabled ? <Volume2 size={16} aria-hidden="true" /> : <VolumeX size={16} aria-hidden="true" />}
              </button>
              <button
                type="button"
                className="dq-onb-mini-icon"
                onClick={onToggleTheme}
                aria-label={theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
              >
                {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
              </button>
            </div>
          </div>

          {step === 1 && (
            <div key="vis-1" className="dq-onb-art-stage">
              <span className="dq-onb-orb dq-onb-orb--a" aria-hidden="true">
                <Code2 size={16} />
              </span>
              <span className="dq-onb-orb dq-onb-orb--b" aria-hidden="true">
                <Braces size={16} />
              </span>
              <span className="dq-onb-orb dq-onb-orb--c" aria-hidden="true">
                <Zap size={16} />
              </span>

              <CompanionAvatar
                stage={stageNum}
                state={petCount > 0 ? 'done' : 'idle'}
                mood="happy"
                theme={theme}
                variant="altar"
                accessoryId="spark"
                companionName={activeCompanionName}
                interactive
                onPet={handlePet}
              />

              <div className="dq-onb-stage-pills" role="group" aria-label="Prévia dos estágios evolutivos">
                {COMPANION_STAGES.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => {
                      onSound?.('check');
                      onPreviewStage(st.stage);
                    }}
                    aria-pressed={stageNum === st.stage}
                    className={`dq-onb-stage-dot ${stageNum === st.stage ? 'is-active' : ''}`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div key="vis-2" className="dq-onb-spell-stage">
              <div className="dq-onb-spell-card">
                <div className="dq-onb-spell-head">
                  <span className="dq-badge dq-badge-primary">HTML5 · +25 XP</span>
                  {!spellPassed && (
                    <button
                      type="button"
                      className="dq-onb-wand-btn"
                      onClick={handleQuickFillSpell}
                    >
                      <Wand2 size={13} aria-hidden="true" />
                      <span>Exemplo mágico</span>
                    </button>
                  )}
                </div>

                <textarea
                  value={spellCode}
                  onChange={(e) => setSpellCode(e.target.value)}
                  className="dq-onb-code-input"
                  spellCheck="false"
                  rows={2}
                  aria-label="Editor rápido da primeira centelha"
                />

                <ul className="dq-onb-checks" aria-label="Checklist da primeira centelha">
                  {spellChecks.map((check) => (
                    <li
                      key={check.label}
                      className={`dq-onb-check ${check.passed ? 'is-passed' : ''}`}
                    >
                      {check.passed ? (
                        <CheckCircle2 size={14} aria-hidden="true" />
                      ) : (
                        <Circle size={14} aria-hidden="true" />
                      )}
                      <span>{check.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="dq-onb-spell-mascot">
                <CompanionAvatar
                  stage={stageNum}
                  state={spellPassed ? 'done' : 'working'}
                  mood={spellPassed ? 'happy' : 'neutral'}
                  theme={theme}
                  variant="dock"
                  accessoryId="spark"
                  companionName={activeCompanionName}
                  followPointer
                />
                <span className={spellPassed ? 'dq-text-live' : 'dq-muted-xs'}>
                  {spellPassed
                    ? `${activeCompanionName} brilhou! +25 XP garantidos.`
                    : `Escreva "DevQuest" dentro da tag <h1>`}
                </span>
              </div>
            </div>
          )}

          {step === 3 && (
            <div key="vis-3" className="dq-onb-identity-stage">
              <div className="dq-onb-id-preview">
                <span className="dq-onb-id-sigil" aria-hidden="true">
                  {activeSigil.glyph}
                </span>
                <div className="dq-onb-id-meta">
                  <strong>{heroName.trim() || 'Aventureiro'}</strong>
                  <span>{activeSigil.role} · Nível 1</span>
                </div>
                <CompanionAvatar
                  stage={stageNum}
                  state="done"
                  mood="happy"
                  theme={theme}
                  variant="mini"
                  accessoryId="spark"
                  companionName={activeCompanionName}
                  followPointer={false}
                />
              </div>

              <div className="dq-onb-sigil-row" role="group" aria-label="Escolher selo de classe">
                {HERO_SIGILS.map((sigil) => (
                  <button
                    key={sigil.id}
                    type="button"
                    onClick={() => {
                      onSound?.('check');
                      setAvatarId(sigil.id);
                    }}
                    aria-pressed={avatarId === sigil.id}
                    className={`dq-onb-sigil-chip ${avatarId === sigil.id ? 'is-selected' : ''}`}
                  >
                    <span className="dq-onb-sigil-glyph" aria-hidden="true">
                      {sigil.glyph}
                    </span>
                    <span className="dq-onb-sigil-label">{sigil.role}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content & Thumb-Zone Action Column */}
        <div className="dq-onb-body">
          <div className="dq-onb-progress" role="tablist" aria-label="Passos da introdução">
            {[1, 2, 3].map((idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={step === idx}
                aria-label={`Passo ${idx} de ${TOTAL_STEPS}`}
                className={`dq-onb-bar-seg ${step === idx ? 'is-active' : step > idx ? 'is-done' : ''}`}
                onClick={() => {
                  onSound?.('check');
                  setStep(idx);
                }}
              />
            ))}
          </div>

          <div key={step} className="dq-onb-copy">
            {step === 1 && (
              <>
                <h2 id="onboarding-title" className="dq-onb-title">
                  Domine o Código com {activeCompanionName}
                </h2>
                <p className="dq-onb-subtitle">
                  Explore a árvore Full-Stack com um companheiro vivo que reage ao seu código e transforma o tema ao evoluir.
                </p>
              </>
            )}

            {step === 2 && (
              <>
                <h2 id="onboarding-title" className="dq-onb-title">
                  {spellPassed ? 'Primeira Centelha Conjurada!' : 'Código Real, Feedback ao Vivo'}
                </h2>
                <p className="dq-onb-subtitle">
                  {spellPassed
                    ? 'Incrível! Você desbloqueou +25 XP e +20 de Vínculo logo na largada.'
                    : 'Teste o analisador ao vivo acima ou avance direto para a Arena de Código.'}
                </p>
              </>
            )}

            {step === 3 && (
              <>
                <h2 id="onboarding-title" className="dq-onb-title">
                  Personalize sua Jornada
                </h2>
                <p className="dq-onb-subtitle">
                  Escolha seu nome na Guilda. Todo o progresso é salvo automaticamente no navegador.
                </p>
                <label className="dq-onb-name-field">
                  <span className="dq-sr-only">Seu nome na Guilda</span>
                  <input
                    type="text"
                    value={heroName}
                    maxLength={28}
                    onChange={(e) => setHeroName(e.target.value)}
                    className="dq-input dq-onb-name-input"
                    placeholder="Seu nome na Guilda"
                  />
                </label>
              </>
            )}
          </div>

          <div className="dq-onb-actions">
            <button
              type="button"
              className="dq-btn dq-btn-primary dq-onb-cta"
              onClick={handleNext}
            >
              <span>{primaryLabel}</span>
            </button>

            <button
              type="button"
              className="dq-onb-secondary"
              onClick={handleSecondary}
            >
              {secondaryLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { Sun, Moon, Volume2, VolumeX, Wand2, Sparkles, Heart } from 'lucide-react';
import CompanionAvatar from '../companion/CompanionAvatar.jsx';
import AnimatedCheckIcon from '../AnimatedCheckIcon.jsx';
import BrandMark from '../BrandMark.jsx';
import Burst from '../Burst.jsx';
import SigilIcon from '../SigilIcon.jsx';
import { COMPANION_STAGES, getCompanionStageData } from '../../data/companionAvatars.js';
import { HERO_SIGILS } from '../../data/gameData.js';
import { getSpellChecks, readHeadingText } from '../../utils/onboardingSpell.js';
import { motionToken, play, prefersReducedMotion } from '../../utils/motion.js';

const TOTAL_STEPS = 3;
/*
 * The pack: one cinematic beat, seen once (onboarding.css has the frames).
 *   0–450   anticipation: squash + wiggle          (pack, support)
 *   420–870 the top rips off                       (pack top, support)
 *   570     flash peak + the "win" chord           (decoration + sound)
 *   555→    the card flips face-up in front of the pack; its face shows
 *           under the flash, so the pack is never seen through   (lead)
 *   660–1080 the empty pack drops away behind the card
 *   880–1480 sparks finish as the card settles       (decoration)
 * A second tap skips to the end. Sound lands on the flash, not on the click.
 */
const TEAR_MS = 1500;
const TEAR_CHORD_MS = 540;
/* Step 2: "+25" flies from the preview to the XP badge; the badge pops on arrival. */
const XP_FLY_MS = 520;
const LEAVE_MS = 360;

/**
 * Pointer-driven 3D tilt + glare. Writes CSS vars straight onto the element
 * (no React re-render per pointer move). Fine pointers only.
 */
function useTilt(maxDeg, active) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return undefined;
    if (!window.matchMedia?.('(hover: hover) and (pointer: fine)').matches || prefersReducedMotion()) return undefined;
    let frame = 0;
    let px = 0.5;
    let py = 0.5;
    const apply = () => {
      frame = 0;
      el.style.setProperty('--rx', `${((0.5 - py) * maxDeg).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${((px - 0.5) * maxDeg).toFixed(2)}deg`);
      el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
    };
    const queue = () => {
      if (!frame) frame = window.requestAnimationFrame(apply);
    };
    const onMove = (event) => {
      const r = el.getBoundingClientRect();
      px = Math.min(1, Math.max(0, (event.clientX - r.left) / r.width));
      py = Math.min(1, Math.max(0, (event.clientY - r.top) / r.height));
      el.classList.add('is-tilting');
      queue();
    };
    const onLeave = () => {
      px = 0.5;
      py = 0.5;
      el.classList.remove('is-tilting');
      queue();
    };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      window.cancelAnimationFrame(frame);
    };
  }, [maxDeg, active]);
  return ref;
}

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
  const [packState, setPackState] = useState(() => (getInitialStep() > 1 ? 'open' : 'sealed'));
  const [heroName, setHeroName] = useState(
    initialName && initialName !== 'Aventureiro' ? initialName : ''
  );
  const [avatarId, setAvatarId] = useState(initialAvatarId || HERO_SIGILS[0].id);
  const [spellCode, setSpellCode] = useState('<h1></h1>');
  const [petCount, setPetCount] = useState(0);
  const [dir, setDir] = useState(1);
  const [passBurst, setPassBurst] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const touchStartXRef = useRef(null);
  const primaryRef = useRef(null);
  const tearTimerRef = useRef(null);
  const chordTimerRef = useRef(null);
  const chordPlayedRef = useRef(false);
  const leaveTimerRef = useRef(null);
  const spellCardRef = useRef(null);
  const flyRef = useRef(null);
  const packTiltRef = useTilt(22, step === 1 && packState === 'sealed');
  const cardTiltRef = useTilt(12, step === 1 && packState === 'open');

  const stageNum = previewStage ?? 1;
  const stageData = getCompanionStageData(stageNum);
  const companionName = initialCompanionName?.trim() || stageData.name;
  const activeSigil = HERO_SIGILS.find((s) => s.id === avatarId) ?? HERO_SIGILS[0];
  const signedName = heroName.trim() || 'Aventureiro';

  useEffect(() => {
    primaryRef.current?.focus({ preventScroll: true });
  }, [step]);

  useEffect(
    () => () => {
      window.clearTimeout(tearTimerRef.current);
      window.clearTimeout(chordTimerRef.current);
      window.clearTimeout(leaveTimerRef.current);
    },
    []
  );

  const playChord = () => {
    window.clearTimeout(chordTimerRef.current);
    if (chordPlayedRef.current) return;
    chordPlayedRef.current = true;
    onSound?.('win');
  };

  const openPack = () => {
    // A second tap while it tears skips straight to the reveal (interruptible).
    if (packState === 'tearing') {
      window.clearTimeout(tearTimerRef.current);
      playChord();
      setPackState('open');
      return;
    }
    if (packState !== 'sealed') return;
    if (prefersReducedMotion()) {
      playChord();
      setPackState('open');
      return;
    }
    // The click gets a tick now; the chord waits for the flash.
    onSound?.('check');
    setPackState('tearing');
    chordTimerRef.current = window.setTimeout(playChord, TEAR_CHORD_MS);
    tearTimerRef.current = window.setTimeout(() => setPackState('open'), TEAR_MS);
  };

  const goTo = (target) => {
    const next = Math.max(1, Math.min(TOTAL_STEPS, target));
    if (next === step || leaving) return;
    onSound?.('check');
    if (next > 1 && packState !== 'open') {
      window.clearTimeout(tearTimerRef.current);
      window.clearTimeout(chordTimerRef.current);
      setPackState('open');
    }
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onSkip();
        return;
      }
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (event.key === 'ArrowRight') goTo(step + 1);
      else if (event.key === 'ArrowLeft') goTo(step - 1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const spellChecks = useMemo(() => getSpellChecks(spellCode), [spellCode]);
  const spellPassed = spellChecks.every((c) => c.passed);
  const headingText = readHeadingText(spellCode);

  // The spell flips to passing: the card hops now (CSS), "+25" flies to the
  // badge, and the chord lands with the badge pop on arrival.
  useEffect(() => {
    if (!spellPassed) return undefined;
    setPassBurst((n) => n + 1);
    if (prefersReducedMotion()) {
      onSound?.('win');
      return undefined;
    }
    onSound?.('check');
    const arrive = window.setTimeout(() => onSound?.('win'), XP_FLY_MS - 40);
    return () => window.clearTimeout(arrive);
    // play once per flip to passing
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spellPassed]);

  useLayoutEffect(() => {
    const card = spellCardRef.current;
    const chip = flyRef.current;
    if (!card || !chip || !passBurst) return undefined;
    const from = card.querySelector('.dq-onb-preview')?.getBoundingClientRect();
    const to = card.querySelector('.dq-onb-xp')?.getBoundingClientRect();
    if (!from || !to) return undefined;
    const base = card.getBoundingClientRect();
    const half = chip.getBoundingClientRect();
    const at = (rect, lift = 0) =>
      `translate(${rect.left - base.left + rect.width / 2 - half.width / 2}px, ${
        rect.top - base.top + rect.height / 2 - half.height / 2 - lift
      }px)`;
    // Rises off the preview, then travels in-out to the badge and merges into it.
    const run = play(
      chip,
      [
        { transform: `${at(from)} scale(0.9)`, opacity: 0 },
        { transform: `${at(from, 14)} scale(1.12)`, opacity: 1, offset: 0.22 },
        { transform: `${at(to)} scale(0.72)`, opacity: 1, offset: 0.92 },
        { transform: `${at(to)} scale(0.6)`, opacity: 0 },
      ],
      { id: 'dq-xp-fly', duration: XP_FLY_MS, easing: motionToken('--ease-travel', 'ease-in-out') }
    );
    return () => run?.cancel();
  }, [passBurst]);

  const handlePet = () => {
    setPetCount((c) => c + 1);
    onSound?.('pet');
  };

  const handleNext = () => {
    if (step === 1 && packState !== 'open') {
      openPack();
      return;
    }
    if (step < TOTAL_STEPS) {
      goTo(step + 1);
      return;
    }
    if (leaving) return;
    onSound?.('win');
    const payload = {
      name: signedName,
      companionName: initialCompanionName?.trim() || '',
      avatarId,
      spellPassed,
      spellCode,
      petBonus: petCount > 0 ? 10 : 0,
    };
    if (prefersReducedMotion()) {
      onComplete(payload);
      return;
    }
    // The hero card stamps, the sheet lifts away, then the map takes over.
    setLeaving(true);
    leaveTimerRef.current = window.setTimeout(() => onComplete(payload), LEAVE_MS);
  };

  const handleSecondary = () => {
    if (step === 1) {
      onSkip();
      return;
    }
    goTo(step - 1);
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    const startX = touchStartXRef.current;
    touchStartXRef.current = null;
    if (startX === null) return;
    const delta = startX - (event.changedTouches[0]?.clientX ?? startX);
    if (Math.abs(delta) < 48) return;
    goTo(delta > 0 ? step + 1 : step - 1);
  };

  const primaryLabel =
    step === 1
      ? packState === 'open'
        ? 'Continuar'
        : packState === 'tearing'
          ? 'Pular animação'
          : 'Abrir o pacote'
      : step === 2
        ? spellPassed
          ? 'Pegar +25 XP e continuar'
          : 'Continuar sem jogar'
        : 'Entrar no mapa';

  const titles = {
    1: packState === 'open' ? `Este é ${companionName}.` : 'Seu primeiro pacote.',
    2: spellPassed ? 'Carta jogada. Ficou holográfica.' : 'Jogue sua primeira carta.',
    3: 'Assine sua carta de herói.',
  };
  const subtitles = {
    1:
      packState === 'open'
        ? `Ele lê o que você digita, comemora quando o validador passa e evolui em 3 formas conforme você vence quests.`
        : 'Dentro dele está o parceiro que vai codar com você. Toque no pacote para abrir.',
    2: spellPassed
      ? '+25 XP garantidos. É assim em todas as 22 quests: código de verdade, conferido enquanto você digita.'
      : 'Escreva um título com a palavra DevQuest. O validador confere a cada tecla.',
    3: 'Fica salvo neste navegador. Crie uma conta quando quiser para levar seu progresso a qualquer lugar.',
  };

  return (
    <div
      className={`dq-onb-backdrop ${leaving ? 'is-leaving' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
      aria-describedby="onboarding-sub"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`dq-onb-sheet dq-onb-sheet--step${step} ${leaving ? 'is-leaving' : ''}`}
        data-dir={dir > 0 ? 'fwd' : 'back'}
      >
        <div className="dq-onb-stage">
          <div className="dq-onb-stage-top">
            <span className="dq-onb-brand">
              <BrandMark size={22} />
              <span>DevQuest</span>
            </span>
            <div className="dq-onb-utility-row">
              <button
                type="button"
                className="dq-onb-mini-icon"
                onClick={onToggleSound}
                aria-pressed={soundEnabled}
                aria-label={soundEnabled ? 'Desativar sons' : 'Ativar sons'}
              >
                {soundEnabled ? <Volume2 size={16} aria-hidden="true" /> : <VolumeX size={16} aria-hidden="true" />}
              </button>
              <button
                type="button"
                className="dq-onb-mini-icon"
                onClick={onToggleTheme}
                aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              >
                {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
              </button>
            </div>
          </div>

          {step === 1 && (
            <div key="s1" className={`dq-onb-scene dq-onb-pack-scene is-${packState}`}>
              <div className="dq-onb-pack-stage" onClick={packState === 'tearing' ? openPack : undefined}>
                <span className="dq-onb-rays" aria-hidden="true" />
                <span className="dq-onb-flash" aria-hidden="true" />

                {packState !== 'open' && (
                  <button
                    ref={packTiltRef}
                    type="button"
                    className="dq-pack-hit"
                    onClick={packState === 'sealed' ? openPack : undefined}
                    aria-label="Abrir o pacote inicial"
                    tabIndex={-1}
                  >
                    <span className="dq-pack">
                      <span className="dq-pack-top" aria-hidden="true">
                        <span className="dq-pack-crimp" />
                      </span>
                      <span className="dq-pack-seam" aria-hidden="true" />
                      <span className="dq-pack-body" aria-hidden="true">
                        <span className="dq-pack-ring" />
                        <BrandMark size={58} />
                        <span className="dq-pack-title">DevQuest</span>
                        <span className="dq-pack-sub">Pacote inicial</span>
                        <span className="dq-pack-count">1 parceiro · 3 formas</span>
                        <span className="dq-pack-foil" />
                        <span className="dq-pack-glare" />
                      </span>
                      <span className="dq-pack-crimp dq-pack-crimp--bottom" aria-hidden="true" />
                    </span>
                  </button>
                )}

                {packState !== 'sealed' && (
                  <div ref={cardTiltRef} className="dq-onb-ccard-tilt">
                    <div className={`dq-onb-ccard dq-ccard--s${stageNum}`}>
                      <span className="dq-onb-ccard-plate">
                        <span>{companionName}</span>
                        <span className="dq-tabular">{stageNum}/3</span>
                      </span>
                      <span key={stageNum} className="dq-onb-ccard-art">
                        <CompanionAvatar
                          stage={stageNum}
                          state={petCount > 0 ? 'done' : 'idle'}
                          mood="happy"
                          theme={theme}
                          variant="altar"
                          accessoryId="spark"
                          companionName={companionName}
                          interactive
                          onPet={handlePet}
                        />
                      </span>
                      <span className="dq-onb-ccard-type">
                        <Sparkles size={12} aria-hidden="true" />
                        {stageData.title} · {stageData.elementLabel}
                      </span>
                      <span className="dq-onb-ccard-foil" aria-hidden="true" />
                      <span className="dq-onb-ccard-glare" aria-hidden="true" />
                    </div>
                  </div>
                )}

                {packState === 'tearing' && <Burst className="dq-burst--reveal" count={18} radius={150} />}
              </div>

              <div
                className="dq-onb-forms"
                role="group"
                aria-label="Ver as 3 formas"
                aria-hidden={packState !== 'open' ? true : undefined}
                inert={packState !== 'open' ? true : undefined}
              >
                {COMPANION_STAGES.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => {
                      onSound?.('check');
                      onPreviewStage(st.stage);
                    }}
                    aria-pressed={stageNum === st.stage}
                    className={`dq-onb-form-btn ${stageNum === st.stage ? 'is-active' : ''}`}
                  >
                    <span className="dq-tabular">{st.stage}</span>
                    {st.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div key="s2" className="dq-onb-scene dq-onb-spell">
              <div ref={spellCardRef} className={`dq-onb-spell-card ${spellPassed ? 'is-passed' : ''}`}>
                {passBurst > 0 && spellPassed && (
                  <span key={passBurst} ref={flyRef} className="dq-onb-xp-fly dq-tabular" aria-hidden="true">
                    +25
                  </span>
                )}
                <div className="dq-onb-spell-head">
                  <span className="dq-onb-file">index.html</span>
                  <span className={`dq-onb-xp dq-tabular ${spellPassed ? 'is-won' : ''}`}>
                    +25 XP
                    {passBurst > 0 && spellPassed && (
                      <Burst key={passBurst} className="dq-burst--pass" count={10} radius={64} />
                    )}
                  </span>
                </div>
                <textarea
                  value={spellCode}
                  onChange={(e) => setSpellCode(e.target.value)}
                  className="dq-onb-code-input"
                  spellCheck="false"
                  autoCapitalize="off"
                  autoCorrect="off"
                  rows={2}
                  aria-label="Editor da primeira carta"
                />
                <div className="dq-onb-preview" aria-label="Prévia ao vivo">
                  <span className="dq-onb-preview-label">Prévia</span>
                  {headingText ? (
                    <h1 className="dq-onb-preview-h1">{headingText}</h1>
                  ) : (
                    <span className="dq-onb-preview-empty">O título aparece aqui.</span>
                  )}
                </div>
                <ul className="dq-onb-checks" aria-live="polite">
                  {spellChecks.map((check) => (
                    <li key={check.label} className={`dq-onb-check ${check.passed ? 'is-passed' : ''}`}>
                      <AnimatedCheckIcon checked={check.passed} size={15} />
                      <span>{check.label}</span>
                    </li>
                  ))}
                </ul>
                <span className="dq-onb-spell-foil" aria-hidden="true" />
              </div>

              <div className="dq-onb-spell-side">
                <CompanionAvatar
                  stage={stageNum}
                  state={spellPassed ? 'done' : 'working'}
                  mood={spellPassed ? 'happy' : 'neutral'}
                  theme={theme}
                  variant="dock"
                  accessoryId="spark"
                  companionName={companionName}
                  followPointer
                />
                {!spellPassed && (
                  <button
                    type="button"
                    className="dq-btn dq-btn-ghost dq-onb-wand"
                    onClick={() => setSpellCode('<h1>Olá, DevQuest!</h1>')}
                  >
                    <Wand2 size={14} aria-hidden="true" />
                    <span>Me mostra</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div key="s3" className="dq-onb-scene dq-onb-hero">
              <div className="dq-onb-hcard">
                <span className="dq-onb-hcard-plate">
                  <span>{signedName}</span>
                  <span className="dq-tabular">Nv 1</span>
                </span>
                <span className="dq-onb-hcard-art">
                  <span key={activeSigil.id} className="dq-onb-hcard-sigil">
                    <SigilIcon id={activeSigil.id} size={54} />
                  </span>
                  <span className="dq-onb-hcard-buddy">
                    <CompanionAvatar
                      stage={stageNum}
                      state="done"
                      mood="happy"
                      theme={theme}
                      variant="mini"
                      accessoryId="spark"
                      companionName={companionName}
                      followPointer={false}
                    />
                  </span>
                </span>
                <span className="dq-onb-hcard-type">
                  {activeSigil.name} · {activeSigil.role}
                </span>
                <span className="dq-onb-hcard-stats dq-tabular">
                  <span>{spellPassed ? 25 : 0} XP</span>
                  <span>0/22 quests</span>
                  <span>
                    <Heart size={11} aria-hidden="true" /> {companionName}
                  </span>
                </span>
              </div>
            </div>
          )}
        </div>

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
                onClick={() => goTo(idx)}
              />
            ))}
          </div>

          <div key={`${step}-${packState === 'open'}-${spellPassed}`} className="dq-onb-copy">
            <h2 id="onboarding-title" className="dq-onb-title">
              {titles[step]}
            </h2>
            <p id="onboarding-sub" className="dq-onb-subtitle">
              {subtitles[step]}
            </p>

            {step === 3 && (
              <>
                <label className="dq-onb-field">
                  <span className="dq-onb-field-label">Nome na carta</span>
                  <input
                    type="text"
                    value={heroName}
                    maxLength={24}
                    onChange={(e) => setHeroName(e.target.value)}
                    className="dq-input dq-onb-name-input"
                    placeholder="Aventureiro"
                    autoComplete="nickname"
                  />
                </label>
                <div className="dq-onb-sigils" role="group" aria-label="Classe do herói">
                  {HERO_SIGILS.map((sigil) => (
                    <button
                      key={sigil.id}
                      type="button"
                      onClick={() => {
                        onSound?.('check');
                        setAvatarId(sigil.id);
                      }}
                      aria-pressed={avatarId === sigil.id}
                      className={`dq-onb-sigil ${avatarId === sigil.id ? 'is-selected' : ''}`}
                      title={sigil.name}
                    >
                      <SigilIcon id={sigil.id} size={17} />
                      <span>{sigil.role}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="dq-onb-actions">
            <button
              ref={primaryRef}
              type="button"
              className="dq-btn dq-btn-primary dq-onb-cta"
              onClick={handleNext}
              disabled={leaving}
            >
              <span>{primaryLabel}</span>
            </button>
            <button type="button" className="dq-onb-secondary" onClick={handleSecondary}>
              {step === 1 ? 'Pular introdução' : 'Voltar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

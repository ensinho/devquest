import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Heart, Cookie, Zap, SlidersHorizontal, CheckCircle2, XCircle, ArrowRight, X } from 'lucide-react';
import PixelCompanion from '../companion/PixelCompanion.jsx';
import {
  COMPANION_QUIZZES,
  getCompanionStageData,
  getNextEvolutionRequirement,
} from '../../data/companionAvatars.js';
import {
  SCENE_W,
  SCENE_H,
  buildScene,
  SKY_BODY,
  HEART_PATH,
  COOKIE_PATH,
  COOKIE_CHIPS,
  FIREFLIES,
} from './habitatArt.js';

const SCENE = buildScene();
const SLEEP_AFTER_MS = 40000;
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

function prefersReducedMotion() {
  return typeof window !== 'undefined' && Boolean(window.matchMedia?.(REDUCED_MOTION).matches);
}

function useCompactScene() {
  const query = '(max-width: 768px)';
  const [compact, setCompact] = useState(
    () => typeof window !== 'undefined' && Boolean(window.matchMedia?.(query).matches)
  );
  useEffect(() => {
    const mql = window.matchMedia?.(query);
    if (!mql) return undefined;
    const onChange = (event) => setCompact(event.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);
  return compact;
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

/** XP the Toca showed last time it was on screen (see the float effect). */
let lastSeenXp = null;

/**
 * The Toca: the fox's home. A living pixel scene (day in light theme, night
 * in dark), where the fox wanders, looks around, naps when you leave, eats a
 * snack, takes pets, asks quiz questions and reacts to everything you code.
 */
export default function Habitat({
  displayStage,
  accessoryId,
  companionName,
  completedCount,
  bondInfo,
  mentorMessage,
  avatarState,
  avatarMood,
  theme,
  totalXp,
  completedQuizzes,
  onPet,
  onAnswerQuiz,
  onToggleTheme,
  onOpenCharacter,
}) {
  const stageData = getCompanionStageData(displayStage);
  const displayName = companionName?.trim() || stageData.name;
  const nextEvo = getNextEvolutionRequirement(displayStage, completedCount);
  const compact = useCompactScene();

  // --- Behaviour engine ----------------------------------------------------
  const [behavior, setBehavior] = useState('idle'); // idle | walk | look | sleep | eat | love
  const [posX, setPosX] = useState(46);
  const posRef = useRef(46);
  const [facing, setFacing] = useState(1);
  const [walkMs, setWalkMs] = useState(0);
  const [floats, setFloats] = useState([]);
  const [cookie, setCookie] = useState(0);
  const lastActivityRef = useRef(Date.now());
  const behaviorRef = useRef('idle');
  const timersRef = useRef(new Set());

  const later = useCallback((fn, ms) => {
    const id = window.setTimeout(() => {
      timersRef.current.delete(id);
      fn();
    }, ms);
    timersRef.current.add(id);
    return id;
  }, []);

  useEffect(() => {
    const timers = timersRef.current;
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, []);

  const setBehaviorSafe = useCallback((next) => {
    behaviorRef.current = next;
    setBehavior(next);
  }, []);

  const pushFloat = useCallback(
    (text, kind = 'xp') => {
      const id = `${Date.now()}-${Math.random()}`;
      setFloats((list) => [...list.slice(-4), { id, text, kind }]);
      later(() => setFloats((list) => list.filter((f) => f.id !== id)), 1500);
    },
    [later]
  );

  // Wander / look around / nap loop.
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let tick = 0;
    const loop = () => {
      tick = window.setTimeout(() => {
        const current = behaviorRef.current;
        const idleFor = Date.now() - lastActivityRef.current;
        if (current === 'idle') {
          if (idleFor > SLEEP_AFTER_MS) {
            setBehaviorSafe('sleep');
          } else {
            const roll = Math.random();
            if (roll < 0.5) {
              const from = posRef.current;
              const target = Math.round(randomBetween(16, 70));
              const ms = Math.max(700, Math.abs(target - from) * 70);
              posRef.current = target;
              setFacing(target >= from ? 1 : -1);
              setWalkMs(ms);
              setPosX(target);
              setBehaviorSafe('walk');
              window.setTimeout(() => {
                if (behaviorRef.current === 'walk') setBehaviorSafe('idle');
              }, ms);
            } else if (roll < 0.75) {
              setBehaviorSafe('look');
              window.setTimeout(() => {
                if (behaviorRef.current === 'look') setBehaviorSafe('idle');
              }, 1700);
            }
          }
        }
        loop();
      }, randomBetween(3800, 7200));
    };
    loop();
    return () => window.clearTimeout(tick);
  }, [setBehaviorSafe]);

  // Any sign of life wakes the fox up.
  useEffect(() => {
    let lastWrite = 0;
    const onActivity = () => {
      const now = Date.now();
      if (now - lastWrite < 400) return;
      lastWrite = now;
      lastActivityRef.current = now;
      if (behaviorRef.current === 'sleep') {
        setBehaviorSafe('look');
        pushFloat('!', 'alert');
        later(() => {
          if (behaviorRef.current === 'look') setBehaviorSafe('idle');
        }, 1600);
      }
    };
    window.addEventListener('pointermove', onActivity, { passive: true });
    window.addEventListener('keydown', onActivity);
    window.addEventListener('touchstart', onActivity, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onActivity);
      window.removeEventListener('keydown', onActivity);
      window.removeEventListener('touchstart', onActivity);
    };
  }, [later, pushFloat, setBehaviorSafe]);

  // XP floats up like a damage number whenever it grows — including XP won in
  // the Arena: the Toca remounts on the way back, so compare with the last XP
  // it showed (module scope, this session) and float the difference on arrival.
  const prevXpRef = useRef(lastSeenXp ?? totalXp);
  useEffect(() => {
    const gained = totalXp - prevXpRef.current;
    prevXpRef.current = totalXp;
    lastSeenXp = totalXp;
    if (gained > 0) pushFloat(`+${gained} XP`, 'xp');
  }, [totalXp, pushFloat]);

  const handlePet = () => {
    lastActivityRef.current = Date.now();
    onPet?.();
    setBehaviorSafe('love');
    pushFloat('heart', 'heart');
    later(() => pushFloat('heart', 'heart'), 180);
    later(() => {
      if (behaviorRef.current === 'love') setBehaviorSafe('idle');
    }, 1300);
  };

  const handleSnack = () => {
    lastActivityRef.current = Date.now();
    setCookie(Date.now());
    later(() => {
      setCookie(0);
      setBehaviorSafe('eat');
      onPet?.();
      pushFloat('nhac!', 'word');
    }, 650);
    later(() => {
      if (behaviorRef.current === 'eat') setBehaviorSafe('idle');
    }, 2300);
  };

  // --- Quiz (the fox asks, you answer) --------------------------------------
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizCursor, setQuizCursor] = useState(() => {
    const firstOpen = COMPANION_QUIZZES.findIndex((q) => !completedQuizzes.includes(q.id));
    return firstOpen === -1 ? 0 : firstOpen;
  });
  const [picked, setPicked] = useState(null);
  const quiz = COMPANION_QUIZZES[quizCursor % COMPANION_QUIZZES.length];
  const answered = picked !== null;
  const rightAnswer = answered && picked === quiz.correctIndex;

  const pickOption = (index) => {
    if (answered) return;
    setPicked(index);
    onAnswerQuiz?.(quiz, index === quiz.correctIndex, index);
  };

  const nextQuestion = () => {
    setQuizCursor((c) => (c + 1) % COMPANION_QUIZZES.length);
    setPicked(null);
  };

  // --- What the fox is doing right now -------------------------------------
  const appReacting = avatarState && avatarState !== 'idle';
  let spriteState = 'idle';
  let spriteMood = avatarMood === 'happy' ? 'happy' : 'neutral';
  if (quizOpen && !answered) spriteState = 'waiting';
  else if (quizOpen && answered) spriteState = rightAnswer ? 'done' : 'blocked';
  else if (appReacting) spriteState = avatarState;
  else if (behavior === 'love') spriteState = 'done';
  else if (behavior === 'look') spriteState = 'waiting';
  else if (['walk', 'sleep', 'eat'].includes(behavior)) spriteState = behavior;
  if (behavior === 'sleep' && !appReacting) spriteMood = 'neutral';

  const bubbleText = quizOpen
    ? quiz.question
    : behavior === 'sleep' && !appReacting
      ? 'zzz… (mexe o mouse que eu acordo)'
      : mentorMessage;

  const foxTrackStyle = useMemo(
    () => ({ '--fox-x': `${posX}%`, '--fox-walk': `${walkMs}ms`, '--fox-facing': facing }),
    [posX, walkMs, facing]
  );

  return (
    <section className={`dq-hab dq-hab--s${displayStage}`} aria-label={`A toca de ${displayName}`}>
      <div className="dq-hab-plate">
        <span className="dq-hab-name">{displayName}</span>
        <span className="dq-hab-title">{stageData.title}</span>
        <span className="dq-hab-stage dq-tabular" title="Forma evolutiva">
          {displayStage}/3
        </span>
        <button
          type="button"
          className="dq-hab-plate-btn"
          onClick={onOpenCharacter}
          aria-label={`Personalizar ${displayName}`}
          title="Personalizar"
        >
          <SlidersHorizontal size={16} aria-hidden="true" />
        </button>
      </div>

      <div className={`dq-hab-scene is-${behavior}`}>
        <svg
          className="dq-hab-land"
          viewBox={`0 0 ${SCENE_W} ${SCENE_H}`}
          preserveAspectRatio="xMidYMax slice"
          shapeRendering="crispEdges"
          aria-hidden="true"
          focusable="false"
        >
          <path className="dq-hab-stars" d={SCENE.stars} />
          <g className="dq-hab-cloud dq-hab-cloud--a">
            <path d={SCENE.cloudA} />
          </g>
          <g className="dq-hab-cloud dq-hab-cloud--b">
            <path d={SCENE.cloudB} />
          </g>
          <path className="dq-hab-far" d={SCENE.farHill} />
          <path className="dq-hab-den-rim" d={SCENE.denRim} />
          <path className="dq-hab-den" d={SCENE.den} />
          <path className="dq-hab-near" d={SCENE.nearGround} />
          <path className="dq-hab-shade" d={SCENE.groundShade} />
          <path className="dq-hab-sign" d={SCENE.signPost} />
          <path className="dq-hab-grass" d={SCENE.grassTufts} />
          <path className="dq-hab-grass" d={SCENE.stems} />
          <path className="dq-hab-flower-a" d={SCENE.flowersA} />
          <path className="dq-hab-flower-b" d={SCENE.flowersB} />
        </svg>

        <span className="dq-hab-fireflies" aria-hidden="true">
          {FIREFLIES.map(([x, y], i) => (
            <span key={i} style={{ left: `${(x / SCENE_W) * 100}%`, top: `${(y / SCENE_H) * 100}%` }} />
          ))}
        </span>

        <button
          type="button"
          className="dq-hab-sky-body"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Fazer amanhecer (tema claro)' : 'Fazer anoitecer (tema escuro)'}
          title={theme === 'dark' ? 'Amanhecer' : 'Anoitecer'}
        >
          <svg viewBox="0 0 24 24" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
            <path className="dq-hab-sky-rim" d={SKY_BODY.rim} />
            <path className="dq-hab-sky-disc" d={SKY_BODY.disc} />
            <path className="dq-hab-sky-craters" d={SKY_BODY.craters} />
          </svg>
        </button>

        <p className="dq-hab-bubble" aria-live="polite">
          {bubbleText}
        </p>

        {/* full-width track: walking is a transform on the track, never `left` */}
        <div className="dq-hab-fox-track" style={foxTrackStyle}>
          <div className="dq-hab-fox">
            <button
              type="button"
              className="dq-hab-fox-btn"
              onClick={handlePet}
              aria-label={`Fazer carinho em ${displayName}`}
            >
              <span className="dq-hab-fox-flip">
                <PixelCompanion
                  stage={displayStage}
                  state={spriteState}
                  mood={spriteMood}
                  size={compact ? 112 : 168}
                  accessoryId={accessoryId}
                  followPointer={behavior !== 'sleep'}
                  label={`${displayName} — ${stageData.title}`}
                />
              </span>
            </button>

            {behavior === 'sleep' && !appReacting && (
              <span className="dq-hab-zzz" aria-hidden="true">
                <span>z</span>
                <span>z</span>
                <span>Z</span>
              </span>
            )}

            {cookie > 0 && (
              <svg key={cookie} className="dq-hab-cookie" viewBox="0 0 8 8" shapeRendering="crispEdges" aria-hidden="true">
                <path className="dq-hab-cookie-body" d={COOKIE_PATH} />
                <path className="dq-hab-cookie-chip" d={COOKIE_CHIPS} />
              </svg>
            )}

            <span className="dq-hab-floats" aria-hidden="true">
              {floats.map((f, i) =>
                f.kind === 'heart' ? (
                  <svg
                    key={f.id}
                    className="dq-hab-float is-heart"
                    style={{ '--float-x': `${(i % 3) * 18 - 18}px` }}
                    viewBox="0 0 8 8"
                    shapeRendering="crispEdges"
                  >
                    <path d={HEART_PATH} />
                  </svg>
                ) : (
                  <span key={f.id} className={`dq-hab-float is-${f.kind}`}>
                    {f.text}
                  </span>
                )
              )}
            </span>
        </div>
        </div>
      </div>

      {quizOpen ? (
        <div className="dq-hab-quiz">
          <div className="dq-hab-quiz-top dq-tabular">
            <span>
              Quiz de {quiz.skill} · {completedQuizzes.includes(quiz.id) ? 'treino' : `+${quiz.xp} XP`}
            </span>
            <button
              type="button"
              className="dq-icon-btn"
              onClick={() => {
                setQuizOpen(false);
                setPicked(null);
              }}
              aria-label="Fechar quiz"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
          <div className="dq-hab-options" role="group" aria-label="Alternativas">
            {quiz.options.map((option, index) => {
              const isCorrect = index === quiz.correctIndex;
              const state = answered ? (isCorrect ? 'is-correct' : picked === index ? 'is-wrong' : 'is-dim') : '';
              return (
                <button
                  key={option}
                  type="button"
                  className={`dq-hab-option ${state}`}
                  onClick={() => pickOption(index)}
                  aria-disabled={answered || undefined}
                >
                  <span className="dq-hab-option-key" aria-hidden="true">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <code>{option}</code>
                  {answered && isCorrect && <CheckCircle2 size={16} aria-hidden="true" />}
                  {answered && picked === index && !isCorrect && <XCircle size={16} aria-hidden="true" />}
                </button>
              );
            })}
          </div>
          {answered && (
            <div className="dq-hab-quiz-feedback" aria-live="polite">
              <p>{rightAnswer ? quiz.rightText : quiz.wrongText}</p>
              <button type="button" className="dq-btn dq-btn-secondary" onClick={nextQuestion}>
                <span>Outra</span>
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="dq-hab-actions">
            <button type="button" className="dq-hab-action" onClick={handlePet}>
              <Heart size={18} aria-hidden="true" />
              <span>Carinho</span>
            </button>
            <button type="button" className="dq-hab-action" onClick={handleSnack} disabled={cookie > 0}>
              <Cookie size={18} aria-hidden="true" />
              <span>Petisco</span>
            </button>
            <button type="button" className="dq-hab-action" onClick={() => setQuizOpen(true)}>
              <Zap size={18} aria-hidden="true" />
              <span>Quiz</span>
            </button>
          </div>

          <dl className="dq-hab-stats dq-tabular">
            <div>
              <dt>Vínculo</dt>
              <dd>
                <span>Nv {bondInfo.bondLevel}</span>
                <span className="dq-hab-meter" aria-hidden="true">
                  <span style={{ '--fill': `${bondInfo.percentage}%` }} />
                </span>
              </dd>
            </div>
            <div>
              <dt>Evolução</dt>
              <dd>
                <span>
                  {nextEvo
                    ? nextEvo.remainingQuests > 0
                      ? `faltam ${nextEvo.remainingQuests} quest${nextEvo.remainingQuests > 1 ? 's' : ''}`
                      : 'pronta!'
                    : 'forma final'}
                </span>
                <span className="dq-hab-meter is-evo" aria-hidden="true">
                  <span style={{ '--fill': `${Math.round((nextEvo?.progressRatio ?? 1) * 100)}%` }} />
                </span>
              </dd>
            </div>
          </dl>
        </>
      )}
    </section>
  );
}

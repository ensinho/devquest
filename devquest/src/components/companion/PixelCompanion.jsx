import { useEffect, useRef, useState } from 'react';
import '../../styles/companion-pixel.css';
import {
  PIXEL_ACCESSORIES,
  PIXEL_GRID,
  PIXEL_STATES,
  getPixelStage,
  getStageArt,
  resolveExpression,
} from './pixelSprites.js';

const BLINK_MIN_MS = 3000;
const BLINK_SPREAD_MS = 3000;
const BLINK_HOLD_MS = 140;
const ACCESSORY_MIN_SIZE = 48;
const GAZE_DEAD_ZONE = 0.18;
const NO_GAZE = Object.freeze({ x: 0, y: 0 });
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function readReducedMotion() {
  return typeof window !== 'undefined' && Boolean(window.matchMedia?.(REDUCED_MOTION_QUERY).matches);
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(readReducedMotion);
  useEffect(() => {
    const query = window.matchMedia?.(REDUCED_MOTION_QUERY);
    if (!query) return undefined;
    const onChange = (event) => setReduced(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

/** One <path> per palette key for a sprite layer. */
function PixelLayer({ paths, className }) {
  return (
    <g className={className}>
      {Object.entries(paths).map(([key, d]) => (
        <path key={key} className={`px-${key}`} d={d} />
      ))}
    </g>
  );
}

function HaloRing({ phases, side }) {
  return (
    <g className={`dq-px__halo dq-px__halo--${side}`}>
      {phases.map(({ spark, outline }, phase) =>
        spark ? (
          <g key={phase} className={`dq-px__halo-phase dq-px__halo-phase--${phase}`}>
            <path className="px-outline" d={outline} />
            <path className="px-spark" d={spark} />
          </g>
        ) : null
      )}
    </g>
  );
}

export default function PixelCompanion({
  stage = 1,
  state = 'idle',
  mood = 'neutral',
  size = 96,
  accessoryId = 'none',
  followPointer = false,
  label,
  className = '',
}) {
  const rootRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const [blinking, setBlinking] = useState(false);
  const [gaze, setGaze] = useState(NO_GAZE);

  const stageData = getPixelStage(stage);
  const art = getStageArt(stageData.stage);
  const safeState = PIXEL_STATES.includes(state) ? state : 'idle';
  const safeMood = mood === 'happy' ? 'happy' : 'neutral';
  const pixelSize = Math.max(16, Number(size) || 96);
  const accessory = PIXEL_ACCESSORIES.includes(accessoryId) ? accessoryId : 'none';
  const showAccessory = accessory !== 'none' && pixelSize >= ACCESSORY_MIN_SIZE;
  const showEffects = pixelSize >= ACCESSORY_MIN_SIZE;

  const baseExpression = resolveExpression({ state: safeState, mood: safeMood });
  const canBlink = baseExpression === 'open' && !reducedMotion;
  const expression = canBlink && blinking ? 'blink' : baseExpression;
  const eyeShift = followPointer ? gaze : NO_GAZE;

  // Natural blink every 3–6s while the eyes are simply open.
  useEffect(() => {
    if (!canBlink) return undefined;
    let waitTimer = 0;
    let holdTimer = 0;
    const schedule = () => {
      waitTimer = window.setTimeout(() => {
        setBlinking(true);
        holdTimer = window.setTimeout(() => {
          setBlinking(false);
          schedule();
        }, BLINK_HOLD_MS);
      }, BLINK_MIN_MS + Math.random() * BLINK_SPREAD_MS);
    };
    schedule();
    return () => {
      window.clearTimeout(waitTimer);
      window.clearTimeout(holdTimer);
      setBlinking(false);
    };
  }, [canBlink]);

  // Pupils drift one pixel toward the pointer (rAF-throttled).
  useEffect(() => {
    if (!followPointer) return undefined;
    let frame = 0;
    let pointer = null;
    const update = () => {
      frame = 0;
      const node = rootRef.current;
      if (!node || !pointer) return;
      const rect = node.getBoundingClientRect();
      const dx = pointer.x - (rect.left + rect.width / 2);
      const dy = pointer.y - (rect.top + rect.height / 2);
      const x = Math.abs(dx) < rect.width * GAZE_DEAD_ZONE ? 0 : Math.sign(dx);
      const y = Math.abs(dy) < rect.height * GAZE_DEAD_ZONE ? 0 : Math.sign(dy);
      setGaze((prev) => (prev.x === x && prev.y === y ? prev : { x, y }));
    };
    const onMove = (event) => {
      pointer = { x: event.clientX, y: event.clientY };
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [followPointer]);

  const rootClass = [
    'dq-px',
    `dq-px--s${stageData.stage}`,
    `is-${safeState}`,
    `mood-${safeMood}`,
    showAccessory ? `has-${accessory}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      ref={rootRef}
      className={rootClass}
      role="img"
      aria-label={label || `${stageData.name} — ${stageData.title}`}
      data-expression={expression}
      style={{ '--px-size': `${pixelSize}px` }}
    >
      <svg
        className="dq-px__svg"
        viewBox={`0 0 ${PIXEL_GRID} ${PIXEL_GRID}`}
        width={pixelSize}
        height={pixelSize}
        shapeRendering="crispEdges"
        aria-hidden="true"
        focusable="false"
      >
        <path className="dq-px__shadow" d={art.shadow} />

        <g className="dq-px__creature">
          <g className="dq-px__shake">
            {showAccessory && accessory === 'glasses' ? <HaloRing phases={art.haloBack} side="back" /> : null}
            <PixelLayer className="dq-px__tail dq-px__tail--a" paths={art.tail[0]} />
            <PixelLayer className="dq-px__tail dq-px__tail--b" paths={art.tail[1]} />
            <PixelLayer className="dq-px__body dq-px__body--rest" paths={art.body} />
            <PixelLayer className="dq-px__body dq-px__body--perk" paths={art.perk} />
            <g className="dq-px__eyes" style={{ transform: `translate(${eyeShift.x}px, ${eyeShift.y}px)` }}>
              <PixelLayer className={`dq-px__eye dq-px__eye--${expression}`} paths={art.eyes[expression]} />
            </g>
            {showAccessory && accessory === 'scarf' ? <PixelLayer className="dq-px__scarf" paths={art.scarf} /> : null}
            {showAccessory && accessory === 'crown' ? <PixelLayer className="dq-px__crown" paths={art.crown} /> : null}
            {showAccessory && accessory === 'glasses' ? <HaloRing phases={art.haloFront} side="front" /> : null}
            {showEffects && safeState === 'blocked' ? <PixelLayer className="dq-px__sweat" paths={art.sweat} /> : null}
          </g>
        </g>

        {showAccessory && accessory === 'spark' ? <PixelLayer className="dq-px__spark" paths={art.spark} /> : null}
        {showAccessory && accessory === 'stars'
          ? art.stars.map((paths, i) => (
              <PixelLayer key={`star-${i}`} className={`dq-px__star dq-px__star--${i + 1}`} paths={paths} />
            ))
          : null}
        {showEffects && safeState === 'done'
          ? art.sparkles.map((paths, i) => (
              <PixelLayer key={`sparkle-${i}`} className={`dq-px__sparkle dq-px__sparkle--${i + 1}`} paths={paths} />
            ))
          : null}
      </svg>
    </span>
  );
}

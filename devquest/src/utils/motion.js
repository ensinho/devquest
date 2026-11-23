/**
 * Tiny WAAPI layer for the few motions CSS can't express on its own
 * (restartable shakes, FLIP travel, measured fly-to-target).
 *
 * - Timing comes from the motion tokens in tokens.primitives.css, so CSS and
 *   JS share one curve/duration scale.
 * - Every call is a no-op under prefers-reduced-motion (the global CSS rule
 *   does not reach element.animate()).
 * - Calls tagged with an `id` cancel the previous run of the same id on that
 *   element first, so double clicks restart instead of stacking.
 */

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);

const tokenCache = new Map();

/** Reads a motion token (`--ease-*`, `--duration-*`) from :root once. */
export function motionToken(name, fallback) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return fallback;
  if (!tokenCache.has(name)) {
    const value = window.getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    tokenCache.set(name, value || fallback);
  }
  return tokenCache.get(name);
}

/**
 * CSS time → ms. Accepts both units: the production minifier rewrites
 * `640ms` as `.64s`, so never parseFloat a token and assume ms (W-021).
 */
export function parseCssTime(value, fallback) {
  const text = String(value ?? '').trim();
  const number = Number.parseFloat(text);
  if (!Number.isFinite(number)) return fallback;
  if (text.endsWith('ms')) return number;
  if (text.endsWith('s')) return number * 1000;
  return number;
}

/** Duration token in ms, whatever unit the stylesheet ended up using. */
export function durationToken(name, fallback) {
  return parseCssTime(motionToken(name, ''), fallback);
}

/** Restartable element.animate(); returns the Animation or null when skipped. */
export function play(el, keyframes, options = {}) {
  if (!el || typeof el.animate !== 'function' || prefersReducedMotion()) return null;
  if (options.id) {
    el.getAnimations?.().forEach((anim) => {
      if (anim.id === options.id) anim.cancel();
    });
  }
  return el.animate(keyframes, options);
}

/** Firm "no" shake: three shrinking oscillations, no overshoot past the start. */
export const SHAKE_FRAMES = [
  { transform: 'translateX(0)' },
  { transform: 'translateX(-5px)', offset: 0.2 },
  { transform: 'translateX(4px)', offset: 0.45 },
  { transform: 'translateX(-2px)', offset: 0.7 },
  { transform: 'translateX(0)' },
];

export function shake(el) {
  return play(el, SHAKE_FRAMES, {
    id: 'dq-shake',
    duration: durationToken('--duration-shake', 320),
    easing: motionToken('--ease-standard', 'ease-out'),
  });
}

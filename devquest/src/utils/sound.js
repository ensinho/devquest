let sharedCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  if (!sharedCtx) {
    sharedCtx = new AudioCtx();
  }
  if (sharedCtx.state === 'suspended') {
    sharedCtx.resume().catch(() => {});
  }
  return sharedCtx;
}

const SOUND_PATTERNS = {
  pet: [
    { freq: 523.25, dur: 0.08, delay: 0 },
    { freq: 659.25, dur: 0.12, delay: 0.07 },
  ],
  check: [{ freq: 587.33, dur: 0.07, delay: 0 }],
  win: [
    { freq: 523.25, dur: 0.09, delay: 0 },
    { freq: 659.25, dur: 0.09, delay: 0.08 },
    { freq: 783.99, dur: 0.18, delay: 0.16 },
  ],
  evolve: [
    { freq: 440, dur: 0.1, delay: 0 },
    { freq: 554.37, dur: 0.1, delay: 0.09 },
    { freq: 659.25, dur: 0.12, delay: 0.18 },
    { freq: 880, dur: 0.25, delay: 0.28 },
  ],
  error: [{ freq: 246.94, dur: 0.14, delay: 0 }],
};

export function playCompanionSound(kind, enabled = false) {
  if (!enabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;
  const notes = SOUND_PATTERNS[kind];
  if (!notes) return;

  const now = ctx.currentTime;
  for (const note of notes) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(note.freq, now + note.delay);
    gain.gain.setValueAtTime(0.0001, now + note.delay);
    gain.gain.exponentialRampToValueAtTime(0.06, now + note.delay + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + note.delay + note.dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + note.delay);
    osc.stop(now + note.delay + note.dur + 0.02);
  }
}

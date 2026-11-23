import React, { useEffect, useRef, useState } from 'react';
import CompanionAvatar from '../companion/CompanionAvatar.jsx';
import RollingNumber from '../RollingNumber.jsx';
import Burst from '../Burst.jsx';
import { prefersReducedMotion } from '../../utils/motion.js';

/*
 * Level up, one gesture: the medal pops in with the modal (lead), the number
 * rolls from the old level as it lands (support), sparks finish with the roll
 * (decoration). The CTA is focusable from the first frame.
 */
const ROLL_AT_MS = 260;

export default function LevelUpModal({ newLevel, displayStage, accessoryId, theme, onClose }) {
  const ctaRef = useRef(null);
  const [shownLevel, setShownLevel] = useState(() =>
    prefersReducedMotion() ? newLevel : Math.max(1, newLevel - 1)
  );

  useEffect(() => {
    const t = window.setTimeout(() => setShownLevel(newLevel), ROLL_AT_MS);
    return () => window.clearTimeout(t);
  }, [newLevel]);

  useEffect(() => {
    ctaRef.current?.focus({ preventScroll: true });
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      className="dq-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="levelup-title"
      onClick={onClose}
    >
      <div className="dq-modal dq-modal--sm dq-celebrate" onClick={(e) => e.stopPropagation()}>
        <div className="dq-levelup-badge" aria-hidden="true">
          <span className="dq-levelup-label">Nível</span>
          <RollingNumber value={shownLevel} className="dq-levelup-num" />
          <Burst className="dq-burst--levelup" count={14} radius={96} />
          <span className="dq-levelup-buddy">
            <CompanionAvatar
              stage={displayStage}
              state="done"
              mood="happy"
              theme={theme}
              variant="dock"
              accessoryId={accessoryId}
              followPointer={false}
            />
          </span>
        </div>
        <h2 id="levelup-title" className="dq-celebrate-title">
          Você subiu para o nível {newLevel}.
        </h2>
        <p className="dq-muted-text">Mais XP, mais cartas abertas. Seu mascote está mais perto de evoluir.</p>
        <button ref={ctaRef} type="button" className="dq-btn dq-btn-primary dq-celebrate-cta" onClick={onClose}>
          Continuar
        </button>
      </div>
    </div>
  );
}

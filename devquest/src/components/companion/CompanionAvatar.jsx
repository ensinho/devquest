import React, { useState } from 'react';
import PixelCompanion from './PixelCompanion.jsx';
import BlobCompanion from './BlobCompanion.jsx';
import { getCompanionStageData } from '../../data/companionAvatars.js';

const PIXEL_SIZES = { mini: 40, dock: 72, modal: 112, camp: 144, altar: 176, habitat: 168 };
const USE_BLOB =
  typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('mascot') === 'blob';

/**
 * The companion everywhere in the app. Renders the hand-drawn pixel fox
 * (the blob from v1 stays reachable with ?mascot=blob for comparison).
 */
export default function CompanionAvatar(props) {
  const {
    stage = 1,
    state = 'idle',
    mood = 'neutral',
    variant = 'camp',
    accessoryId = 'spark',
    companionName = '',
    followPointer = true,
    interactive = false,
    onPet,
    size,
    className = '',
  } = props;
  const [petBurst, setPetBurst] = useState(0);

  if (USE_BLOB) return <BlobCompanion {...props} />;

  const stageData = getCompanionStageData(stage);
  const displayName = companionName?.trim() || stageData.name;
  const pixelSize = size ?? PIXEL_SIZES[variant] ?? 120;
  const isPetted = petBurst > 0;

  const sprite = (
    <span className={`dq-companion dq-companion--${variant} ${className}`}>
      <PixelCompanion
        stage={stage}
        state={isPetted ? 'done' : state}
        mood={isPetted ? 'happy' : mood}
        size={pixelSize}
        accessoryId={accessoryId}
        followPointer={followPointer}
        label={`${displayName} — ${stageData.title}`}
      />
      {isPetted && (
        <span key={petBurst} className="dq-companion-hearts" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      )}
    </span>
  );

  if (!interactive) return sprite;

  const handlePet = () => {
    const burst = Date.now();
    setPetBurst(burst);
    onPet?.();
    window.setTimeout(() => setPetBurst((current) => (current === burst ? 0 : current)), 1300);
  };

  return (
    <button
      type="button"
      className="dq-avatar-trigger"
      onClick={handlePet}
      aria-label={`Fazer carinho em ${displayName}`}
      title={`Fazer carinho em ${displayName}`}
    >
      {sprite}
    </button>
  );
}

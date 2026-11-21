import React, { useEffect, useRef, useState } from 'react';
import { mountAvatar } from 'open-bot-avatar/dom';
import { getCompanionStageData } from '../../data/companionAvatars.js';
import { resolveTokenHex } from '../../utils/theme.js';

export default function CompanionAvatar({
  stage = 1,
  state = 'idle',
  mood = 'neutral',
  theme = 'dark',
  variant = 'camp',
  accessoryId = 'spark',
  companionName = '',
  followPointer = true,
  interactive = false,
  onPet,
  className = '',
}) {
  const hostRef = useRef(null);
  const instanceRef = useRef(null);
  const [petBurst, setPetBurst] = useState(false);

  const stageData = getCompanionStageData(stage);
  const displayName = companionName?.trim() || stageData.name;
  const pixelSize = stageData.sizePx[variant] ?? 104;
  const effectiveMood = petBurst ? 'happy' : mood;
  const effectiveState = petBurst ? 'done' : state;

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const color = resolveTokenHex(stageData.colorToken, '#2dd4bf');
    const eyeColor = resolveTokenHex(stageData.eyeColorToken, '#0e1116');

    const mounted = mountAvatar(host, {
      definition: stageData.definition,
      color,
      eyeColor,
      depth: stageData.depth,
      state: effectiveState,
      mood: effectiveMood,
      followPointer,
      label: `${displayName} — ${stageData.title}`,
    });

    instanceRef.current = mounted;

    return () => {
      mounted.destroy();
      instanceRef.current = null;
    };
    // Remount cleanly when definition/stage changes to recalculate volumetric geometry
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stageData.id]);

  useEffect(() => {
    const mounted = instanceRef.current;
    if (!mounted) return;

    const color = resolveTokenHex(stageData.colorToken, '#2dd4bf');
    const eyeColor = resolveTokenHex(stageData.eyeColorToken, '#0e1116');

    mounted.update({
      color,
      eyeColor,
      depth: stageData.depth,
      state: effectiveState,
      mood: effectiveMood,
      followPointer,
      label: `${displayName} — ${stageData.title}`,
    });
  }, [
    theme,
    stageData.colorToken,
    stageData.eyeColorToken,
    stageData.depth,
    stageData.title,
    displayName,
    effectiveState,
    effectiveMood,
    followPointer,
  ]);

  const handlePet = () => {
    if (!interactive) return;
    setPetBurst(true);
    if (onPet) onPet();
    window.setTimeout(() => setPetBurst(false), 1400);
  };

  const showAccessories = variant !== 'mini';

  const inner = (
    <span
      className={`dq-avatar-frame dq-avatar-stage-${stage} ${petBurst ? 'is-petted' : ''} ${className}`}
      style={{ '--avatar-size': `${pixelSize}px` }}
    >
      <span className="dq-avatar-aura" aria-hidden="true" />
      {showAccessories && accessoryId === 'glasses' && <span className="dq-acc-orbit" aria-hidden="true" />}
      {showAccessories && accessoryId === 'crown' && (
        <span className="dq-acc-crown" aria-hidden="true" title="Coroa Relíquia">
          ♛
        </span>
      )}
      {showAccessories && accessoryId === 'spark' && (
        <span className="dq-acc-spark" aria-hidden="true">
          &lt;/&gt;
        </span>
      )}
      {showAccessories && accessoryId === 'scarf' && (
        <span className="dq-acc-scarf" aria-hidden="true" title="Lenço da Guilda">
          ❖
        </span>
      )}
      {showAccessories && accessoryId === 'stars' && (
        <span className="dq-acc-stars" aria-hidden="true" title="Halo Estelar">
          ✦ ✧
        </span>
      )}
      <span ref={hostRef} className="dq-avatar-host" />
      {petBurst && (
        <span className="dq-pet-hearts" aria-hidden="true">
          ✦ ♥
        </span>
      )}
    </span>
  );

  if (!interactive) {
    return inner;
  }

  return (
    <button
      type="button"
      className="dq-avatar-trigger"
      onClick={handlePet}
      aria-label={`Interagir com ${displayName} (${stageData.title})`}
      title={`Clique para interagir com ${displayName}`}
    >
      {inner}
    </button>
  );
}

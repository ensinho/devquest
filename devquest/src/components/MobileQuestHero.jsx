import React from 'react';
import { Play, Heart, Zap, Sparkles } from 'lucide-react';
import CompanionAvatar from './companion/CompanionAvatar.jsx';
import XPBar from './XPBar.jsx';
import { getCompanionStageData } from '../data/companionAvatars.js';

export default function MobileQuestHero({
  user,
  completedCount,
  totalQuests,
  displayStage,
  accessoryId,
  companionName,
  theme,
  avatarState,
  avatarMood,
  recommendedQuest,
  onStartRecommended,
  onPet,
  onOpenQuiz,
}) {
  const stageData = getCompanionStageData(displayStage);
  const displayName = companionName?.trim() || stageData.name;
  const pct = Math.round((completedCount / Math.max(1, totalQuests)) * 100);

  return (
    <section className="dq-mhero" aria-label="Resumo rápido da jornada">
      <div className="dq-mhero-stack">
        <div className="dq-mhero-card">
          <div className="dq-mhero-card-top">
            <div className="dq-mhero-realm">
              <span className="dq-mhero-pill">
                <Sparkles size={12} aria-hidden="true" />
                <span>{stageData.realmName}</span>
              </span>
              <span className="dq-mhero-level dq-tabular">Nível {user.level}</span>
            </div>

            <div className="dq-mhero-companion">
              <CompanionAvatar
                stage={displayStage}
                state={avatarState}
                mood={avatarMood}
                theme={theme}
                variant="mini"
                accessoryId={accessoryId}
                companionName={displayName}
                followPointer={false}
                interactive
                onPet={onPet}
              />
            </div>
          </div>

          <div className="dq-mhero-main">
            <div className="dq-mhero-metric">
              <div className="dq-mhero-xp dq-tabular">
                <strong>{user.currentXp}</strong>
                <span>/ {user.nextLevelXp} XP</span>
              </div>
              <p className="dq-mhero-delta dq-tabular">
                {completedCount} de {totalQuests} quests ({pct}%) · {displayName} ao seu lado
              </p>
            </div>

            {recommendedQuest && (
              <button
                type="button"
                className="dq-mhero-fab"
                onClick={() => onStartRecommended(recommendedQuest)}
                aria-label={`Continuar quest recomendada: ${recommendedQuest.title}`}
                title={`Continuar: ${recommendedQuest.title}`}
              >
                <Play size={19} aria-hidden="true" />
              </button>
            )}
          </div>

          <XPBar currentXp={user.currentXp} nextLevelXp={user.nextLevelXp} compact />
        </div>

        <div className="dq-mhero-tray" role="group" aria-label="Ações rápidas">
          <button
            type="button"
            className="dq-mhero-tray-btn"
            disabled={!recommendedQuest}
            onClick={() => recommendedQuest && onStartRecommended(recommendedQuest)}
          >
            <Play size={15} aria-hidden="true" />
            <span>Continuar</span>
          </button>

          <button type="button" className="dq-mhero-tray-btn" onClick={onPet}>
            <Heart size={15} aria-hidden="true" />
            <span>Carinho</span>
          </button>

          <button type="button" className="dq-mhero-tray-btn" onClick={onOpenQuiz}>
            <Zap size={15} aria-hidden="true" />
            <span>Quiz +15</span>
          </button>
        </div>
      </div>
    </section>
  );
}

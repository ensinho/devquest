import React, { useState } from 'react';
import {
  Heart,
  Star,
  Lock,
  User,
  SlidersHorizontal,
  Circle,
  Code2,
  Ribbon,
  Orbit,
  Crown,
  PackageOpen,
  Check,
} from 'lucide-react';
import SigilIcon from '../components/SigilIcon.jsx';
import AccountPanel from '../components/AccountPanel.jsx';
import CompanionAvatar from '../components/companion/CompanionAvatar.jsx';
import {
  COMPANION_STAGES,
  COMPANION_ACCESSORIES,
  isAccessoryUnlocked,
  getCompanionStageData,
  getNextEvolutionRequirement,
} from '../data/companionAvatars.js';
import { HERO_SIGILS } from '../data/gameData.js';

const MOOD_TESTS = [
  { id: 'idle', label: 'Curioso', state: 'idle', mood: 'neutral' },
  { id: 'happy', label: 'Feliz', state: 'done', mood: 'happy' },
  { id: 'working', label: 'Codando', state: 'working', mood: 'neutral' },
  { id: 'waiting', label: 'Atento', state: 'waiting', mood: 'happy' },
  { id: 'blocked', label: 'Alerta', state: 'blocked', mood: 'neutral' },
];

const ACCESSORY_ICONS = {
  none: Circle,
  spark: Code2,
  scarf: Ribbon,
  glasses: Orbit,
  crown: Crown,
  stars: Star,
};

const PANEL_TABS = [
  { id: 'companion', label: 'Mascote', icon: Heart },
  { id: 'hero', label: 'Herói', icon: User },
  { id: 'session', label: 'Conta', icon: SlidersHorizontal },
];

function getAccessoryUnlockText(acc, unlocked, isEquipped) {
  if (isEquipped) return 'Equipado';
  if (unlocked) return 'Liberado';
  if (acc.id === 'stars') return `${acc.minCompletedQuests} quests ou Nv.${acc.minBondLevel}`;
  if (acc.minCompletedQuests > 0) {
    return `${acc.minCompletedQuests} quest${acc.minCompletedQuests > 1 ? 's' : ''}`;
  }
  return `Vínculo Nv.${acc.minBondLevel}`;
}

function getStageStatusText(stage, unlockedStage, isActive) {
  if (isActive && stage.stage <= unlockedStage) return 'Forma ativa';
  if (stage.stage <= unlockedStage) return 'Desbloqueada';
  return `${stage.minCompletedQuests} quests · Nv.${stage.minLevel}`;
}

export default function CharacterPage({
  user,
  userClass,
  bondInfo,
  completedCount,
  totalQuests,
  unlockedStage,
  displayStage,
  onPreviewStage,
  accessoryId,
  onSelectAccessory,
  onAvatarSelect,
  onUpdateName,
  onUpdateCompanionName,
  onReplayOnboarding,
  onResetSandbox,
  onLogout,
  isGuestMode,
  account,
  onOpenAuth,
  onResendVerification,
  onExportData,
  onDeleteAccount,
  theme,
  onPet,
}) {
  const [testMoodId, setTestMoodId] = useState('happy');
  const [activeTab, setActiveTab] = useState('companion');
  const activeMood = MOOD_TESTS.find((m) => m.id === testMoodId) ?? MOOD_TESTS[0];
  const stageData = getCompanionStageData(displayStage);
  const displayName = user.companionName?.trim() || stageData.name;
  const activeSigil = HERO_SIGILS.find((s) => s.id === user.avatarId) ?? HERO_SIGILS[0];
  const nextEvo = getNextEvolutionRequirement(unlockedStage, completedCount);
  const heroDisplayName = user.name?.trim() || 'Aventureiro';

  return (
    <div className="dq-profile">
      {/* Row 1: Unified Hero Identity Banner (always visible, zero duplicate XP bar) */}
      <header className="dq-profile-hero">
        <div className="dq-profile-identity">
          <span className="dq-profile-sigil" aria-hidden="true">
            <SigilIcon id={activeSigil.id} size={24} />
          </span>
          <div className="dq-profile-identity-copy">
            <div className="dq-profile-identity-top">
              <h1 className="dq-profile-name">{heroDisplayName}</h1>
              <span className="dq-badge dq-badge-gold dq-tabular">Nv. {user.level}</span>
            </div>
            <p className="dq-profile-role">
              {userClass} · {activeSigil.name}
            </p>
          </div>
        </div>

        <dl className="dq-profile-kpis dq-tabular">
          <div className="dq-profile-kpi">
            <dt>Quests</dt>
            <dd>
              {completedCount}
              <span>/{totalQuests}</span>
            </dd>
          </div>
          <div className="dq-profile-kpi">
            <dt>Vínculo</dt>
            <dd>Nv. {bondInfo.bondLevel}</dd>
          </div>
          <div className="dq-profile-kpi">
            <dt>Sequência</dt>
            <dd>
              {user.streak ?? 0}
              <span> dias</span>
            </dd>
          </div>
        </dl>
      </header>

      {/* Row 2: Balanced 2-Column Studio (Compact Portrait Showcase + Structured Controls) */}
      <div className="dq-profile-grid">
        <section className="dq-showcase" aria-labelledby="showcase-title">
          <div className="dq-showcase-plate">
            <h2 id="showcase-title" className="dq-showcase-name">
              {displayName}
            </h2>
            <span className="dq-showcase-title">{stageData.title}</span>
            <span className="dq-showcase-stage dq-tabular">{stageData.stage}/3</span>
          </div>

          <div className="dq-showcase-canvas">
            <CompanionAvatar
              stage={displayStage}
              state={activeMood.state}
              mood={activeMood.mood}
              theme={theme}
              variant="altar"
              accessoryId={accessoryId}
              companionName={displayName}
              interactive
              onPet={onPet}
            />
            <p className="dq-showcase-desc">{stageData.unlockHint}</p>

            <div className="dq-mood-strip" role="group" aria-label="Testar expressões do mascote">
              {MOOD_TESTS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setTestMoodId(m.id)}
                  aria-pressed={testMoodId === m.id}
                  className={`dq-mood-btn ${testMoodId === m.id ? 'is-active' : ''}`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <dl className="dq-showcase-meters dq-tabular">
            <div>
              <dt>Vínculo</dt>
              <dd>
                <span>Nv. {bondInfo.bondLevel}</span>
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

          <button type="button" className="dq-btn dq-btn-secondary dq-showcase-cta" onClick={onPet}>
            <Heart size={16} aria-hidden="true" />
            <span>Fazer carinho em {displayName}</span>
          </button>
        </section>

        <section className="dq-studio-panel" aria-label="Personalização do Mascote, Herói e Conta">
          <div className="dq-char-tabs" role="tablist" aria-label="Seções de personalização">
            {PANEL_TABS.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab.id)}
                  className={`dq-char-tab ${isSelected ? 'is-active' : ''}`}
                >
                  <Icon size={15} aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {activeTab === 'companion' && (
            <div className="dq-studio-pane" role="tabpanel" aria-label="Personalizar Mascote">
              <div className="dq-studio-section">
                <div className="dq-studio-section-head">
                  <h3 className="dq-studio-section-title">Formas evolutivas</h3>
                  <span className="dq-studio-section-hint">A cor do app acompanha a forma</span>
                </div>
                <div className="dq-stage-cards" role="group" aria-label="Escolher forma do mascote">
                  {COMPANION_STAGES.map((s) => {
                    const isActive = displayStage === s.stage;
                    const isUnlocked = s.stage <= unlockedStage;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => onPreviewStage(s.stage)}
                        aria-pressed={isActive}
                        className={`dq-stage-card ${isActive ? 'is-active' : ''}`}
                      >
                        <div className="dq-stage-card-top">
                          <span className="dq-stage-card-num dq-tabular">{s.stage}</span>
                          <span className="dq-stage-card-badge">
                            {isUnlocked ? s.elementLabel : 'Prévia'}
                          </span>
                        </div>
                        <span className="dq-stage-card-name">{s.name}</span>
                        <span className="dq-stage-card-meta dq-tabular">
                          {getStageStatusText(s, unlockedStage, isActive)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="dq-studio-section">
                <div className="dq-studio-section-head">
                  <h3 className="dq-studio-section-title">Acessórios</h3>
                  <span className="dq-studio-section-hint dq-tabular">
                    {COMPANION_ACCESSORIES.filter((acc) =>
                      isAccessoryUnlocked(acc, completedCount, bondInfo.bondLevel)
                    ).length}
                    /{COMPANION_ACCESSORIES.length} liberados
                  </span>
                </div>
                <div className="dq-acc-grid" role="group" aria-label={`Acessórios de ${displayName}`}>
                  {COMPANION_ACCESSORIES.map((acc) => {
                    const unlocked = isAccessoryUnlocked(acc, completedCount, bondInfo.bondLevel);
                    const isEquipped = accessoryId === acc.id;
                    const AccIcon = unlocked ? ACCESSORY_ICONS[acc.id] ?? Star : Lock;
                    return (
                      <button
                        key={acc.id}
                        type="button"
                        disabled={!unlocked}
                        onClick={() => onSelectAccessory(acc.id)}
                        aria-pressed={isEquipped}
                        title={acc.description}
                        className={`dq-acc-tile ${isEquipped ? 'is-active' : ''}`}
                      >
                        <span className="dq-acc-tile-icon" aria-hidden="true">
                          {isEquipped ? <Check size={15} strokeWidth={2.8} /> : <AccIcon size={15} />}
                        </span>
                        <span className="dq-acc-tile-copy">
                          <span className="dq-acc-tile-name">{acc.label.replace(' </ >', '')}</span>
                          <span className="dq-acc-tile-sub dq-tabular">
                            {getAccessoryUnlockText(acc, unlocked, isEquipped)}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <label className="dq-studio-section">
                <span className="dq-studio-section-head">
                  <span className="dq-studio-section-title">Apelido do mascote</span>
                  <span className="dq-studio-section-hint">Opcional · padrão: {stageData.name}</span>
                </span>
                <input
                  type="text"
                  value={user.companionName ?? ''}
                  placeholder={stageData.name}
                  maxLength={20}
                  onChange={(e) => onUpdateCompanionName(e.target.value)}
                  className="dq-studio-input"
                />
              </label>
            </div>
          )}

          {activeTab === 'hero' && (
            <div className="dq-studio-pane" role="tabpanel" aria-label="Perfil do Herói">
              <label className="dq-studio-section">
                <span className="dq-studio-section-head">
                  <span className="dq-studio-section-title">Nome na carta</span>
                  <span className="dq-studio-section-hint">Exibido no perfil e nas celebrações</span>
                </span>
                <input
                  type="text"
                  value={user.name}
                  maxLength={28}
                  placeholder="Aventureiro"
                  onChange={(e) => onUpdateName(e.target.value)}
                  className="dq-studio-input"
                />
              </label>

              <div className="dq-studio-section">
                <div className="dq-studio-section-head">
                  <h3 className="dq-studio-section-title">Selo de classe</h3>
                  <span className="dq-studio-section-hint">{activeSigil.name}</span>
                </div>
                <div className="dq-class-grid" role="group" aria-label="Escolher selo de classe">
                  {HERO_SIGILS.map((sigil) => {
                    const isSelected = user.avatarId === sigil.id;
                    return (
                      <button
                        key={sigil.id}
                        type="button"
                        onClick={() => onAvatarSelect(sigil.id)}
                        aria-pressed={isSelected}
                        className={`dq-class-tile ${isSelected ? 'is-selected' : ''}`}
                      >
                        <span className="dq-class-tile-icon" aria-hidden="true">
                          <SigilIcon id={sigil.id} size={18} />
                        </span>
                        <span className="dq-class-tile-copy">
                          <span className="dq-class-tile-name">{sigil.name}</span>
                          <span className="dq-class-tile-role">{sigil.role}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'session' && (
            <div className="dq-studio-pane dq-account-stack" role="tabpanel" aria-label="Conta e sessão">
              <div className="dq-session-card">
                <h3 className="dq-h3">Introdução</h3>
                <p className="dq-muted-text">
                  Reveja a abertura do pacote inicial e a primeira carta com {displayName}.
                </p>
                <button
                  type="button"
                  onClick={onReplayOnboarding}
                  className="dq-btn dq-btn-secondary"
                >
                  <PackageOpen size={15} aria-hidden="true" />
                  <span>Abrir o pacote de novo</span>
                </button>
              </div>

              <AccountPanel
                isGuestMode={isGuestMode}
                account={account}
                onOpenAuth={onOpenAuth}
                onResetSandbox={onResetSandbox}
                onLogout={onLogout}
                onResendVerification={onResendVerification}
                onExportData={onExportData}
                onDeleteAccount={onDeleteAccount}
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

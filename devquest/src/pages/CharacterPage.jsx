import React, { useState } from 'react';
import {
  Heart,
  Sparkles,
  Lock,
  User,
  SlidersHorizontal,
  Circle,
  Code2,
  Ribbon,
  Orbit,
  Crown,
} from 'lucide-react';
import SigilIcon from '../components/SigilIcon.jsx';
import AccountPanel from '../components/AccountPanel.jsx';
import CompanionAvatar from '../components/companion/CompanionAvatar.jsx';
import XPBar from '../components/XPBar.jsx';
import {
  COMPANION_STAGES,
  COMPANION_ACCESSORIES,
  isAccessoryUnlocked,
  getCompanionStageData,
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
  stars: Sparkles,
};

const PANEL_TABS = [
  { id: 'companion', label: 'Mascote', icon: Sparkles },
  { id: 'hero', label: 'Herói', icon: User },
  { id: 'session', label: 'Conta', icon: SlidersHorizontal },
];

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

  return (
    <div className="dq-page-stack">
      <div className="dq-character-grid">
        {/* Left: Focused Visual Altar */}
        <section className="dq-altar-panel" aria-labelledby="altar-title">
          <div className="dq-ccard-plate dq-altar-plate">
            <h1 id="altar-title" className="dq-ccard-name">
              {displayName}
            </h1>
            <span className="dq-ccard-stage dq-tabular">{stageData.stage}/3</span>
          </div>
          <p className="dq-ccard-type">
            <Sparkles size={13} aria-hidden="true" />
            {stageData.title} · {stageData.realmName}
          </p>

          <div className="dq-altar-stage">
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
            <p className="dq-muted-text dq-altar-desc">{stageData.unlockHint}</p>

            <div className="dq-pill-group" role="group" aria-label="Testar expressões do mascote">
              {MOOD_TESTS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setTestMoodId(m.id)}
                  aria-pressed={testMoodId === m.id}
                  className={`dq-stage-pill ${testMoodId === m.id ? 'is-active' : ''}`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <button type="button" className="dq-btn dq-btn-secondary" onClick={onPet}>
            <Heart size={16} aria-hidden="true" />
            <span>Celebrar com {displayName}</span>
          </button>
        </section>

        {/* Right: Clean 3-Tab Progressive Disclosure Panel */}
        <section className="dq-guild-column" aria-label="Configurações do Mascote, Herói e Sessão">
          <div className="dq-panel-block">
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
              <div className="dq-char-tab-pane" role="tabpanel" aria-label="Personalizar Mascote">
                <label className="dq-field">
                  <span>Apelido do mascote (opcional)</span>
                  <input
                    type="text"
                    value={user.companionName ?? ''}
                    placeholder={stageData.name}
                    maxLength={20}
                    onChange={(e) => onUpdateCompanionName(e.target.value)}
                    className="dq-input"
                  />
                </label>

                <div>
                  <span className="dq-micro-label">Formas (a cor do app acompanha)</span>
                  <div className="dq-pill-group">
                    {COMPANION_STAGES.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => onPreviewStage(s.stage)}
                        aria-pressed={displayStage === s.stage}
                        className={`dq-stage-pill ${displayStage === s.stage ? 'is-active' : ''}`}
                      >
                        {s.stage}. {s.name}
                        <span className="dq-stage-pill-tag">
                          {s.stage <= unlockedStage ? s.elementLabel : 'Prévia'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="dq-micro-label">Acessórios de {displayName}</span>
                  <div className="dq-pill-group">
                    {COMPANION_ACCESSORIES.map((acc) => {
                      const unlocked = isAccessoryUnlocked(acc, completedCount, bondInfo.bondLevel);
                      return (
                        <button
                          key={acc.id}
                          type="button"
                          disabled={!unlocked}
                          onClick={() => onSelectAccessory(acc.id)}
                          aria-pressed={accessoryId === acc.id}
                          title={acc.description}
                          className={`dq-stage-pill ${accessoryId === acc.id ? 'is-active' : ''}`}
                        >
                          {(() => {
                            const AccIcon = unlocked ? ACCESSORY_ICONS[acc.id] ?? Sparkles : Lock;
                            return <AccIcon size={13} aria-hidden="true" />;
                          })()}
                          <span>{acc.label.replace(' </ >', '')}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hero' && (
              <div className="dq-char-tab-pane" role="tabpanel" aria-label="Perfil do Herói">
                <div className="dq-guild-card-head">
                  <span className="dq-sigil-badge" aria-hidden="true">
                    <SigilIcon id={activeSigil.id} size={26} />
                  </span>
                  <div>
                    <span className="dq-badge dq-badge-gold dq-tabular">Nível {user.level}</span>
                    <h2 className="dq-h2">{user.name}</h2>
                    <p className="dq-muted-text">{userClass}</p>
                  </div>
                </div>

                <div className="dq-guild-stats dq-tabular">
                  <div className="dq-stat-tile">
                    <span className="dq-muted-xs">Quests</span>
                    <strong>
                      {completedCount}/{totalQuests}
                    </strong>
                  </div>
                  <div className="dq-stat-tile">
                    <span className="dq-muted-xs">Vínculo</span>
                    <strong>Nv.{bondInfo.bondLevel}</strong>
                  </div>
                  <div className="dq-stat-tile">
                    <span className="dq-muted-xs">Sequência</span>
                    <strong>{user.streak ?? 0}</strong>
                  </div>
                </div>

                <div className="dq-guild-xp">
                  <div className="dq-guild-xp-top dq-tabular">
                    <span className="dq-muted-xs">Progresso do nível</span>
                    <span className="dq-xp-numbers">
                      {user.currentXp} <span className="dq-xp-of">/ {user.nextLevelXp} XP</span>
                    </span>
                  </div>
                  <XPBar currentXp={user.currentXp} nextLevelXp={user.nextLevelXp} />
                </div>

                <label className="dq-field">
                  <span>Nome na carta</span>
                  <input
                    type="text"
                    value={user.name}
                    maxLength={28}
                    onChange={(e) => onUpdateName(e.target.value)}
                    className="dq-input"
                  />
                </label>

                <div>
                  <span className="dq-micro-label">Classe</span>
                  <div className="dq-sigil-grid" role="group" aria-label="Escolher selo de classe">
                    {HERO_SIGILS.map((sigil) => (
                      <button
                        key={sigil.id}
                        type="button"
                        onClick={() => onAvatarSelect(sigil.id)}
                        aria-pressed={user.avatarId === sigil.id}
                        className={`dq-sigil-option ${user.avatarId === sigil.id ? 'is-selected' : ''}`}
                      >
                        <span className="dq-sigil-glyph" aria-hidden="true">
                          <SigilIcon id={sigil.id} size={18} />
                        </span>
                        <span className="dq-sigil-name">{sigil.role}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'session' && (
              <div className="dq-char-tab-pane" role="tabpanel" aria-label="Conta e sessão">
                <div className="dq-session-card">
                  <h2 className="dq-h3">Introdução</h2>
                  <p className="dq-muted-text">
                    Reveja a abertura do pacote e a primeira carta com {displayName}.
                  </p>
                  <button
                    type="button"
                    onClick={onReplayOnboarding}
                    className="dq-btn dq-btn-secondary"
                  >
                    <Sparkles size={15} aria-hidden="true" />
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
          </div>
        </section>
      </div>
    </div>
  );
}

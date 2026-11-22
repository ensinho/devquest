import React, { useState } from 'react';
import {
  RotateCcw,
  LogOut,
  Heart,
  Sparkles,
  Lock,
  User,
  SlidersHorizontal,
} from 'lucide-react';
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

const PANEL_TABS = [
  { id: 'companion', label: 'Mascote', icon: Sparkles },
  { id: 'hero', label: 'Herói', icon: User },
  { id: 'session', label: 'Sessão', icon: SlidersHorizontal },
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
        <section className="dq-altar-panel" aria-label="Altar Evolutivo do Mascote">
          <div className="dq-section-header">
            <div>
              <span className="dq-eyebrow">
                <Sparkles size={13} aria-hidden="true" />
                {stageData.realmName}
              </span>
              <h1 className="dq-h1">
                {displayName} — {stageData.title}
              </h1>
            </div>
            <span className={`dq-badge ${stageData.badgeClass}`}>
              Estágio {stageData.stage} / 3
            </span>
          </div>

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

          <button type="button" className="dq-btn dq-btn-primary" onClick={onPet}>
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
                  <span>Apelido do Mascote (opcional)</span>
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
                  <span className="dq-micro-label">Evolução &amp; Tema Harmonizado</span>
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
                          <span aria-hidden="true">
                            {unlocked ? acc.symbol : <Lock size={11} />}
                          </span>{' '}
                          {acc.label}
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
                    {activeSigil.glyph}
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
                  <div className="dq-header-xp-top dq-tabular">
                    <span className="dq-muted-xs">Progresso do Nível</span>
                    <span className="dq-xp-numbers">
                      {user.currentXp} / {user.nextLevelXp} XP
                    </span>
                  </div>
                  <XPBar currentXp={user.currentXp} nextLevelXp={user.nextLevelXp} />
                </div>

                <label className="dq-field">
                  <span>Nome na Guilda</span>
                  <input
                    type="text"
                    value={user.name}
                    maxLength={28}
                    onChange={(e) => onUpdateName(e.target.value)}
                    className="dq-input"
                  />
                </label>

                <div>
                  <span className="dq-micro-label">Selo da Classe</span>
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
                          {sigil.glyph}
                        </span>
                        <span className="dq-sigil-name">{sigil.role}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'session' && (
              <div className="dq-char-tab-pane" role="tabpanel" aria-label="Preferências de Sessão">
                <div className="dq-session-card">
                  <h2 className="dq-h3">Tour de Introdução</h2>
                  <p className="dq-muted-text">
                    Reveja a apresentação interativa de {displayName} e a Primeira Centelha a qualquer momento.
                  </p>
                  <button
                    type="button"
                    onClick={onReplayOnboarding}
                    className="dq-btn dq-btn-secondary"
                  >
                    <Sparkles size={15} aria-hidden="true" />
                    <span>Rever Onboarding</span>
                  </button>
                </div>

                <div className="dq-session-card">
                  <h2 className="dq-h3">
                    {isGuestMode ? 'Progresso Local (Sandbox)' : 'Conta Conectada'}
                  </h2>
                  <p className="dq-muted-text">
                    {isGuestMode
                      ? 'Seu progresso fica salvo automaticamente neste navegador. Reinicie apenas se quiser começar do nível 1.'
                      : 'Encerre sua sessão atual para voltar ao modo Sandbox local.'}
                  </p>
                  {isGuestMode ? (
                    <button
                      type="button"
                      onClick={onResetSandbox}
                      className="dq-btn dq-btn-danger"
                    >
                      <RotateCcw size={15} aria-hidden="true" />
                      <span>Reiniciar Progresso Local</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={onLogout}
                      className="dq-btn dq-btn-danger"
                    >
                      <LogOut size={15} aria-hidden="true" />
                      <span>Sair da Conta</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

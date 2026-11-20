import React from 'react';
import {
  Shield,
  Compass,
  BookOpen,
  User,
  Sun,
  Moon,
  Cloud,
  Volume2,
  VolumeX,
} from 'lucide-react';
import XPBar from './XPBar.jsx';
import { HERO_SIGILS } from '../data/gameData.js';
import { getCompanionStageData } from '../data/companionAvatars.js';

const NAV_ITEMS = [
  { id: 'quests', label: 'Mapa & Quests', icon: Compass },
  { id: 'guides', label: 'Grimórios', icon: BookOpen },
  { id: 'character', label: 'Herói & Mascote', icon: User },
];

export default function Header({
  user,
  userClass,
  displayStage,
  activePage,
  onNavClick,
  theme,
  onToggleTheme,
  soundEnabled,
  onToggleSound,
  isGuestMode,
  onOpenAuth,
}) {
  const sigil = HERO_SIGILS.find((s) => s.id === user.avatarId) ?? HERO_SIGILS[0];
  const stageData = getCompanionStageData(displayStage);
  const companionName = user.companionName?.trim() || stageData.name;

  return (
    <header className="dq-header">
      <div className="dq-header-brand">
        <span className="dq-brand-emblem" aria-hidden="true">
          <Shield size={20} />
        </span>
        <div>
          <span className="dq-brand-name">DevQuest</span>
          <span className="dq-brand-role">
            {stageData.realmName} · {userClass}
          </span>
        </div>
      </div>

      <nav className="dq-nav" aria-label="Navegação principal">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavClick(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`dq-nav-tab ${isActive ? 'is-active' : ''}`}
            >
              <Icon size={16} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="dq-header-status">
        <div className="dq-header-xp">
          <div className="dq-header-xp-top dq-tabular">
            <span className="dq-badge dq-badge-gold">Nível {user.level}</span>
            <span className="dq-xp-numbers">
              {user.currentXp} / {user.nextLevelXp} XP
            </span>
          </div>
          <XPBar currentXp={user.currentXp} nextLevelXp={user.nextLevelXp} compact />
        </div>

        <button
          type="button"
          className="dq-icon-btn"
          onClick={onToggleSound}
          aria-pressed={soundEnabled}
          aria-label={soundEnabled ? 'Desativar sons do mascote' : 'Ativar sons sutis do mascote'}
          title={soundEnabled ? `Som ativo (${companionName})` : 'Ativar sons sutis'}
        >
          {soundEnabled ? (
            <Volume2 size={17} aria-hidden="true" />
          ) : (
            <VolumeX size={17} aria-hidden="true" />
          )}
        </button>

        <button
          type="button"
          className="dq-icon-btn"
          onClick={onToggleTheme}
          aria-label={
            theme === 'dark'
              ? 'Alternar para tema claro Warm Vellum'
              : 'Alternar para tema escuro Obsidian'
          }
          title={theme === 'dark' ? 'Tema Claro (Warm Vellum)' : 'Tema Escuro (Obsidian)'}
        >
          {theme === 'dark' ? (
            <Sun size={18} aria-hidden="true" />
          ) : (
            <Moon size={18} aria-hidden="true" />
          )}
        </button>

        {isGuestMode ? (
          <button
            type="button"
            className="dq-btn dq-btn-secondary dq-sync-btn"
            onClick={onOpenAuth}
            aria-label="Modo Sandbox Local — detalhes de sincronização"
            title="Progresso salvo localmente. Clique para detalhes de sincronização."
          >
            <Cloud size={15} aria-hidden="true" />
            <span>Sandbox</span>
          </button>
        ) : (
          <button
            type="button"
            className="dq-sigil-btn"
            onClick={() => onNavClick('character')}
            aria-label={`Perfil de ${user.name}`}
          >
            <span aria-hidden="true">{sigil.glyph}</span>
          </button>
        )}
      </div>
    </header>
  );
}

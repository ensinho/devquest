import React from 'react';
import {
  Map as MapIcon,
  Swords,
  BookOpen,
  User,
  Sun,
  Moon,
  HardDriveDownload,
  Volume2,
  VolumeX,
  ChevronRight,
} from 'lucide-react';
import XPBar from './XPBar.jsx';
import BrandMark from './BrandMark.jsx';
import SigilIcon from './SigilIcon.jsx';
import RollingNumber from './RollingNumber.jsx';
import { getCompanionStageData } from '../data/companionAvatars.js';

const NAV_ITEMS = [
  { id: 'quests', label: 'Mapa', icon: MapIcon },
  { id: 'arena', label: 'Arena', icon: Swords },
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
  syncState = 'idle',
  onOpenAuth,
}) {
  const stageData = getCompanionStageData(displayStage);
  const companionName = user.companionName?.trim() || stageData.name;

  return (
    <header className="dq-header">
      <button
        type="button"
        className="dq-header-brand"
        onClick={() => onNavClick('quests')}
        aria-label="DevQuest — voltar ao mapa"
      >
        <BrandMark size={34} />
        <span className="dq-brand-text">
          <span className="dq-brand-name">DevQuest</span>
          <span className="dq-brand-role">{userClass}</span>
        </span>
      </button>

      {/* Compact mobile identity (< 768px) */}
      <button
        type="button"
        className="dq-mobile-identity"
        onClick={() => onNavClick('character')}
        aria-label={`Perfil de ${user.name}, Nível ${user.level}`}
      >
        <span className="dq-mobile-identity-avatar" aria-hidden="true">
          <SigilIcon id={user.avatarId} size={18} />
        </span>
        <span className="dq-mobile-identity-text">
          <strong>{user.name}</strong>
          <span className="dq-tabular">
            Nv. {user.level} · {companionName}
          </span>
        </span>
        <ChevronRight size={15} className="dq-mobile-identity-chevron" aria-hidden="true" />
      </button>

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
        <div className="dq-header-xp" title={`${user.currentXp} de ${user.nextLevelXp} XP para o próximo nível`}>
          <span className="dq-level-chip">
            <span className="dq-level-chip-label">Nv</span>
            <RollingNumber value={user.level} className="dq-level-chip-value" />
          </span>
          <span className="dq-header-xp-col">
            <span className="dq-xp-numbers dq-tabular">
              <RollingNumber value={user.currentXp} />
              <span className="dq-xp-of">/ {user.nextLevelXp} XP</span>
            </span>
            <XPBar currentXp={user.currentXp} nextLevelXp={user.nextLevelXp} compact />
          </span>
        </div>

        <div className="dq-header-actions">
          <button
            type="button"
            className="dq-icon-btn"
            onClick={onToggleSound}
            aria-pressed={soundEnabled}
            aria-label={soundEnabled ? 'Desativar sons do mascote' : 'Ativar sons do mascote'}
            title={soundEnabled ? `Sons de ${companionName} ligados` : 'Sons desligados'}
          >
            {soundEnabled ? <Volume2 size={17} aria-hidden="true" /> : <VolumeX size={17} aria-hidden="true" />}
          </button>

          <button
            type="button"
            className="dq-icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
          >
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          {isGuestMode ? (
            <button
              type="button"
              className="dq-btn dq-btn-secondary dq-sync-btn"
              onClick={onOpenAuth}
              title="Seu progresso fica salvo neste navegador. Clique para sincronizar com uma conta."
            >
              <HardDriveDownload size={16} aria-hidden="true" />
              <span>Salvo local</span>
            </button>
          ) : (
            <button
              type="button"
              className={`dq-sigil-btn ${syncState === 'syncing' ? 'is-syncing' : ''} ${syncState === 'error' ? 'is-error' : ''}`}
              onClick={() => onNavClick('character')}
              aria-label={`Perfil de ${user.name}. ${
                syncState === 'error' ? 'Falha ao sincronizar' : syncState === 'syncing' ? 'Sincronizando' : 'Progresso salvo na nuvem'
              }`}
              title={syncState === 'error' ? 'Falha ao sincronizar' : syncState === 'syncing' ? 'Sincronizando…' : 'Salvo na nuvem'}
            >
              <SigilIcon id={user.avatarId} size={18} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import { Compass, Swords, BookOpen, User } from 'lucide-react';

const MOBILE_NAV_ITEMS = [
  { id: 'quests', label: 'Mapa', icon: Compass },
  { id: 'arena', label: 'Arena', icon: Swords },
  { id: 'guides', label: 'Grimórios', icon: BookOpen },
  { id: 'character', label: 'Herói', icon: User },
];

export default function MobileBottomNav({ activePage, onNavClick }) {
  return (
    <nav className="dq-mobile-dock" aria-label="Navegação principal mobile">
      <div className="dq-mobile-dock-pill">
        {MOBILE_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavClick(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`dq-mobile-dock-btn ${isActive ? 'is-active' : ''}`}
            >
              <Icon size={18} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

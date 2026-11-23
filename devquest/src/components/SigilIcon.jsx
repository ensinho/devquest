import React from 'react';
import { Shield, Sparkles, Palette, Database, Compass, BookOpen } from 'lucide-react';

const SIGIL_ICONS = {
  'sigil-paladin': Shield,
  'sigil-sorcerer': Sparkles,
  'sigil-artisan': Palette,
  'sigil-architect': Database,
  'sigil-ranger': Compass,
  'sigil-sage': BookOpen,
};

export default function SigilIcon({ id, size = 18, className = '' }) {
  const Icon = SIGIL_ICONS[id] ?? Shield;
  return <Icon size={size} className={className} aria-hidden="true" />;
}

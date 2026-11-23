import {
  Code2,
  Palette,
  Braces,
  Blocks,
  Atom,
  Server,
  Database,
  Crown,
  ShieldCheck,
} from 'lucide-react';

/** One drawn icon per skill card (lucide, consistent 1.75 stroke in cards). */
export const SKILL_ICONS = {
  html: Code2,
  css: Palette,
  js: Braces,
  tailwind: Blocks,
  react: Atom,
  nodejs: Server,
  'a11y-tests': ShieldCheck,
  sql: Database,
  'mastery-fullstack': Crown,
};

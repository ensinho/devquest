import React, { useState } from 'react';
import {
  Shield,
  Sun,
  Moon,
  Sparkles,
  CheckCircle2,
  Lock,
  Flame,
  Swords,
  Code2,
  ArrowRight,
} from 'lucide-react';
import { initTheme, persistTheme, toggleThemeValue } from '../utils/theme';
import tyruntSprite from '../assets/tyrunt.png';
import tyrantrumSprite from '../assets/tyrantrum.png';
import wizardTyrantrumSprite from '../assets/wizardTyrantrum.png';
import '../styles/showcase.css';

const PREVIEW_SKILLS = [
  { id: 'html', name: 'HTML5', status: 'completed', progress: '4/4' },
  { id: 'css', name: 'CSS3', status: 'completed', progress: '3/3' },
  { id: 'js', name: 'JavaScript', status: 'available', progress: '2/3' },
  { id: 'react', name: 'React', status: 'available', progress: '0/3' },
  { id: 'node', name: 'Node.js', status: 'locked', progress: '0/3' },
  { id: 'mastery', name: 'Full-Stack', status: 'locked', progress: '0/1' },
];

const SEMANTIC_SWATCHES = [
  { key: 'primary', name: 'Ember Amber', role: '1 CTA primário + foco ativo' },
  { key: 'gold', name: 'Relic Gold', role: 'XP, Level Up e conquistas' },
  { key: 'live', name: 'Arcane Teal', role: 'Skill disponível + código OK' },
  { key: 'danger', name: 'Crimson Seal', role: 'Boss Fight, erro, logout' },
  { key: 'arcane', name: 'Arcane Violet', role: 'Evolução & Full-Stack Mastery' },
];

export default function DesignSystemShowcase() {
  const [theme, setTheme] = useState(() => initTheme());
  const [selectedId, setSelectedId] = useState('js');

  const handleToggleTheme = () => {
    const next = toggleThemeValue(theme);
    persistTheme(next);
    setTheme(next);
  };

  const selectedSkill = PREVIEW_SKILLS.find((skill) => skill.id === selectedId) ?? PREVIEW_SKILLS[2];

  return (
    <div className="ds-shell">
      <div className="ds-container">
        <header className="ds-topbar">
          <div className="ds-brand">
            <span className="ds-brand-mark" aria-hidden="true">
              <Shield size={20} />
            </span>
            <div>
              <p className="ds-brand-title">DevQuest</p>
              <p className="ds-brand-sub">Modern Arcane Codex · Design System v1</p>
            </div>
          </div>

          <div className="ds-topbar-actions">
            <span className="dq-badge dq-badge-gold dq-tabular">Lvl 7 · 680/1000 XP</span>
            <button
              type="button"
              className="dq-btn dq-btn-secondary"
              onClick={handleToggleTheme}
              aria-label={theme === 'dark' ? 'Alternar para Warm Vellum Light' : 'Alternar para Obsidian Scriptorium Dark'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === 'dark' ? 'Warm Vellum' : 'Obsidian Dark'}</span>
            </button>
          </div>
        </header>

        <section className="ds-hero" aria-label="Identidade visual e Companion Camp">
          <div className="ds-hero-copy">
            <div>
              <span className="ds-eyebrow">
                <Sparkles size={14} aria-hidden="true" />
                Fundação de Produto · 3 Camadas de Tokens
              </span>
              <h1 className="ds-h1">Forje suas habilidades Full-Stack com clareza de códice.</h1>
              <p className="ds-lead">
                Elevação tonal 0-1-2 sem bordas aninhadas, zero hex hardcoded em telas, contraste AA/AAA em Dark e Light mode, e um único CTA primário por tela.
              </p>
            </div>

            <div className="ds-cta-row">
              <button type="button" className="dq-btn dq-btn-primary">
                <span>Continuar Trilha JS</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <button type="button" className="dq-btn dq-btn-secondary">
                <span>Explorar Grimórios</span>
              </button>
              <button type="button" className="dq-btn dq-btn-ghost">
                <span>Atalhos (?)</span>
              </button>
            </div>
          </div>

          <aside className="ds-companion" aria-label="Companion Camp">
            <div className="ds-companion-header">
              <span className="dq-badge dq-badge-arcane">Estágio 3 · Arcane Rex</span>
              <div className="ds-companion-trio" aria-label="Linha evolutiva do mascote">
                <span className="ds-companion-mini">
                  <img src={tyruntSprite} alt="Estágio 1" className="dq-pixel-art" />
                </span>
                <span className="ds-companion-mini">
                  <img src={tyrantrumSprite} alt="Estágio 2" className="dq-pixel-art" />
                </span>
                <span className="ds-companion-mini">
                  <img src={wizardTyrantrumSprite} alt="Estágio 3" className="dq-pixel-art" />
                </span>
              </div>
            </div>

            <div className="ds-companion-stage">
              <span className="ds-companion-aura" aria-hidden="true" />
              <div className="ds-companion-sprite-wrap">
                <img
                  src={wizardTyrantrumSprite}
                  alt="Mascote Arcane Rex"
                  className="ds-companion-sprite dq-pixel-art"
                />
              </div>
              <div className="ds-companion-dialog">
                <span className="dq-badge dq-badge-live">Companion Camp</span>
                <p className="ds-companion-quote">
                  &ldquo;Você está a 1 Boss Fight de desbloquear React. Use <code className="ds-token-label">async/await</code> para vencer o Guardião Assíncrono.&rdquo;
                </p>
              </div>
            </div>

            <div className="ds-xp-block">
              <div className="ds-xp-meta dq-tabular">
                <span>Classe: Code Sorcerer</span>
                <strong>680 / 1000 XP</strong>
              </div>
              <div className="ds-xp-track" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso de XP">
                <div className="ds-xp-fill" />
              </div>
            </div>
          </aside>
        </section>

        <section className="ds-section" aria-label="Constellation Skill Map e Painel de Quests">
          <div className="ds-section-head">
            <div>
              <h2 className="ds-h2">Constellation Skill Map</h2>
              <p className="ds-section-desc">
                Conexões curvas vivas em desktop, trilha vertical limpa no mobile, nós semânticos navegáveis por teclado.
              </p>
            </div>
            <span className="dq-badge dq-badge-live dq-tabular">2 / 6 Skills Concluídas</span>
          </div>

          <div className="ds-workspace-preview">
            <div className="ds-map-stage">
              <svg className="ds-map-svg" viewBox="0 0 600 220" preserveAspectRatio="none" aria-hidden="true">
                <path className="ds-map-edge ds-map-edge--done" d="M 100 60 C 200 60, 200 60, 300 60" />
                <path className="ds-map-edge ds-map-edge--live" d="M 300 60 C 400 60, 400 60, 500 60" />
                <path className="ds-map-edge ds-map-edge--live" d="M 500 60 C 460 120, 180 110, 100 165" />
                <path className="ds-map-edge ds-map-edge--locked" d="M 100 165 C 200 165, 200 165, 300 165" />
                <path className="ds-map-edge ds-map-edge--locked" d="M 300 165 C 400 165, 400 165, 500 165" />
              </svg>

              <div className="ds-map-nodes">
                {PREVIEW_SKILLS.map((skill) => {
                  const isSelected = selectedSkill.id === skill.id;
                  const stateClass =
                    skill.status === 'completed'
                      ? 'ds-node--completed'
                      : skill.status === 'locked'
                        ? 'ds-node--locked'
                        : '';
                  return (
                    <button
                      key={skill.id}
                      type="button"
                      disabled={skill.status === 'locked'}
                      aria-pressed={isSelected}
                      onClick={() => setSelectedId(skill.id)}
                      className={`ds-node ${stateClass} ${isSelected ? 'ds-node--selected' : ''}`}
                    >
                      <span className="ds-node-top">
                        {skill.status === 'completed' && <CheckCircle2 size={18} aria-hidden="true" />}
                        {skill.status === 'available' && <Flame size={18} className="ds-node--available-icon" aria-hidden="true" />}
                        {skill.status === 'locked' && <Lock size={18} aria-hidden="true" />}
                        <span className="ds-node-count dq-tabular">{skill.progress}</span>
                      </span>
                      <span className="ds-node-title">{skill.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="ds-panel">
              <div className="ds-companion-header">
                <h3 className="ds-panel-title">Quests · {selectedSkill.name}</h3>
                <span className="dq-badge dq-badge-primary">Ativa</span>
              </div>

              <div className="ds-quest-list">
                <div className="ds-quest-row">
                  <div>
                    <p className="ds-quest-title">Filtrar Artefatos com Array.filter</p>
                    <p className="ds-quest-sub dq-tabular">Concluída · +35 XP</p>
                  </div>
                  <span className="dq-badge dq-badge-gold">OK</span>
                </div>

                <div className="ds-quest-row ds-quest-row--boss">
                  <div>
                    <p className="ds-quest-title">Boss: Guardião Async Fetch</p>
                    <p className="ds-quest-sub dq-tabular">Desafio de Chefe · +90 XP</p>
                  </div>
                  <button type="button" className="dq-btn dq-btn-danger">
                    <Swords size={15} aria-hidden="true" />
                    <span>Enfrentar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-section" aria-label="Tokens Semânticos, Contenção e Tipografia">
          <div className="ds-grid-2">
            <div className="ds-panel">
              <h2 className="ds-panel-title">Contenção 0-1-2 &amp; Papéis Semânticos</h2>
              <div className="ds-elevation-demo">
                <span className="ds-token-label">Level 0 · --color-bg</span>
                <div className="ds-elevation-step1">
                  <span className="ds-token-label">Level 1 · --color-surface</span>
                  <div className="ds-elevation-step2">
                    <span className="ds-token-label">Level 2 · --color-surface-raised</span>
                    <span className="dq-badge dq-badge-live">Zero bordas aninhadas</span>
                  </div>
                </div>
              </div>

              <div className="ds-swatch-list">
                {SEMANTIC_SWATCHES.map((swatch) => (
                  <div key={swatch.key} className="ds-swatch">
                    <span className={`ds-swatch-dot ds-swatch-dot--${swatch.key}`} aria-hidden="true" />
                    <div className="ds-swatch-meta">
                      <span className="ds-swatch-name">{swatch.name}</span>
                      <span className="ds-swatch-role">{swatch.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ds-panel">
              <div className="ds-companion-header">
                <h2 className="ds-panel-title">Tipografia Funcional (3 Vozes)</h2>
                <Code2 size={18} aria-hidden="true" />
              </div>
              <div className="ds-type-stack">
                <div>
                  <span className="ds-token-label">--font-display · Fraunces</span>
                  <p className="ds-h2">Grimório da Assincronicidade</p>
                </div>
                <div>
                  <span className="ds-token-label">--font-sans · Plus Jakarta Sans + tabular-nums</span>
                  <p className="ds-lead dq-tabular">Nível 07 · 12/16 Quests · Próxima evolução no Nível 10.</p>
                </div>
                <div>
                  <span className="ds-token-label">--font-mono · JetBrains Mono</span>
                  <pre className="ds-code-sample">
                    <code>{`async function getQuestData() {\n  const res = await fetch('/api/quests');\n  return res.json();\n}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

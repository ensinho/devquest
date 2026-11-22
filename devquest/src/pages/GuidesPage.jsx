import React, { useState, useMemo } from 'react';
import { BookOpen, Clock, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import CompanionAvatar from '../components/companion/CompanionAvatar.jsx';
import { getCompanionStageData } from '../data/companionAvatars.js';

export default function GuidesPage({
  guides,
  studiedGuides,
  onOpenGuide,
  displayStage,
  accessoryId,
  companionName,
  theme,
  onPet,
}) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const stageData = getCompanionStageData(displayStage);
  const displayName = companionName?.trim() || stageData.name;

  const categories = useMemo(
    () => ['Todos', ...Array.from(new Set(guides.map((g) => g.category)))],
    [guides]
  );

  const filteredGuides = useMemo(
    () =>
      activeCategory === 'Todos'
        ? guides
        : guides.filter((g) => g.category === activeCategory),
    [guides, activeCategory]
  );

  const recommendedGuideId = useMemo(() => {
    const firstUnread = filteredGuides.find((g) => !studiedGuides.includes(g.id));
    return firstUnread?.id ?? filteredGuides[0]?.id ?? null;
  }, [filteredGuides, studiedGuides]);

  return (
    <div className="dq-page-stack">
      <section className="dq-library-banner dq-library-banner--compact" aria-label="Introdução da Biblioteca Arcana">
        <div className="dq-library-banner-copy">
          <div className="dq-welcome-meta dq-tabular">
            <span className="dq-eyebrow">
              <BookOpen size={14} aria-hidden="true" />
              Biblioteca Arcana
            </span>
            <span className="dq-welcome-dot" aria-hidden="true">·</span>
            <span className="dq-muted-xs">
              {studiedGuides.length}/{guides.length} estudados
            </span>
            <span className="dq-welcome-dot" aria-hidden="true">·</span>
            <span className="dq-muted-xs">+10 XP por leitura</span>
          </div>
          <h1 className="dq-h1">Grimórios rápidos antes da Arena</h1>
          <p className="dq-muted-text">
            Leituras curtas de 2–3 minutos com resumo guiado por {displayName}.
          </p>
        </div>

        <div className="dq-library-right">
          <div className="dq-pill-group" role="group" aria-label="Filtrar grimórios por tema">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`dq-stage-pill ${activeCategory === cat ? 'is-active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="dq-library-mini-mentor">
            <CompanionAvatar
              stage={displayStage}
              state="idle"
              mood="happy"
              theme={theme}
              variant="dock"
              accessoryId={accessoryId}
              companionName={displayName}
              interactive
              onPet={onPet}
            />
          </div>
        </div>
      </section>

      <section className="dq-guides-grid" aria-label="Lista de Grimórios">
        {filteredGuides.map((guide) => {
          const isStudied = studiedGuides.includes(guide.id);
          const isRecommended = guide.id === recommendedGuideId;
          return (
            <article key={guide.id} className="dq-guide-card">
              <div className="dq-guide-card-top">
                <div className="dq-guide-badges">
                  <span className="dq-badge dq-badge-primary">{guide.category}</span>
                  {isRecommended && !isStudied && (
                    <span className="dq-badge dq-badge-live">
                      <Sparkles size={11} aria-hidden="true" /> Recomendado agora
                    </span>
                  )}
                </div>
                <span className="dq-muted-xs dq-guide-time dq-tabular">
                  {isStudied ? (
                    <span className="dq-badge dq-badge-gold">
                      <CheckCircle2 size={12} aria-hidden="true" /> Estudado
                    </span>
                  ) : (
                    <>
                      <Clock size={13} aria-hidden="true" /> {guide.readTime} · +10 XP
                    </>
                  )}
                </span>
              </div>
              <h2 className="dq-h3">{guide.title}</h2>
              <p className="dq-muted-text">{guide.description}</p>
              <div className="dq-guide-card-foot">
                <button
                  type="button"
                  onClick={() => onOpenGuide(guide)}
                  className={isRecommended ? 'dq-btn dq-btn-primary' : 'dq-btn dq-btn-secondary'}
                >
                  <span>{isStudied ? 'Revisar Grimório' : 'Estudar Agora'}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

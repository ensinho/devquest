import React, { useState, useMemo, useEffect } from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles, Search, X, Wrench, Swords, Check } from 'lucide-react';
import CompanionAvatar from '../components/companion/CompanionAvatar.jsx';
import AnimatedCheckIcon from '../components/AnimatedCheckIcon.jsx';
import { getCompanionStageData } from '../data/companionAvatars.js';
import { SKILL_ICONS } from '../data/skillIcons.js';

const ALL = 'Todos';
const INTRO_MS = 700;

const normalize = (text) =>
  String(text ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

function guideHaystack(guide) {
  const blocks = guide.content.map((b) => [b.text, ...(b.items ?? [])].join(' '));
  return normalize([guide.title, guide.category, guide.description, ...(guide.objectives ?? []), ...blocks].join(' '));
}

export default function GuidesPage({
  guides,
  studiedGuides,
  quests = [],
  skills = [],
  focusSkillId,
  onOpenGuide,
  displayStage,
  accessoryId,
  companionName,
  theme,
  onPet,
}) {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [query, setQuery] = useState('');
  const [intro, setIntro] = useState(true);
  const stageData = getCompanionStageData(displayStage);
  const displayName = companionName?.trim() || stageData.name;

  // The card stagger plays once per visit; filtering afterwards is instant.
  useEffect(() => {
    const t = window.setTimeout(() => setIntro(false), INTRO_MS);
    return () => window.clearTimeout(t);
  }, []);

  const studied = useMemo(() => new Set(studiedGuides), [studiedGuides]);
  const questById = useMemo(() => new Map(quests.map((q) => [q.id, q])), [quests]);
  const lockedSkills = useMemo(
    () => new Set(skills.filter((s) => s.status === 'locked').map((s) => s.id)),
    [skills]
  );
  const haystacks = useMemo(() => new Map(guides.map((g) => [g.id, guideHaystack(g)])), [guides]);

  const categories = useMemo(() => {
    const counts = new Map();
    guides.forEach((g) => counts.set(g.category, (counts.get(g.category) ?? 0) + 1));
    return [[ALL, guides.length], ...counts.entries()];
  }, [guides]);

  const filteredGuides = useMemo(() => {
    const q = normalize(query.trim());
    return guides.filter(
      (g) =>
        (activeCategory === ALL || g.category === activeCategory) &&
        (!q || haystacks.get(g.id).includes(q))
    );
  }, [guides, activeCategory, query, haystacks]);

  // Recommend the unread guide for the skill you are on, then any open skill.
  const recommendedGuideId = useMemo(() => {
    const unread = filteredGuides.filter((g) => !studied.has(g.id));
    const pick =
      unread.find((g) => g.skillId && g.skillId === focusSkillId) ??
      unread.find((g) => g.skillId && !lockedSkills.has(g.skillId)) ??
      unread[0];
    return pick?.id ?? null;
  }, [filteredGuides, studied, focusSkillId, lockedSkills]);

  const ordered = useMemo(() => {
    if (!recommendedGuideId) return filteredGuides;
    const featured = filteredGuides.find((g) => g.id === recommendedGuideId);
    return [featured, ...filteredGuides.filter((g) => g.id !== recommendedGuideId)];
  }, [filteredGuides, recommendedGuideId]);

  const studiedCount = guides.filter((g) => studied.has(g.id)).length;
  const percent = guides.length ? Math.round((studiedCount / guides.length) * 100) : 0;

  return (
    <div className="dq-page-stack">
      <section className="dq-library-banner dq-library-banner--compact" aria-label="Introdução da Biblioteca">
        <div className="dq-library-banner-copy">
          <h1 className="dq-h1">Grimórios</h1>
          <p className="dq-muted-text">
            {guides.length} leituras curtas, uma para cada passo da trilha. {displayName} resume o essencial e
            aponta a quest que cada uma destrava.
          </p>
          <div className="dq-library-progress">
            <p className="dq-library-meta dq-tabular">
              <BookOpen size={14} aria-hidden="true" />
              <span>
                <strong>{studiedCount}</strong>/{guides.length} lidos
              </span>
              <span aria-hidden="true">·</span>
              <span>+10 XP na primeira leitura</span>
            </p>
            <span
              className="dq-library-bar"
              role="progressbar"
              aria-label="Grimórios lidos"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percent}
            >
              <span style={{ transform: `scaleX(${percent / 100})` }} />
            </span>
          </div>
        </div>

        <div className="dq-library-right">
          <label className="dq-library-search">
            <Search size={16} aria-hidden="true" />
            <span className="dq-sr-only">Buscar grimório</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar: flexbox, JOIN, useState…"
              autoComplete="off"
              spellCheck="false"
            />
            {query && (
              <button type="button" className="dq-library-search-clear" onClick={() => setQuery('')} aria-label="Limpar busca">
                <X size={14} aria-hidden="true" />
              </button>
            )}
          </label>
          <div className="dq-library-mini-mentor">
            <CompanionAvatar
              stage={displayStage}
              state={query ? 'working' : 'idle'}
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

      <div className="dq-library-filters" role="group" aria-label="Filtrar grimórios por tema">
        {categories.map(([cat, count]) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`dq-stage-pill ${activeCategory === cat ? 'is-active' : ''}`}
          >
            {cat}
            <span className="dq-library-filter-count dq-tabular">{count}</span>
          </button>
        ))}
      </div>

      {ordered.length === 0 ? (
        <section className="dq-library-empty" aria-live="polite">
          <p>
            Nenhum grimório fala de “{query}”{activeCategory !== ALL ? ` em ${activeCategory}` : ''}.
          </p>
          <button
            type="button"
            className="dq-btn dq-btn-secondary"
            onClick={() => {
              setQuery('');
              setActiveCategory(ALL);
            }}
          >
            Ver todos
          </button>
        </section>
      ) : (
        <section className={`dq-guides-grid ${intro ? 'is-intro' : ''}`} aria-label="Lista de Grimórios">
          {ordered.map((guide, index) => {
            const isStudied = studied.has(guide.id);
            const isFeatured = guide.id === recommendedGuideId;
            const Icon = (guide.skillId && SKILL_ICONS[guide.skillId]) || Wrench;
            const linked = (guide.questIds ?? []).map((id) => questById.get(id)).filter(Boolean);
            return (
              <article
                key={guide.id}
                className={`dq-guide-card ${isFeatured ? 'is-featured' : ''} ${isStudied ? 'is-studied' : ''}`}
                style={{ '--i': Math.min(index, 6) }}
              >
                <div className="dq-guide-card-top">
                  <span className="dq-guide-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.9} />
                  </span>
                  <span className="dq-guide-kicker">
                    {guide.category} · {guide.level}
                  </span>
                  <span className="dq-guide-time dq-tabular">
                    {isStudied ? (
                      <span className="dq-badge dq-badge-gold">
                        <Check size={12} aria-hidden="true" /> Lido
                      </span>
                    ) : (
                      <>
                        <Clock size={13} aria-hidden="true" /> {guide.readTime}
                      </>
                    )}
                  </span>
                </div>

                {isFeatured && !isStudied && (
                  <span className="dq-badge dq-badge-live dq-guide-flag">
                    <Sparkles size={11} aria-hidden="true" /> Leia agora
                  </span>
                )}

                <h2 className="dq-h3 dq-guide-title">{guide.title}</h2>
                <p className="dq-muted-text">{guide.description}</p>

                {isFeatured && guide.objectives?.length > 0 && (
                  <ul className="dq-guide-objectives">
                    {guide.objectives.map((o) => (
                      <li key={o}>
                        <AnimatedCheckIcon checked={isStudied} size={14} />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {isFeatured && (
                  <blockquote className="dq-guide-quote">
                    <span className="dq-micro-label">Resumo de {displayName}</span>
                    <p>{guide.mentorSummary}</p>
                  </blockquote>
                )}

                {linked.length > 0 && (
                  <p className="dq-guide-unlocks">
                    <Swords size={13} aria-hidden="true" />
                    <span>
                      Prepara para{' '}
                      {linked.map((q, i) => (
                        <React.Fragment key={q.id}>
                          {i > 0 && (i === linked.length - 1 ? ' e ' : ', ')}
                          <strong className={q.completed ? 'is-done' : ''}>{q.title.replace(/^Boss( Final)?: /, '')}</strong>
                        </React.Fragment>
                      ))}
                    </span>
                  </p>
                )}

                <div className="dq-guide-card-foot">
                  <button
                    type="button"
                    onClick={() => onOpenGuide(guide)}
                    className={isFeatured ? 'dq-btn dq-btn-primary' : 'dq-btn dq-btn-secondary'}
                  >
                    <span>{isStudied ? 'Revisar' : isFeatured ? 'Estudar agora · +10 XP' : 'Estudar'}</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
}

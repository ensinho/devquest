import React from 'react';
import { BookOpen, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
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
  const stageData = getCompanionStageData(displayStage);
  const displayName = companionName?.trim() || stageData.name;
  const firstUnreadIndex = guides.findIndex((g) => !studiedGuides.includes(g.id));
  const primaryIndex = firstUnreadIndex === -1 ? 0 : firstUnreadIndex;

  return (
    <div className="dq-page-stack">
      <section className="dq-library-banner" aria-label="Introdução da Biblioteca Arcana">
        <div className="dq-library-banner-copy">
          <span className="dq-eyebrow">
            <BookOpen size={14} aria-hidden="true" />
            Biblioteca Arcana · {stageData.realmName}
          </span>
          <h1 className="dq-h1">Grimórios técnicos estudados com {displayName}.</h1>
          <p className="dq-muted-text">
            Cada grimório lido pela primeira vez rende <strong>+10 XP</strong> e fortalece seu Vínculo com {displayName}.
          </p>
        </div>

        <div className="dq-library-mentor">
          <CompanionAvatar
            stage={displayStage}
            state="idle"
            mood="happy"
            theme={theme}
            variant="modal"
            accessoryId={accessoryId}
            companionName={displayName}
            interactive
            onPet={onPet}
          />
          <p className="dq-library-mentor-tip">
            &ldquo;Você já estudou <strong>{studiedGuides.length}/{guides.length}</strong> grimórios comigo! Abra um antes do próximo Boss Fight.&rdquo;
          </p>
        </div>
      </section>

      <section className="dq-guides-grid" aria-label="Lista de Grimórios">
        {guides.map((guide, index) => {
          const isStudied = studiedGuides.includes(guide.id);
          return (
            <article key={guide.id} className="dq-guide-card">
              <div className="dq-guide-card-top">
                <span className="dq-badge dq-badge-primary">{guide.category}</span>
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
                  className={index === primaryIndex ? 'dq-btn dq-btn-primary' : 'dq-btn dq-btn-secondary'}
                >
                  <span>{isStudied ? 'Revisar Grimório' : 'Estudar Junto'}</span>
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

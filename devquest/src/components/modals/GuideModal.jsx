import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  CheckCircle2,
  Clock,
  Lightbulb,
  TriangleAlert,
  ThumbsDown,
  ThumbsUp,
  ExternalLink,
  Lock,
  Swords,
  Target,
  Copy,
  Check,
} from 'lucide-react';
import CompanionAvatar from '../companion/CompanionAvatar.jsx';
import AnimatedCheckIcon from '../AnimatedCheckIcon.jsx';
import { getCompanionStageData } from '../../data/companionAvatars.js';

const LANG_LABEL = { html: 'HTML', css: 'CSS', js: 'JavaScript', jsx: 'JSX', sql: 'SQL', bash: 'Terminal', text: 'Saída' };

function CodeBlock({ text, lang }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked: nothing to do */
    }
  };

  return (
    <figure className="dq-guide-code-wrap">
      <figcaption className="dq-guide-code-bar">
        <span>{LANG_LABEL[lang] ?? 'Código'}</span>
        <button type="button" className="dq-guide-copy" onClick={copy} aria-label={copied ? 'Código copiado' : 'Copiar código'}>
          {copied ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
          <span>{copied ? 'Copiado' : 'Copiar'}</span>
        </button>
      </figcaption>
      <pre className="dq-guide-code">
        <code>{text}</code>
      </pre>
    </figure>
  );
}

function Block({ item }) {
  switch (item.type) {
    case 'h3':
      return <h3 className="dq-h3 dq-guide-h3">{item.text}</h3>;
    case 'p':
      return <p className="dq-guide-p">{item.text}</p>;
    case 'list':
      return (
        <ul className="dq-guide-list">
          {item.items.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      );
    case 'code':
      return <CodeBlock text={item.text} lang={item.lang} />;
    case 'tip':
      return (
        <aside className="dq-guide-callout is-tip">
          <Lightbulb size={16} aria-hidden="true" />
          <p>
            <strong>Dica · </strong>
            {item.text}
          </p>
        </aside>
      );
    case 'pitfall':
      return (
        <aside className="dq-guide-callout is-pitfall">
          <TriangleAlert size={16} aria-hidden="true" />
          <p>
            <strong>Erro comum · </strong>
            {item.text}
          </p>
        </aside>
      );
    case 'compare':
      return (
        <div className="dq-guide-compare">
          <div className="dq-guide-compare-side is-bad">
            <span className="dq-guide-compare-label">
              <ThumbsDown size={13} aria-hidden="true" /> Evite
            </span>
            <pre className="dq-guide-code">
              <code>{item.bad}</code>
            </pre>
          </div>
          <div className="dq-guide-compare-side is-good">
            <span className="dq-guide-compare-label">
              <ThumbsUp size={13} aria-hidden="true" /> Prefira
            </span>
            <pre className="dq-guide-code">
              <code>{item.good}</code>
            </pre>
          </div>
          {item.note && <p className="dq-guide-compare-note">{item.note}</p>}
        </div>
      );
    default:
      return null;
  }
}

export default function GuideModal({
  guide,
  isStudied,
  quests = [],
  skills = [],
  displayStage,
  accessoryId,
  companionName,
  theme,
  onFinishReading,
  onPractice,
  onClose,
}) {
  const stageData = getCompanionStageData(displayStage);
  const displayName = companionName?.trim() || stageData.name;
  const scrollRef = useRef(null);
  const barRef = useRef(null);
  const closeRef = useRef(null);
  const [checked, setChecked] = useState(() => new Set());

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus({ preventScroll: true });
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  // Reading progress: written straight to the bar's transform, no re-render per scroll.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = el.scrollHeight - el.clientHeight;
      const ratio = max > 0 ? Math.min(1, el.scrollTop / max) : 1;
      if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const lockedSkills = new Set(skills.filter((s) => s.status === 'locked').map((s) => s.id));
  const linked = (guide.questIds ?? []).map((id) => quests.find((q) => q.id === id)).filter(Boolean);

  const toggleCheck = (item) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });

  const handleCompleteStudy = () => {
    onFinishReading?.(guide);
    onClose();
  };

  return (
    <div
      className="dq-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
      onClick={onClose}
    >
      <div className="dq-modal dq-modal--lg dq-guide-modal" onClick={(e) => e.stopPropagation()}>
        <span className="dq-guide-readbar" aria-hidden="true">
          <span ref={barRef} />
        </span>

        <div className="dq-guide-scroll" ref={scrollRef}>
          <div className="dq-modal-head">
            <div className="dq-guide-head">
              <span className="dq-guide-kicker">
                {guide.category} · {guide.level}
                <span aria-hidden="true"> · </span>
                <Clock size={12} aria-hidden="true" /> {guide.readTime}
              </span>
              <h2 id="guide-modal-title" className="dq-h2">
                {guide.title}
              </h2>
            </div>
            <button ref={closeRef} type="button" className="dq-icon-btn" onClick={onClose} aria-label="Fechar grimório">
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="dq-challenge-mentor">
            <CompanionAvatar
              stage={displayStage}
              state="idle"
              mood="happy"
              theme={theme}
              variant="dock"
              accessoryId={accessoryId}
              companionName={displayName}
              followPointer
            />
            <div className="dq-challenge-mentor-copy">
              <span className="dq-micro-label">Resumo de {displayName}</span>
              <p>{guide.mentorSummary}</p>
            </div>
          </div>

          {guide.objectives?.length > 0 && (
            <section className="dq-guide-section" aria-labelledby="guide-goals">
              <h3 id="guide-goals" className="dq-guide-section-title">
                <Target size={14} aria-hidden="true" /> Você vai aprender
              </h3>
              <ol className="dq-guide-goals">
                {guide.objectives.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ol>
            </section>
          )}

          <div className="dq-guide-body">
            {guide.content.map((item, index) => (
              <Block key={index} item={item} />
            ))}
          </div>

          {guide.checklist?.length > 0 && (
            <section className="dq-guide-section" aria-labelledby="guide-check">
              <h3 id="guide-check" className="dq-guide-section-title">
                <CheckCircle2 size={14} aria-hidden="true" /> Checklist antes da quest
              </h3>
              <ul className="dq-guide-checklist">
                {guide.checklist.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      aria-pressed={checked.has(item)}
                      className={checked.has(item) ? 'is-checked' : ''}
                      onClick={() => toggleCheck(item)}
                    >
                      <AnimatedCheckIcon checked={checked.has(item)} size={16} />
                      <span>{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {linked.length > 0 && (
            <section className="dq-guide-section" aria-labelledby="guide-quests">
              <h3 id="guide-quests" className="dq-guide-section-title">
                <Swords size={14} aria-hidden="true" /> Pratique nas quests
              </h3>
              <ul className="dq-guide-quests">
                {linked.map((q) => {
                  const locked = lockedSkills.has(q.skillId);
                  return (
                    <li key={q.id}>
                      <span className={`dq-guide-quest-state ${q.completed ? 'is-done' : locked ? 'is-locked' : 'is-open'}`}>
                        {q.completed ? (
                          <Check size={13} aria-hidden="true" />
                        ) : locked ? (
                          <Lock size={12} aria-hidden="true" />
                        ) : (
                          <Swords size={12} aria-hidden="true" />
                        )}
                      </span>
                      <span className="dq-guide-quest-title">
                        {q.title}
                        <small className="dq-tabular">
                          {q.completed ? 'Concluída' : locked ? 'Bloqueada' : `+${q.xp} XP`}
                        </small>
                      </span>
                      {!locked && onPractice && (
                        <button
                          type="button"
                          className="dq-btn dq-btn-ghost dq-guide-practice"
                          onClick={() => {
                            if (!isStudied) onFinishReading?.(guide);
                            onPractice(q);
                            onClose();
                          }}
                        >
                          {q.completed ? 'Refazer' : 'Praticar'}
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {guide.references?.length > 0 && (
            <section className="dq-guide-section" aria-labelledby="guide-refs">
              <h3 id="guide-refs" className="dq-guide-section-title">
                <ExternalLink size={14} aria-hidden="true" /> Para ir além
              </h3>
              <ul className="dq-guide-refs">
                {guide.references.map((r) => (
                  <li key={r.url}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      {r.label}
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="dq-modal-foot dq-modal-foot--end dq-guide-foot">
          <button type="button" className="dq-btn dq-btn-primary" onClick={handleCompleteStudy}>
            <CheckCircle2 size={16} aria-hidden="true" />
            <span>{isStudied ? 'Voltar para a Biblioteca' : 'Concluir leitura · +10 XP'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

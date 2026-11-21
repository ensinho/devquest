import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Skull,
  Lightbulb,
  Play,
  CheckCircle2,
  Circle,
  Lock,
  Terminal,
  Eye,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ListChecks,
} from 'lucide-react';
import CompanionAvatar from '../components/companion/CompanionAvatar.jsx';
import CodeEditor from '../components/CodeEditor.jsx';
import { getCompanionStageData } from '../data/companionAvatars.js';
import { validateQuestCode } from '../utils/codeValidator.js';

function sanitizePreviewHtml(rawHtml = '') {
  return rawHtml
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '');
}

export default function ArenaPage({
  skills,
  quests,
  activeQuestId,
  onSelectQuest,
  onCompleteQuest,
  onBackToMap,
  displayStage,
  accessoryId,
  companionName,
  theme,
  onSound,
}) {
  const [filter, setFilter] = useState('all'); // 'all' | 'pending' | 'boss'
  const [mobileTrailOpen, setMobileTrailOpen] = useState(false);
  const [drafts, setDrafts] = useState({});
  const [hintLevel, setHintLevel] = useState(0);
  const [submitState, setSubmitState] = useState('idle'); // 'idle' | 'error' | 'success'
  const [isTyping, setIsTyping] = useState(false);
  const typingRef = useRef(null);

  const skillStatusMap = useMemo(
    () => new Map(skills.map((s) => [s.id, s.status])),
    [skills]
  );

  const activeQuest = useMemo(() => {
    const byId = quests.find((q) => q.id === activeQuestId);
    if (byId) return byId;
    return (
      quests.find((q) => !q.completed && skillStatusMap.get(q.skillId) !== 'locked') ??
      quests[0]
    );
  }, [quests, activeQuestId, skillStatusMap]);

  const activeSkill = useMemo(
    () => skills.find((s) => s.id === activeQuest?.skillId) ?? skills[0],
    [skills, activeQuest]
  );

  const code = drafts[activeQuest.id] ?? activeQuest.starterCode;
  const stageData = getCompanionStageData(displayStage);
  const displayName = companionName?.trim() || stageData.name;
  const isBoss = Boolean(activeQuest.isBossFight);

  useEffect(() => {
    setHintLevel(0);
    setSubmitState('idle');
  }, [activeQuest.id]);

  useEffect(() => {
    return () => {
      if (typingRef.current) window.clearTimeout(typingRef.current);
    };
  }, []);

  const validation = useMemo(
    () => validateQuestCode(activeQuest, code),
    [activeQuest, code]
  );

  const nextUnlockedQuest = useMemo(() => {
    const unlockedQuests = quests.filter(
      (q) => skillStatusMap.get(q.skillId) !== 'locked'
    );
    const idx = unlockedQuests.findIndex((q) => q.id === activeQuest.id);
    const afterCurrent = unlockedQuests.slice(idx + 1).find((q) => !q.completed);
    return afterCurrent ?? unlockedQuests.find((q) => !q.completed && q.id !== activeQuest.id) ?? null;
  }, [quests, skillStatusMap, activeQuest.id]);

  const completedTotal = quests.filter((q) => q.completed).length;
  const progressPct = Math.round((completedTotal / Math.max(1, quests.length)) * 100);

  const handleCodeChange = (nextCode) => {
    setDrafts((prev) => ({ ...prev, [activeQuest.id]: nextCode }));
    setSubmitState('idle');
    setIsTyping(true);
    if (typingRef.current) window.clearTimeout(typingRef.current);
    typingRef.current = window.setTimeout(() => setIsTyping(false), 850);
  };

  const handleResetCode = () => {
    onSound?.('check');
    setDrafts((prev) => ({ ...prev, [activeQuest.id]: activeQuest.starterCode }));
    setSubmitState('idle');
  };

  const handleValidate = () => {
    if (validation.isValid) {
      setSubmitState('success');
      onSound?.('win');
      onCompleteQuest(activeQuest.id);
    } else {
      setSubmitState('error');
      onSound?.('error');
    }
  };

  const handleCycleHint = () => {
    onSound?.('check');
    setHintLevel((prev) => (prev >= 2 ? 0 : prev + 1));
  };

  const mentorState =
    submitState === 'success' || activeQuest.completed
      ? 'done'
      : submitState === 'error' || !validation.lexical.ok
        ? 'blocked'
        : isTyping
          ? 'working'
          : validation.isValid
            ? 'done'
            : 'idle';

  const mentorMood =
    submitState === 'success' || activeQuest.completed || validation.isValid || hintLevel > 0
      ? 'happy'
      : 'neutral';

  const mentorLine =
    submitState === 'success'
      ? `Incrível! Quest vencida (+${activeQuest.xp} XP). Prontos para o próximo desafio?`
      : activeQuest.completed
        ? `Você já dominou esta quest! Pode treinar livremente ou avançar na sidebar.`
        : submitState === 'error' && validation.diagnostics[0]
          ? validation.diagnostics[0]
          : hintLevel === 2
            ? activeQuest.hint2
            : hintLevel === 1
              ? activeQuest.hint
              : validation.isValid
                ? 'Análise léxica e todos os requisitos passaram! Clique em Validar Código (ou Ctrl+Enter)!'
                : !validation.lexical.ok
                  ? validation.lexical.issues[0]
                  : isTyping
                    ? 'Lendo seus tokens em tempo real… olho no painel de diagnóstico à direita!'
                    : isBoss
                      ? 'Boss Fight! Resolva cada requisito do checklist com calma — estou aqui ao seu lado.'
                      : 'Escreva no editor abaixo: o identificador léxico e o checklist respondem ao vivo!';

  const hintBtnLabel =
    hintLevel === 0
      ? 'Pedir dica (1/2)'
      : hintLevel === 1
        ? 'Ver exemplo (2/2)'
        : 'Ocultar dica';

  const showHtmlPreview = validation.language === 'html' && activeQuest.skillId !== 'a11y-tests';
  const safeHtmlPreview = useMemo(
    () => (showHtmlPreview ? sanitizePreviewHtml(code) : ''),
    [showHtmlPreview, code]
  );

  return (
    <div className="dq-arena-layout">
      <div className="dq-arena-mobile-bar">
        <button
          type="button"
          className="dq-arena-mobile-toggle"
          onClick={() => setMobileTrailOpen((prev) => !prev)}
          aria-expanded={mobileTrailOpen}
          aria-controls="dq-arena-trail-sidebar"
        >
          <span className="dq-arena-mobile-toggle-left">
            <ListChecks size={16} aria-hidden="true" />
            <span className="dq-arena-mobile-toggle-title">
              Trilha · {activeSkill.name}
            </span>
          </span>
          <span className="dq-arena-mobile-toggle-right dq-tabular">
            <span className="dq-badge dq-badge-gold">
              {completedTotal}/{quests.length}
            </span>
            {mobileTrailOpen ? (
              <ChevronUp size={16} aria-hidden="true" />
            ) : (
              <ChevronDown size={16} aria-hidden="true" />
            )}
          </span>
        </button>
      </div>

      <aside
        id="dq-arena-trail-sidebar"
        className={`dq-arena-sidebar ${mobileTrailOpen ? 'is-mobile-open' : ''}`}
        aria-label="Sidebar de Desafios"
      >
        <div className="dq-arena-sidebar-head">
          <div className="dq-arena-sidebar-top">
            <span className="dq-eyebrow">Trilha de Desafios</span>
            <span className="dq-badge dq-badge-gold dq-tabular">
              {completedTotal}/{quests.length}
            </span>
          </div>
          <div className="dq-bond-track" role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso total das quests">
            <div className="dq-bond-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <div className="dq-arena-filters" role="group" aria-label="Filtrar desafios">
            {[
              { id: 'all', label: 'Todas' },
              { id: 'pending', label: 'Pendentes' },
              { id: 'boss', label: 'Boss' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={filter === item.id}
                className={`dq-filter-chip ${filter === item.id ? 'is-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="dq-arena-groups">
          {skills.map((skill) => {
            const isSkillLocked = skill.status === 'locked';
            const skillQuests = quests
              .filter((q) => q.skillId === skill.id)
              .filter((q) => {
                if (filter === 'pending') return !q.completed;
                if (filter === 'boss') return Boolean(q.isBossFight);
                return true;
              });

            if (skillQuests.length === 0) return null;

            return (
              <div key={skill.id} className="dq-arena-group">
                <div className="dq-arena-group-head">
                  <span className="dq-arena-group-name">
                    {isSkillLocked && <Lock size={12} aria-hidden="true" />}
                    {skill.name}
                  </span>
                  <span className="dq-muted-xs dq-tabular">
                    {skill.doneCount}/{skill.totalCount}
                  </span>
                </div>

                <ul className="dq-arena-quest-list">
                  {skillQuests.map((q) => {
                    const isCurrent = q.id === activeQuest.id;
                    return (
                      <li key={q.id}>
                        <button
                          type="button"
                          disabled={isSkillLocked}
                          onClick={() => {
                            onSelectQuest(q.id);
                            setMobileTrailOpen(false);
                          }}
                          aria-current={isCurrent ? 'true' : undefined}
                          className={[
                            'dq-arena-quest-btn',
                            isCurrent ? 'is-current' : '',
                            q.completed ? 'is-done' : '',
                            q.isBossFight ? 'is-boss' : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                        >
                          <span className="dq-arena-quest-icon" aria-hidden="true">
                            {isSkillLocked ? (
                              <Lock size={14} />
                            ) : q.completed ? (
                              <CheckCircle2 size={14} />
                            ) : q.isBossFight ? (
                              <Skull size={14} />
                            ) : (
                              <Circle size={14} />
                            )}
                          </span>
                          <span className="dq-arena-quest-label">{q.title}</span>
                          <span className="dq-arena-quest-xp dq-tabular">+{q.xp}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </aside>

      <section className="dq-arena-workspace" aria-label={`Desafio: ${activeQuest.title}`}>
        <div className="dq-arena-topbar">
          <div className="dq-arena-title-block">
            <div className="dq-arena-badges">
              <button type="button" className="dq-btn dq-btn-ghost dq-back-btn" onClick={onBackToMap}>
                <ArrowLeft size={15} aria-hidden="true" />
                <span>Mapa</span>
              </button>
              <span className="dq-badge dq-badge-primary">{activeSkill.name}</span>
              <span className={`dq-badge ${isBoss ? 'dq-badge-danger' : 'dq-badge-gold'} dq-tabular`}>
                {isBoss ? 'Boss Fight' : 'Quest'} · +{activeQuest.xp} XP
              </span>
              {activeQuest.completed && (
                <span className="dq-badge dq-badge-live">
                  <CheckCircle2 size={12} aria-hidden="true" /> Concluída
                </span>
              )}
            </div>
            <h1 className="dq-h1">{activeQuest.title}</h1>
            <p className="dq-challenge-desc">{activeQuest.challenge}</p>
          </div>
        </div>

        <div className="dq-arena-mentor-strip" aria-live="polite">
          <CompanionAvatar
            stage={displayStage}
            state={mentorState}
            mood={mentorMood}
            theme={theme}
            variant="dock"
            accessoryId={accessoryId}
            companionName={displayName}
            followPointer
          />
          <div className="dq-challenge-mentor-copy">
            <span className="dq-micro-label">{displayName} · Tutor Léxico &amp; Código</span>
            <p
              className={
                submitState === 'error' || !validation.lexical.ok
                  ? 'dq-text-danger'
                  : validation.isValid || activeQuest.completed
                    ? 'dq-text-live'
                    : ''
              }
            >
              {mentorLine}
            </p>
          </div>

          <button type="button" className="dq-btn dq-btn-secondary" onClick={handleCycleHint}>
            <Lightbulb size={15} aria-hidden="true" />
            <span>{hintBtnLabel}</span>
          </button>
        </div>

        <div className="dq-arena-split">
          <div className="dq-arena-editor-col">
            <CodeEditor
              value={code}
              onChange={handleCodeChange}
              language={validation.language}
              lexicalOk={validation.lexical.ok}
              tokenCounts={validation.lexical.counts}
              onRun={handleValidate}
              onReset={handleResetCode}
            />
          </div>

          <div className="dq-arena-diagnostics-col">
            <div className="dq-diag-panel">
              <div className="dq-diag-head">
                <span className="dq-diag-title">
                  <Terminal size={15} aria-hidden="true" /> Diagnóstico &amp; Checklist
                </span>
                <span className="dq-muted-xs dq-tabular">
                  {validation.checks.filter((c) => c.passed).length}/{validation.checks.length} OK
                </span>
              </div>

              <ul className="dq-diag-checklist" aria-label="Requisitos do desafio">
                {validation.checks.map((item) => (
                  <li
                    key={item.label}
                    className={`dq-diag-item ${item.passed ? 'is-passed' : ''}`}
                  >
                    {item.passed ? (
                      <CheckCircle2 size={15} aria-hidden="true" />
                    ) : (
                      <Circle size={15} aria-hidden="true" />
                    )}
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="dq-diag-lexical">
                <span className="dq-micro-label">Analisador Léxico ({validation.language.toUpperCase()})</span>
                {validation.diagnostics.length === 0 ? (
                  <p className="dq-diag-ok">
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>Estrutura léxica limpa e pronta para validação!</span>
                  </p>
                ) : (
                  <ul className="dq-diag-issues">
                    {validation.diagnostics.map((msg) => (
                      <li key={msg}>
                        <AlertTriangle size={14} aria-hidden="true" />
                        <span>{msg}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="dq-token-pills dq-tabular">
                  <span>Tokens: {validation.lexical.counts.total}</span>
                  <span>Keywords: {validation.lexical.counts.keywords}</span>
                  <span>Tags: {validation.lexical.counts.tags}</span>
                  <span>Strings: {validation.lexical.counts.strings}</span>
                </div>
              </div>
            </div>

            {showHtmlPreview && (
              <div className="dq-diag-panel">
                <div className="dq-diag-head">
                  <span className="dq-diag-title">
                    <Eye size={15} aria-hidden="true" /> Prévia Segura ao Vivo
                  </span>
                  <span className="dq-muted-xs">HTML renderizado</span>
                </div>
                <div
                  className="dq-live-preview-box"
                  dangerouslySetInnerHTML={{ __html: safeHtmlPreview }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="dq-arena-actions">
          <div className="dq-arena-actions-left">
            {nextUnlockedQuest && (
              <button
                type="button"
                className="dq-btn dq-btn-secondary"
                onClick={() => onSelectQuest(nextUnlockedQuest.id)}
              >
                <span>Próxima: {nextUnlockedQuest.title}</span>
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            )}
          </div>

          <button
            type="button"
            className="dq-btn dq-btn-primary"
            onClick={handleValidate}
          >
            {submitState === 'success' || activeQuest.completed ? (
              <>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span>Revalidar Solução</span>
              </>
            ) : (
              <>
                <Play size={15} aria-hidden="true" />
                <span>{isBoss ? 'Derrotar Boss' : 'Validar Código'}</span>
              </>
            )}
          </button>
        </div>
      </section>
    </div>
  );
}

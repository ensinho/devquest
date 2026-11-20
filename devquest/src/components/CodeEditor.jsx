import React, { useRef, useMemo } from 'react';
import { RotateCcw, CheckCircle2, AlertTriangle } from 'lucide-react';
import { tokenizeCode } from '../utils/codeLexer.js';

const LANG_LABELS = {
  html: 'HTML5',
  css: 'CSS3',
  js: 'JavaScript',
  jsx: 'React JSX',
  sql: 'SQL',
};

export default function CodeEditor({
  value,
  onChange,
  language = 'js',
  lexicalOk = true,
  tokenCounts = null,
  onRun,
  onReset,
}) {
  const preRef = useRef(null);
  const gutterRef = useRef(null);

  const tokens = useMemo(() => tokenizeCode(value, language), [value, language]);
  const lineCount = useMemo(() => Math.max(8, value.split('\n').length), [value]);

  const handleScroll = (event) => {
    const { scrollTop, scrollLeft } = event.target;
    if (preRef.current) {
      preRef.current.scrollTop = scrollTop;
      preRef.current.scrollLeft = scrollLeft;
    }
    if (gutterRef.current) {
      gutterRef.current.scrollTop = scrollTop;
    }
  };

  const handleKeyDown = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      onRun?.();
      return;
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      const target = event.target;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const nextValue = `${value.slice(0, start)}  ${value.slice(end)}`;
      onChange(nextValue);
      window.requestAnimationFrame(() => {
        target.selectionStart = start + 2;
        target.selectionEnd = start + 2;
      });
    }
  };

  return (
    <div className="dq-ide">
      <div className="dq-ide-toolbar">
        <div className="dq-ide-meta">
          <span className="dq-badge dq-badge-primary">{LANG_LABELS[language] ?? language}</span>
          <span
            className={`dq-ide-lex-status ${lexicalOk ? 'is-ok' : 'is-warn'}`}
            aria-live="polite"
          >
            {lexicalOk ? (
              <>
                <CheckCircle2 size={13} aria-hidden="true" /> Léxico OK
              </>
            ) : (
              <>
                <AlertTriangle size={13} aria-hidden="true" /> Alerta léxico
              </>
            )}
          </span>
          {tokenCounts && (
            <span className="dq-muted-xs dq-tabular">
              {tokenCounts.total} tokens
            </span>
          )}
        </div>

        <button
          type="button"
          className="dq-btn dq-btn-ghost dq-ide-reset"
          onClick={onReset}
          title="Restaurar código inicial"
        >
          <RotateCcw size={14} aria-hidden="true" />
          <span>Resetar</span>
        </button>
      </div>

      <div className="dq-ide-body">
        <div ref={gutterRef} className="dq-ide-gutter dq-tabular" aria-hidden="true">
          {Array.from({ length: lineCount }, (_, idx) => (
            <span key={idx}>{idx + 1}</span>
          ))}
        </div>

        <div className="dq-ide-surface">
          <pre ref={preRef} className="dq-ide-highlight" aria-hidden="true">
            <code>
              {tokens.map((tok, index) => (
                <span key={index} className={`dq-tok-${tok.type}`}>
                  {tok.value}
                </span>
              ))}
              {'\n'}
            </code>
          </pre>

          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onScroll={handleScroll}
            onKeyDown={handleKeyDown}
            className="dq-ide-textarea"
            spellCheck="false"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            aria-label="Editor de código com destaque léxico"
          />
        </div>
      </div>

      <div className="dq-ide-statusbar dq-tabular">
        <span>Tab = 2 espaços</span>
        <span>Ctrl+Enter = Validar código</span>
      </div>
    </div>
  );
}

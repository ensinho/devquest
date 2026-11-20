/* ==========================================================================
   STRUCTURAL & LEXICAL CODE VALIDATION ENGINE
   Runs quest checks + lexical health checks + JS syntax parsing so users get
   real, actionable diagnostics instead of generic error messages.
   ========================================================================== */

import { inspectLexicalHealth } from './codeLexer.js';

export function getQuestLanguage(skillId) {
  switch (skillId) {
    case 'html':
      return 'html';
    case 'css':
    case 'tailwind':
      return skillId === 'tailwind' ? 'html' : 'css';
    case 'react':
      return 'jsx';
    case 'sql':
      return 'sql';
    default:
      return 'js';
  }
}

export function validateQuestCode(quest, code) {
  const language = quest.language ?? getQuestLanguage(quest.skillId);
  const lexical = inspectLexicalHealth(code, language);

  // Additional real JS syntax check for pure JS / Node quests
  let syntaxError = '';
  if (language === 'js' && code.trim().length > 0) {
    try {
      new Function(code);
    } catch (err) {
      syntaxError = err?.message
        ? `Erro de sintaxe JS: ${err.message}`
        : 'Erro de sintaxe JavaScript.';
    }
  }

  const checks = (quest.checks ?? []).map((item) => {
    let passed = false;
    try {
      passed = Boolean(item.test(code));
    } catch {
      passed = false;
    }
    return {
      label: item.label,
      passed,
    };
  });

  let solutionPassed = false;
  try {
    solutionPassed = Boolean(quest.solution(code));
  } catch {
    solutionPassed = false;
  }

  const allChecksPassed = checks.length > 0 ? checks.every((c) => c.passed) : solutionPassed;
  const lexicalOk = lexical.ok && !syntaxError;
  const isValid = solutionPassed && allChecksPassed && (language === 'jsx' ? lexical.ok : lexicalOk);

  const diagnostics = [...lexical.issues];
  if (syntaxError) {
    diagnostics.unshift(syntaxError);
  }
  if (!isValid && diagnostics.length === 0) {
    const firstMissing = checks.find((c) => !c.passed);
    if (firstMissing) {
      diagnostics.push(`Requisito pendente: ${firstMissing.label}.`);
    }
  }

  return {
    language,
    isValid,
    checks,
    lexical,
    diagnostics,
  };
}

/* ==========================================================================
   REAL LEXICAL TOKENIZER (HTML, CSS, JavaScript/JSX, SQL)
   Zero-dependency deterministic scanner used both for live syntax highlighting
   and structural diagnostics inside the DevQuest Code Arena.
   ========================================================================== */

const JS_KEYWORDS = new Set([
  'const',
  'let',
  'var',
  'function',
  'async',
  'await',
  'return',
  'if',
  'else',
  'for',
  'while',
  'try',
  'catch',
  'finally',
  'new',
  'true',
  'false',
  'null',
  'undefined',
  'import',
  'export',
  'from',
  'default',
]);

const SQL_KEYWORDS = new Set([
  'SELECT',
  'FROM',
  'WHERE',
  'JOIN',
  'INNER',
  'LEFT',
  'RIGHT',
  'ON',
  'ORDER',
  'BY',
  'GROUP',
  'ASC',
  'DESC',
  'AND',
  'OR',
  'AS',
  'COUNT',
  'HAVING',
  'LIMIT',
  'INSERT',
  'INTO',
  'VALUES',
  'UPDATE',
  'SET',
]);

const CSS_AT_KEYWORDS = new Set(['@media', '@keyframes', '@import', '@layer']);

/**
 * Tokenizes source code into typed lexical tokens:
 * { type: 'comment' | 'string' | 'number' | 'keyword' | 'tag' | 'attr' | 'function' | 'punct' | 'plain', value: string }
 */
export function tokenizeCode(code = '', language = 'js') {
  const tokens = [];
  const len = code.length;
  let i = 0;

  const push = (type, value) => {
    if (!value) return;
    const prev = tokens[tokens.length - 1];
    if (prev && prev.type === type && type === 'plain') {
      prev.value += value;
    } else {
      tokens.push({ type, value });
    }
  };

  while (i < len) {
    const ch = code[i];
    const next = code[i + 1] ?? '';

    // Whitespace
    if (/\s/.test(ch)) {
      let start = i;
      while (i < len && /\s/.test(code[i])) i += 1;
      push('plain', code.slice(start, i));
      continue;
    }

    // HTML comment <!-- ... -->
    if (language === 'html' && code.startsWith('<!--', i)) {
      const end = code.indexOf('-->', i + 4);
      const stop = end === -1 ? len : end + 3;
      push('comment', code.slice(i, stop));
      i = stop;
      continue;
    }

    // Line comment // ... or SQL -- ...
    if (
      (ch === '/' && next === '/') ||
      (language === 'sql' && ch === '-' && next === '-')
    ) {
      const end = code.indexOf('\n', i);
      const stop = end === -1 ? len : end;
      push('comment', code.slice(i, stop));
      i = stop;
      continue;
    }

    // Block comment /* ... */
    if (ch === '/' && next === '*') {
      const end = code.indexOf('*/', i + 2);
      const stop = end === -1 ? len : end + 2;
      push('comment', code.slice(i, stop));
      i = stop;
      continue;
    }

    // Strings ("...", '...', `...`)
    if (ch === '"' || ch === "'" || ch === '`') {
      const quote = ch;
      let start = i;
      i += 1;
      while (i < len && code[i] !== quote) {
        if (code[i] === '\\' && i + 1 < len) {
          i += 2;
        } else {
          i += 1;
        }
      }
      if (i < len && code[i] === quote) i += 1;
      push('string', code.slice(start, i));
      continue;
    }

    // HTML / JSX tags
    if ((language === 'html' || language === 'jsx') && ch === '<') {
      const tagMatch = code.slice(i).match(/^<\/?([A-Za-z][A-Za-z0-9-]*)/);
      if (tagMatch) {
        const prefix = tagMatch[0].startsWith('</') ? '</' : '<';
        push('punct', prefix);
        push('tag', tagMatch[1]);
        i += tagMatch[0].length;

        // Scan attributes inside tag until '>'
        while (i < len && code[i] !== '>') {
          if (/\s/.test(code[i])) {
            let wsStart = i;
            while (i < len && /\s/.test(code[i])) i += 1;
            push('plain', code.slice(wsStart, i));
          } else if (code[i] === '/' && code[i + 1] === '>') {
            push('punct', '/>');
            i += 2;
            break;
          } else if (code[i] === '"' || code[i] === "'") {
            const q = code[i];
            let sStart = i;
            i += 1;
            while (i < len && code[i] !== q) i += 1;
            if (i < len) i += 1;
            push('string', code.slice(sStart, i));
          } else if (code[i] === '{') {
            let depth = 1;
            let bStart = i;
            i += 1;
            while (i < len && depth > 0) {
              if (code[i] === '{') depth += 1;
              else if (code[i] === '}') depth -= 1;
              i += 1;
            }
            push('function', code.slice(bStart, i));
          } else if (/[A-Za-z_-]/.test(code[i])) {
            let aStart = i;
            while (i < len && /[A-Za-z0-9_-]/.test(code[i])) i += 1;
            push('attr', code.slice(aStart, i));
          } else {
            push('punct', code[i]);
            i += 1;
          }
        }
        if (i < len && code[i] === '>') {
          push('punct', '>');
          i += 1;
        }
        continue;
      }
    }

    // CSS specifics: custom properties --var, selectors, properties, at-rules
    if (language === 'css') {
      if (ch === '@') {
        let start = i;
        i += 1;
        while (i < len && /[A-Za-z-]/.test(code[i])) i += 1;
        const word = code.slice(start, i);
        push(CSS_AT_KEYWORDS.has(word) ? 'keyword' : 'attr', word);
        continue;
      }
      if (ch === '-' && next === '-') {
        let start = i;
        while (i < len && /[A-Za-z0-9_-]/.test(code[i])) i += 1;
        push('string', code.slice(start, i));
        continue;
      }
      if ((ch === '.' || ch === '#') && /[A-Za-z_-]/.test(next)) {
        let start = i;
        i += 1;
        while (i < len && /[A-Za-z0-9_-]/.test(code[i])) i += 1;
        push('tag', code.slice(start, i));
        continue;
      }
    }

    // Numbers (and CSS units like 1rem, 100vh, 1fr)
    if (/[0-9]/.test(ch)) {
      let start = i;
      while (i < len && /[0-9.]/.test(code[i])) i += 1;
      if (language === 'css') {
        while (i < len && /[a-zA-Z%]/.test(code[i])) i += 1;
      }
      push('number', code.slice(start, i));
      continue;
    }

    // Identifiers / keywords / function calls
    if (/[A-Za-z_$]/.test(ch)) {
      let start = i;
      while (i < len && /[A-Za-z0-9_$-]/.test(code[i])) {
        if (language !== 'css' && code[i] === '-') break;
        i += 1;
      }
      const word = code.slice(start, i);
      const after = code.slice(i).trimStart();

      if (language === 'sql') {
        if (SQL_KEYWORDS.has(word.toUpperCase())) {
          push('keyword', word);
        } else {
          push('plain', word);
        }
      } else if (language === 'css') {
        if (after.startsWith(':')) {
          push('attr', word);
        } else if (after.startsWith('(')) {
          push('function', word);
        } else if (after.startsWith('{')) {
          push('tag', word);
        } else {
          push('keyword', word);
        }
      } else if (JS_KEYWORDS.has(word)) {
        push('keyword', word);
      } else if (after.startsWith('(')) {
        push('function', word);
      } else {
        push('plain', word);
      }
      continue;
    }

    // Punctuation & Operators
    if (/[{}()[\];:,.=<>!+\-*/?&|]/.test(ch)) {
      push('punct', ch);
      i += 1;
      continue;
    }

    push('plain', ch);
    i += 1;
  }

  return tokens;
}

/**
 * Summarizes lexical diagnostics (unclosed strings, unbalanced braces/parens/tags, token stats).
 */
export function inspectLexicalHealth(code = '', language = 'js') {
  const tokens = tokenizeCode(code, language);
  const issues = [];

  // 1. Check unclosed strings
  for (const tok of tokens) {
    if (tok.type === 'string') {
      const first = tok.value[0];
      if ((first === '"' || first === "'" || first === '`') && (tok.value.length < 2 || tok.value[tok.value.length - 1] !== first)) {
        issues.push(`String iniciada com ${first} não foi fechada.`);
      }
    }
  }

  // 2. Check balanced brackets/parens/braces (ignoring strings & comments)
  const stack = [];
  const pairs = { '(': ')', '{': '}', '[': ']' };
  const closers = new Set([')', '}', ']']);
  for (const tok of tokens) {
    if (tok.type !== 'punct') continue;
    for (const ch of tok.value) {
      if (pairs[ch]) {
        stack.push(ch);
      } else if (closers.has(ch)) {
        const last = stack.pop();
        if (!last || pairs[last] !== ch) {
          issues.push(`Delimitador "${ch}" sem abertura correspondente.`);
        }
      }
    }
  }
  if (stack.length > 0) {
    const missing = stack.map((open) => pairs[open]).reverse().join(' ');
    issues.push(`Faltando fechar delimitador: ${missing}`);
  }

  // 3. Check HTML paired tags (excluding void elements)
  if (language === 'html') {
    const voidTags = new Set(['img', 'input', 'br', 'hr', 'meta', 'link']);
    const tagStack = [];
    const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9-]*)(?:\s[^>]*)?\/?>/g;
    let match = tagRegex.exec(code);
    while (match) {
      const full = match[0];
      const name = match[1].toLowerCase();
      const isSelfClosing = full.endsWith('/>') || voidTags.has(name);
      if (!isSelfClosing) {
        if (full.startsWith('</')) {
          const top = tagStack.pop();
          if (top !== name) {
            issues.push(`Tag de fechamento </${name}> sem abertura correspondente.`);
          }
        } else {
          tagStack.push(name);
        }
      }
      match = tagRegex.exec(code);
    }
    if (tagStack.length > 0) {
      issues.push(`Tag <${tagStack[tagStack.length - 1]}> aberta sem fechamento </${tagStack[tagStack.length - 1]}>.`);
    }
  }

  const counts = {
    total: tokens.filter((t) => t.type !== 'plain' || t.value.trim().length > 0).length,
    keywords: tokens.filter((t) => t.type === 'keyword').length,
    tags: tokens.filter((t) => t.type === 'tag').length,
    strings: tokens.filter((t) => t.type === 'string').length,
  };

  return {
    ok: issues.length === 0,
    issues,
    tokens,
    counts,
  };
}

/**
 * Runs a learner's JS snippet and reads one binding back out of it.
 *
 * In the browser the snippet runs with `new Function` (it is the learner's own
 * code in their own tab). The server swaps in a QuickJS WebAssembly sandbox via
 * `setSnippetRunner`, so quest validation never executes user code inside the
 * API process.
 *
 * A runner returns `{ ok: true, value }` or `{ ok: false }`. Values are plain
 * data (strings, numbers, booleans, arrays, objects).
 */
function browserRunner(code, bindingName) {
  try {
    const fn = new Function(`${code}\n;return ${bindingName};`);
    return { ok: true, value: fn() };
  } catch {
    return { ok: false };
  }
}

let activeRunner = browserRunner;

export function setSnippetRunner(runner) {
  activeRunner = typeof runner === 'function' ? runner : browserRunner;
}

export function runSnippet(code, bindingName) {
  if (!/^[A-Za-z_$][\w$]*$/.test(bindingName)) return { ok: false };
  return activeRunner(String(code ?? ''), bindingName);
}

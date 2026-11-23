import { newQuickJSWASMModuleFromVariant, shouldInterruptAfterDeadline } from 'quickjs-emscripten-core';
import releaseVariant from '@jitl/quickjs-singlefile-mjs-release-sync';
import { setSnippetRunner } from '../src/utils/snippetRunner.js';

/**
 * Learner JS never runs inside the API process: quest checks that need to
 * evaluate a snippet go through a fresh QuickJS (WebAssembly) runtime with no
 * host bindings, a 16 MB heap, a 512 KB stack and a 150 ms deadline.
 */
const PRELUDE = 'globalThis.console={log(){},info(){},warn(){},error(){},debug(){},table(){}};';

let ready = null;

export function createQuickJsRunner(QuickJS, { deadlineMs = 150 } = {}) {
  return (code, bindingName) => {
    const runtime = QuickJS.newRuntime();
    runtime.setMemoryLimit(16 * 1024 * 1024);
    runtime.setMaxStackSize(512 * 1024);
    runtime.setInterruptHandler(shouldInterruptAfterDeadline(Date.now() + deadlineMs));
    const vm = runtime.newContext();
    try {
      const prelude = vm.evalCode(PRELUDE);
      if (prelude.error) {
        prelude.error.dispose();
        return { ok: false };
      }
      prelude.value.dispose();
      const result = vm.evalCode(`(function(){\n${code}\n;return JSON.stringify(${bindingName});})()`);
      if (result.error) {
        result.error.dispose();
        return { ok: false };
      }
      const json = vm.dump(result.value);
      result.value.dispose();
      return { ok: true, value: typeof json === 'string' ? JSON.parse(json) : undefined };
    } catch {
      return { ok: false };
    } finally {
      vm.dispose();
      runtime.dispose();
    }
  };
}

export function ensureSandbox() {
  ready ??= newQuickJSWASMModuleFromVariant(releaseVariant).then((QuickJS) => {
    setSnippetRunner(createQuickJsRunner(QuickJS));
    return QuickJS;
  });
  return ready;
}

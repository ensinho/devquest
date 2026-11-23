/** The onboarding's first card: a real <h1> with "DevQuest" inside. Shared by the modal and the API. */
export function readHeadingText(code) {
  const match = String(code ?? '').match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  return match ? match[1].replace(/<[^>]*>/g, '').trim() : '';
}

export function getSpellChecks(code) {
  const source = String(code ?? '');
  return [
    { label: 'Tag <h1> aberta e fechada', passed: /<h1[\s>]/i.test(source) && /<\/h1>/i.test(source) },
    { label: 'Texto "DevQuest" dentro dela', passed: /devquest/i.test(readHeadingText(source)) },
  ];
}

export function isSpellPassed(code) {
  return getSpellChecks(code).every((c) => c.passed);
}

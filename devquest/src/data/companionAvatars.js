export const COMPANION_STAGES = [
  {
    stage: 1,
    id: 'kitsuby',
    name: 'Kitsuby',
    title: 'Filhote Rúnico',
    elementLabel: 'Centelha',
    realmName: 'Toca da Centelha',
    themeLabel: 'Harmonia Teal',
    minLevel: 1,
    minCompletedQuests: 0,
    sizePx: { camp: 108, dock: 64, modal: 84, altar: 148, mini: 36 },
    depth: 6,
    colorToken: '--color-live',
    eyeColorToken: '--color-text-inverse',
    auraToken: '--companion-aura-stage1',
    badgeClass: 'dq-badge-live',
    unlockHint:
      'Seu parceiro inicial — curioso, rápido e pronto para desbravar HTML, CSS e JavaScript com você.',
    definition: {
      version: 1,
      id: 'kitsuby',
      name: 'Kitsuby',
      body: {
        path: 'M24 42 C20 30 18 19 25 18 C32 17 36 28 39 34 C44 33 52 33 57 34 C60 28 64 17 71 18 C78 19 76 30 72 42 C78 50 79 62 76 74 C73 83 64 86 48 86 C32 86 23 83 20 74 C17 62 18 50 24 42 Z M71 62 C81 56 90 60 89 70 C88 80 79 84 69 80 Z',
      },
      eyes: { x: 48, y: 58, spacing: 16, scale: 1.05 },
    },
  },
  {
    stage: 2,
    id: 'pyrokit',
    name: 'Pyrokit',
    title: 'Raposa da Forja',
    elementLabel: 'Forja',
    realmName: 'Forja das Chamas',
    themeLabel: 'Harmonia Âmbar',
    minLevel: 2,
    minCompletedQuests: 2,
    sizePx: { camp: 124, dock: 72, modal: 96, altar: 168, mini: 38 },
    depth: 9,
    colorToken: '--color-ember',
    eyeColorToken: '--color-text-inverse',
    auraToken: '--companion-aura-stage2',
    badgeClass: 'dq-badge-primary',
    unlockHint:
      'Evolui ao completar 2 quests (ou atingir Nível 2). Aquece toda a interface para a Forja Âmbar e ganha crista de chama.',
    definition: {
      version: 1,
      id: 'pyrokit',
      name: 'Pyrokit',
      body: {
        path: 'M22 40 C16 27 14 14 22 13 C30 12 34 25 38 32 C41 22 44 15 48 15 C52 15 55 22 58 32 C62 25 66 12 74 13 C82 14 80 27 74 40 C80 49 81 62 77 75 C74 84 64 87 48 87 C32 87 22 84 19 75 C15 62 16 49 22 40 Z M70 58 C79 42 91 41 91 55 C91 69 83 82 68 81 Z',
      },
      eyes: { x: 48, y: 59, spacing: 17, scale: 1.1 },
    },
  },
  {
    stage: 3,
    id: 'archkits',
    name: 'Archkits',
    title: 'Grão-Mestre Arcano',
    elementLabel: 'Arcano',
    realmName: 'Observatório Arcano',
    themeLabel: 'Harmonia Violeta',
    minLevel: 4,
    minCompletedQuests: 5,
    sizePx: { camp: 140, dock: 80, modal: 108, altar: 186, mini: 40 },
    depth: 12,
    colorToken: '--color-arcane',
    eyeColorToken: '--color-text-inverse',
    auraToken: '--companion-aura-stage3',
    badgeClass: 'dq-badge-arcane',
    unlockHint:
      'Evolui ao completar 5 quests (ou atingir Nível 4). Transforma o Códice no Observatório Arcano e veste o Chapéu de Mago.',
    definition: {
      version: 1,
      id: 'archkits',
      name: 'Archkits',
      body: {
        path: 'M13 39 C13 33 22 31 30 30 C35 18 46 9 57 10 C64 11 63 22 67 30 C75 31 83 33 83 39 C83 44 76 46 72 46 C79 49 82 55 78 63 C77 74 73 84 65 86 C58 88 38 88 31 86 C23 84 19 74 18 63 C14 55 17 49 24 46 C20 46 13 44 13 39 Z M72 60 C83 52 92 58 91 71 C90 82 81 87 69 83 Z',
      },
      eyes: { x: 48, y: 65, spacing: 17, scale: 1.1 },
    },
  },
];

export const COMPANION_ACCESSORIES = [
  {
    id: 'none',
    label: 'Natural',
    description: 'Visual puro da criatura sem ornamentos extras.',
    minCompletedQuests: 0,
    minBondLevel: 1,
    symbol: '•',
  },
  {
    id: 'spark',
    label: 'Centelha </ >',
    description: 'Orbe flutuante de código sempre ao seu lado.',
    minCompletedQuests: 0,
    minBondLevel: 1,
    symbol: '</>',
  },
  {
    id: 'scarf',
    label: 'Lenço da Guilda',
    description: 'Desbloqueado no Vínculo Nível 2 (faça carinho ou responda um desafio relâmpago!).',
    minCompletedQuests: 0,
    minBondLevel: 2,
    symbol: '❖',
  },
  {
    id: 'glasses',
    label: 'Aura Rúnica',
    description: 'Anel orbital luminoso desbloqueado após 1 quest.',
    minCompletedQuests: 1,
    minBondLevel: 1,
    symbol: '◎',
  },
  {
    id: 'crown',
    label: 'Coroa Relíquia',
    description: 'Coroa dourada para quem já venceu 3 quests.',
    minCompletedQuests: 3,
    minBondLevel: 1,
    symbol: '♛',
  },
  {
    id: 'stars',
    label: 'Halo Estelar',
    description: 'Constelação flutuante reservada a quem chegou a 5 quests ou Vínculo 4.',
    minCompletedQuests: 5,
    minBondLevel: 4,
    symbol: '✦',
  },
];

export const COMPANION_QUIZZES = [
  {
    id: 'quiz-semantic',
    skill: 'HTML5',
    question: 'Qual elemento HTML deve ser usado para um botão clicável acessível por teclado?',
    options: ['<div onClick>', '<button type="button">', '<span role="click">'],
    correctIndex: 1,
    xp: 15,
    rightText: 'Perfeito! <button> já nasce navegável por Tab, Enter e Espaço sem gambiarras.',
    wrongText: 'Quase! Use sempre <button type="button"> — <div> e <span> não têm foco nativo de teclado.',
  },
  {
    id: 'quiz-flex',
    skill: 'CSS3',
    question: 'Em um container com display: flex (row), qual propriedade alinha os itens no eixo vertical?',
    options: ['align-items', 'justify-content', 'text-align'],
    correctIndex: 0,
    xp: 15,
    rightText: 'Acertou em cheio! align-items controla o eixo cruzado (vertical no flex-row).',
    wrongText: 'Boa tentativa! justify-content alinha no eixo principal; no eixo cruzado usamos align-items.',
  },
  {
    id: 'quiz-tokens',
    skill: 'Design System',
    question: 'Por que usar CSS Custom Properties semânticas (--color-surface) em vez de hex solto?',
    options: [
      'Apenas para digitar mais caracteres',
      'Garante Dark/Light e temas dinâmicos sem retrabalho',
      'Porque navegadores não aceitam hex',
    ],
    correctIndex: 1,
    xp: 15,
    rightText: 'Isso mesmo! É assim que eu mudo o tema inteiro do DevQuest quando evoluo!',
    wrongText: 'Dica do Códice: tokens semânticos permitem trocar Dark, Light e a minha aura evolutiva instantaneamente!',
  },
  {
    id: 'quiz-array',
    skill: 'JavaScript',
    question: 'Qual método de array cria um NOVO array mantendo apenas itens que passam em uma condição?',
    options: ['.forEach()', '.filter()', '.push()'],
    correctIndex: 1,
    xp: 15,
    rightText: 'Brilhante! .filter() é puro, não muta o array original e retorna só o que passou no teste.',
    wrongText: 'O segredo aqui é .filter() — ele testa cada item e devolve um array novinho só com os aprovados!',
  },
  {
    id: 'quiz-react',
    skill: 'React',
    question: 'Qual é a melhor forma de calcular um valor derivado de um estado existente no React?',
    options: [
      'Usar useMemo em vez de duplicar em outro useState',
      'Criar um useEffect que chama setState em loop',
      'Salvar em window.global',
    ],
    correctIndex: 0,
    xp: 15,
    rightText: 'Sábio demais! Derivar com useMemo evita bugs de sincronização e re-renders extras.',
    wrongText: 'Cuidado com useEffect + setState! Sempre que puder derivar direto do estado, prefira useMemo.',
  },
  {
    id: 'quiz-sql',
    skill: 'SQL',
    question: 'Para cruzar registros de users e posts por chave estrangeira, qual cláusula SQL usamos?',
    options: ['JOIN ... ON', 'GROUP BY', 'ORDER BY'],
    correctIndex: 0,
    xp: 15,
    rightText: 'Mandou bem! JOIN ... ON conecta as duas tabelas mantendo o banco normalizado.',
    wrongText: 'Para ligar tabelas relacionadas pela chave estrangeira, usamos JOIN ... ON!',
  },
];

export const PET_REACTIONS = [
  'Hehe! Minha aura ficou ainda mais brilhante — bora conquistar outra constelação?',
  'Sabia que quando eu evoluo, o tema inteiro do DevQuest se harmoniza com o meu elemento?',
  'Dica de ouro: use Ctrl+Enter na Arena de Código para validar sem tirar as mãos do teclado!',
  'Meus olhos seguem seu cursor o tempo todo — estou caçando bugs junto com você!',
  'Faça o Desafio Relâmpago comigo aqui no acampamento para ganhar XP e subir nosso Vínculo!',
];

export function isAccessoryUnlocked(accessory, completedCount, bondLevel) {
  if (accessory.id === 'stars') {
    return completedCount >= accessory.minCompletedQuests || bondLevel >= accessory.minBondLevel;
  }
  return (
    completedCount >= (accessory.minCompletedQuests ?? 0) &&
    bondLevel >= (accessory.minBondLevel ?? 1)
  );
}

export function getCompanionStageData(stageNumber) {
  return (
    COMPANION_STAGES.find((item) => item.stage === stageNumber) ?? COMPANION_STAGES[0]
  );
}

export function getCompanionStageForProgress(completedCount, level) {
  let activeStage = 1;
  for (const item of COMPANION_STAGES) {
    if (completedCount >= item.minCompletedQuests || level >= item.minLevel) {
      activeStage = item.stage;
    }
  }
  return activeStage;
}

export function getNextEvolutionRequirement(stageNumber, completedCount) {
  const next = COMPANION_STAGES.find((item) => item.stage === stageNumber + 1);
  if (!next) {
    return null;
  }
  const remainingQuests = Math.max(0, next.minCompletedQuests - completedCount);
  return {
    nextStage: next,
    remainingQuests,
    progressRatio:
      next.minCompletedQuests > 0
        ? Math.min(1, completedCount / next.minCompletedQuests)
        : 1,
  };
}

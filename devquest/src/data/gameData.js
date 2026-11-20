export const HERO_SIGILS = [
  { id: 'sigil-paladin', name: 'Guardião do Código', glyph: '◈', role: 'Full-Stack' },
  { id: 'sigil-sorcerer', name: 'Mago Assíncrono', glyph: '✦', role: 'Lógica JS' },
  { id: 'sigil-artisan', name: 'Artesão de UI', glyph: '❖', role: 'CSS & Design' },
  { id: 'sigil-architect', name: 'Arquiteto de Dados', glyph: '⬡', role: 'Backend & SQL' },
  { id: 'sigil-ranger', name: 'Explorador Web', glyph: '▲', role: 'Frontend' },
  { id: 'sigil-sage', name: 'Sábio do Códice', glyph: '✧', role: 'Mentoria' },
];

export const INITIAL_SKILLS = [
  {
    id: 'html',
    name: 'HTML5',
    shortLabel: 'Estrutura',
    description: 'A base semântica que dá forma e acessibilidade a qualquer página na web.',
    dependencies: [],
    position: { col: 1, row: 2 },
    category: 'structure',
    mentorLesson:
      'HTML é o esqueleto semântico da web! Use tags com significado (<h1>, <section>, <button>) em vez de empilhar <div>.',
  },
  {
    id: 'css',
    name: 'CSS3',
    shortLabel: 'Estilização',
    description: 'Layout fluido com Flexbox/Grid, animações suaves e design systems responsivos.',
    dependencies: ['html'],
    position: { col: 2, row: 1 },
    category: 'styling',
    mentorLesson:
      'CSS moderno brilha com Flexbox, Grid e Custom Properties. Combine display: grid com gap para layouts limpos!',
  },
  {
    id: 'js',
    name: 'JavaScript ES6+',
    shortLabel: 'Lógica',
    description: 'Interatividade, estruturas de dados, funções assíncronas e APIs.',
    dependencies: ['html'],
    position: { col: 2, row: 3 },
    category: 'logic',
    mentorLesson:
      'JavaScript dá vida ao códice! Domine const/let, métodos de array (.filter, .map) e async/await para consumir APIs.',
  },
  {
    id: 'tailwind',
    name: 'Tokens & UI',
    shortLabel: 'Design System',
    description: 'Composição visual rápida com escala de tokens semânticos e contenção 0-1-2.',
    dependencies: ['css'],
    position: { col: 3, row: 1 },
    category: 'styling',
    mentorLesson:
      'Sistemas de design consistentes evitam hex solto: use tokens semânticos (--color-surface) para Dark e Light sem dor!',
  },
  {
    id: 'react',
    name: 'React',
    shortLabel: 'Interfaces',
    description: 'Componentes declarativos, props, hooks (useState) e listas com key.',
    dependencies: ['js'],
    position: { col: 3, row: 2 },
    category: 'logic',
    mentorLesson:
      'Em React, pense na UI como função do estado: passe props claras, guarde estado em useState e dê key única em .map()!',
  },
  {
    id: 'nodejs',
    name: 'Node.js & API',
    shortLabel: 'Servidor',
    description: 'Rotas HTTP GET/POST, JSON e lógica de servidor em JavaScript.',
    dependencies: ['js'],
    position: { col: 3, row: 3 },
    category: 'backend',
    mentorLesson:
      'No backend com Express/Node, cada rota recebe req, valida dados e responde com res.json()!',
  },
  {
    id: 'sql',
    name: 'Banco SQL',
    shortLabel: 'Dados',
    description: 'Filtros WHERE, ordenação, JOINs e agregações com GROUP BY.',
    dependencies: ['nodejs'],
    position: { col: 4, row: 3 },
    category: 'database',
    mentorLesson:
      'SQL transforma dados brutos em respostas rápidas: combine WHERE, JOIN e GROUP BY para consultas poderosas!',
  },
  {
    id: 'mastery-fullstack',
    name: 'Maestria Full-Stack',
    shortLabel: 'Lendário',
    description: 'Una frontend, API e banco de dados em uma arquitetura completa.',
    dependencies: ['react', 'tailwind', 'sql'],
    position: { col: 4, row: 1 },
    category: 'mastery',
    mentorLesson:
      'O desafio final do Códice! Conecte Frontend React, API Express, Banco de Dados e autenticação JWT em um plano coeso.',
  },
];

export const INITIAL_QUESTS = [
  // HTML5 (3)
  {
    id: 'q1',
    skillId: 'html',
    title: 'Forjar o Título Principal',
    xp: 35,
    challenge: 'Escreva uma tag <h1> contendo o texto "Welcome to DevQuest".',
    hint: 'Use a tag de abertura <h1>, coloque o texto exato no meio e feche com </h1>.',
    hint2: 'Estrutura pronta: <h1>Welcome to DevQuest</h1>',
    starterCode: '<h1></h1>',
    checks: [
      { label: 'Tag de abertura e fechamento <h1>', test: (c) => /<h1[\s>]/i.test(c) && /<\/h1>/i.test(c) },
      { label: 'Texto "Welcome to DevQuest"', test: (c) => c.toLowerCase().includes('welcome to devquest') },
    ],
    solution: (code) =>
      code.toLowerCase().includes('welcome to devquest') && /<h1[\s>]/i.test(code) && /<\/h1>/i.test(code),
  },
  {
    id: 'q2',
    skillId: 'html',
    title: 'Portal de Navegação',
    xp: 40,
    challenge: 'Crie um link <a> apontando para "https://devquest.app" usando o atributo href.',
    hint: 'Adicione o atributo href dentro da tag de abertura <a ...> com a URL entre aspas.',
    hint2: 'Estrutura pronta: <a href="https://devquest.app">Abrir Portal</a>',
    starterCode: '<a>Abrir Portal</a>',
    checks: [
      { label: 'Tag âncora <a> presente', test: (c) => /<a\b/i.test(c) },
      {
        label: 'Atributo href apontando para https://devquest.app',
        test: (c) =>
          c.includes('href') &&
          (c.includes('"https://devquest.app"') || c.includes("'https://devquest.app'")),
      },
    ],
    solution: (code) =>
      /<a\b/i.test(code) &&
      code.includes('href') &&
      (code.includes('"https://devquest.app"') || code.includes("'https://devquest.app'")),
  },
  {
    id: 'boss-html',
    skillId: 'html',
    title: 'Boss: Seção Hero Semântica',
    isBossFight: true,
    xp: 90,
    challenge: 'Construa uma <section> contendo um <h1>, um <p> e um <button> de ação.',
    hint: 'Aninhe um título, um parágrafo descritivo e um botão semântico dentro de <section>.',
    hint2:
      'Exemplo: <section>\n  <h1>DevQuest</h1>\n  <p>Comece agora</p>\n  <button>Iniciar</button>\n</section>',
    starterCode: '<section>\n  \n</section>',
    checks: [
      { label: 'Container <section>', test: (c) => /<section/i.test(c) },
      { label: 'Título <h1>', test: (c) => /<h1/i.test(c) },
      { label: 'Parágrafo <p>', test: (c) => /<p[\s>]/i.test(c) },
      { label: 'Botão <button>', test: (c) => /<button/i.test(c) },
    ],
    solution: (code) =>
      /<section/i.test(code) &&
      /<h1/i.test(code) &&
      /<p[\s>]/i.test(code) &&
      /<button/i.test(code),
  },

  // CSS3 (3)
  {
    id: 'q4',
    skillId: 'css',
    title: 'Colorir o Pergaminho',
    xp: 35,
    challenge:
      'Escreva uma regra CSS que defina color: var(--color-primary); para todos os parágrafos <p>.',
    hint: 'Use a propriedade color dentro do seletor p { ... } apontando para o nosso token semântico.',
    hint2: 'Estrutura pronta: p {\n  color: var(--color-primary);\n}',
    starterCode: 'p {\n  \n}',
    checks: [
      { label: 'Seletor p { ... }', test: (c) => /p\s*\{/i.test(c) },
      {
        label: 'color: var(--color-primary) (ou blue)',
        test: (c) => {
          const s = c.replace(/\s/g, '').toLowerCase();
          return s.includes('color:var(--color-primary)') || s.includes('color:blue');
        },
      },
    ],
    solution: (code) => {
      const compact = code.replace(/\s/g, '').toLowerCase();
      return compact.includes('color:var(--color-primary)') || compact.includes('color:blue');
    },
  },
  {
    id: 'q-css-grid',
    skillId: 'css',
    title: 'Grade de Cartas com Grid',
    xp: 45,
    challenge:
      'Transforme .cards em um CSS Grid com 2 colunas iguais (repeat(2, 1fr)) e espaçamento gap de 1rem.',
    hint: 'Declare display: grid, grid-template-columns com repeat(2, 1fr) e gap: 1rem.',
    hint2:
      'Estrutura pronta:\n.cards {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}',
    starterCode: '.cards {\n  \n}',
    checks: [
      { label: 'display: grid', test: (c) => c.replace(/\s/g, '').toLowerCase().includes('display:grid') },
      {
        label: 'grid-template-columns: repeat(2, 1fr)',
        test: (c) =>
          c.replace(/\s/g, '').toLowerCase().includes('grid-template-columns:repeat(2,1fr)'),
      },
      { label: 'gap definido', test: (c) => /\bgap\s*:\s*[^;\n}]+/i.test(c) },
    ],
    solution: (code) => {
      const compact = code.replace(/\s/g, '').toLowerCase();
      return (
        compact.includes('display:grid') &&
        compact.includes('grid-template-columns:repeat(2,1fr)') &&
        /\bgap\s*:\s*[^;\n}]+/i.test(code)
      );
    },
  },
  {
    id: 'boss-css',
    skillId: 'css',
    title: 'Boss: Centralização Flexbox',
    isBossFight: true,
    xp: 95,
    challenge: 'Transforme .arena em um container flex centralizado na horizontal e na vertical.',
    hint: 'Combine display: flex com as duas propriedades de alinhamento central nos dois eixos.',
    hint2: 'Adicione: display: flex; justify-content: center; align-items: center;',
    starterCode: '.arena {\n  min-height: 100vh;\n}',
    checks: [
      { label: 'display: flex', test: (c) => c.replace(/\s/g, '').toLowerCase().includes('display:flex') },
      {
        label: 'justify-content: center',
        test: (c) => c.replace(/\s/g, '').toLowerCase().includes('justify-content:center'),
      },
      {
        label: 'align-items: center',
        test: (c) => c.replace(/\s/g, '').toLowerCase().includes('align-items:center'),
      },
    ],
    solution: (code) => {
      const compact = code.replace(/\s/g, '').toLowerCase();
      return (
        compact.includes('display:flex') &&
        compact.includes('justify-content:center') &&
        compact.includes('align-items:center')
      );
    },
  },

  // JS (3)
  {
    id: 'q7',
    skillId: 'js',
    title: 'Declarar o Herói',
    xp: 40,
    challenge:
      'Declare uma variável chamada hero (const ou let) atribuindo uma string com o nome do seu herói.',
    hint: 'Use const hero = "..." com qualquer texto não vazio entre aspas.',
    hint2: 'Exemplo: const hero = "Kitsuby";',
    starterCode: '// Declare a variável hero abaixo\n',
    checks: [
      { label: 'Declaração da variável hero', test: (c) => /\b(const|let|var)\s+hero\b/.test(c) },
      {
        label: 'Valor do tipo string válido',
        test: (c) => {
          try {
            const fn = new Function(`${c}; return hero;`);
            return typeof fn() === 'string' && fn().trim().length > 0;
          } catch {
            return false;
          }
        },
      },
    ],
    solution: (code) => {
      try {
        const fn = new Function(`${code}; return hero;`);
        const val = fn();
        return typeof val === 'string' && val.trim().length > 0;
      } catch {
        return false;
      }
    },
  },
  {
    id: 'q18',
    skillId: 'js',
    title: 'Filtrar Artefatos',
    xp: 55,
    challenge:
      'Dado const arr = [1, 2, 3, 4, 5], crie newArr contendo apenas números maiores que 2 usando .filter().',
    hint: 'Passe uma função callback para arr.filter(...) que retorne true quando o número for > 2.',
    hint2: 'Exemplo: const newArr = arr.filter((n) => n > 2);',
    starterCode: 'const arr = [1, 2, 3, 4, 5];\nconst newArr = arr.filter();',
    checks: [
      { label: 'Uso de arr.filter(...)', test: (c) => c.includes('arr.filter(') },
      {
        label: 'Retorna exatamente [3, 4, 5]',
        test: (c) => {
          try {
            const fn = new Function(`${c}; return newArr;`);
            const res = fn();
            return Array.isArray(res) && res.length === 3 && res[0] === 3 && res[2] === 5;
          } catch {
            return false;
          }
        },
      },
    ],
    solution: (code) => {
      try {
        const fn = new Function(`${code}; return newArr;`);
        const res = fn();
        return (
          Array.isArray(res) &&
          res.length === 3 &&
          res[0] === 3 &&
          res[1] === 4 &&
          res[2] === 5
        );
      } catch {
        return false;
      }
    },
  },
  {
    id: 'boss-js',
    skillId: 'js',
    title: 'Boss: Guardião Async Fetch',
    isBossFight: true,
    xp: 110,
    challenge:
      'Escreva uma função async getQuestData() que use await fetch("https://api.devquest.com/quests") e retorne response.json().',
    hint: 'Use await no fetch com a URL exata da API e retorne o .json() da resposta.',
    hint2:
      'Exemplo:\nconst res = await fetch("https://api.devquest.com/quests");\nreturn res.json();',
    starterCode: 'async function getQuestData() {\n  \n}',
    checks: [
      { label: 'Função async + await', test: (c) => c.includes('async function') && c.includes('await') },
      {
        label: 'fetch("https://api.devquest.com/quests")',
        test: (c) => c.includes('fetch') && c.includes('https://api.devquest.com/quests'),
      },
      { label: 'Retorna .json()', test: (c) => c.includes('.json()') },
    ],
    solution: (code) =>
      code.includes('async function') &&
      code.includes('fetch') &&
      code.includes('https://api.devquest.com/quests') &&
      code.includes('await') &&
      code.includes('.json()'),
  },

  // Tokens & UI (2)
  {
    id: 'q5',
    skillId: 'tailwind',
    title: 'Alinhamento com Utilitários',
    xp: 50,
    challenge: 'Adicione as classes flex, items-center e justify-center na <div> para centralizar o texto.',
    hint: 'Preencha o atributo class="..." com as três classes utilitárias separadas por espaço.',
    hint2: 'Estrutura pronta: <div class="flex items-center justify-center">',
    starterCode: '<div class="">\n  <p>Centralize-me</p>\n</div>',
    checks: [
      { label: 'Classe flex', test: (c) => c.includes('flex') },
      { label: 'Classe items-center', test: (c) => c.includes('items-center') },
      { label: 'Classe justify-center', test: (c) => c.includes('justify-center') },
    ],
    solution: (code) =>
      code.includes('flex') && code.includes('justify-center') && code.includes('items-center'),
  },
  {
    id: 'boss-ui-token',
    skillId: 'tailwind',
    title: 'Boss: Cartão 0-1-2 com Tokens',
    isBossFight: true,
    xp: 95,
    challenge:
      'Estilize .card usando apenas tokens semânticos: background-color: var(--color-surface), border-radius: var(--radius-lg) e padding: var(--space-4).',
    hint: 'Nada de hex solto! Use var(--color-surface), var(--radius-lg) e var(--space-4).',
    hint2:
      '.card {\n  background-color: var(--color-surface);\n  border-radius: var(--radius-lg);\n  padding: var(--space-4);\n}',
    starterCode: '.card {\n  \n}',
    checks: [
      {
        label: 'background-color: var(--color-surface)',
        test: (c) => c.replace(/\s/g, '').includes('background-color:var(--color-surface)'),
      },
      {
        label: 'border-radius: var(--radius-lg)',
        test: (c) => c.replace(/\s/g, '').includes('border-radius:var(--radius-lg)'),
      },
      {
        label: 'padding: var(--space-4)',
        test: (c) => c.replace(/\s/g, '').includes('padding:var(--space-4)'),
      },
    ],
    solution: (code) => {
      const compact = code.replace(/\s/g, '');
      return (
        compact.includes('background-color:var(--color-surface)') &&
        compact.includes('border-radius:var(--radius-lg)') &&
        compact.includes('padding:var(--space-4)')
      );
    },
  },

  // React (3)
  {
    id: 'q10',
    skillId: 'react',
    title: 'Passar Props ao Herói',
    xp: 60,
    challenge: 'Passe uma prop name com o valor "Kitsuby" (ou seu nome) para o componente <Hero />.',
    hint: 'Em JSX, props são escritas como atributos dentro da tag do componente.',
    hint2: 'Estrutura pronta: <Hero name="Kitsuby" />',
    starterCode: '<Hero />',
    checks: [
      {
        label: 'Componente <Hero /> com prop name',
        test: (c) => /<Hero\s+[^>]*name\s*=\s*(["'`][^"'`]+["'`]|\{["'`][^"'`]+["'`]\})/.test(c),
      },
    ],
    solution: (code) =>
      /<Hero\s+[^>]*name\s*=\s*(["'`][^"'`]+["'`]|\{["'`][^"'`]+["'`]\})/.test(code),
  },
  {
    id: 'q-react-state',
    skillId: 'react',
    title: 'Contador de XP com useState',
    xp: 70,
    challenge: 'Crie um estado React usando const [xp, setXp] = useState(0);',
    hint: 'Desestruture o par [xp, setXp] retornado pelo hook useState com valor inicial 0.',
    hint2: 'Estrutura pronta: const [xp, setXp] = useState(0);',
    starterCode: 'function Counter() {\n  // Declare o estado xp abaixo\n  \n}',
    checks: [
      { label: 'Desestruturação [xp, setXp]', test: (c) => /\[\s*xp\s*,\s*setXp\s*\]/.test(c) },
      { label: 'Chamada useState(0)', test: (c) => /useState\(\s*0\s*\)/.test(c) },
    ],
    solution: (code) =>
      /\[\s*xp\s*,\s*setXp\s*\]/.test(code) && /useState\(\s*0\s*\)/.test(code),
  },
  {
    id: 'boss-react',
    skillId: 'react',
    title: 'Boss: Lista de Quests com .map()',
    isBossFight: true,
    xp: 120,
    challenge:
      'Renderize a lista quests usando quests.map((q) => <li key={q.id}>{q.title}</li>).',
    hint: 'Use .map() sobre quests retornando um <li> com a prop key={q.id} e {q.title} dentro.',
    hint2: 'Exemplo:\n{quests.map((q) => (\n  <li key={q.id}>{q.title}</li>\n))}',
    starterCode: '<ul>\n  {/* Renderize quests abaixo */}\n</ul>',
    checks: [
      { label: 'quests.map(...)', test: (c) => /quests\.map\(/.test(c) },
      { label: 'Prop key={...}', test: (c) => /key\s*=\s*\{[^}]+\}/.test(c) },
      { label: 'Elemento <li> com título', test: (c) => /<li\b/i.test(c) && /\.title/.test(c) },
    ],
    solution: (code) =>
      /quests\.map\(/.test(code) &&
      /key\s*=\s*\{[^}]+\}/.test(code) &&
      /<li\b/i.test(code) &&
      /\.title/.test(code),
  },

  // Node.js & API (2)
  {
    id: 'q-node-get',
    skillId: 'nodejs',
    title: 'Rota GET de Saúde da API',
    xp: 65,
    challenge: 'Crie uma rota app.get("/health", (req, res) => ...) que retorne res.json({ ok: true }).',
    hint: 'Use app.get com o caminho "/health" e envie o JSON usando res.json({ ok: true }).',
    hint2: 'Exemplo:\napp.get("/health", (req, res) => {\n  res.json({ ok: true });\n});',
    starterCode: '// Crie a rota GET /health abaixo\n',
    checks: [
      {
        label: 'Rota app.get("/health")',
        test: (c) => c.includes("app.get('/health'") || c.includes('app.get("/health"'),
      },
      {
        label: 'Resposta res.json({ ok: true })',
        test: (c) => c.replace(/\s/g, '').includes('res.json({ok:true})'),
      },
    ],
    solution: (code) =>
      (code.includes("app.get('/health'") || code.includes('app.get("/health"')) &&
      code.replace(/\s/g, '').includes('res.json({ok:true})'),
  },
  {
    id: 'q19',
    skillId: 'nodejs',
    title: 'Boss: Rota POST de Aventureiro',
    isBossFight: true,
    xp: 105,
    challenge: 'Crie uma rota app.post("/users", ...) que leia req.body.name e responda com JSON.',
    hint: 'Defina app.post("/users", (req, res) => { ... }) acessando req.body.name.',
    hint2: 'Exemplo: app.post("/users", (req, res) => res.json({ name: req.body.name }));',
    starterCode: 'app.use(express.json());\n\n// Escreva sua rota POST abaixo\n',
    checks: [
      {
        label: 'Rota app.post("/users")',
        test: (c) => c.includes("app.post('/users'") || c.includes('app.post("/users"'),
      },
      { label: 'Leitura de req.body.name', test: (c) => c.includes('req.body.name') },
    ],
    solution: (code) =>
      (code.includes("app.post('/users'") || code.includes('app.post("/users"')) &&
      code.includes('req.body.name'),
  },

  // SQL (3)
  {
    id: 'q-sql-where',
    skillId: 'sql',
    title: 'Filtrar Heróis de Elite',
    xp: 70,
    challenge:
      'Complete a query SQL para selecionar name de users onde level >= 5 ordenando por level DESC.',
    hint: 'Adicione WHERE level >= 5 seguido de ORDER BY level DESC.',
    hint2: 'Estrutura pronta:\nSELECT name FROM users\nWHERE level >= 5\nORDER BY level DESC;',
    starterCode: 'SELECT name\nFROM users\n',
    checks: [
      { label: 'Filtro WHERE level >= 5', test: (c) => /where\s+level\s*>=\s*5/i.test(c) },
      { label: 'Ordenação ORDER BY level DESC', test: (c) => /order\s+by\s+level\s+desc/i.test(c) },
    ],
    solution: (code) =>
      /where\s+level\s*>=\s*5/i.test(code) && /order\s+by\s+level\s+desc/i.test(code),
  },
  {
    id: 'q20',
    skillId: 'sql',
    title: 'Unir Tabelas com JOIN',
    xp: 85,
    challenge:
      'Complete a consulta fazendo JOIN entre users (u) e posts (p) usando u.id = p.user_id.',
    hint: 'Adicione a cláusula JOIN posts p seguida de ON u.id = p.user_id.',
    hint2: 'Estrutura pronta: JOIN posts p ON u.id = p.user_id',
    starterCode: 'SELECT u.name, p.title\nFROM users u\n',
    checks: [
      {
        label: 'JOIN posts p ON u.id = p.user_id',
        test: (c) => c.toLowerCase().replace(/\s+/g, ' ').includes('join posts p on u.id = p.user_id'),
      },
    ],
    solution: (code) =>
      code.toLowerCase().replace(/\s+/g, ' ').includes('join posts p on u.id = p.user_id'),
  },
  {
    id: 'boss-sql',
    skillId: 'sql',
    title: 'Boss: Contagem Agrupada',
    isBossFight: true,
    xp: 125,
    challenge:
      'Conte quantas skills existem por categoria usando SELECT category, COUNT(*) FROM skills GROUP BY category.',
    hint: 'Use a função de agregação COUNT(*) junto com GROUP BY category.',
    hint2: 'Estrutura pronta:\nSELECT category, COUNT(*)\nFROM skills\nGROUP BY category;',
    starterCode: 'SELECT category, \nFROM skills\n',
    checks: [
      { label: 'Função COUNT(*)', test: (c) => /count\(\s*\*\s*\)/i.test(c) },
      { label: 'Cláusula GROUP BY category', test: (c) => /group\s+by\s+category/i.test(c) },
    ],
    solution: (code) =>
      /count\(\s*\*\s*\)/i.test(code) && /group\s+by\s+category/i.test(code),
  },

  // Full-Stack Mastery (1)
  {
    id: 'boss-fullstack',
    skillId: 'mastery-fullstack',
    title: 'Boss Final: O Monólito Full-Stack',
    isBossFight: true,
    xp: 350,
    challenge:
      'Descreva em comentários a arquitetura de um app Full-Stack conectando React, API Express/Node, banco SQL/MongoDB e autenticação JWT com rotas protegidas.',
    hint: 'Cite cada camada da arquitetura nos comentários: frontend, backend, banco e autenticação.',
    hint2: 'Mencione as 5 palavras-chave: react, express, sql (ou mongodb), jwt e rota (ou route).',
    starterCode:
      '// 1. Frontend (React): ...\n// 2. Backend (Express): ...\n// 3. Banco & Autenticação: ...',
    checks: [
      { label: 'Frontend React', test: (c) => c.toLowerCase().includes('react') },
      {
        label: 'Backend Express + rotas',
        test: (c) =>
          c.toLowerCase().includes('express') &&
          (c.toLowerCase().includes('rota') || c.toLowerCase().includes('route')),
      },
      {
        label: 'Banco SQL/MongoDB + JWT',
        test: (c) =>
          (c.toLowerCase().includes('sql') || c.toLowerCase().includes('mongodb')) &&
          c.toLowerCase().includes('jwt'),
      },
    ],
    solution: (code) => {
      const lower = code.toLowerCase();
      return (
        lower.includes('react') &&
        lower.includes('express') &&
        (lower.includes('sql') || lower.includes('mongodb')) &&
        lower.includes('jwt') &&
        (lower.includes('route') || lower.includes('rota'))
      );
    },
  },
];

export const INITIAL_GUIDES = [
  {
    id: 'async',
    title: 'Grimório da Assincronicidade',
    category: 'JavaScript',
    readTime: '3 min',
    description: 'Domine Promises, async/await e o Event Loop sem travar a interface.',
    mentorSummary:
      'Regra de ouro: sempre envolva await em try/catch para tratar falhas de rede com elegância!',
    content: [
      { type: 'h3', text: 'O Event Loop' },
      {
        type: 'p',
        text: 'JavaScript executa em uma única thread, mas o Event Loop delega chamadas assíncronas (como fetch e timers) e traz o resultado de volta assim que a pilha principal fica livre.',
      },
      { type: 'h3', text: 'Async / Await na prática' },
      {
        type: 'p',
        text: 'Async/await deixa o fluxo assíncrono linear e legível, facilitando o tratamento de erros com try/catch.',
      },
      {
        type: 'code',
        text: `async function getQuestData() {\n  try {\n    const response = await fetch('https://api.devquest.com/quests');\n    return await response.json();\n  } catch (error) {\n    console.error('Falha ao buscar quests:', error);\n  }\n}`,
      },
    ],
  },
  {
    id: 'flexbox',
    title: 'Códice do Flexbox & Grid',
    category: 'CSS3',
    readTime: '2 min',
    description: 'Alinhe elementos em 1D (Flexbox) e componha grades limpas em 2D (CSS Grid).',
    mentorSummary:
      'Dica rápida: use Flexbox para barras/linhas e CSS Grid para galerias de cards em múltiplas colunas!',
    content: [
      { type: 'h3', text: 'Flexbox para Alinhamento' },
      {
        type: 'p',
        text: 'Ao definir display: flex, justify-content controla o eixo principal e align-items controla o eixo cruzado.',
      },
      {
        type: 'code',
        text: `.arena {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}`,
      },
      { type: 'h3', text: 'CSS Grid para Estruturas 2D' },
      {
        type: 'code',
        text: `.cards {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}`,
      },
    ],
  },
  {
    id: 'dom',
    title: 'Pergaminho do DOM Semântico',
    category: 'HTML5',
    readTime: '2 min',
    description: 'Construa páginas acessíveis, navegáveis por teclado e amigáveis a leitores de tela.',
    mentorSummary:
      'Nunca use <div onClick> para botões! <button type="button"> já traz teclado, foco e acessibilidade de graça.',
    content: [
      { type: 'h3', text: 'Semântica é Superpoder' },
      {
        type: 'p',
        text: 'Usar <header>, <nav>, <main>, <aside> e <button> permite que navegadores, teclado e tecnologias assistivas entendam seu produto imediatamente.',
      },
      {
        type: 'code',
        text: `<section aria-label="Boas-vindas">\n  <h1>Welcome to DevQuest</h1>\n  <p>Sua jornada Full-Stack começa aqui.</p>\n  <button type="button">Começar</button>\n</section>`,
      },
    ],
  },
  {
    id: 'hooks',
    title: 'Círculo Rúnico de React Hooks',
    category: 'React',
    readTime: '3 min',
    description: 'Estado previsível com useState, listas com key e derivações limpas com useMemo.',
    mentorSummary:
      'Se um valor pode ser calculado a partir de outro estado, use useMemo em vez de useEffect + setState!',
    content: [
      { type: 'h3', text: 'Estado local com useState' },
      {
        type: 'code',
        text: `const [xp, setXp] = useState(0);\nconst addXp = () => setXp((prev) => prev + 35);`,
      },
      { type: 'h3', text: 'Derive em vez de duplicar estado' },
      {
        type: 'p',
        text: 'Guardar estado derivado em outro useState costuma causar renderizações extras e loops infinitos. Calcule com useMemo diretamente da fonte da verdade.',
      },
      {
        type: 'code',
        text: `const unlockedSkills = useMemo(() => {\n  return skills.filter((s) => s.dependencies.every((d) => done.has(d)));\n}, [skills, done]);`,
      },
    ],
  },
];

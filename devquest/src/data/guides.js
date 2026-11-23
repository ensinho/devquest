/**
 * Grimórios — short, complete reads that prepare the next quest.
 *
 * Pure data (imported by the browser and by the API, which awards +10 XP the
 * first time a guide id is studied). Never rename an existing id: it lives in
 * players' `studiedGuides`.
 *
 * Block types: h3 · p · list{items} · code{text, lang} · tip · pitfall ·
 * compare{bad, good, note}
 */

const RAW_GUIDES = [
  /* ----------------------------------------------------------------- HTML */
  {
    id: 'dom',
    title: 'Pergaminho do DOM Semântico',
    category: 'HTML5',
    skillId: 'html',
    level: 'Iniciante',
    description: 'Construa páginas acessíveis, navegáveis por teclado e amigáveis a leitores de tela.',
    mentorSummary:
      'Nunca use <div onClick> para botões! <button type="button"> já traz teclado, foco e acessibilidade de graça.',
    objectives: [
      'Escolher a tag certa pelo significado, não pela aparência',
      'Montar a estrutura header · main · footer de uma página',
      'Criar uma hierarquia de títulos que faça sentido',
    ],
    questIds: ['q1', 'boss-html'],
    content: [
      { type: 'h3', text: 'Semântica é superpoder' },
      {
        type: 'p',
        text: 'HTML descreve o que cada parte da página é. Quando você usa <header>, <nav>, <main>, <section> e <button>, navegadores, buscadores e leitores de tela entendem o conteúdo sem precisar adivinhar.',
      },
      {
        type: 'list',
        items: [
          '<header> e <footer>: topo e rodapé da página ou de uma seção',
          '<nav>: um grupo de links de navegação',
          '<main>: o conteúdo principal (só um por página)',
          '<section>: um bloco temático, quase sempre com um título',
          '<article>: algo que faz sentido sozinho, como um post ou card',
        ],
      },
      { type: 'h3', text: 'Títulos contam a história' },
      {
        type: 'p',
        text: 'Use um único <h1> por página e desça na ordem: <h2> para seções, <h3> para subseções. Leitores de tela navegam pulando de título em título, como um índice.',
      },
      {
        type: 'code',
        lang: 'html',
        text: `<main>\n  <section aria-labelledby="boas-vindas">\n    <h1 id="boas-vindas">Welcome to DevQuest</h1>\n    <p>Sua jornada full-stack começa aqui.</p>\n    <button type="button">Começar</button>\n  </section>\n</main>`,
      },
      {
        type: 'compare',
        bad: `<div class="btn" onclick="start()">Começar</div>`,
        good: `<button type="button" onclick="start()">Começar</button>`,
        note: 'O <button> recebe foco com Tab, dispara com Enter e Espaço e é anunciado como botão.',
      },
      {
        type: 'pitfall',
        text: 'Escolher <h3> só porque a fonte é menor. Tamanho é CSS; o nível do título é estrutura.',
      },
      {
        type: 'tip',
        text: 'Teste sua página só com o teclado: Tab, Shift+Tab, Enter. Se algo não alcança o foco, a semântica está faltando.',
      },
    ],
    checklist: ['Um único <h1>', 'Botões são <button>, links são <a>', 'Conteúdo principal dentro de <main>'],
    references: [
      { label: 'MDN · Elementos HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element' },
      { label: 'MDN · Estrutura de documentos', url: 'https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure' },
    ],
  },
  {
    id: 'links-forms',
    title: 'Tomo dos Links, Imagens & Formulários',
    category: 'HTML5',
    skillId: 'html',
    level: 'Iniciante',
    description: 'Atributos que fazem a página navegar, mostrar imagens e coletar dados com segurança.',
    mentorSummary:
      'Atributo é configuração da tag: href diz para onde o link vai, alt diz o que a imagem mostra e label diz o que o campo pede.',
    objectives: [
      'Criar links internos, externos e âncoras',
      'Descrever imagens com alt de verdade',
      'Ligar cada campo de formulário ao seu <label>',
    ],
    questIds: ['q2'],
    content: [
      { type: 'h3', text: 'Links com href' },
      {
        type: 'p',
        text: 'A tag <a> só vira link quando tem href. O valor pode ser uma URL completa, um caminho do próprio site ou uma âncora (#id) para rolar até uma seção.',
      },
      {
        type: 'code',
        lang: 'html',
        text: `<a href="https://devquest.app">Abrir Portal</a>\n<a href="/guias">Ver grimórios</a>\n<a href="#faq">Ir para dúvidas</a>\n\n<!-- link externo em nova aba -->\n<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN</a>`,
      },
      {
        type: 'tip',
        text: 'Use target="_blank" com rel="noopener noreferrer": a nova aba não ganha acesso à sua página.',
      },
      { type: 'h3', text: 'Imagens com alt' },
      {
        type: 'p',
        text: 'O alt é lido por leitores de tela e aparece quando a imagem falha. Descreva o que importa nela. Se a imagem for só decoração, use alt="" para que seja ignorada.',
      },
      {
        type: 'compare',
        bad: `<img src="fox.png">`,
        good: `<img src="fox.png" alt="Kitsuby, o fox azul, comemorando" width="128" height="128">`,
        note: 'width e height reservam o espaço da imagem e evitam que a página "pule" ao carregar.',
      },
      { type: 'h3', text: 'Formulários que qualquer um usa' },
      {
        type: 'code',
        lang: 'html',
        text: `<form action="/inscricao" method="post">\n  <label for="email">E-mail</label>\n  <input id="email" name="email" type="email" required autocomplete="email">\n\n  <button type="submit">Entrar na guilda</button>\n</form>`,
      },
      {
        type: 'list',
        items: [
          'for no <label> igual ao id do campo: clicar no texto foca o input',
          'type="email", "number", "password" mudam o teclado no celular e validam sozinhos',
          'required e autocomplete economizam trabalho e erros',
        ],
      },
      {
        type: 'pitfall',
        text: 'Usar placeholder no lugar de label. O placeholder some quando a pessoa digita e não é anunciado como rótulo.',
      },
    ],
    checklist: ['Todo <a> tem href', 'Toda imagem tem alt', 'Todo campo tem <label>'],
    references: [
      { label: 'MDN · <a>', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/a' },
      { label: 'MDN · Formulários', url: 'https://developer.mozilla.org/pt-BR/docs/Learn/Forms' },
    ],
  },

  /* ------------------------------------------------------------------ CSS */
  {
    id: 'cascade',
    title: 'Runas da Cascata & Variáveis CSS',
    category: 'CSS3',
    skillId: 'css',
    level: 'Iniciante',
    description: 'Seletores, especificidade, box model e custom properties: por que uma regra vence a outra.',
    mentorSummary:
      'Quando um estilo "não pega", quase sempre é especificidade. Prefira classes simples e variáveis em vez de !important.',
    objectives: [
      'Ler uma regra CSS: seletor, propriedade e valor',
      'Entender cascata, herança e especificidade',
      'Usar custom properties (var(--x)) como tokens',
    ],
    questIds: ['q4'],
    content: [
      { type: 'h3', text: 'Anatomia de uma regra' },
      {
        type: 'code',
        lang: 'css',
        text: `/* seletor { propriedade: valor; } */\np {\n  color: var(--color-primary);\n  line-height: 1.6;\n}`,
      },
      { type: 'h3', text: 'Quem vence: a cascata' },
      {
        type: 'p',
        text: 'Quando duas regras miram o mesmo elemento, vence a mais específica. Se empatar, vence a que vem por último no arquivo.',
      },
      {
        type: 'list',
        items: [
          'Seletor de tag (p, h1): peso baixo',
          'Classe, atributo, pseudo-classe (.card, [type], :hover): peso médio',
          'ID (#hero): peso alto. Evite em estilos',
          'style="" inline e !important: furam tudo e criam dívida',
        ],
      },
      { type: 'h3', text: 'Box model' },
      {
        type: 'p',
        text: 'Todo elemento é uma caixa: conteúdo, padding, borda e margem. Com box-sizing: border-box, a largura que você declara já inclui padding e borda. Por isso quase todo projeto começa com essa linha.',
      },
      { type: 'code', lang: 'css', text: `*, *::before, *::after {\n  box-sizing: border-box;\n}` },
      { type: 'h3', text: 'Variáveis: a base dos tokens' },
      {
        type: 'p',
        text: 'Custom properties guardam valores reutilizáveis e herdam pela árvore. Mude a variável num lugar e o app inteiro acompanha. É assim que o DevQuest troca entre tema claro e escuro.',
      },
      {
        type: 'code',
        lang: 'css',
        text: `:root {\n  --color-primary: #ffcb35;\n}\n[data-theme='light'] {\n  --color-primary: #d89c00;\n}\np {\n  color: var(--color-primary);\n}`,
      },
      {
        type: 'pitfall',
        text: 'Resolver conflito com !important. Na próxima mudança você vai precisar de outro !important, e a guerra não acaba.',
      },
      {
        type: 'tip',
        text: 'No DevTools, a aba Styles mostra regras riscadas: são as que perderam na cascata. É o jeito mais rápido de achar o culpado.',
      },
    ],
    checklist: ['Classes em vez de IDs', 'box-sizing: border-box', 'Cores e espaços via var(--token)'],
    references: [
      { label: 'MDN · Cascata e herança', url: 'https://developer.mozilla.org/pt-BR/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance' },
      { label: 'MDN · Custom properties', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties' },
    ],
  },
  {
    id: 'flexbox',
    title: 'Códice do Flexbox & Grid',
    category: 'CSS3',
    skillId: 'css',
    level: 'Iniciante',
    description: 'Alinhe elementos em 1D (Flexbox) e componha grades limpas em 2D (CSS Grid).',
    mentorSummary:
      'Dica rápida: use Flexbox para barras/linhas e CSS Grid para galerias de cards em múltiplas colunas!',
    objectives: [
      'Centralizar qualquer coisa com Flexbox',
      'Montar grades responsivas com Grid',
      'Saber quando usar cada um',
    ],
    questIds: ['q-css-grid', 'boss-css'],
    content: [
      { type: 'h3', text: 'Flexbox: uma direção por vez' },
      {
        type: 'p',
        text: 'Com display: flex, os filhos se alinham numa linha (ou coluna, com flex-direction: column). justify-content controla o eixo principal e align-items controla o eixo cruzado.',
      },
      {
        type: 'code',
        lang: 'css',
        text: `.arena {\n  display: flex;\n  justify-content: center; /* horizontal */\n  align-items: center;     /* vertical */\n  gap: 1rem;\n}`,
      },
      {
        type: 'list',
        items: [
          'justify-content: flex-start | center | space-between | flex-end',
          'align-items: stretch | center | flex-start | baseline',
          'flex: 1 faz um filho ocupar o espaço que sobra',
          'flex-wrap: wrap deixa os itens quebrarem linha',
        ],
      },
      { type: 'h3', text: 'Grid: linhas e colunas juntas' },
      {
        type: 'code',
        lang: 'css',
        text: `.cards {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n\n/* grade que se adapta sozinha */\n.galeria {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));\n  gap: 1rem;\n}`,
      },
      {
        type: 'p',
        text: '1fr é "uma fração do espaço livre". repeat(auto-fill, minmax(14rem, 1fr)) cria quantas colunas couberem, cada uma com pelo menos 14rem, sem nenhum media query.',
      },
      {
        type: 'compare',
        bad: `.card { margin-right: 16px; }\n.card:last-child { margin-right: 0; }`,
        good: `.lista { display: flex; gap: 1rem; }`,
        note: 'gap espaça só entre os itens, sem margens sobrando nas pontas.',
      },
      {
        type: 'tip',
        text: 'Regra prática: conteúdo que flui numa direção (navbar, botões, chips) é Flexbox. Layout com linhas e colunas alinhadas (galeria, dashboard) é Grid.',
      },
    ],
    checklist: ['gap em vez de margens', 'Flex para 1D, Grid para 2D', 'minmax() para grades responsivas'],
    references: [
      { label: 'MDN · Flexbox', url: 'https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox' },
      { label: 'MDN · CSS Grid', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_grid_layout' },
    ],
  },

  /* ----------------------------------------------------------- JavaScript */
  {
    id: 'js-basics',
    title: 'Grimório das Variáveis & Arrays',
    category: 'JavaScript',
    skillId: 'js',
    level: 'Iniciante',
    description: 'const, let, tipos, template strings e os métodos de array que você vai usar todo dia.',
    mentorSummary:
      'Comece tudo com const. Só troque por let quando precisar reatribuir. E esqueça o var!',
    objectives: [
      'Declarar variáveis com const e let',
      'Conhecer os tipos primitivos e template strings',
      'Transformar listas com map, filter e reduce',
    ],
    questIds: ['q7', 'q18'],
    content: [
      { type: 'h3', text: 'const, let e (não) var' },
      {
        type: 'code',
        lang: 'js',
        text: `const hero = 'Kitsuby'; // não pode ser reatribuída\nlet xp = 0;             // pode mudar\nxp = xp + 35;\n\nconst greeting = \`Olá, \${hero}! Você tem \${xp} XP.\`;`,
      },
      {
        type: 'p',
        text: 'const impede reatribuir a variável, mas não congela o conteúdo: um array declarado com const ainda aceita push. var tem escopo de função e causa bugs sutis. Não há motivo para usá-lo hoje.',
      },
      { type: 'h3', text: 'Tipos que você encontra' },
      {
        type: 'list',
        items: [
          'string: \'texto\', "texto" ou `template ${expressao}`',
          'number: 42, 3.14 (inteiros e decimais são o mesmo tipo)',
          'boolean: true / false',
          'null (vazio de propósito) e undefined (ainda não definido)',
          'object e array: { nome: "Ana" } e [1, 2, 3]',
        ],
      },
      {
        type: 'pitfall',
        text: 'Comparar com ==. Ele converte tipos ("5" == 5 é true). Use sempre === e !==.',
      },
      { type: 'h3', text: 'Os três métodos de array essenciais' },
      {
        type: 'code',
        lang: 'js',
        text: `const arr = [1, 2, 3, 4, 5];\n\nconst newArr  = arr.filter((n) => n > 2);      // [3, 4, 5]\nconst doubled = arr.map((n) => n * 2);         // [2, 4, 6, 8, 10]\nconst total   = arr.reduce((acc, n) => acc + n, 0); // 15`,
      },
      {
        type: 'p',
        text: 'Nenhum deles altera o array original: cada um devolve um valor novo. Isso deixa o código previsível e é exatamente o que o React espera.',
      },
      {
        type: 'compare',
        bad: `const big = [];\nfor (let i = 0; i < arr.length; i++) {\n  if (arr[i] > 2) big.push(arr[i]);\n}`,
        good: `const big = arr.filter((n) => n > 2);`,
        note: 'Mesmo resultado, uma linha, sem índice para errar.',
      },
      {
        type: 'tip',
        text: 'Também valem: find (o primeiro que passa), some (algum passa?), every (todos passam?) e includes (contém o valor?).',
      },
    ],
    checklist: ['const por padrão', '=== em comparações', 'filter/map/reduce em vez de for manual'],
    references: [
      { label: 'MDN · Variáveis', url: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Variables' },
      { label: 'MDN · Array', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array' },
    ],
  },
  {
    id: 'async',
    title: 'Grimório da Assincronicidade',
    category: 'JavaScript',
    skillId: 'js',
    level: 'Intermediário',
    description: 'Domine Promises, async/await e o Event Loop sem travar a interface.',
    mentorSummary:
      'Regra de ouro: sempre envolva await em try/catch para tratar falhas de rede com elegância!',
    objectives: [
      'Entender o Event Loop e por que a tela não trava',
      'Consumir uma API com fetch + async/await',
      'Tratar erros de rede e respostas inválidas',
    ],
    questIds: ['boss-js'],
    content: [
      { type: 'h3', text: 'O Event Loop' },
      {
        type: 'p',
        text: 'JavaScript executa em uma única thread, mas o Event Loop delega chamadas assíncronas (como fetch e timers) e traz o resultado de volta assim que a pilha principal fica livre. Enquanto a resposta não chega, a interface continua respondendo.',
      },
      { type: 'h3', text: 'Promise: um valor que chega depois' },
      {
        type: 'p',
        text: 'Uma Promise começa pendente e termina resolvida (com um valor) ou rejeitada (com um erro). async/await é só uma forma mais legível de esperar por ela.',
      },
      {
        type: 'code',
        lang: 'js',
        text: `async function getQuestData() {\n  try {\n    const response = await fetch('https://api.devquest.com/quests');\n    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);\n    return await response.json();\n  } catch (error) {\n    console.error('Falha ao buscar quests:', error);\n    return [];\n  }\n}`,
      },
      {
        type: 'pitfall',
        text: 'Achar que fetch rejeita em erro 404 ou 500. Ele só rejeita em falha de rede. Confira response.ok sempre.',
      },
      { type: 'h3', text: 'Em paralelo quando der' },
      {
        type: 'compare',
        bad: `const user = await getUser();\nconst quests = await getQuests(); // espera o primeiro à toa`,
        good: `const [user, quests] = await Promise.all([getUser(), getQuests()]);`,
        note: 'Se uma chamada não depende da outra, dispare as duas juntas.',
      },
      {
        type: 'tip',
        text: 'await só funciona dentro de funções async (ou no topo de módulos ES). Esqueceu o async? O erro aparece na hora.',
      },
    ],
    checklist: ['try/catch em volta do await', 'Checar response.ok', 'Promise.all para chamadas independentes'],
    references: [
      { label: 'MDN · async function', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function' },
      { label: 'MDN · Fetch API', url: 'https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch' },
    ],
  },

  /* ---------------------------------------------------------- Tokens & UI */
  {
    id: 'tokens',
    title: 'Atlas dos Design Tokens',
    category: 'Tokens & UI',
    skillId: 'tailwind',
    level: 'Intermediário',
    description: 'Primitivos, semânticos e componentes: a arquitetura de 3 camadas que mantém um app coerente.',
    mentorSummary:
      'Token é um nome com significado para um valor. Hex solto no componente é dívida que você paga no tema claro.',
    objectives: [
      'Separar valor bruto de intenção (primitivo vs semântico)',
      'Aplicar classes utilitárias de layout',
      'Montar um card com a regra 0-1-2 de contenção',
    ],
    questIds: ['q5', 'boss-ui-token'],
    content: [
      { type: 'h3', text: 'Três camadas' },
      {
        type: 'list',
        items: [
          'Primitivos: a paleta crua (--primitive-cobalt-500: #4d7af5). Ninguém usa direto.',
          'Semânticos: a intenção (--color-surface, --color-danger). Mudam com o tema.',
          'Componentes: decisões locais (--btn-min-height) que apontam para semânticos.',
        ],
      },
      {
        type: 'code',
        lang: 'css',
        text: `/* primitivo */\n--primitive-ink-900: #161936;\n/* semântico */\n--color-surface: var(--primitive-ink-900);\n/* uso */\n.card {\n  background-color: var(--color-surface);\n  border-radius: var(--radius-lg);\n  padding: var(--space-4);\n}`,
      },
      {
        type: 'compare',
        bad: `.card { background: #161936; padding: 15px; border-radius: 11px; }`,
        good: `.card {\n  background-color: var(--color-surface);\n  padding: var(--space-4);\n  border-radius: var(--radius-lg);\n}`,
        note: 'No tema claro, o primeiro card fica escuro e com medidas fora da escala. O segundo se ajusta sozinho.',
      },
      { type: 'h3', text: 'Utilitários' },
      {
        type: 'p',
        text: 'Frameworks como Tailwind transformam tokens em classes pequenas, cada uma com uma tarefa. Você compõe o layout direto no HTML.',
      },
      {
        type: 'code',
        lang: 'html',
        text: `<div class="flex items-center justify-center gap-4 p-4">\n  <p>Centralizado com utilitários</p>\n</div>`,
      },
      { type: 'h3', text: 'Regra 0-1-2' },
      {
        type: 'p',
        text: 'Separe a hierarquia com tons de superfície (fundo → superfície → superfície elevada) e espaço, não com bordas dentro de bordas. No máximo dois níveis de contenção visíveis.',
      },
      {
        type: 'tip',
        text: 'Um bom teste: troque o tema. Se algo ficar ilegível, há um valor cru escondido em algum lugar.',
      },
    ],
    checklist: ['Zero hex em componentes', 'Espaços da escala (--space-*)', 'Hierarquia por tom, não por borda'],
    references: [
      { label: 'Design Tokens W3C', url: 'https://www.designtokens.org/' },
      { label: 'Tailwind · Utility-first', url: 'https://tailwindcss.com/docs/styling-with-utility-classes' },
    ],
  },

  /* ---------------------------------------------------------------- React */
  {
    id: 'components-props',
    title: 'Manual dos Componentes & Props',
    category: 'React',
    skillId: 'react',
    level: 'Iniciante',
    description: 'JSX, componentes como funções e props como parâmetros: a base de qualquer interface React.',
    mentorSummary:
      'Um componente é uma função que recebe props e devolve JSX. Se você sabe escrever funções, já sabe metade do React!',
    objectives: [
      'Escrever JSX sem tropeçar nas diferenças para HTML',
      'Criar componentes reutilizáveis',
      'Passar dados e funções por props',
    ],
    questIds: ['q10'],
    content: [
      { type: 'h3', text: 'Componente = função' },
      {
        type: 'code',
        lang: 'jsx',
        text: `function Hero({ name, level = 1 }) {\n  return (\n    <article className="hero-card">\n      <h2>{name}</h2>\n      <p>Nível {level}</p>\n    </article>\n  );\n}\n\n// uso\n<Hero name="Kitsuby" level={3} />`,
      },
      {
        type: 'list',
        items: [
          'Nome com letra maiúscula: <Hero /> é componente, <hero> seria tag HTML',
          'Chaves {} inserem qualquer expressão JavaScript no JSX',
          'Strings vão entre aspas, outros valores entre chaves: level={3}',
          'Props são somente leitura: nunca altere props dentro do componente',
        ],
      },
      { type: 'h3', text: 'JSX não é HTML' },
      {
        type: 'compare',
        bad: `<label class="field" for="nome" onclick="go()">`,
        good: `<label className="field" htmlFor="nome" onClick={go}>`,
        note: 'class → className, for → htmlFor, eventos em camelCase recebendo a função (não uma string).',
      },
      { type: 'h3', text: 'Funções também são props' },
      {
        type: 'code',
        lang: 'jsx',
        text: `function PetButton({ onPet }) {\n  return <button type="button" onClick={onPet}>Fazer carinho</button>;\n}\n\n<PetButton onPet={() => setBond((b) => b + 1)} />`,
      },
      {
        type: 'pitfall',
        text: 'Escrever onClick={onPet()} com parênteses. Isso chama a função durante a renderização, não no clique.',
      },
      {
        type: 'tip',
        text: 'children é uma prop especial: tudo que você coloca entre <Card> e </Card> chega como props.children.',
      },
    ],
    checklist: ['Componentes com inicial maiúscula', 'className e htmlFor', 'Passar a função, não chamá-la'],
    references: [
      { label: 'React · Seu primeiro componente', url: 'https://pt-br.react.dev/learn/your-first-component' },
      { label: 'React · Passando props', url: 'https://pt-br.react.dev/learn/passing-props-to-a-component' },
    ],
  },
  {
    id: 'hooks',
    title: 'Círculo Rúnico de React Hooks',
    category: 'React',
    skillId: 'react',
    level: 'Intermediário',
    description: 'Estado previsível com useState, listas com key e derivações limpas com useMemo.',
    mentorSummary:
      'Se um valor pode ser calculado a partir de outro estado, use useMemo em vez de useEffect + setState!',
    objectives: [
      'Guardar e atualizar estado com useState',
      'Renderizar listas com .map() e key',
      'Derivar dados em vez de duplicar estado',
    ],
    questIds: ['q-react-state', 'boss-react'],
    content: [
      { type: 'h3', text: 'Estado local com useState' },
      {
        type: 'code',
        lang: 'jsx',
        text: `const [xp, setXp] = useState(0);\nconst addXp = () => setXp((prev) => prev + 35);`,
      },
      {
        type: 'p',
        text: 'Chamar setXp agenda uma nova renderização com o valor novo. Quando o próximo valor depende do anterior, use a forma de função (prev) => prev + 35: ela sempre recebe o valor mais recente.',
      },
      {
        type: 'pitfall',
        text: 'Mutar o estado: xp.push(...) ou user.level = 2 não avisam o React. Crie um valor novo: setList([...list, item]).',
      },
      { type: 'h3', text: 'Listas com key' },
      {
        type: 'code',
        lang: 'jsx',
        text: `<ul>\n  {quests.map((q) => (\n    <li key={q.id}>{q.title}</li>\n  ))}\n</ul>`,
      },
      {
        type: 'compare',
        bad: `quests.map((q, i) => <li key={i}>{q.title}</li>)`,
        good: `quests.map((q) => <li key={q.id}>{q.title}</li>)`,
        note: 'O índice muda quando a lista é reordenada ou filtrada; um id estável não.',
      },
      { type: 'h3', text: 'Derive em vez de duplicar estado' },
      {
        type: 'p',
        text: 'Guardar estado derivado em outro useState costuma causar renderizações extras e loops infinitos. Calcule direto da fonte da verdade, com useMemo quando o cálculo for caro.',
      },
      {
        type: 'code',
        lang: 'jsx',
        text: `const unlockedSkills = useMemo(() => {\n  return skills.filter((s) => s.dependencies.every((d) => done.has(d)));\n}, [skills, done]);`,
      },
      {
        type: 'tip',
        text: 'useEffect é para sincronizar com algo fora do React (API, timer, evento do window), não para calcular valores.',
      },
    ],
    checklist: ['setState com função quando depende do anterior', 'key estável em listas', 'Nada de estado derivado duplicado'],
    references: [
      { label: 'React · useState', url: 'https://pt-br.react.dev/reference/react/useState' },
      { label: 'React · Você talvez não precise de um Effect', url: 'https://pt-br.react.dev/learn/you-might-not-need-an-effect' },
    ],
  },

  /* -------------------------------------------------------------- Node.js */
  {
    id: 'express',
    title: 'Crônicas do Servidor Express',
    category: 'Node.js & API',
    skillId: 'nodejs',
    level: 'Intermediário',
    description: 'HTTP, rotas GET e POST, req/res, status codes e validação de entrada numa API Express.',
    mentorSummary:
      'Toda rota faz três coisas: lê a requisição, valida e responde. Nunca confie no que chega do cliente!',
    objectives: [
      'Entender requisição, resposta e métodos HTTP',
      'Criar rotas GET e POST que respondem JSON',
      'Usar o status code certo e validar o body',
    ],
    questIds: ['q-node-get', 'q19'],
    content: [
      { type: 'h3', text: 'HTTP em uma frase' },
      {
        type: 'p',
        text: 'O cliente envia uma requisição (método + caminho + cabeçalhos + corpo opcional) e o servidor devolve uma resposta (status + cabeçalhos + corpo). GET lê, POST cria, PUT/PATCH atualizam, DELETE remove.',
      },
      { type: 'h3', text: 'Primeira API' },
      {
        type: 'code',
        lang: 'js',
        text: `import express from 'express';\n\nconst app = express();\napp.use(express.json()); // lê corpos JSON\n\napp.get('/health', (req, res) => {\n  res.json({ ok: true });\n});\n\napp.post('/users', (req, res) => {\n  const name = String(req.body.name ?? '').trim();\n  if (!name) return res.status(400).json({ error: 'name é obrigatório' });\n  res.status(201).json({ name });\n});\n\napp.listen(3000);`,
      },
      {
        type: 'list',
        items: [
          'req.params: partes do caminho (/users/:id → req.params.id)',
          'req.query: depois do ? (/quests?skill=js → req.query.skill)',
          'req.body: o corpo enviado (precisa do express.json())',
        ],
      },
      { type: 'h3', text: 'Status codes que você usa sempre' },
      {
        type: 'list',
        items: [
          '200 OK · 201 Created · 204 No Content',
          '400 Bad Request: entrada inválida',
          '401 Unauthorized: sem login · 403 Forbidden: sem permissão',
          '404 Not Found · 409 Conflict · 422 dados não passaram na validação',
          '500 Internal Server Error: bug do servidor (nunca culpa do usuário)',
        ],
      },
      {
        type: 'pitfall',
        text: 'Responder 200 com { error: "..." } dentro. O cliente acha que deu certo. Use o status que descreve o que aconteceu.',
      },
      {
        type: 'tip',
        text: 'O DevQuest faz exatamente isso: cada quest enviada vai para /api/progress, que valida seu código de novo no servidor antes de dar XP.',
      },
    ],
    checklist: ['express.json() ligado', 'Validar req.body', 'Status code honesto'],
    references: [
      { label: 'Express · Roteamento', url: 'https://expressjs.com/pt-br/guide/routing.html' },
      { label: 'MDN · Status HTTP', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status' },
    ],
  },

  /* ------------------------------------------------------------------ SQL */
  {
    id: 'sql-basics',
    title: 'Pergaminho das Consultas SQL',
    category: 'SQL',
    skillId: 'sql',
    level: 'Iniciante',
    description: 'SELECT, WHERE, ORDER BY e LIMIT: pergunte ao banco exatamente o que você quer.',
    mentorSummary:
      'SQL se lê quase como frase: SELECIONE estas colunas DA tabela ONDE a condição vale, ORDENADO por algo.',
    objectives: [
      'Ler uma tabela como linhas e colunas',
      'Filtrar com WHERE e operadores',
      'Ordenar e limitar resultados',
    ],
    questIds: ['q-sql-where'],
    content: [
      { type: 'h3', text: 'Tabelas' },
      {
        type: 'p',
        text: 'Um banco relacional guarda dados em tabelas. Cada linha é um registro (um usuário) e cada coluna é um campo (name, level). A chave primária (id) identifica cada linha de forma única.',
      },
      { type: 'h3', text: 'A consulta básica' },
      {
        type: 'code',
        lang: 'sql',
        text: `SELECT name, level\nFROM users\nWHERE level >= 5\nORDER BY level DESC\nLIMIT 10;`,
      },
      {
        type: 'list',
        items: [
          'Comparação: =, <>, >, >=, <, <=',
          'Combinação: AND, OR, NOT',
          'Faixas e listas: BETWEEN 1 AND 5, IN (\'html\', \'css\')',
          'Texto: LIKE \'Kit%\' (começa com Kit)',
          'Vazio: IS NULL / IS NOT NULL (nunca = NULL)',
        ],
      },
      {
        type: 'compare',
        bad: `SELECT * FROM users;`,
        good: `SELECT name, level FROM users WHERE level >= 5;`,
        note: 'Peça só as colunas e linhas que vai usar: menos dados trafegando, consulta mais rápida.',
      },
      {
        type: 'pitfall',
        text: 'Montar SQL concatenando texto do usuário ("... WHERE name = \'" + nome + "\'"). Isso abre SQL injection. Use parâmetros: WHERE name = $1.',
      },
      {
        type: 'tip',
        text: 'A ordem de escrita é SELECT → FROM → WHERE → ORDER BY → LIMIT, mas o banco executa FROM → WHERE → SELECT → ORDER BY → LIMIT.',
      },
    ],
    checklist: ['Colunas explícitas', 'WHERE antes de ORDER BY', 'Consultas parametrizadas'],
    references: [
      { label: 'PostgreSQL · SELECT', url: 'https://www.postgresql.org/docs/current/sql-select.html' },
      { label: 'SQLBolt (interativo)', url: 'https://sqlbolt.com/' },
    ],
  },
  {
    id: 'sql-joins',
    title: 'Elos do JOIN & Agregações',
    category: 'SQL',
    skillId: 'sql',
    level: 'Intermediário',
    description: 'Una tabelas relacionadas com JOIN e resuma dados com COUNT, SUM e GROUP BY.',
    mentorSummary:
      'Chave estrangeira é a ponte: posts.user_id aponta para users.id. O JOIN atravessa essa ponte.',
    objectives: [
      'Relacionar tabelas por chave estrangeira',
      'Escolher entre INNER JOIN e LEFT JOIN',
      'Agrupar e contar com GROUP BY e HAVING',
    ],
    questIds: ['q20', 'boss-sql'],
    content: [
      { type: 'h3', text: 'Relacionamentos' },
      {
        type: 'p',
        text: 'Em vez de repetir o nome do autor em cada post, a tabela posts guarda só user_id. Para mostrar post e autor juntos, você une as tabelas.',
      },
      {
        type: 'code',
        lang: 'sql',
        text: `SELECT u.name, p.title\nFROM users u\nJOIN posts p ON u.id = p.user_id;`,
      },
      {
        type: 'list',
        items: [
          'JOIN (INNER): só linhas com par nas duas tabelas',
          'LEFT JOIN: todas da esquerda, mesmo sem par (os campos da direita vêm NULL)',
          'Apelidos (users u) deixam a consulta curta e sem ambiguidade',
        ],
      },
      { type: 'h3', text: 'Agregações' },
      {
        type: 'code',
        lang: 'sql',
        text: `SELECT category, COUNT(*) AS total\nFROM skills\nGROUP BY category\nHAVING COUNT(*) > 1\nORDER BY total DESC;`,
      },
      {
        type: 'p',
        text: 'COUNT, SUM, AVG, MIN e MAX resumem várias linhas em uma. GROUP BY define os grupos. WHERE filtra linhas antes de agrupar; HAVING filtra os grupos depois.',
      },
      {
        type: 'pitfall',
        text: 'Selecionar uma coluna que não está no GROUP BY nem dentro de uma agregação. O banco não sabe qual valor do grupo mostrar.',
      },
      {
        type: 'tip',
        text: 'Quer contar quantos posts cada usuário tem, incluindo quem tem zero? LEFT JOIN + COUNT(p.id).',
      },
    ],
    checklist: ['ON com a chave certa', 'LEFT JOIN quando zero importa', 'WHERE para linhas, HAVING para grupos'],
    references: [
      { label: 'PostgreSQL · Joins', url: 'https://www.postgresql.org/docs/current/tutorial-join.html' },
      { label: 'PostgreSQL · Agregação', url: 'https://www.postgresql.org/docs/current/tutorial-agg.html' },
    ],
  },

  /* ------------------------------------------------------ A11y & Testes */
  {
    id: 'a11y',
    title: 'Códex da Acessibilidade',
    category: 'A11y & Testes',
    skillId: 'a11y-tests',
    level: 'Intermediário',
    description: 'Foco visível, aria-label, contraste e teclado: interfaces que qualquer pessoa consegue usar.',
    mentorSummary:
      'Botão só com ícone precisa de nome! aria-label="Alternar tema" é o que o leitor de tela vai falar.',
    objectives: [
      'Dar nome acessível a controles só com ícone',
      'Garantir foco visível e navegação por teclado',
      'Checar contraste e não depender só de cor',
    ],
    questIds: ['q-a11y-label'],
    content: [
      { type: 'h3', text: 'Todo controle precisa de um nome' },
      {
        type: 'p',
        text: 'Leitores de tela anunciam o papel (botão) e o nome (o texto dentro dele). Quando só há um ícone, o nome some. aria-label devolve esse nome.',
      },
      {
        type: 'compare',
        bad: `<div class="icon" onclick="toggle()">☀</div>`,
        good: `<button type="button" aria-label="Alternar tema" onclick="toggle()">☀</button>`,
        note: 'Papel certo (button), nome certo (aria-label) e teclado de graça.',
      },
      { type: 'h3', text: 'Foco é navegação' },
      {
        type: 'code',
        lang: 'css',
        text: `button:focus-visible {\n  outline: 3px solid var(--color-focus);\n  outline-offset: 2px;\n}`,
      },
      {
        type: 'list',
        items: [
          'Nunca remova o outline sem colocar outro indicador no lugar',
          ':focus-visible mostra o anel só para quem usa teclado',
          'A ordem do Tab deve seguir a ordem visual',
          'Modais prendem o foco e devolvem ao fechar',
        ],
      },
      { type: 'h3', text: 'Cor e contraste' },
      {
        type: 'p',
        text: 'Texto normal precisa de contraste mínimo de 4.5:1 com o fundo (WCAG AA). E nunca use só cor para comunicar: um erro em vermelho também precisa de ícone ou texto.',
      },
      {
        type: 'pitfall',
        text: 'Usar aria-label em tudo. Se o botão já tem texto visível, ele já tem nome. ARIA demais confunde mais do que ajuda.',
      },
      {
        type: 'tip',
        text: 'Primeira regra do ARIA: se existe um elemento HTML nativo que faz o trabalho, use ele.',
      },
    ],
    checklist: ['Ícones com aria-label', ':focus-visible estilizado', 'Contraste ≥ 4.5:1'],
    references: [
      { label: 'MDN · Acessibilidade', url: 'https://developer.mozilla.org/pt-BR/docs/Web/Accessibility' },
      { label: 'WCAG · Contraste mínimo', url: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html' },
    ],
  },
  {
    id: 'testing',
    title: 'Tratado dos Testes com Vitest',
    category: 'A11y & Testes',
    skillId: 'a11y-tests',
    level: 'Intermediário',
    description: 'describe, it, expect e matchers: testes unitários que protegem cada regra do seu código.',
    mentorSummary:
      'Teste é uma promessa executável: "sum(2, 3) sempre dá 5". Se alguém quebrar a regra, o teste avisa antes do usuário.',
    objectives: [
      'Estruturar testes com describe e it',
      'Usar expect com os matchers mais comuns',
      'Escrever testes no padrão Arrange · Act · Assert',
    ],
    questIds: ['boss-vitest'],
    content: [
      { type: 'h3', text: 'O primeiro teste' },
      {
        type: 'code',
        lang: 'js',
        text: `import { describe, it, expect } from 'vitest';\nimport { sum } from './math.js';\n\ndescribe('sum', () => {\n  it('soma dois números', () => {\n    expect(sum(2, 3)).toBe(5);\n  });\n});`,
      },
      {
        type: 'p',
        text: 'describe agrupa, it descreve um comportamento e expect compara o resultado real com o esperado. Rode com npx vitest e ele refaz os testes a cada salvamento.',
      },
      { type: 'h3', text: 'Matchers do dia a dia' },
      {
        type: 'list',
        items: [
          'toBe(5): igualdade exata (números, strings, booleanos)',
          'toEqual({ a: 1 }): compara objetos e arrays pelo conteúdo',
          'toContain(\'q1\'): o array ou texto contém o valor',
          'toBeTruthy() / toBeNull() / toHaveLength(3)',
          'toThrow(): a função lança erro',
        ],
      },
      {
        type: 'compare',
        bad: `expect({ xp: 10 }).toBe({ xp: 10 }); // falha`,
        good: `expect({ xp: 10 }).toEqual({ xp: 10 });`,
        note: 'toBe compara referência; dois objetos iguais ainda são objetos diferentes.',
      },
      { type: 'h3', text: 'Arrange · Act · Assert' },
      {
        type: 'code',
        lang: 'js',
        text: `it('sobe de nível ao passar de 100 XP', () => {\n  const hero = { level: 1, xp: 90 };   // Arrange\n  const next = addXp(hero, 20);        // Act\n  expect(next.level).toBe(2);          // Assert\n});`,
      },
      {
        type: 'pitfall',
        text: 'Testar detalhes de implementação (nomes de variáveis internas). Teste o comportamento que o usuário percebe; assim você refatora sem reescrever testes.',
      },
      {
        type: 'tip',
        text: 'Viu um bug? Escreva primeiro o teste que falha por causa dele, depois corrija. Ele nunca volta escondido.',
      },
    ],
    checklist: ['Um comportamento por it', 'toEqual para objetos', 'Teste de regressão para cada bug'],
    references: [
      { label: 'Vitest · Primeiros passos', url: 'https://vitest.dev/guide/' },
      { label: 'Vitest · expect', url: 'https://vitest.dev/api/expect.html' },
    ],
  },

  /* ----------------------------------------------------------- Full-Stack */
  {
    id: 'fullstack',
    title: 'Mapa do Reino Full-Stack',
    category: 'Full-Stack',
    skillId: 'mastery-fullstack',
    level: 'Avançado',
    description: 'Como React, API, banco e autenticação JWT se conectam num app real, do clique ao banco.',
    mentorSummary:
      'Frontend pede, backend decide, banco lembra. E o token prova quem está pedindo.',
    objectives: [
      'Seguir uma requisição do clique até o banco e de volta',
      'Entender autenticação com JWT e rotas protegidas',
      'Saber o que roda no cliente e o que precisa ficar no servidor',
    ],
    questIds: ['boss-fullstack'],
    content: [
      { type: 'h3', text: 'As camadas' },
      {
        type: 'list',
        items: [
          'Frontend (React): mostra a interface e chama a API com fetch',
          'API (Node/Express): valida, aplica as regras de negócio e responde JSON',
          'Banco (SQL ou MongoDB): guarda os dados de forma durável',
          'Autenticação (JWT): prova quem é o usuário em cada requisição',
        ],
      },
      { type: 'h3', text: 'Uma requisição de ponta a ponta' },
      {
        type: 'code',
        lang: 'js',
        text: `// Frontend (React)\nconst res = await fetch('/api/quests', {\n  headers: { Authorization: \`Bearer \${token}\` },\n});\n\n// Backend (Express): rota protegida\napp.get('/api/quests', requireAuth, async (req, res) => {\n  const rows = await db.query(\n    'SELECT id, title FROM quests WHERE user_id = $1',\n    [req.user.id]\n  );\n  res.json(rows);\n});`,
      },
      { type: 'h3', text: 'JWT em 30 segundos' },
      {
        type: 'p',
        text: 'No login, o servidor assina um token com os dados do usuário. O cliente envia esse token no cabeçalho Authorization. O middleware confere a assinatura; se for válida, req.user fica disponível e a rota segue.',
      },
      {
        type: 'code',
        lang: 'js',
        text: `function requireAuth(req, res, next) {\n  const token = req.headers.authorization?.replace('Bearer ', '');\n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();\n  } catch {\n    res.status(401).json({ error: 'Faça login novamente' });\n  }\n}`,
      },
      {
        type: 'pitfall',
        text: 'Confiar no frontend para regras importantes ("o botão está desabilitado, então ninguém chama"). Qualquer pessoa chama sua API direto. Valide no servidor.',
      },
      {
        type: 'list',
        items: [
          'Segredos (chaves, senhas do banco) só em variáveis de ambiente do servidor',
          'HTTPS sempre; o token vale como uma senha temporária',
          'Cada usuário só lê e altera os próprios dados (filtre por req.user.id)',
        ],
      },
      {
        type: 'tip',
        text: 'O próprio DevQuest segue esse desenho: React no navegador, funções Node na Vercel, Firestore como banco e tokens do Firebase Auth conferidos em toda chamada.',
      },
    ],
    checklist: ['Regras validadas no servidor', 'Segredos fora do código', 'Rotas filtrando por usuário'],
    references: [
      { label: 'MDN · Visão geral do HTTP', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview' },
      { label: 'jwt.io · Introdução', url: 'https://jwt.io/introduction' },
    ],
  },

  /* ---------------------------------------------------------- Ferramentas */
  {
    id: 'git',
    title: 'Diário do Git',
    category: 'Ferramentas',
    skillId: null,
    level: 'Iniciante',
    description: 'Commits, branches e pull requests: salve cada passo e trabalhe em equipe sem medo.',
    mentorSummary:
      'Commit pequeno com mensagem clara é um checkpoint de jogo: dá para voltar se o boss vencer.',
    objectives: [
      'Entender working tree, staging e commit',
      'Criar branches para cada mudança',
      'Escrever mensagens de commit úteis',
    ],
    questIds: [],
    content: [
      { type: 'h3', text: 'O ciclo básico' },
      {
        type: 'code',
        lang: 'bash',
        text: `git status                 # o que mudou?\ngit add src/App.jsx        # coloca no staging\ngit commit -m "feat: adiciona contador de XP"\ngit push                   # envia para o remoto`,
      },
      {
        type: 'list',
        items: [
          'Working tree: seus arquivos como estão agora',
          'Staging (git add): o que vai entrar no próximo commit',
          'Commit: um ponto salvo na história, com autor, data e mensagem',
        ],
      },
      { type: 'h3', text: 'Branches' },
      {
        type: 'code',
        lang: 'bash',
        text: `git switch -c feat/grimorios   # cria e entra na branch\n# ...trabalha, faz commits...\ngit push -u origin feat/grimorios\n# abre um Pull Request para revisar e juntar na main`,
      },
      {
        type: 'compare',
        bad: `git commit -m "ajustes"`,
        good: `git commit -m "fix: impede XP duplicado ao reenviar quest"`,
        note: 'Daqui a três meses, a mensagem é tudo o que você vai ter para entender o porquê.',
      },
      {
        type: 'pitfall',
        text: 'Commitar .env ou chaves de API. Coloque esses arquivos no .gitignore antes do primeiro commit; apagar depois não tira do histórico.',
      },
      {
        type: 'tip',
        text: 'git diff mostra o que mudou antes de você adicionar. git log --oneline mostra a história em uma linha por commit.',
      },
    ],
    checklist: ['Uma branch por mudança', 'Mensagens no imperativo', '.env no .gitignore'],
    references: [
      { label: 'Pro Git (livro grátis)', url: 'https://git-scm.com/book/pt-br/v2' },
      { label: 'Conventional Commits', url: 'https://www.conventionalcommits.org/pt-br/v1.0.0/' },
    ],
  },
  {
    id: 'devtools',
    title: 'Lupa do DevTools & Depuração',
    category: 'Ferramentas',
    skillId: null,
    level: 'Iniciante',
    description: 'Console, Elements, Network e breakpoints: encontre o bug em vez de adivinhar.',
    mentorSummary:
      'Antes de mudar código, olhe: o Console mostra o erro, o Network mostra a resposta, o Elements mostra o CSS que venceu.',
    objectives: [
      'Ler uma mensagem de erro e o stack trace',
      'Inspecionar HTML, CSS e requisições',
      'Pausar o código com breakpoints',
    ],
    questIds: [],
    content: [
      { type: 'h3', text: 'Abrir e se orientar' },
      {
        type: 'p',
        text: 'F12 (ou Ctrl+Shift+I / Cmd+Opt+I) abre o DevTools. As abas que resolvem 90% dos problemas: Console, Elements, Network e Sources.',
      },
      {
        type: 'list',
        items: [
          'Console: erros em vermelho, com arquivo e linha clicáveis',
          'Elements: o HTML ao vivo e, ao lado, as regras CSS aplicadas',
          'Network: cada requisição com status, tempo e resposta',
          'Sources: o código, com breakpoints para pausar a execução',
        ],
      },
      { type: 'h3', text: 'Ler um erro' },
      {
        type: 'code',
        lang: 'text',
        text: `TypeError: Cannot read properties of undefined (reading 'title')\n    at QuestCard (QuestCard.jsx:12:24)`,
      },
      {
        type: 'p',
        text: 'Tradução: na linha 12 do QuestCard, você tentou ler .title de algo que é undefined. Pergunte de onde esse valor vem e por que ainda não chegou.',
      },
      { type: 'h3', text: 'Além do console.log' },
      {
        type: 'code',
        lang: 'js',
        text: `console.table(quests);           // arrays de objetos em tabela\nconsole.log({ xp, level });      // nomes junto com os valores\ndebugger;                        // pausa aqui com o DevTools aberto`,
      },
      {
        type: 'pitfall',
        text: 'Mudar várias coisas ao mesmo tempo para "ver se resolve". Mude uma, observe, e só então a próxima.',
      },
      {
        type: 'tip',
        text: 'No Network, filtre por Fetch/XHR e clique na requisição: a aba Response mostra exatamente o que a API devolveu.',
      },
    ],
    checklist: ['Ler o erro inteiro', 'Conferir a resposta no Network', 'Uma mudança por vez'],
    references: [
      { label: 'Chrome DevTools', url: 'https://developer.chrome.com/docs/devtools' },
      { label: 'MDN · Console', url: 'https://developer.mozilla.org/pt-BR/docs/Web/API/console' },
    ],
  },
];

/** Words in every block of a guide (used for an honest read-time estimate). */
export function countGuideWords(guide) {
  const parts = [guide.description, guide.mentorSummary, ...(guide.objectives ?? []), ...(guide.checklist ?? [])];
  for (const block of guide.content) {
    if (block.text) parts.push(block.text);
    if (block.items) parts.push(...block.items);
    if (block.bad) parts.push(block.bad, block.good, block.note ?? '');
  }
  return parts.join(' ').split(/\s+/).filter(Boolean).length;
}

/** ~120 words per minute: learners read code slowly. At least 2 min. */
export function estimateReadMinutes(guide) {
  return Math.max(2, Math.round(countGuideWords(guide) / 120));
}

export const GUIDE_LEVELS = Object.freeze(['Iniciante', 'Intermediário', 'Avançado']);

export const INITIAL_GUIDES = RAW_GUIDES.map((guide) => ({
  ...guide,
  readTime: `${estimateReadMinutes(guide)} min`,
}));

/**
 * DevQuest · Pixel Companion sprite sheet ("Proposal B").
 *
 * Hand-authored 32×32 pixel art for the three evolution stages of the
 * companion fox. Every sprite is an array of equal-length strings — one
 * character per pixel — decoded through PIXEL_LEGEND into palette keys.
 * Colours never live here: each palette key becomes a `px-<key>` class that
 * companion-pixel.css maps onto the `--pixel-s{n}-*` semantic tokens.
 *
 * Layers (back → front): tail (2 wag frames) · body (head, ears, crest/hat,
 * torso, paws; eye sockets are left as fur) · eyes (expression overlay).
 */

export const PIXEL_GRID = 32;

export const PIXEL_LEGEND = Object.freeze({
  o: 'outline',
  s: 'shade',
  b: 'body',
  l: 'light',
  w: 'belly',
  e: 'eye',
  h: 'shine',
  p: 'blush',
  a: 'accent',
  A: 'accent2',
  t: 'hat-light',
  y: 'spark',
  d: 'drop',
});

export const PIXEL_EXPRESSIONS = Object.freeze(['open', 'blink', 'happy', 'focused', 'worried']);
export const PIXEL_STATES = Object.freeze(['idle', 'waiting', 'working', 'done', 'blocked', 'sleep', 'eat', 'walk']);
export const PIXEL_MOODS = Object.freeze(['happy', 'neutral']);
export const PIXEL_ACCESSORIES = Object.freeze(['none', 'spark', 'scarf', 'glasses', 'crown', 'stars']);

/* ------------------------------------------------------------------ */
/* Stage art                                                           */
/* ------------------------------------------------------------------ */

const KITSUBY_BODY = [
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '.......o............o...........',
  '......oao..........oao..........',
  '......oaao........oaao..........',
  '.....olpbo........obpso.........',
  '.....olppbo...o..obppso.........',
  '.....olppbbo.oloobbppso.........',
  '.....olpwbboolloobbwpso.........',
  '.....ollbllllllbbbbbbso.........',
  '.....olllllllbbbbbbbsso.........',
  '....ollllllbbbbbbbbbbsso........',
  '....olllbbbbbbbbbbbbbsso........',
  '....ollbbbbbbbbbbbbbbsso........',
  '....olbbbbbbbbbbbbbbbsso........',
  '....olbbbbbbbbbbbbbbbsso........',
  '....owwbbbbbbbbbbbbbbwwo........',
  '...owwwppwwwbbbbwwwppwwwo.......',
  '....owwwwwwwwoowwwwwwwlo........',
  '.....owwwwwwwwwwwwwwwlo.........',
  '......oooooooooooooooo..........',
  '........ossllllllsso............',
  '.......olbbwwwwwwbbso...........',
  '.......olbbwwwwwwbsso...........',
  '.......olbbbwwwwbbsso...........',
  '.......olbbbboobbbsso...........',
  '.......olwwwwoowwwwlo...........',
  '........oooooooooooo............',
  '................................',
];

const KITSUBY_TAIL_A = [
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '........................oo......',
  '.......................oAao.....',
  '.......................oaAao....',
  '.......................oaaaao...',
  '.......................ollabso..',
  '.......................ollbbso..',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................oslbbbso..',
  '......................osbbbbsso.',
  '.....................ossbbbsso..',
  '.....................ssbbssso...',
  '.....................sssssso....',
  '.....................ssssso.....',
  '....................oooooo......',
  '................................',
];

const KITSUBY_TAIL_B = [
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '.........................oo.....',
  '........................oAao....',
  '........................oaAao...',
  '........................oaaaao..',
  '........................ollabso.',
  '........................ollbbso.',
  '......................ollbbbbsso',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................oslbbbso..',
  '......................osbbbbsso.',
  '.....................ossbbbsso..',
  '.....................ssbbssso...',
  '.....................sssssso....',
  '.....................ssssso.....',
  '....................oooooo......',
  '................................',
];

const KITSUBY_EYES = {
  x: 9,
  y: 14,
  frames: {
    open: ['..........', '..........', 'eee....eee', 'hee....hee', 'eee....eee', 'eee....eee'],
    blink: ['..........', '..........', '..........', '..........', 'eee....eee', '..........'],
    happy: ['..........', '..........', '..........', '.e......e.', 'e.e....e.e', '..........'],
    focused: ['..........', '..........', '..........', 'eee....eee', 'eee....eee', 'hee....hee'],
    worried: ['..o....o..', '.o......o.', 'eee....eee', 'hhe....hhe', 'eee....eee', 'eee....eee'],
  },
};

const PYROKIT_BODY = [
  '................................',
  '.....o................o.........',
  '....oso..............oso........',
  '....osso......A.....osso........',
  '....olpbo....AA....obpso........',
  '....olppbo...AaA..obppso........',
  '...ollppbo..AahaA.obppsso.......',
  '...olpppbbo.AahaAobbpppso.......',
  '...olppwbbboAaaAobbbwppso.......',
  '...olpwwlbboAAAAobbbwwpso.......',
  '...ollllllllllllbbbbbbbso.......',
  '...olllllllllbbbbbbbbbsso.......',
  '...ollllllbbbbbbbbbbbbsso.......',
  '...olllbbbbbbbbbbbbbbbsso.......',
  '...ollbbbbbbbbbbbbbbbbsso.......',
  '...olbbbbbbbbbbbbbbbbbsso.......',
  '...olbbbbbbbbbbbbbbbbbsso.......',
  '...owbbbbbbbbbbbbbbbbbbwo.......',
  '...owwppwwwwbbbbwwwwppwwo.......',
  '..owwwwwwwwwwbbwwwwwwwwwlo......',
  '...owwwwwwwwwoowwwwwwwwlo.......',
  '....owwwwwwwwwwwwwwwwwlo........',
  '.....owwwwwwwwwwwwwwllo.........',
  '......oooooowwwwoooooo..........',
  '.......osslwwwwwwlsso...........',
  '......olbbwwwwwwwwbsso..........',
  '......olbbbwwwwwwbbsso..........',
  '......olbbbbwwwwbbbsso..........',
  '......olbbbbboobbbbsso..........',
  '......ossssssoosssssso..........',
  '.......oooooooooooooo...........',
  '................................',
];

const PYROKIT_TAIL_A = [
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '...........................A....',
  '..........................AA....',
  '.........................AaA.A..',
  '........................AaahaA..',
  '........................AahhaA..',
  '........................AaaaaA..',
  '.......................oAAAAAAo.',
  '.......................ollbbbso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................oslbbbso..',
  '......................osbbbbsso.',
  '.....................ossbbbsso..',
  '.....................ssbbbsso...',
  '.....................ssbbsso....',
  '.....................ssssso.....',
  '....................sssso.......',
  '....................ooooo.......',
  '................................',
];

const PYROKIT_TAIL_B = [
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '............................A...',
  '...........................AA...',
  '..........................AaA.A.',
  '.........................AaahaA.',
  '.........................AahhaA.',
  '.........................AaaaaA.',
  '........................oAAAAAAo',
  '.......................ollbbbso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................ollbbbsso.',
  '......................oslbbbso..',
  '......................osbbbbsso.',
  '.....................ossbbbsso..',
  '.....................ssbbbsso...',
  '.....................ssbbsso....',
  '.....................ssssso.....',
  '....................sssso.......',
  '....................ooooo.......',
  '................................',
];

const PYROKIT_EYES = {
  x: 8,
  y: 12,
  frames: {
    open: ['............', '............', '.ee......ee.', 'hee......hee', 'eee......eee', 'eee......eee'],
    blink: ['............', '............', '............', '............', 'eee......eee', '............'],
    happy: ['............', '............', '............', '.e........e.', 'e.e......e.e', '............'],
    focused: ['............', '............', '............', 'eee......eee', 'eee......eee', 'hee......hee'],
    worried: ['..o......o..', '.o........o.', 'eee......eee', 'hhe......hhe', 'eee......eee', 'eee......eee'],
  },
};

const ARCHKITS_BODY = [
  '................oo..............',
  '...............otao.............',
  '..............ottao.............',
  '..o..........ottaao......o......',
  '.oAo........ottaAao.....oAo.....',
  '.olpo......ottaAhAao...opso.....',
  '.olppo....ottaaaAaao..oppso.....',
  '.olppbo..ottaaaaaaao.obppso.....',
  '.olpwbbooppppppppppoobbwpso.....',
  '.olottttttaaaaaaaaaaaaaaoso.....',
  '.ootaaaaaaaaaaaaaaaaaaaasoo.....',
  '..oooooooooooooooooooooooo......',
  '...osssssssssssssssssssso.......',
  '...olllbbbbbbbbbbbbbbbsso.......',
  '...ollbbbbbbbbbbbbbbbbsso.......',
  '...olbbbbbbbbbbbbbbbbbsso.......',
  '...olbbbbbbbbbbbbbbbbbsso.......',
  '...owbbbbbbbbbbbbbbbbbbwo.......',
  '...owwppwwwwbbbbwwwwppwwo.......',
  '..owwwwwwwwwwbbwwwwwwwwwlo......',
  '...owwwwwwwwwoowwwwwwwwlo.......',
  '....owwwwwwwwwwwwwwwwwlo........',
  '.....owwwwwwwwwwwwwwllo.........',
  '.....ottaaaawwwwaaaaaso.........',
  '....ottaaaaaowwoaaaaasso........',
  '....otaaaaaaoAAoaaaaasoo........',
  '....oooolbwwwwwwwwbsoooo........',
  '......olbbbwwwwwwbbbso..........',
  '......olbbbbboobbbbbso..........',
  '......ossssssoosssssso..........',
  '.......oooooooooooooo...........',
  '................................',
];

const ARCHKITS_TAIL_A = [
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '...........................o....',
  '..........................oAo...',
  '.........................owhwo..',
  '.........................owwwwo.',
  '........................owwwwwo.',
  '........................olwwwso.',
  '........................ollllso.',
  '.......................ollbbbso.',
  '.......................ollbbbso.',
  '.......................ollbbbso.',
  '.......................ollbbbo..',
  '.......................ollbbbso.',
  '.......................ollbbbso.',
  '.......................ollbbbso.',
  '.......................olbbbbso.',
  '......................olbbbsso..',
  '......................osbbsso...',
  '......................osbsso....',
  '......................osso......',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
];

const ARCHKITS_TAIL_B = [
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '..........................o.....',
  '.........................oAo....',
  '........................owhwo...',
  '........................owwwwo..',
  '.......................owwwwwo..',
  '.......................olwwwso..',
  '........................ollllso.',
  '.......................ollbbbso.',
  '.......................ollbbbso.',
  '.......................ollbbbso.',
  '.......................ollbbbo..',
  '.......................ollbbbso.',
  '.......................ollbbbso.',
  '.......................ollbbbso.',
  '.......................olbbbbso.',
  '......................olbbbsso..',
  '......................osbbsso...',
  '......................osbsso....',
  '......................osso......',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
  '................................',
];

const ARCHKITS_EYES = {
  x: 7,
  y: 12,
  frames: {
    open: ['..............', '..............', '.eee......eee.', '.hee......hee.', '.eee......eee.', '.eeh......eeh.'],
    blink: ['..............', '..............', '..............', '..............', '.eee......eee.', '..............'],
    happy: ['..............', '..............', '..............', '..e........e..', '.e.e......e.e.', '..............'],
    focused: ['..............', '..............', '..............', '.eee......eee.', '.eee......eee.', '.hee......hee.'],
    worried: ['...o......o...', '..o........o..', '.eee......eee.', '.hhe......hhe.', '.eee......eee.', '.eee......eee.'],
  },
};

/* ------------------------------------------------------------------ */
/* Props & effects (shared by every stage, placed through anchors)     */
/* ------------------------------------------------------------------ */

export const PIXEL_PROPS = Object.freeze({
  /* "</>" rune spark with a 1px drop shadow so it reads on vellum and obsidian. */
  spark: ['.y...y.y.', 'yo..yo.oy', 'oy.yo..yo', '.o.o...o.'],
  crown: ['.o.o.o.', 'oyoyoyo', 'ohypyyo', 'oyyyyyo', '.ooooo.'],
  scarf: [
    'oooooooooooooooo',
    'ohpAppppppppAppo',
    '.oooppppppppooo.',
    '....oppApppo....',
    '.....oppppo.....',
    '......oppo......',
    '.......oo.......',
  ],
  star: ['.y.', 'yhy', '.y.'],
  sparkle: ['..o..', '.oyo.', 'oyhyo', '.oyo.', '..o..'],
  sweat: ['..o..', '.odo.', 'ohddo', 'odddo', '.ooo.'],
});

export const PIXEL_STAGES = Object.freeze({
  1: {
    stage: 1,
    id: 'kitsuby',
    name: 'Kitsuby',
    title: 'Filhote Rúnico',
    body: KITSUBY_BODY,
    tail: [KITSUBY_TAIL_A, KITSUBY_TAIL_B],
    eyes: KITSUBY_EYES,
    ears: [
      { x0: 4, x1: 11, yBase: 9 },
      { x0: 16, x1: 23, yBase: 9 },
    ],
    shadow: { x0: 6, x1: 27 },
    anchors: {
      spark: [9, 1],
      crown: [10, 6],
      scarf: [6, 23],
      sweat: [24, 7],
      sparkles: [
        [0, 8],
        [25, 4],
        [0, 24],
      ],
      stars: [
        [1, 3],
        [27, 9],
        [29, 27],
      ],
      halo: { cx: 13.5, cy: 23, rx: 13, ry: 3 },
    },
  },
  2: {
    stage: 2,
    id: 'pyrokit',
    name: 'Pyrokit',
    title: 'Raposa da Forja',
    body: PYROKIT_BODY,
    tail: [PYROKIT_TAIL_A, PYROKIT_TAIL_B],
    eyes: PYROKIT_EYES,
    ears: [
      { x0: 2, x1: 10, yBase: 7 },
      { x0: 17, x1: 25, yBase: 7 },
    ],
    shadow: { x0: 5, x1: 26 },
    anchors: {
      spark: [23, 0],
      crown: [10, 4],
      scarf: [6, 23],
      sweat: [25, 3],
      sparkles: [
        [0, 4],
        [25, 0],
        [0, 22],
      ],
      stars: [
        [0, 1],
        [27, 4],
        [28, 27],
      ],
      halo: { cx: 14, cy: 23, rx: 14, ry: 3 },
    },
  },
  3: {
    stage: 3,
    id: 'archkits',
    name: 'Archkits',
    title: 'Grão-Mestre Arcano',
    body: ARCHKITS_BODY,
    tail: [ARCHKITS_TAIL_A, ARCHKITS_TAIL_B],
    eyes: ARCHKITS_EYES,
    ears: [
      { x0: 0, x1: 7, yBase: 7 },
      { x0: 20, x1: 27, yBase: 7 },
    ],
    shadow: { x0: 5, x1: 22 },
    anchors: {
      spark: [4, 0],
      crown: [13, 0],
      scarf: [6, 23],
      sweat: [27, 0],
      sparkles: [
        [0, 0],
        [20, 0],
        [27, 26],
      ],
      stars: [
        [0, 0],
        [21, 1],
        [28, 27],
      ],
      halo: { cx: 13.5, cy: 24, rx: 13, ry: 3 },
    },
  },
});

/* ------------------------------------------------------------------ */
/* Pure helpers                                                        */
/* ------------------------------------------------------------------ */

export function getPixelStage(stage) {
  const n = Math.min(3, Math.max(1, Math.round(Number(stage) || 1)));
  return PIXEL_STAGES[n];
}

/**
 * Converts a sprite grid into one SVG path `d` per palette key, merging
 * horizontal runs (`M x y hN v1 h-N z`) so each colour is a single element.
 */
export function spriteToPaths(rows, offsetX = 0, offsetY = 0) {
  const paths = {};
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const key = PIXEL_LEGEND[row[x]];
      if (!key) {
        x += 1;
        continue;
      }
      let run = 1;
      while (row[x + run] === row[x]) run += 1;
      paths[key] = `${paths[key] ?? ''}M${x + offsetX} ${y + offsetY}h${run}v1h-${run}z`;
      x += run;
    }
  });
  return paths;
}

/**
 * Ear-perk frame: inside each ear zone every row above `yBase` takes the row
 * beneath it, so the ear tips rise one pixel and the base row stretches.
 */
export function deriveEarPerk(rows, zones) {
  const out = rows.map((row) => row.split(''));
  zones.forEach(({ x0, x1, yBase }) => {
    for (let y = 0; y < yBase; y += 1) {
      for (let x = x0; x <= x1; x += 1) {
        out[y][x] = rows[y + 1][x];
      }
    }
  });
  return out.map((row) => row.join(''));
}

/** Integer pixel positions of an orbiting ring; `front` marks the half nearest the viewer. */
export function haloPoints({ cx, cy, rx, ry }, count = 16) {
  const seen = new Set();
  const points = [];
  for (let i = 0; i < count; i += 1) {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.round(cx + Math.cos(angle) * rx - 0.5);
    const y = Math.round(cy + Math.sin(angle) * ry - 0.5);
    const id = `${x}:${y}`;
    if (seen.has(id)) continue;
    seen.add(id);
    points.push({ x, y, front: Math.sin(angle) > 0, phase: i % 4 });
  }
  return points;
}

/** Maps companion state + mood onto an eye frame. State wins over mood. */
export function resolveExpression({ state = 'idle', mood = 'neutral', blinking = false } = {}) {
  if (state === 'sleep') return 'blink';
  if (state === 'eat') return 'happy';
  if (state === 'blocked') return 'worried';
  if (state === 'done') return 'happy';
  if (state === 'working') return 'focused';
  if (mood === 'happy') return 'happy';
  return blinking ? 'blink' : 'open';
}

function pointsToPath(points, dy = 0) {
  return points.reduce((acc, { x, y }) => `${acc}M${x} ${y + dy}h1v1h-1z`, '');
}

function shadowPath({ x0, x1 }) {
  const wide = x1 - x0 + 1;
  return `M${x0} 30h${wide}v1h-${wide}zM${x0 + 1} 31h${wide - 2}v1h-${wide - 2}z`;
}

const artCache = new Map();

/** Pre-computed SVG paths for every layer of a stage (memoised; sprite data is static). */
export function getStageArt(stage) {
  const data = getPixelStage(stage);
  const cached = artCache.get(data.stage);
  if (cached) return cached;

  const { anchors } = data;
  const halo = haloPoints(anchors.halo);
  /* Each orbiting mote is a spark pixel with a 1px outline drop so it reads on any surface. */
  const haloPhases = (front) =>
    [0, 1, 2, 3].map((phase) => {
      const motes = halo.filter((p) => p.front === front && p.phase === phase);
      return { spark: pointsToPath(motes), outline: pointsToPath(motes, 1) };
    });

  const art = {
    tail: data.tail.map((frame) => spriteToPaths(frame)),
    body: spriteToPaths(data.body),
    perk: spriteToPaths(deriveEarPerk(data.body, data.ears)),
    eyes: Object.fromEntries(
      PIXEL_EXPRESSIONS.map((expr) => [expr, spriteToPaths(data.eyes.frames[expr], data.eyes.x, data.eyes.y)])
    ),
    shadow: shadowPath(data.shadow),
    spark: spriteToPaths(PIXEL_PROPS.spark, ...anchors.spark),
    crown: spriteToPaths(PIXEL_PROPS.crown, ...anchors.crown),
    scarf: spriteToPaths(PIXEL_PROPS.scarf, ...anchors.scarf),
    sweat: spriteToPaths(PIXEL_PROPS.sweat, ...anchors.sweat),
    sparkles: anchors.sparkles.map(([x, y]) => spriteToPaths(PIXEL_PROPS.sparkle, x, y)),
    stars: anchors.stars.map(([x, y]) => spriteToPaths(PIXEL_PROPS.star, x, y)),
    haloBack: haloPhases(false),
    haloFront: haloPhases(true),
  };
  artCache.set(data.stage, art);
  return art;
}

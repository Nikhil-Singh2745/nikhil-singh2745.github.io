// xmur3 + sfc32 - small, no deps, seedable from a string.
// Same seed produces the same stream forever - so a slug always renders
// the same sticky-note rotation, paper, affix, and jitter.

function xmur3(str: string): () => number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
  };
}

function sfc32(a: number, b: number, c: number, d: number): () => number {
  return function () {
    a |= 0;
    b |= 0;
    c |= 0;
    d |= 0;
    const t = (((a + b) | 0) + d) | 0;
    d = (d + 1) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
  };
}

export function rngFromSeed(seed: string): () => number {
  const s = xmur3(seed);
  return sfc32(s(), s(), s(), s());
}

export function pick<T>(rng: () => number, items: readonly T[]): T {
  return items[Math.floor(rng() * items.length)]!;
}

export function range(rng: () => number, min: number, max: number): number {
  return min + (max - min) * rng();
}

export type StickyShape = {
  rotation: number;
  paper: "plain" | "lined" | "graph";
  affix: "tape-top" | "tape-corner" | "pin";
  jitterX: number;
  jitterY: number;
  width: number;
  tilt: "left" | "right";
};

export function stickyShapeForSlug(slug: string): StickyShape {
  const rng = rngFromSeed(slug);
  const papers = ["plain", "lined", "graph"] as const;
  const affixes = ["tape-top", "tape-corner", "pin"] as const;
  const widths = [260, 280, 300, 320];
  return {
    rotation: range(rng, -6.5, 6.5),
    paper: pick(rng, papers),
    affix: pick(rng, affixes),
    jitterX: range(rng, -14, 14),
    jitterY: range(rng, -10, 10),
    width: pick(rng, widths),
    tilt: rng() > 0.5 ? "right" : "left",
  };
}

# coredump

low-level notes. systems, c++, infra, performance. anonymous on purpose.

built with [Astro](https://astro.build), shipped as static HTML/CSS/JS,
hosted on GitHub Pages.

## run

```
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/
```

## design

- palette: editorial off-shades — paper `#FAF9F6`, ink `#0A0A0A`,
  hairline `#C8C5BE`, muted `#6B6862`. code blocks are the *only*
  inverted area.
- type: Fraunces (display + body), Inter (UI), JetBrains Mono (code),
  Caveat (sticky notes).
- no client framework. tiny vanilla TS islands for: reading progress,
  UTC clock, inspect mode (`g`), shortcut sheet (`?`), konami →
  phosphor mode.

## shortcuts

- `g` — baseline grid overlay
- `?` — shortcut sheet
- `esc` — close sheet
- `↑↑↓↓←→←→ba` — phosphor mode (CRT amber on black, persists)

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

## write a dump

1. add an `.mdx` file under `src/content/dumps/NNN-slug.mdx`
2. frontmatter:

   ```yaml
   ---
   title: tail latency, the actual definition
   subtitle: averages lie. p99 lies more quietly.
   date: 2026-05-31
   tags: [perf, methodology]
   summary: what people mean by "p99" is not what the math means by "p99".
   ---
   ```

3. compose with MDX components: `<DropCap>`, `<PullQuote>`,
   `<Marginalia>`, `<Aside>`, `<Ornament>`, `<Diagram>`, `<Footnote>` +
   `<Footnotes>`, `<Spec>`, `<CodeBlock>`.
4. **before publishing**: read `PERSONA.md`. the anonymity rules are
   non-negotiable. then `npm run build` and check `dist/`.

## structure

```
src/
  content/dumps/      # MDX entries
  pages/              # routes
  components/
    layout/           # masthead, footer, hairline
    home/             # cover, manifest, ribbon, clock
    notes/            # corkboard, sticky note
    entry/            # entry header/footer, prose components
    ui/               # inspector, konami, hatches, dates
  layouts/            # PageLayout, EntryLayout
  styles/             # global.css, prose.css
  utils/              # deterministic rng, roman numerals, reading time
  lib/                # shiki B&W theme
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

# Design Reference Library

Personal **taste library** — distillation of:

1. *“Turn Claude Into A Design GENIUS In 3 Simple Steps”* (Chase AI)
2. *“The one thing vibe coding CAN'T fix about your website”* (Kole Jain)

Every entry = one aesthetic family with a **live CSS/SVG preview**, palette, type pairing,
composition notes and **precision prompts** that reproduce the style exactly.
Referenced automatically by the global `design-genius` skill.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build to dist/
```

## Add a reference (the whole point)

Drop ONE file into `src/content/references/<slug>.md`. That's it — tabs, cards and pages update automatically.

```yaml
---
name: My Aesthetic            # display name
family: my-aesthetic          # category/tab (lowercase)
tags: [minimalist, brutalist] # free-form chips
palette: ["#101214", "#E8E6E1"]  # hex swatches (click to copy)
fonts:
  heading: Cormorant Garamond # Google Font name (loaded automatically)
  body: Instrument Sans
texture: noise overlay 7%     # short description
preview: my-aesthetic         # slug of preview component (below)
notes: |                      # bullet list of composition/feel rules
  - rule one
  - rule two
prompts:                      # precision prompts, shown with COPY buttons
  - label: Full landing page
    text: |
      Build ... exact colors, fonts, layout rules ...
source: https://...           # optional reference URL
---

Optional long-form markdown body shown on the detail page.
```

### Live previews

Each `preview` slug maps to a component in `src/components/previews/<slug>.astro`.
Build them from pure CSS/SVG (no screenshots, no external images) sized with `cqw`
container units — see `neon-pop-studio.astro` as the template (it pins its own
`aspect-ratio`, so it renders identically in cards, detail pages and full-page view).
Missing preview components render a placeholder telling you the expected path.

### Full-page preview (automatic — do not wire manually)

Every reference with a `preview:` frontmatter automatically gets a full-page route:

```
/preview/<preview-slug>/        e.g. /preview/neon-pop-studio/
```

The route (`src/pages/preview/[slug].astro`) renders the reference **as one complete
landing page** — not just the hero card. Resolution order:

1. `src/components/fullpages/<slug>.astro` — a full 1:1 page recreation (ALL sections:
   nav → hero → … → footer) with real photo assets from `public/assets/<slug>/`.
   **Every reference should get one of these** — the small card scene is only a thumbnail.
2. Fallback: `src/components/previews/<slug>.astro` (the CSS/SVG card scene) scaled up.

The page loads the reference's Google Fonts and floats a small HUD (name · family ·
Detail → · Library) at the bottom. Entry points are already wired everywhere:

- **Library card** → `Preview ↗` pill button (opens in a new tab)
- **Detail page** → `Open full page ↗` button next to the *Live preview* heading

Adding a new reference requires **zero extra wiring** for this: set `preview:` in the
frontmatter, drop a `fullpages/<slug>.astro` component, and the route, card button and
detail button all appear.

### Assets

Photos live in `public/assets/<slug>/<name>.jpg` (downloaded once, committed — never
hotlink). Source from Unsplash direct CDN URLs
(`https://images.unsplash.com/photo-<id>?auto=format&fit=crop&w=1600&q=80`), pick shots
that genuinely match the reference (subject, mood, grade), and always give images a CSS
fallback background so a missing file never breaks the layout.

## Adding a reference — the standard workflow

1. **Source the design** — a reference image, URL, or screenshot. If it's an
   image-to-code task, analyze it deeply FIRST (palette, type scale, spacing, button
   logic, section rhythm) before writing any code.
2. **Build the card scene** — `src/components/previews/<slug>.astro`:
   pure CSS/SVG only (photos become SVG silhouettes/gradients), all sizing in `cqw`
   container units, `aria-hidden="true"`, scoped `<style>`. It must read correctly
   at card size (~320px).
3. **Build the full page** — `src/components/fullpages/<slug>.astro`: a complete 1:1
   recreation of the reference page (every section, top to bottom), normal responsive
   CSS (px/clamp + media queries), real photos from `public/assets/<slug>/`. This is
   what the full-page preview shows — a thumbnail scene alone is not enough.
4. **Write the markdown entry** — `src/content/references/<slug>.md` with exact hex
   palette, Google Font names, texture line, `preview:` slug, dense composition
   `notes` (one rule per bullet), and at least 2–3 **precision prompts**
   (full page / hero image direction / component polish) with hard guardrails.
5. **Verify** — check the card on `/`, the detail page on `/ref/<slug>/`, and the
   full-page route on `/preview/<slug>/`.

## Structure

```
src/
├── content.config.ts            # collection schema
├── content/references/*.md      # ← your library entries live here
├── layouts/Base.astro           # dark shell, copy-to-clipboard plumbing
├── pages/
│   ├── index.astro              # tabs by family + card grid
│   ├── ref/[slug].astro         # detail page (preview, palette, prompts, notes)
│   └── preview/[slug].astro     # FULL-PAGE preview route (auto for every reference)
└── components/
    ├── ReferenceCard.astro      # card + Preview ↗ button
    ├── LivePreview.astro        # maps slug → previews/*
    ├── PaletteSwatches.astro    # click-to-copy hex
    ├── PromptBox.astro          # prompt + copy button
    ├── previews/*.astro         # pure CSS/SVG card scenes (thumbnail)
    └── fullpages/*.astro        # complete page recreations (full-page preview)
public/assets/<slug>/*.jpg       # downloaded photo assets per reference
```

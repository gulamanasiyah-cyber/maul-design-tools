---
name: Oatside Playful Shop
family: playful
tags: [oat-milk, stickerbomb, neo-retro, cream-grid, chunky-type, e-commerce, faq, gen-z]
palette: ["#FFFBF2", "#111111", "#2F80ED", "#FFD60A", "#FF5A5A", "#B8E62E", "#CDEFFF"]
fonts:
  heading: Anton
  body: Space Grotesk
texture: Cream grid paper, 1.5px black outline cards, rotated sticker badges, sparkles + smiley pins, blob-cropped photo strip
preview: oatside-playful
notes: |
  - Cream page #FFFBF2 with 28px grid — SINGLE full-width column, every section stacks top to bottom (no left/right panes), max-width 1120px
  - Every card: white/cream fill, 1.5px #111 border, 16–20px radius; pill buttons with black border, yellow #FFD60A for primary actions
  - Headlines: Anton uppercase, tight leading; blue sticker badges rotated -4deg label each section
  - Hero: centered 72px headline + overlapping rotated photo collage (4 photos, middle tallest), speech-bubble sticker top-left, sparkle + smiley pins
  - Shop: vertical stack of product cards (max-width 420px centered) — photo top, name, price below, pill add-to-cart; active card blue fill + yellow button, no arrows
  - Why: centered card with 3 tilted floating carton photos on top + green "Keep It Cool!" bubble, copy below
  - Good!: full-width card — wide product photo on top, title + 3 blue-check bullets + yellow "Shop now" below
  - Recipes: 3 solid-color cards (yellow/red/green) stacked vertically with drink photo + white "from" chip; centered "Explore more" ghost button
  - FAQ: native <details> rows (max-width 640px centered) with blue + circle; newsletter is centered headline + pill email + yellow button; footer is centered stacked card
  - Photos hotlinked from Unsplash with cream fallback; all images lazy except hero
prompts:
  - label: Full landing page
    text: |
      Build a playful Gen-Z CPG landing page for [BRAND], a [PRODUCT — e.g. oat milk] brand. Intent: get visitors to [CTA GOAL — add to cart / shop the drop].

      Aesthetic: Oatside Playful. Cream page #FFFBF2 with subtle 28px grid. SINGLE full-width column — every section stacks top to bottom, max-width 1120px, no side-by-side panes. Every section is a bordered card — 1.5px solid #111, 16–20px radius, hard flat look (no blur shadows). Accents: sticker blue #2F80ED (badges, active states), action yellow #FFD60A (all primary buttons), recipe cards in yellow #FFD60A / red #FF5A5A / green #B8E62E, info bubble #CDEFFF. Stickers: rotated pill badges, speech bubbles, ✦ sparkles, smiley pins.

      Typography: Anton uppercase for all headlines (hero ~72px, sections 30–52px, tight leading), Space Grotesk 11–13px for body/copy. Small grey sub-copy under section titles.

      Layout — in exact order, all full-width stacked:
      1. Header: rounded bordered bar — bold wordmark left, 5 nav links center, 3 circular icon buttons right (hide nav under 760px, show burger).
      2. Hero: centered headline + sub, then overlapping rotated photo collage (4 rounded photos, middle one tallest), speech-bubble sticker, sparkle + smiley pins.
      3. Shop: blue "Top Picks" badge, "Sip the Difference!" title, vertical stack of product cards — photo top, name, price below, pill add-to-cart; active card blue fill + yellow button.
      4. Why: centered card — 3 tilted floating product photos on top + green bubble sticker, badge + big title + paragraph below.
      5. Good!: full-width card — wide product photo on top, title + 3 blue-check bullets + yellow "Shop now" below.
      6. Recipes: badge + title, 3 solid-color cards stacked vertically, each with title, drink photo, white "from" chip; centered "Explore more" ghost button.
      7. FAQ: badge + title, native accordion rows centered (max-width 640px), white, bordered, blue + circle.
      8. Newsletter: centered bold headline + pill email input + yellow button + sparkle.
      9. Blob photo strip: 5 images in wavy blob border-radius, centered wrap.
      10. Footer: rounded bordered card, everything centered stacked — wordmark + tagline + socials, then "Get in Touch ↗"; tiny P.S. line below.

      Responsive: single column at every width; flavors stack on all screens; full-width email button on phones.

      Guardrails: never place two content cards side by side, never split the page into left/right columns, never drop the black outline or grid paper, never serif headlines, never more than the 4 accent colors, keep copy short and cheeky, keep buttons pill-shaped with black borders.
  - label: Product & lifestyle photo direction
    text: |
      Generate image assets for an Oatside Playful page about [SUBJECT — e.g. "oat milk brand / flavored drinks"].

      Direction: bright daylight flash photography — happy diverse Gen-Z people drinking oat milk, breakfast tables, milk pouring into glass. Hero collage: 4 vertical lifestyle shots with space to overlap (kid laughing, girl sipping, friends at table, milk pour), 4:5 crop. Products: single drink/carton centered, straight-on, cream seamless background, crisp shadow. Recipes: overhead colorful drinks (chocolate, strawberry pink, matcha green). Blob strip: candid smiling portraits. Render photographic with light grain. Avoid: dark moody grades, studio-perfect minimalism, muted earth tones, AI-glossy skin.
---

## Why this family exists

Distilled from the @uiuxsharon OATSIDE reference. It proves that **a cream grid canvas plus thick black outlines plus sticker badges can carry a whole CPG storefront**: one loud Anton headline, one photo collage, then a repeatable rhythm of bordered cards down a single full-width column. The yellow pill button is the only action that matters — everything else is photos and stickers.

## When to reach for it

- Drink/snack CPG brands, flavor drops, DTC shops with 3–6 SKUs
- Recipe/ritual sections ("try it your way") plus FAQ + discount newsletter
- Any brand that wants cheeky Gen-Z energy without going full Y2K chrome

## Anti-patterns (instantly break the vibe)

- Left/right split panes — single stacked column IS the layout
- Soft shadows, glassmorphism, gradient meshes — flat paper + outline IS the identity
- Serif or thin headlines — Anton chunky uppercase only
- More than 4 accents on one screen — blue + yellow + one recipe color at a time
- Long paragraphs — two lines max, then a sticker
- Square sharp cards — 16px radius minimum everywhere

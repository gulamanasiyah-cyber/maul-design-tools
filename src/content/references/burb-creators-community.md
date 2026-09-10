---
name: Burb Creators Community
family: playful
tags: [saas, community, creators, webflow, playful, pastel, black, rounded, marquee, glassmorphism, pill-header, bento]
palette: ["#000000", "#FFFFFF", "#CEEFD0", "#FFD6C0", "#FFE1E1", "#FBC5C4", "#AFD7B3", "#F0B38C"]
fonts:
  heading: Archivo Black
  body: Inter
texture: glass pill navbar that hides on scroll down, giant photo-chip headline with inline gradient avatar circles, infinite uppercase marquee strips, pastel bento feature cards that flood with color on hover, overlapping black walkthrough panel, staggered testimonial masonry with rounded-corner 70/15/15 white cards, black integrations box rising out of a green band with a dotted arc motif, hover-invert join banner
preview: burb-creators-community
notes: |
  - Community-operations SaaS landing page (Burb, Webflow) that pairs a strict black-and-white skeleton with a candy box of pastels used only as fills.
  - Editorial Geometry: Archivo Black-class ultra-heavy grotesque for every display line (hero, section heads, "Our customers", footer banner) over a neutral grotesque body (Neue Montreal class → Inter).
  - Photo-Chip Headline: the hero headline "How Creators Operate Community." breaks lines around small gradient circles (peach, green) holding cutout photos — type and image share one line box.
  - Glass Pill Header: floating rounded navbar (rgba black + blur + 50% white border) with logo left, links, and Log In; slides away on scroll down, returns on scroll up.
  - Marquee Strips: uppercase 16px marquee of category words (Courses, Automation, Community...) — white at 64% opacity on black, solid black on the green customers band.
  - Pastel Bento: feature cards on #F0F0F0 that flood #CEEFD0 / #FFD6C0 / #FFE1E1 on hover; first card spans both columns with a chart shot right.
  - Overlapping Black Panel: how-it-works section pins a 600px black rounded slab behind three #F4F4F4 step cards, with a team illustration floating above the panel edge.
  - Testimonial Wall: green #CEEFD0 band, "Our customers" at 200px/112px display sizes, "l♥ve us." in white with a face photo replacing the "o", staggered masonry of white cards with 70/15/15 corner radii and colored avatar tints.
  - Integrations Stage: black rounded-top box (padding 140px) holds a 4-col grid of tool cards (colored 200px logo slabs + white caption boxes, lift -10px on hover); a dotted arc SVG sits at the white gap below.
  - Join Banner: bordered rounded banner "Join us in the 'burbs" inverts to #FFE1E1 on hover (white text flips black, pink word flips white); green pill CTAs with a 3-dot icon cluster.
prompts:
  - label: Full community SaaS landing page
    text: |
      Build a playful community-platform landing page for [BRAND], a toolset for creators who run courses and membership communities.
      Aesthetic: Burb Creators Community. Palette: black #000000 and white #FFFFFF skeleton with pastel fills — green #CEEFD0, orange #FFD6C0, pink #FFE1E1, salmon #FBC5C4, mid green #AFD7B3 for CTAs, peach #F0B38C for accents on dark.
      Typography: ultra-heavy grotesque display (Archivo Black class) for headlines at 96-200px, neutral grotesque body (Inter class) 18px/32px, 700-weight 40px card titles, uppercase 16px marquee words.

      Layout structure in exact order:
      1. Header: fixed glass pill navbar (rgba(0,0,0,.8), blur 10px, 1px white/50% border, radius 100px) — logo left, links with 64px gaps, Log In; hides on scroll down, returns on scroll up.
      2. Hero: black section; 96px white display headline broken across three lines ("How (photo-chip) Creators / Operate (photo-chip) / Community.") with 90px gradient circles holding cutout photos inline; below, dashboard screenshot left + 32px white pitch and green pill CTA right; infinite uppercase marquee strip; giant dotted-pattern watermark at 30% opacity.
      3. Feature bento: 2-col grid, gap 40px, cards radius 24px on #F0F0F0; first card spans full width (copy left 560px, product shot right); four cards in 2×2 with alternating image-top/text-top layouts; every card floods a pastel (green/orange/pink) on hover; 700-weight 18px "Learn More" links with a growing 3-dot icon.
      4. How it works: white section with a 600px black rounded slab pinned behind; white 80px display head "Here's how it works" (green second half) + team illustration floating at the panel's top edge; three #F4F4F4 step cards (radius 24px, padding 48px) overlapping the slab's bottom edge, each with an illustration, "Step N" title, and 20px body.
      5. Customers: #CEEFD0 band; "Our" at 200px + "customers" at 112px display sizes in black, then "l♥ve us." in white 40px with a face photo inside the "o"; one featured quote card (470px) right-aligned; masonry of white cards (radius 70px 15px 15px, padding 32px) in 3 staggered columns with 88px round avatars on colored tints, bold names, roles + small company logos, and 20px quotes; black uppercase marquee below.
      6. Integrations: white section, 40px side gutters, green #CEEFD0 band 460px tall behind; black rounded-top box (padding 140px 0) with "Integrations (peach) / We've got 'em" at 96px and a 4-col grid of tool cards — 200px colored logo slabs over white caption boxes (name + category), lifting -10px on hover; wide dotted arc graphic at the bottom edge.
      7. Footer: black; bordered rounded join banner (margin 40px) "Join us in the 'burbs" at 140px with the pink word, 32px bold white subcopy + green pill CTA, team photo below; inverts to #FFE1E1 on hover; then footer columns — Company links (underlined, white/80%), two rows of social circles (64/88px, white fill, pastel hover), contact column with left border; bottom bar with copyright + policy links.
  - label: Hero with photo-chip headline
    text: |
      Generate the black hero for [COMMUNITY TOOL]: glass pill navbar, 96px white display headline with inline 90px gradient photo-chips breaking the lines, dashboard shot + pitch + green pill button, and an uppercase marquee strip over a 30% dotted watermark.
  - label: Pastel bento + black walkthrough
    text: |
      Build the feature cards and how-it-works for [SAAS]: #F0F0F0 radius-24 cards flooding pastel on hover (one full-width card), then a 600px black rounded slab behind three #F4F4F4 step cards with a floating team illustration.
source: https://www.burb.co/ref-landingfolio
---

## Why this family exists

Burb's landing page shows how far a strict two-color skeleton (black + white) can go when a handful of candy pastels is reserved strictly for **fills**: card hovers, avatar tints, CTA pills, and one invert-on-hover banner. Everything structural is rounded — 24px cards, 100px navbar pills, 128px buttons, 70/15/15 testimonial corners — and every display line is set in an ultra-heavy grotesque at poster scale. The result reads friendly and toy-like without ever using a color photo background: the only photography lives inside small gradient "chips" punched into the headline, on avatars, and in product shots.

## When to reach for it

- Creator-economy SaaS: community tools, course platforms, membership ops
- Products that want "serious infrastructure, playful surface" energy
- Landing pages that need long scroll rhythm: black → white → black → green → black loops
- Brands with one loud accent reserved for CTAs and a pastel family for hover states

## Key visual signatures

1. **Glass Pill Header**: blurred rgba-black rounded navbar with 50% white border; slides up on scroll down, back on scroll up.
2. **Photo-Chip Headline**: gradient circles with cutout photos sit inline inside the giant display headline.
3. **Pastel Flood Hover**: gray #F0F0F0 cards turn #CEEFD0 / #FFD6C0 / #FFE1E1 on hover — color is an event, not a state.
4. **Overlapping Black Slab**: section content (step cards) overlaps a rounded black panel behind them.
5. **70/15/15 Cards**: testimonial cards with a huge top-left corner radius and colored avatar tints.
6. **Dotted Motifs**: giant dotted-pattern watermark in the hero and a dotted arc bridging integrations into the footer.
7. **Invert Banner**: the footer join banner flips background to pink and swaps text colors on hover.

## Anti-patterns (instantly break the vibe)

- Body copy larger than 32px or headings in a serif/script — display type is always the heavy grotesque
- More than one saturated accent at full strength — pastels are fills, never text colors (except white on black)
- Square corners anywhere — 15px is the minimum radius
- Color photography backgrounds — photos live in chips, avatars, and product shots only
- Static gray cards — every card must respond with a color flood or lift

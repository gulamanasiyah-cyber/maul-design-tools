---
name: Neon Pop Studio
family: neon-pop
tags: [bold, neon, agency, pop, blue, lime, marquee, poster-type, dark]
palette: ["#2B2BF0", "#D6FF3B", "#111111", "#1A1A1A", "#EFEFEA", "#FFFFFF"]
fonts:
  heading: Anton
  body: Inter
texture: flat electric-blue field, blue-duotone flash-photo cutouts, outlined display type, diagonal black marquee band, ✦ sparkle motifs, zero gradients
preview: neon-pop-studio
notes: |
  - Hard flat fields: electric blue #2B2BF0 hero → black #111 services → off-white #EFEFEA about → black again; sections touch with zero gradients
  - Neon lime #D6FF3B is the ONLY accent — pills, sparkles, marquee words, progress fills, arrow rings, date chips
  - Display voice: Anton condensed uppercase everywhere; hero stacks two ~9vw words — word 1 solid lime, word 2 outline-only (transparent fill + stroke)
  - Hero photo is a blue-duotone flash cutout centered under the type; exactly one element stays lime (headphones) — that restraint is the trick
  - Stats column: Anton ~44px white numbers + 11px uppercase labels, thin rgba-white dividers
  - Diagonal marquee (-2deg) full-bleed black band; words alternate white/lime separated by ✦; slow infinite scroll
  - ✦ sparkle motif repeats: logo mark, section labels ("✦ WHAT WE DO"), decorations (mix filled + outlined)
  - Pill buttons: lime fill + black 800 text + black circle arrow; ghost variant = 1px white border on dark
  - Service cards: #1A1A1A with Anton title top-left, lime arrow ring top-right, photo bottom; the CENTER card flips to blue — one accent card per row
  - About block sits on off-white: lime progress bars (dark track) with label left / % right, badge chips with lime icon circles, photo on a lime blob
  - Services list rows: giant Anton words with lime numbers + arrow rings, thin dividers, hover flips the word to lime
  - Radius: 12–14px cards, 999px pills; flat everywhere — the only shadow is a soft drop under the marquee band
  - Motion: marquee scroll (~26s linear), arrow rings fill/rotate on hover, count-up stats; everything else instant
prompts:
  - label: Full landing page
    text: |
      Build a landing page for [AGENCY NAME], a creative digital agency. Intent: get visitors to [CTA GOAL — start a project / book a call].

      Aesthetic: Neon Pop Studio. Hard flat color fields — electric blue #2B2BF0 (hero + CTA), near-black #111 (services, footer), off-white #EFEFEA (about + blog). ONE accent: neon lime #D6FF3B (CTAs, sparkles, marquee words, progress fills, arrow rings). No gradients, no glass, no shadows except a soft drop under the marquee band.

      Typography: Display Anton (condensed heavy uppercase) for every headline; Inter 400/600/800 for body/UI. Hero H1 ~9vw, two stacked words, line-height 0.88: word 1 solid lime, word 2 outline-only (transparent fill + 2px lime-tinted stroke), overlapping a centered duotone model photo. Section H2 40–56px uppercase. Body 14–15px muted. Labels 11px uppercase, letter-spacing 0.2em, lime.

      Layout — in exact order:
      1. Nav on blue: "✦ WORDMARK®" left, 6 uppercase links center, lime pill "REQUEST A CALL OR +40 987 654 3210" right.
      2. Hero (blue, min-height 92vh, 3 columns): left stats stack (500+ HAPPY CLIENT / 125+ PROJECT DONE / 450+ MEMBER REVIEW — Anton 44px white numbers, 11px labels, thin rgba-white dividers); center giant stacked CREATIVE / AGENCY type over a centered blue-duotone cutout photo (person with headphones — the ONLY lime element); right column 2-line muted paragraph + lime pill "GET STARTED" with black circle arrow. Scatter 3 lime ✦ sparkles (one outlined).
      3. Diagonal marquee: full-bleed black band rotated -2deg, infinite scroll: BRANDING ✦ GRAPHIC DESIGN ✦ WEB DESIGN ✦ DIGITAL MARKETING — words alternate white/lime, ✦ lime.
      4. What we do (black): lime label "✦ WHAT WE DO", H2 "DESIGNING FOR SEAMLESS AND ENJOYABLE INTERACTIONS." + white outline pill "ALL SERVICES →". 3 cards (#1A1A1A, 12px radius, 1px rgba(255,255,255,0.07) border): Anton title top-left, 44px lime-ring arrow circle top-right, photo fills bottom 55%; CENTER card flips to blue #2B2BF0.
      5. Who we are (off-white): label "✦ WHO WE ARE", H2 "CREATIVITY MEETS STRATEGY.", muted paragraph, 2 badge rows (44px lime icon circle + Inter 800 uppercase: "OVER 10 YEARS OF EXPERIENCE" / "TRUSTED BY GLOBAL BRANDS"); right: photo on lime blob + 3 progress bars (8px track #d8d8d0, lime fill, label left + Anton % right: MARKETING CAMPAIGNS 90% / SATISFACTION RATE 98% / PROJECT SUCCESS 100%) + dark pill "ABOUT US →".
      6. Logo strip: dark rounded bar, 8 abstract white marks, slow marquee.
      7. Quote banner (black): one line, mixed style — "WE ARE CREATORS," lime outline + "INNOVATORS, AND STORYTELLERS" solid white Anton.
      8. Services list (black): 4 rows with 1px rgba(255,255,255,0.14) dividers — 01 BRANDING / 02 GRAPHIC DESIGN / 03 WEB DESIGN / 04 DIGITAL MARKETING; Anton 56px word + lime number + 48px arrow ring; hover turns word lime.
      9. Portfolio (black): H2 "OUR WORK SPEAKS FOR ITSELF", asymmetric 2×2 image grid, lime category chips.
      10. Team (black): H2 "TEAM OF EXPERT", 4 duotone portrait cards, name + role, lime "+" button.
      11. CTA (blue): giant Anton "LET'S CREATE SOMETHING AMAZING TOGETHER." + lime pill "GET STARTED →" + ✦ sparkles.
      12. Testimonials (black): H2 "WHAT OUR CLIENT SAYS", 3 dark cards: lime ★★★★★, quote, avatar + name + role.
      13. Blog (off-white): H2 "STAY INSPIRED WITH OUR BLOG", 3 cards: image, lime date chip, Anton title.
      14. Footer (black): ✦ wordmark, 3 link columns, newsletter input + lime button, giant outlined wordmark watermark at the very bottom.

      Spacing: section padding 90px 6vw, card gap 20px. Radius 12–14px cards / 999px pills. Motion: marquee 26s linear infinite (duplicated track, translateX(-50%)), arrow rings fill lime + arrow turns black on hover, stats count up once.

      Guardrails: never add a second accent, never gradient the blue, never use a serif, never shrink hero type below 8vw on desktop, keep all photos blue-duotone so lime stays the only pop.
  - label: Hero image direction
    text: |
      Generate 3 hero cutout photo options for a Neon Pop Studio page about [SUBJECT — e.g. "creative agency / design studio"].

      Direction: studio flash photograph of a young person (headphones on, confident expression, mid-laugh or calm), shot against a flat electric-blue #2B2BF0 backdrop or cut out cleanly. Strong direct flash: crisp shadow edge, slight highlight roll-off on skin, streetwear styling. Grade the whole image into blue duotone — shadows #15159A, mids #2C2CC2, highlights #8F8FFF — EXCEPT one lime #D6FF3B element (headphones or cap) that stays neon. Composition: bust centered, generous headroom for a giant two-word stacked headline that will overlap the chest, empty sides reserved for stats and CTA columns. Render 1600×1200, photographic, high detail. Avoid: gradients, busy backgrounds, warm color casts, more than one neon element, full-body shots, flat vector illustration.
  - label: Service cards, marquee & about polish
    text: |
      Polish these blocks in the Neon Pop Studio language without changing their content:

      - Service cards: #1A1A1A, 12px radius, 1px rgba(255,255,255,0.07) border. Anton 20px title top-left (max 2 lines, 72% width), 44px lime-ring arrow circle top-right (1px rgba(214,255,59,0.75) border), photo fills bottom 55% with 8px inner radius. The CENTER card uses blue #2B2BF0, white title, white-ring arrow. Hover: card lifts 4px, ring fills lime, arrow turns black.
      - Diagonal marquee: black #111 band, rotate -2deg, width 108vw margin-left -4vw, Anton 28px uppercase, infinite track: words alternate #fff / #D6FF3B separated by lime ✦ (16px). Duplicate content, animate translateX(-50%), 26s linear infinite.
      - About progress bars: 11px uppercase #111 label left, Anton 16px % right; 8px track #d8d8d0, fill #D6FF3B. Badges: 44px lime circle + black line icon + 14px Inter 800 uppercase text.
      - Services list rows: 1px rgba(255,255,255,0.14) dividers; row = 12px lime number, Anton 56px white word, 48px arrow ring right; hover: word → lime, ring fills lime, padding-left eases +12px.
      Keep everything flat — no shadows except the marquee's soft drop. Lime is the only accent. No gradients anywhere.
---

## Why this family exists

Distilled from the Aurelia creative-agency template. It proves that **two loud colors plus one gigantic condensed voice can carry an entire identity**: electric blue and neon lime do all the work, photography is pressed into blue duotone so it never competes with the accent, and type is scaled like a poster instead of a website. Everything else is the same three moves on repeat — pill + arrow ring, ✦ sparkle, diagonal band.

## When to reach for it

- Creative agencies, design studios, portfolios that want loud poster energy
- Music/festival, streetwear, event and youth-culture brands
- Landing pages that need to feel like a statement, not a brochure

## Anti-patterns (instantly break the vibe)

- Softening the palette (pastel blue, mint instead of lime) — this family only works at full saturation
- A second accent color — lime must stay the only pop on every screen
- Elegant thin serif or light sans display — the condensed heavy uppercase IS the identity
- Gradients, glassmorphism, soft shadows everywhere — flatness is the texture
- Shrinking the hero type to a "tasteful" size — if it doesn't feel slightly too big, it's wrong

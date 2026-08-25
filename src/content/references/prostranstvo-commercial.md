---
name: Prostranstvo Commercial
family: commercial
tags: [commercial, real-estate, corporate, minimal, light, editorial, business]
palette: ["#8AAECC", "#0E141E", "#2E3D52", "#EEF2F7", "#FFFFFF"]
fonts:
  heading: Inter
  body: Inter
texture: clean white page, inset hero with cool blue wash, matte hairline dividers, flat white surfaces — no outer frame
preview: prostranstvo-commercial
notes: |
  - The page is clean white (#FFFFFF) — the dusty blue #9AB6D1 seen in the screenshot is only the modal backdrop behind the card and is ignored. The site itself has no outer frame, no rounded outer sheet, no outer shadow.
  - Sticky white nav (blurred, hairline bottom 1px rgba(14,20,30,0.06)): left wordmark (stacked geometric blocks + "Prostranstvo / commercial real estate"), center 5 text links, right phone + ghost pill "Get in touch" + mobile burger.
  - Hero is an inset rounded card (22px radius, 14–16px page margin, min-height 440px, background #DDE6F0): photographic modern high-rise fills it with a strong left-to-right blue wash (rgba(125,150,185,0.92) → 0.08) so white type stays legible; copy left-aligned, max 540px.
  - Hero type: H1 30–46px Inter 800, line-height 0.96, 2 lines ("Real estate / for business"), sub 13.5px/1.55 white 94%, one white pill CTA (12×20, soft drop shadow) + 11px helper line below.
  - About is 2-column: left paragraph (13px muted #6B7480, max 500ch) + right 2×2 stats (28px bold numbers + 11px muted labels); below both, a full-width logostrip with thin top+bottom dividers — 5 Logoipsum marks each with a 22px ink circle icon.
  - Catalog head: H2 26px + 12.5px muted sub left, two 38px circle arrow buttons right (ghost + ink fill); 3 equal cards (image 220px, 16px radius, hover scale 1.03) with title 13.5px + supporting line 11.5px muted.
  - How we work is the signature motif: header (H2 + sub), then 0.95fr / 1.22fr grid — left visual is a 440px tall rounded photo with a 112px dusty-blue circular badge ("Free consultation") overlapping top-right; right side is 5 steps (36px ink circle icon + 13px title + 12px muted description), each with a 1px hairline divider.
  - Testimonials: 3 equal cards in a row (light gray #F6F7F9 alternating white), large serif quote mark #8AAECC, 12.5px body, avatar row with top divider — cards stretch to equal height.
  - Contact is a dark ink card (#0E141E, 18px radius, 26px padding) split 1.05fr / 0.95fr: left headline + muted copy + 3 contact lines + trust row (4.9/5, 48h) with top divider; right white form (14px radius) with stacked inputs + textarea, 10px radius fields, focus ring rgba(138,174,204,0.18).
  - Footer is a clean white footer (no frame): 4-column grid (brand + Navigate + Properties + Contacts) with hairline top divider, then a bottom bar with copyright + privacy/sitemap/legal links — all 11–12.5px muted, ink headings 11px uppercase.
  - Type is entirely Inter — no serif for headings; sizes stay small and corporate: H2 22–26px, body 12–13.5px, labels 10–11px; tracking tight (-0.02em on headings).
  - Radius system: hero 22px, contact card 18px, catalog/how images 16px, form 14px, pills/circles 999px; dividers are always 1px rgba(14,20,30,0.06–0.07).
  - Spacing: horizontal padding 28px on desktop, vertical section gap 28–32px, card gap 16px, hero internal 40px; first viewport shows hero only, calm and uncluttered.
  - Imagery direction: only real architectural photography (glass towers, concrete texture, muted sky) — no illustrations; keep the cool blue grade (dusty blue #8AAECC wash) but the page background itself stays white.
prompts:
  - label: Full landing page
    text: |
      Build a landing page for [BRAND], a commercial real-estate brokerage. Intent: get visitors to request a consultation / start a partnership.

      Aesthetic: Prostranstvo Commercial — white page. Background is pure white #FFFFFF (the dusty blue in the reference screenshot is only the surrounding modal backdrop — do not use it as the page background). Ink #0E141E, muted #6B7480/#8A95A5, accent #8AAECC, surfaces #EEF2F7/#F6F7F9, quote mark #8AAECC. The page is entirely light and corporate — no dark page background except the contact CTA card. No outer frame, no outer rounded sheet, no outer shadow. Typography Inter only (800 for H1/H2, 500/700 for body), tight tracking (-0.02em on headings). Each section sits directly on the white page.

      Layout — in exact order, on a white page:
      1. Nav (sticky, blurred white rgba(255,255,255,0.94), hairline bottom 1px rgba(14,20,30,0.06)): left stacked-block SVG mark (three vertical blocks #0E141E/#2E3D52/#8AAECC) + "Prostranstvo / commercial real estate" (16px bold / 10px 0.08em uppercase muted), center 5 links (About · Listings · Process · Reviews · Contacts, 13px muted #6B7480), right "+1 (212) 555-1234" 12.5px bold + ghost pill "Get in touch" (12.5px, 1px border) + burger (≈36px ink circle) on mobile. Max-width 1160px centered, 28px horizontal padding.
      2. Hero (inset card, 22px radius, 14–16px page margin, min-height 440px, background #DDE6F0): photographic modern high-rise fills the card (object-cover, Unsplash 1486406146926), with a left-to-right wash linear-gradient 90deg rgba(125,150,185,0.92) 0% → 0.58 at 38% → 0.08 at 74%. Left copy max 540px, 40px padding: H1 "Real estate / for business" 30–46px/0.96 white with soft shadow, sub "Leasing, sales and hand-picked spaces — / from offices to warehouses." 13.5px/1.55 white 94%, white pill CTA "Start a partnership" (12×20, shadow 0 8px 22px rgba(0,0,0,0.14)) + helper line "Free consultation · Response within 15 minutes" 11px white 82% below CTA.
      3. About: 1.2fr / 0.9fr grid, 32px gap. Left: H2 "About us" 26px + paragraph 13px/1.7 muted #6B7480 max 500ch ("We are commercial real-estate specialists..."). Right: 2×2 stats (28px bold number + 11px 0.04em muted label: "10+ years on the market / 1,000+ happy clients / 4,000+ properties in portfolio / 95% deals closed successfully"). Below, full-width logostrip with thin top+bottom dividers 1px rgba(14,20,30,0.07), 16px vertical padding, 5 items "Logoipsum" each with a 22px ink circle icon (symbols ⬢⬣✦⬔◆).
      4. Catalog: header row — H2 "Property / catalog" 26px + sub "A wide selection of spaces / for your business needs" 12.5px muted left, two 38px circle arrows right (ghost = white + 1px border rgba(14,20,30,0.12), dark = #0E141E fill). Grid 3 equal cards, 16px gap: image 220px height, 16px radius, object-cover photographic (office facade / warehouse / open land), hover scale 1.03; title 13.5px #0E141E, supporting line "4,000+ listings · City centre to business park" 11.5px #8A95A5.
      5. How we work: header H2 "How we work" 26px + sub "We made working with us / as simple and transparent as possible" 12.5px muted. Grid 0.95fr / 1.22fr, 24px gap: left visual 440px height, 16px radius, real architectural photo (Unsplash 1545324418) with a 112px dusty-blue circle badge #8AAECC top-right (12px 800 white centered "Free / consultation", shadow 0 10px 26px rgba(0,0,0,0.16)); right ordered list 5 steps, each 36px ink circle icon (#0E141E, white glyph ◎⌕◐⬔◆), 13px bold title, 12px/1.55 muted description, 1px divider rgba(14,20,30,0.07) between rows, 16px vertical padding. Steps: Consultation & needs analysis / Sourcing & shortlisting / Viewings & valuation / Due diligence & paperwork / Deal closing & support.
      6. Reviews: header H2 "What our clients say" 22px + sub "Real feedback from businesses we helped move, expand and save" 12.5px muted. Grid 3 cards, 16px gap: cards #F6F7F9 alternating #FFFFFF, 1px border rgba(14,20,30,0.06), 16px radius, 18px padding, flex column; large serif quote mark "“" 28px #8AAECC, paragraph 12.5px/1.65 #3A4556, footer row avatar 32px circle + name 12px bold + role 11px muted #8A95A5 with top divider 1px rgba(14,20,30,0.07).
      7. Contact: ink card #0E141E, 18px radius, 26px padding, grid 1.05fr / 0.95fr, 28px gap (max-width 1160px centered, 28px page padding). Left: H2 "Let's talk about / your next space" 26px white, paragraph 12.5px/1.6 white 72% max 420ch, contact list 3 lines each with 22px translucent pill icon (✆✉◉) + " +1 (212) 555-1234 / hello@prostranstvo.com / New York · 10 Madison Ave", then trust row with top divider 1px rgba(255,255,255,0.10), 14px top padding: "4.9/5 avg. client rating" + "48h avg. time to shortlist" (11.5px muted, bold number 13px white). Right: white form 14px radius, 16px padding, 10px gap, labels 11px 0.04em #3A4556: Full name (Jane Doe) / Phone (+1…) / Property type (select: Office, Warehouse, Land plot, Retail, Other) / Message textarea 3 rows; inputs 13px 500, 10px radius, 1px border rgba(14,20,30,0.12), focus border #8AAECC + 0 0 0 3px rgba(138,174,204,0.18); full-width white pill "Send request" + helper "By sending, you agree to our privacy policy. We never share your data." 10.5px centered muted #8A95A5.
      8. Footer (white, not in a card): 28px horizontal padding; top grid 1.5fr 0.7fr 0.8fr 0.9fr, 24px gap, hairline bottom border 1px rgba(14,20,30,0.07), 18px bottom padding. Col 1: "⬢ Prostranstvo" 14px 800 ink with 22px ink circle + paragraph 12px/1.6 muted #6B7480 max 280ch + 3 social circles 32px 1px border rgba(14,20,30,0.10). Col 2 "Navigate" / Col 3 "Properties" / Col 4 "Contacts" — each heading 11px 0.08em uppercase ink #0E141E, links 12.5px #6B7480. Bottom bar flex space-between, 14px top padding, 11.5px muted #8A95A5: left "© 2026 Prostranstvo. Commercial real estate." right "Privacy · Sitemap · Legal notice" muted links.

      Spacing: horizontal section padding 28px (16px on mobile), vertical rhythm 28–32px between sections, card gap 16px, hero internal 40px. Radius: hero 22px, contact card 18px, catalog/how images 16px, form 14px, pills/circles 999px. Dividers 1px rgba(14,20,30,0.06–0.07) throughout. Keep imagery photographic and cool-graded; wash color may be dusty blue #8AAECC but the page background itself stays white. First viewport shows hero only.
  - label: Hero image direction
    text: |
      Generate 3 hero photo options for a Prostranstvo Commercial page about [SUBJECT — e.g. "commercial real estate / office brokerage"].

      Direction: modern commercial architecture — glass high-rise or concrete office tower, shot from a low angle against a soft pale sky. Clean, corporate, slightly desaturated, cool grade. Strong geometric facade, no people, no busy street. Composition MUST leave generous empty space on the left third for white headline + pill CTA to sit legibly; the building should anchor the right half / center-right. The image will be used inside a 22px rounded card with a left-to-right blue wash (rgba(125,150,185,0.92) → transparent) — so the left 40% must stay calm, not overly detailed. Render at 1600×900, photographic, sharp, high detail. Do not use a blue page background — the page is white; blue only appears as the wash over the hero image. Avoid: warm sunset tones, crowded cityscapes, residential houses, illustrations, heavy filters, people in foreground.
  - label: Catalog, process & footer polish
    text: |
      Polish these blocks in the Prostranstvo Commercial language (English, white page) without changing their content:

      - Catalog: keep the header row with H2 + muted sub left and two 38px circle arrows right (ghost = white/1px border rgba(14,20,30,0.12), dark = #0E141E fill). 3 equal cards: image 220px height, 16px radius, object-cover photographic (office facade / warehouse / open land), title 13.5px #0E141E, meta "4,000+ listings · ..." 11.5px #8A95A5. Gap 16px, hover scale image 1.03. Never add shadows to cards or an outer sheet — the page is flat white.
      - How we work: header H2 26px + sub 12.5px muted. Grid 0.95fr / 1.22fr, 24px gap. Left visual: real architectural photo, 440px height, 16px radius, with a 112px circle badge #8AAECC top-right, white 12px 800 centered text ("Free / consultation"), shadow 0 10px 26px rgba(0,0,0,0.16). Right: ordered steps, each 36px ink circle icon (#0E141E, white glyph), 13px title, 12px/1.55 muted description, 1px divider rgba(14,20,30,0.07) between rows, 16px vertical padding. Keep English copy: "Consultation & needs analysis" etc. Let the photo be the tallest element.
      - Footer (white, flat): 4-column grid 1.5fr 0.7fr 0.8fr 0.9fr, 24px gap, hairline dividers. Brand col with 22px ink circle + 14px bold wordmark + 12px muted paragraph + 32px social circles. Other cols: heading 11px uppercase ink, links 12.5px muted #6B7480. Bottom bar 11.5px muted with copyright left and "Privacy · Sitemap · Legal notice" right. No dark page footer, no outer sheet, no blue frame.
      Keep all dividers hairline, radii as specified, palette strictly white + ink + muted + dusty-blue accent #8AAECC only for hero wash/badge/quote marks, Inter only. No extra accent colors, no card shadows, no uppercase step titles.
---

## Why this family exists

Distilled from the "Prostranstvo" commercial real-estate landing (English edition). The screenshot's blue area is only the modal backdrop — the site itself is clean white. It proves that **restraint and hierarchy beat decoration for B2B trust**: one photographic hero wash, a disciplined Inter scale, and flat white surfaces with hairline dividers do all the work. Everything else is just small muted labels and photographic proof — the page feels like a calm, credible document.

## When to reach for it

- Commercial real estate, brokerage, property management, corporate services that need to feel trustworthy and premium but not playful
- B2B landing pages where photography (buildings, interiors) is the hero and type must stay calm and legible
- Any long-form corporate site that benefits from a clean white document feel instead of framed or dark treatments

## Anti-patterns (instantly break the vibe)

- Adding a dusty-blue or any colored outer frame / outer rounded sheet / outer shadow — the page is flat white
- Adding a dark/black page background, neon accent or gradient sections — this family stays white except for the hero wash, badge, and final contact card
- Replacing Inter with a serif display or playful rounded sans — the corporate neutrality is the point
- Adding card shadows, heavy borders or colorful chips — keep surfaces flat with only hairline dividers
- Filling the hero with multiple CTAs, stats or floating UI — the first viewport is headline + sub + one white pill only
- Leaving any Russian copy in the UI when using the English edition — translate every visible string, including badge and form labels
---

source: https://images.unsplash.com/photo-1486406146926-c627a92ad1ab

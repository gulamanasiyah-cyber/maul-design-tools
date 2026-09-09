---
name: Daisy Glow Collab
family: playful
tags: [scrapbook, sticker-collage, AI, cream-grid, serif-mono, tarot, lime, pink, playful, landing]
palette: ["#F6F4EB", "#EFEDEE", "#1A1A1A", "#CDFB8A", "#FFB9E2", "#FFD84D", "#E4CFFF", "#8B7CF6"]
fonts:
  heading: Instrument Serif
  body: Space Mono
texture: cream graph-paper grid, tilted sticker cards with hard offset shadows, washi sticky notes, tarot + daisy illustration cards, doodle scribbles + emoji charms around a Mona+brain collage
preview: daisy-glow-collab
notes: |
  - Cream page #F6F4EB with 28px graph grid — hero + midnight sections share the grid, chaos section is flat #EFEDEE sandwiched between with 26px top radius + 1.5px ink border
  - Ink is #1A1A1A everywhere: 1.5px borders, hard offset shadows (3-5px, no blur), mono body copy
  - Headlines are Instrument Serif 400, tight leading — hero clamp(28px,4vw,52px), pink marker hl #FFB9E2 on "AI creative collaborator"
  - Nav: ✿ daisy serif left, lime pill "Join the Waitlist" right (1.5px border, 8px radius, 3px hard shadow)
  - Hero collage: 5 tilted cards overlapping -26px, alternating rotations (-6° / +4° / -2° / +3° / +5°): real room photo (/assets/daisy-glow-collab/room.jpg) → dark tarot "Book/Club" SVG → "Let it Flow" daisy SVG → real creator portrait (/assets/daisy-glow-collab/portrait.jpg) → accounting dashboard with 3 real thumbs (dash1-3.jpg) + smiley badge; every <img> has cream #E8E2D2 fallback + object-fit cover
  - Sticky notes are the voice: yellow #FFD84D top, lime #CDFB8A bottom-left, lavender #E4CFFF bottom-right — 8.5px bold mono, rotated ±4°, hard 2px shadow
  - Tarot card: near-black #1E1E1E, cream serif top/bottom, thin cream inner frame with skull motif
  - Daisy card: off-white #FDFBF3, serif "Let it Flow", big white daisy SVG with orange center + green stem, lime "Coming Soon" pill
  - Chaos section: left serif H2 "Transform chaos into creativity" + 4 stacked pills (1.5px border, 14px radius, cream fill, 12px mono, max 460px); right is the REAL Mona Lisa photo (/assets/daisy-glow-collab/mona.jpg, object-position top, 150px top radius, 3px pink #F5A6B7 frame) with 🧠 brain emoji overlapping -24px, surrounded by orb / ghost / butterfly / sunflower / scribble charms
  - Midnight section: centered serif H2 + lime panel #CDFB8A (22px radius, hard 5px shadow) grid 260px + browser mock; browser is white with traffic dots, purple Share pill, line skeleton + 3 real thumbs (board1.jpg / flowers.jpg / room.jpg)
  - Radius: 14px cards / 22-26px sections / 999px pills; motion: none or gentle float — stillness sells the scrapbook
prompts:
  - label: Full landing page
    text: |
      Build a landing page for [PRODUCT], an AI creative collaborator. Intent: get visitors to [CTA GOAL — join the waitlist].

      Aesthetic: Daisy Glow Collab. Cream graph-paper page #F6F4EB (28px grid, rgba(26,26,26,0.06) lines) → flat grey #EFEDEE middle band → cream grid again. Ink #1A1A1A for all 1.5px borders + hard offset shadows (3-5px, zero blur). Accents: lime #CDFB8A (CTA + pills + panel), pink #FFB9E2 (headline marker + Mona outline), yellow #FFD84D (sticky), lavender #E4CFFF (sticky), purple #8B7CF6 (share pill). No gradients except inside photo placeholders, no glass, no soft shadows.

      Typography: Headings Instrument Serif 400, letter-spacing -0.01em. Body/UI Space Mono 400/700. Hero H1 clamp(28px,4vw,52px), line-height 1.12, centered, 2 lines: "Give your ideas a glow up. Meet / your new AI creative collaborator." — wrap the second sentence in pink marker (background #FFB9E2, padding 0 10px). Sub 12.5px/1.7 centered. Section H2 clamp(30px,3.6vw,48px) serif. Pills 12px mono.

      Layout — in exact order:
      1. Nav: max 1220px, serif ✿ daisy left (22px), lime pill "Join the Waitlist" right (11px bold, 1.5px border, 8px radius, 3px hard shadow).
      2. Hero collage: max 1080px, flex, cards overlap margin-left -26px, align-end. Card base: white, 1.5px border, 14px radius, 4px hard shadow, width ~200px, padding 10px. From left: (a) room photo 230px rotate -6°, (b) tarot 190×280 rotate +4° z3 — black #1E1E1E, cream serif "Book" top / "Club" bottom 34px, inner cream frame with skull SVG, (c) daisy 190×270 rotate -2° z4 — #FDFBF3, serif "Let it Flow" 20px, daisy SVG white petals/orange center/green stem, lime "Coming Soon" pill 9px, (d) portrait photo 210×250 rotate +3°, (e) dashboard 230×250 rotate +5° — serif 13px title "Accounting for creators, makers and shakers.", 3 color dots (lime/purple/yellow 34px), 3 skeleton thumbs bottom, smiley badge absolute top -34px (52px circle, pink-orange radial, 28px ☺). Stickies (8.5px bold mono, 1.5px border, 6px radius, 2px hard shadow, max 150px): yellow top "Help me promote our new neighbourhood book club" rotate -4°, lime bottom-left "Create a blog post outline about dopamine decorating", lavender bottom-right "Help me create a tax season content calendar" rotate +4°.
      3. Chaos band: #EFEDEE, 1.5px border, radius 26px 26px 0 0, margin-top -18px, z6. Grid 1fr 1.1fr max 1160px, align-end. Left: serif H2 + 4 pills (cream #F6F4EB, 14px radius, 14px/18px padding, max 460px): "Throw your thoughts onto an infinite canvas and watch them evolve" / "Turn scattered ideas into coherent plans with your AI collaborator" / "Save anything that sparks your creativity from across the web" / "Experience the blissful feeling of a perfectly organized junk drawer". Right min-height 480px: pink orb top (44px radial #FFD7E8→#C95B8A), grey ghost 👻 top-right 54px, butterfly 🦋, sunflower 🌼, orange squiggle 〰, two scribble captions 10px/0.7 opacity, Mona 340px bottom center — REAL Mona Lisa photo (/assets/daisy-glow-collab/mona.jpg, object-fit cover, object-position top, 150px top radius, 3px #F5A6B7 frame, #3A2317 fallback) with brain 🧠 64px overlapping -24px z2.
      4. Midnight band: cream grid again, 1.5px border, radius 26px 26px 0 0, margin-top -18px, z7, centered. Serif H2 "Turn midnight musings into / morning action plans". Lime panel: max 1160px, #CDFB8A, 1.5px border, 22px radius, 5px hard shadow, grid 260px 1fr, 30px padding, left serif H3 "Wide open spaces" 32px + 11.5px copy + black pill "Start creating →", right white browser mock (1.5px border, 14px radius, traffic dots + "Landing Page — Daisy Canvas" + purple Share pill, body grid lines + 3 real photos board1.jpg / flowers.jpg / room.jpg, object-fit cover).
      5. Footnote 11px/0.7: "daisy — your AI creative collaborator · join the waitlist".

      Spacing: hero padding 22px sides → 70px bottom; chaos/midnight clamp(40px,5vw,70px) sides. Responsive ≤1024px: collage wraps with 18px gap, chaos grid stacks, lime panel stacks. ≤640px: H1 30px, marker wraps, stickies become inline-block static, Mona 260px, browser body single column.

      Guardrails: never drop the graph grid, never soften shadows (hard offset only), never use a sans heading, never add a second pink, never re-illustrate the Mona (real photo + emoji brain is the joke — keep object-position top so the face survives cropping), keep all 3 sticky notes verbatim-styled even if copy changes.
  - label: Hero collage image direction
    text: |
      Generate 4 cutout photo options for a Daisy Glow Collab hero collage about [SUBJECT — e.g. "book club / creative work / tax season"].

      Direction: warm flash photography, scrapbook feel, cream #F6F4EB backdrop. (1) Cozy dopamine-decor living room: rainbow art, plants, arch mirror, daylight. (2) Portrait of a creator with plants/flowers in foreground, direct flash, joyful. (3) Minimal accounting dashboard UI crop with colorful pie dots. (4) Tarot-style skeleton illustration on near-black (line art, cream ink). All with 1.5px ink border + hard offset shadow when placed, slight tilt (-6° to +5°). Add 3 washi sticky captions in mono 8.5px bold: yellow / lime / lavender. Render 1200×1400 each, photographic except tarot (illustrated). Avoid: cold corporate stock, dark moody grade, thin borders, soft shadows, sans overlay type.
  - label: Chaos pills, Mona & lime panel polish
    text: |
      Polish these blocks in the Daisy Glow Collab language without changing their content:

      - Chaos pills: cream #F6F4EB fill, 1.5px #1A1A1A border, 14px radius, 14px 18px padding, max-width 460px, Space Mono 12px/1.6, stack gap 14px, no icons.
      - Mona cluster: grey #EFEDEE field, min-height 480px. Mona 340px bottom-center: brain emoji 64px overlapping top -24px z2, hair #3A2317 radius 150px top with 3px #F5A6B7 outline (no bottom border), skin 150×190 gradient #E8C39E→#C99B6E radius 70px/90px, minimal ◕‿◕ face. Charms: 44px pink radial orb, grayscale 👻 54px top-right, 🦋/🌼 mid, orange 〰 squiggle, 2 scribble captions 10px opacity 0.7 rotated ±8°.
      - Lime panel: #CDFB8A, 1.5px border, 22px radius, 5px 5px 0 #1A1A1A, grid 260px 1fr gap 26px padding 30px. Left: Instrument Serif 32px H3 + 11.5px mono copy + black pill "Start creating →" (11px, 999px). Right browser: white, 1.5px border, 14px radius, top bar #FDFBF3 with 10px traffic dots + 10px title + purple #8B7CF6 Share pill; body 3-col skeleton (line pills #E8E2D2 + 110px gradient thumbs).
      - Section shells: 1.5px ink borders, 26px top radius, -18px overlap pull-up. Keep shadows hard, grids visible, serif/mono pairing strict. No new colors, no blur shadows, no centered card cliché.
---

## Why this family exists

Distilled dari screenshot Daisy — AI creative collaborator landing. Membuktikan **scrapbook bisa rapi**: satu grid krem + satu voice serif/mono + tiga sticky notes membawa seluruh identitas. Foto bertugas jujur (flash hangat + Mona Lisa asli berbingkai pink), ilustrasi bertugas lucu (tarot + daisy + otak emoji), dan panel lime menutup dengan janji "midnight → morning".

## When to reach for it

- AI companion, creative tool, community, book club, creator finance — brand yang butuh terasa hangat + cerdas
- Landing waitlist yang harus menjelaskan 3 hal cepat: capture → organize → elevate
- Brand dengan banyak contoh prompt — sticky notes adalah pattern bawaannya

## Anti-patterns (instantly break the vibe)

- Menghilangkan grid krem — tanpa grid ini cuma jadi kartu generik
- Soft shadow / blur / glass — keluarga ini hanya pakai hard offset shadow
- Heading sans atau body serif — pasangannya terkunci: serif display + mono body
- Menghapus salah satu dari 3 sticky notes — mereka adalah CTA tersembunyi
- Mengganti foto Mona Lisa asli dengan ilustrasi / emoji wajah — justru foto asli + otak emoji yang bikin memorable

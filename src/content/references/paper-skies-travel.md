---
name: Paper Skies Travel
family: travel
tags: [travel, sky-blue, paper-craft, agency, booking, fresh, rounded, light]
palette: ["#2E7CD6", "#3D8FE0", "#EAF3FC", "#16324F", "#F4F9FE", "#FFFFFF"]
fonts:
  heading: Poppins
  body: Nunito Sans
texture: sky gradient with 3D paper plane + dashed trail, low-poly paper peaks, soft clouds, floating white search widget, rounded cards with soft blue shadows
preview: paper-skies-travel
notes: |
  - Everything sits on a sky: hero gradient #3D8FE0 → #6FB6F0 → #B8DDF8 → #EEF6FD; page base #F4F9FE; white cards float on it with soft blue shadows (0 18px 50px rgba(30,90,160,0.1)) — never harsh black shadows
  - One primary blue #2E7CD6 for actions (Search, Select Plan, prices, links); ink #16324F for headings; muted #5E7893 for body; soft #EAF3FC for icon chips and active tabs
  - The paper-craft world is the identity: 3D paper plane (3 white/blue polygon facets + drop-shadow), dashed loop trail, low-poly white peaks along the horizon, blob clouds, white landmark silhouettes (Eiffel, Big Ben, Burj Al Arab), low-poly paper heart
  - Display voice: Poppins 600/700; hero "TRAVEL / AROUND THE WORLD" white with second line at 0.56em; one script moment only — "Explore. Dream. Discover." in Dancing Script
  - Signature component: the floating search widget — white rounded-20 card with tab row (Flights active on #EAF3FC) + 6 bevel-less fields (tiny uppercase label + bold value) + swap circle + solid blue Search button; overlaps the hero bottom
  - Feature row: 4 white cards, icon in 46px soft-blue rounded square, bold title + 11.5px muted line
  - Package cards: photo top (h~150), Poppins title, 📍 location + ⏱ duration meta row, price in blue Poppins + "Per Person", gold ★ rating, circle arrow that fills blue on hover; whole group lives inside one big white rounded-24 container
  - Pricing: blue gradient panel with paper-plane + cloud props; 4 glass tiers (rgba white 14% + blur); the POPULAR tier flips to solid white, lifts -14px, carries a dark "Most Popular" pill and the only solid-blue Select Plan
  - How-to-book: 4 white step cards connected by dashed blue lines, numbered bold titles
  - Stats bar: blue gradient rounded panel — 4 stats with thin white dividers + glass testimonial card (quote, name, gold ★★★★★) + paper heart peeking from the corner
  - Footer: deep navy #0F2B4D — the only dark surface on the page, grounds all the air above it
  - Radius: 24px panels, 16px cards, 10px buttons/inputs, 999px pills; motion: plane float 5s ease-in-out, card lift on hover, nothing else
  - All icons are real 3D PNGs (Microsoft Fluent Emoji 3D, MIT) stored in public/assets/<slug>/icons/ — airplane/hotel/car/tickets tabs, pin/package/card/departure steps, shield/headset/luggage features, calendar fields, white heart, user bust — never flat unicode glyphs
  - Load Dancing Script via a component-level font link (frontmatter only carries heading/body)
prompts:
  - label: Full landing page
    text: |
      Build a landing page for [TRAVEL BRAND], an online travel agency. Intent: get visitors to [CTA GOAL — search a trip / book a package].

      Aesthetic: Paper Skies Travel. Sky-gradient hero (#3D8FE0 → #6FB6F0 → #B8DDF8 → #EEF6FD), page base #F4F9FE, white cards with soft blue shadows rgba(30,90,160,0.1). Primary blue #2E7CD6 for all actions, ink #16324F, muted #5E7893, soft #EAF3FC chips. The paper-craft world is mandatory: 3D paper plane built from 3 polygon facets (white #FFF, #D8E9F8, #B9D7F0) with drop-shadow, dashed white loop trail, low-poly white peaks on the horizon, blob clouds, white landmark silhouettes. NO photos in the hero — the art is SVG/CSS.

      Typography: Poppins 600/700 for headings and numbers, Nunito Sans 400/700/800 for UI/body. Hero "TRAVEL / AROUND THE WORLD" in white (second line 0.56em). One script moment: "Explore. Dream. Discover." in Dancing Script. Body 13–15px.

      Layout — in exact order:
      1. Nav over sky: paper-plane logo + "TRAVEL / AROUND THE WORLD" wordmark, 6 links (Home active, underlined), glass "Sign In ☺" pill.
      2. Hero copy left: H1 + script tagline + 2-line sub + white "Explore Packages ✈" button (radius 10, blue text, soft shadow). Paper plane floats top-right with dashed trail; low-poly peaks + landmarks line the bottom.
      3. Floating search widget overlapping the hero bottom — FOLDER TAB look: light-blue strip (#F0F7FE) across the card top with rounded top corners; active tab is a white folder tab merging into the card body with 3D PNG icon (✈ airplane / hotel / car / admission tickets); fields row below: From "New York, USA" ⇄ To "Paris, France", Depart "12 Jun, 2025" + calendar PNG, Return "20 Jun, 2025" + calendar PNG, Travelers "2 Adults ▾" + solid blue "Search".
      4. Feature row, 4 white cards: Best Price Guarantee / Secure Booking / 24/7 Customer Support / Custom Travel Packages — icon in 46px #EAF3FC rounded square.
      5. POPULAR PACKAGES inside one white rounded-24 container: header + "View All Packages →"; 4 cards — photo (h 150), Poppins title, 📍 location + ⏱ duration, blue price + "Per Person", gold ★ rating, circle arrow (fills blue on hover): Greek Islands Escape $1,299 4.8 / Maldives Paradise $1,599 4.9 / Canadian Rockies $1,799 4.7 / Japan Discovery $2,199 4.9.
      6. PRICING DETAILS on a blue gradient rounded panel with paper-plane + cloud props: 4 glass tiers (rgba(255,255,255,0.14) + blur, white checklist ✓) — Economy $499, Premium $899, Business $1,499, Luxury $2,499. The POPULAR tier is solid white, lifted -14px, dark "Most Popular" pill on top, only solid-blue "Select Plan".
      7. HOW TO BOOK: ONE white rounded bar containing 4 steps side by side (3D PNG icons: round pushpin Choose Destination / package Select Package / credit card Make Payment / airplane departure Enjoy Your Trip), icon left + bold title + muted line right, joined by dashed blue connectors with ▸ arrowheads.
      8. Stats bar, blue gradient rounded panel: 150+ Destinations / 10K+ Happy Travelers / 500+ Travel Packages / 24/7 Support with thin white dividers + glass testimonial card (❝ quote — Sarah J., New York, USA, gold ★★★★★) + low-poly paper heart peeking from the corner.
      9. Footer on deep navy #0F2B4D (the only dark surface): logo + tagline, Company / Support / Top Destinations columns, thin copyright bar.

      Spacing: 1240px container, 24px gutters, 34–48px between sections, 18–20px card gaps. Radius 24/16/10/999. Motion: plane floats 5s ease-in-out alternate, cards lift -4px on hover, everything else instant.

      Guardrails: never use a photo in the hero (SVG paper world only), never harsh black shadows, never more than one script-font moment, never a second accent color — gold appears only as ★ ratings, keep the footer navy so the page keeps its air.
  - label: Hero & destination image direction
    text: |
      Generate image assets for a Paper Skies Travel page about [SUBJECT — e.g. "worldwide travel packages / tour operator"].

      Direction A — destination card photos: bright, airy travel photography with blue dominance — Santorini blue domes, Maldives overwater villas, turquoise alpine lakes (Moraine Lake), Japan pagoda with cherry blossoms. Shot in soft daylight, saturated but clean, landscape 4:3, no people in frame. Each photo must read at 150px tall. Avoid: night shots, heavy filters, crowds, interiors.

      Direction B — hero art (if not SVG): 3D paper-craft diorama on a sky-blue gradient — white paper plane with visible fold facets, low-poly white mountain peaks, tiny paper landmarks (Eiffel Tower, Big Ben, Burj Al Arab), soft cumulus clouds, dashed flight trail looping behind the plane. Soft studio light, subtle paper texture, pastel blue + white palette only. Render 2000×1200, clean negative space on the left for the headline. Avoid: realistic photography, dark moody skies, warm orange sunsets, text in image.
  - label: Search widget & pricing polish
    text: |
      Polish these components in the Paper Skies Travel language without changing content:

      - Search widget: white card radius 20, shadow 0 24px 60px rgba(20,80,150,0.22), padding 18/22. Tabs: 13.5px bold, active = #EAF3FC pill radius 10 with #2E7CD6 text. Fields: 1.5px #E3EDF7 border, radius 10, bg #FBFDFF, 10.5px uppercase label #8AA2B8 + 13.5px bold #16324F value. Swap = 34px #EAF3FC circle. Search button: solid #2E7CD6, radius 10, hover #2568B8.
      - Package cards: radius 16, 1px #EDF3FA border; photo h150; title Poppins 15.5; meta 11.5px #5E7893 with 📍/⏱; price Poppins 700 19px #2E7CD6 + "Per Person" 10px; rating #F2A63B; 32px arrow circle 1.5px #D8E8F8 → fills #2E7CD6 with white arrow on hover; card lifts -4px with shadow rgba(30,90,160,0.16).
      - Pricing tiers: glass rgba(255,255,255,0.14), 1px rgba(255,255,255,0.35) border, blur 4px, radius 18; checklist 12.5px with ✓; Select Plan = glass button 1.5px white border. Popular tier: solid #FFF, translateY(-14px), shadow 0 26px 60px rgba(10,50,100,0.35), price #2E7CD6, dark #16324F "Most Popular" pill at top:-13px, Select Plan solid #2E7CD6.
      - Steps: white cards radius 16, 52px #EAF3FC icon square radius 15, bold 13.5px title, 11.5px muted line; connectors = 46px wide 2.5px dashed #B9D7F0 aligned to icon centers.
      Keep all shadows blue-tinted (never pure black), radius consistent, and the blue #2E7CD6 as the only action color.
---

## Why this family exists

Distilled from the "Travel Around The World" agency reference. It proves that **a sky gradient plus one paper-craft prop can make a booking page feel dreamy instead of corporate**: the hero is pure SVG atmosphere (plane, dashed trail, low-poly peaks, landmark silhouettes), the search widget floats like a cloud, and every card keeps the soft-blue shadow system. Trust comes from the crisp blue actions; wonder comes from the paper world.

## When to reach for it

- Travel agencies, tour operators, booking platforms, airline/hotel landing pages
- Any product that sells "places" and needs an airy, optimistic first screen
- Pages that want illustration-led heroes without losing a serious booking flow

## Anti-patterns (instantly break the vibe)

- A photographic hero — the paper-craft SVG world IS the identity
- Harsh black shadows or flat gray borders — every shadow is blue-tinted and soft
- A second accent (orange sunsets, teal) — gold exists only as ★ ratings
- More than one script-font moment — "Explore. Dream. Discover." is the only one
- Cramped booking forms — the search widget must float with room to breathe

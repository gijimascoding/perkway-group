# Design System — Perkway Group

One sentence governs every choice below: **patient capital, generational horizon.**
The peers lead with size. Perkway leads with time. When two options are
otherwise equal, pick the one that reads older, slower and quieter.

## Product Context
- **What this is:** The public website of Perkway Group, a holding company with
  real estate, hospitality, technology and property-management businesses across
  four countries. It exists to be found, checked and trusted; it does not sell.
- **Who it's for:** Family offices and allocators screening a co-investment
  partner; institutional counterparties (lenders, brokers, operators) doing
  diligence before a call; senior candidates; press.
- **Space/industry:** Diversified real-asset holding companies. Peers reviewed
  September 2026: Blackstone, Brookfield, Related, Starwood Capital, Tishman
  Speyer. All five use a serif display, a navy or near-black accent, a stats
  band in the first fold, and dusk skyline photography. That is the field this
  site has to be distinguishable from.
- **Project type:** Marketing site, editorial in register. Static routes from
  `src/data/company.ts`, Next.js 15, Tailwind v4 tokens in `src/app/globals.css`.

## Aesthetic Direction
- **Direction:** Refined editorial: the annual report of a family office, not
  the brochure of an asset manager.
- **Decoration level:** Minimal. Hairlines and air do the structural work. No
  cards with shadows, no gradients, no icons that decorate rather than name.
- **Mood:** Unhurried and exact. A reader should feel the firm has been here a
  while and will still be here, and that every figure on the page could be
  checked. Nothing moves faster than it needs to; nothing is louder than the
  headline.
- **Reference sites:** blackstone.com, brookfield.com, related.com,
  starwoodcapital.com, tishmanspeyer.com. Captures and notes are in
  `~/.gstack/projects/gijimascoding-perkway-group/designs/design-system-20260907/`
  and the research folder from the consultation session.
- **The one memorable thing:** time before size. The About figure on the home
  page is the founding year, set large, with a ruled ledger of years beneath it.
  AUM and unit counts stay in the stats band where the screener expects them,
  but the first number in the story is a year.

## Typography
- **Display/Hero:** Source Serif 4, weight 400, optical size axis on. Already on
  the site; it is the right face and it stays. Negative tracking at display
  sizes (-0.012em h1, -0.008em h2). Never bold above h3.
- **Body:** Source Sans 3, 400/500/600. Replaces Inter. Drawn by the same hand
  as the serif, so paragraphs and headings stop reading as two suppliers. Load
  via `next/font/google` like the serif, `display: swap`.
- **UI/Labels:** Same as body. Eyebrows and buttons at 12px, 600, letter-spaced
  0.14em (eyebrows) or 0.06em (buttons), uppercase.
- **Data/Tables:** JetBrains Mono, 400/500, `font-variant-numeric: tabular-nums`,
  12 to 13px. For dates, year ticks, "as of" lines, address blocks, table cells
  and footnotes. Never for headings and never for body prose.
- **Code:** JetBrains Mono (not expected on the public site).
- **Loading:** `next/font/google` for all three families, self-hosted at build,
  `display: swap`, subsets `latin`. Fallback stacks: Georgia / system-ui /
  ui-monospace.
- **Scale (six sizes, no others):**
  | Token | Size | Line | Use |
  |---|---|---|---|
  | `t-micro` | 12px | 1.45 | eyebrows, buttons, mono data, footnotes |
  | `t-small` | 15px | 1.55 | secondary prose, nav, table cells, captions |
  | `t-body` | 17px | 1.65 | default prose and leads |
  | `h3` | 22px | 1.3 | row and card headings, dialog titles (serif 600) |
  | `h2` | clamp(28px, 2.8vw, 44px) | 1.16 | section headings |
  | `h1` | clamp(38px, 4.4vw, 68px) | 1.08 | page hero |
  | `display-xl` | clamp(40px, 5.4vw, 76px) | 1.06 | one per page at most: the statement heading |
- **Measure:** body max 68ch; leads 52ch; headings 17 to 22ch.

## Color
- **Approach:** Restrained. One accent, rationed.
- **Primary (ink):** `#16181c` ink-900. Headings, primary buttons, footer,
  rules that mean "start of a list". Ramp: ink-800 `#24272c`, ink-700 `#3a3d42`,
  ink-600 `#565a61`, ink-500 `#6c7178` (smallest text allowed on paper: 4.6:1),
  ink-400 `#9aa0a8` (decorative only, never text).
- **Paper:** paper-100 `#f7f5f0` page ground, paper-50 `#ffffff` raised
  surfaces (inputs, dialogs), paper-200 `#f1eee7` image placeholders.
  Hairline `#e4e2dd`; on ink, `rgba(255,255,255,.14)`.
- **Accent:** verdigris `#2F6B5C` (hover `#25574a`). Replaces navy `#1c3d5a`.
  Navy is what every peer uses; verdigris is the color of a bronze plaque that
  has been outside for a century, which is the point.
  **Accent ration:** the accent may touch only (1) elements that represent time:
  year figures, the founding-year ledger rule, dates in mono; (2) the active
  nav link underline; (3) focus rings; (4) link underlines and the hover color
  of text links. It never fills a button, colors an icon, tints a background or
  becomes a hover fill. Four to six appearances on the home page is correct.
  More than that and it stops meaning anything.
- **Semantic:** success `#2F6B5C` (the accent doubles; a sent form is a good
  thing that happened at a moment in time), warning `#8a6d3b`, error `#b42318`,
  info ink-700. Rendered as a 2px left rule on a hairline box, never a filled
  banner.
- **Photography:** hero, subpage and insight images run in full colour with the
  existing ink scrim for type contrast. Portraits only are grayscale. A
  site-wide grayscale treatment was tried on 2026-09-07 and rejected by the
  user as depressing; do not reintroduce it. Until owned-asset photography
  exists, keep the set coherent by subject (architecture, cities at dusk) rather
  than by filter.
- **Dark mode:** none. The site is always paper. A token-remapped dark mode
  following the system preference shipped on 2026-09-07 and was removed the
  same day: the user wants the one paper background in every setting. Do not
  add a dark scheme or a `prefers-color-scheme` block; `color-scheme: light`
  stays in the viewport export.

## Spacing
- **Base unit:** 8px. 4px allowed only inside components (label to input,
  icon to text).
- **Density:** Spacious. The air is the decoration.
- **Scale:** xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(96) 5xl(120)
  6xl(200).
- **Section rhythm:** 200px between statement sections on desktop, 120px
  between ordinary sections, 80px on phones. Stats bands 64px.
- **Component internals:** buttons 52px tall, 32px side padding; inputs 12px by
  16px; stat cells 20px left padding behind a hairline; team grid 32px column
  gap, 48px row gap.

## Layout
- **Approach:** Grid-disciplined. Twelve columns, content always sits on the
  grid, asymmetry comes from leaving columns empty (the About split is 6 / 1 /
  5), not from breaking the grid.
- **Grid:** 12 columns at 1440; 8 at tablet (768 to 1024); 4 at phone.
  Gutters 32 / 24 / 16.
- **Max content width:** 1440px, 80px side padding at desktop, 48 tablet,
  24 phone. Prose never wider than 68ch.
- **Border radius:** 0 everywhere. The only round shape on the site is the
  40px circle on the "Learn more" arrow link, and it stays round so the arrow
  reads as the one thing that moves.
- **Rules:** a 1px ink-900 rule opens a list (board rows, tables); a 1px
  hairline separates items; a 64px centered ink rule opens a statement section
  above its kicker. Rules encode structure; they are never used as decoration
  between unrelated blocks.
- **Nav:** 72px bar, wordmark left with the PG monogram in a 36px box, five
  links, outlined "Investor Inquiries" button. Active link gets the verdigris
  underline. Phone: full-screen menu, same order.
- **Home hero:** paper, not a full-bleed photograph. The headline stacks in
  three lines on the left seven columns at clamp(40px, 5.4vw, 80px); the dusk
  skyline sits as a 4:5 panel with a hairline frame on the right four columns
  (16:10 on phones, below the buttons); the foot of the hero is a 1px ink rule
  carrying the office clocks: London, Toronto and New York to the minute, city
  in the sans, time in the mono in the accent. One page-load moment: the three
  lines rise in turn, then everything else fades in. Nothing ambient. The nav
  is solid from the top on this page because the first section is paper.
- **Section rail (home, 1280px and up):** a column of 20px ticks fixed at the
  right edge, one per section, the active one 32px in the accent. Labels appear
  on hover or focus, and the active label stays at 1600px and wider. Visible
  only between the first section and the last; the hero and footer stay clean.
- **Dialogs:** paper-50 panel with a hairline frame on an ink scrim at 80%.
  Enter: 400ms fade and 12px rise. Exit: instant. The page behind is `inert`;
  Escape, the X, a visible Close link and the scrim all close it.

## Motion
- **Approach:** Intentional. One page-load reveal per section, one hover
  behavior per interactive element, nothing ambient.
- **Easing:** enter `cubic-bezier(.2,.7,.2,1)` (ease-out), exit ease-in, move
  ease-in-out.
- **Duration:** micro 100ms (focus ring, checkbox), short 200ms (nav underline,
  input border), medium 400ms (dialog open), long 600ms (button fill, arrow
  circle fill), reveal 1000ms (scroll reveal: 24px rise plus fade, once,
  staggered 80ms across siblings).
- **Rules:** Scroll reveals fire once and never re-run. Nothing animates on a
  loop. The carousel pauses on hover, on focus and on
  `prefers-reduced-motion`; with reduced motion every reveal is instant and every
  fill is a color change with no transition. Never animate width, height or
  layout; only opacity, transform and color.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-09-07 | Initial design system created | Created by /design-consultation from product context, five-peer research and a second-voice review by a Claude subagent. Preview: `~/.gstack/projects/gijimascoding-perkway-group/designs/design-system-20260907/preview.html`. |
| 2026-09-07 | Governing sentence "patient capital, generational horizon" | User's choice (D3). Every token below is tested against it. |
| 2026-09-07 | Keep Source Serif 4; move body from Inter to Source Sans 3; add JetBrains Mono for figures | One drawing hand for serif and sans; mono makes dates and figures read as record, not copy. |
| 2026-09-07 | Accent verdigris `#2F6B5C` replaces navy `#1c3d5a`, rationed to time elements, active nav, focus and links | All five peers use navy. Verdigris is the color of aged bronze and it is the one thing that says "time" without a word. Agent default, confirmed by the user at D7. |
| 2026-09-07 | Time before size: founding year is the first figure in the story; AUM stays in the stats band | The screener still finds AUM in the first fold; the narrative leads with the horizon. |
| 2026-09-07 | Home hero rebuilt on paper with the office clocks | The full-bleed dusk skyline with a white headline is the opening every peer uses. The firm's day across its three offices is the one thing no peer shows and it says time without a word. The photograph stays, framed, in colour. |
| 2026-09-07 | Dark mode removed; section rail and dialog motion stay | Dark mode followed the system preference and turned the site black for the user, who wants the paper background everywhere. Rail and dialog built with the project's own primitives; only the active rail tick carries the accent. |
| 2026-09-07 | Photography stays in colour; grayscale rejected | The duotone was shipped in b1319ce and reverted the same day: the user found the black-and-white hero depressing. Portraits remain grayscale. |
| 2026-09-07 | Border radius 0; hairlines and air instead of cards and shadows | Annual-report register; the SaaS card kit is the generic default. |
| 2026-09-07 | Second-voice divergences recorded, not adopted | Subagent proposed no motion at all, bone paper `#ECE7DC`, Klim faces (Signifier / Untitled Sans / Söhne Mono) and a live day-counter. Kept as notes: Klim licensing is a client decision, the counter is a gimmick until the year is on the page, the motion budget above is already small. |

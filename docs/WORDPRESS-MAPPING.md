# React → WordPress migration guide

This React site is a **design blueprint** for a WordPress rebuild of wavcomm.com. Every part is
structured so it maps to a native WordPress concept, with no JS-only effects that WordPress
couldn't reproduce.

**Recommended target:** a **block theme** (Full Site Editing) — `theme.json` + block templates +
block patterns. It needs no page-builder plugin, and the tokens/CSS here port almost 1:1.
(If you'd rather use Elementor/Divi/etc., the same table applies: Section → Container/Section,
Columns → Row/Column.)

## 1. Source layout → WordPress

| React (this repo) | WordPress |
| --- | --- |
| `src/styles/tokens.css` | `theme.json` → `settings.color.palette`, `typography.fontFamilies`, `spacing`, `layout` |
| `src/styles/base.css` | `theme.json` → `styles.*` (+ small bits in `style.css`) |
| `src/styles/blocks.css` + `sections.css` | `style.css` / `assets/css/*.css`, enqueued with `wp_enqueue_style` (copy as-is) |
| `wordpress/count-up.js` | Theme JS, `wp_enqueue_script(..., true)` — the only script the design needs besides the core Navigation block |
| `src/content/site.ts` | The actual page content in the editor (see §3) |
| `src/components/layout/Header.tsx` | `parts/header.html` (Site Logo + Navigation + Buttons blocks) |
| `src/components/layout/Footer.tsx` | `parts/footer.html` (Columns + Navigation + Paragraph blocks) |
| `src/pages/*.tsx` | Pages: **Home**, **Services**, **Contact Us** (+ `404.html` template) |
| `src/sections/Blocks.tsx` | Block patterns in `/patterns/*.php` (or Synced Patterns) |
| `public/images/*` | Media Library uploads |
| `index.html` `<head>` | `wp_head()` — fonts via `theme.json` `fontFace` or `wp_enqueue_style` |

## 2. Design tokens → `theme.json`

| CSS variable | theme.json |
| --- | --- |
| `--wb-color-background #090e12` | palette `background` |
| `--wb-color-surface #0f161b`, `--wb-color-card #12191f`, `--wb-color-secondary #1f282e` | palette `surface`, `card`, `secondary` |
| `--wb-color-foreground #f3f2ee`, `--wb-color-muted #95a0a9`, `--wb-color-border #2a343c` | palette `foreground`, `muted`, `border` |
| `--wb-color-primary #ff771f` (hover `#ff8c42`) | palette `primary` (button background) |
| `--wb-color-accent #f7a224`, `--wb-color-signal #00cdee` | palette `accent`, `signal` |
| `--wb-font-display` Archivo Black / `--wb-font-body` Inter / `--wb-font-mono` JetBrains Mono | `typography.fontFamilies` (self-host the files for GDPR/performance) |
| `--wb-content 1200px` / `--wb-wide 1360px` | `layout.contentSize` / `layout.wideSize` |
| `--wb-radius 2px` | `styles.blocks.core/button.border.radius` |

Keep the `--wb-*` names in the CSS and expose them from `theme.json` as custom properties
(`settings.custom.wb.*`), or search-and-replace to WordPress's `--wp--preset--*` variables.

## 3. Components → blocks / patterns

| React component / class | WordPress block(s) |
| --- | --- |
| `Section` `.wb-section` (+ `--alt`) | **Group** (align: full) with inner **Group** at content width; `--alt` = background `surface` |
| `SectionHead` `.wb-eyebrow` + `h2` + `p` | **Paragraph** (class `wb-eyebrow`) + **Heading** + **Paragraph** |
| `Hero` `.wb-hero` | **Cover** (image, dim overlay via CSS) + Heading + Paragraph + **Buttons**; stats = **Columns** (4) |
| `PageHero` `.wb-pagehero` | **Cover**, shorter, with H1 + paragraph |
| `CardGrid` `.wb-grid` / `.wb-card` | **Columns** (3) → **Group** per card (number paragraph, H3, paragraph). CSS hover is pure CSS. |
| `Split` `.wb-split` | **Media & Text** (set "image on right" for `--reverse`) |
| `Checklist` `.wb-checklist` | **List** with class `wb-checklist` (the tick is a CSS `::before` — swap the inline SVG for a mask-image background if desired) |
| `Steps` `.wb-steps` | **Columns** or an **ordered List** with class `wb-steps` (numbers come from CSS counters) |
| `Pillars` `.wb-pillars` | **Columns** (3) → **Group** with left border |
| `Faq` `.wb-faq` | One **Details** block per question — it's the same native `<details>` element |
| `CtaBand` `.wb-cta` | **Cover** + Heading + Paragraph + Buttons |
| `Hero` full-screen height | **Cover** with `minHeight` = `calc(100svh - 72px)` (the `.wb-hero` CSS does this); stats row pinned to its bottom |
| `CountUp` / `StatsBand` metrics | Any element with `data-count-to="30"` `data-count-suffix="+"` + `wordpress/count-up.js` (enqueue in the footer). Falls back to the written number without JS / with reduced motion |
| `CardGrid` icons `.wb-card__icon` | Inline SVG in a **Custom HTML** block, or an **Image** block (SVG) inside the card Group |
| `Anatomy` + `TowerDiagram` | **Columns**: left = **Custom HTML** block containing the SVG from `TowerDiagram.tsx`; right = ordered **List** (`.wb-anatomy__list`) |
| `Gallery` `.wb-gallery` | **Gallery** block (or Group of Images) with class `wb-gallery`; add `wb-gallery__item--tall` / `--wide` to individual images |
| `Callout` `.wb-callout` | **Group** with class `wb-callout` (icon + heading + paragraph) |
| `QuickActions` `.wb-quick` | **Columns** (3) of linked Groups |
| `PageHero` chips `.wb-chips` | **Buttons** block (links to `#anchors`) with class `wb-chips` |
| `Button` `.wb-btn` | **Button** block; add class `wb-btn--ghost` for the outline style |
| Header `.wb-header` (sticky) | Header template part, Group with `position: sticky` (block supports) or the `.wb-header` CSS |
| Mobile menu `.wb-mobile` | The core **Navigation** block's built-in overlay menu — no custom code |
| Contact form `.wb-form` | A form plugin: **Contact Form 7**, **WPForms** or **Gravity Forms** (field list below) |
| Map `.wb-map` | **Custom HTML** block with the same `<iframe>`, or the **Embed** block |

Most `.wb-*` classes can be added to blocks via *Advanced → Additional CSS class(es)*, so
`blocks.css` keeps working untouched.

## 4. Pages & navigation

Menu (Appearance → Editor → Navigation): **Home**, **Services**, **Contact Us**.

| Page | Slug | Content source |
| --- | --- | --- |
| Home | `/` (set as static front page) | `home` in `site.ts` |
| Services | `/services/` | `servicesPage`, `constructionServices`, `testingServices` |
| Contact Us | `/contact/` | `contactPage`, `siteInfo.contact` |

Anchors used by links: `#process`, `#construction`, `#testing`, `#bid` — add them as the
**HTML anchor** of the matching Group/Details blocks. Switch from
`?page_id=7` style URLs to **Settings → Permalinks → Post name** and add 301 redirects
from the old `/?page_id=7` (Services) and `/?page_id=15` (Contact) URLs.

Optional upgrade: make Construction and Testing items a **Service custom post type** so the
lists on Home and Services pull from one source.

## 5. Contact form fields

`Name*` · `Company` · `Email*` · `Phone` · `Project type` (select: Tower erection / building;
Antenna & line installation; Rooftop installation / co-locate; Site civil work; Testing &
documentation; Other) · `Project details*` (textarea). Route submissions to the operations inbox
(the live site doesn't publish an email address — confirm with the client) and turn on spam
protection (honeypot / reCAPTCHA / Turnstile).

## 6. Global settings

- **Site title:** Wavcomm, Inc. — **Tagline:** Licensed contractor since 1995, providing construction services nationwide.
- **Contact:** Kevin Crayne, Operations Manager, Western Region · 1429 S. Cucamonga Ave., Ontario, CA 91761 · Phone 909-923-0852 · Fax 909-923-0854
- **Logos:** originals are in `assets/brand/` (`logo-full-original.jpg`, `logo-mark-original.jpg` — black on white). For the dark theme they were converted to transparent, light-on-dark PNGs in `public/brand/` (`logo-full.png` header + footer, `logo-mark.png` 404 page, `favicon.png` / `apple-touch-icon.png` from the mark). In WordPress: upload `logo-full.png` as the **Site Logo**, and `favicon-192.png`/`apple-touch-icon.png` as the **Site Icon** (needs ≥512px — upscale from the mark or ask the client for a vector).

## 7. Migration steps

1. Install WordPress (current version) on staging; create a block theme (or start from Twenty Twenty-Five).
2. Copy `tokens.css` values into `theme.json`; enqueue `blocks.css` + `base.css`.
3. Upload `public/images/*` to the Media Library (all are Unsplash photos — free to use;
   they are illustrative stock, so swap in the client's real project photos when available,
   especially in the gallery sections).
4. Build the header/footer template parts, then the three pages from the patterns above.
5. Add the form plugin and the map embed on Contact Us.
6. Add an SEO plugin (title/description per page), and set permalinks + redirects.
7. QA at 390 / 820 / 1440 px against the React build (`npm run dev`), then go live.

## 8. About the existing live site (worth knowing before cutover)

- It runs **WordPress 4.5.32** — a very old release with known vulnerabilities.
- Its pages contain **injected links to unrelated essay-writing/spam sites** (visible in the
  Home, Services and Contact page text), which strongly suggests the site was compromised.
  Don't copy the old database/theme into the new build; rebuild clean from this blueprint, and
  have the host scan the old install. Change all passwords (WP admin, hosting, FTP).
- Content here was taken only from the genuine text: since 1995, nationwide, service lists,
  testing list, address/phone/fax and contact person. Design-only copy (process steps, FAQ,
  pillars wording) is generic and makes no claims beyond that.

## 9. Client research report → how it was applied

`docs/reference/wavcomm-website-research-2026-03-24.pdf` is an **internal** analysis (Wavcomm vs. competitors) with recommendations for the rebuild. It is deliberately kept out of `public/` (so it is never served) and git-ignored (the GitHub repo is public), so it only exists locally. What was used:

| Recommendation in the report | Where it is in the build |
| --- | --- |
| Lead with "Nationwide Telecommunications Construction Since 1995" and the 30 years of experience | Home hero eyebrow + "30+ Years of experience" metric (counts up) |
| Describe Wavcomm as a licensed general contractor specializing in telecom infrastructure & wireless tower construction (installation, modification, testing of cellular & communication towers) | Hero text, About section, footer tagline, FAQ, `<meta description>` / page title |
| Split Services into distinct sections: Tower Construction & Erection · Civil Site Development · Antenna & Line Installation · Advanced RF & PIM Testing · Maintenance & Upgrades | Services page (5 anchored sections + jump chips), Home capability cards (each links to its section), footer service links. Make each its own WordPress page later if you want dedicated landing pages for SEO |
| Prominent "Request a bid" CTA top-right; clickable phone in header and footer | Header button + `tel:` links, footer, CTA bands |
| Mobile-responsive, modern platform, HTTPS | Responsive build; **enable SSL/HTTPS on the new host before launch** (the old site has none) |
| High-resolution full-width imagery | Full-bleed hero/CTA photos and gallery mosaics (stock for now — replace with real crew/project photos) |
| Safety section | Home "Safety" section. It only states things from the live site; the `safety.credentials` list in `site.ts` is empty and renders OSHA/NATE-style badges once the client supplies real ones |

**Still needed from the client** (the report recommends them, but they cannot be invented): safety record / certifications, "Trusted by" client or carrier logos, project case studies with real photos, a Careers page (and whether they are hiring), and — only if they actually do the work — 5G / Small Cell / DAS / EV-charging capabilities.

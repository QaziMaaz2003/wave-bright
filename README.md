# wave-bright

Redesigned website for **Wavcomm, Inc.** — a licensed contractor (since 1995) providing tower
construction, antenna & line installation, site civil work and RF testing nationwide.

- **Content reference:** wavcomm.com (WordPress)
- **Theme reference:** wave-bright-revamp.lovable.app (dark navy, signal orange, Archivo Black / Inter / JetBrains Mono)
- **Imagery:** Unsplash (stored in `public/images`)
- **Brand:** client logos in `assets/brand` (originals) and `public/brand` (light-on-dark PNGs)
- **Research:** the client's internal website research report lives locally in `docs/reference/` (git-ignored — the repo is public, so it is not committed)

Built with Vite + React + TypeScript + plain CSS. The code is deliberately structured as a
**blueprint for a later WordPress rebuild** — see [docs/WORDPRESS-MAPPING.md](docs/WORDPRESS-MAPPING.md).

## Scripts

```bash
npm install
npm run dev       # http://localhost:5175 (next free port if taken)
npm run build     # type-check + production build to dist/
npm run preview
```

## Structure

```
src/
  content/site.ts        all copy (→ WordPress page content / globals)
  styles/tokens.css      design tokens (→ theme.json)
  styles/base.css        reset + element styles
  styles/blocks.css      every component's CSS (portable as-is)
  components/layout/     Header, Footer, Layout (→ template parts)
  components/ui/         Button, Section, Icon
  sections/Blocks.tsx    reusable section patterns (→ block patterns)
  pages/                 Home, Services, Projects, Careers, Contact, NotFound
```

## Contact form

The form has no backend. Set `VITE_FORM_ENDPOINT` (e.g. a Formspree URL) in `.env.local` to
receive submissions; without it the form tells the visitor to call instead. In WordPress it is
replaced by a form plugin.

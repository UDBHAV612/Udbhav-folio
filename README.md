# Udbhav Chabbra · Portfolio

A responsive Next.js App Router portfolio with TypeScript, Tailwind CSS, Motion, and Lucide icons. Dark design, accessible navigation, reduced-motion support, three project detail pages, downloadable resume, generated Open Graph image, sitemap, and robots route.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To check a production version:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Update content

All personal content lives in `lib/portfolio.ts`. Verified facts come from `Udbhav_Chabbra_Resume.pdf`; BakeFlow AI is explicitly in development. BakeFlow uses real application screenshots; other projects retain their abstract illustrations.

The GitHub profile is user-verified. Supply individual project repository URLs and demo URLs in this file when available. Null links are omitted from the interface. `decisions` records verified implementation choices without invented rationale. `challenges` and `lessons` are editable arrays: their sections and case-study navigation links appear only when source-backed notes are added. No retrospective claims are inferred from the technology stack. Replace `public/Udbhav_Chabbra_Resume.pdf` when the resume changes.

## Deploy on Vercel

1. Push this project to a Git repository and import that repository into Vercel.
2. Keep the detected Next.js framework preset and default build settings.
3. Set `NEXT_PUBLIC_SITE_URL` to your real production origin (for example your assigned Vercel URL, without a trailing slash).
4. Deploy, then confirm `/sitemap.xml`, `/robots.txt`, project pages, and the resume download.

For local metadata verification, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`. Without it, the sitemap intentionally returns no URLs rather than inventing a domain. No backend service or secret is required.

## Architecture

- `app/`: server-rendered homepage, statically generated project routes, metadata and SEO endpoints.
- `lib/portfolio.ts`: central content and nullable URL configuration.
- `components/ui.tsx`: reusable project illustrations, cards, tags, and headings.
- `components/interactions.tsx`: mobile navigation, clipboard feedback, progressive reveal animation.
- `app/globals.css`: responsive design system and reduced-motion rules.

No stock photography, fabricated metrics, fake demos, or fake product screenshots are used. A system font stack avoids remote font requests. Reveal animations enhance already-visible server-rendered content.

## Verification

Lint, TypeScript, and production build passed. Desktop and 390px/320px mobile layouts were inspected in Chrome; no horizontal overflow was found. Mobile navigation, Escape to close the menu, project navigation, and copy-email feedback were verified. All public routes returned 200, unknown projects returned 404, and the served resume matched the original PDF byte for byte.

`npm audit --omit=dev` reported zero production vulnerabilities. The full audit reported five high advisories in the development-only Next.js ESLint dependency chain (braces / micromatch / fast-glob). The registry offered no patched braces release at verification time; the suggested automatic fix downgrades the Next.js lint configuration and was not applied. Recheck tooling advisories when updating dependencies.

## Real project screenshots

BakeFlow captures live in `public/images/bakeflow/`. For future projects, place real application captures in `public/screenshots/`, then populate that project's `screenshots` array in `lib/portfolio.ts`. Each entry requires `src` (starting with `/images/` or `/screenshots/`), descriptive `alt`, `caption`, and the original pixel `width` and `height`. Use filenames and captions that describe the real captured view; never populate this array with abstract artwork or fabricated application screens.

The first screenshot becomes the project-card cover and the featured image in the detail gallery. Additional screenshots use a responsive two-column grid that stacks on mobile. Images preserve their aspect ratios, use Next.js image optimization, and link to the original in a new tab for full-size viewing. Empty arrays retain the existing abstract illustrations. Provide source-backed project notes to populate challenges and lessons learned.

Refinement verification covers higher text contrast, 320px/390px/tablet/desktop layout checks, screenshot rendering branches, unchanged project routes and resume downloads, and lint/TypeScript/build checks.

Run the focused screenshot rendering checks with `npx tsx scripts/verify-project-media.tsx`. The test uses rendering-only fixture URLs and does not publish fabricated screenshot files.

# BangladeshAI.org

Production-ready bilingual (English + Bangla) website for BangladeshAI.org — an independent AI policy research platform for Bangladesh.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3 with custom brand tokens
- **Language**: TypeScript
- **Fonts**: Plus Jakarta Sans (headings) + Source Serif 4 (body) + Noto Sans Bengali (Bangla) via `next/font/google`
- **Content**: MDX files parsed with gray-matter
- **Deployment**: Static site (Vercel/Replit)

## Brand Colors

- Deep Green (primary): `#006A4E` (`bd-green`)
- Intelligence Blue: `#0F4C81` (`primary-blue`)
- Dark Slate: `#1A2332` (`primary-navy`)
- Accent Red: `#E8432A` (`bd-red`)
- Warm Gray bg: `#F5F5F0` (`bg-light`)
- Teal: `#00897B` (`bd-teal`)
- Sage: `#E8F5E9` (`bd-sage`)

## Dark Mode

CSS variable approach. `ThemeProvider` in `lib/theme-context.tsx` applies `.dark` class to `<html>`. `darkMode: 'class'` in `tailwind.config.ts`. Persisted in `localStorage`. `suppressHydrationWarning` on `<html>` and `<body>` prevents hydration mismatches.

**Color Token Rules (MUST follow for dark mode support):**
- Use `bg-bg-surface` (never `bg-white`) for card/section backgrounds — maps to `#FFFFFF` (light) / `#1E293B` (dark)
- Use `bg-bg-light` for page-level section backgrounds — maps to `#F5F5F0` (light) / `#0F172A` (dark)
- Use `text-text-primary` (never `text-gray-900`) — maps to `#1A2332` (light) / `#F1F5F9` (dark)
- Use `text-text-secondary` (never `text-gray-500`) — maps to `#64748B` (light) / `#94A3B8` (dark)
- Use `border-border-color` — maps to `#E2E8F0` (light) / `#334155` (dark)
- Category badges must include both light and dark variants: `bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300`
- Article prose content must use `prose-slate dark:prose-invert`

## Site Architecture

| Route | Page |
|-------|------|
| `/` | Home (hero, 6-stat bar, global comparison table, Who It's For) |
| `/reality-check` | Bangladesh AI Reality Check 2026 — full scorecard & analysis |
| `/for-citizens` | AI for Citizens — **Bangla-first** content |
| `/mission` | Mission — what it is/isn't, 5 pillars, independence pledge |
| `/why-now` | Why Bangladesh Must Act Now — gap viz, 5 urgency points, CTA |
| `/research` | Research Hub — 10 cards with category filter pills (All/Policy/Economy/Technology/Education/Global) |
| `/research/[slug]` | 10 research papers with generateMetadata(); reads from MDX content/research/en/ |
| `/roadmap` | Bangladesh AI Roadmap 2026–2033 — 4-phase timeline (100 Days/Year 1/3 Years/7 Years) with named institutions and measurable milestones |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post (9 EN + 9 BN posts) |
| `/for-government` | Smart Bangladesh pillars, 20-ministry table, procurement, policy framework |
| `/for-students` | AI for Students — learning paths |
| `/about` | About — values, research methodology, sub-page links |
| `/about/emon-hossain` | Founder bio — EN+BN statement, 5 philosophical pillars, contact, social links (LinkedIn/Twitter/GitHub) |
| `/about/independence` | Independence Statement — No/Yes lists, 4 principles, signed pledge |
| `/about/methodology` | Methodology Note — 3 claim types, primary sources list |
| `/contact` | Contact — 3 pathways, Formspree form, fallback mailto |
| `/faq` | FAQ — 15 questions EN+BN accordion |
| `/newsletter` | Bangladesh AI Briefing — subscribe form (NEXT_PUBLIC_NEWSLETTER_FORM_ID) |
| `/resources` | Downloads Hub — 4 PDF cards + research paper links |
| `/press` | Press Kit — brand assets, founder bio for press, media contact |

## Page Architecture Pattern

Pages that need `generateMetadata()` use a server/client split:
- `app/[route]/page.tsx` — Server component, exports `generateMetadata` + `metadata`, renders the client component
- `app/[route]/[Name]Client.tsx` — `'use client'` component with all bilingual interactive content

## Bilingual System

- Context: `lib/language-context.tsx` — `useLanguage()` hook
- Translations: `lib/translations/en.ts` and `lib/translations/bn.ts`
- Toggle: Header language toggle (EN | বাংলা), persisted in `localStorage`
- For-citizens page is Bangla-first (full Bangla regardless of toggle for most content)

## Content

- Blog posts: `content/blog/en/*.mdx`
- Research papers: `content/research/en/*.mdx`
- Frontmatter: `title`, `slug`, `date`, `category`, `excerpt`, `readTime`, `author`
- Content utility: `lib/content.ts`

## Key Data

- Bangladesh AI Readiness Score: **47.12/100** (Oxford Insights GGAI 2024, Rank 80/193)
- Three Pillars: Government Readiness 58.52 | Technology Sector 26.26 (critical) | Data & Infrastructure 56.59
- 92 Requirements assessed across 15 domains, 67 gaps identified
- 7-year target: 65+ by 2033 (India-level)

## Infrastructure

| File | Purpose |
|------|---------|
| `app/sitemap.ts` | Sitemap: all static routes + all blog/research slugs × 2 locales (en + bn) |
| `app/robots.ts` | robots.txt with Disallow /api/ |
| `app/feed.xml/route.ts` | RSS 2.0 feed for all 9 blog posts |
| `app/api/og/route.tsx` | Dynamic OG image (1200×630) via `next/og` edge runtime |
| `app/en/page.tsx` | `/en` → 307 redirect to `/` |
| `app/bn/page.tsx` | `/bn` → sets Bangla language via `useLanguage()` then redirects to `/` |

## JSON-LD Structured Data

- **Organization schema** — `app/layout.tsx` (global, every page)
- **Article schema + BreadcrumbList** — `app/blog/[slug]/page.tsx`
- **ScholarlyArticle schema + BreadcrumbList** — `app/research/[slug]/page.tsx`

## SEO

- `generateMetadata()` on: `app/blog/[slug]/page.tsx`, `app/research/[slug]/page.tsx`
- OG images dynamically generated via `/api/og?title=...&category=...&readTime=...`
- RSS auto-discovery link in `<head>` via `layout.tsx`
- `NEXT_PUBLIC_SITE_URL` env var set to `https://bangladeshai.org`

## SVG Assets

- Bangladesh map SVG paths in `lib/svg-paths.ts` (8 named paths)
- Logo component: `components/Logo.tsx` — glass-finish circular logo, deep green with white map

## Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://bangladeshai.org   (set in Replit shared env)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=bangladeshai.org
NEXT_PUBLIC_FORMSPREE_ID=                       (set via Replit secrets when Formspree is configured)
NEXT_PUBLIC_NEWSLETTER_FORM_ID=                 (set via Replit secrets when Formspree is configured)
```

## Development

```bash
npm run dev    # Start development server on port 5000
npm run build  # Production build
npm start      # Start production server
```

## Brand Archive

Original Figma brand showcase files preserved in `/brand-archive/` — do not delete.

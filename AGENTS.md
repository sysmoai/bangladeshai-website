# AGENTS.md — Bangladesh AI (bangladeshai.org)

## Project
- Domain: bangladeshai.org
- Repo: github.com/sysmoai/bangladeshai-website
- Stack: Next.js 14 Pages Router + Tailwind + i18n (BN/EN)
- Owner: Emon Hossain

## Truth Rules
- All claims must be attributed to external sources (Oxford Insights, etc.)
- No customer/revenue claims
- No false credentials

## Build
- pnpm install + pnpm build
- Output: .next/ → 43 static HTML pages
- Requires: postcss.config.js + next.config.js with webpack alias

## Deploy
- Push to main → GitHub Actions → CF Pages
- CF project: bangladeshai-website

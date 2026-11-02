# BangladeshAI.Org — AI Research, Education & Impact

Independent, public-interest initiative focused on evidence-based AI research and education relevant to Bangladesh.

**Website deployment status: NOT LIVE at the official domain as last independently checked (2026-11-03).** The apex returned HTTP 402. A successful code build does not establish that the website is deployed or publicly reachable.

## Repository
- Canonical code: [sysmoai/bangladeshai-website](https://github.com/sysmoai/bangladeshai-website)
- Framework: Next.js 14 App Router; React 18, Tailwind 3, TS
- Website: English and Bangla client-side selection; static articles and research drafts in `content/`
- Cloudflare Pages static output: `out/` from `pnpm build`

## Local development
```bash
corepack enable
corepack prepare pnpm@10.33.2 --activate
pnpm install --frozen-lockfile
pnpm dev
```

## Release QA
```bash
node --test tests/*.test.mjs
pnpm build
node scripts/verify-static-output.mjs out
node scripts/audit-static-links.mjs out
```
GitHub Actions validates and produces a short-lived downloadable build artifact, not an automatically deployed website. Preview deployment is attempted only when repository-owned Cloudflare API credentials exist and no production DNS is affected.

## Critical publication cautions
Research content is under source and methodology review; published website pages should not be interpreted as peer-reviewed journals, DOI records or official government publications. Institutional partnerships, funding, registered charity status and publication claims require evidence. See `docs/LAUNCH_CHECKPOINT_2026-11-03.md`.

## Deployment safety
The existing official DNS points apex to Vercel while the historical Cloudflare Pages `.pages.dev` hostname currently has no DNS address; Zoho email routing must be preserved. **Do not switch DNS or publish on production until authenticated hosting access, staging smoke tests and a rollback path are verified.**

Use `AGENTS.md` for agent-safe operating instructions and the [current review PR](https://github.com/sysmoai/bangladeshai-website/pull/1) for the isolated recovery changes.

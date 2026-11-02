# AGENTS.md — BangladeshAI.Org (research, education, public impact)

**Status: PRODUCTION NO-GO (2026-11-03).** Follow the latest evidence checkpoint at `docs/LAUNCH_CHECKPOINT_2026-11-03.md`. Historical `DEPLOYMENT_COMPLETE.md` is *not* proof that a site is currently online.

## Source and isolation
- Official site: `https://bangladeshai.org`
- Canonical source: `sysmoai/bangladeshai-website`
- Stack: Next.js 15.5.28 App Router, React 18, Tailwind, Bangla/English client-side language toggle.
- Use only BangladeshAI.Org accounts and assets; do not cross business-unit credentials, DNS, documents, analytics or financial data.
- Owner-approved launch goal does not authorize exposing passwords/tokens, fabricating credentials/claims, unsafe domain edits or purchases.

## Build and gates
```sh
corepack enable
corepack prepare pnpm@10.33.2 --activate
pnpm install --frozen-lockfile
node --test tests/*.test.mjs
pnpm audit --prod --audit-level high
pnpm build
node scripts/verify-static-output.mjs out
node scripts/audit-static-links.mjs out
```
The deployable site is `out/`, **not** `.next/static` or repository root. GitHub Actions builds, validates and retains a short-lived artifact. A PR job can attempt an **isolated preview** only with existing Cloudflare credentials; no production deployment is enabled.

## Evidence-first public content
- A draft, PDF package, internal registry or research route is **not** proof of submission, DOI, SSRN indexing, journal publication or peer review.
- 30-paper registry exists in records, but individual publication evidence is unverified. Paper 01 SSRN status **Evidence Pending**; Paper 07 Delphi findings are **projected, not observed**.
- Do not assert charity/nonprofit registration, government endorsement, formal institutional partnership, external funding, donors, or measured outcomes without independent primary evidence.
- Distinguish Oxford Insights Government AI Readiness data from BangladeshAI.Org's own provisional 92-item framework/67-gap interpretation; preserve provenance, source year and methodology.
- Keep content accuracy and privacy review as **release blockers**, not optional polish.

## Production controls
- Observed apex A: `76.76.21.21` (Vercel); HTTPS returned HTTP 402.
- Observed `www` CNAME: `bangladeshai-website.pages.dev`, which returned NXDOMAIN.
- Observed nameservers: Google Domains; MX: Zoho. Preserve MX, SPF, DKIM, DMARC and TXT during any migration.
- Browser and Cloudflare authenticated access **not verified**. GitHub workflow preview credentials absent as of current check.
- Never deploy or cut over DNS before authenticated preview verification, backups, source review, link/mobile/accessibility/SEO/security QA, and rollback preparation.
- After deployment verify exact HTTPS origin, root/www redirects, metadata, canonical/sitemap/robots, all key routes, forms, and email continuity.

## Tracking
- Active review PR: https://github.com/sysmoai/bangladeshai-website/pull/1
- Current evidence record: `docs/LAUNCH_CHECKPOINT_2026-11-03.md`
- Treat `UNKNOWN` as a tracked retrieval/verification task, never as a pass.

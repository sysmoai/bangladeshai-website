# BangladeshAI.org — production launch evidence gate
Date: 2026-11-02 | Owner: BangladeshAI.org | Status: **NOT VERIFIED / NO GO**

## Observed facts (not historical claims)
- Public production URL `https://bangladeshai.org/` returned **HTTP 402** in two separate read paths on 2026-11-02. This prevents confirmation of a healthy website.
- Most recent five GitHub Actions deployment runs in `sysmoai/bangladeshai-website` concluded **failure**. Latest: https://github.com/sysmoai/bangladeshai-website/actions/runs/30976187834
- The former CI workflow ignored failing install/build/deploy steps and sent `.` (source repository) to Cloudflare Pages.
- Former `wrangler.toml` used `.next/static`, which contains Next assets but is **not** a complete static HTML export.
- Historical file `DEPLOYMENT_COMPLETE.md` claimed a Pages preview existed in August. Its current availability, account access and custom domain status remain **UNKNOWN** until authenticated hosting inspection.

## No-go gates
1. Validate current domain registrar, authoritative DNS, active origin/host and whether HTTP 402 comes from Vercel or elsewhere. Never guess from status code alone.
2. Get verified Cloudflare Pages/Workers access through the owner's existing account without exposing tokens in GitHub source or chat.
3. Decide whether the Next App Router project uses a supported Cloudflare runtime adapter **or** a real static HTML export. Do not deploy `.next/static` or `.`.
4. Complete build, lint, link/crawl, accessibility, Bangla font, mobile and security QA. Record actual outputs.
5. Resolve unverified evidence: paper registry is not a verified publication list; Paper 01 SSRN evidence pending; Paper 07 Delphi outcomes projected. Avoid peer-review, institutional partnership, registered-charity and government-endorsement claims unless independently evidenced.
6. Replace placeholder PDF / contact / newsletter functionality with working, consent-safe functionality or clearly label unavailable features.
7. Stage, review and verify a real deployment. Only then associate the custom domain. Protect MX/TXT email records during any DNS changes.
8. Independently verify HTTPS, redirects, sitemap, robots.txt, localized pages, content, and rollback plan after release.

## Interim technical change
- Workflow is modified to fail closed and never deploy the repository root.
- `scripts/verify-static-output.mjs` refuses deployment without `out/index.html`, research HTML and metadata, and blocks accidental source/secret upload.
- The current codebase has **not** been converted to `output: 'export'`, nor validated with a full build. Current normal `next build` is **not** expected to generate `out`. The release gate deliberately blocks unsafe deployment until migration is verified.
- Do not interpret passing *unit* tests as a production release or full end-to-end QA.

## Reference
- Source of truth: https://github.com/sysmoai/bangladeshai-website
- Published-page content is a work in progress; historical GitHub/Notion statuses are not external evidence.

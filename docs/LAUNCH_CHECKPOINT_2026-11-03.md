# BangladeshAI.Org — Verified Launch Checkpoint (2026-11-03, Asia/Dhaka)

**State: STATIC BUILD PASS / PRODUCTION NO-GO.** Do not equate a green GitHub Actions run with a live domain.

## Evidence: current public infrastructure

| Check | Observed |
|---|---|
| `https://bangladeshai.org/` | HTTP 402 on fresh public fetch; actual deployment origin not authenticated |
| Apex A record | `76.76.21.21` — Vercel address |
| Apex NS | `ns-cloud-a1/a2/a3/a4.googledomains.com` |
| `www` CNAME | `bangladeshai-website.pages.dev` |
| Cloudflare Pages host | `bangladeshai-website.pages.dev` returned **DNS NXDOMAIN**; historic live assertion is not current proof |
| Domain MX (must preserve) | Zoho Mail: `10 mx.zoho.com`, `20 mx2.zoho.com`, `50 mx3.zoho.com` |

These records were queried through a public DNS resolver on 2026-11-03. Confirm registrar access and DNS records in an authenticated control panel before changes. Do not assume Cloudflare owns the apex DNS zone.

## Implemented on review branch

- Next.js 14 App Router builds a full Cloudflare Pages-compatible **`out/` static export** with `output: 'export'` and trailing-slash routes; `wrangler.toml` uses `out`.
- Disabled unsafe deployment workflow which swallowed errors and published repository source. GitHub Actions now fails closed, runs Node tests, installs dependencies, builds, validates output and uploads a **short-lived static-site artifact**. It does not deploy production.
- Added `public/_headers` (security) and `public/_redirects` for static hosting.
- Removed unsupported dynamic locale catch-alls, replaced request-driven OG API with static OG image, fixed sitemap to actual routes and MDX slugs, removed misleading global homepage canonical.
- Protected blog/research Markdown by escaping HTML and rejecting unsafe link protocols, with focused regression tests.
- Research Hub, article views, JSON-LD, partnership page, About/Mission, founder page and Resources now label unverified working drafts, prospective engagements, unavailable PDFs and uncertain usage rights instead of claiming verified peer review, publication or partnerships.
- Homepage comparison scores South Korea **79.98**, Rwanda **51.25**, Indonesia **65.85** corrected against Oxford Insights GAIRI 2024 primary PDF. Bangladesh's **47.12** and **80/188** match the same source. The independent 92-item/67-gap claims remain provisional and distinctly labeled.
- No production deploy, DNS/NS change, security permission change, subscription purchase or email-setting change performed.

## Objective QA evidence

- Earliest complete static release gate and build: https://github.com/sysmoai/bangladeshai-website/actions/runs/41497986340 — success.
- Node Markdown tests plus static artifact, deployable build and upload artifact: https://github.com/sysmoai/bangladeshai-website/actions/runs/41498938357 — success. Artifact `bangladeshai-static-site`, ID `13168246462`, `sha256:c1d0ee8825eec4182f343cbd383cfd63d723df8ad742e1bceb73a4787d9745e0`, expires 2026-11-09 UTC.
- The branch head has changed after that run; **verify the newest CI run is green before deployment**. Successful build is not proof of accessibility, functionality or security of a live deployment.
- Reviewer branch: `audit/bangladeshai-release-gates-20261102` and draft PR #1: https://github.com/sysmoai/bangladeshai-website/pull/1

## Explicit outstanding gates (keep UNKNOWN where unverified)

1. **BLOCKED — authenticated browser session.** User's Chrome tabs are not accessible from this chat: browser connector requires the originating connected browser extension context. Separate Cloudflare Browser Profile was created but is not yet signed in. Never ask the user to paste passwords or API tokens.
2. **BLOCKED — Cloudflare account.** Inspect Cloudflare Workers & Pages account and determine whether prior project was deleted, renamed, suspended, or never established. `*.pages.dev` current NXDOMAIN means a functioning Cloudflare preview is not verified. Create or recover a project and stage using the reviewed `out/` artifact; do not deploy repository root.
3. **BLOCKED — apex and www domain.** Confirm registrar and Cloudflare domain ownership. Cloudflare Pages custom apex typically requires a Cloudflare zone / NS delegation; assess valid domain forwarding alternative before any DNS cutover. Preserve Zoho MX, SPF, DKIM, DMARC, and other TXT records; export backup first.
4. **Content evidence.** Verify current 30-paper registry against actual source files; Paper 01 SSRN evidence pending; Paper 07 Delphi projections are not observed. Do not label working drafts journal published/peer-reviewed; confirm copyright, data provenance, public-use permissions and contact addresses.
5. **Technical QA.** Static artifact link crawl, WCAG keyboard/contrast and screen reader inspection, mobile screenshots, English/Bangla interactions, consent banner, contact form and newsletter endpoints, secure headers, lighthouse performance, accessible downloads, canonical/OG/sitemap/robots and analytics consent. There are unverified forms and text claims; do not invent pass counts.
6. **Production release.** Confirm preview HTTPS and host, rollback plan, branch review, exact build SHA and artifact checksum. Then perform permitted deployment and carefully controlled DNS/hosting cutover. Verify root/www/paths from multiple networks, HTTPS, 301/302, favicon, robots, sitemap, research/blog and contact. Log actual HTTP status and URL.

## Source references

- Oxford Insights Government AI Readiness Index 2024: https://oxfordinsights.com/wp-content/uploads/2024/12/2024-Government-AI-Readiness-Index-2.pdf
- Cloudflare static Pages guide: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- Cloudflare Pages custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Current GitHub repository: https://github.com/sysmoai/bangladeshai-website

**Never claim 100% or LIVE until production and smoke/visual QA are independently evidenced.**

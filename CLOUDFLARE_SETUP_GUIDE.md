# BangladeshAI.Org - Cloudflare Pages Deployment Setup

## Status
✅ Configuration files updated
⏳ GitHub secrets setup (IN PROGRESS)
⏳ Domain configuration (PENDING)
⏳ Live deployment (PENDING)

---

## Your Cloudflare Details

**Account ID:** `4ca6269edabb6ad2906d70ec6845de22`
**Project Name:** `bangladeshai-website`
**GitHub Repo:** `https://github.com/sysmoai/bangladeshai-website`
**Target Domain:** `bangladeshai.org`

---

## Step 1: Get Your Cloudflare API Token

### Option A: Create New Token (Recommended)
1. Go to: https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Search for and select: "Cloudflare Pages Deploy"
4. Review permissions:
   - ✅ Account.Cloudflare Pages:Edit
5. Review resources:
   - ✅ All accounts (or select your account specifically)
6. Click "Continue to summary"
7. Click "Create Token"
8. **COPY THE TOKEN VALUE** (you'll only see it once!)
9. Test the token (optional)

### Option B: Use Existing Token
If you already have a token with Cloudflare Pages permissions, copy that token value.

---

## Step 2: Set GitHub Secrets

Once you have your API token, run this command in PowerShell:

```powershell
cd "C:\Users\emonh\SYSmoAI-Stack\apps\bangladeshai-website"
gh secret set CLOUDFLARE_API_TOKEN
# Paste your API token when prompted and press Enter
# Then Ctrl+D to finish (or just press Enter twice)

gh secret set CLOUDFLARE_ACCOUNT_ID
# Paste: 4ca6269edabb6ad2906d70ec6845de22
# Then press Enter
```

Or run the automated setup script:

```powershell
# Save and run the setup script
.\setup-cloudflare-secrets.ps1
```

---

## Step 3: Configure Custom Domain

After deployment is verified:

1. Log into Cloudflare dashboard: https://dash.cloudflare.com
2. Go to: Workers & Pages → Pages → bangladeshai-website
3. Click "Custom domain"
4. Enter: `bangladeshai.org`
5. Click "Activate domain"
6. Follow DNS configuration instructions (may need to update Squarespace DNS)

---

## Step 4: Verify Deployment

### Check GitHub Actions
1. Go to: https://github.com/sysmoai/bangladeshai-website
2. Click "Actions" tab
3. Watch the "Deploy to Cloudflare Pages" workflow
4. Should complete in 2-3 minutes

### Check Live Site
1. Go to: https://bangladeshai.pages.dev (first deployment)
2. After domain setup: https://bangladeshai.org

---

## Troubleshooting

**Deployment fails with "Unauthorized"**
- ❌ API token is invalid or expired
- ✅ Solution: Create a new token and update the secret

**Domain not resolving**
- ❌ DNS records not updated
- ✅ Solution: Update Squarespace DNS to point to Cloudflare

**Site shows old content**
- ❌ Cloudflare cache not cleared
- ✅ Solution: Go to Cloudflare → Caching → Purge Cache

---

## Next Steps

1. ✅ Get API token from Cloudflare
2. ⏳ Set GitHub secrets (NEXT)
3. ⏳ Push to GitHub (triggers deployment)
4. ⏳ Verify deployment at .pages.dev URL
5. ⏳ Configure custom domain
6. ⏳ Verify at bangladeshai.org

**Estimated time remaining: 15-20 minutes**

---

## Important Files

- `.env.local` - Environment variables
- `wrangler.toml` - Cloudflare Pages config
- `.github/workflows/deploy.yml` - CI/CD workflow
- `package.json` - Dependencies

---

## Support

For help with:
- **Cloudflare Pages:** https://developers.cloudflare.com/pages/
- **GitHub Actions:** https://docs.github.com/en/actions
- **Custom Domains:** https://developers.cloudflare.com/pages/configuration/custom-domain/

---

**Last Updated:** 2026-08-05
**Status:** Ready for GitHub secrets setup

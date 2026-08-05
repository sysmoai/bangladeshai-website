# BangladeshAI.Org - Cloudflare GitHub Secrets Setup
# This script sets up the required GitHub secrets for Cloudflare Pages deployment

$ErrorActionPreference = "Stop"

Write-Host "🚀 BangladeshAI.Org - Cloudflare Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if gh is installed
$ghVersion = gh --version
Write-Host "✅ GitHub CLI found: $ghVersion" -ForegroundColor Green
Write-Host ""

# Get current repo info
$repo = git config --get remote.origin.url
if ($null -eq $repo) {
    Write-Host "❌ Not in a git repository" -ForegroundColor Red
    exit 1
}

Write-Host "📦 Repository: $repo" -ForegroundColor Cyan
Write-Host ""

# Cloudflare Account ID
$accountId = "4ca6269edabb6ad2906d70ec6845de22"
Write-Host "🔐 Cloudflare Account ID: $accountId" -ForegroundColor Green
Write-Host ""

# Prompt for API Token
Write-Host "⚠️  You need a Cloudflare API Token" -ForegroundColor Yellow
Write-Host ""
Write-Host "To get your token:" -ForegroundColor Cyan
Write-Host "1. Go to: https://dash.cloudflare.com/profile/api-tokens" -ForegroundColor Gray
Write-Host "2. Click 'Create Token'" -ForegroundColor Gray
Write-Host "3. Select 'Cloudflare Pages Deploy' template" -ForegroundColor Gray
Write-Host "4. Copy the token value" -ForegroundColor Gray
Write-Host ""

$apiToken = Read-Host "Paste your Cloudflare API Token"

if ([string]::IsNullOrWhiteSpace($apiToken)) {
    Write-Host "❌ API Token cannot be empty" -ForegroundColor Red
    exit 1
}

if ($apiToken.Length -lt 10) {
    Write-Host "❌ Token seems too short. Did you paste it correctly?" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Token received (length: $($apiToken.Length) characters)" -ForegroundColor Green
Write-Host ""

# Set GitHub Secrets
Write-Host "🔑 Setting GitHub Secrets..." -ForegroundColor Cyan
Write-Host ""

try {
    # Set API Token
    Write-Host "Setting CLOUDFLARE_API_TOKEN..." -ForegroundColor Cyan
    $apiToken | gh secret set CLOUDFLARE_API_TOKEN
    Write-Host "✅ CLOUDFLARE_API_TOKEN set" -ForegroundColor Green

    # Set Account ID
    Write-Host "Setting CLOUDFLARE_ACCOUNT_ID..." -ForegroundColor Cyan
    Write-Host $accountId | gh secret set CLOUDFLARE_ACCOUNT_ID
    Write-Host "✅ CLOUDFLARE_ACCOUNT_ID set" -ForegroundColor Green

    Write-Host ""
    Write-Host "✅ All GitHub secrets configured!" -ForegroundColor Green
    Write-Host ""

    # List secrets
    Write-Host "📋 Verifying secrets..." -ForegroundColor Cyan
    gh secret list

    Write-Host ""
    Write-Host "🎉 Setup complete!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Run: git add . && git commit -m 'chore: configure Cloudflare deployment'" -ForegroundColor Gray
    Write-Host "2. Run: git push" -ForegroundColor Gray
    Write-Host "3. Go to: https://github.com/sysmoai/bangladeshai-website/actions" -ForegroundColor Gray
    Write-Host "4. Watch the deployment workflow" -ForegroundColor Gray
    Write-Host ""

} catch {
    Write-Host "❌ Error setting secrets: $_" -ForegroundColor Red
    exit 1
}

#!/usr/bin/env bash
set -euo pipefail
# Build-level headless browser QA, not production hosting QA.
OUT="${1:-out}"
BASE="http://127.0.0.1:4183"
CHROME="$(command -v google-chrome || command -v google-chrome-stable || command -v chromium || true)"
if [[ -z "$CHROME" ]]; then
  echo "::error::No headless browser on runner; browser QA cannot be passing"
  exit 1
fi
if [[ ! -f "$OUT/index.html" ]]; then
  echo "::error::Missing static site output"
  exit 1
fi
mkdir -p qa-screenshots

python3 -m http.server 4183 --bind 127.0.0.1 --directory "$OUT" > /tmp/bdai-http-server.log 2>&1 &
server_pid=$!
trap 'kill "$server_pid" 2>/dev/null || true' EXIT

for attempt in 1 2 3 4 5 6 7 8 9 10; do
  if curl --fail --silent "$BASE/" -o /dev/null; then break; fi
  sleep 1
done

routes=(
  "/"
  "/research/"
  "/contact/"
  "/for-citizens/"
  "/about/"
  "/blog/ai-bangla-language-guide/"
  "/research/ai-readiness/"
  "/roadmap/"
)
for route in "${routes[@]}"; do
  curl --fail --show-error --silent "$BASE$route" -o /tmp/bdai-static-response.html
  "$CHROME" --headless=new --no-sandbox --disable-dev-shm-usage --disable-gpu --hide-scrollbars \
    --window-size=1280,900 --virtual-time-budget=2500 --dump-dom "$BASE$route" \
    > /tmp/bdai-rendered.html 2>/tmp/bdai-chrome.log
  if ! grep -qiE '<main|<article|research hub|BangladeshAI' /tmp/bdai-rendered.html; then
    echo "::error::DOM smoke test failed at $route"
    exit 1
  fi
  echo "BROWSER_OK $route"
done

"$CHROME" --headless=new --no-sandbox --disable-dev-shm-usage --disable-gpu --hide-scrollbars \
  --window-size=1440,900 --virtual-time-budget=2500 \
  --screenshot="$(pwd)/qa-screenshots/home-desktop.png" "$BASE/" > /tmp/bdai-chrome1.log 2>&1
"$CHROME" --headless=new --no-sandbox --disable-dev-shm-usage --disable-gpu --hide-scrollbars \
  --window-size=390,844 --force-device-scale-factor=1 --virtual-time-budget=2500 \
  --screenshot="$(pwd)/qa-screenshots/home-mobile.png" "$BASE/" > /tmp/bdai-chrome2.log 2>&1
for screenshot in qa-screenshots/home-desktop.png qa-screenshots/home-mobile.png; do
  if [[ ! -s "$screenshot" ]]; then
    echo "::error::Screenshot missing or empty: $screenshot"
    exit 1
  fi
done
echo "BROWSER_SMOKE_PASS 8 critical routes, desktop+mobile screenshots generated."

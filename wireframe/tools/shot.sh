#!/usr/bin/env bash
# Screenshot a wireframe page with headless Chrome.
# Usage: bash tools/shot.sh <page.html> [light|dark] [width] [height] [extra query, e.g. open=drawer-create]
# Output: _shots/<page>-<theme>.png   (run from anywhere)
set -e
DIR="$(cd "$(dirname "$0")/.." && pwd)"
PAGE="$1"; THEME="${2:-light}"; W="${3:-1440}"; H="${4:-900}"; EXTRA="${5:-}"
[ -z "$PAGE" ] && { echo "usage: shot.sh page.html [light|dark] [w] [h] [query]"; exit 1; }
mkdir -p "$DIR/_shots"
NAME="$(basename "$PAGE" .html)-$THEME"
[ "$W" != "1440" ] || [ "$H" != "900" ] && NAME="$NAME-${W}x${H}"
[ -n "$EXTRA" ] && NAME="$NAME-$(echo "$EXTRA" | tr '=&' '--')"
WINPATH="$(cygpath -m "$DIR/$PAGE" 2>/dev/null || echo "$DIR/$PAGE")"
URL="file:///${WINPATH}?theme=${THEME}"
[ -n "$EXTRA" ] && URL="${URL}&${EXTRA}"
OUT="$(cygpath -w "$DIR/_shots/$NAME.png" 2>/dev/null || echo "$DIR/_shots/$NAME.png")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
PROFILE="$(cygpath -w "${TMPDIR:-/tmp}/ak-chrome-$$-$RANDOM" 2>/dev/null || echo /tmp/ak-chrome-$$)"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --user-data-dir="$PROFILE" --window-size="$W,$H" \
  --virtual-time-budget=4000 --screenshot="$OUT" "$URL" >/dev/null 2>&1 || true
echo "$DIR/_shots/$NAME.png"

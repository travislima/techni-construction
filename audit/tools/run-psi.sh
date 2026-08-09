#!/usr/bin/env bash
# Capture Google PageSpeed Insights scores for a URL (mobile + desktop).
# Uses the free keyless API; the shared quota pool 429s at times, so it
# retries. Add &key=YOUR_API_KEY to the URL for a reliable dedicated quota
# (free key: https://developers.google.com/speed/docs/insights/v5/get-started).
#
# Usage: ./run-psi.sh [url]   (default: https://www.techniconstruction.co.za/)

set -u
URL="${1:-https://www.techniconstruction.co.za/}"
ENC=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1],safe=''))" "$URL")
OUT_DIR="$(dirname "$0")/../evidence"
mkdir -p "$OUT_DIR"
STAMP=$(date +%Y-%m-%d)

for STRAT in mobile desktop; do
  OUT="$OUT_DIR/$STAMP-psi-$STRAT.json"
  echo "== $STRAT =="
  for ATTEMPT in 1 2 3 4 5 6; do
    curl -sS --max-time 120 \
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=$ENC&strategy=$STRAT&category=performance&category=accessibility&category=best-practices&category=seo" \
      -o "$OUT"
    if ! grep -q '"code": 429' "$OUT"; then break; fi
    echo "  quota-limited (attempt $ATTEMPT), waiting..."; sleep $((ATTEMPT * 30))
  done
  python3 - "$OUT" <<'EOF'
import json, sys
d = json.load(open(sys.argv[1]))
if "error" in d:
    print("  FAILED:", d["error"].get("message", "")[:120]); sys.exit(0)
lr = d["lighthouseResult"]
print("  Scores (0-100):")
for k, v in lr["categories"].items():
    print(f"    {v['title']:15s} {round(v['score']*100)}")
print("  Metrics:")
for aid, label in [("first-contentful-paint","FCP"), ("largest-contentful-paint","LCP"),
                   ("total-blocking-time","TBT"), ("cumulative-layout-shift","CLS"),
                   ("speed-index","Speed Index"), ("interactive","TTI")]:
    a = lr["audits"].get(aid)
    if a: print(f"    {label:12s} {a.get('displayValue','n/a')}")
tot = lr["audits"].get("total-byte-weight")
if tot: print(f"    {'Page weight':12s} {tot.get('displayValue','n/a')}")
print(f"  Full JSON saved: {sys.argv[1]}")
EOF
done

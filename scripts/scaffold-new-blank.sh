#!/usr/bin/env bash
# scaffold-new-blank.sh
# Usage: ./scripts/scaffold-new-blank.sh <slug> [source-url]
set -euo pipefail
SLUG="${1:?slug required}"
SOURCE="${2:-}"
DIR="$(cd "$(dirname "$0")/.." && pwd)"
TARGET="$DIR/$SLUG"

if [[ -d "$TARGET" ]]; then
  echo "Error: $TARGET already exists"
  exit 1
fi

echo "Creating isolated blank: $SLUG"
mkdir -p "$TARGET"
# Minimal starter — replace with real parts-clone output
cat > "$TARGET/README.md" <<EOF
# $SLUG

Isolated aesthetic blank.

Source: ${SOURCE:-manual}
Generated for aesthetic-blanks monorepo.
EOF

echo "Created $TARGET"
echo "Drop a full parts-clone project into this folder (or run website-parts-cloner and move the output here)."

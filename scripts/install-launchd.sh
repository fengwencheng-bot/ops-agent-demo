#!/bin/zsh

set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
PROJECT_DIR=$(cd "$SCRIPT_DIR/.." && pwd)
PLIST_SRC="$PROJECT_DIR/launchd/com.cursor.ops-agent.plist"
PLIST_DST="$HOME/Library/LaunchAgents/com.cursor.ops-agent.plist"

"$SCRIPT_DIR/sync-runtime.sh"
mkdir -p "$HOME/Library/LaunchAgents"
cp "$PLIST_SRC" "$PLIST_DST"

launchctl bootout "gui/$(id -u)/com.cursor.ops-agent" >/dev/null 2>&1 || true
launchctl bootstrap "gui/$(id -u)" "$PLIST_DST"
launchctl kickstart -k "gui/$(id -u)/com.cursor.ops-agent"

echo "launchd agent installed"
echo "URL: http://localhost:8799/ops-agent-mockup.html"

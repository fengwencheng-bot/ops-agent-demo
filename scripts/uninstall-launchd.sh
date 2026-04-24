#!/bin/zsh

set -euo pipefail

PLIST_DST="$HOME/Library/LaunchAgents/com.cursor.ops-agent.plist"

launchctl bootout "gui/$(id -u)/com.cursor.ops-agent" >/dev/null 2>&1 || true
rm -f "$PLIST_DST"

echo "launchd agent uninstalled"

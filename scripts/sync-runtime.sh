#!/bin/zsh

set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
PROJECT_DIR=$(cd "$SCRIPT_DIR/.." && pwd)
RUNTIME_ROOT="$HOME/.ops-agent-runtime"
APP_DIR="$RUNTIME_ROOT/app"
LOG_DIR="$RUNTIME_ROOT/logs"

mkdir -p "$APP_DIR" "$LOG_DIR"

cp "$PROJECT_DIR/server.py" "$APP_DIR/server.py"
cp "$PROJECT_DIR/ops-agent-mockup.html" "$APP_DIR/ops-agent-mockup.html"
cp "$PROJECT_DIR/ops-agent.js" "$APP_DIR/ops-agent.js"
cp "$PROJECT_DIR/ops-agent.css" "$APP_DIR/ops-agent.css"
cp "$PROJECT_DIR/index.html" "$APP_DIR/index.html"

echo "ops-agent runtime synced"
echo "App: $APP_DIR"
echo "Logs: $LOG_DIR"

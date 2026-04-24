#!/bin/zsh

set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
PROJECT_DIR=$(cd "$SCRIPT_DIR/.." && pwd)
RUNTIME_DIR="$PROJECT_DIR/.runtime"
PID_FILE="$RUNTIME_DIR/server.pid"
LOG_FILE="$RUNTIME_DIR/server.log"
PORT="${PORT:-8799}"

if [[ -f "$PID_FILE" ]]; then
  PID=$(cat "$PID_FILE" 2>/dev/null || true)
  if [[ -n "${PID}" ]] && kill -0 "$PID" 2>/dev/null; then
    echo "ops-agent server is running"
    echo "PID: $PID"
    echo "URL: http://localhost:$PORT/ops-agent-mockup.html"
    echo "Log: $LOG_FILE"
    exit 0
  fi
fi

echo "ops-agent server is not running"
exit 1

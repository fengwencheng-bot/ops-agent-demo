#!/bin/zsh

set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
PROJECT_DIR=$(cd "$SCRIPT_DIR/.." && pwd)
RUNTIME_DIR="$PROJECT_DIR/.runtime"
PID_FILE="$RUNTIME_DIR/server.pid"
LOG_FILE="$RUNTIME_DIR/server.log"
PORT="${PORT:-8799}"
PYTHON_BIN="${PYTHON_BIN:-python3}"

mkdir -p "$RUNTIME_DIR"

if [[ -f "$PID_FILE" ]]; then
  EXISTING_PID=$(cat "$PID_FILE" 2>/dev/null || true)
  if [[ -n "${EXISTING_PID}" ]] && kill -0 "$EXISTING_PID" 2>/dev/null; then
    echo "ops-agent server is already running on PID $EXISTING_PID"
    exit 0
  fi
  rm -f "$PID_FILE"
fi

cd "$PROJECT_DIR"
nohup env PORT="$PORT" "$PYTHON_BIN" "$PROJECT_DIR/server.py" >>"$LOG_FILE" 2>&1 &
NEW_PID=$!
echo "$NEW_PID" > "$PID_FILE"

sleep 1

if kill -0 "$NEW_PID" 2>/dev/null; then
  echo "ops-agent server started"
  echo "PID: $NEW_PID"
  echo "URL: http://localhost:$PORT/ops-agent-mockup.html"
  echo "Log: $LOG_FILE"
else
  echo "failed to start ops-agent server"
  exit 1
fi

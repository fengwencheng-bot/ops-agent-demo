#!/bin/zsh

set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
PROJECT_DIR=$(cd "$SCRIPT_DIR/.." && pwd)
RUNTIME_DIR="$PROJECT_DIR/.runtime"
PID_FILE="$RUNTIME_DIR/server.pid"

if [[ ! -f "$PID_FILE" ]]; then
  echo "ops-agent server is not running"
  exit 0
fi

PID=$(cat "$PID_FILE" 2>/dev/null || true)

if [[ -z "$PID" ]]; then
  rm -f "$PID_FILE"
  echo "ops-agent server pid file was empty and has been cleaned up"
  exit 0
fi

if kill -0 "$PID" 2>/dev/null; then
  kill "$PID"
  for _ in {1..20}; do
    if ! kill -0 "$PID" 2>/dev/null; then
      break
    fi
    sleep 0.5
  done
  if kill -0 "$PID" 2>/dev/null; then
    kill -9 "$PID"
  fi
  echo "ops-agent server stopped"
else
  echo "ops-agent server process was not running"
fi

rm -f "$PID_FILE"

scheduler intelligent ops agent demo

This repository contains a static frontend demo of the Scheduler Ops Agent.

Notes:

- No external LLM or model proxy is included in this repo
- `server.py` serves static files only
- Open-ended chat falls back to a static guidance response in the UI

## Local service

Recommended local URL:

- `http://localhost:8799/ops-agent-mockup.html`

Project scripts:

- `scripts/start-server.sh`
- `scripts/stop-server.sh`
- `scripts/status-server.sh`
- `scripts/sync-runtime.sh`
- `scripts/install-launchd.sh`
- `scripts/uninstall-launchd.sh`

`launchd` config template:

- `launchd/com.cursor.ops-agent.plist`

Recommended stable mode on macOS:

1. Run `scripts/install-launchd.sh`
2. This will sync runtime files to `~/.ops-agent-runtime/app`
3. `launchd` will keep the service alive and restart it automatically

Useful locations:

- Runtime app: `~/.ops-agent-runtime/app`
- Runtime logs: `~/.ops-agent-runtime/logs`

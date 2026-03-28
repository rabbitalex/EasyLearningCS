#!/bin/bash
set -eu
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
exec /bin/bash "$SCRIPT_DIR/start.command"

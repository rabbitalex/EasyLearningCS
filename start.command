#!/bin/bash
# EasyLearningCS 一键启动（macOS 双击）
set -eu
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
APP_DIR="$SCRIPT_DIR/V2.0"

# 先做一层轻量清理，避免重复双击时残留 .port 干扰
rm -f "$APP_DIR/.port" /tmp/EasyLearningCS-server.log 2>/dev/null || true
cd "$SCRIPT_DIR"
exec /bin/bash "$SCRIPT_DIR/start.sh"

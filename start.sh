#!/bin/bash
set -eu

# ============================================================
# EasyLearningCS 一键启动（macOS 10.6+ / Linux）
# 使用系统自带 Python 3，无需安装，无需管理员权限
# ============================================================

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
APP_DIR="$SCRIPT_DIR/V2.0"

# ---------- 检测 Python 3（>= 3.6）----------
PY=""
for cmd in python3 python; do
  if command -v "$cmd" >/dev/null 2>&1; then
    ver=$("$cmd" -c 'import sys; v=sys.version_info; print(v[0]*100+v[1])' 2>/dev/null || echo 0)
    if [ "$ver" -ge 306 ]; then
      PY="$cmd"
      break
    fi
  fi
done

if [ -z "$PY" ]; then
  echo ""
  echo "  ❌ 需要 Python 3.6+"
  echo ""
  case "$(uname -s)" in
    Darwin)
      echo "  macOS 安装方法（任选一个）："
      echo "    1. xcode-select --install  （推荐，会自带 Python 3）"
      echo "    2. 从 https://www.python.org 下载安装"
      echo ""
      osascript -e 'display alert "需要 Python 3" message "请在终端运行: xcode-select --install" as informational buttons {"好的"}' 2>/dev/null || true
      ;;
    *)
      echo "  Linux 安装方法："
      echo "    Ubuntu/Debian: sudo apt install python3"
      echo "    CentOS/RHEL:   sudo yum install python3"
      echo ""
      ;;
  esac
  exit 1
fi

echo ""
echo "  🚀 EasyLearningCS 启动中..."
echo "  📁 $APP_DIR"
echo "  🐍 $("$PY" --version 2>&1)"
echo ""

# ---------- 清理 ----------
rm -f "$APP_DIR/.port"

# ---------- 启动服务器，捕获输出 ----------
"$PY" "$APP_DIR/server.py" > /tmp/EasyLearningCS-server.log 2>&1 &
SERVER_PID=$!

# ---------- 等待端口和 URL ----------
PORT=""
OPEN_URL=""
for i in $(seq 1 30); do
  if [ -f "$APP_DIR/.port" ]; then
    PORT="$(cat "$APP_DIR/.port")"
    # 从日志中读取 OPEN_URL
    OPEN_URL=$(grep '^OPEN_URL:' /tmp/EasyLearningCS-server.log 2>/dev/null | tail -1 | cut -d: -f2-)
    break
  fi
  sleep 0.3
done
[ -z "$PORT" ] && PORT=9500
[ -z "$OPEN_URL" ] && OPEN_URL="http://localhost:$PORT"

# 把日志转到终端显示
tail -f /tmp/EasyLearningCS-server.log &
TAIL_PID=$!

# ---------- 打开浏览器（直达课程）----------
echo "  🌐 $OPEN_URL"
case "$(uname -s)" in
  Darwin) open "$OPEN_URL" 2>/dev/null || true ;;
  *) command -v xdg-open >/dev/null 2>&1 && xdg-open "$OPEN_URL" 2>/dev/null || true ;;
esac
echo "  ⏹  Ctrl+C 停止"
echo ""

# ---------- watchdog ----------
(
  while kill -0 $SERVER_PID 2>/dev/null; do
    "$PY" "$APP_DIR/watchdog.py" 2>/dev/null || true
    sleep 60
  done
) &
WD_PID=$!

# ---------- 优雅关闭 ----------
cleanup() {
  echo ""
  echo "  正在关闭..."
  kill $TAIL_PID 2>/dev/null || true
  kill $WD_PID 2>/dev/null || true
  kill $SERVER_PID 2>/dev/null || true
  rm -f "$APP_DIR/.port" /tmp/EasyLearningCS-server.log
  wait $SERVER_PID 2>/dev/null || true
  echo "  👋 已关闭"
}
trap cleanup INT TERM
wait $SERVER_PID

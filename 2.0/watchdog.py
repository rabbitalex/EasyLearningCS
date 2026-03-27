#!/usr/bin/env python3
"""hanhanpython watchdog — 纯 Python 标准库，零依赖
每分钟检查一次状态，3 分钟无进展则生成 continue-task 并发通知。"""
import json, os, sys, time, subprocess, platform
from pathlib import Path
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parent.parent.parent  # 2.0/
STATE_PATH = ROOT / 'automation' / 'state' / 'run-state.json'
QUEUE_PATH = ROOT / 'automation' / 'state' / 'task-queue.json'
WD_STATE = ROOT / 'automation' / 'state' / 'watchdog-state.json'
LOCK_PATH = ROOT / 'automation' / 'state' / 'watchdog.lock'
REPORT_DIR = ROOT / 'artifacts' / 'reports'
REPORT_PATH = REPORT_DIR / 'watchdog-report.json'
CONTINUE_PATH = REPORT_DIR / 'continue-task.json'
HOOK_PATH = ROOT / 'automation' / 'hooks' / 'continue-task.sh'

TIMEOUT = 180  # 3 分钟

def now_iso():
    return datetime.now(timezone.utc).isoformat()

def read_json(p, default=None):
    try: return json.loads(p.read_text('utf-8'))
    except Exception: return default

def write_json(p, obj):
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(obj, indent=2, ensure_ascii=False), 'utf-8')

def acquire_lock():
    try:
        fd = os.open(str(LOCK_PATH), os.O_CREAT | os.O_EXCL | os.O_WRONLY)
        os.write(fd, json.dumps({'pid': os.getpid()}).encode())
        os.close(fd)
        return True
    except FileExistsError:
        # 检查锁是否陈旧
        try:
            info = json.loads(LOCK_PATH.read_text())
            try: os.kill(info['pid'], 0)
            except OSError:
                LOCK_PATH.unlink()
                return acquire_lock()
            age = time.time() - LOCK_PATH.stat().st_mtime
            if age > 1800:
                LOCK_PATH.unlink()
                return acquire_lock()
        except Exception:
            pass
        return False

def release_lock():
    try: LOCK_PATH.unlink()
    except Exception: pass

def latest_ts(state, queue):
    stamps = [state.get('lastUpdatedAt'), state.get('taskStartedAt')]
    for t in queue.get('phase1', []):
        if t.get('status') == 'in-progress':
            stamps.append(t.get('startedAt'))
    valid = []
    for s in stamps:
        if not s: continue
        try:
            dt = datetime.fromisoformat(s.replace('Z', '+00:00'))
            valid.append(dt.timestamp())
        except Exception: pass
    return max(valid) if valid else None

def has_work(state, queue):
    if state.get('status') in ('running',): return True
    if state.get('failed'): return True
    for t in queue.get('phase1', []):
        if t.get('status') in ('in-progress', 'failed', 'pending'):
            return True
    return state.get('phase') != 'done'

def notify(msg):
    if platform.system() == 'Darwin':
        subprocess.run(['osascript', '-e', f'display notification "{msg}" with title "hanhanpython watchdog"'], capture_output=True)

def main():
    if not acquire_lock():
        write_json(REPORT_PATH, {'decision': 'skip-lock-busy', 'at': now_iso()})
        return

    try:
        state = read_json(STATE_PATH)
        queue = read_json(QUEUE_PATH)
        if not state or not queue:
            write_json(REPORT_PATH, {'decision': 'invalid-state', 'at': now_iso()})
            return

        ts = latest_ts(state, queue)
        stale = int(time.time() - ts) if ts else None
        work = has_work(state, queue)
        wd = read_json(WD_STATE, {})
        cooldown_until = 0
        if wd.get('lastRecoveryAt'):
            try:
                lr = datetime.fromisoformat(wd['lastRecoveryAt'].replace('Z', '+00:00'))
                cooldown_until = lr.timestamp() + TIMEOUT
            except Exception: pass

        decision = 'noop'
        if not work:
            decision = 'no-work'
        elif stale is None:
            decision = 'no-timestamp'
        elif stale < TIMEOUT:
            decision = 'waiting'
        elif time.time() < cooldown_until:
            decision = 'cooldown'
        else:
            # 触发恢复
            pending = next((t for t in queue.get('phase1', []) if t['status'] == 'pending'), None)
            report = {
                'generatedAt': now_iso(), 'reason': 'stale',
                'phase': state.get('phase'), 'checkpoint': state.get('checkpoint'),
                'nextPending': pending,
                'prompt': f"继续执行 {pending['id']}（{pending['target']}）" if pending else '检查当前阶段状态'
            }
            write_json(CONTINUE_PATH, report)
            if HOOK_PATH.exists():
                subprocess.run(['sh', str(HOOK_PATH), str(CONTINUE_PATH)], capture_output=True, cwd=str(ROOT),
                               env={**os.environ, 'WATCHDOG_REASON': 'stale',
                                    'WATCHDOG_TASK_ID': pending['id'] if pending else '',
                                    'WATCHDOG_TASK_TARGET': pending['target'] if pending else ''})
            notify(f"3分钟无进展: {pending['id'] if pending else state.get('phase')}")
            decision = 'emit-continue-task'
            wd['lastRecoveryAt'] = now_iso()

        wd['lastDecision'] = decision
        wd['lastDecisionAt'] = now_iso()
        write_json(WD_STATE, wd)
        write_json(REPORT_PATH, {'decision': decision, 'staleSeconds': stale, 'at': now_iso()})
        if decision not in ('waiting', 'noop', 'no-work', 'cooldown'):
            print(f'Watchdog: {decision}')
    finally:
        release_lock()

if __name__ == '__main__':
    main()

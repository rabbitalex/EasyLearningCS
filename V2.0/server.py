#!/usr/bin/env python3
"""EasyLearningCS HTTP 服务器 — 纯 Python 标准库，零依赖"""
import http.server, socketserver, json, os, sys, gzip, io, signal, socket
from pathlib import Path
from datetime import datetime, timezone
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parent
USER_DATA = ROOT / 'user-data.json'
USER_DATA_TPL = ROOT / 'user-data.default.json'
PORT_FILE = ROOT / '.port'
PREFERRED = int(sys.argv[1]) if len(sys.argv) > 1 else int(os.environ.get('PORT', 9500))

MIME = {
    '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
    '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
    '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff': 'font/woff',
    '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav', '.mp4': 'video/mp4', '.webp': 'image/webp',
    '.txt': 'text/plain; charset=utf-8', '.pdf': 'application/pdf',
}
COMPRESS = {'text/html','text/css','application/javascript','application/json','image/svg+xml'}

def init_user_data():
    if USER_DATA.exists():
        return
    now = datetime.now(timezone.utc).isoformat()
    if USER_DATA_TPL.exists():
        tpl = json.loads(USER_DATA_TPL.read_text('utf-8'))
    else:
        tpl = {'version': 1, 'progress': {}, 'code': {}, 'stats': {}, 'settings': {}}
    tpl['createdAt'] = tpl['lastSavedAt'] = now
    if 'profile' in tpl and tpl['profile']:
        tpl['profile']['joinDate'] = now
    USER_DATA.write_text(json.dumps(tpl, indent=2, ensure_ascii=False), 'utf-8')
    print('  \033[32m✔ 已生成 user-data.json\033[0m')

class Handler(http.server.BaseHTTPRequestHandler):
    server_version = 'EasyLearningCS/2.0'
    def log_message(self, fmt, *a):
        pass  # 静默常规日志

    def _cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        path = unquote(self.path.split('?')[0])
        if path == '/api/user-data':
            return self._api_get()
        self._serve_file(path)

    def do_HEAD(self):
        path = unquote(self.path.split('?')[0])
        self._serve_file(path, head_only=True)

    def do_POST(self):
        path = unquote(self.path.split('?')[0])
        if path == '/api/user-data':
            return self._api_post()
        self.send_error(405)

    def _api_get(self):
        try:
            data = USER_DATA.read_bytes()
        except Exception:
            self.send_response(500); self._cors(); self.end_headers()
            self.wfile.write(b'{"error":"read"}'); return
        self.send_response(200)
        self._cors()
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.end_headers()
        self.wfile.write(data)

    def _api_post(self):
        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length)
        try:
            obj = json.loads(body)
            obj['lastSavedAt'] = datetime.now(timezone.utc).isoformat()
            USER_DATA.write_text(json.dumps(obj, indent=2, ensure_ascii=False), 'utf-8')
            self.send_response(200); self._cors()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'ok': True, 'savedAt': obj['lastSavedAt']}).encode())
        except Exception:
            self.send_response(400); self._cors(); self.end_headers()
            self.wfile.write(b'{"error":"invalid json"}')

    def _serve_file(self, url_path, head_only=False):
        if url_path == '/': url_path = '/index.html'
        fp = (ROOT / url_path.lstrip('/')).resolve()
        if not str(fp).startswith(str(ROOT)):
            self.send_error(403); return
        if fp.is_dir():
            fp = fp / 'index.html'
        if not fp.is_file():
            self.send_error(404); return
        ext = fp.suffix.lower()
        ct = MIME.get(ext, 'application/octet-stream')
        data = fp.read_bytes()
        ae = self.headers.get('Accept-Encoding', '')
        base_ct = ct.split(';')[0].strip()
        if base_ct in COMPRESS and 'gzip' in ae and len(data) > 1024:
            buf = io.BytesIO()
            with gzip.GzipFile(fileobj=buf, mode='wb') as gz:
                gz.write(data)
            data = buf.getvalue()
            self.send_response(200)
            self.send_header('Content-Encoding', 'gzip')
        else:
            self.send_response(200)
        self.send_header('Content-Type', ct)
        self.send_header('Content-Length', len(data))
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        if not head_only:
            self.wfile.write(data)

class ReuseTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

def find_port(start, attempts=20):
    for p in range(start, start + attempts):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind(('', p))
                return p
            except OSError:
                continue
    return None

def main():
    init_user_data()
    port = find_port(PREFERRED)
    if not port:
        print(f'  \033[31m❌ 无法找到可用端口 ({PREFERRED}-{PREFERRED+19})\033[0m')
        sys.exit(1)

    PORT_FILE.write_text(str(port))
    httpd = ReuseTCPServer(('0.0.0.0', port), Handler)

    # 构建打开 URL（带上次学到的课程）
    open_url = f'http://localhost:{port}'
    try:
        ud = json.loads(USER_DATA.read_text('utf-8'))
        cl = ud.get('progress', {}).get('currentLesson')
        if cl:
            open_url += f'?lesson={cl}'
    except Exception:
        pass

    print()
    print('  \033[36m╔══════════════════════════════════════╗\033[0m')
    print('  \033[36m║\033[0m  🌍 \033[1mEasyLearningCS\033[0m 服务器已启动      \033[36m║\033[0m')
    print('  \033[36m╠══════════════════════════════════════╣\033[0m')
    print(f'  \033[36m║\033[0m  \033[32m▸\033[0m {open_url:<37}\033[36m║\033[0m')
    print('  \033[36m║\033[0m  \033[2m▸ Ctrl+C 停止\033[0m                     \033[36m║\033[0m')
    print('  \033[36m╚══════════════════════════════════════╝\033[0m')
    print()
    print(f'READY:{port}')
    print(f'OPEN_URL:{open_url}')
    sys.stdout.flush()

    def shutdown(*_):
        print('\n  👋 已停止')
        PORT_FILE.unlink(missing_ok=True)
        httpd.shutdown()
    signal.signal(signal.SIGINT, shutdown)
    signal.signal(signal.SIGTERM, shutdown)

    httpd.serve_forever()

if __name__ == '__main__':
    main()

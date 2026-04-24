#!/usr/bin/env python3
"""
智能运维 Agent 静态演示服务器
- 提供静态文件服务（HTML mockup）
- 不包含任何外部模型或 API 代理能力
- 无需安装第三方依赖，仅使用 Python 标准库

启动方式: python3 server.py
访问地址: http://localhost:8080
"""

import os
import sys
import signal
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse

PORT = int(os.getenv("PORT", "8080"))

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))


class AgentHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=SCRIPT_DIR, **kwargs)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/" or parsed.path == "":
            self.path = "/ops-agent-mockup.html"
        super().do_GET()

    def handle_one_request(self):
        try:
            super().handle_one_request()
        except BrokenPipeError:
            pass
        except ConnectionResetError:
            pass

    def log_message(self, fmt, *args):
        sys.stderr.write(f"[Agent Server] {fmt % args}\n")


def main():
    import socket
    class ReusableHTTPServer(HTTPServer):
        allow_reuse_address = True
        def server_bind(self):
            self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            super().server_bind()
        def handle_error(self, request, client_address):
            exc = sys.exc_info()[1]
            if isinstance(exc, (BrokenPipeError, ConnectionResetError)):
                return
            super().handle_error(request, client_address)

    server = ReusableHTTPServer(("0.0.0.0", PORT), AgentHandler)

    def graceful_shutdown(signum, frame):
        print(f"\n收到信号 {signum}，正在优雅关闭...")
        server.server_close()
        sys.exit(0)

    signal.signal(signal.SIGTERM, graceful_shutdown)
    signal.signal(signal.SIGHUP, signal.SIG_IGN)

    print(f"""
╔══════════════════════════════════════════════╗
║  智能运维 Agent 服务已启动                     ║
║  地址: http://localhost:{PORT}                  ║
║  模式: Static Demo                            ║
║  按 Ctrl+C 停止                               ║
╚══════════════════════════════════════════════╝
""")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n服务已停止")
        server.server_close()


if __name__ == "__main__":
    main()

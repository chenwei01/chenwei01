#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys

# 设置端口
PORT = 12000

# 切换到网站目录
os.chdir('/workspace/chenwei01')

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # 添加CORS头部
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        # 添加X-Frame-Options头部允许iframe
        self.send_header('X-Frame-Options', 'ALLOWALL')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

if __name__ == "__main__":
    try:
        with socketserver.TCPServer(("0.0.0.0", PORT), MyHTTPRequestHandler) as httpd:
            print(f"服务器启动在端口 {PORT}")
            print(f"访问地址: http://localhost:{PORT}")
            print(f"外部访问: https://work-1-gjvucqynpuvqdvwe.prod-runtime.all-hands.dev")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务器已停止")
        sys.exit(0)
    except Exception as e:
        print(f"启动服务器时出错: {e}")
        sys.exit(1)
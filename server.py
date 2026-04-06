#!/usr/bin/env python3
"""
Simple HTTP server to run the Mistral Vibe Carousel Demo
"""

from http.server import SimpleHTTPRequestHandler, HTTPServer
import webbrowser
import threading
import time

PORT = 9000

class MyHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=".", **kwargs)

def run_server():
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, MyHandler)
    print(f"Serving Mistral Vibe Carousel Demo on http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server")
    httpd.serve_forever()

def open_browser():
    time.sleep(1)  # Give server a moment to start
    webbrowser.open(f"http://localhost:{PORT}")

if __name__ == "__main__":
    # Start browser in a separate thread
    browser_thread = threading.Thread(target=open_browser)
    browser_thread.daemon = True
    browser_thread.start()
    
    # Run the server
    run_server()
from flask import Flask, jsonify
import os

app = Flask(__name__)

# Add basic security headers
@app.after_request
def add_security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'SAMEORIGIN'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    return response


@app.route("/health")
def health_check():
    return jsonify({"status": "healthy"}), 200


@app.route("/")
def hello():
    return jsonify({"message": "Hello, World!"}), 200


if __name__ == "__main__":
    port = int(os.getenv("PORT", "8000"))
    host = os.getenv("HOST", "127.0.0.1")  # Default to localhost
    app.run(host=host, port=port)

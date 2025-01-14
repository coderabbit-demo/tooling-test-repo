# Multi-stage build for a Python web application
FROM python:3.11-slim-bullseye AS builder

WORKDIR /build
COPY requirements.txt .

RUN pip wheel --no-cache-dir --no-deps --wheel-dir /build/wheels -r requirements.txt

FROM python:3.11-slim-bullseye

# Create non-root user
RUN useradd -m -s /bin/bash appuser

WORKDIR /app

# Copy only the built wheels from builder
COPY --from=builder /build/wheels /wheels
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache /wheels/*

# Copy application code
COPY *.py .

# Set proper permissions
RUN chown -R appuser:appuser /app

# Switch to non-root user
USER appuser

# Set Python to unbuffered mode
ENV PYTHONUNBUFFERED=1

# Expose application port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost:8000/health || exit 1

# Start application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "4", "app:app"]
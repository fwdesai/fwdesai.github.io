#!/usr/bin/env bash
#
# Regenerates public/resume-preview.webp from the resume PDF.
#
# The resume page shows a rendered image rather than an embedded <iframe>,
# because embedded PDFs are unreliable on mobile browsers. Run this after
# you replace the PDF.
#
# One-time setup:
#   brew install poppler webp
#
# Usage:
#   ./scripts/render-resume.sh public/Your_Resume.pdf
#
set -euo pipefail

PDF="${1:-}"
if [[ -z "$PDF" ]]; then
  echo "usage: $0 <path-to-resume.pdf>" >&2
  exit 1
fi
if [[ ! -f "$PDF" ]]; then
  echo "error: no such file: $PDF" >&2
  exit 1
fi

for cmd in pdftoppm cwebp; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "error: $cmd not found. Run: brew install poppler webp" >&2
    exit 1
  fi
done

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# 180 DPI gives a crisp image on retina displays without bloating the file.
pdftoppm -r 180 -png -singlefile "$PDF" "$TMP/page1"

# Lossless WebP keeps text edges sharp; on a text-only page it compresses
# far better than PNG.
cwebp -quiet -lossless -m 6 "$TMP/page1.png" -o public/resume-preview.webp

echo "wrote public/resume-preview.webp ($(du -h public/resume-preview.webp | cut -f1))"
echo
echo "If the page count or dimensions changed, update the width/height"
echo "attributes on the <img> in src/pages/resume.astro."

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

# Near-lossless keeps text edges and link colours sharp while compressing
# noticeably better than full lossless on a text page (measured 135 KB vs
# 164 KB). Plain lossy WebP is worse than useless here — it subsamples chroma
# and came out LARGER than lossless (326 KB at q90) on this kind of content.
cwebp -quiet -near_lossless 40 -m 6 "$TMP/page1.png" -o public/resume-preview.webp

# `du` reports block-rounded disk usage, which overstates small files — report
# the real byte count instead.
bytes=$(wc -c < public/resume-preview.webp | tr -d ' ')
dims=$(sips -g pixelWidth -g pixelHeight public/resume-preview.webp 2>/dev/null \
  | awk '/pixelWidth/{w=$2} /pixelHeight/{h=$2} END{print w"x"h}')
echo "wrote public/resume-preview.webp — ${dims}, $((bytes / 1024)) KB"
echo
echo "If the dimensions above differ from the width/height on the <img> in"
echo "src/pages/resume.astro, update them there to match."

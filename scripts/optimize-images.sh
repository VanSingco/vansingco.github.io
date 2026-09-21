#!/usr/bin/env bash
#
# Regenerates the published WebP images in public/images/ from the originals
# in assets-src/images/. Requires ffmpeg with libwebp.
#
#   bash scripts/optimize-images.sh
#
# Long full-page shots are capped at 1200px wide (they only ever render inside
# a ~700px dialog column); covers at 1200px; raster logos at 256px.
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
src="$root/assets-src/images"
out="$root/public/images"

convert_one() { # $1=src $2=dest $3=max_width $4=quality
  mkdir -p "$(dirname "$2")"
  ffmpeg -hide_banner -loglevel error -y -i "$1" \
    -vf "scale='min($3,iw)':-2:flags=lanczos" \
    -c:v libwebp -quality "$4" -compression_level 6 "$2"
}

for f in "$src"/portfolio/*-long.png; do
  [ -e "$f" ] || continue
  convert_one "$f" "$out/portfolio/$(basename "${f%.png}").webp" 1200 78
done

for f in "$src"/portfolio/*-short*.png; do
  [ -e "$f" ] || continue
  convert_one "$f" "$out/portfolio/$(basename "${f%.png}").webp" 1200 82
done

for f in "$src"/logo/*.png; do
  [ -e "$f" ] || continue
  convert_one "$f" "$out/logo/$(basename "${f%.png}").webp" 256 90
done

echo "Done. Published image weight:"
du -ch "$out" | tail -1

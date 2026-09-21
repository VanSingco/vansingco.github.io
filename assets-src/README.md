# assets-src

Original, unoptimised source images. **Nothing in this folder is published** —
`public/` is what Vite copies into `dist/`.

- `images/portfolio/*.png`, `images/logo/*.png` — the full-resolution originals.
  The site serves WebP versions generated from these (21.4 MB → 1.2 MB).
  Regenerate with `scripts/optimize-images.sh`.
- `images/bg-icon-*.svg` — the decorative background blobs used by the old
  design's `::before` pseudo-elements. Superseded by the `.glow` utility in
  `src/assets/main.css`; kept in case the artwork is wanted again.

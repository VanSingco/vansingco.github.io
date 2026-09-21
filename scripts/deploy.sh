#!/usr/bin/env bash
#
# Publishes dist/ to the gh-pages branch root, which is what GitHub Pages
# serves for this repo (build_type: legacy, source: gh-pages, path: /).
# There is no Actions workflow — this script is the deploy.
#
#   bash scripts/deploy.sh              # build, then publish
#   bash scripts/deploy.sh --no-build   # publish whatever is already in dist/
#
# The checkout happens in a temp worktree on local disk and is pushed
# detached (HEAD:gh-pages), so it never fights a gh-pages branch that is
# already checked out somewhere else.
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root"

if [ "${1:-}" != "--no-build" ]; then
  npm run build
fi

[ -f dist/index.html ] || { echo "dist/index.html missing — build first." >&2; exit 1; }

sha="$(git rev-parse --short HEAD)"
tmp="$(mktemp -d)"
# A worktree whose path has vanished (or one left by an earlier run) would
# otherwise block the checkout.
git worktree prune
git fetch origin gh-pages
git worktree add --detach "$tmp" origin/gh-pages >/dev/null

cleanup() { git worktree remove --force "$tmp" >/dev/null 2>&1 || true; }
trap cleanup EXIT

# Replace the published tree wholesale; .nojekyll rides along from dist/.
find "$tmp" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -a dist/. "$tmp"/

cd "$tmp"
git add -A
if git diff --cached --quiet; then
  echo "gh-pages already matches dist/ — nothing to publish."
  exit 0
fi

git commit -q -m "Publish $sha"
git push origin HEAD:gh-pages
echo "Published $sha to gh-pages. Pages will rebuild shortly: https://vansingco.github.io/"

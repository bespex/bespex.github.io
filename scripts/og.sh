#!/bin/sh
# Makes the images shown when a page of the site is shared (Open Graph, 1200×630):
# public/og/<slug>.jpg from the upper part of each app's first screenshot (the light one, if themed).
# Run after the screenshots changed: scripts/og.sh [slug …]   (needs dwebp and ImageMagick)
# Without slugs it makes all; an app without a screenshot (HatRack) is skipped, its page shares the logo.
set -e
cd "$(dirname "$0")/.."
tmp=$(mktemp -d)
for pair in trisq:trisq marq:marq jayq:jayq xaq:xaq hyqe:hyqe cusq:cusq dirq:dirq maiqe:maiqe maillet:maillet-home tasqlet:tasqlet-home pockettray:pockettray codedeck:codedeck hatrack: pictorix:pictorix-order; do
  slug=${pair%%:*} shot=${pair##*:}
  if [ $# -gt 0 ]; then
    case " $* " in *" $slug "*) ;; *) continue ;; esac
  fi
  src=public/shots/$shot-light.webp
  [ -f "$src" ] || src=public/shots/$shot.webp
  if [ -z "$shot" ] || [ ! -f "$src" ]; then
    echo "skipped $slug: no screenshot"
    continue
  fi
  dwebp -quiet "$src" -o "$tmp/$slug.png"
  convert "$tmp/$slug.png" -resize 1200x -gravity north -crop 1200x630+0+0 +repage -quality 88 "public/og/$slug.jpg"
  echo "public/og/$slug.jpg"
done
rm -r "$tmp"

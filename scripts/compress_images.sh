#!/bin/bash

# compress all pics from images-raw/ into images/ as .webp

set -e
shopt -s globstar

SCRIPT_DIR="$(dirname "$(realpath "$0")")"
SRC="$SCRIPT_DIR/../images_raw"
OUT="$SCRIPT_DIR/../images"

mkdir -p "$OUT"

export OUT

find "$SRC" -type f | \
parallel --delay 0.5 '
img="{}"
rel_path="${img#'"$SRC"'/}"
rel_dir="$(dirname "$rel_path")"
base=$(basename "$img")
name="${base%.*}"
out="$OUT/$rel_dir/$name.webp"

mkdir -p "$(dirname "$out")"

ffmpeg -threads 1 -loglevel error -y \
    -i "$img" \
    -vf "scale='\''if(gt(iw,1600),1600,iw)'\'':-1:flags=lanczos" \
    -map_metadata -1 \
    -compression_level 6 \
    -q:v 80 \
    "$out"

echo "compressed $out"
'

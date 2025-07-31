#!/usr/bin/env bash

# Preload base bash configuration and functions
source bgord-scripts/base.sh

info "Building design system CSS..."
bun dist/index.js

info "Formatting the files..."
bunx @biomejs/biome format --write dist/main.css
bunx @biomejs/biome format --write dist/index.d.ts
bunx @biomejs/biome format --write dist/lib.d.ts
bunx @biomejs/biome format --write dist/lib.js

info "Processing..."

bunx lightningcss-cli dist/main.css \
  --targets ">1%, not dead" \
  --minify \
  --bundle \
  -o dist/main.min.css

info "Compressing..."
bunx gzip dist/*.min.css --extension=gz --extension=br

info "main.css file sizes:"
# shellcheck disable=SC2010
ls -alh dist | grep main | awk '{print $5"\t"$9}'

info "Removing index.js file"
rm -rf dist/index.js

info "Building lib.ts"
bun build dist/lib.ts --outfile dist/lib.js --format esm

info "Generating lib.d.ts"
bunx tsc dist/lib.ts \
  --declaration \
  --emitDeclarationOnly \
  --module esnext \
  --skipLibCheck \
  --outDir dist

info "Cleaning up"
rm dist/lib.ts

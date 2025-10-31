#!/usr/bin/env bash

# Preload base bash configuration and functions
source bgord-scripts/base.sh
setup_base_config

step_start "Design system CSS build"
bun dist/index.js
step_end "Design system CSS build"

step_start "Files format"
bunx @biomejs/biome format --write dist/main.css
bunx @biomejs/biome format --write dist/index.d.ts
bunx @biomejs/biome format --write dist/lib.d.ts
bunx @biomejs/biome format --write dist/lib.js
step_end "Files format"

step_start "Files preprocess"
bunx lightningcss-cli dist/main.css \
  --targets ">1%, not dead" \
  --minify \
  --bundle \
  -o dist/main.min.css
step_end "Files preprocess"

step_start "Files compress"
bunx gzip dist/*.min.css --extension=gz --extension=br
step_end "Files compress"

step_start "index.js remove"
rm -rf dist/index.js
step_end "index.js remove"

step_start "lib.ts build"
bun build dist/lib.ts --outfile dist/lib.js --format esm
step_end "lib.ts build"

step_start "lib.d.ts generate"
bunx tsc dist/lib.ts \
  --declaration \
  --emitDeclarationOnly \
  --module esnext \
  --skipLibCheck \
  --outDir dist
step_end "lib.d.ts generate"

step_start "Cleanup"
rm dist/lib.ts
rm dist/main.css
step_end "Cleanup"

step_start "Size inspection"
# shellcheck disable=SC2010
ls -alh dist | grep main | awk '{print $5"\t"$9}'
step_end "Size inspection"

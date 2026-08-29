#!/usr/bin/env bash

# Preload base bash configuration and functions
source bgord-scripts/base.sh
setup_base_config

OUTPUT_DIRECTORY="dist"

step_start "Package build"
bun build src/index.ts --format esm --outdir $OUTPUT_DIRECTORY
step_end "Package build"

step_start "CSS purge CLI build"
bun build src/css-purge.ts \
  --target bun \
  --format esm \
  --minify \
  --outfile $OUTPUT_DIRECTORY/css-purge.js
chmod +x $OUTPUT_DIRECTORY/css-purge.js
step_end "CSS purge CLI build"

#!/usr/bin/env bash

# Preload base bash configuration and functions
source bgord-scripts/base.sh

info "Building design system CSS..."
bun dist/v2/index.js

info "Copying normalize.css to dist..."
cp src/normalize.css dist/v2

info "Running postcss..."
bunx postcss dist/v2/main.css -o dist/v2/main.css
bunx postcss dist/v2/normalize.css -o dist/v2/normalize.css

info "Running doiuse..."
bunx doiuse --browsers ">1%" --ignore "css-touch-action,css-appearance,css-media-resolution,css-resize" dist/v2/main.css

info "Minifying..."
bunx clean-css-cli dist/v2/main.css -o dist/v2/main.min.css
bunx clean-css-cli dist/v2/normalize.css -o dist/v2/normalize.min.css

info "Compressing..."
bunx gzip dist/v2/main.min.css --extension=gz --extension=br
bunx gzip dist/v2/normalize.min.css --extension=gz --extension=br

info "main.css file sizes:"
# shellcheck disable=SC2010
ls -alh dist/v2 | grep main | awk '{print $5"\t"$9}'

info "normalize.css file sizes:"
# shellcheck disable=SC2010
ls -alh dist/v2 | grep normalize | awk '{print $5"\t"$9}'

info "Removing index.js file"
rm -rf dist/v2/index.js

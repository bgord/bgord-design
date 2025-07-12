#!/usr/bin/env bash

# Preload base bash configuration and functions
source bgord-scripts/base.sh

info "Building design system CSS..."
bun dist/index.js

info "Copying normalize.css to dist..."
cp src/normalize.css dist/

info "Running postcss..."
bunx postcss dist/main.css -o dist/main.css
bunx postcss dist/normalize.css -o dist/normalize.css

info "Running doiuse..."
bunx doiuse --browsers ">1%" --ignore "css-touch-action,css-appearance,css-media-resolution,css-resize" dist/main.css

info "Minifying..."
bunx clean-css-cli dist/main.css -o dist/main.min.css
bunx clean-css-cli dist/normalize.css -o dist/normalize.min.css

info "Compressing..."
bunx gzip dist/main.min.css --extension=gz --extension=br
bunx gzip dist/normalize.min.css --extension=gz --extension=br

info "main.css file sizes:"
# shellcheck disable=SC2010
ls -alh dist | grep main | awk '{print $5"\t"$9}'

info "normalize.css file sizes:"
# shellcheck disable=SC2010
ls -alh dist | grep normalize | awk '{print $5"\t"$9}'

info "Removing index.js file"
rm -rf dist/index.js

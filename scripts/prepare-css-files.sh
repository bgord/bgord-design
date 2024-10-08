#!/usr/bin/env bash

# Preload base bash configuration and functions
source bgord-scripts/base.sh

info "Building design system CSS..."
node dist/index.js

info "Copying normalize.css to dist..."
cp src/normalize.css dist/

info "Running postcss..."
npx postcss dist/main.css -o dist/main.css
npx postcss dist/normalize.css -o dist/normalize.css

info "Running doiuse..."
npx doiuse --browsers ">1%" --ignore "css-touch-action,css-appearance,css-media-resolution,css-resize" dist/main.css

info "Minifying..."
npx clean-css-cli dist/main.css -o dist/main.min.css
npx clean-css-cli dist/normalize.css -o dist/normalize.min.css

info "Compressing..."
npx gzip dist/main.min.css --extension=gz --extension=br
npx gzip dist/normalize.min.css --extension=gz --extension=br

info "main.css file sizes:"
# shellcheck disable=SC2010
ls -alh dist | grep main | awk '{print $5"\t"$9}'

info "normalize.css file sizes:"
# shellcheck disable=SC2010
ls -alh dist | grep normalize | awk '{print $5"\t"$9}'

#!/usr/bin/env bash

# Preload base bash configuration and functions
source bgord-scripts/base.sh

info "Building design system CSS..."
node dist/index.js

info "Copying normalize.css to dist..."
cp src/normalize.css dist/

info "Running postcss..."
npx postcss dist/main.css -o dist/main.css

info "Running doiuse..."
npx doiuse --browsers " last 2 versions" dist/main.css

info "Minifying..."
npx clean-css-cli dist/main.css -o dist/main.min.css
npx clean-css-cli dist/normalize.css -o dist/normalize.min.css

info "Compressing..."
npx gzip dist/main.min.css --extension=gz --extension=br
npx gzip dist/normalize.min.css --extension=gz --extension=br

info "main.css file sizes:"
ls -alh dist | grep main | awk '{print $5"\t"$8}'

info "normalize.css file sizes:"
ls -alh dist | grep normalize | awk '{print $5"\t"$8}'

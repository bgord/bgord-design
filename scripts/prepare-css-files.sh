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
npx minify --css dist/main.css > dist/main.min.css
npx minify --css dist/normalize.css > dist/normalize.min.css

#!/usr/bin/env bash

# Preload base bash configuration and functions
source bgord-scripts/base.sh
setup_base_config

OUTPUT_DIRECTORY="dist"

step_start "Package build"
bun build src/index.ts --format esm --outdir $OUTPUT_DIRECTORY
step_end "Package build"

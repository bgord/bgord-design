import { type TokenConfigType, TokenGenerator } from "./template";

export class GrayscaleTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    /* ───────── PURE CONTRAST / OVER-LAYERS ───────── */
    "color-neutral-0": "oklch(0.98 0.01 275)", // pure-white text & icons on 900-950 backgrounds
    "color-neutral-50": "oklch(0.95 0.01 275)", // subtle pressed / ripple overlay on 900-950

    /* ───────── INTERACTIVE HIGHLIGHTS ───────────── */
    "color-neutral-100": "oklch(0.90 0.01 275)", // hover state for primary button, hairline dividers
    "color-neutral-200": "oklch(0.82 0.01 275)", // primary button fill, skeleton loaders

    /* ───────── TEXT & ICON TIERS ────────────────── */
    "color-neutral-300": "oklch(0.72 0.01 275)", // tertiary text, disabled icon, ghost link
    "color-neutral-400": "oklch(0.60 0.01 275)", // secondary body text, placeholder text
    "color-neutral-500": "oklch(0.49 0.01 275)", // muted text on surfaces 800-900
    "color-neutral-600": "oklch(0.38 0.01 275)", // subtle strokes / thin borders on 800-900
    "color-neutral-700": "oklch(0.27 0.01 275)", // high-emphasis headings on lighter in-card areas

    /* ───────── SURFACE LAYERS (DARK MODE) ───────── */
    "color-neutral-800": "oklch(0.22 0.01 275)", // filled inputs & secondary buttons over 900 bg
    "color-neutral-900": "oklch(0.18 0.01 275)", // card / sheet background above body
    "color-neutral-950": "oklch(0.12 0.01 275)", // app body / root canvas (OLED-black feel)
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Grayscale", overrides);
  }
}

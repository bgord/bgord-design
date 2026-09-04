/* cSpell:ignore oklch */
import { type TokenConfigType, TokenGenerator } from "./template";

export class GrayscaleTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    /* ───────── PURE CONTRAST / OVER-LAYERS ───────── */
    "color-neutral-0": "oklch(0.99 0 265)", // max-contrast text & icons on filled accents
    "color-neutral-50": "oklch(0.96 0.002 265)", // subtle pressed / ripple overlay on 900-950

    /* ───────── TEXT & ICON TIERS ────────────────── */
    "color-neutral-100": "oklch(0.91 0.003 265)", // emphasized headings, high-contrast icons
    "color-neutral-200": "oklch(0.85 0.004 265)", // primary body text
    "color-neutral-300": "oklch(0.75 0.005 265)", // secondary body text
    "color-neutral-400": "oklch(0.65 0.007 265)", // muted text & placeholders — lowest AA-safe tier
    "color-neutral-500": "oklch(0.55 0.009 265)", // disabled text, large text — AA Large only

    /* ───────── BORDERS ──────────────────────────── */
    "color-neutral-600": "oklch(0.46 0.011 265)", // strong borders, focus outlines on dark
    "color-neutral-700": "oklch(0.37 0.013 265)", // default borders, secondary button fill

    /* ───────── SURFACE LAYERS (DARK MODE) ───────── */
    "color-neutral-800": "oklch(0.29 0.015 265)", // hover / overlay surface, subtle borders
    "color-neutral-850": "oklch(0.235 0.016 265)", // filled inputs & secondary buttons over 900
    "color-neutral-900": "oklch(0.185 0.017 265)", // card / sheet background above body
    "color-neutral-950": "oklch(0.13 0.018 265)", // app body / root canvas
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Grayscale", overrides);
  }
}

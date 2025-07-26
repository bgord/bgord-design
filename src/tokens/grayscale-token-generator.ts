import { TokenConfigType, TokenGenerator } from "./template";

export class GrayscaleTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "color-neutral-0": "oklch(0.98  0.01  275)", // surface-0 (pure white)
    "color-neutral-50": "oklch(0.95  0.01  275)", // subtle panel bg
    "color-neutral-100": "oklch(0.90  0.01  275)", // card bg / input bg
    "color-neutral-200": "oklch(0.82  0.01  275)", // borders
    "color-neutral-300": "oklch(0.72  0.01  275)", // dividers / disabled icon
    "color-neutral-400": "oklch(0.60  0.01  275)", // secondary text
    "color-neutral-500": "oklch(0.49  0.01  275)", // tertiary text
    "color-neutral-600": "oklch(0.38  0.01  275)", // primary body text
    "color-neutral-700": "oklch(0.27  0.01  275)", // headings
    "color-neutral-800": "oklch(0.18  0.01  275)", // raised border on dark UI
    "color-neutral-900": "oklch(0.12  0.01  275)", // surface-0 in **dark** theme
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Grayscale", overrides);
  }
}

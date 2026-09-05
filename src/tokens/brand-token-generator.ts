/* cSpell:ignore oklch */
import { type TokenConfigType, TokenGenerator } from "./template";

export class BrandTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "color-brand-50": "oklch(0.94  0.06  255)",
    "color-brand-100": "oklch(0.86  0.09  255)",
    "color-brand-200": "oklch(0.78  0.11  255)",
    "color-brand-300": "oklch(0.67  0.14  255)",
    "color-brand-400": "oklch(0.58  0.155 255)",
    "color-brand-500": "oklch(0.50  0.165 255)",
    "color-brand-600": "oklch(0.40  0.155 255)",
    "color-brand-700": "oklch(0.31  0.14  255)",
    "color-brand-800": "oklch(0.24  0.12  255)",
    "color-brand-900": "oklch(0.18  0.10  255)",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Brand", overrides);
  }
}

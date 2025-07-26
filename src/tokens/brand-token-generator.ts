import { TokenConfigType, TokenGenerator } from "./template";

export class BrandTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "color-brand-50": "oklch(0.94  0.07  255)",
    "color-brand-100": "oklch(0.86  0.10  255)",
    "color-brand-200": "oklch(0.78  0.12  255)",
    "color-brand-300": "oklch(0.67  0.15  255)",
    "color-brand-400": "oklch(0.56  0.18  255)",
    "color-brand-500": "oklch(0.46  0.20  255)",
    "color-brand-600": "oklch(0.38  0.18  255)",
    "color-brand-700": "oklch(0.30  0.17  255)",
    "color-brand-800": "oklch(0.24  0.15  255)",
    "color-brand-900": "oklch(0.18  0.12  255)",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Brand", overrides);
  }
}

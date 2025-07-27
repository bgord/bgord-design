import { TokenConfigType, TokenGenerator } from "./template";

export class PositiveTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "color-positive-100": "oklch(0.93 0.06 145)",
    "color-positive-300": "oklch(0.78 0.11 145)",
    "color-positive-500": "oklch(0.46 0.18 145)",
    "color-positive-700": "oklch(0.30 0.15 145)",
    "color-positive-900": "oklch(0.18 0.12 145)",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Positive", overrides);
  }
}

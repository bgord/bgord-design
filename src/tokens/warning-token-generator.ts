import { type TokenConfigType, TokenGenerator } from "./template";

export class WarningTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "color-warning-100": "oklch(0.97 0.06 85)",
    "color-warning-300": "oklch(0.86 0.12 85)",
    "color-warning-500": "oklch(0.67 0.20 85)",
    "color-warning-700": "oklch(0.46 0.18 85)",
    "color-warning-900": "oklch(0.30 0.14 85)",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Warning", overrides);
  }
}

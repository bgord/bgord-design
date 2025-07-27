import { TokenConfigType, TokenGenerator } from "./template";

export class DangerTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "color-danger-100": "oklch(0.93 0.06 25)",
    "color-danger-300": "oklch(0.78 0.12 25)",
    "color-danger-500": "oklch(0.46 0.22 25)",
    "color-danger-700": "oklch(0.30 0.18 25)",
    "color-danger-900": "oklch(0.18 0.12 25)",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Danger", overrides);
  }
}

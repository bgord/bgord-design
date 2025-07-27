import { TokenConfigType, TokenGenerator } from "./template";

export class DangerTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "color-danger-0": "oklch(0.96 0.21  28)", // text/icons on 900-950
    "color-danger-100": "oklch(0.88 0.20  28)", // hover, ripple
    "color-danger-200": "oklch(0.76 0.20  28)", // filled destructive btn, badge
    "color-danger-400": "oklch(0.60 0.18  28)", // ← mirrors pos-1 in L
    "color-danger-600": "oklch(0.44 0.15  28)", // strokes on 800-900
    "color-danger-800": "oklch(0.30 0.12  28)", // tinted surface panel
    "color-danger-900": "oklch(0.22 0.11  28)", // deepest overlay on 950
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Danger", overrides);
  }
}

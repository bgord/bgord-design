import { type TokenConfigType, TokenGenerator } from "./template";

export class PositiveTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "color-positive-0": "oklch(0.96 0.19 155)", // text/icons on 900-950
    "color-positive-100": "oklch(0.88 0.18 155)", // hover, focus ring
    "color-positive-200": "oklch(0.76 0.17 155)", // filled success btn, badge
    "color-positive-400": "oklch(0.60 0.14 155)", // ← your current pos-1
    "color-positive-600": "oklch(0.44 0.12 155)", // strokes on 800-900
    "color-positive-800": "oklch(0.30 0.10 155)", // tinted surface panel
    "color-positive-900": "oklch(0.22 0.10 155)", // deepest overlay on 950
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Positive", overrides);
  }
}

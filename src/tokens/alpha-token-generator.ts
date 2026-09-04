import { type TokenConfigType, TokenGenerator } from "./template";

export class AlphaTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "color-alpha-subtle": "rgba(255 255 255 / 0.06)", // hairline dividers
    "color-alpha-soft": "rgba(255 255 255 / 0.1)", // default borders, hover overlay
    "color-alpha-medium": "rgba(255 255 255 / 0.16)", // strong borders, pressed overlay
  };

  light: TokenConfigType = {
    "color-alpha-subtle": "rgba(0 0 0 / 0.06)",
    "color-alpha-soft": "rgba(0 0 0 / 0.1)",
    "color-alpha-medium": "rgba(0 0 0 / 0.16)",
  };

  constructor(overrides: TokenConfigType = {}, lightOverrides: TokenConfigType = {}) {
    super("Alpha", overrides, lightOverrides);
  }
}

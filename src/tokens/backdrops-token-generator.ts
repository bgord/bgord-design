import { TokenConfigType, TokenGenerator } from "./template";

export class BackdropsTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "backdrop-none": "none",
    "backdrop-weak": "rgba(0 0 0 / 0.35)",
    "backdrop-medium": "rgba(0 0 0 / 0.6)",
    "backdrop-strong": "rgba(0 0 0 / 0.75)",
    "backdrop-stronger": "rgba(0 0 0 / 0.85)",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Backdrops", overrides);
  }
}

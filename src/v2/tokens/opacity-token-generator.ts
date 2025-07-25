import { TokenConfigType, TokenGenerator } from "./template";

export class OpacityTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "opacity-high": "0.8",
    "opacity-medium": "0.5",
    "opacity-low": "0.2",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Opacity", overrides);
  }
}

import { type TokenConfigType, TokenGenerator } from "./template";

export class ZIndexTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "z-index-negative": "-1",
    "z-index-0": "0",
    "z-index-1": "1",
    "z-index-2": "2",
    "z-index-3": "3",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("ZIndex", overrides);
  }
}

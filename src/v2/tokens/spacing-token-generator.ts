import { TokenConfigType, TokenGenerator } from "./template";

export class SpacingTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "spacing-0": "0rem", // 0 px
    "spacing-0-5": "0.125rem", // 2 px
    "spacing-1": "0.25rem", // 4 px
    "spacing-1-5": "0.375rem", // 6 px
    "spacing-2": "0.5rem", // 8 px
    "spacing-2-5": "0.625rem", // 10 px
    "spacing-3": "0.75rem", // 12 px
    "spacing-4": "1rem", // 16 px - default body
    "spacing-5": "1.25rem", // 20 px
    "spacing-6": "1.5rem", // 24 px
    "spacing-8": "2rem", //  32 px
    "spacing-12": "3rem", // 48 px
    "spacing-16": "4rem", // 64 px
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Spacing", overrides);
  }
}

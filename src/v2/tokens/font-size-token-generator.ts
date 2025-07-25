import { TokenConfigType, TokenGenerator } from "./template";

export class FontSizeTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "font-size-xs": "0.75rem", // 12 px
    "font-size-sm": "0.875rem", // 14 px
    "font-size-base": "1rem", // 16 px  ← default body
    "font-size-lg": "1.125rem", // 18 px
    "font-size-xl": "1.25rem", // 20 px
    "font-size-2xl": "1.5rem", // 24 px
    "font-size-3xl": "1.875rem", // 30 px
    "font-size-4xl": "2.25rem", // 36 px
    "font-size-5xl": "3rem", // 48 px
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Font size", overrides);
  }
}

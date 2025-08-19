import { type TokenConfigType, TokenGenerator } from "./template";

export class FontFamilyTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "font-family-sans": "system-ui, sans-serif",
    "font-family-serif": "Georgia, serif",
    "font-family-mono": '"SFMono-Regular", monospace',
  };

  constructor(overrides: TokenConfigType = {}) {
    super("FontFamily", overrides);
  }
}

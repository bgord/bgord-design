/* cSpell:ignore Roboto Cambria Segoe Menlo Consolas monospace BlinkMacSystemFont Neue */
import { type TokenConfigType, TokenGenerator } from "./template";

export class FontFamilyTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "font-family-sans": [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
    ].join(", "),

    "font-family-serif": ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"].join(", "),

    "font-family-mono": [
      "ui-monospace",
      "SFMono-Regular",
      '"SF Mono"',
      "Menlo",
      "Consolas",
      '"Liberation Mono"',
      "monospace",
    ].join(", "),
  };

  constructor(overrides: TokenConfigType = {}) {
    super("FontFamily", overrides);
  }
}

import { describe, expect, test } from "bun:test";
import { FontFamilyTokenGenerator } from "../src/tokens";

describe("FontFamilyTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new FontFamilyTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --font-family-sans: system-ui, sans-serif;
      --font-family-serif: Georgia, serif;
      --font-family-mono: "SFMono-Regular", monospace;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const FontFamilyTokens = {
        "font-family-sans": "system-ui, sans-serif",
        "font-family-serif": "Georgia, serif",
        "font-family-mono": "\\"SFMono-Regular\\", monospace"
      } as const;

      export type FontFamilyTokenType = keyof typeof FontFamilyTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "font-family-custom": "Comic Sans MS" };
    const generator = new FontFamilyTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --font-family-sans: system-ui, sans-serif;
      --font-family-serif: Georgia, serif;
      --font-family-mono: "SFMono-Regular", monospace;
      --font-family-custom: Comic Sans MS;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const FontFamilyTokens = {
        "font-family-sans": "system-ui, sans-serif",
        "font-family-serif": "Georgia, serif",
        "font-family-mono": "\\"SFMono-Regular\\", monospace",
        "font-family-custom": "Comic Sans MS"
      } as const;

      export type FontFamilyTokenType = keyof typeof FontFamilyTokens;
    `);
  });
});

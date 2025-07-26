import { describe, expect, test } from "bun:test";
import { FontFamilyTokenGenerator } from "../src/tokens";

describe("FontFamilyTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new FontFamilyTokenGenerator();
    const expectedConfig = generator.base;
    const constName = "FontFamilyTokens";
    const expectedTs = [
      `export const ${constName} = ${JSON.stringify(expectedConfig, null, 2)} as const;`,
      `export type FontFamilyTokenType = keyof typeof ${constName};`,
      "",
    ].join("\n");

    expect(generator.getConfig()).toEqual(expectedConfig);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* FontFamily */
      --font-family-sans: system-ui, sans-serif;
      --font-family-serif: Georgia, serif;
      --font-family-mono: "SFMono-Regular", monospace;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(expectedTs);
  });

  test("with overrides", () => {
    const overrides = { "font-family-custom": "Comic Sans MS" };
    const generator = new FontFamilyTokenGenerator(overrides);
    const expectedConfig = { ...generator.base, ...overrides };
    const constName = "FontFamilyTokens";
    const expectedTs = [
      `export const ${constName} = ${JSON.stringify(expectedConfig, null, 2)} as const;`,
      `export type FontFamilyTokenType = keyof typeof ${constName};`,
      "",
    ].join("\n");

    expect(generator.getConfig()).toEqual(expectedConfig);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* FontFamily */
      --font-family-sans: system-ui, sans-serif;
      --font-family-serif: Georgia, serif;
      --font-family-mono: "SFMono-Regular", monospace;
      --font-family-custom: Comic Sans MS;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(expectedTs);
  });
});

import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { FontFamilyUtilityGenerator } from "../src/utilities";

describe("FontFamilyUtilityGenerator", () => {
  test("basic usage", () => {
    const FontFamilyTokenGenerator = new Tokens.FontFamilyTokenGenerator();
    const generator = new FontFamilyUtilityGenerator(FontFamilyTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-ff='sans'] { font-family: var(--font-family-sans); }
      [data-ff='serif'] { font-family: var(--font-family-serif); }
      [data-ff='mono'] { font-family: var(--font-family-mono); }
    `);

    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-ff"?: "sans" | "serif" | "mono";
    `);
  });

  test("with overrides", () => {
    const FontFamilyTokenGenerator = new Tokens.FontFamilyTokenGenerator({
      "font-family-comic": "Comic Sans",
    });
    const generator = new FontFamilyUtilityGenerator(FontFamilyTokenGenerator);

    expect(generator.css()).toContain("[data-ff='comic'] { font-family: var(--font-family-comic); }");
    expect(generator.toTypeScript()).toContain('"comic"');
  });
});

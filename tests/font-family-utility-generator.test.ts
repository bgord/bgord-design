import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { FontFamilyUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("FontFamilyUtilityGenerator", () => {
  test("basic usage", () => {
    const FontFamilyTokenGenerator = new Tokens.FontFamilyTokenGenerator();
    const generator = new FontFamilyUtilityGenerator(breakpoints, FontFamilyTokenGenerator);

    expect(generator.name).toEqual("Font-family utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-ff='sans'] { font-family: var(--font-family-sans); }
      [data-ff='serif'] { font-family: var(--font-family-serif); }
      [data-ff='mono'] { font-family: var(--font-family-mono); }

      @media (max-width: 768px) {
        [data-md-ff='sans'] { font-family: var(--font-family-sans); }
        [data-md-ff='serif'] { font-family: var(--font-family-serif); }
        [data-md-ff='mono'] { font-family: var(--font-family-mono); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-ff"?: "sans" | "serif" | "mono";
    `);
  });

  test("with overrides", () => {
    const FontFamilyTokenGenerator = new Tokens.FontFamilyTokenGenerator({
      "font-family-comic": "Comic Sans",
    });
    const generator = new FontFamilyUtilityGenerator(breakpoints, FontFamilyTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-ff='sans'] { font-family: var(--font-family-sans); }
      [data-ff='serif'] { font-family: var(--font-family-serif); }
      [data-ff='mono'] { font-family: var(--font-family-mono); }
      [data-ff='comic'] { font-family: var(--font-family-comic); }

      @media (max-width: 768px) {
        [data-md-ff='sans'] { font-family: var(--font-family-sans); }
        [data-md-ff='serif'] { font-family: var(--font-family-serif); }
        [data-md-ff='mono'] { font-family: var(--font-family-mono); }
        [data-md-ff='comic'] { font-family: var(--font-family-comic); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-ff"?: "sans" | "serif" | "mono" | "comic";
    `);
  });
});

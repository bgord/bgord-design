import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { FontSizeUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("FontSizeUtilityGenerator", () => {
  test("basic usage", () => {
    const FontSizeTokenGenerator = new Tokens.FontSizeTokenGenerator();
    const generator = new FontSizeUtilityGenerator(breakpoints, FontSizeTokenGenerator);

    expect(generator.name).toEqual("Font-size utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-fs='xs'] { font-size: var(--font-size-xs); }
      [data-fs='sm'] { font-size: var(--font-size-sm); }
      [data-fs='base'] { font-size: var(--font-size-base); }
      [data-fs='lg'] { font-size: var(--font-size-lg); }
      [data-fs='xl'] { font-size: var(--font-size-xl); }
      [data-fs='2xl'] { font-size: var(--font-size-2xl); }
      [data-fs='3xl'] { font-size: var(--font-size-3xl); }
      [data-fs='4xl'] { font-size: var(--font-size-4xl); }
      [data-fs='5xl'] { font-size: var(--font-size-5xl); }

      @media (max-width: 768px) {
        [data-md-fs='xs'] { font-size: var(--font-size-xs); }
        [data-md-fs='sm'] { font-size: var(--font-size-sm); }
        [data-md-fs='base'] { font-size: var(--font-size-base); }
        [data-md-fs='lg'] { font-size: var(--font-size-lg); }
        [data-md-fs='xl'] { font-size: var(--font-size-xl); }
        [data-md-fs='2xl'] { font-size: var(--font-size-2xl); }
        [data-md-fs='3xl'] { font-size: var(--font-size-3xl); }
        [data-md-fs='4xl'] { font-size: var(--font-size-4xl); }
        [data-md-fs='5xl'] { font-size: var(--font-size-5xl); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-fs"?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
    `);
  });

  test("with overrides", () => {
    const FontSizeTokenGenerator = new Tokens.FontSizeTokenGenerator({ "font-size-biggie": "100px" });
    const generator = new FontSizeUtilityGenerator(breakpoints, FontSizeTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-fs='xs'] { font-size: var(--font-size-xs); }
      [data-fs='sm'] { font-size: var(--font-size-sm); }
      [data-fs='base'] { font-size: var(--font-size-base); }
      [data-fs='lg'] { font-size: var(--font-size-lg); }
      [data-fs='xl'] { font-size: var(--font-size-xl); }
      [data-fs='2xl'] { font-size: var(--font-size-2xl); }
      [data-fs='3xl'] { font-size: var(--font-size-3xl); }
      [data-fs='4xl'] { font-size: var(--font-size-4xl); }
      [data-fs='5xl'] { font-size: var(--font-size-5xl); }
      [data-fs='biggie'] { font-size: var(--font-size-biggie); }

      @media (max-width: 768px) {
        [data-md-fs='xs'] { font-size: var(--font-size-xs); }
        [data-md-fs='sm'] { font-size: var(--font-size-sm); }
        [data-md-fs='base'] { font-size: var(--font-size-base); }
        [data-md-fs='lg'] { font-size: var(--font-size-lg); }
        [data-md-fs='xl'] { font-size: var(--font-size-xl); }
        [data-md-fs='2xl'] { font-size: var(--font-size-2xl); }
        [data-md-fs='3xl'] { font-size: var(--font-size-3xl); }
        [data-md-fs='4xl'] { font-size: var(--font-size-4xl); }
        [data-md-fs='5xl'] { font-size: var(--font-size-5xl); }
        [data-md-fs='biggie'] { font-size: var(--font-size-biggie); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-fs"?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "biggie";
    `);
  });
});

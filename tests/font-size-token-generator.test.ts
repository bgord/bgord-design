import { describe, expect, test } from "bun:test";
import { FontSizeTokenGenerator } from "../src/tokens";

describe("FontSizeTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new FontSizeTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --font-size-xs: 0.75rem;
      --font-size-sm: 0.875rem;
      --font-size-base: 1rem;
      --font-size-lg: 1.125rem;
      --font-size-xl: 1.25rem;
      --font-size-2xl: 1.5rem;
      --font-size-3xl: 1.875rem;
      --font-size-4xl: 2.25rem;
      --font-size-5xl: clamp(2.25rem, 1.75rem + 2.5vw, 3rem);
      --font-size-6xl: clamp(2.75rem, 2rem + 3.75vw, 3.75rem);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const FontSizeTokens = {
        "font-size-xs": "0.75rem",
        "font-size-sm": "0.875rem",
        "font-size-base": "1rem",
        "font-size-lg": "1.125rem",
        "font-size-xl": "1.25rem",
        "font-size-2xl": "1.5rem",
        "font-size-3xl": "1.875rem",
        "font-size-4xl": "2.25rem",
        "font-size-5xl": "clamp(2.25rem, 1.75rem + 2.5vw, 3rem)",
        "font-size-6xl": "clamp(2.75rem, 2rem + 3.75vw, 3.75rem)"
      } as const;

      export type FontSizeTokenType = keyof typeof FontSizeTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "font-size-biggie": " 100px" };
    const generator = new FontSizeTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --font-size-xs: 0.75rem;
      --font-size-sm: 0.875rem;
      --font-size-base: 1rem;
      --font-size-lg: 1.125rem;
      --font-size-xl: 1.25rem;
      --font-size-2xl: 1.5rem;
      --font-size-3xl: 1.875rem;
      --font-size-4xl: 2.25rem;
      --font-size-5xl: clamp(2.25rem, 1.75rem + 2.5vw, 3rem);
      --font-size-6xl: clamp(2.75rem, 2rem + 3.75vw, 3.75rem);
      --font-size-biggie: 100px;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const FontSizeTokens = {
        "font-size-xs": "0.75rem",
        "font-size-sm": "0.875rem",
        "font-size-base": "1rem",
        "font-size-lg": "1.125rem",
        "font-size-xl": "1.25rem",
        "font-size-2xl": "1.5rem",
        "font-size-3xl": "1.875rem",
        "font-size-4xl": "2.25rem",
        "font-size-5xl": "clamp(2.25rem, 1.75rem + 2.5vw, 3rem)",
        "font-size-6xl": "clamp(2.75rem, 2rem + 3.75vw, 3.75rem)",
        "font-size-biggie": "100px"
      } as const;

      export type FontSizeTokenType = keyof typeof FontSizeTokens;
    `);
  });
});

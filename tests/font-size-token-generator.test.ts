import { describe, expect, test } from "bun:test";
import { FontSizeTokenGenerator } from "../src/tokens";

describe("FontSizeTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new FontSizeTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* FontSize */
      --font-size-xs: 0.75rem;
      --font-size-sm: 0.875rem;
      --font-size-base: 1rem;
      --font-size-lg: 1.125rem;
      --font-size-xl: 1.25rem;
      --font-size-2xl: 1.5rem;
      --font-size-3xl: 1.875rem;
      --font-size-4xl: 2.25rem;
      --font-size-5xl: 3rem;
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
        "font-size-5xl": "3rem"
      } as const;

      export type FontSizeTokenType = keyof typeof FontSizeTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "font-size-biggie": " 100px" };
    const generator = new FontSizeTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* FontSize */
      --font-size-xs: 0.75rem;
      --font-size-sm: 0.875rem;
      --font-size-base: 1rem;
      --font-size-lg: 1.125rem;
      --font-size-xl: 1.25rem;
      --font-size-2xl: 1.5rem;
      --font-size-3xl: 1.875rem;
      --font-size-4xl: 2.25rem;
      --font-size-5xl: 3rem;
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
        "font-size-5xl": "3rem",
        "font-size-biggie": "100px"
      } as const;

      export type FontSizeTokenType = keyof typeof FontSizeTokens;
    `);
  });
});

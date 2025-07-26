import { describe, expect, test } from "bun:test";
import { BrandTokenGenerator } from "../src/tokens";

describe("BrandTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new BrandTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Brand */
      --color-brand-50: oklch(0.94  0.07  255);
      --color-brand-100: oklch(0.86  0.10  255);
      --color-brand-200: oklch(0.78  0.12  255);
      --color-brand-300: oklch(0.67  0.15  255);
      --color-brand-400: oklch(0.56  0.18  255);
      --color-brand-500: oklch(0.46  0.20  255);
      --color-brand-600: oklch(0.38  0.18  255);
      --color-brand-700: oklch(0.30  0.17  255);
      --color-brand-800: oklch(0.24  0.15  255);
      --color-brand-900: oklch(0.18  0.12  255);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const BrandTokens = {
        "color-brand-50": "oklch(0.94  0.07  255)",
        "color-brand-100": "oklch(0.86  0.10  255)",
        "color-brand-200": "oklch(0.78  0.12  255)",
        "color-brand-300": "oklch(0.67  0.15  255)",
        "color-brand-400": "oklch(0.56  0.18  255)",
        "color-brand-500": "oklch(0.46  0.20  255)",
        "color-brand-600": "oklch(0.38  0.18  255)",
        "color-brand-700": "oklch(0.30  0.17  255)",
        "color-brand-800": "oklch(0.24  0.15  255)",
        "color-brand-900": "oklch(0.18  0.12  255)"
      } as const;

      export type BrandTokenType = keyof typeof BrandTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "color-brand-custom": "oklch(0.5 0.5 255)" };
    const generator = new BrandTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Brand */
      --color-brand-50: oklch(0.94  0.07  255);
      --color-brand-100: oklch(0.86  0.10  255);
      --color-brand-200: oklch(0.78  0.12  255);
      --color-brand-300: oklch(0.67  0.15  255);
      --color-brand-400: oklch(0.56  0.18  255);
      --color-brand-500: oklch(0.46  0.20  255);
      --color-brand-600: oklch(0.38  0.18  255);
      --color-brand-700: oklch(0.30  0.17  255);
      --color-brand-800: oklch(0.24  0.15  255);
      --color-brand-900: oklch(0.18  0.12  255);
      --color-brand-custom: oklch(0.5 0.5 255);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const BrandTokens = {
        "color-brand-50": "oklch(0.94  0.07  255)",
        "color-brand-100": "oklch(0.86  0.10  255)",
        "color-brand-200": "oklch(0.78  0.12  255)",
        "color-brand-300": "oklch(0.67  0.15  255)",
        "color-brand-400": "oklch(0.56  0.18  255)",
        "color-brand-500": "oklch(0.46  0.20  255)",
        "color-brand-600": "oklch(0.38  0.18  255)",
        "color-brand-700": "oklch(0.30  0.17  255)",
        "color-brand-800": "oklch(0.24  0.15  255)",
        "color-brand-900": "oklch(0.18  0.12  255)",
        "color-brand-custom": "oklch(0.5 0.5 255)"
      } as const;

      export type BrandTokenType = keyof typeof BrandTokens;
    `);
  });
});

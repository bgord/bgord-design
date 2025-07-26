import { describe, expect, test } from "bun:test";
import { GrayscaleTokenGenerator } from "../src/tokens";

describe("GrayscaleTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new GrayscaleTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-neutral-0: oklch(0.98  0.01  275);
      --color-neutral-50: oklch(0.95  0.01  275);
      --color-neutral-100: oklch(0.90  0.01  275);
      --color-neutral-200: oklch(0.82  0.01  275);
      --color-neutral-300: oklch(0.72  0.01  275);
      --color-neutral-400: oklch(0.60  0.01  275);
      --color-neutral-500: oklch(0.49  0.01  275);
      --color-neutral-600: oklch(0.38  0.01  275);
      --color-neutral-700: oklch(0.27  0.01  275);
      --color-neutral-800: oklch(0.18  0.01  275);
      --color-neutral-900: oklch(0.12  0.01  275);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const GrayscaleTokens = {
        "color-neutral-0": "oklch(0.98  0.01  275)",
        "color-neutral-50": "oklch(0.95  0.01  275)",
        "color-neutral-100": "oklch(0.90  0.01  275)",
        "color-neutral-200": "oklch(0.82  0.01  275)",
        "color-neutral-300": "oklch(0.72  0.01  275)",
        "color-neutral-400": "oklch(0.60  0.01  275)",
        "color-neutral-500": "oklch(0.49  0.01  275)",
        "color-neutral-600": "oklch(0.38  0.01  275)",
        "color-neutral-700": "oklch(0.27  0.01  275)",
        "color-neutral-800": "oklch(0.18  0.01  275)",
        "color-neutral-900": "oklch(0.12  0.01  275)"
      } as const;

      export type GrayscaleTokenType = keyof typeof GrayscaleTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "color-neutral-custom": "oklch(0.5 0.5 275)" };
    const generator = new GrayscaleTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-neutral-0: oklch(0.98  0.01  275);
      --color-neutral-50: oklch(0.95  0.01  275);
      --color-neutral-100: oklch(0.90  0.01  275);
      --color-neutral-200: oklch(0.82  0.01  275);
      --color-neutral-300: oklch(0.72  0.01  275);
      --color-neutral-400: oklch(0.60  0.01  275);
      --color-neutral-500: oklch(0.49  0.01  275);
      --color-neutral-600: oklch(0.38  0.01  275);
      --color-neutral-700: oklch(0.27  0.01  275);
      --color-neutral-800: oklch(0.18  0.01  275);
      --color-neutral-900: oklch(0.12  0.01  275);
      --color-neutral-custom: oklch(0.5 0.5 275);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const GrayscaleTokens = {
        "color-neutral-0": "oklch(0.98  0.01  275)",
        "color-neutral-50": "oklch(0.95  0.01  275)",
        "color-neutral-100": "oklch(0.90  0.01  275)",
        "color-neutral-200": "oklch(0.82  0.01  275)",
        "color-neutral-300": "oklch(0.72  0.01  275)",
        "color-neutral-400": "oklch(0.60  0.01  275)",
        "color-neutral-500": "oklch(0.49  0.01  275)",
        "color-neutral-600": "oklch(0.38  0.01  275)",
        "color-neutral-700": "oklch(0.27  0.01  275)",
        "color-neutral-800": "oklch(0.18  0.01  275)",
        "color-neutral-900": "oklch(0.12  0.01  275)",
        "color-neutral-custom": "oklch(0.5 0.5 275)"
      } as const;

      export type GrayscaleTokenType = keyof typeof GrayscaleTokens;
    `);
  });
});

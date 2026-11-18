import { describe, expect, test } from "bun:test";
import { PositiveTokenGenerator } from "../src/tokens";

describe("PositiveTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new PositiveTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-positive-0: oklch(0.96 0.19 155);
      --color-positive-100: oklch(0.88 0.18 155);
      --color-positive-200: oklch(0.76 0.17 155);
      --color-positive-400: oklch(0.60 0.14 155);
      --color-positive-600: oklch(0.44 0.12 155);
      --color-positive-800: oklch(0.30 0.10 155);
      --color-positive-900: oklch(0.22 0.10 155);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const PositiveTokens = {
        "color-positive-0": "oklch(0.96 0.19 155)",
        "color-positive-100": "oklch(0.88 0.18 155)",
        "color-positive-200": "oklch(0.76 0.17 155)",
        "color-positive-400": "oklch(0.60 0.14 155)",
        "color-positive-600": "oklch(0.44 0.12 155)",
        "color-positive-800": "oklch(0.30 0.10 155)",
        "color-positive-900": "oklch(0.22 0.10 155)"
      } as const;

      export type PositiveTokenType = keyof typeof PositiveTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "color-positive-custom": "oklch(0.5 0.5 145)" };
    const generator = new PositiveTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-positive-0: oklch(0.96 0.19 155);
      --color-positive-100: oklch(0.88 0.18 155);
      --color-positive-200: oklch(0.76 0.17 155);
      --color-positive-400: oklch(0.60 0.14 155);
      --color-positive-600: oklch(0.44 0.12 155);
      --color-positive-800: oklch(0.30 0.10 155);
      --color-positive-900: oklch(0.22 0.10 155);
      --color-positive-custom: oklch(0.5 0.5 145);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const PositiveTokens = {
        "color-positive-0": "oklch(0.96 0.19 155)",
        "color-positive-100": "oklch(0.88 0.18 155)",
        "color-positive-200": "oklch(0.76 0.17 155)",
        "color-positive-400": "oklch(0.60 0.14 155)",
        "color-positive-600": "oklch(0.44 0.12 155)",
        "color-positive-800": "oklch(0.30 0.10 155)",
        "color-positive-900": "oklch(0.22 0.10 155)",
        "color-positive-custom": "oklch(0.5 0.5 145)"
      } as const;

      export type PositiveTokenType = keyof typeof PositiveTokens;
    `);
  });
});

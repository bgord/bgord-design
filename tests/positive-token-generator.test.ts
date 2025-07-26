import { describe, expect, test } from "bun:test";
import { PositiveTokenGenerator } from "../src/tokens";

describe("PositiveTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new PositiveTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Positive */
      --color-positive-100: oklch(0.93 0.06 145);
      --color-positive-300: oklch(0.78 0.11 145);
      --color-positive-500: oklch(0.46 0.18 145);
      --color-positive-700: oklch(0.30 0.15 145);
      --color-positive-900: oklch(0.18 0.12 145);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const PositiveTokens = {
        "color-positive-100": "oklch(0.93 0.06 145)",
        "color-positive-300": "oklch(0.78 0.11 145)",
        "color-positive-500": "oklch(0.46 0.18 145)",
        "color-positive-700": "oklch(0.30 0.15 145)",
        "color-positive-900": "oklch(0.18 0.12 145)"
      } as const;

      export type PositiveTokenType = keyof typeof PositiveTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "color-positive-custom": "oklch(0.5 0.5 145)" };
    const generator = new PositiveTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Positive */
      --color-positive-100: oklch(0.93 0.06 145);
      --color-positive-300: oklch(0.78 0.11 145);
      --color-positive-500: oklch(0.46 0.18 145);
      --color-positive-700: oklch(0.30 0.15 145);
      --color-positive-900: oklch(0.18 0.12 145);
      --color-positive-custom: oklch(0.5 0.5 145);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const PositiveTokens = {
        "color-positive-100": "oklch(0.93 0.06 145)",
        "color-positive-300": "oklch(0.78 0.11 145)",
        "color-positive-500": "oklch(0.46 0.18 145)",
        "color-positive-700": "oklch(0.30 0.15 145)",
        "color-positive-900": "oklch(0.18 0.12 145)",
        "color-positive-custom": "oklch(0.5 0.5 145)"
      } as const;

      export type PositiveTokenType = keyof typeof PositiveTokens;
    `);
  });
});

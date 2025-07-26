import { describe, expect, test } from "bun:test";
import { WarningTokenGenerator } from "../src/tokens";

describe("WarningTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new WarningTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Warning */
      --color-warning-100: oklch(0.97 0.06 85);
      --color-warning-300: oklch(0.86 0.12 85);
      --color-warning-500: oklch(0.67 0.20 85);
      --color-warning-700: oklch(0.46 0.18 85);
      --color-warning-900: oklch(0.30 0.14 85);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const WarningTokens = {
        "color-warning-100": "oklch(0.97 0.06 85)",
        "color-warning-300": "oklch(0.86 0.12 85)",
        "color-warning-500": "oklch(0.67 0.20 85)",
        "color-warning-700": "oklch(0.46 0.18 85)",
        "color-warning-900": "oklch(0.30 0.14 85)"
      } as const;

      export type WarningTokenType = keyof typeof WarningTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "color-warning-custom": "oklch(0.5 0.5 85)" };
    const generator = new WarningTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Warning */
      --color-warning-100: oklch(0.97 0.06 85);
      --color-warning-300: oklch(0.86 0.12 85);
      --color-warning-500: oklch(0.67 0.20 85);
      --color-warning-700: oklch(0.46 0.18 85);
      --color-warning-900: oklch(0.30 0.14 85);
      --color-warning-custom: oklch(0.5 0.5 85);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const WarningTokens = {
        "color-warning-100": "oklch(0.97 0.06 85)",
        "color-warning-300": "oklch(0.86 0.12 85)",
        "color-warning-500": "oklch(0.67 0.20 85)",
        "color-warning-700": "oklch(0.46 0.18 85)",
        "color-warning-900": "oklch(0.30 0.14 85)",
        "color-warning-custom": "oklch(0.5 0.5 85)"
      } as const;

      export type WarningTokenType = keyof typeof WarningTokens;
    `);
  });
});

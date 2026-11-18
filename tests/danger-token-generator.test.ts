import { describe, expect, test } from "bun:test";
import { DangerTokenGenerator } from "../src/tokens";

describe("DangerTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new DangerTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-danger-0: oklch(0.96 0.21  28);
      --color-danger-100: oklch(0.88 0.20  28);
      --color-danger-200: oklch(0.76 0.20  28);
      --color-danger-400: oklch(0.60 0.18  28);
      --color-danger-600: oklch(0.44 0.15  28);
      --color-danger-800: oklch(0.30 0.12  28);
      --color-danger-900: oklch(0.22 0.11  28);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const DangerTokens = {
        "color-danger-0": "oklch(0.96 0.21 28)",
        "color-danger-100": "oklch(0.88 0.20 28)",
        "color-danger-200": "oklch(0.76 0.20 28)",
        "color-danger-400": "oklch(0.60 0.18 28)",
        "color-danger-600": "oklch(0.44 0.15 28)",
        "color-danger-800": "oklch(0.30 0.12 28)",
        "color-danger-900": "oklch(0.22 0.11 28)"
      } as const;

      export type DangerTokenType = keyof typeof DangerTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "color-danger-custom": "oklch(0.5 0.5 25)" };
    const generator = new DangerTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-danger-0: oklch(0.96 0.21  28);
      --color-danger-100: oklch(0.88 0.20  28);
      --color-danger-200: oklch(0.76 0.20  28);
      --color-danger-400: oklch(0.60 0.18  28);
      --color-danger-600: oklch(0.44 0.15  28);
      --color-danger-800: oklch(0.30 0.12  28);
      --color-danger-900: oklch(0.22 0.11  28);
      --color-danger-custom: oklch(0.5 0.5 25);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const DangerTokens = {
        "color-danger-0": "oklch(0.96 0.21 28)",
        "color-danger-100": "oklch(0.88 0.20 28)",
        "color-danger-200": "oklch(0.76 0.20 28)",
        "color-danger-400": "oklch(0.60 0.18 28)",
        "color-danger-600": "oklch(0.44 0.15 28)",
        "color-danger-800": "oklch(0.30 0.12 28)",
        "color-danger-900": "oklch(0.22 0.11 28)",
        "color-danger-custom": "oklch(0.5 0.5 25)"
      } as const;

      export type DangerTokenType = keyof typeof DangerTokens;
    `);
  });
});

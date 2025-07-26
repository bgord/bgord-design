import { describe, expect, test } from "bun:test";
import { DangerTokenGenerator } from "../src/tokens";

describe("DangerTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new DangerTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-danger-100: oklch(0.93 0.06 25);
      --color-danger-300: oklch(0.78 0.12 25);
      --color-danger-500: oklch(0.46 0.22 25);
      --color-danger-700: oklch(0.30 0.18 25);
      --color-danger-900: oklch(0.18 0.12 25);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const DangerTokens = {
        "color-danger-100": "oklch(0.93 0.06 25)",
        "color-danger-300": "oklch(0.78 0.12 25)",
        "color-danger-500": "oklch(0.46 0.22 25)",
        "color-danger-700": "oklch(0.30 0.18 25)",
        "color-danger-900": "oklch(0.18 0.12 25)"
      } as const;

      export type DangerTokenType = keyof typeof DangerTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "color-danger-custom": "oklch(0.5 0.5 25)" };
    const generator = new DangerTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-danger-100: oklch(0.93 0.06 25);
      --color-danger-300: oklch(0.78 0.12 25);
      --color-danger-500: oklch(0.46 0.22 25);
      --color-danger-700: oklch(0.30 0.18 25);
      --color-danger-900: oklch(0.18 0.12 25);
      --color-danger-custom: oklch(0.5 0.5 25);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const DangerTokens = {
        "color-danger-100": "oklch(0.93 0.06 25)",
        "color-danger-300": "oklch(0.78 0.12 25)",
        "color-danger-500": "oklch(0.46 0.22 25)",
        "color-danger-700": "oklch(0.30 0.18 25)",
        "color-danger-900": "oklch(0.18 0.12 25)",
        "color-danger-custom": "oklch(0.5 0.5 25)"
      } as const;

      export type DangerTokenType = keyof typeof DangerTokens;
    `);
  });
});

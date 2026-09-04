/* cSpell:ignore oklch */
import { describe, expect, test } from "bun:test";
import { GrayscaleTokenGenerator } from "../src/tokens";

describe("GrayscaleTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new GrayscaleTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-neutral-0: oklch(0.99 0 265);
      --color-neutral-50: oklch(0.96 0.002 265);
      --color-neutral-100: oklch(0.91 0.003 265);
      --color-neutral-200: oklch(0.85 0.004 265);
      --color-neutral-300: oklch(0.75 0.005 265);
      --color-neutral-400: oklch(0.65 0.007 265);
      --color-neutral-500: oklch(0.55 0.009 265);
      --color-neutral-600: oklch(0.46 0.011 265);
      --color-neutral-700: oklch(0.37 0.013 265);
      --color-neutral-800: oklch(0.29 0.015 265);
      --color-neutral-850: oklch(0.235 0.016 265);
      --color-neutral-900: oklch(0.185 0.017 265);
      --color-neutral-950: oklch(0.13 0.018 265);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const GrayscaleTokens = {
        "color-neutral-0": "oklch(0.99 0 265)",
        "color-neutral-50": "oklch(0.96 0.002 265)",
        "color-neutral-100": "oklch(0.91 0.003 265)",
        "color-neutral-200": "oklch(0.85 0.004 265)",
        "color-neutral-300": "oklch(0.75 0.005 265)",
        "color-neutral-400": "oklch(0.65 0.007 265)",
        "color-neutral-500": "oklch(0.55 0.009 265)",
        "color-neutral-600": "oklch(0.46 0.011 265)",
        "color-neutral-700": "oklch(0.37 0.013 265)",
        "color-neutral-800": "oklch(0.29 0.015 265)",
        "color-neutral-850": "oklch(0.235 0.016 265)",
        "color-neutral-900": "oklch(0.185 0.017 265)",
        "color-neutral-950": "oklch(0.13 0.018 265)"
      } as const;

      export type GrayscaleTokenType = keyof typeof GrayscaleTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "color-neutral-custom": "oklch(0.5 0.5 265)" };
    const generator = new GrayscaleTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-neutral-0: oklch(0.99 0 265);
      --color-neutral-50: oklch(0.96 0.002 265);
      --color-neutral-100: oklch(0.91 0.003 265);
      --color-neutral-200: oklch(0.85 0.004 265);
      --color-neutral-300: oklch(0.75 0.005 265);
      --color-neutral-400: oklch(0.65 0.007 265);
      --color-neutral-500: oklch(0.55 0.009 265);
      --color-neutral-600: oklch(0.46 0.011 265);
      --color-neutral-700: oklch(0.37 0.013 265);
      --color-neutral-800: oklch(0.29 0.015 265);
      --color-neutral-850: oklch(0.235 0.016 265);
      --color-neutral-900: oklch(0.185 0.017 265);
      --color-neutral-950: oklch(0.13 0.018 265);
      --color-neutral-custom: oklch(0.5 0.5 265);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const GrayscaleTokens = {
        "color-neutral-0": "oklch(0.99 0 265)",
        "color-neutral-50": "oklch(0.96 0.002 265)",
        "color-neutral-100": "oklch(0.91 0.003 265)",
        "color-neutral-200": "oklch(0.85 0.004 265)",
        "color-neutral-300": "oklch(0.75 0.005 265)",
        "color-neutral-400": "oklch(0.65 0.007 265)",
        "color-neutral-500": "oklch(0.55 0.009 265)",
        "color-neutral-600": "oklch(0.46 0.011 265)",
        "color-neutral-700": "oklch(0.37 0.013 265)",
        "color-neutral-800": "oklch(0.29 0.015 265)",
        "color-neutral-850": "oklch(0.235 0.016 265)",
        "color-neutral-900": "oklch(0.185 0.017 265)",
        "color-neutral-950": "oklch(0.13 0.018 265)",
        "color-neutral-custom": "oklch(0.5 0.5 265)"
      } as const;

      export type GrayscaleTokenType = keyof typeof GrayscaleTokens;
    `);
  });
});

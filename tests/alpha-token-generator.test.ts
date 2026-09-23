import { describe, expect, test } from "bun:test";
import { AlphaTokenGenerator } from "../src/tokens";

describe("AlphaTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new AlphaTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-alpha-subtle: rgba(255 255 255 / 0.06);
      --color-alpha-soft: rgba(255 255 255 / 0.1);
      --color-alpha-medium: rgba(255 255 255 / 0.16);
      --color-alpha-strong: rgba(255 255 255 / 0.24);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const AlphaTokens = {
        "color-alpha-subtle": "rgba(255 255 255 / 0.06)",
        "color-alpha-soft": "rgba(255 255 255 / 0.1)",
        "color-alpha-medium": "rgba(255 255 255 / 0.16)",
        "color-alpha-strong": "rgba(255 255 255 / 0.24)"
      } as const;

      export type AlphaTokenType = keyof typeof AlphaTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "color-alpha-custom": "rgba(255 255 255 / 0.5)" };
    const generator = new AlphaTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-alpha-subtle: rgba(255 255 255 / 0.06);
      --color-alpha-soft: rgba(255 255 255 / 0.1);
      --color-alpha-medium: rgba(255 255 255 / 0.16);
      --color-alpha-strong: rgba(255 255 255 / 0.24);
      --color-alpha-custom: rgba(255 255 255 / 0.5);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const AlphaTokens = {
        "color-alpha-subtle": "rgba(255 255 255 / 0.06)",
        "color-alpha-soft": "rgba(255 255 255 / 0.1)",
        "color-alpha-medium": "rgba(255 255 255 / 0.16)",
        "color-alpha-strong": "rgba(255 255 255 / 0.24)",
        "color-alpha-custom": "rgba(255 255 255 / 0.5)"
      } as const;

      export type AlphaTokenType = keyof typeof AlphaTokens;
    `);
  });
});

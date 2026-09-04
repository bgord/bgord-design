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
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const AlphaTokens = {
        "color-alpha-subtle": "rgba(255 255 255 / 0.06)",
        "color-alpha-soft": "rgba(255 255 255 / 0.1)",
        "color-alpha-medium": "rgba(255 255 255 / 0.16)"
      } as const;

      export type AlphaTokenType = keyof typeof AlphaTokens;
    `);
  });

  test("light theme", () => {
    const generator = new AlphaTokenGenerator();

    expect(generator.getLightConfig()).toEqual(generator.light);
    expect(generator.getLightTokens()).toEqualIgnoringWhitespace(`
      --color-alpha-subtle: rgba(0 0 0 / 0.06);
      --color-alpha-soft: rgba(0 0 0 / 0.1);
      --color-alpha-medium: rgba(0 0 0 / 0.16);
    `);
  });

  test("with light overrides", () => {
    const lightOverrides = { "color-alpha-soft": "rgba(0 0 0 / 0.2)" };
    const generator = new AlphaTokenGenerator({}, lightOverrides);

    expect(generator.getLightConfig()).toEqual({ ...generator.light, ...lightOverrides });
    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getLightTokens()).toContain("--color-alpha-soft: rgba(0 0 0 / 0.2);");
  });

  test("with overrides", () => {
    const overrides = { "color-alpha-custom": "rgba(255 255 255 / 0.5)" };
    const generator = new AlphaTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-alpha-subtle: rgba(255 255 255 / 0.06);
      --color-alpha-soft: rgba(255 255 255 / 0.1);
      --color-alpha-medium: rgba(255 255 255 / 0.16);
      --color-alpha-custom: rgba(255 255 255 / 0.5);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const AlphaTokens = {
        "color-alpha-subtle": "rgba(255 255 255 / 0.06)",
        "color-alpha-soft": "rgba(255 255 255 / 0.1)",
        "color-alpha-medium": "rgba(255 255 255 / 0.16)",
        "color-alpha-custom": "rgba(255 255 255 / 0.5)"
      } as const;

      export type AlphaTokenType = keyof typeof AlphaTokens;
    `);
  });
});

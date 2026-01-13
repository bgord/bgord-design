import { describe, expect, test } from "bun:test";
import { OpacityTokenGenerator } from "../src/tokens";

describe("OpacityTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new OpacityTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --opacity-full: 1;
      --opacity-high: 0.7;
      --opacity-medium: 0.5;
      --opacity-low: 0.2;
      --opacity-none: 0;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const OpacityTokens = {
        "opacity-full": "1",
        "opacity-high": "0.7",
        "opacity-medium": "0.5",
        "opacity-low": "0.2",
        "opacity-none": "0"
      } as const;

      export type OpacityTokenType = keyof typeof OpacityTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "opacity-custom": "0.1" };
    const generator = new OpacityTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --opacity-full: 1;
      --opacity-high: 0.7;
      --opacity-medium: 0.5;
      --opacity-low: 0.2;
      --opacity-none: 0;
      --opacity-custom: 0.1;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const OpacityTokens = {
        "opacity-full": "1",
        "opacity-high": "0.7",
        "opacity-medium": "0.5",
        "opacity-low": "0.2",
        "opacity-none": "0",
        "opacity-custom": "0.1"
      } as const;

      export type OpacityTokenType = keyof typeof OpacityTokens;
    `);
  });
});

import { describe, expect, test } from "bun:test";
import { FontWeightTokenGenerator } from "../src/tokens";

describe("FontWeightTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new FontWeightTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --font-weight-light: 300;
      --font-weight-regular: 400;
      --font-weight-medium: 500;
      --font-weight-bold: 700;
      --font-weight-black: 900;
      --font-weight-unset: unset;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const FontWeightTokens = {
        "font-weight-light": "300",
        "font-weight-regular": "400",
        "font-weight-medium": "500",
        "font-weight-bold": "700",
        "font-weight-black": "900",
        "font-weight-unset": "unset"
      } as const;

      export type FontWeightTokenType = keyof typeof FontWeightTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "font-weight-custom": "600" };
    const generator = new FontWeightTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --font-weight-light: 300;
      --font-weight-regular: 400;
      --font-weight-medium: 500;
      --font-weight-bold: 700;
      --font-weight-black: 900;
      --font-weight-unset: unset;
      --font-weight-custom: 600;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const FontWeightTokens = {
        "font-weight-light": "300",
        "font-weight-regular": "400",
        "font-weight-medium": "500",
        "font-weight-bold": "700",
        "font-weight-black": "900",
        "font-weight-unset": "unset",
        "font-weight-custom": "600"
      } as const;

      export type FontWeightTokenType = keyof typeof FontWeightTokens;
    `);
  });
});

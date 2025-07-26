import { describe, expect, test } from "bun:test";
import { BorderWidthTokenGenerator } from "../src/tokens";

describe("BorderWidthTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new BorderWidthTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* BorderWidth */
      --border-width-none: 0;
      --border-width-hairline: 1px;
      --border-width-thin: 2px;
      --border-width-base: 4px;
      --border-width-thick: 6px;
      --border-width-heavy: 12px;
      --border-width-unset: unset;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const BorderWidthTokens = {
        "border-width-none": "0",
        "border-width-hairline": "1px",
        "border-width-thin": "2px",
        "border-width-base": "4px",
        "border-width-thick": "6px",
        "border-width-heavy": "12px",
        "border-width-unset": "unset"
      } as const;

      export type BorderWidthTokenType = keyof typeof BorderWidthTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "border-width-custom": "24px" };
    const generator = new BorderWidthTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* BorderWidth */
      --border-width-none: 0;
      --border-width-hairline: 1px;
      --border-width-thin: 2px;
      --border-width-base: 4px;
      --border-width-thick: 6px;
      --border-width-heavy: 12px;
      --border-width-unset: unset;
      --border-width-custom: 24px;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const BorderWidthTokens = {
        "border-width-none": "0",
        "border-width-hairline": "1px",
        "border-width-thin": "2px",
        "border-width-base": "4px",
        "border-width-thick": "6px",
        "border-width-heavy": "12px",
        "border-width-unset": "unset",
        "border-width-custom": "24px"
      } as const;

      export type BorderWidthTokenType = keyof typeof BorderWidthTokens;
    `);
  });
});

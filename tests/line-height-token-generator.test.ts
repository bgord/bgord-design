import { describe, expect, test } from "bun:test";
import { LineHeightTokenGenerator } from "../src/tokens";

describe("LineHeightTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new LineHeightTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* LineHeight */
      --line-height-none: 1;
      --line-height-tight: 1.25;
      --line-height-base: 1.5;
      --line-height-loose: 1.65;
      --line-height-display: 1.1;
      --line-height-unset: unset;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const LineHeightTokens = {
        "line-height-none": "1",
        "line-height-tight": "1.25",
        "line-height-base": "1.5",
        "line-height-loose": "1.65",
        "line-height-display": "1.1",
        "line-height-unset": "unset"
      } as const;

      export type LineHeightTokenType = keyof typeof LineHeightTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "line-height-custom": "2" };
    const generator = new LineHeightTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* LineHeight */
      --line-height-none: 1;
      --line-height-tight: 1.25;
      --line-height-base: 1.5;
      --line-height-loose: 1.65;
      --line-height-display: 1.1;
      --line-height-unset: unset;
      --line-height-custom: 2;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const LineHeightTokens = {
        "line-height-none": "1",
        "line-height-tight": "1.25",
        "line-height-base": "1.5",
        "line-height-loose": "1.65",
        "line-height-display": "1.1",
        "line-height-unset": "unset",
        "line-height-custom": "2"
      } as const;

      export type LineHeightTokenType = keyof typeof LineHeightTokens;
    `);
  });
});

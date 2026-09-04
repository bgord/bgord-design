import { describe, expect, test } from "bun:test";
import { LineHeightTokenGenerator } from "../src/tokens";

describe("LineHeightTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new LineHeightTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --line-height-none: 1;
      --line-height-display: 1.05;
      --line-height-tight: 1.15;
      --line-height-snug: 1.3;
      --line-height-base: 1.5;
      --line-height-loose: 1.65;
      --line-height-unset: unset;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const LineHeightTokens = {
        "line-height-none": "1",
        "line-height-display": "1.05",
        "line-height-tight": "1.15",
        "line-height-snug": "1.3",
        "line-height-base": "1.5",
        "line-height-loose": "1.65",
        "line-height-unset": "unset"
      } as const;

      export type LineHeightTokenType = keyof typeof LineHeightTokens;
    `);
  });

  test("tightens as the type grows", () => {
    const generator = new LineHeightTokenGenerator();

    const ordered = ["display", "tight", "snug", "base", "loose"].map((key) =>
      Number(generator.base[`line-height-${key}`]),
    );

    expect(ordered).toEqual([...ordered].sort((a, b) => a - b));
  });

  test("with overrides", () => {
    const overrides = { "line-height-custom": "2" };
    const generator = new LineHeightTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --line-height-none: 1;
      --line-height-display: 1.05;
      --line-height-tight: 1.15;
      --line-height-snug: 1.3;
      --line-height-base: 1.5;
      --line-height-loose: 1.65;
      --line-height-unset: unset;
      --line-height-custom: 2;
    `);
    expect(generator.toTypeScript()).toContain(`"line-height-custom": "2"`);
  });
});

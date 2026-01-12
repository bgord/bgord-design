import { describe, expect, test } from "bun:test";
import { BorderStyleTokenGenerator } from "../src/tokens";

describe("BorderStyleTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new BorderStyleTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --border-style-none: none;
      --border-style-solid: solid;
      --border-style-dashed: dashed;
      --border-style-dotted: dotted;
      --border-style-double: double;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const BorderStyleTokens = {
        "border-style-none": "none",
        "border-style-solid": "solid",
        "border-style-dashed": "dashed",
        "border-style-dotted": "dotted",
        "border-style-double": "double"
      } as const;

      export type BorderStyleTokenType = keyof typeof BorderStyleTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "border-style-inset": "inset" };
    const generator = new BorderStyleTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --border-style-none: none;
      --border-style-solid: solid;
      --border-style-dashed: dashed;
      --border-style-dotted: dotted;
      --border-style-double: double;
      --border-style-inset: inset;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const BorderStyleTokens = {
        "border-style-none": "none",
        "border-style-solid": "solid",
        "border-style-dashed": "dashed",
        "border-style-dotted": "dotted",
        "border-style-double": "double",
        "border-style-inset": "inset"
      } as const;

      export type BorderStyleTokenType = keyof typeof BorderStyleTokens;
    `);
  });
});

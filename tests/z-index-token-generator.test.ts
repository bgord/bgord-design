import { describe, expect, test } from "bun:test";
import { ZIndexTokenGenerator } from "../src/tokens";

describe("ZIndexTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new ZIndexTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* ZIndex */
      --z-index-negative: -1;
      --z-index-0: 0;
      --z-index-1: 1;
      --z-index-2: 2;
      --z-index-3: 3;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const ZIndexTokens = {
        "z-index-negative": "-1",
        "z-index-0": "0",
        "z-index-1": "1",
        "z-index-2": "2",
        "z-index-3": "3"
      } as const;

      export type ZIndexTokenType = keyof typeof ZIndexTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "z-index-custom": "100" };
    const generator = new ZIndexTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* ZIndex */
      --z-index-negative: -1;
      --z-index-0: 0;
      --z-index-1: 1;
      --z-index-2: 2;
      --z-index-3: 3;
      --z-index-custom: 100;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const ZIndexTokens = {
        "z-index-negative": "-1",
        "z-index-0": "0",
        "z-index-1": "1",
        "z-index-2": "2",
        "z-index-3": "3",
        "z-index-custom": "100"
      } as const;

      export type ZIndexTokenType = keyof typeof ZIndexTokens;
    `);
  });
});

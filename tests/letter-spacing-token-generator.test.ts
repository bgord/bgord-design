import { describe, expect, test } from "bun:test";
import { LetterSpacingTokenGenerator } from "../src/tokens";

describe("LetterSpacingTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new LetterSpacingTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --letter-spacing-tight: -0.01em;
      --letter-spacing-normal: 0em;
      --letter-spacing-wide: 0.025em;
      --letter-spacing-wider: 0.05em;
      --letter-spacing-widest: 0.1em;
      --letter-spacing-unset: unset;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const LetterSpacingTokens = {
        "letter-spacing-tight": "-0.01em",
        "letter-spacing-normal": "0em",
        "letter-spacing-wide": "0.025em",
        "letter-spacing-wider": "0.05em",
        "letter-spacing-widest": "0.1em",
        "letter-spacing-unset": "unset"
      } as const;

      export type LetterSpacingTokenType = keyof typeof LetterSpacingTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "letter-spacing-custom": "0.2em" };
    const generator = new LetterSpacingTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --letter-spacing-tight: -0.01em;
      --letter-spacing-normal: 0em;
      --letter-spacing-wide: 0.025em;
      --letter-spacing-wider: 0.05em;
      --letter-spacing-widest: 0.1em;
      --letter-spacing-unset: unset;
      --letter-spacing-custom: 0.2em;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const LetterSpacingTokens = {
        "letter-spacing-tight": "-0.01em",
        "letter-spacing-normal": "0em",
        "letter-spacing-wide": "0.025em",
        "letter-spacing-wider": "0.05em",
        "letter-spacing-widest": "0.1em",
        "letter-spacing-unset": "unset",
        "letter-spacing-custom": "0.2em"
      } as const;

      export type LetterSpacingTokenType = keyof typeof LetterSpacingTokens;
    `);
  });
});

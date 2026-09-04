import { describe, expect, test } from "bun:test";
import { LetterSpacingTokenGenerator } from "../src/tokens";

describe("LetterSpacingTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new LetterSpacingTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --letter-spacing-tighter: -0.03em;
      --letter-spacing-tight: -0.02em;
      --letter-spacing-snug: -0.01em;
      --letter-spacing-normal: 0em;
      --letter-spacing-wide: 0.025em;
      --letter-spacing-wider: 0.05em;
      --letter-spacing-widest: 0.1em;
      --letter-spacing-unset: unset;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const LetterSpacingTokens = {
        "letter-spacing-tighter": "-0.03em",
        "letter-spacing-tight": "-0.02em",
        "letter-spacing-snug": "-0.01em",
        "letter-spacing-normal": "0em",
        "letter-spacing-wide": "0.025em",
        "letter-spacing-wider": "0.05em",
        "letter-spacing-widest": "0.1em",
        "letter-spacing-unset": "unset"
      } as const;

      export type LetterSpacingTokenType = keyof typeof LetterSpacingTokens;
    `);
  });

  test("runs from negative to positive tracking", () => {
    const generator = new LetterSpacingTokenGenerator();

    const ordered = ["tighter", "tight", "snug", "normal", "wide", "wider", "widest"].map((key) =>
      Number.parseFloat(generator.base[`letter-spacing-${key}`] as string),
    );

    expect(ordered).toEqual([...ordered].sort((a, b) => a - b));
  });

  test("with overrides", () => {
    const overrides = { "letter-spacing-custom": "0.5em" };
    const generator = new LetterSpacingTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --letter-spacing-tighter: -0.03em;
      --letter-spacing-tight: -0.02em;
      --letter-spacing-snug: -0.01em;
      --letter-spacing-normal: 0em;
      --letter-spacing-wide: 0.025em;
      --letter-spacing-wider: 0.05em;
      --letter-spacing-widest: 0.1em;
      --letter-spacing-unset: unset;
      --letter-spacing-custom: 0.5em;
    `);
    expect(generator.toTypeScript()).toContain(`"letter-spacing-custom": "0.5em"`);
  });
});

import { describe, expect, test } from "bun:test";
import { FocusRingTokenGenerator } from "../src/tokens";

describe("FocusRingTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new FocusRingTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --focus-ring-brand: var(--color-brand-500);
      --focus-ring-neutral: var(--color-neutral-400);
      --focus-ring-danger: var(--color-danger-200);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const FocusRingTokens = {
        "focus-ring-brand": "var(--color-brand-500)",
        "focus-ring-neutral": "var(--color-neutral-400)",
        "focus-ring-danger": "var(--color-danger-200)"
      } as const;

      export type FocusRingTokenType = keyof typeof FocusRingTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "focus-ring-black": "black" };
    const generator = new FocusRingTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --focus-ring-brand: var(--color-brand-500);
      --focus-ring-neutral: var(--color-neutral-400);
      --focus-ring-danger: var(--color-danger-200);
      --focus-ring-black: black;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const FocusRingTokens = {
        "focus-ring-brand": "var(--color-brand-500)",
        "focus-ring-neutral": "var(--color-neutral-400)",
        "focus-ring-danger": "var(--color-danger-200)",
        "focus-ring-black": "black"
      } as const;

      export type FocusRingTokenType = keyof typeof FocusRingTokens;
    `);
  });
});

import { describe, expect, test } from "bun:test";
import { SpacingTokenGenerator } from "../src/tokens";

describe("SpacingTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new SpacingTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Spacing */
      --spacing-0: 0rem;
      --spacing-0-5: 0.125rem;
      --spacing-1: 0.25rem;
      --spacing-1-5: 0.375rem;
      --spacing-2: 0.5rem;
      --spacing-2-5: 0.625rem;
      --spacing-3: 0.75rem;
      --spacing-4: 1rem;
      --spacing-5: 1.25rem;
      --spacing-6: 1.5rem;
      --spacing-8: 2rem;
      --spacing-12: 3rem;
      --spacing-16: 4rem;
      --spacing-auto: auto;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const SpacingTokens = {
        "spacing-0": "0rem",
        "spacing-0-5": "0.125rem",
        "spacing-1": "0.25rem",
        "spacing-1-5": "0.375rem",
        "spacing-2": "0.5rem",
        "spacing-2-5": "0.625rem",
        "spacing-3": "0.75rem",
        "spacing-4": "1rem",
        "spacing-5": "1.25rem",
        "spacing-6": "1.5rem",
        "spacing-8": "2rem",
        "spacing-12": "3rem",
        "spacing-16": "4rem",
        "spacing-auto": "auto"
      } as const;

      export type SpacingTokenType = keyof typeof SpacingTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "spacing-custom": "10rem" };
    const generator = new SpacingTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Spacing */
      --spacing-0: 0rem;
      --spacing-0-5: 0.125rem;
      --spacing-1: 0.25rem;
      --spacing-1-5: 0.375rem;
      --spacing-2: 0.5rem;
      --spacing-2-5: 0.625rem;
      --spacing-3: 0.75rem;
      --spacing-4: 1rem;
      --spacing-5: 1.25rem;
      --spacing-6: 1.5rem;
      --spacing-8: 2rem;
      --spacing-12: 3rem;
      --spacing-16: 4rem;
      --spacing-auto: auto;
      --spacing-custom: 10rem;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const SpacingTokens = {
        "spacing-0": "0rem",
        "spacing-0-5": "0.125rem",
        "spacing-1": "0.25rem",
        "spacing-1-5": "0.375rem",
        "spacing-2": "0.5rem",
        "spacing-2-5": "0.625rem",
        "spacing-3": "0.75rem",
        "spacing-4": "1rem",
        "spacing-5": "1.25rem",
        "spacing-6": "1.5rem",
        "spacing-8": "2rem",
        "spacing-12": "3rem",
        "spacing-16": "4rem",
        "spacing-auto": "auto",
        "spacing-custom": "10rem"
      } as const;

      export type SpacingTokenType = keyof typeof SpacingTokens;
    `);
  });
});

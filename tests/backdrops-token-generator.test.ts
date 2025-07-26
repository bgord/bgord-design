import { describe, expect, test } from "bun:test";
import { BackdropsTokenGenerator } from "../src/tokens";

describe("BackdropsTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new BackdropsTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Backdrops */
      --backdrop-none: none;
      --backdrop-weak: rgba(0 0 0 / 0.35);
      --backdrop-medium: rgba(0 0 0 / 0.6);
      --backdrop-strong: rgba(0 0 0 / 0.75);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const BackdropsTokens = {
        "backdrop-none": "none",
        "backdrop-weak": "rgba(0 0 0 / 0.35)",
        "backdrop-medium": "rgba(0 0 0 / 0.6)",
        "backdrop-strong": "rgba(0 0 0 / 0.75)"
      } as const;

      export type BackdropsTokenType = keyof typeof BackdropsTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "backdrop-custom": "rgba(0 0 0 / 0.5)" };
    const generator = new BackdropsTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Backdrops */
      --backdrop-none: none;
      --backdrop-weak: rgba(0 0 0 / 0.35);
      --backdrop-medium: rgba(0 0 0 / 0.6);
      --backdrop-strong: rgba(0 0 0 / 0.75);
      --backdrop-custom: rgba(0 0 0 / 0.5);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const BackdropsTokens = {
        "backdrop-none": "none",
        "backdrop-weak": "rgba(0 0 0 / 0.35)",
        "backdrop-medium": "rgba(0 0 0 / 0.6)",
        "backdrop-strong": "rgba(0 0 0 / 0.75)",
        "backdrop-custom": "rgba(0 0 0 / 0.5)"
      } as const;

      export type BackdropsTokenType = keyof typeof BackdropsTokens;
    `);
  });
});

import { describe, expect, test } from "bun:test";
import { SizeTokenGenerator } from "../src/tokens";

describe("SizeTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new SizeTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
        --size-xs: 12px;
        --size-sm: 16px;
        --size-md: 20px;
        --size-lg: 24px;
        --size-xl: 32px;
        --size-2xl: 36px;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const SizeTokens = {
        "size-xs": "12px",
        "size-sm": "16px",
        "size-md": "20px",
        "size-lg": "24px",
        "size-xl": "32px",
        "size-2xl": "36px"
      } as const;

      export type SizeTokenType = keyof typeof SizeTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "size-custom": "10rem" };
    const generator = new SizeTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
        --size-xs: 12px;
        --size-sm: 16px;
        --size-md: 20px;
        --size-lg: 24px;
        --size-xl: 32px;
        --size-2xl: 36px;
        --size-custom: 10rem;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const SizeTokens = {
        "size-xs": "12px",
        "size-sm": "16px",
        "size-md": "20px",
        "size-lg": "24px",
        "size-xl": "32px",
        "size-2xl": "36px",
        "size-custom": "10rem"
      } as const;

      export type SizeTokenType = keyof typeof SizeTokens;
    `);
  });
});

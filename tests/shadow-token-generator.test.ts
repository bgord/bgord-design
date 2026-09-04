import { describe, expect, test } from "bun:test";
import { ShadowTokenGenerator } from "../src/tokens";

describe("ShadowTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new ShadowTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --shadow-none: none;
      --shadow-xs: 0 1px 2px 0 rgba(0 0 0 / 0.3);
      --shadow-sm: 0 1px 3px 0 rgba(0 0 0 / 0.4), 0 1px 2px -1px rgba(0 0 0 / 0.4);
      --shadow-md: 0 4px 6px -1px rgba(0 0 0 / 0.45), 0 2px 4px -2px rgba(0 0 0 / 0.4);
      --shadow-lg: 0 10px 15px -3px rgba(0 0 0 / 0.5), 0 4px 6px -4px rgba(0 0 0 / 0.45);
      --shadow-xl: 0 20px 25px -5px rgba(0 0 0 / 0.55), 0 8px 10px -6px rgba(0 0 0 / 0.5);
      --shadow-inner: inset 0 1px 2px 0 rgba(0 0 0 / 0.35);
      --shadow-unset: unset;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const ShadowTokens = {
        "shadow-none": "none",
        "shadow-xs": "0 1px 2px 0 rgba(0 0 0 / 0.3)",
        "shadow-sm": "0 1px 3px 0 rgba(0 0 0 / 0.4), 0 1px 2px -1px rgba(0 0 0 / 0.4)",
        "shadow-md": "0 4px 6px -1px rgba(0 0 0 / 0.45), 0 2px 4px -2px rgba(0 0 0 / 0.4)",
        "shadow-lg": "0 10px 15px -3px rgba(0 0 0 / 0.5), 0 4px 6px -4px rgba(0 0 0 / 0.45)",
        "shadow-xl": "0 20px 25px -5px rgba(0 0 0 / 0.55), 0 8px 10px -6px rgba(0 0 0 / 0.5)",
        "shadow-inner": "inset 0 1px 2px 0 rgba(0 0 0 / 0.35)",
        "shadow-unset": "unset"
      } as const;

      export type ShadowTokenType = keyof typeof ShadowTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "shadow-custom": "0 0 10px 0 rgba(0 0 0 / 0.1)" };
    const generator = new ShadowTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --shadow-none: none;
      --shadow-xs: 0 1px 2px 0 rgba(0 0 0 / 0.3);
      --shadow-sm: 0 1px 3px 0 rgba(0 0 0 / 0.4), 0 1px 2px -1px rgba(0 0 0 / 0.4);
      --shadow-md: 0 4px 6px -1px rgba(0 0 0 / 0.45), 0 2px 4px -2px rgba(0 0 0 / 0.4);
      --shadow-lg: 0 10px 15px -3px rgba(0 0 0 / 0.5), 0 4px 6px -4px rgba(0 0 0 / 0.45);
      --shadow-xl: 0 20px 25px -5px rgba(0 0 0 / 0.55), 0 8px 10px -6px rgba(0 0 0 / 0.5);
      --shadow-inner: inset 0 1px 2px 0 rgba(0 0 0 / 0.35);
      --shadow-unset: unset;
      --shadow-custom: 0 0 10px 0 rgba(0 0 0 / 0.1);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const ShadowTokens = {
        "shadow-none": "none",
        "shadow-xs": "0 1px 2px 0 rgba(0 0 0 / 0.3)",
        "shadow-sm": "0 1px 3px 0 rgba(0 0 0 / 0.4), 0 1px 2px -1px rgba(0 0 0 / 0.4)",
        "shadow-md": "0 4px 6px -1px rgba(0 0 0 / 0.45), 0 2px 4px -2px rgba(0 0 0 / 0.4)",
        "shadow-lg": "0 10px 15px -3px rgba(0 0 0 / 0.5), 0 4px 6px -4px rgba(0 0 0 / 0.45)",
        "shadow-xl": "0 20px 25px -5px rgba(0 0 0 / 0.55), 0 8px 10px -6px rgba(0 0 0 / 0.5)",
        "shadow-inner": "inset 0 1px 2px 0 rgba(0 0 0 / 0.35)",
        "shadow-unset": "unset",
        "shadow-custom": "0 0 10px 0 rgba(0 0 0 / 0.1)"
      } as const;

      export type ShadowTokenType = keyof typeof ShadowTokens;
    `);
  });
});

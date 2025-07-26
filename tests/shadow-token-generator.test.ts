import { describe, expect, test } from "bun:test";
import { ShadowTokenGenerator } from "../src/tokens";

describe("ShadowTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new ShadowTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Shadow */
      --shadow-none: none;
      --shadow-xs: 0 1px 2px 0 rgba(0 0 0 / 0.03);
      --shadow-sm: 0 1px 3px 0 rgba(0 0 0 / 0.05), 0 1px 2px -1px rgba(0 0 0 / 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0 0 0 / 0.06), 0 2px 4px -2px rgba(0 0 0 / 0.05);
      --shadow-lg: 0 10px 15px -3px rgba(0 0 0 / 0.07), 0 4px 6px -4px rgba(0 0 0 / 0.06);
      --shadow-xl: 0 20px 25px -5px rgba(0 0 0 / 0.08), 0 8px 10px -6px rgba(0 0 0 / 0.07);
      --shadow-inner: inset 0 2px 4px 0 rgba(0 0 0 / 0.06);
      --shadow-unset: unset;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const ShadowTokens = {
        "shadow-none": "none",
        "shadow-xs": "0 1px 2px 0 rgba(0 0 0 / 0.03)",
        "shadow-sm": "0 1px 3px 0 rgba(0 0 0 / 0.05), 0 1px 2px -1px rgba(0 0 0 / 0.05)",
        "shadow-md": "0 4px 6px -1px rgba(0 0 0 / 0.06), 0 2px 4px -2px rgba(0 0 0 / 0.05)",
        "shadow-lg": "0 10px 15px -3px rgba(0 0 0 / 0.07), 0 4px 6px -4px rgba(0 0 0 / 0.06)",
        "shadow-xl": "0 20px 25px -5px rgba(0 0 0 / 0.08), 0 8px 10px -6px rgba(0 0 0 / 0.07)",
        "shadow-inner": "inset 0 2px 4px 0 rgba(0 0 0 / 0.06)",
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
      /* Shadow */
      --shadow-none: none;
      --shadow-xs: 0 1px 2px 0 rgba(0 0 0 / 0.03);
      --shadow-sm: 0 1px 3px 0 rgba(0 0 0 / 0.05), 0 1px 2px -1px rgba(0 0 0 / 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0 0 0 / 0.06), 0 2px 4px -2px rgba(0 0 0 / 0.05);
      --shadow-lg: 0 10px 15px -3px rgba(0 0 0 / 0.07), 0 4px 6px -4px rgba(0 0 0 / 0.06);
      --shadow-xl: 0 20px 25px -5px rgba(0 0 0 / 0.08), 0 8px 10px -6px rgba(0 0 0 / 0.07);
      --shadow-inner: inset 0 2px 4px 0 rgba(0 0 0 / 0.06);
      --shadow-unset: unset;
      --shadow-custom: 0 0 10px 0 rgba(0 0 0 / 0.1);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const ShadowTokens = {
        "shadow-none": "none",
        "shadow-xs": "0 1px 2px 0 rgba(0 0 0 / 0.03)",
        "shadow-sm": "0 1px 3px 0 rgba(0 0 0 / 0.05), 0 1px 2px -1px rgba(0 0 0 / 0.05)",
        "shadow-md": "0 4px 6px -1px rgba(0 0 0 / 0.06), 0 2px 4px -2px rgba(0 0 0 / 0.05)",
        "shadow-lg": "0 10px 15px -3px rgba(0 0 0 / 0.07), 0 4px 6px -4px rgba(0 0 0 / 0.06)",
        "shadow-xl": "0 20px 25px -5px rgba(0 0 0 / 0.08), 0 8px 10px -6px rgba(0 0 0 / 0.07)",
        "shadow-inner": "inset 0 2px 4px 0 rgba(0 0 0 / 0.06)",
        "shadow-unset": "unset",
        "shadow-custom": "0 0 10px 0 rgba(0 0 0 / 0.1)"
      } as const;

      export type ShadowTokenType = keyof typeof ShadowTokens;
    `);
  });
});

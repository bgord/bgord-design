import { describe, expect, test } from "bun:test";
import { RadiusTokenGenerator } from "../src/tokens";

describe("RadiusTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new RadiusTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Radius */
      --radius-none: 0;
      --radius-xs: 2px;
      --radius-sm: 4px;
      --radius-md: 8px;
      --radius-lg: 12px;
      --radius-xl: 16px;
      --radius-pill: 9999px;
      --radius-circle: 50%;
      --radius-unset: unset;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const RadiusTokens = {
        "radius-none": "0",
        "radius-xs": "2px",
        "radius-sm": "4px",
        "radius-md": "8px",
        "radius-lg": "12px",
        "radius-xl": "16px",
        "radius-pill": "9999px",
        "radius-circle": "50%",
        "radius-unset": "unset"
      } as const;

      export type RadiusTokenType = keyof typeof RadiusTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "radius-custom": "32px" };
    const generator = new RadiusTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Radius */
      --radius-none: 0;
      --radius-xs: 2px;
      --radius-sm: 4px;
      --radius-md: 8px;
      --radius-lg: 12px;
      --radius-xl: 16px;
      --radius-pill: 9999px;
      --radius-circle: 50%;
      --radius-unset: unset;
      --radius-custom: 32px;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const RadiusTokens = {
        "radius-none": "0",
        "radius-xs": "2px",
        "radius-sm": "4px",
        "radius-md": "8px",
        "radius-lg": "12px",
        "radius-xl": "16px",
        "radius-pill": "9999px",
        "radius-circle": "50%",
        "radius-unset": "unset",
        "radius-custom": "32px"
      } as const;

      export type RadiusTokenType = keyof typeof RadiusTokens;
    `);
  });
});

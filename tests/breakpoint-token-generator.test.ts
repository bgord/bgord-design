import { describe, expect, test } from "bun:test";
import { BreakpointTokenGenerator } from "../src/tokens";

describe("BreakpointTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new BreakpointTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Breakpoint */
      --breakpoint-md: 768px;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const BreakpointTokens = {
        "breakpoint-md": "768px"
      } as const;

      export type BreakpointTokenType = keyof typeof BreakpointTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "breakpoint-lg": "1024px" };
    const generator = new BreakpointTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      /* Breakpoint */
      --breakpoint-md: 768px;
      --breakpoint-lg: 1024px;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const BreakpointTokens = {
        "breakpoint-md": "768px",
        "breakpoint-lg": "1024px"
      } as const;

      export type BreakpointTokenType = keyof typeof BreakpointTokens;
    `);
  });
});

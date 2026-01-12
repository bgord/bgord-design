import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { BreakpointTokenGenerator } from "../src/tokens";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("BreakpointTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new BreakpointTokenGenerator(breakpoints);

    // expect(generator.getConfig()).toEqual(breakpoints.breakpoints);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --breakpoint-md: 768px;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const BreakpointTokens = {
        "breakpoint-md": "768px"
      } as const;

      export type BreakpointTokenType = keyof typeof BreakpointTokens;
    `);
  });
});

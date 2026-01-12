import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { MaxHeightUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("MaxHeightUtilityGenerator", () => {
  test("basic usage", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator(breakpoints);
    const generator = new MaxHeightUtilityGenerator(breakpoints, BreakpointTokenGenerator);

    expect(generator.name).toEqual("Max height utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-maxh='100%'] { max-height: 100%; }
      [data-maxh='unset'] { max-height: unset; }
      [data-maxh='md'] { max-height: 768px; }

      @media (max-width: 768px) {
        [data-md-maxh='100%'] { max-height: 100%; }
        [data-md-maxh='unset'] { max-height: unset; }
        [data-md-maxh='md'] { max-height: 768px; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-maxh"?: "100%" | "unset" | "md";
      "data-md-maxh"?: "100%" | "unset" | "md";
   `);
  });
});

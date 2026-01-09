import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { MaxHeightUtilityGenerator } from "../src/utilities";

describe("MaxHeightUtilityGenerator", () => {
  test("basic usage", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator();
    const generator = new MaxHeightUtilityGenerator(BreakpointTokenGenerator);

    expect(generator.name).toEqual("Max height utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-maxh='100%'] { max-height: 100%; }
      [data-maxh='unset'] { max-height: unset; }
      [data-maxh='md'] { max-height: 768px; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-maxh"?: "100%" | "unset" | "md";
   `);
  });

  test("with overrides", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator({ "breakpoint-full-hd": "1920px" });
    const generator = new MaxHeightUtilityGenerator(BreakpointTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-maxh='100%'] { max-height: 100%; }
      [data-maxh='unset'] { max-height: unset; }
      [data-maxh='md'] { max-height: 768px; }
      [data-maxh='full-hd'] { max-height: 1920px; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-maxh"?: "100%" | "unset" | "md" | "full-hd";
   `);
  });
});

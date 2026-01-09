import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { MaxWidthUtilityGenerator } from "../src/utilities";

describe("MaxWidthUtilityGenerator", () => {
  test("basic usage", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator();
    const generator = new MaxWidthUtilityGenerator(BreakpointTokenGenerator);

    expect(generator.name).toEqual("Max width utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-maxw='100%'] { max-width: 100%; }
      [data-maxw='unset'] { max-width: unset; }
      [data-maxw='md'] { max-width: 768px; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-maxw"?: "100%" | "unset" | "md";
    `);
  });

  test("with overrides", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator({ "breakpoint-full-hd": "1920px" });
    const generator = new MaxWidthUtilityGenerator(BreakpointTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-maxw='100%'] { max-width: 100%; }
      [data-maxw='unset'] { max-width: unset; }
      [data-maxw='md'] { max-width: 768px; }
      [data-maxw='full-hd'] { max-width: 1920px; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-maxw"?: "100%" | "unset" | "md" | "full-hd";
    `);
  });
});

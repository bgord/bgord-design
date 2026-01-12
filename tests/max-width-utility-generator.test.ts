import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { MaxWidthUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("MaxWidthUtilityGenerator", () => {
  test("basic usage", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator();
    const generator = new MaxWidthUtilityGenerator(breakpoints, BreakpointTokenGenerator);

    expect(generator.name).toEqual("Max width utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-maxw='100%'] { max-width: 100%; }
      [data-maxw='unset'] { max-width: unset; }
      [data-maxw='md'] { max-width: 768px; }

      @media (max-width: 768px) {
        [data-md-maxw='100%'] { max-width: 100%; }
        [data-md-maxw='unset'] { max-width: unset; }
        [data-md-maxw='md'] { max-width: 768px; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-maxw"?: "100%" | "unset" | "md";
    `);
  });

  test("with overrides", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator({ "breakpoint-full-hd": "1920px" });
    const generator = new MaxWidthUtilityGenerator(breakpoints, BreakpointTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-maxw='100%'] { max-width: 100%; }
      [data-maxw='unset'] { max-width: unset; }
      [data-maxw='md'] { max-width: 768px; }
      [data-maxw='full-hd'] { max-width: 1920px; }

      @media (max-width: 768px) {
        [data-md-maxw='100%'] { max-width: 100%; }
        [data-md-maxw='unset'] { max-width: unset; }
        [data-md-maxw='md'] { max-width: 768px; }
        [data-md-maxw='full-hd'] { max-width: 1920px; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-maxw"?: "100%" | "unset" | "md" | "full-hd";
    `);
  });
});

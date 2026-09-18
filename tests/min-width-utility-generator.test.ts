// cSpell:ignore minw
import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { MinWidthUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("MinWidthUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new MinWidthUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Min width utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-minw='0'] { min-width: 0; }
      [data-minw='unset'] { min-width: unset; }

      @media (max-width: 768px) {
        [data-md-minw='0'] { min-width: 0; }
        [data-md-minw='unset'] { min-width: unset; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-minw"?: "0" | "unset";
      "data-md-minw"?: "0" | "unset";
    `);
  });
});

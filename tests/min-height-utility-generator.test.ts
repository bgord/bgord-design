// cSpell:ignore minh
import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { MinHeightUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("MinHeightUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new MinHeightUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Min height utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-minh='0'] { min-height: 0; }
      [data-minh='unset'] { min-height: unset; }

      @media (max-width: 768px) {
        [data-md-minh='0'] { min-height: 0; }
        [data-md-minh='unset'] { min-height: unset; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-minh"?: "0" | "unset";
      "data-md-minh"?: "0" | "unset";
    `);
  });
});

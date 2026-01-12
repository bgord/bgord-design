import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { OverflowUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("OverflowUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new OverflowUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Overflow utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-overflow='auto'] { overflow: auto; }
      [data-overflow='scroll'] { overflow: scroll; }
      [data-overflow='hidden'] { overflow: hidden; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-overflow"?: "auto" | "scroll" | "hidden";
    `);
  });
});

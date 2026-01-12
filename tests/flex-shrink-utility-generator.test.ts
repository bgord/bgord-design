import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { FlexShrinkUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("FlexShrinkUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new FlexShrinkUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Flex shrink utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-shrink='0'] { flex-shrink: 0; }
      [data-shrink='unset'] { flex-shrink: unset; }

      @media (max-width: 768px) {
        [data-md-shrink='0'] { flex-shrink: 0; }
        [data-md-shrink='unset'] { flex-shrink: unset; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-shrink"?: "0" | "unset";
      "data-md-shrink"?: "0" | "unset";
    `);
  });
});

import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { RotateUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("RotateUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new RotateUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Rotate utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-rotate='0'] { transform: rotate(0deg); }
      [data-rotate='90'] { transform: rotate(90deg); }
      [data-rotate='180'] { transform: rotate(180deg); }
      [data-rotate='270'] { transform: rotate(270deg); }

      @media (max-width: 768px) {
        [data-md-rotate='0'] { transform: rotate(0deg); }
        [data-md-rotate='90'] { transform: rotate(90deg); }
        [data-md-rotate='180'] { transform: rotate(180deg); }
        [data-md-rotate='270'] { transform: rotate(270deg); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-rotate"?: "0" | "90" | "180" | "270";
    `);
  });
});

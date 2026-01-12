import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { DisplayUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("DisplayUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new DisplayUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Display utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-disp='flex'] { display: flex; flex-wrap: wrap; }
      [data-disp='flex'] { display: flex; }
      [data-disp='block'] { display: block; }
      [data-disp='inline-block'] { display: inline-block; }
      [data-disp='none'] { display: none; }

      @media (max-width: 768px) {
        [data-md-disp='flex'] { display: flex; flex-wrap: wrap; }
        [data-md-disp='flex'] { display: flex; }
        [data-md-disp='block'] { display: block; }
        [data-md-disp='inline-block'] { display: inline-block; }
        [data-md-disp='none'] { display: none; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-disp"?: "flex" | "block" | "inline-block" | "none";
      "data-md-disp"?: "flex" | "block" | "inline-block" | "none";
    `);
  });
});

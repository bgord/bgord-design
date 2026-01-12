import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { HeightUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("HeightUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new HeightUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Heght utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-height='100%'] { height: 100%; }
      [data-height='auto'] { height: auto; }
      [data-height='unset'] { height: unset; }

      @media (max-width: 768px) {
        [data-md-height='100%'] { height: 100%; }
        [data-md-height='auto'] { height: auto; }
        [data-md-height='unset'] { height: unset; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-height"?: "100%" | "auto" | "unset";
    `);
  });
});

import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { WidthUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("WidthUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new WidthUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Width utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-width='100%'] { width: 100%; }
      [data-width='auto'] { width: auto; }
      [data-width='unset'] { width: unset; }

      @media (max-width: 768px) {
        [data-md-width='100%'] { width: 100%; }
        [data-md-width='auto'] { width: auto; }
        [data-md-width='unset'] { width: unset; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-width"?: "100%" | "auto" | "unset";
    `);
  });
});

import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { ObjectPositionUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("ObjectPositionUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new ObjectPositionUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Object position utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-object-position='top'] { object-position: top; }
      [data-object-position='bottom'] { object-position: bottom; }
      [data-object-position='left'] { object-position: left; }
      [data-object-position='right'] { object-position: right; }
      [data-object-position='center'] { object-position: center; }
      [data-object-position='top-left'] { object-position: top left; }
      [data-object-position='top-right'] { object-position: top right; }

      @media (max-width: 768px) {
        [data-md-object-position='top'] { object-position: top; }
        [data-md-object-position='bottom'] { object-position: bottom; }
        [data-md-object-position='left'] { object-position: left; }
        [data-md-object-position='right'] { object-position: right; }
        [data-md-object-position='center'] { object-position: center; }
        [data-md-object-position='top-left'] { object-position: top left; }
        [data-md-object-position='top-right'] { object-position: top right; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-object-position"?: "top" | "bottom" | "left" | "right" | "center" | "top-left" | "top-right";
      "data-md-object-position"?: "top" | "bottom" | "left" | "right" | "center" | "top-left" | "top-right";
    `);
  });
});

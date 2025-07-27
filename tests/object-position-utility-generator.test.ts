import { describe, expect, test } from "bun:test";
import { ObjectPositionUtilityGenerator } from "../src/utilities";

describe("ObjectPositionUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new ObjectPositionUtilityGenerator();

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-object-position='top'] { object-position: top; }
      [data-object-position='bottom'] { object-position: bottom; }
      [data-object-position='left'] { object-position: left; }
      [data-object-position='right'] { object-position: right; }
      [data-object-position='center'] { object-position: center; }
      [data-object-position='top-left'] { object-position: top left; }
      [data-object-position='top-right'] { object-position: top right; }
    `);

    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-object-position"?: "top" | "bottom" | "left" | "right" | "center" | "top-left" | "top-right";
    `);
  });
});

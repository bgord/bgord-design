import { describe, expect, test } from "bun:test";
import { DisplayUtilityGenerator } from "../src/utilities";

describe("DisplayUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new DisplayUtilityGenerator();

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-display='flex'] { display: flex; flex-wrap: wrap; }
      [data-display='flex'] { display: flex; }
      [data-display='block'] { display: block; }
      [data-display='inline-block'] { display: inline-block; }
      [data-display='none'] { display: none; }
    `);

    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-display"?: "flex" | "block" | "inline-block" | "none";
    `);
  });
});

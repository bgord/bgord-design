import { describe, expect, test } from "bun:test";
import { HeightUtilityGenerator } from "../src/utilities";

describe("HeightUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new HeightUtilityGenerator();

    expect(generator.name).toEqual("Heght utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-height='100%'] { height: 100%; }
      [data-height='auto'] { height: auto; }
      [data-height='unset'] { height: unset; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-height"?: "100%" | "auto" | "unset";
    `);
  });
});

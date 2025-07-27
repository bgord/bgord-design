import { describe, expect, test } from "bun:test";
import { OverflowUtilityGenerator } from "../src/utilities";

describe("OverflowUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new OverflowUtilityGenerator();

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

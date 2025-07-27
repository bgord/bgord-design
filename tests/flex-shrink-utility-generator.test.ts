import { describe, expect, test } from "bun:test";
import { FlexShrinkUtilityGenerator } from "../src/utilities";

describe("FlexShrinkUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new FlexShrinkUtilityGenerator();

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-shrink='0'] { flex-shrink: 0; }
      [data-shrink='unset'] { flex-shrink: unset; }
    `);

    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-shrink"?: "0" | "unset";
    `);
  });
});

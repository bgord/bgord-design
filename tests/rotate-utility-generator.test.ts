import { describe, expect, test } from "bun:test";
import { RotateUtilityGenerator } from "../src/utilities";

describe("RotateUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new RotateUtilityGenerator();

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-rotate='0'] { transform: rotate(0deg); }
      [data-rotate='90'] { transform: rotate(90deg); }
      [data-rotate='180'] { transform: rotate(180deg); }
      [data-rotate='270'] { transform: rotate(270deg); }
    `);

    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-rotate"?: "0" | "90" | "180" | "270";
    `);
  });
});

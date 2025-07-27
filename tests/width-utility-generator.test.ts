import { describe, expect, test } from "bun:test";
import { WidthUtilityGenerator } from "../src/utilities";

describe("WidthUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new WidthUtilityGenerator();

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-width='100%'] { width: 100%; }
      [data-width='auto'] { width: auto; }
      [data-width='unset'] { width: unset; }
    `);

    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-width"?: "100%" | "auto" | "unset";
    `);
  });
});

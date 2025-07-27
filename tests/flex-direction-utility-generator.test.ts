import { describe, expect, test } from "bun:test";
import { FlexDirectionUtilityGenerator } from "../src/utilities";

describe("FlexDirectionUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new FlexDirectionUtilityGenerator();

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-dir='row'] { flex-direction: row; }
      [data-dir='row-reverse'] { flex-direction: row-reverse; }
      [data-dir='column'] { flex-direction: column; }
      [data-dir='column-reverse'] { flex-direction: column-reverse; }
    `);

    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-dir"?: "row" | "row-reverse" | "column" | "column-reverse";
    `);
  });
});

import { describe, expect, test } from "bun:test";
import { FlexDirectionUtilityGenerator } from "../src/utilities";

describe("FlexDirectionUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new FlexDirectionUtilityGenerator();

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-direction='row'] { flex-direction: row; }
      [data-direction='row-reverse'] { flex-direction: row-reverse; }
      [data-direction='column'] { flex-direction: column; }
      [data-direction='column-reverse'] { flex-direction: column-reverse; }
    `);

    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-direction"?: "row" | "row-reverse" | "column" | "column-reverse";
    `);
  });
});

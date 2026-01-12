import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { FlexDirectionUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("FlexDirectionUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new FlexDirectionUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Flex direction utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-dir='row'] { flex-direction: row; }
      [data-dir='row-reverse'] { flex-direction: row-reverse; }
      [data-dir='column'] { flex-direction: column; }
      [data-dir='column-reverse'] { flex-direction: column-reverse; }

      @media (max-width: 768px) {
        [data-md-dir='row'] { flex-direction: row; }
        [data-md-dir='row-reverse'] { flex-direction: row-reverse; }
        [data-md-dir='column'] { flex-direction: column; }
        [data-md-dir='column-reverse'] { flex-direction: column-reverse; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-dir"?: "row" | "row-reverse" | "column" | "column-reverse";
      "data-md-dir"?: "row" | "row-reverse" | "column" | "column-reverse";
    `);
  });
});

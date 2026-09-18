import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { FlexBasisUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("FlexBasisUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new FlexBasisUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Flex basis utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-basis='0'] { flex-basis: 0; }
      [data-basis='unset'] { flex-basis: unset; }

      @media (max-width: 768px) {
        [data-md-basis='0'] { flex-basis: 0; }
        [data-md-basis='unset'] { flex-basis: unset; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-basis"?: "0" | "unset";
      "data-md-basis"?: "0" | "unset";
    `);
  });
});

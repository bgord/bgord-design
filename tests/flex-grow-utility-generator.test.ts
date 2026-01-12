import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { FlexGrowUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("FlexGrowUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new FlexGrowUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Flex grow utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-grow='1'] { flex-grow: 1; }
      [data-grow='unset'] { flex-grow: unset; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-grow"?: "1" | "unset";
    `);
  });
});

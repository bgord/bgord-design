import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { PositionUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("PositionUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new PositionUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Position utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-position='static'] { position: static; }
      [data-position='relative'] { position: relative; }
      [data-position='absolute'] { position: absolute; }
      [data-position='fixed'] { position: fixed; }
      [data-position='sticky'] { position: sticky; }
      [data-position='unset'] { position: unset; }

      @media (max-width: 768px) {
        [data-md-position='static'] { position: static; }
        [data-md-position='relative'] { position: relative; }
        [data-md-position='absolute'] { position: absolute; }
        [data-md-position='fixed'] { position: fixed; }
        [data-md-position='sticky'] { position: sticky; }
        [data-md-position='unset'] { position: unset; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-position"?: "static" | "relative" | "absolute" | "fixed" | "sticky" | "unset";
    `);
  });
});

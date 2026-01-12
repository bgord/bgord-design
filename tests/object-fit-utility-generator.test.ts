import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { ObjectFitUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("ObjectFitUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new ObjectFitUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Object fit utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-object-fit='contain'] { object-fit: contain; }
      [data-object-fit='cover'] { object-fit: cover; }
      [data-object-fit='fill'] { object-fit: fill; }
      [data-object-fit='scale-down'] { object-fit: scale-down; }
      [data-object-fit='none'] { object-fit: none; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-object-fit"?: "contain" | "cover" | "fill" | "scale-down" | "none";
    `);
  });
});

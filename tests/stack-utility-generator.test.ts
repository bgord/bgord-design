import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { StackUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("StackUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new StackUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Stack utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-stack='x'] { display: flex; flex-wrap: wrap; }
      [data-stack='y'] { display: flex; flex-wrap: wrap; flex-direction: column; }

      @media (max-width: 768px) {
        [data-md-stack='x'] { display: flex; flex-wrap: wrap; }
        [data-md-stack='y'] { display: flex; flex-wrap: wrap; flex-direction: column; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-stack"?: "x" | "y";
      "data-md-stack"?: "x" | "y";
   `);
  });
});

import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { SelfPlacementUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("SelfPlacementUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new SelfPlacementUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Self placement utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-self='auto'] { align-self: auto; }
      [data-self='start'] { align-self: flex-start; }
      [data-self='end'] { align-self: flex-end; }
      [data-self='center'] { align-self: center; }
      [data-self='stretch'] { align-self: stretch; }
      [data-self='baseline'] { align-self: baseline; }

      @media (max-width: 768px) {
        [data-md-self='auto'] { align-self: auto; }
        [data-md-self='start'] { align-self: flex-start; }
        [data-md-self='end'] { align-self: flex-end; }
        [data-md-self='center'] { align-self: center; }
        [data-md-self='stretch'] { align-self: stretch; }
        [data-md-self='baseline'] { align-self: baseline; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-self"?: "auto" | "start" | "end" | "center" | "stretch" | "baseline";
      "data-md-self"?: "auto" | "start" | "end" | "center" | "stretch" | "baseline";
    `);
  });
});

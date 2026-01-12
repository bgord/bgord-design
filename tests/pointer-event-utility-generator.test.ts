import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { PointerEventUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("PointerEventUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new PointerEventUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Pointer event utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-pointer-events='none'] { pointer-events: none; }
      [data-pointer-events='auto'] { pointer-events: auto; }

      @media (max-width: 768px) {
        [data-md-pointer-events='none'] { pointer-events: none; }
        [data-md-pointer-events='auto'] { pointer-events: auto; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-pointer-events"?: "none" | "auto";
      "data-md-pointer-events"?: "none" | "auto";
    `);
  });
});

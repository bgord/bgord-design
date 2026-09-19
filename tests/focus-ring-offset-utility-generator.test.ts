import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { FocusRingOffsetUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("FocusRingOffsetUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new FocusRingOffsetUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Focus-ring offset utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-focus-ring-offset='inset']:focus-visible { outline-offset: calc(-1 * var(--border-width-thin)); }
      [data-focus-ring-offset='none']:focus-visible { outline-offset: 0; }

      @media (max-width: 768px) {
        [data-md-focus-ring-offset='inset']:focus-visible { outline-offset: calc(-1 * var(--border-width-thin)); }
        [data-md-focus-ring-offset='none']:focus-visible { outline-offset: 0; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-focus-ring-offset"?: "inset" | "none";
      "data-md-focus-ring-offset"?: "inset" | "none";
    `);
  });
});

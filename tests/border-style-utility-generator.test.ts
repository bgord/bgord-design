import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { BorderStyleUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("BorderStyleUtilityGenerator", () => {
  test("basic usage", () => {
    const BorderStyleTokenGenerator = new Tokens.BorderStyleTokenGenerator();
    const generator = new BorderStyleUtilityGenerator(breakpoints, BorderStyleTokenGenerator);

    expect(generator.name).toEqual("Border style utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-bs='none'] { border-style: var(--border-style-none); }
      [data-bs='solid'] { border-style: var(--border-style-solid); }
      [data-bs='dashed'] { border-style: var(--border-style-dashed); }
      [data-bs='dotted'] { border-style: var(--border-style-dotted); }
      [data-bs='double'] { border-style: var(--border-style-double); }

      @media (max-width: 768px) {
        [data-md-bs='none'] { border-style: var(--border-style-none); }
        [data-md-bs='solid'] { border-style: var(--border-style-solid); }
        [data-md-bs='dashed'] { border-style: var(--border-style-dashed); }
        [data-md-bs='dotted'] { border-style: var(--border-style-dotted); }
        [data-md-bs='double'] { border-style: var(--border-style-double); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-bs"?: "none" | "solid" | "dashed" | "dotted" | "double";
      "data-md-bs"?: "none" | "solid" | "dashed" | "dotted" | "double";
   `);
  });

  test("with overrides", () => {
    const BorderStyleTokenGenerator = new Tokens.BorderStyleTokenGenerator({ "border-style-inset": "inset" });
    const generator = new BorderStyleUtilityGenerator(breakpoints, BorderStyleTokenGenerator);

    expect(generator.name).toEqual("Border style utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-bs='none'] { border-style: var(--border-style-none); }
      [data-bs='solid'] { border-style: var(--border-style-solid); }
      [data-bs='dashed'] { border-style: var(--border-style-dashed); }
      [data-bs='dotted'] { border-style: var(--border-style-dotted); }
      [data-bs='double'] { border-style: var(--border-style-double); }
      [data-bs='inset'] { border-style: var(--border-style-inset); }

      @media (max-width: 768px) {
        [data-md-bs='none'] { border-style: var(--border-style-none); }
        [data-md-bs='solid'] { border-style: var(--border-style-solid); }
        [data-md-bs='dashed'] { border-style: var(--border-style-dashed); }
        [data-md-bs='dotted'] { border-style: var(--border-style-dotted); }
        [data-md-bs='double'] { border-style: var(--border-style-double); }
        [data-md-bs='inset'] { border-style: var(--border-style-inset); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-bs"?: "none" | "solid" | "dashed" | "dotted" | "double" | "inset";
      "data-md-bs"?: "none" | "solid" | "dashed" | "dotted" | "double" | "inset";
   `);
  });
});

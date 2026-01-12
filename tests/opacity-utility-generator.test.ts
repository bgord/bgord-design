import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { OpacityUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("OpacityUtilityGenerator", () => {
  test("basic usage", () => {
    const OpacityTokenGenerator = new Tokens.OpacityTokenGenerator();
    const generator = new OpacityUtilityGenerator(breakpoints, OpacityTokenGenerator);

    expect(generator.name).toEqual("Opacity utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-opacity='full'] { opacity: var(--opacity-full); }
      [data-opacity='high'] { opacity: var(--opacity-high); }
      [data-opacity='medium'] { opacity: var(--opacity-medium); }
      [data-opacity='low'] { opacity: var(--opacity-low); }

      @media (max-width: 768px) {
        [data-md-opacity='full'] { opacity: var(--opacity-full); }
        [data-md-opacity='high'] { opacity: var(--opacity-high); }
        [data-md-opacity='medium'] { opacity: var(--opacity-medium); }
        [data-md-opacity='low'] { opacity: var(--opacity-low); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-opacity"?: "full" | "high" | "medium" | "low";
    `);
  });

  test("with overrides", () => {
    const OpacityTokenGenerator = new Tokens.OpacityTokenGenerator({ "opacity-25": "0.25" });
    const generator = new OpacityUtilityGenerator(breakpoints, OpacityTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-opacity='full'] { opacity: var(--opacity-full); }
      [data-opacity='high'] { opacity: var(--opacity-high); }
      [data-opacity='medium'] { opacity: var(--opacity-medium); }
      [data-opacity='low'] { opacity: var(--opacity-low); }
      [data-opacity='25'] { opacity: var(--opacity-25); }

      @media (max-width: 768px) {
        [data-md-opacity='full'] { opacity: var(--opacity-full); }
        [data-md-opacity='high'] { opacity: var(--opacity-high); }
        [data-md-opacity='medium'] { opacity: var(--opacity-medium); }
        [data-md-opacity='low'] { opacity: var(--opacity-low); }
        [data-md-opacity='25'] { opacity: var(--opacity-25); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-opacity"?: "full" | "high" | "medium" | "low" | "25";
    `);
  });
});

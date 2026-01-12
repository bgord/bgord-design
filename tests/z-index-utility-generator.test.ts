import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { ZIndexUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("ZIndexUtilityGenerator", () => {
  test("basic usage", () => {
    const ZIndexTokenGenerator = new Tokens.ZIndexTokenGenerator();
    const generator = new ZIndexUtilityGenerator(breakpoints, ZIndexTokenGenerator);

    expect(generator.name).toEqual("Z-index utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-z='negative'] { z-index: var(--z-index-negative); }
      [data-z='0'] { z-index: var(--z-index-0); }
      [data-z='1'] { z-index: var(--z-index-1); }
      [data-z='2'] { z-index: var(--z-index-2); }
      [data-z='3'] { z-index: var(--z-index-3); }

      @media (max-width: 768px) {
        [data-md-z='negative'] { z-index: var(--z-index-negative); }
        [data-md-z='0'] { z-index: var(--z-index-0); }
        [data-md-z='1'] { z-index: var(--z-index-1); }
        [data-md-z='2'] { z-index: var(--z-index-2); }
        [data-md-z='3'] { z-index: var(--z-index-3); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-z"?: "negative" | "0" | "1" | "2" | "3";
      "data-md-z"?: "negative" | "0" | "1" | "2" | "3";
    `);
  });

  test("with overrides", () => {
    const ZIndexTokenGenerator = new Tokens.ZIndexTokenGenerator({ "z-index-top": "9999" });
    const generator = new ZIndexUtilityGenerator(breakpoints, ZIndexTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-z='negative'] { z-index: var(--z-index-negative); }
      [data-z='0'] { z-index: var(--z-index-0); }
      [data-z='1'] { z-index: var(--z-index-1); }
      [data-z='2'] { z-index: var(--z-index-2); }
      [data-z='3'] { z-index: var(--z-index-3); }
      [data-z='top'] { z-index: var(--z-index-top); }

      @media (max-width: 768px) {
        [data-md-z='negative'] { z-index: var(--z-index-negative); }
        [data-md-z='0'] { z-index: var(--z-index-0); }
        [data-md-z='1'] { z-index: var(--z-index-1); }
        [data-md-z='2'] { z-index: var(--z-index-2); }
        [data-md-z='3'] { z-index: var(--z-index-3); }
        [data-md-z='top'] { z-index: var(--z-index-top); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-z"?: "negative" | "0" | "1" | "2" | "3" | "top";
      "data-md-z"?: "negative" | "0" | "1" | "2" | "3" | "top";
    `);
  });
});

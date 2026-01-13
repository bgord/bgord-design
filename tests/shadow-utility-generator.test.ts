import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { StateRegistry } from "../src/state-registry";
import * as Tokens from "../src/tokens";
import { ShadowUtilityGenerator } from "../src/utilities";

const states = new StateRegistry({ hover: true });
const breakpoints = new BreakpointRegistry({ md: "768" });

describe("ShadowUtilityGenerator", () => {
  test("basic usage", () => {
    const ShadowTokenGenerator = new Tokens.ShadowTokenGenerator();
    const generator = new ShadowUtilityGenerator(breakpoints, states, ShadowTokenGenerator);

    expect(generator.name).toEqual("Shadow utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-shadow='none'] { box-shadow: var(--shadow-none); }
      [data-shadow='xs'] { box-shadow: var(--shadow-xs); }
      [data-shadow='sm'] { box-shadow: var(--shadow-sm); }
      [data-shadow='md'] { box-shadow: var(--shadow-md); }
      [data-shadow='lg'] { box-shadow: var(--shadow-lg); }
      [data-shadow='xl'] { box-shadow: var(--shadow-xl); }
      [data-shadow='inner'] { box-shadow: var(--shadow-inner); }
      [data-shadow='unset'] { box-shadow: var(--shadow-unset); }


      [data-hover-shadow='none']:hover:not(:disabled) { box-shadow: var(--shadow-none); }
      [data-hover-shadow='xs']:hover:not(:disabled) { box-shadow: var(--shadow-xs); }
      [data-hover-shadow='sm']:hover:not(:disabled) { box-shadow: var(--shadow-sm); }
      [data-hover-shadow='md']:hover:not(:disabled) { box-shadow: var(--shadow-md); }
      [data-hover-shadow='lg']:hover:not(:disabled) { box-shadow: var(--shadow-lg); }
      [data-hover-shadow='xl']:hover:not(:disabled) { box-shadow: var(--shadow-xl); }
      [data-hover-shadow='inner']:hover:not(:disabled) { box-shadow: var(--shadow-inner); }
      [data-hover-shadow='unset']:hover:not(:disabled) { box-shadow: var(--shadow-unset); }

      @media (max-width: 768px) {
        [data-md-shadow='none'] { box-shadow: var(--shadow-none); }
        [data-md-shadow='xs'] { box-shadow: var(--shadow-xs); }
        [data-md-shadow='sm'] { box-shadow: var(--shadow-sm); }
        [data-md-shadow='md'] { box-shadow: var(--shadow-md); }
        [data-md-shadow='lg'] { box-shadow: var(--shadow-lg); }
        [data-md-shadow='xl'] { box-shadow: var(--shadow-xl); }
        [data-md-shadow='inner'] { box-shadow: var(--shadow-inner); }
        [data-md-shadow='unset'] { box-shadow: var(--shadow-unset); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-shadow"?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "inner" | "unset";
      "data-hover-shadow"?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "inner" | "unset";
      "data-md-shadow"?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "inner" | "unset";
    `);
  });

  test("with overrides", () => {
    const ShadowTokenGenerator = new Tokens.ShadowTokenGenerator({ "shadow-huge": "10px 10px 10px black" });
    const generator = new ShadowUtilityGenerator(breakpoints, states, ShadowTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-shadow='none'] { box-shadow: var(--shadow-none); }
      [data-shadow='xs'] { box-shadow: var(--shadow-xs); }
      [data-shadow='sm'] { box-shadow: var(--shadow-sm); }
      [data-shadow='md'] { box-shadow: var(--shadow-md); }
      [data-shadow='lg'] { box-shadow: var(--shadow-lg); }
      [data-shadow='xl'] { box-shadow: var(--shadow-xl); }
      [data-shadow='inner'] { box-shadow: var(--shadow-inner); }
      [data-shadow='unset'] { box-shadow: var(--shadow-unset); }
      [data-shadow='huge'] { box-shadow: var(--shadow-huge); }


      [data-hover-shadow='none']:hover:not(:disabled) { box-shadow: var(--shadow-none); }
      [data-hover-shadow='xs']:hover:not(:disabled) { box-shadow: var(--shadow-xs); }
      [data-hover-shadow='sm']:hover:not(:disabled) { box-shadow: var(--shadow-sm); }
      [data-hover-shadow='md']:hover:not(:disabled) { box-shadow: var(--shadow-md); }
      [data-hover-shadow='lg']:hover:not(:disabled) { box-shadow: var(--shadow-lg); }
      [data-hover-shadow='xl']:hover:not(:disabled) { box-shadow: var(--shadow-xl); }
      [data-hover-shadow='inner']:hover:not(:disabled) { box-shadow: var(--shadow-inner); }
      [data-hover-shadow='unset']:hover:not(:disabled) { box-shadow: var(--shadow-unset); }
      [data-hover-shadow='huge']:hover:not(:disabled) { box-shadow: var(--shadow-huge); }

      @media (max-width: 768px) {
        [data-md-shadow='none'] { box-shadow: var(--shadow-none); }
        [data-md-shadow='xs'] { box-shadow: var(--shadow-xs); }
        [data-md-shadow='sm'] { box-shadow: var(--shadow-sm); }
        [data-md-shadow='md'] { box-shadow: var(--shadow-md); }
        [data-md-shadow='lg'] { box-shadow: var(--shadow-lg); }
        [data-md-shadow='xl'] { box-shadow: var(--shadow-xl); }
        [data-md-shadow='inner'] { box-shadow: var(--shadow-inner); }
        [data-md-shadow='unset'] { box-shadow: var(--shadow-unset); }
        [data-md-shadow='huge'] { box-shadow: var(--shadow-huge); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-shadow"?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "inner" | "unset" | "huge";
      "data-hover-shadow"?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "inner" | "unset" | "huge";
      "data-md-shadow"?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "inner" | "unset" | "huge";
    `);
  });
});

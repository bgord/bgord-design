import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { StateRegistry } from "../src/state-registry";
import * as Tokens from "../src/tokens";
import { OpacityUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });
const states = new StateRegistry({ hover: true, focus: true, active: true });

describe("OpacityUtilityGenerator", () => {
  test("basic usage", () => {
    const OpacityTokenGenerator = new Tokens.OpacityTokenGenerator();
    const generator = new OpacityUtilityGenerator(breakpoints, states, OpacityTokenGenerator);

    expect(generator.name).toEqual("Opacity utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-opacity='full'] { opacity: var(--opacity-full); }
      [data-opacity='high'] { opacity: var(--opacity-high); }
      [data-opacity='medium'] { opacity: var(--opacity-medium); }
      [data-opacity='low'] { opacity: var(--opacity-low); }
      [data-opacity='none'] { opacity: var(--opacity-none); }


      [data-hover-opacity='full']:hover:not(:disabled) { opacity: var(--opacity-full); }
      [data-hover-opacity='high']:hover:not(:disabled) { opacity: var(--opacity-high); }
      [data-hover-opacity='medium']:hover:not(:disabled) { opacity: var(--opacity-medium); }
      [data-hover-opacity='low']:hover:not(:disabled) { opacity: var(--opacity-low); }
      [data-hover-opacity='none']:hover:not(:disabled) { opacity: var(--opacity-none); }


      [data-focus-opacity='full']:focus-visible { opacity: var(--opacity-full); }
      [data-focus-opacity='high']:focus-visible { opacity: var(--opacity-high); }
      [data-focus-opacity='medium']:focus-visible { opacity: var(--opacity-medium); }
      [data-focus-opacity='low']:focus-visible { opacity: var(--opacity-low); }
      [data-focus-opacity='none']:focus-visible { opacity: var(--opacity-none); }


      [data-active-opacity='full']:active { opacity: var(--opacity-full); }
      [data-active-opacity='high']:active { opacity: var(--opacity-high); }
      [data-active-opacity='medium']:active { opacity: var(--opacity-medium); }
      [data-active-opacity='low']:active { opacity: var(--opacity-low); }
      [data-active-opacity='none']:active { opacity: var(--opacity-none); }


      @media (max-width: 768px) {
        [data-md-opacity='full'] { opacity: var(--opacity-full); }
        [data-md-opacity='high'] { opacity: var(--opacity-high); }
        [data-md-opacity='medium'] { opacity: var(--opacity-medium); }
        [data-md-opacity='low'] { opacity: var(--opacity-low); }
        [data-md-opacity='none'] { opacity: var(--opacity-none); }


        [data-md-hover-opacity='full']:hover:not(:disabled) { opacity: var(--opacity-full); }
        [data-md-hover-opacity='high']:hover:not(:disabled) { opacity: var(--opacity-high); }
        [data-md-hover-opacity='medium']:hover:not(:disabled) { opacity: var(--opacity-medium); }
        [data-md-hover-opacity='low']:hover:not(:disabled) { opacity: var(--opacity-low); }
        [data-md-hover-opacity='none']:hover:not(:disabled) { opacity: var(--opacity-none); }


        [data-md-focus-opacity='full']:focus-visible { opacity: var(--opacity-full); }
        [data-md-focus-opacity='high']:focus-visible { opacity: var(--opacity-high); }
        [data-md-focus-opacity='medium']:focus-visible { opacity: var(--opacity-medium); }
        [data-md-focus-opacity='low']:focus-visible { opacity: var(--opacity-low); }
        [data-md-focus-opacity='none']:focus-visible { opacity: var(--opacity-none); }


        [data-md-active-opacity='full']:active { opacity: var(--opacity-full); }
        [data-md-active-opacity='high']:active { opacity: var(--opacity-high); }
        [data-md-active-opacity='medium']:active { opacity: var(--opacity-medium); }
        [data-md-active-opacity='low']:active { opacity: var(--opacity-low); }
        [data-md-active-opacity='none']:active { opacity: var(--opacity-none); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-opacity"?: "full" | "high" | "medium" | "low" | "none";
      "data-hover-opacity"?: "full" | "high" | "medium" | "low" | "none";
      "data-focus-opacity"?: "full" | "high" | "medium" | "low" | "none";
      "data-active-opacity"?: "full" | "high" | "medium" | "low" | "none";
      "data-md-opacity"?: "full" | "high" | "medium" | "low" | "none";
      "data-md-hover-opacity"?: "full" | "high" | "medium" | "low" | "none";
      "data-md-focus-opacity"?: "full" | "high" | "medium" | "low" | "none";
      "data-md-active-opacity"?: "full" | "high" | "medium" | "low" | "none";
    `);
  });

  test("with overrides", () => {
    const OpacityTokenGenerator = new Tokens.OpacityTokenGenerator({ "opacity-25": "0.25" });
    const generator = new OpacityUtilityGenerator(breakpoints, states, OpacityTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-opacity='full'] { opacity: var(--opacity-full); }
      [data-opacity='high'] { opacity: var(--opacity-high); }
      [data-opacity='medium'] { opacity: var(--opacity-medium); }
      [data-opacity='low'] { opacity: var(--opacity-low); }
      [data-opacity='none'] { opacity: var(--opacity-none); }
      [data-opacity='25'] { opacity: var(--opacity-25); }


      [data-hover-opacity='full']:hover:not(:disabled) { opacity: var(--opacity-full); }
      [data-hover-opacity='high']:hover:not(:disabled) { opacity: var(--opacity-high); }
      [data-hover-opacity='medium']:hover:not(:disabled) { opacity: var(--opacity-medium); }
      [data-hover-opacity='low']:hover:not(:disabled) { opacity: var(--opacity-low); }
      [data-hover-opacity='none']:hover:not(:disabled) { opacity: var(--opacity-none); }
      [data-hover-opacity='25']:hover:not(:disabled) { opacity: var(--opacity-25); }


      [data-focus-opacity='full']:focus-visible { opacity: var(--opacity-full); }
      [data-focus-opacity='high']:focus-visible { opacity: var(--opacity-high); }
      [data-focus-opacity='medium']:focus-visible { opacity: var(--opacity-medium); }
      [data-focus-opacity='low']:focus-visible { opacity: var(--opacity-low); }
      [data-focus-opacity='none']:focus-visible { opacity: var(--opacity-none); }
      [data-focus-opacity='25']:focus-visible { opacity: var(--opacity-25); }


      [data-active-opacity='full']:active { opacity: var(--opacity-full); }
      [data-active-opacity='high']:active { opacity: var(--opacity-high); }
      [data-active-opacity='medium']:active { opacity: var(--opacity-medium); }
      [data-active-opacity='low']:active { opacity: var(--opacity-low); }
      [data-active-opacity='none']:active { opacity: var(--opacity-none); }
      [data-active-opacity='25']:active { opacity: var(--opacity-25); }


      @media (max-width: 768px) {
        [data-md-opacity='full'] { opacity: var(--opacity-full); }
        [data-md-opacity='high'] { opacity: var(--opacity-high); }
        [data-md-opacity='medium'] { opacity: var(--opacity-medium); }
        [data-md-opacity='low'] { opacity: var(--opacity-low); }
        [data-md-opacity='none'] { opacity: var(--opacity-none); }
        [data-md-opacity='25'] { opacity: var(--opacity-25); }


        [data-md-hover-opacity='full']:hover:not(:disabled) { opacity: var(--opacity-full); }
        [data-md-hover-opacity='high']:hover:not(:disabled) { opacity: var(--opacity-high); }
        [data-md-hover-opacity='medium']:hover:not(:disabled) { opacity: var(--opacity-medium); }
        [data-md-hover-opacity='low']:hover:not(:disabled) { opacity: var(--opacity-low); }
        [data-md-hover-opacity='none']:hover:not(:disabled) { opacity: var(--opacity-none); }
        [data-md-hover-opacity='25']:hover:not(:disabled) { opacity: var(--opacity-25); }


        [data-md-focus-opacity='full']:focus-visible { opacity: var(--opacity-full); }
        [data-md-focus-opacity='high']:focus-visible { opacity: var(--opacity-high); }
        [data-md-focus-opacity='medium']:focus-visible { opacity: var(--opacity-medium); }
        [data-md-focus-opacity='low']:focus-visible { opacity: var(--opacity-low); }
        [data-md-focus-opacity='none']:focus-visible { opacity: var(--opacity-none); }
        [data-md-focus-opacity='25']:focus-visible { opacity: var(--opacity-25); }


        [data-md-active-opacity='full']:active { opacity: var(--opacity-full); }
        [data-md-active-opacity='high']:active { opacity: var(--opacity-high); }
        [data-md-active-opacity='medium']:active { opacity: var(--opacity-medium); }
        [data-md-active-opacity='low']:active { opacity: var(--opacity-low); }
        [data-md-active-opacity='none']:active { opacity: var(--opacity-none); }
        [data-md-active-opacity='25']:active { opacity: var(--opacity-25); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-opacity"?: "full" | "high" | "medium" | "low" | "none" | "25";
      "data-hover-opacity"?: "full" | "high" | "medium" | "low" | "none" | "25";
      "data-focus-opacity"?: "full" | "high" | "medium" | "low" | "none" | "25";
      "data-active-opacity"?: "full" | "high" | "medium" | "low" | "none" | "25";
      "data-md-opacity"?: "full" | "high" | "medium" | "low" | "none" | "25";
      "data-md-hover-opacity"?: "full" | "high" | "medium" | "low" | "none" | "25";
      "data-md-focus-opacity"?: "full" | "high" | "medium" | "low" | "none" | "25";
      "data-md-active-opacity"?: "full" | "high" | "medium" | "low" | "none" | "25";
    `);
  });
});

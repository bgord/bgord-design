import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { FocusRingUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("FocusRingUtilityGenerator", () => {
  test("basic usage", () => {
    const FocusRingTokenGenerator = new Tokens.FocusRingTokenGenerator();
    const generator = new FocusRingUtilityGenerator(breakpoints, FocusRingTokenGenerator);

    expect(generator.name).toEqual("Focus-ring utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-focus-ring='brand']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) var(--color-brand-500); outline-offset: var(--border-width-thin); }
      [data-focus-ring='neutral']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) var(--color-neutral-400); outline-offset: var(--border-width-thin); }
      [data-focus-ring='danger']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) var(--color-danger-200); outline-offset: var(--border-width-thin); }

      @media (max-width: 768px) {
        [data-md-focus-ring='brand']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) var(--color-brand-500); outline-offset: var(--border-width-thin); }
        [data-md-focus-ring='neutral']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) var(--color-neutral-400); outline-offset: var(--border-width-thin); }
        [data-md-focus-ring='danger']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) var(--color-danger-200); outline-offset: var(--border-width-thin); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-focus-ring"?: "brand" | "neutral" | "danger";
      "data-md-focus-ring"?: "brand" | "neutral" | "danger";
    `);
  });

  test("with overrides", () => {
    const FocusRingTokenGenerator = new Tokens.FocusRingTokenGenerator({ "focus-ring-black": "black" });
    const generator = new FocusRingUtilityGenerator(breakpoints, FocusRingTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-focus-ring='brand']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) var(--color-brand-500); outline-offset: var(--border-width-thin); }
      [data-focus-ring='neutral']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) var(--color-neutral-400); outline-offset: var(--border-width-thin); }
      [data-focus-ring='danger']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) var(--color-danger-200); outline-offset: var(--border-width-thin); }
      [data-focus-ring='black']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) black; outline-offset: var(--border-width-thin); }

      @media (max-width: 768px) {
        [data-md-focus-ring='brand']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) var(--color-brand-500); outline-offset: var(--border-width-thin); }
        [data-md-focus-ring='neutral']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) var(--color-neutral-400); outline-offset: var(--border-width-thin); }
        [data-md-focus-ring='danger']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) var(--color-danger-200); outline-offset: var(--border-width-thin); }
        [data-md-focus-ring='black']:focus-visible { outline: var(--border-width-thin) var(--border-style-solid) black; outline-offset: var(--border-width-thin); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-focus-ring"?: "brand" | "neutral" | "danger" | "black";
      "data-md-focus-ring"?: "brand" | "neutral" | "danger" | "black";
    `);
  });
});

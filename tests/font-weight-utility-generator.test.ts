import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { FontWeightUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("FontWeightUtilityGenerator", () => {
  test("basic usage", () => {
    const FontWeightTokenGenerator = new Tokens.FontWeightTokenGenerator();
    const generator = new FontWeightUtilityGenerator(breakpoints, FontWeightTokenGenerator);

    expect(generator.name).toEqual("Font-weight utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-fw='light'] { font-weight: var(--font-weight-light); }
      [data-fw='regular'] { font-weight: var(--font-weight-regular); }
      [data-fw='medium'] { font-weight: var(--font-weight-medium); }
      [data-fw='bold'] { font-weight: var(--font-weight-bold); }
      [data-fw='black'] { font-weight: var(--font-weight-black); }
      [data-fw='unset'] { font-weight: var(--font-weight-unset); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-fw"?: "light" | "regular" | "medium" | "bold" | "black" | "unset";
    `);
  });

  test("with overrides", () => {
    const FontWeightTokenGenerator = new Tokens.FontWeightTokenGenerator({ "font-weight-super": "1000" });
    const generator = new FontWeightUtilityGenerator(breakpoints, FontWeightTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-fw='light'] { font-weight: var(--font-weight-light); }
      [data-fw='regular'] { font-weight: var(--font-weight-regular); }
      [data-fw='medium'] { font-weight: var(--font-weight-medium); }
      [data-fw='bold'] { font-weight: var(--font-weight-bold); }
      [data-fw='black'] { font-weight: var(--font-weight-black); }
      [data-fw='unset'] { font-weight: var(--font-weight-unset); }
      [data-fw='super'] { font-weight: var(--font-weight-super); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-fw"?: "light" | "regular" | "medium" | "bold" | "black" | "unset" | "super";
    `);
  });
});

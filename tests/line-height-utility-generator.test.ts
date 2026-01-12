import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { LineHeightUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("LineHeightUtilityGenerator", () => {
  test("basic usage", () => {
    const LineHeightTokenGenerator = new Tokens.LineHeightTokenGenerator();
    const generator = new LineHeightUtilityGenerator(breakpoints, LineHeightTokenGenerator);

    expect(generator.name).toEqual("Line height utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-lh='none'] { line-height: var(--line-height-none); }
      [data-lh='tight'] { line-height: var(--line-height-tight); }
      [data-lh='base'] { line-height: var(--line-height-base); }
      [data-lh='loose'] { line-height: var(--line-height-loose); }
      [data-lh='display'] { line-height: var(--line-height-display); }
      [data-lh='unset'] { line-height: var(--line-height-unset); }

      @media (max-width: 768px) {
        [data-md-lh='none'] { line-height: var(--line-height-none); }
        [data-md-lh='tight'] { line-height: var(--line-height-tight); }
        [data-md-lh='base'] { line-height: var(--line-height-base); }
        [data-md-lh='loose'] { line-height: var(--line-height-loose); }
        [data-md-lh='display'] { line-height: var(--line-height-display); }
        [data-md-lh='unset'] { line-height: var(--line-height-unset); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-lh"?: "none" | "tight" | "base" | "loose" | "display" | "unset";
      "data-md-lh"?: "none" | "tight" | "base" | "loose" | "display" | "unset";
    `);
  });

  test("with overrides", () => {
    const LineHeightTokenGenerator = new Tokens.LineHeightTokenGenerator({ "line-height-huge": "3" });
    const generator = new LineHeightUtilityGenerator(breakpoints, LineHeightTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-lh='none'] { line-height: var(--line-height-none); }
      [data-lh='tight'] { line-height: var(--line-height-tight); }
      [data-lh='base'] { line-height: var(--line-height-base); }
      [data-lh='loose'] { line-height: var(--line-height-loose); }
      [data-lh='display'] { line-height: var(--line-height-display); }
      [data-lh='unset'] { line-height: var(--line-height-unset); }
      [data-lh='huge'] { line-height: var(--line-height-huge); }

      @media (max-width: 768px) {
        [data-md-lh='none'] { line-height: var(--line-height-none); }
        [data-md-lh='tight'] { line-height: var(--line-height-tight); }
        [data-md-lh='base'] { line-height: var(--line-height-base); }
        [data-md-lh='loose'] { line-height: var(--line-height-loose); }
        [data-md-lh='display'] { line-height: var(--line-height-display); }
        [data-md-lh='unset'] { line-height: var(--line-height-unset); }
        [data-md-lh='huge'] { line-height: var(--line-height-huge); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-lh"?: "none" | "tight" | "base" | "loose" | "display" | "unset" | "huge";
      "data-md-lh"?: "none" | "tight" | "base" | "loose" | "display" | "unset" | "huge";
    `);
  });
});

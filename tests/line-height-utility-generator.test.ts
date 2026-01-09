import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { LineHeightUtilityGenerator } from "../src/utilities";

describe("LineHeightUtilityGenerator", () => {
  test("basic usage", () => {
    const LineHeightTokenGenerator = new Tokens.LineHeightTokenGenerator();
    const generator = new LineHeightUtilityGenerator(LineHeightTokenGenerator);

    expect(generator.name).toEqual("Line height utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-lh='none'] { line-height: var(--line-height-none); }
      [data-lh='tight'] { line-height: var(--line-height-tight); }
      [data-lh='base'] { line-height: var(--line-height-base); }
      [data-lh='loose'] { line-height: var(--line-height-loose); }
      [data-lh='display'] { line-height: var(--line-height-display); }
      [data-lh='unset'] { line-height: var(--line-height-unset); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-lh"?: "none" | "tight" | "base" | "loose" | "display" | "unset";
    `);
  });

  test("with overrides", () => {
    const LineHeightTokenGenerator = new Tokens.LineHeightTokenGenerator({ "line-height-huge": "3" });
    const generator = new LineHeightUtilityGenerator(LineHeightTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-lh='none'] { line-height: var(--line-height-none); }
      [data-lh='tight'] { line-height: var(--line-height-tight); }
      [data-lh='base'] { line-height: var(--line-height-base); }
      [data-lh='loose'] { line-height: var(--line-height-loose); }
      [data-lh='display'] { line-height: var(--line-height-display); }
      [data-lh='unset'] { line-height: var(--line-height-unset); }
      [data-lh='huge'] { line-height: var(--line-height-huge); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-lh"?: "none" | "tight" | "base" | "loose" | "display" | "unset" | "huge";
    `);
  });
});

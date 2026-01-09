import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { LineHeightUtilityGenerator } from "../src/utilities";

describe("LineHeightUtilityGenerator", () => {
  test("basic usage", () => {
    const LineHeightTokenGenerator = new Tokens.LineHeightTokenGenerator();
    const generator = new LineHeightUtilityGenerator(LineHeightTokenGenerator);

    const css = generator.css();

    expect(generator.name).toEqual("Line height utilities");
    expect(css).toContain("[data-lh='none'] { line-height: var(--line-height-none); }");
    expect(css).toContain("[data-lh='tight'] { line-height: var(--line-height-tight); }");
    expect(css).toContain("[data-lh='base'] { line-height: var(--line-height-base); }");
    expect(css).toContain("[data-lh='loose'] { line-height: var(--line-height-loose); }");
    expect(css).toContain("[data-lh='display'] { line-height: var(--line-height-display); }");
    expect(css).toContain("[data-lh='unset'] { line-height: var(--line-height-unset); }");

    const ts = generator.toTypeScript();

    expect(ts).toEqualIgnoringWhitespace(`
      "data-lh"?: "none" | "tight" | "base" | "loose" | "display" | "unset";
    `);
  });

  test("with overrides", () => {
    const LineHeightTokenGenerator = new Tokens.LineHeightTokenGenerator({ "line-height-huge": "3" });
    const generator = new LineHeightUtilityGenerator(LineHeightTokenGenerator);

    expect(generator.css()).toContain("[data-lh='huge'] { line-height: var(--line-height-huge); }");
    expect(generator.toTypeScript()).toContain('"huge"');
  });
});

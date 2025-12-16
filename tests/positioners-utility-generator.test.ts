import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { PositionersUtilityGenerator } from "../src/utilities";

describe("PositionersUtilityGenerator", () => {
  test("basic usage", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator();
    const generator = new PositionersUtilityGenerator(SpacingTokenGenerator);

    const css = generator.css();

    expect(css).toContain("[data-top='4'] { top: var(--spacing-4); }");
    expect(css).toContain("[data-right='4'] { right: var(--spacing-4); }");
    expect(css).toContain("[data-bottom='4'] { bottom: var(--spacing-4); }");
    expect(css).toContain("[data-left='4'] { left: var(--spacing-4); }");
    expect(css).toContain("[data-inset='4'] { inset: var(--spacing-4); }");

    const ts = generator.toTypeScript();

    expect(ts).toContain('"data-top"');
    expect(ts).toContain('"data-right"');
    expect(ts).toContain('"data-bottom"');
    expect(ts).toContain('"data-left"');
    expect(ts).toContain('"data-inset"');
  });

  test("with overrides", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator({ "spacing-huge": "100rem" });
    const generator = new PositionersUtilityGenerator(SpacingTokenGenerator);

    expect(generator.css()).toContain("[data-top='huge'] { top: var(--spacing-huge); }");
    expect(generator.toTypeScript()).toContain('"huge"');
  });
});

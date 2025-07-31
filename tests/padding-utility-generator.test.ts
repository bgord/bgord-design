import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { PaddingUtilityGenerator } from "../src/utilities";

describe("PaddingUtilityGenerator", () => {
  test("basic usage", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator();
    const generator = new PaddingUtilityGenerator(SpacingTokenGenerator);

    const css = generator.css();
    expect(css).toContain("[data-p='4'] { padding: var(--spacing-4); }");
    expect(css).toContain("[data-pt='4'] { padding-top: var(--spacing-4); }");
    expect(css).toContain("[data-pr='4'] { padding-right: var(--spacing-4); }");
    expect(css).toContain("[data-pb='4'] { padding-bottom: var(--spacing-4); }");
    expect(css).toContain("[data-pl='4'] { padding-left: var(--spacing-4); }");
    expect(css).toContain(
      "[data-px='4'] { padding-left: var(--spacing-4); padding-right: var(--spacing-4); }",
    );
    expect(css).toContain(
      "[data-py='4'] { padding-top: var(--spacing-4); padding-bottom: var(--spacing-4); }",
    );

    const ts = generator.toTypeScript();
    expect(ts).toContain('"data-p"');
    expect(ts).toContain('"data-pt"');
    expect(ts).toContain('"data-pr"');
    expect(ts).toContain('"data-pb"');
    expect(ts).toContain('"data-pl"');
    expect(ts).toContain('"data-px"');
    expect(ts).toContain('"data-py"');
  });

  test("with overrides", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator({ "spacing-huge": "100rem" });
    const generator = new PaddingUtilityGenerator(SpacingTokenGenerator);

    expect(generator.css()).toContain("[data-p='huge'] { padding: var(--spacing-huge); }");
    expect(generator.toTypeScript()).toContain('"huge"');
  });
});

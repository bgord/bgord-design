import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { MarginUtilityGenerator } from "../src/utilities";

describe("MarginUtilityGenerator", () => {
  test("basic usage", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator();
    const generator = new MarginUtilityGenerator(SpacingTokenGenerator);

    const css = generator.css();
    expect(css).toContain("[data-m='4'] { margin: var(--spacing-4); }");
    expect(css).toContain("[data-mt='4'] { margin-top: var(--spacing-4); }");
    expect(css).toContain("[data-mr='4'] { margin-right: var(--spacing-4); }");
    expect(css).toContain("[data-mb='4'] { margin-bottom: var(--spacing-4); }");
    expect(css).toContain("[data-ml='4'] { margin-left: var(--spacing-4); }");
    expect(css).toContain("[data-mx='4'] { margin: 0 var(--spacing-4); }");
    expect(css).toContain("[data-my='4'] { margin: var(--spacing-4) 0; }");

    const ts = generator.toTypeScript();
    expect(ts).toContain('"data-m"');
    expect(ts).toContain('"data-mt"');
    expect(ts).toContain('"data-mr"');
    expect(ts).toContain('"data-mb"');
    expect(ts).toContain('"data-ml"');
    expect(ts).toContain('"data-mx"');
    expect(ts).toContain('"data-my"');
  });

  test("with overrides", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator({ "spacing-huge": "100rem" });
    const generator = new MarginUtilityGenerator(SpacingTokenGenerator);

    expect(generator.css()).toContain("[data-m='huge'] { margin: var(--spacing-huge); }");
    expect(generator.toTypeScript()).toContain('"huge"');
  });
});

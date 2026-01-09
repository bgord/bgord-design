import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { GapUtilityGenerator } from "../src/utilities";

describe("GapUtilityGenerator", () => {
  test("basic usage", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator();
    const generator = new GapUtilityGenerator(SpacingTokenGenerator);

    const css = generator.css();

    expect(generator.name).toEqual("Gap utilities");
    expect(css).toContain("[data-gap='0'] { gap: var(--spacing-0); }");
    expect(css).toContain("[data-gap='1'] { gap: var(--spacing-1); }");
    expect(css).toContain("[data-gap='4'] { gap: var(--spacing-4); }");

    const ts = generator.toTypeScript();

    expect(ts).toContain('"0"');
    expect(ts).toContain('"1"');
    expect(ts).toContain('"4"');
    expect(ts).toMatch(/^"data-gap"\?:/);
  });

  test("with overrides", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator({ "spacing-huge": "100rem" });
    const generator = new GapUtilityGenerator(SpacingTokenGenerator);

    expect(generator.css()).toContain("[data-gap='huge'] { gap: var(--spacing-huge); }");
    expect(generator.toTypeScript()).toContain('"huge"');
  });
});

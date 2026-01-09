import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { ShadowUtilityGenerator } from "../src/utilities";

describe("ShadowUtilityGenerator", () => {
  test("basic usage", () => {
    const ShadowTokenGenerator = new Tokens.ShadowTokenGenerator();
    const generator = new ShadowUtilityGenerator(ShadowTokenGenerator);

    const css = generator.css();

    expect(generator.name).toEqual("Shadow utilities");
    expect(css).toContain("[data-shadow='sm'] { box-shadow: var(--shadow-sm); }");
    expect(css).toContain("[data-shadow='lg'] { box-shadow: var(--shadow-lg); }");

    const ts = generator.toTypeScript();

    expect(ts).toContain('"sm"');
    expect(ts).toContain('"lg"');
  });

  test("with overrides", () => {
    const ShadowTokenGenerator = new Tokens.ShadowTokenGenerator({ "shadow-huge": "10px 10px 10px black" });
    const generator = new ShadowUtilityGenerator(ShadowTokenGenerator);

    expect(generator.css()).toContain("[data-shadow='huge'] { box-shadow: var(--shadow-huge); }");
    expect(generator.toTypeScript()).toContain('"huge"');
  });
});

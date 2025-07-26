import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { RadiusUtilityGenerator } from "../src/utilities";

describe("RadiusUtilityGenerator", () => {
  test("basic usage", () => {
    const RadiusTokenGenerator = new Tokens.RadiusTokenGenerator();
    const generator = new RadiusUtilityGenerator(RadiusTokenGenerator);

    const css = generator.css();
    expect(css).toContain("[data-br='none'] { border-radius: var(--radius-none); }");
    expect(css).toContain("[data-br='sm'] { border-radius: var(--radius-sm); }");
    expect(css).toContain("[data-br='pill'] { border-radius: var(--radius-pill); }");

    const ts = generator.toTypeScript();
    expect(ts).toContain('"none"');
    expect(ts).toContain('"sm"');
    expect(ts).toContain('"pill"');
  });

  test("with overrides", () => {
    const RadiusTokenGenerator = new Tokens.RadiusTokenGenerator({ "radius-egg": "50% 20%" });
    const generator = new RadiusUtilityGenerator(RadiusTokenGenerator);

    expect(generator.css()).toContain("[data-br='egg'] { border-radius: var(--radius-egg); }");
    expect(generator.toTypeScript()).toContain('"egg"');
  });
});

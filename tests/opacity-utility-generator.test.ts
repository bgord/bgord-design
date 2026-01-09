import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { OpacityUtilityGenerator } from "../src/utilities";

describe("OpacityUtilityGenerator", () => {
  test("basic usage", () => {
    const OpacityTokenGenerator = new Tokens.OpacityTokenGenerator();
    const generator = new OpacityUtilityGenerator(OpacityTokenGenerator);

    const css = generator.css();

    expect(generator.name).toEqual("Opacity utilities");
    expect(css).toContain("[data-opacity='high'] { opacity: var(--opacity-high); }");
    expect(css).toContain("[data-opacity='medium'] { opacity: var(--opacity-medium); }");
    expect(css).toContain("[data-opacity='low'] { opacity: var(--opacity-low); }");

    const ts = generator.toTypeScript();

    expect(ts).toContain('"high"');
    expect(ts).toContain('"medium"');
    expect(ts).toContain('"low"');
  });

  test("with overrides", () => {
    const OpacityTokenGenerator = new Tokens.OpacityTokenGenerator({ "opacity-25": "0.25" });
    const generator = new OpacityUtilityGenerator(OpacityTokenGenerator);

    expect(generator.css()).toContain("[data-opacity='25'] { opacity: var(--opacity-25); }");
    expect(generator.toTypeScript()).toContain('"25"');
  });
});

import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { ZIndexUtilityGenerator } from "../src/utilities";

describe("ZIndexUtilityGenerator", () => {
  test("basic usage", () => {
    const ZIndexTokenGenerator = new Tokens.ZIndexTokenGenerator();
    const generator = new ZIndexUtilityGenerator(ZIndexTokenGenerator);

    const css = generator.css();

    expect(css).toContain("[data-z='negative'] { z-index: var(--z-index-negative); }");
    expect(css).toContain("[data-z='0'] { z-index: var(--z-index-0); }");
    expect(css).toContain("[data-z='1'] { z-index: var(--z-index-1); }");
    expect(css).toContain("[data-z='2'] { z-index: var(--z-index-2); }");
    expect(css).toContain("[data-z='3'] { z-index: var(--z-index-3); }");

    const ts = generator.toTypeScript();

    expect(ts).toContain('"negative"');
    expect(ts).toContain('"0"');
    expect(ts).toContain('"1"');
    expect(ts).toContain('"2"');
    expect(ts).toContain('"3"');
  });

  test("with overrides", () => {
    const ZIndexTokenGenerator = new Tokens.ZIndexTokenGenerator({ "z-index-top": "9999" });
    const generator = new ZIndexUtilityGenerator(ZIndexTokenGenerator);

    expect(generator.css()).toContain("[data-z='top'] { z-index: var(--z-index-top); }");
    expect(generator.toTypeScript()).toContain('"top"');
  });
});

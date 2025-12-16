import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { BackdropUtilityGenerator } from "../src/utilities";

describe("BackdropUtilityGenerator", () => {
  test("basic usage", () => {
    const BackdropsTokenGenerator = new Tokens.BackdropsTokenGenerator();
    const generator = new BackdropUtilityGenerator(BackdropsTokenGenerator);

    const css = generator.css();

    expect(css).toContain("[data-backdrop='none']::backdrop { background: var(--backdrop-none); }");
    expect(css).toContain("[data-backdrop='weak']::backdrop { background: var(--backdrop-weak); }");
    expect(css).toContain("[data-backdrop='medium']::backdrop { background: var(--backdrop-medium); }");
    expect(css).toContain("[data-backdrop='strong']::backdrop { background: var(--backdrop-strong); }");
    expect(css).toContain("[data-backdrop='stronger']::backdrop { background: var(--backdrop-stronger); }");

    const ts = generator.toTypeScript();

    expect(ts).toContain('"none"');
    expect(ts).toContain('"weak"');
    expect(ts).toContain('"medium"');
    expect(ts).toContain('"strong"');
  });

  test("with overrides", () => {
    const BackdropsTokenGenerator = new Tokens.BackdropsTokenGenerator({ "backdrop-new": "new-value" });
    const generator = new BackdropUtilityGenerator(BackdropsTokenGenerator);

    expect(generator.css()).toContain("[data-backdrop='new']::backdrop { background: var(--backdrop-new); }");
    expect(generator.toTypeScript()).toContain('"new"');
  });
});

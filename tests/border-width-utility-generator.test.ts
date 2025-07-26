import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { BorderWidthUtilityGenerator } from "../src/utilities";

describe("BorderWidthUtilityGenerator", () => {
  test("basic usage", () => {
    const BorderWidthTokenGenerator = new Tokens.BorderWidthTokenGenerator();
    const generator = new BorderWidthUtilityGenerator(BorderWidthTokenGenerator);

    const css = generator.css();
    expect(css).toContain("[data-bw='none'] { border-width: var(--border-width-none); }");
    expect(css).toContain("[data-bw='hairline'] { border-width: var(--border-width-hairline); }");
    expect(css).toContain("[data-bw='thin'] { border-width: var(--border-width-thin); }");
    expect(css).toContain("[data-bw='base'] { border-width: var(--border-width-base); }");
    expect(css).toContain("[data-bw='thick'] { border-width: var(--border-width-thick); }");
    expect(css).toContain("[data-bw='heavy'] { border-width: var(--border-width-heavy); }");
    expect(css).toContain("[data-bw='unset'] { border-width: var(--border-width-unset); }");

    const ts = generator.toTypeScript();
    expect(ts).toEqualIgnoringWhitespace(`
      "data-bw"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
    `);
  });

  test("with overrides", () => {
    const BorderWidthTokenGenerator = new Tokens.BorderWidthTokenGenerator({ "border-width-huge": "10px" });
    const generator = new BorderWidthUtilityGenerator(BorderWidthTokenGenerator);

    expect(generator.css()).toContain("[data-bw='huge'] { border-width: var(--border-width-huge); }");
    expect(generator.toTypeScript()).toContain('"huge"');
  });
});

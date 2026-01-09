import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { FontWeightUtilityGenerator } from "../src/utilities";

describe("FontWeightUtilityGenerator", () => {
  test("basic usage", () => {
    const FontWeightTokenGenerator = new Tokens.FontWeightTokenGenerator();
    const generator = new FontWeightUtilityGenerator(FontWeightTokenGenerator);

    const css = generator.css();

    expect(generator.name).toEqual("Font-weight utilities");
    expect(css).toContain("[data-fw='light'] { font-weight: var(--font-weight-light); }");
    expect(css).toContain("[data-fw='regular'] { font-weight: var(--font-weight-regular); }");
    expect(css).toContain("[data-fw='medium'] { font-weight: var(--font-weight-medium); }");
    expect(css).toContain("[data-fw='bold'] { font-weight: var(--font-weight-bold); }");
    expect(css).toContain("[data-fw='black'] { font-weight: var(--font-weight-black); }");
    expect(css).toContain("[data-fw='unset'] { font-weight: var(--font-weight-unset); }");

    const ts = generator.toTypeScript();

    expect(ts).toEqualIgnoringWhitespace(`
      "data-fw"?: "light" | "regular" | "medium" | "bold" | "black" | "unset";
    `);
  });

  test("with overrides", () => {
    const FontWeightTokenGenerator = new Tokens.FontWeightTokenGenerator({ "font-weight-super": "1000" });
    const generator = new FontWeightUtilityGenerator(FontWeightTokenGenerator);

    expect(generator.css()).toContain("[data-fw='super'] { font-weight: var(--font-weight-super); }");
    expect(generator.toTypeScript()).toContain('"super"');
  });
});

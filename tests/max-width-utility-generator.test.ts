import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { MaxWidthUtilityGenerator } from "../src/utilities";

describe("MaxWidthUtilityGenerator", () => {
  test("basic usage", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator();
    const generator = new MaxWidthUtilityGenerator(BreakpointTokenGenerator);

    const css = generator.css();

    expect(generator.name).toEqual("Max width utilities");
    expect(css).toContain("[data-maxw='100%'] { max-width: 100%; }");
    expect(css).toContain("[data-maxw='unset'] { max-width: unset; }");
    expect(css).toContain("[data-maxw='md'] { max-width: 768px; }");

    const ts = generator.toTypeScript();

    expect(ts).toContain('"100%"');
    expect(ts).toContain('"unset"');
    expect(ts).toContain('"md"');
  });

  test("with overrides", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator({ "breakpoint-full-hd": "1920px" });
    const generator = new MaxWidthUtilityGenerator(BreakpointTokenGenerator);

    expect(generator.css()).toContain("[data-maxw='full-hd'] { max-width: 1920px; }");
    expect(generator.toTypeScript()).toContain('"full-hd"');
  });
});

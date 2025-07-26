import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { MaxWidthUtilityGenerator } from "../src/utilities";

describe("MaxWidthUtilityGenerator", () => {
  test("basic usage", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator();
    const generator = new MaxWidthUtilityGenerator(BreakpointTokenGenerator);

    const css = generator.css();
    expect(css).toContain("[data-max-width='100%'] { max-width: 100%; }");
    expect(css).toContain("[data-max-width='unset'] { max-width: unset; }");
    expect(css).toContain("[data-max-width='breakpoint-md'] { max-width: 768px; }");

    const ts = generator.toTypeScript();
    expect(ts).toContain('"100%"');
    expect(ts).toContain('"unset"');
    expect(ts).toContain('"md"');
  });

  test("with overrides", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator({ "breakpoint-full-hd": "1920px" });
    const generator = new MaxWidthUtilityGenerator(BreakpointTokenGenerator);

    expect(generator.css()).toContain("[data-max-width='breakpoint-full-hd'] { max-width: 1920px; }");
    expect(generator.toTypeScript()).toContain('"full-hd"');
  });
});

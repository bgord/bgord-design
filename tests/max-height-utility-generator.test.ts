import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { MaxHeightUtilityGenerator } from "../src/utilities";

describe("MaxHeightUtilityGenerator", () => {
  test("basic usage", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator();
    const generator = new MaxHeightUtilityGenerator(BreakpointTokenGenerator);

    const css = generator.css();
    expect(css).toContain("[data-max-height='100%'] { max-height: 100%; }");
    expect(css).toContain("[data-max-height='unset'] { max-height: unset; }");
    expect(css).toContain("[data-max-height='breakpoint-md'] { max-height: 768px; }");

    const ts = generator.toTypeScript();
    expect(ts).toContain('"100%"');
    expect(ts).toContain('"unset"');
    expect(ts).toContain('"md"');
  });

  test("with overrides", () => {
    const BreakpointTokenGenerator = new Tokens.BreakpointTokenGenerator({ "breakpoint-full-hd": "1920px" });
    const generator = new MaxHeightUtilityGenerator(BreakpointTokenGenerator);

    expect(generator.css()).toContain("[data-max-height='breakpoint-full-hd'] { max-height: 1920px; }");
    expect(generator.toTypeScript()).toContain('"full-hd"');
  });
});

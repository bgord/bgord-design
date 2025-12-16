import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { BorderWidthUtilityGenerator } from "../src/utilities";

describe("BorderWidthUtilityGenerator", () => {
  test("basic usage", () => {
    const BorderWidthTokenGenerator = new Tokens.BorderWidthTokenGenerator();
    const generator = new BorderWidthUtilityGenerator(BorderWidthTokenGenerator);

    const css = generator.css();

    expect(css).toContain("[data-bw='base'] { border-width: var(--border-width-base); }");
    expect(css).toContain("[data-bwt='base'] { border-top-width: var(--border-width-base); }");
    expect(css).toContain("[data-bwr='base'] { border-right-width: var(--border-width-base); }");
    expect(css).toContain("[data-bwb='base'] { border-bottom-width: var(--border-width-base); }");
    expect(css).toContain("[data-bwl='base'] { border-left-width: var(--border-width-base); }");
    expect(css).toContain(
      "[data-bwx='base'] { border-left-width: var(--border-width-base); border-right-width: var(--border-width-base); }",
    );
    expect(css).toContain(
      "[data-bwy='base'] { border-top-width: var(--border-width-base); border-bottom-width: var(--border-width-base); }",
    );

    const ts = generator.toTypeScript();

    expect(ts).toContain('"data-bw"?:');
    expect(ts).toContain('"data-bwt"?:');
    expect(ts).toContain('"data-bwr"?:');
    expect(ts).toContain('"data-bwb"?:');
    expect(ts).toContain('"data-bwl"?:');
    expect(ts).toContain('"data-bwx"?:');
    expect(ts).toContain('"data-bwy"?:');
  });

  test("with overrides", () => {
    const BorderWidthTokenGenerator = new Tokens.BorderWidthTokenGenerator({ "border-width-huge": "10px" });
    const generator = new BorderWidthUtilityGenerator(BorderWidthTokenGenerator);

    expect(generator.css()).toContain("[data-bw='huge'] { border-width: var(--border-width-huge); }");
    expect(generator.toTypeScript()).toContain('"huge"');
  });
});

import { describe, expect, test } from "bun:test";
import postcss from "postcss";
import { dataAttributeAwareExtractor, keepResetLayer } from "../src/css-purge";

const run = (css: string) => postcss([keepResetLayer]).process(css, { from: undefined }).css;

describe("keepResetLayer", () => {
  test("basic usage", () => {
    expect(run("@layer reset { a { color: red } }")).toEqualIgnoringWhitespace(
      "/* purgecss start ignore */ @layer reset { a { color: red } } /* purgecss end ignore */",
    );
  });

  test("wraps only the reset layer", () => {
    expect(run("@layer reset{a{color:red}}@layer utilities{.b{color:blue}}")).toEqualIgnoringWhitespace(
      "/* purgecss start ignore */ @layer reset{a{color:red}} /* purgecss end ignore */ @layer utilities{.b{color:blue}}",
    );
  });

  test("no reset layer", () => {
    expect(run("@layer utilities{.a{color:red}}")).toEqualIgnoringWhitespace(
      "@layer utilities{.a{color:red}}",
    );
  });

  test("nested at-rules are preserved", () => {
    expect(run("@layer reset{@media (min-width:1px){a{color:red}}}")).toEqualIgnoringWhitespace(
      "/* purgecss start ignore */ @layer reset{@media (min-width:1px){a{color:red}}} /* purgecss end ignore */",
    );
  });

  test("matches regardless of source whitespace", () => {
    expect(run("@layer\treset\n{ a { color: red } }")).toEqualIgnoringWhitespace(
      "/* purgecss start ignore */ @layer\treset\n{ a { color: red } } /* purgecss end ignore */",
    );
  });

  test("params are trimmed", () => {
    const root = postcss.parse("a { color: red }");
    root.prepend(postcss.atRule({ name: "layer", params: "  reset  ", nodes: [] }));

    expect(postcss([keepResetLayer]).process(root, { from: undefined }).css).toContain(
      "/* purgecss start ignore */",
    );
  });

  test("layer order declaration is left alone", () => {
    expect(run("@layer reset, utilities;")).toEqualIgnoringWhitespace("@layer reset, utilities;");
  });
});

describe("dataAttributeAwareExtractor", () => {
  test("basic usage", () => {
    expect(dataAttributeAwareExtractor(`<div class="c-1 c-2">`)).toEqual(["div", "class", "c-1", "c-2"]);
  });

  test("data attribute without a value", () => {
    expect(dataAttributeAwareExtractor("<div data-main>")).toEqual([
      "div",
      "data-main",
      "data-main",
      "[data-main]",
      "data-main",
      "[data-main]",
    ]);
  });

  test("data attribute with a value", () => {
    expect(dataAttributeAwareExtractor(`<div data-main="center">`)).toEqual([
      "div",
      "data-main",
      "center",
      `data-main="center"`,
      `[data-main="center"]`,
      "data-main",
      "[data-main]",
    ]);
  });

  test("trailing colon is not part of a token", () => {
    expect(dataAttributeAwareExtractor("hover:bg red:")).toEqual(["hover:bg", "red"]);
  });

  test("no content", () => {
    expect(dataAttributeAwareExtractor("")).toEqual([]);
  });
});

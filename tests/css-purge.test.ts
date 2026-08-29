import { describe, expect, test } from "bun:test";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import postcss from "postcss";
import { content, dataAttributeAwareExtractor, keepResetLayer } from "../src/css-purge";

const run = (css: string) => postcss([keepResetLayer]).process(css, { from: undefined }).css;

describe("css-purge", () => {
  test("keepResetLayer - basic usage", () => {
    expect(run("@layer reset { a { color: red } }")).toEqualIgnoringWhitespace(
      "/* purgecss start ignore */ @layer reset { a { color: red } } /* purgecss end ignore */",
    );
  });

  test("keepResetLayer - wraps only the reset layer", () => {
    expect(run("@layer reset{a{color:red}}@layer utilities{.b{color:blue}}")).toEqualIgnoringWhitespace(
      "/* purgecss start ignore */ @layer reset{a{color:red}} /* purgecss end ignore */ @layer utilities{.b{color:blue}}",
    );
  });

  test("keepResetLayer - no reset layer", () => {
    expect(run("@layer utilities{.a{color:red}}")).toEqualIgnoringWhitespace(
      "@layer utilities{.a{color:red}}",
    );
  });

  test("keepResetLayer - nested at-rules are preserved", () => {
    expect(run("@layer reset{@media (min-width:1px){a{color:red}}}")).toEqualIgnoringWhitespace(
      "/* purgecss start ignore */ @layer reset{@media (min-width:1px){a{color:red}}} /* purgecss end ignore */",
    );
  });

  test("keepResetLayer - matches regardless of source whitespace", () => {
    expect(run("@layer\treset\n{ a { color: red } }")).toEqualIgnoringWhitespace(
      "/* purgecss start ignore */ @layer\treset\n{ a { color: red } } /* purgecss end ignore */",
    );
  });

  test("keepResetLayer - params are trimmed", () => {
    const root = postcss.parse("a { color: red }");
    root.prepend(postcss.atRule({ name: "layer", params: "  reset  ", nodes: [] }));

    expect(postcss([keepResetLayer]).process(root, { from: undefined }).css).toContain(
      "/* purgecss start ignore */",
    );
  });

  test("keepResetLayer - layer order declaration is left alone", () => {
    expect(run("@layer reset, utilities;")).toEqualIgnoringWhitespace("@layer reset, utilities;");
  });

  test("dataAttributeAwareExtractor - basic usage", () => {
    expect(dataAttributeAwareExtractor(`<div class="c-1 c-2">`)).toEqual(["div", "class", "c-1", "c-2"]);
  });

  test("dataAttributeAwareExtractor - data attribute without a value", () => {
    expect(dataAttributeAwareExtractor("<div data-main>")).toEqual([
      "div",
      "data-main",
      "data-main",
      "[data-main]",
      "data-main",
      "[data-main]",
    ]);
  });

  test("dataAttributeAwareExtractor - data attribute with a value", () => {
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

  test("dataAttributeAwareExtractor - data attribute with a single-quoted value", () => {
    expect(dataAttributeAwareExtractor("<div data-main='center'>")).toEqual([
      "div",
      "data-main",
      "center",
      "data-main='center'",
      "[data-main='center']",
      "data-main",
      "[data-main]",
    ]);
  });

  test("dataAttributeAwareExtractor - trailing colon is not part of a token", () => {
    expect(dataAttributeAwareExtractor("hover:bg red:")).toEqual(["hover:bg", "red"]);
  });

  test("dataAttributeAwareExtractor - no content", () => {
    expect(dataAttributeAwareExtractor("")).toEqual([]);
  });

  test("content - globs scanned for used selectors", () => {
    expect(content).toEqual([
      "web/**/*.{ts,tsx,jsx,js,html,hbs}",
      "public/**/*.html",
      "node_modules/@bgord/ui/**/*.{ts,tsx,jsx,js}",
    ]);
  });

  test("cli - purges the file in place", async () => {
    const path = join(await mkdtemp(join(tmpdir(), "css-purge-")), "main.css");
    await Bun.write(path, "@layer reset{a{color:red}}.unused{color:blue}");

    await Bun.spawn(["bun", "src/css-purge.ts", path], { stderr: "ignore" }).exited;

    expect(await Bun.file(path).text()).toEqual("@layer reset{a{color:red}}");
  });

  test("cli - without a path", async () => {
    const cli = Bun.spawn(["bun", "src/css-purge.ts"], { stderr: "pipe" });
    const stderr = await new Response(cli.stderr).text();

    expect(await cli.exited).toEqual(1);
    expect(stderr).toEqual("Usage: bgord-css-purge <css-file>\n");
  });
});

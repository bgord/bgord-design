import { describe, expect, jest, spyOn, test } from "bun:test";
import postcss from "postcss";
import { content, dataAttributeAwareExtractor, keepResetLayer, main } from "../src/css-purge";

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

  test("main - purges the file at the given path", async () => {
    // @ts-expect-error
    using bunFile = spyOn(Bun, "file").mockImplementation(() => ({
      text: async () => "@layer reset{a{color:red}}.unused{color:blue}",
    }));
    using bunWrite = spyOn(Bun, "write").mockImplementation(jest.fn());

    await main(["bun", "css-purge", "public/main.min.css"], true);

    expect(bunFile).toHaveBeenCalledWith("public/main.min.css");
    expect(bunWrite).toHaveBeenCalledWith("public/main.min.css", "@layer reset{a{color:red}}");
  });

  test("main - without a path", async () => {
    using stderrWrite = spyOn(process.stderr, "write").mockImplementation(jest.fn());
    // @ts-expect-error
    using processExit = spyOn(process, "exit").mockImplementation(jest.fn());
    using bunWrite = spyOn(Bun, "write").mockImplementation(jest.fn());

    await main(["bun", "css-purge"], true);

    expect(stderrWrite).toHaveBeenCalledWith("Usage: bgord-css-purge <css-file>\n");
    expect(processExit).toHaveBeenCalledWith(1);
    expect(bunWrite).not.toHaveBeenCalled();
  });

  test("main - does nothing when not the entrypoint", async () => {
    using stderrWrite = spyOn(process.stderr, "write").mockImplementation(jest.fn());
    using bunFile = spyOn(Bun, "file");
    using bunWrite = spyOn(Bun, "write").mockImplementation(jest.fn());

    await main(["bun", "css-purge", "public/main.min.css"], false);

    expect(stderrWrite).not.toHaveBeenCalled();
    expect(bunFile).not.toHaveBeenCalled();
    expect(bunWrite).not.toHaveBeenCalled();
  });
});

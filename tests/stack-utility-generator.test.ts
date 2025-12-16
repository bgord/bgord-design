import { describe, expect, test } from "bun:test";
import { StackUtilityGenerator } from "../src/utilities";

describe("StackUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new StackUtilityGenerator();

    const css = generator.css();

    expect(css).toContain("[data-stack='x'] { display: flex; flex-wrap: wrap; }");
    expect(css).toContain("[data-stack='y'] { display: flex; flex-wrap: wrap; flex-direction: column; }");

    const ts = generator.toTypeScript();

    expect(ts).toContain('"x"');
    expect(ts).toContain('"y"');
    expect(ts).toMatch(/^"data-stack"\?:/);
  });
});

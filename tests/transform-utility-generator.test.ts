import { describe, expect, test } from "bun:test";
import { TransformUtilityGenerator } from "../src/utilities";

describe("TransformUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new TransformUtilityGenerator();

    const css = generator.css();
    expect(css).toContain("[data-transform~='uppercase'] {\n  text-transform: uppercase;\n}\n");
    expect(css).toContain(
      "[data-transform~='truncate'] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n",
    );
    expect(css).toContain(
      "[data-transform~='line-clamp'] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: var(--lines, 2); overflow: hidden;\n}\n",
    );
    expect(css).toContain("[data-transform~='center'] {\n  text-align: center;\n}\n");
    expect(css).toContain(
      "[data-transform~='upper-first']:first-letter {\n  text-transform: uppercase;\n}\n",
    );
    expect(css).toContain("[data-transform~='nowrap'] {\n  white-space: nowrap;\n}\n");
    expect(css).toContain(`[data-transform~='font-variant-numeric'] {\n  font-variant-numeric;\n}\n`);

    const ts = generator.toTypeScript();
    expect(ts).toEqualIgnoringWhitespace(
      `"data-transform"?: "uppercase" | "lowercase" | "capitalize" | "upper-first" | "truncate" | "center" | "nowrap" | "none" | "line-clamp" | "font-variant-numeric";`,
    );
  });
});

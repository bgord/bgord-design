import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { ShadowsGenerator } from "../src/generators/shadows-generator";

describe("ShadowsGenerator", () => {
  test("should generate shadows CSS", () => {
    // @ts-expect-error
    const config = {
      Shadows: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      Breakpoints: {},
    } as GeneratorConfigType;

    const generator = new ShadowsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
      *[data-shadow='sm'] {
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      }
      *[data-shadow='md'] {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    `);
  });
});

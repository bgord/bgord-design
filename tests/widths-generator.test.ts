import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { WidthsGenerator } from "../src/generators/widths-generator";

describe("WidthsGenerator", () => {
  test("should generate widths CSS", () => {
    // @ts-expect-error
    const config = {
      Widths: {
        xs: "100px",
        sm: "200px",
      },
      Breakpoints: {
        md: 768,
      },
    } as GeneratorConfigType;

    const generator = new WidthsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
      *[data-width='xs'] {
        width: 100px;
      }
      *[data-width='sm'] {
        width: 200px;
      }
      @media (max-width: 768px) {
        *[data-md-width='xs'] {
          width: 100px;
        }
        *[data-md-width='sm'] {
          width: 200px;
        }
      }
    `);
  });
});

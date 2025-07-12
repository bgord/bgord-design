import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { MaxWidthsGenerator } from "../src/generators/max-widths-generator";

describe("MaxWidthsGenerator", () => {
  test("should generate max-widths CSS", () => {
    // @ts-expect-error
    const config = { MaxWidths: { s: "100px", m: "200px" }, Breakpoints: { sm: 640 } } as GeneratorConfigType;

    const generator = new MaxWidthsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(
      `
        *[data-max-width='s'] {
          max-width: 100px;
        }

        *[data-max-width='m'] {
          max-width: 200px;
        }

        @media (max-width: 640px) {
          *[data-sm-max-width='s'] {
            max-width: 100px;
          }

          *[data-sm-max-width='m'] {
            max-width: 200px;
          }
        }`,
    );
  });
});

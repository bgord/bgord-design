import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { FlexGrowsGenerator } from "../src/generators/flex-grows-generator";

describe("FlexGrowsGenerator", () => {
  test("should generate flex grows CSS", () => {
    // @ts-expect-error
    const config = { FlexGrows: { "0": 0, "1": 1 }, Breakpoints: { sm: 640 } } as GeneratorConfigType;

    const generator = new FlexGrowsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(
      `
        *[data-grow='0'] {
          flex-grow: 0;
        }

        *[data-grow='1'] {
          flex-grow: 1;
        }

        @media (max-width: 640px) {
          *[data-sm-grow='0'] {
            flex-grow: 0;
          }

          *[data-sm-grow='1'] {
            flex-grow: 1;
          }
        }`,
    );
  });
});

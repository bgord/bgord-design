import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { FontWeightGenerator } from "../src/generators/font-weight-generator";

describe("FontWeightGenerator", () => {
  test("should generate font-weight CSS", () => {
    // @ts-expect-error
    const config = { FontWeights: { light: 300, normal: 400, bold: 700 } } as GeneratorConfigType;

    const generator = new FontWeightGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(
      `
        *[data-fw='light'] {
          font-weight: 300;
        }

        *[data-fw='normal'] {
          font-weight: 400;
        }

        *[data-fw='bold'] {
          font-weight: 700;
        }`,
    );
  });
});

import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { LetterSpacingsGenerator } from "../src/generators/letter-spacings-generator";

describe("LetterSpacingsGenerator", () => {
  test("should generate letter-spacing CSS", () => {
    // @ts-expect-error
    const config = { LetterSpacings: { s: 0.5, m: 1 } } as GeneratorConfigType;

    const generator = new LetterSpacingsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(
      `
        *[data-ls='s'] {
          letter-spacing: 0.5px;
        }

        *[data-ls='m'] {
          letter-spacing: 1px;
        }`,
    );
  });
});

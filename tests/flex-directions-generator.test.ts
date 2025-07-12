import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { FlexDirectionsGenerator } from "../src/generators/flex-directions-generator";

describe("FlexDirectionsGenerator", () => {
  test("should generate flex directions CSS", () => {
    // @ts-expect-error
    const config = {
      FlexDirections: { row: "row", col: "column" },
      Breakpoints: { sm: 640 },
    } as GeneratorConfigType;

    const generator = new FlexDirectionsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(
      `
        *[data-direction='row'] {
          flex-direction: row;
        }

        *[data-direction='col'] {
          flex-direction: column;
        }

        @media (max-width: 640px) {
          *[data-sm-direction='row'] {
            flex-direction: row;
          }

          *[data-sm-direction='col'] {
            flex-direction: column;
          }
        }`,
    );
  });
});

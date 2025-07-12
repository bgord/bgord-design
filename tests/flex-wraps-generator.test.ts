import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { FlexWrapGenerator } from "../src/generators/flex-wraps-generator";

describe("FlexWrapGenerator", () => {
  test("should generate flex wraps CSS", () => {
    // @ts-expect-error
    const config = {
      FlexWraps: { wrap: "wrap", nowrap: "nowrap" },
      Breakpoints: { sm: 640 },
    } as GeneratorConfigType;

    const generator = new FlexWrapGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(
      `
        *[data-wrap='wrap'] {
          flex-wrap: wrap;
        }

        *[data-wrap='nowrap'] {
          flex-wrap: nowrap;
        }

        @media (max-width: 640px) {
          *[data-sm-wrap='wrap'] {
            flex-wrap: wrap;
          }

          *[data-sm-wrap='nowrap'] {
            flex-wrap: nowrap;
          }
        }`,
    );
  });
});

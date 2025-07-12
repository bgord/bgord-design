import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { OverflowsGenerator } from "../src/generators/overflows-generator";

describe("OverflowsGenerator", () => {
  test("should generate overflows CSS", () => {
    // @ts-expect-error
    const config = {
      Overflows: {
        auto: "auto",
        hidden: "hidden",
        clip: "clip",
        visible: "visible",
        scroll: "scroll",
      },
      Breakpoints: {},
    } as GeneratorConfigType;

    const generator = new OverflowsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
      *[data-overflow='auto'] {
        overflow: auto;
      }
      *[data-overflow='hidden'] {
        overflow: hidden;
      }
      *[data-overflow='clip'] {
        overflow: clip;
      }
      *[data-overflow='visible'] {
        overflow: visible;
      }
      *[data-overflow='scroll'] {
        overflow: scroll;
      }
    `);
  });
});

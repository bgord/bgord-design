import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { ZIndexGenerator } from "../src/generators/z-index-generator";

describe("ZIndexGenerator", () => {
  test("should generate z-index CSS", () => {
    // @ts-expect-error
    const config = {
      ZIndexes: {
        0: "0",
        10: "10",
        20: "20",
      },
      Breakpoints: {},
    } as GeneratorConfigType;

    const generator = new ZIndexGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
      *[data-z='0'] {
        z-index: 0;
      }
      *[data-z='10'] {
        z-index: 10;
      }
      *[data-z='20'] {
        z-index: 20;
      }
    `);
  });
});

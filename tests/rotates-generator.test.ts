import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { RotatesGenerator } from "../src/generators/rotates-generator";

describe("RotatesGenerator", () => {
  test("should generate rotates CSS", () => {
    // @ts-expect-error
    const config = {
      Rotates: {
        0: "0",
        45: "45",
        90: "90",
        180: "180",
      },
      Breakpoints: {
        sm: 640,
        md: 768,
      },
    } as GeneratorConfigType;

    const generator = new RotatesGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
      *[data-rotate='0'] {
        transform: rotate(0deg);
      }
      *[data-rotate='45'] {
        transform: rotate(45deg);
      }
      *[data-rotate='90'] {
        transform: rotate(90deg);
      }
      *[data-rotate='180'] {
        transform: rotate(180deg);
      }
      @media (max-width: 640px) {
        *[data-sm-rotate='0'] {
          transform: rotate(0deg);
        }
        *[data-sm-rotate='45'] {
          transform: rotate(45deg);
        }
        *[data-sm-rotate='90'] {
          transform: rotate(90deg);
        }
        *[data-sm-rotate='180'] {
          transform: rotate(180deg);
        }
      }
      @media (max-width: 768px) {
        *[data-md-rotate='0'] {
          transform: rotate(0deg);
        }
        *[data-md-rotate='45'] {
          transform: rotate(45deg);
        }
        *[data-md-rotate='90'] {
          transform: rotate(90deg);
        }
        *[data-md-rotate='180'] {
          transform: rotate(180deg);
        }
      }
    `);
  });
});

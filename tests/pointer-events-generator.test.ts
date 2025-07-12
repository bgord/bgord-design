import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { PointerEventsGenerator } from "../src/generators/pointer-events-generator";

describe("PointerEventsGenerator", () => {
  test("should generate pointer events CSS", () => {
    // @ts-expect-error
    const config = {
      PointerEvents: {
        none: "none",
        auto: "auto",
      },
      Breakpoints: {
        sm: 640,
        md: 768,
      },
    } as GeneratorConfigType;

    const generator = new PointerEventsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
      *[data-pointer-events='none'] {
        pointer-events: none;
      }
      *[data-pointer-events='auto'] {
        pointer-events: auto;
      }
      @media (max-width: 640px) {
        *[data-sm-pointer-events='none'] {
          pointer-events: none;
        }
        *[data-sm-pointer-events='auto'] {
          pointer-events: auto;
        }
      }
      @media (max-width: 768px) {
        *[data-md-pointer-events='none'] {
          pointer-events: none;
        }
        *[data-md-pointer-events='auto'] {
          pointer-events: auto;
        }
      }
    `);
  });
});

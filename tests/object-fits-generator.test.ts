import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { ObjectFitsGenerator } from "../src/generators/object-fits-generator";

describe("ObjectFitsGenerator", () => {
  test("should generate object fits CSS", () => {
    // @ts-expect-error
    const config = {
      ObjectFits: {
        fill: "fill",
        contain: "contain",
        cover: "cover",
        "scale-down": "scale-down",
        none: "none",
      },
      Breakpoints: {
        sm: 640,
        md: 768,
      },
    } as GeneratorConfigType;

    const generator = new ObjectFitsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
      *[data-object-fit='fill'] {
        object-fit: fill;
      }
      *[data-object-fit='contain'] {
        object-fit: contain;
      }
      *[data-object-fit='cover'] {
        object-fit: cover;
      }
      *[data-object-fit='scale-down'] {
        object-fit: scale-down;
      }
      *[data-object-fit='none'] {
        object-fit: none;
      }
      @media (max-width: 640px) {
        *[data-sm-object-fit='fill'] {
          object-fit: fill;
        }
        *[data-sm-object-fit='contain'] {
          object-fit: contain;
        }
        *[data-sm-object-fit='cover'] {
          object-fit: cover;
        }
        *[data-sm-object-fit='scale-down'] {
          object-fit: scale-down;
        }
        *[data-sm-object-fit='none'] {
          object-fit: none;
        }
      }
      @media (max-width: 768px) {
        *[data-md-object-fit='fill'] {
          object-fit: fill;
        }
        *[data-md-object-fit='contain'] {
          object-fit: contain;
        }
        *[data-md-object-fit='cover'] {
          object-fit: cover;
        }
        *[data-md-object-fit='scale-down'] {
          object-fit: scale-down;
        }
        *[data-md-object-fit='none'] {
          object-fit: none;
        }
      }
    `);
  });
});

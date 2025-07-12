import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { ObjectPositionsGenerator } from "../src/generators/object-positions-generator";

describe("ObjectPositionsGenerator", () => {
  test("should generate object positions CSS", () => {
    // @ts-expect-error
    const config = {
      ObjectPositions: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      Breakpoints: {
        sm: 640,
        md: 768,
      },
    } as GeneratorConfigType;

    const generator = new ObjectPositionsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
      *[data-object-position='bottom'] {
        object-position: bottom;
      }
      *[data-object-position='center'] {
        object-position: center;
      }
      *[data-object-position='left'] {
        object-position: left;
      }
      *[data-object-position='left-bottom'] {
        object-position: left bottom;
      }
      *[data-object-position='left-top'] {
        object-position: left top;
      }
      *[data-object-position='right'] {
        object-position: right;
      }
      *[data-object-position='right-bottom'] {
        object-position: right bottom;
      }
      *[data-object-position='right-top'] {
        object-position: right top;
      }
      *[data-object-position='top'] {
        object-position: top;
      }
      @media (max-width: 640px) {
        *[data-sm-object-position='bottom'] {
          object-position: bottom;
        }
        *[data-sm-object-position='center'] {
          object-position: center;
        }
        *[data-sm-object-position='left'] {
          object-position: left;
        }
        *[data-sm-object-position='left-bottom'] {
          object-position: left bottom;
        }
        *[data-sm-object-position='left-top'] {
          object-position: left top;
        }
        *[data-sm-object-position='right'] {
          object-position: right;
        }
        *[data-sm-object-position='right-bottom'] {
          object-position: right bottom;
        }
        *[data-sm-object-position='right-top'] {
          object-position: right top;
        }
        *[data-sm-object-position='top'] {
          object-position: top;
        }
      }
      @media (max-width: 768px) {
        *[data-md-object-position='bottom'] {
          object-position: bottom;
        }
        *[data-md-object-position='center'] {
          object-position: center;
        }
        *[data-md-object-position='left'] {
          object-position: left;
        }
        *[data-md-object-position='left-bottom'] {
          object-position: left bottom;
        }
        *[data-md-object-position='left-top'] {
          object-position: left top;
        }
        *[data-md-object-position='right'] {
          object-position: right;
        }
        *[data-md-object-position='right-bottom'] {
          object-position: right bottom;
        }
        *[data-md-object-position='right-top'] {
          object-position: right top;
        }
        *[data-md-object-position='top'] {
          object-position: top;
        }
      }
    `);
  });
});

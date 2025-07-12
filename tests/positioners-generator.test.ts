import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { PositionersGenerator } from "../src/generators/positioners-generator";

describe("PositionersGenerator", () => {
  test("should generate positioners CSS", () => {
    // @ts-expect-error
    const config = {
      Spacing: {
        xs: "4px",
        sm: "8px",
      },
      Breakpoints: {
        md: 768,
      },
    } as GeneratorConfigType;

    const generator = new PositionersGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
      *[data-top='xs'] {
        top: 4px;
      }
      *[data-right='xs'] {
        right: 4px;
      }
      *[data-bottom='xs'] {
        bottom: 4px;
      }
      *[data-left='xs'] {
        left: 4px;
      }
      *[data-inset='xs'] {
        inset: 4px;
      }
      *[data-top='sm'] {
        top: 8px;
      }
      *[data-right='sm'] {
        right: 8px;
      }
      *[data-bottom='sm'] {
        bottom: 8px;
      }
      *[data-left='sm'] {
        left: 8px;
      }
      *[data-inset='sm'] {
        inset: 8px;
      }
      @media (max-width: 768px) {
        *[data-md-top='xs'] {
          top: 4px;
        }
        *[data-md-right='xs'] {
          right: 4px;
        }
        *[data-md-bottom='xs'] {
          bottom: 4px;
        }
        *[data-md-left='xs'] {
          left: 4px;
        }
        *[data-md-inset='xs'] {
          inset: 4px;
        }
        *[data-md-top='sm'] {
          top: 8px;
        }
        *[data-md-right='sm'] {
          right: 8px;
        }
        *[data-md-bottom='sm'] {
          bottom: 8px;
        }
        *[data-md-left='sm'] {
          left: 8px;
        }
        *[data-md-inset='sm'] {
          inset: 8px;
        }
      }
    `);
  });
});

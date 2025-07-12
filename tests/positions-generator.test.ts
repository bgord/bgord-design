import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { PositionsGenerator } from "../src/generators/positions-generator";

describe("PositionsGenerator", () => {
  test("should generate positions CSS", () => {
    // @ts-expect-error
    const config = {
      Positions: {
        static: "static",
        relative: "relative",
        absolute: "absolute",
        fixed: "fixed",
        sticky: "sticky",
      },
      Breakpoints: {
        sm: 640,
        md: 768,
      },
    } as GeneratorConfigType;

    const generator = new PositionsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
      *[data-position='static'] {
        position: static;
      }
      *[data-position='relative'] {
        position: relative;
      }
      *[data-position='absolute'] {
        position: absolute;
      }
      *[data-position='fixed'] {
        position: fixed;
      }
      *[data-position='sticky'] {
        position: sticky;
      }
      @media (max-width: 640px) {
        *[data-sm-position='static'] {
          position: static;
        }
        *[data-sm-position='relative'] {
          position: relative;
        }
        *[data-sm-position='absolute'] {
          position: absolute;
        }
        *[data-sm-position='fixed'] {
          position: fixed;
        }
        *[data-sm-position='sticky'] {
          position: sticky;
        }
      }
      @media (max-width: 768px) {
        *[data-md-position='static'] {
          position: static;
        }
        *[data-md-position='relative'] {
          position: relative;
        }
        *[data-md-position='absolute'] {
          position: absolute;
        }
        *[data-md-position='fixed'] {
          position: fixed;
        }
        *[data-md-position='sticky'] {
          position: sticky;
        }
      }
    `);
  });
});

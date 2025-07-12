import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { Margins } from "../src/generators/margins-generator";

describe("MarginsGenerator", () => {
  test("should generate margins CSS", () => {
    // @ts-expect-error
    const config = { Spacing: { s: "4px", m: "8px" }, Breakpoints: { sm: 640 } } as GeneratorConfigType;

    const generator = new Margins(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(
      `
        *[data-m='s'] {
          margin: 4px;
        }

        *[data-m='m'] {
          margin: 8px;
        }

        *[data-mx='s'] {
          margin-left: 4px;
          margin-right: 4px;
        }

        *[data-mx='m'] {
          margin-left: 8px;
          margin-right: 8px;
        }

        *[data-my='s'] {
          margin-top: 4px;
          margin-bottom: 4px;
        }

        *[data-my='m'] {
          margin-top: 8px;
          margin-bottom: 8px;
        }

        *[data-mt='s'] {
          margin-top: 4px;
        }

        *[data-mt='m'] {
          margin-top: 8px;
        }

        *[data-mr='s'] {
          margin-right: 4px;
        }

        *[data-mr='m'] {
          margin-right: 8px;
        }

        *[data-mb='s'] {
          margin-bottom: 4px;
        }

        *[data-mb='m'] {
          margin-bottom: 8px;
        }

        *[data-ml='s'] {
          margin-left: 4px;
        }

        *[data-ml='m'] {
          margin-left: 8px;
        }

        @media (max-width: 640px) {
          *[data-sm-m='s'] {
            margin: 4px;
          }

          *[data-sm-m='m'] {
            margin: 8px;
          }

          *[data-sm-mx='s'] {
            margin-left: 4px;
            margin-right: 4px;
          }

          *[data-sm-mx='m'] {
            margin-left: 8px;
            margin-right: 8px;
          }

          *[data-sm-my='s'] {
            margin-top: 4px;
            margin-bottom: 4px;
          }

          *[data-sm-my='m'] {
            margin-top: 8px;
            margin-bottom: 8px;
          }

          *[data-sm-mt='s'] {
            margin-top: 4px;
          }

          *[data-sm-mt='m'] {
            margin-top: 8px;
          }

          *[data-sm-mr='s'] {
            margin-right: 4px;
          }

          *[data-sm-mr='m'] {
            margin-right: 8px;
          }

          *[data-sm-mb='s'] {
            margin-bottom: 4px;
          }

          *[data-sm-mb='m'] {
            margin-bottom: 8px;
          }

          *[data-sm-ml='s'] {
            margin-left: 4px;
          }

          *[data-sm-ml='m'] {
            margin-left: 8px;
          }
        }`,
    );
  });
});

import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { Paddings } from "../src/generators/paddings-generator";

describe("PaddingsGenerator", () => {
  test("should generate paddings CSS", () => {
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

    const generator = new Paddings(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
      *[data-p='xs'] {
        padding: 4px;
      }
      *[data-p='sm'] {
        padding: 8px;
      }
      *[data-px='xs'] {
        padding-left: 4px;
        padding-right: 4px;
      }
      *[data-px='sm'] {
        padding-left: 8px;
        padding-right: 8px;
      }
      *[data-py='xs'] {
        padding-top: 4px;
        padding-bottom: 4px;
      }
      *[data-py='sm'] {
        padding-top: 8px;
        padding-bottom: 8px;
      }
      *[data-pt='xs'] {
        padding-top: 4px;
      }
      *[data-pt='sm'] {
        padding-top: 8px;
      }
      *[data-pr='xs'] {
        padding-right: 4px;
      }
      *[data-pr='sm'] {
        padding-right: 8px;
      }
      *[data-pb='xs'] {
        padding-bottom: 4px;
      }
      *[data-pb='sm'] {
        padding-bottom: 8px;
      }
      *[data-pl='xs'] {
        padding-left: 4px;
      }
      *[data-pl='sm'] {
        padding-left: 8px;
      }
      @media (max-width: 768px) {
        *[data-md-p='xs'] {
          padding: 4px;
        }
        *[data-md-p='sm'] {
          padding: 8px;
        }
        *[data-md-px='xs'] {
          padding-left: 4px;
          padding-right: 4px;
        }
        *[data-md-px='sm'] {
          padding-left: 8px;
          padding-right: 8px;
        }
        *[data-md-py='xs'] {
          padding-top: 4px;
          padding-bottom: 4px;
        }
        *[data-md-py='sm'] {
          padding-top: 8px;
          padding-bottom: 8px;
        }
        *[data-md-pt='xs'] {
          padding-top: 4px;
        }
        *[data-md-pt='sm'] {
          padding-top: 8px;
        }
        *[data-md-pr='xs'] {
          padding-right: 4px;
        }
        *[data-md-pr='sm'] {
          padding-right: 8px;
        }
        *[data-md-pb='xs'] {
          padding-bottom: 4px;
        }
        *[data-md-pb='sm'] {
          padding-bottom: 8px;
        }
        *[data-md-pl='xs'] {
          padding-left: 4px;
        }
        *[data-md-pl='sm'] {
          padding-left: 8px;
        }
      }
    `);
  });
});

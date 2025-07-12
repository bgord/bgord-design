import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { TransformsGenerator } from "../src/generators/transforms-generator";

describe("TransformsGenerator", () => {
  test("should generate transforms CSS", () => {
    // @ts-expect-error
    const config = {
      Transforms: {
        uppercase: "uppercase",
        lowercase: "lowercase",
        capitalize: "capitalize",
        truncate: "truncate",
        "line-clamp": "line-clamp",
        center: "center",
        "upper-first": "upper-first",
        nowrap: "nowrap",
      },
      Breakpoints: {},
    } as GeneratorConfigType;

    const generator = new TransformsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
      *[data-transform~='uppercase'] {
        text-transform: uppercase;
      }
      *[data-transform~='lowercase'] {
        text-transform: lowercase;
      }
      *[data-transform~='capitalize'] {
        text-transform: capitalize;
      }
      *[data-transform~='truncate'] {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      *[data-transform~='line-clamp'] {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: var(--lines, 2); overflow: hidden;
      }
      *[data-transform~='center'] {
        text-align: center;
      }
      *[data-transform~='upper-first']:first-letter {
        text-transform: uppercase;
      }
      *[data-transform~='nowrap'] {
        white-space: nowrap;
      }
    `);
  });
});

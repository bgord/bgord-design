import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { BackdropsGenerator } from "../src/generators/backdrops-generator";

describe("BackdropsGenerator", () => {
  test("should generate backdrops CSS", () => {
    // @ts-expect-error
    const config = { Backdrops: { primary: "#000", secondary: "#fff" } } as GeneratorConfigType;

    const generator = new BackdropsGenerator(config);
    const css = generator.generateCss();

    expect(css).toEqualIgnoringWhitespace(/* CSS */ `
        *[data-backdrop='primary']::backdrop {
          background: #000;
        }

        *[data-backdrop='secondary']::backdrop {
          background: #fff;
        }
    `);
  });
});

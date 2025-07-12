import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { LineHeightsGenerator } from "../src/generators/line-height-generator";

describe("LineHeightsGenerator", () => {
  test("should generate line-height CSS", () => {
    const config = {
      LineHeights: {
        s: 20,
        m: 24,
      },
    } as GeneratorConfigType;

    const generator = new LineHeightsGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-lh='s'] {
  line-height: 20px;
}
*[data-lh='m'] {
  line-height: 24px;
}
`,
    );
  });
});

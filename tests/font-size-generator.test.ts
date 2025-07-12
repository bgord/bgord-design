import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { FontSizeGenerator } from "../src/generators/font-size-generator";

describe("FontSizeGenerator", () => {
  test("should generate font-size CSS", () => {
    const config = {
      FontSizes: {
        s: 12,
        m: 16,
      },
      Breakpoints: {
        sm: 640,
      },
    } as GeneratorConfigType;

    const generator = new FontSizeGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-fs='s'] {
  font-size: 12px;
}
*[data-fs='m'] {
  font-size: 16px;
}
@media (max-width: 640px) {
  *[data-sm-fs='s'] {
    font-size: 12px;
  }
  *[data-sm-fs='m'] {
    font-size: 16px;
  }
}
`,
    );
  });
});

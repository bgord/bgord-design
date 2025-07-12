import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { GapGenerator } from "../src/generators/gap-generator";

describe("GapGenerator", () => {
  test("should generate gap CSS", () => {
    const config = {
      Spacing: {
        s: "4px",
        m: "8px",
      },
      Breakpoints: {
        sm: 640,
      },
    } as GeneratorConfigType;

    const generator = new GapGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-gap='s'] {
  gap: 4px;
}
*[data-gap='m'] {
  gap: 8px;
}
@media (max-width: 640px) {
  *[data-sm-gap='s'] {
    gap: 4px;
  }
  *[data-sm-gap='m'] {
    gap: 8px;
  }
}
`,
    );
  });
});

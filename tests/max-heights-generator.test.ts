import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { MaxHeightsGenerator } from "../src/generators/max-heights-generator";

describe("MaxHeightsGenerator", () => {
  test("should generate max-heights CSS", () => {
    const config = {
      MaxHeights: {
        s: "100px",
        m: "200px",
      },
      Breakpoints: {
        sm: 640,
      },
    } as GeneratorConfigType;

    const generator = new MaxHeightsGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-max-height='s'] {
  max-height: 100px;
}
*[data-max-height='m'] {
  max-height: 200px;
}
@media (max-width: 640px) {
*[data-sm-max-height='s'] {
  max-height: 100px;
}
*[data-sm-max-height='m'] {
  max-height: 200px;
}
}
`,
    );
  });
});

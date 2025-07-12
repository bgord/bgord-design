import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { HeightsGenerator } from "../src/generators/heights-generator";

describe("HeightsGenerator", () => {
  test("should generate heights CSS", () => {
    const config = {
      Heights: {
        s: "100px",
        m: "200px",
      },
      Breakpoints: {
        sm: 640,
      },
    } as GeneratorConfigType;

    const generator = new HeightsGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-height='s'] {
  height: 100px;
}
*[data-height='m'] {
  height: 200px;
}
@media (max-width: 640px) {
  *[data-sm-height='s'] {
    height: 100px;
  }
  *[data-sm-height='m'] {
    height: 200px;
  }
}
`,
    );
  });
});

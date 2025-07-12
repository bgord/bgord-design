import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { BorderRadiusesGenerator } from "../src/generators/border-radiuses-generator";

describe("BorderRadiusesGenerator", () => {
  test("should generate border radiuses CSS", () => {
    const config = {
      BorderRadiuses: {
        s: "4px",
        m: "8px",
        l: "16px",
        full: "9999px",
      },
    } as GeneratorConfigType;

    const generator = new BorderRadiusesGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-br='s'] {
  border-radius: 4px;
}
*[data-br='m'] {
  border-radius: 8px;
}
*[data-br='l'] {
  border-radius: 16px;
}
*[data-br='full'] {
  border-radius: 9999px;
}
`,
    );
  });
});

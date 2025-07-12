import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { FlexShrinksGenerator } from "../src/generators/flex-shrinks-generator";

describe("FlexShrinksGenerator", () => {
  test("should generate flex shrinks CSS", () => {
    const config = {
      FlexShrinks: {
        "0": 0,
        "1": 1,
      },
      Breakpoints: {
        sm: 640,
      },
    } as GeneratorConfigType;

    const generator = new FlexShrinksGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-shrink='0'] {
  flex-shrink: 0;
}
*[data-shrink='1'] {
  flex-shrink: 1;
}
@media (max-width: 640px) {
  *[data-sm-shrink='0'] {
    flex-shrink: 0;
  }
  *[data-sm-shrink='1'] {
    flex-shrink: 1;
  }
}
`,
    );
  });
});

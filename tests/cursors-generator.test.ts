import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { CursorsGenerator } from "../src/generators/cursors-generator";

describe("CursorsGenerator", () => {
  test("should generate cursors CSS", () => {
    const config = {
      Cursors: {
        pointer: "pointer",
        default: "default",
      },
      Breakpoints: {
        sm: 640,
      },
    } as GeneratorConfigType;

    const generator = new CursorsGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-cursor='pointer'] {
  cursor: pointer;
}
*[data-cursor='default'] {
  cursor: default;
}
@media (max-width: 640px) {
  *[data-sm-cursor='pointer'] {
    cursor: pointer;
  }
  *[data-sm-cursor='default'] {
    cursor: default;
  }
}
`,
    );
  });
});

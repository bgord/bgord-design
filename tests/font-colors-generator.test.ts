import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { FontColorsGenerator } from "../src/generators/font-colors-generator";

describe("FontColorsGenerator", () => {
  test("should generate font colors CSS", () => {
    const config = {
      Grayscale: { black: "#000", white: "#fff" },
      Greens: { green: "green" },
      Reds: { red: "red" },
      Oranges: { orange: "orange" },
    } as unknown as GeneratorConfigType;

    const generator = new FontColorsGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-color='black'] {
  color: #000;
}
*[data-color='white'] {
  color: #fff;
}
*[data-color='green'] {
  color: green;
}
*[data-color='red'] {
  color: red;
}
*[data-color='orange'] {
  color: orange;
}
`,
    );
  });
});

import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { BackgroundsGenerator } from "../src/generators/backgrounds-generator";

describe("BackgroundsGenerator", () => {
  test("should generate backgrounds CSS", () => {
    const config = {
      Grayscale: { black: "#000", white: "#fff" },
      Greens: { green: "green" },
      Reds: { red: "red" },
      Oranges: { orange: "orange" },
    } as unknown as GeneratorConfigType;

    const generator = new BackgroundsGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-bg='black'] {
  background-color: #000;
}
*[data-bg='white'] {
  background-color: #fff;
}
*[data-bg='green'] {
  background-color: green;
}
*[data-bg='red'] {
  background-color: red;
}
*[data-bg='orange'] {
  background-color: orange;
}
`,
    );
  });
});

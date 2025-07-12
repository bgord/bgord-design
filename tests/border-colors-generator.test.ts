import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { BorderColorsGenerator } from "../src/generators/border-colors-generator";

describe("BorderColorsGenerator", () => {
  test("should generate border colors CSS", () => {
    const config = {
      BorderColors: { primary: "gray", secondary: "black" },
      Greens: { green: "green" },
      Reds: { red: "red" },
      Oranges: { orange: "orange" },
    } as unknown as GeneratorConfigType;

    const generator = new BorderColorsGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-bc='primary'] {
  border-color: gray;
  border-style: solid;
}
*[data-bc='secondary'] {
  border-color: black;
  border-style: solid;
}
*[data-bc='green'] {
  border-color: green;
  border-style: solid;
}
*[data-bc='orange'] {
  border-color: orange;
  border-style: solid;
}
*[data-bc='red'] {
  border-color: red;
  border-style: solid;
}
*[data-bcx='primary'] {
  border-right-color: gray;
  border-left-color: gray;
 border-right-style: solid;
  border-left-style: solid;
}
*[data-bcx='secondary'] {
  border-right-color: black;
  border-left-color: black;
 border-right-style: solid;
  border-left-style: solid;
}
*[data-bcy='primary'] {
  border-top-color: gray;
  border-bottom-color: gray;
 border-top-style: solid;
  border-bottom-style: solid;
}
*[data-bcy='secondary'] {
  border-top-color: black;
  border-bottom-color: black;
 border-top-style: solid;
  border-bottom-style: solid;
}
*[data-bct='primary'] {
  border-top-color: gray;
  border-top-style: solid;
}
*[data-bct='secondary'] {
  border-top-color: black;
  border-top-style: solid;
}
*[data-bcr='primary'] {
  border-right-color: gray;
  border-right-style: solid;
}
*[data-bcr='secondary'] {
  border-right-color: black;
  border-right-style: solid;
}
*[data-bcb='primary'] {
  border-bottom-color: gray;
  border-bottom-style: solid;
}
*[data-bcb='secondary'] {
  border-bottom-color: black;
  border-bottom-style: solid;
}
*[data-bcl='primary'] {
  border-left-color: gray;
  border-left-style: solid;
}
*[data-bcl='secondary'] {
  border-left-color: black;
  border-left-style: solid;
}
`,
    );
  });
});

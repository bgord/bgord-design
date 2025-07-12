import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { DisplaysGenerator } from "../src/generators/displays-generator";

describe("DisplaysGenerator", () => {
  test("should generate displays CSS", () => {
    const config = {
      Displays: {
        none: "none",
        block: "block",
        flex: "flex",
      },
      Breakpoints: {
        sm: 640,
      },
    } as GeneratorConfigType;

    const generator = new DisplaysGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-display='none'] {
  display: none;
}
*[data-display='block'] {
  display: block;
}
*[data-display='flex'] {
  display: flex;
flex-wrap: wrap;
}
@media (max-width: 640px) {
*[data-sm-display='none'] {
  display: none;
}
*[data-sm-display='block'] {
  display: block;
}
*[data-sm-display='flex'] {
  display: flex;
flex-wrap: wrap;
}
}
`,
    );
  });
});

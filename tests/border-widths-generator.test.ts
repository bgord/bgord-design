import { describe, expect, test } from "bun:test";
import { GeneratorConfigType } from "../src/generator";
import { BorderWidthsGenerator } from "../src/generators/border-widths-generator";

describe("BorderWidthsGenerator", () => {
  test("should generate border widths CSS", () => {
    const config = {
      BorderWidths: {
        s: 1,
        m: 2,
      },
    } as GeneratorConfigType;

    const generator = new BorderWidthsGenerator(config);
    const css = generator.generateCss();

    expect(css).toBe(
      `*[data-bw='s'] {
  border-width: 1px;
}
*[data-bw='m'] {
  border-width: 2px;
}
*[data-bwx='s'] {
  border-left-width: 1px;
  border-right-width: 1px;
}
*[data-bwx='m'] {
  border-left-width: 2px;
  border-right-width: 2px;
}
*[data-bwy='s'] {
  border-top-width: 1px;
  border-bottom-width: 1px;
}
*[data-bwy='m'] {
  border-top-width: 2px;
  border-bottom-width: 2px;
}
*[data-bwt='s'] {
  border-top-width: 1px;
}
*[data-bwt='m'] {
  border-top-width: 2px;
}
*[data-bwr='s'] {
  border-right-width: 1px;
}
*[data-bwr='m'] {
  border-right-width: 2px;
}
*[data-bwb='s'] {
  border-bottom-width: 1px;
}
*[data-bwb='m'] {
  border-bottom-width: 2px;
}
*[data-bwl='s'] {
  border-left-width: 1px;
}
*[data-bwl='m'] {
  border-left-width: 2px;
}
`,
    );
  });
});

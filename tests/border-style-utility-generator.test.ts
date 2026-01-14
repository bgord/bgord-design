import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { BorderStyleUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("BorderStyleUtilityGenerator", () => {
  test("basic usage", () => {
    const BorderStyleTokenGenerator = new Tokens.BorderStyleTokenGenerator();
    const generator = new BorderStyleUtilityGenerator(breakpoints, BorderStyleTokenGenerator);

    expect(generator.name).toEqual("Border style utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-bs='none'] { border-style: var(--border-style-none); }
      [data-bs='solid'] { border-style: var(--border-style-solid); }
      [data-bs='dashed'] { border-style: var(--border-style-dashed); }
      [data-bs='dotted'] { border-style: var(--border-style-dotted); }
      [data-bs='double'] { border-style: var(--border-style-double); }

      [data-bst='none'] { border-top-style: var(--border-style-none); }
      [data-bst='solid'] { border-top-style: var(--border-style-solid); }
      [data-bst='dashed'] { border-top-style: var(--border-style-dashed); }
      [data-bst='dotted'] { border-top-style: var(--border-style-dotted); }
      [data-bst='double'] { border-top-style: var(--border-style-double); }

      [data-bsr='none'] { border-right-style: var(--border-style-none); }
      [data-bsr='solid'] { border-right-style: var(--border-style-solid); }
      [data-bsr='dashed'] { border-right-style: var(--border-style-dashed); }
      [data-bsr='dotted'] { border-right-style: var(--border-style-dotted); }
      [data-bsr='double'] { border-right-style: var(--border-style-double); }

      [data-bsb='none'] { border-bottom-style: var(--border-style-none); }
      [data-bsb='solid'] { border-bottom-style: var(--border-style-solid); }
      [data-bsb='dashed'] { border-bottom-style: var(--border-style-dashed); }
      [data-bsb='dotted'] { border-bottom-style: var(--border-style-dotted); }
      [data-bsb='double'] { border-bottom-style: var(--border-style-double); }

      [data-bsl='none'] { border-left-style: var(--border-style-none); }
      [data-bsl='solid'] { border-left-style: var(--border-style-solid); }
      [data-bsl='dashed'] { border-left-style: var(--border-style-dashed); }
      [data-bsl='dotted'] { border-left-style: var(--border-style-dotted); }
      [data-bsl='double'] { border-left-style: var(--border-style-double); }

      [data-bsx='none'] { border-left-style: var(--border-style-none); border-right-style: var(--border-style-none);  }
      [data-bsx='solid'] { border-left-style: var(--border-style-solid); border-right-style: var(--border-style-solid);  }
      [data-bsx='dashed'] { border-left-style: var(--border-style-dashed); border-right-style: var(--border-style-dashed);  }
      [data-bsx='dotted'] { border-left-style: var(--border-style-dotted); border-right-style: var(--border-style-dotted);  }
      [data-bsx='double'] { border-left-style: var(--border-style-double); border-right-style: var(--border-style-double);  }

      [data-bsy='none'] { border-top-style: var(--border-style-none); border-bottom-style: var(--border-style-none); }
      [data-bsy='solid'] { border-top-style: var(--border-style-solid); border-bottom-style: var(--border-style-solid); }
      [data-bsy='dashed'] { border-top-style: var(--border-style-dashed); border-bottom-style: var(--border-style-dashed); }
      [data-bsy='dotted'] { border-top-style: var(--border-style-dotted); border-bottom-style: var(--border-style-dotted); }
      [data-bsy='double'] { border-top-style: var(--border-style-double); border-bottom-style: var(--border-style-double); }

      @media (max-width: 768px) {
        [data-md-bs='none'] { border-style: var(--border-style-none); }
        [data-md-bs='solid'] { border-style: var(--border-style-solid); }
        [data-md-bs='dashed'] { border-style: var(--border-style-dashed); }
        [data-md-bs='dotted'] { border-style: var(--border-style-dotted); }
        [data-md-bs='double'] { border-style: var(--border-style-double); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-bs"?: "none" | "solid" | "dashed" | "dotted" | "double";
      "data-bst"?: "none" | "solid" | "dashed" | "dotted" | "double";
      "data-bsr"?: "none" | "solid" | "dashed" | "dotted" | "double";
      "data-bsb"?: "none" | "solid" | "dashed" | "dotted" | "double";
      "data-bsl"?: "none" | "solid" | "dashed" | "dotted" | "double";
      "data-bsx"?: "none" | "solid" | "dashed" | "dotted" | "double";
      "data-bsy"?: "none" | "solid" | "dashed" | "dotted" | "double";
      "data-md-bs"?: "none" | "solid" | "dashed" | "dotted" | "double";
   `);
  });

  test("with overrides", () => {
    const BorderStyleTokenGenerator = new Tokens.BorderStyleTokenGenerator({ "border-style-inset": "inset" });
    const generator = new BorderStyleUtilityGenerator(breakpoints, BorderStyleTokenGenerator);

    expect(generator.name).toEqual("Border style utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-bs='none'] { border-style: var(--border-style-none); }
      [data-bs='solid'] { border-style: var(--border-style-solid); }
      [data-bs='dashed'] { border-style: var(--border-style-dashed); }
      [data-bs='dotted'] { border-style: var(--border-style-dotted); }
      [data-bs='double'] { border-style: var(--border-style-double); }
      [data-bs='inset'] { border-style: var(--border-style-inset); }

      [data-bst='none'] { border-top-style: var(--border-style-none); }
      [data-bst='solid'] { border-top-style: var(--border-style-solid); }
      [data-bst='dashed'] { border-top-style: var(--border-style-dashed); }
      [data-bst='dotted'] { border-top-style: var(--border-style-dotted); }
      [data-bst='double'] { border-top-style: var(--border-style-double); }
      [data-bst='inset'] { border-top-style: var(--border-style-inset); }

      [data-bsr='none'] { border-right-style: var(--border-style-none); }
      [data-bsr='solid'] { border-right-style: var(--border-style-solid); }
      [data-bsr='dashed'] { border-right-style: var(--border-style-dashed); }
      [data-bsr='dotted'] { border-right-style: var(--border-style-dotted); }
      [data-bsr='double'] { border-right-style: var(--border-style-double); }
      [data-bsr='inset'] { border-right-style: var(--border-style-inset); }

      [data-bsb='none'] { border-bottom-style: var(--border-style-none); }
      [data-bsb='solid'] { border-bottom-style: var(--border-style-solid); }
      [data-bsb='dashed'] { border-bottom-style: var(--border-style-dashed); }
      [data-bsb='dotted'] { border-bottom-style: var(--border-style-dotted); }
      [data-bsb='double'] { border-bottom-style: var(--border-style-double); }
      [data-bsb='inset'] { border-bottom-style: var(--border-style-inset); }

      [data-bsl='none'] { border-left-style: var(--border-style-none); }
      [data-bsl='solid'] { border-left-style: var(--border-style-solid); }
      [data-bsl='dashed'] { border-left-style: var(--border-style-dashed); }
      [data-bsl='dotted'] { border-left-style: var(--border-style-dotted); }
      [data-bsl='double'] { border-left-style: var(--border-style-double); }
      [data-bsl='inset'] { border-left-style: var(--border-style-inset); }

      [data-bsx='none'] { border-left-style: var(--border-style-none); border-right-style: var(--border-style-none);  }
      [data-bsx='solid'] { border-left-style: var(--border-style-solid); border-right-style: var(--border-style-solid);  }
      [data-bsx='dashed'] { border-left-style: var(--border-style-dashed); border-right-style: var(--border-style-dashed);  }
      [data-bsx='dotted'] { border-left-style: var(--border-style-dotted); border-right-style: var(--border-style-dotted);  }
      [data-bsx='double'] { border-left-style: var(--border-style-double); border-right-style: var(--border-style-double);  }
      [data-bsx='inset'] { border-left-style: var(--border-style-inset); border-right-style: var(--border-style-inset);  }

      [data-bsy='none'] { border-top-style: var(--border-style-none); border-bottom-style: var(--border-style-none); }
      [data-bsy='solid'] { border-top-style: var(--border-style-solid); border-bottom-style: var(--border-style-solid); }
      [data-bsy='dashed'] { border-top-style: var(--border-style-dashed); border-bottom-style: var(--border-style-dashed); }
      [data-bsy='dotted'] { border-top-style: var(--border-style-dotted); border-bottom-style: var(--border-style-dotted); }
      [data-bsy='double'] { border-top-style: var(--border-style-double); border-bottom-style: var(--border-style-double); }
      [data-bsy='inset'] { border-top-style: var(--border-style-inset); border-bottom-style: var(--border-style-inset);  }

      @media (max-width: 768px) {
        [data-md-bs='none'] { border-style: var(--border-style-none); }
        [data-md-bs='solid'] { border-style: var(--border-style-solid); }
        [data-md-bs='dashed'] { border-style: var(--border-style-dashed); }
        [data-md-bs='dotted'] { border-style: var(--border-style-dotted); }
        [data-md-bs='double'] { border-style: var(--border-style-double); }
        [data-md-bs='inset'] { border-style: var(--border-style-inset); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-bs"?: "none" | "solid" | "dashed" | "dotted" | "double" | "inset";
      "data-bst"?: "none" | "solid" | "dashed" | "dotted" | "double" | "inset";
      "data-bsr"?: "none" | "solid" | "dashed" | "dotted" | "double" | "inset";
      "data-bsb"?: "none" | "solid" | "dashed" | "dotted" | "double" | "inset";
      "data-bsl"?: "none" | "solid" | "dashed" | "dotted" | "double" | "inset";
      "data-bsx"?: "none" | "solid" | "dashed" | "dotted" | "double" | "inset";
      "data-bsy"?: "none" | "solid" | "dashed" | "dotted" | "double" | "inset";
      "data-md-bs"?: "none" | "solid" | "dashed" | "dotted" | "double" | "inset";
   `);
  });
});

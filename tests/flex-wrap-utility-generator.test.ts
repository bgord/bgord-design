import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { FlexWrapUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("FlexWrapUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new FlexWrapUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Flex wrap utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-wrap='nowrap'] { flex-wrap: nowrap; }
      [data-wrap='wrap'] { flex-wrap: wrap; }
      [data-wrap='wrap-reverse'] { flex-wrap: wrap-reverse; }
      [data-wrap='unset'] { flex-wrap: unset; }

      @media (max-width: 768px) {
        [data-md-wrap='nowrap'] { flex-wrap: nowrap; }
        [data-md-wrap='wrap'] { flex-wrap: wrap; }
        [data-md-wrap='wrap-reverse'] { flex-wrap: wrap-reverse; }
        [data-md-wrap='unset'] { flex-wrap: unset; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-wrap"?: "nowrap" | "wrap" | "wrap-reverse" | "unset";
      "data-md-wrap"?: "nowrap" | "wrap" | "wrap-reverse" | "unset";
    `);
  });
});

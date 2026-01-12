import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { CursorUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("CursorUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new CursorUtilityGenerator(breakpoints);

    expect(generator.name).toEqual("Cursor utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-cursor='wait'] { cursor: wait; }
      [data-cursor='auto'] { cursor: auto; }
      [data-cursor='pointer'] { cursor: pointer; }
      [data-cursor='not-allowed'] { cursor: not-allowed; }

      @media (max-width: 768px) {
        [data-md-cursor='wait'] { cursor: wait; }
        [data-md-cursor='auto'] { cursor: auto; }
        [data-md-cursor='pointer'] { cursor: pointer; }
        [data-md-cursor='not-allowed'] { cursor: not-allowed; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-cursor"?: "wait" | "auto" | "pointer" | "not-allowed";
    `);
  });
});

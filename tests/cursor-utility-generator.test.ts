import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { StateRegistry } from "../src/state-registry";
import { CursorUtilityGenerator } from "../src/utilities";

const states = new StateRegistry({ hover: true, focus: true });
const breakpoints = new BreakpointRegistry({ md: "768" });

describe("CursorUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new CursorUtilityGenerator(breakpoints, states);

    expect(generator.name).toEqual("Cursor utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-cursor='wait'] { cursor: wait; }
      [data-cursor='auto'] { cursor: auto; }
      [data-cursor='pointer'] { cursor: pointer; }
      [data-cursor='not-allowed'] { cursor: not-allowed; }

      [data-hover-cursor='wait']:hover:not(:disabled) { cursor: wait; }
      [data-hover-cursor='auto']:hover:not(:disabled) { cursor: auto; }
      [data-hover-cursor='pointer']:hover:not(:disabled) { cursor: pointer; }
      [data-hover-cursor='not-allowed']:hover:not(:disabled) { cursor: not-allowed; }

      [data-focus-cursor='wait']:focus-visible { cursor: wait; }
      [data-focus-cursor='auto']:focus-visible { cursor: auto; }
      [data-focus-cursor='pointer']:focus-visible { cursor: pointer; }
      [data-focus-cursor='not-allowed']:focus-visible { cursor: not-allowed; }

      @media (max-width: 768px) {
        [data-md-cursor='wait'] { cursor: wait; }
        [data-md-cursor='auto'] { cursor: auto; }
        [data-md-cursor='pointer'] { cursor: pointer; }
        [data-md-cursor='not-allowed'] { cursor: not-allowed; }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-cursor"?: "wait" | "auto" | "pointer" | "not-allowed";
      "data-hover-cursor"?: "wait" | "auto" | "pointer" | "not-allowed";
      "data-focus-cursor"?: "wait" | "auto" | "pointer" | "not-allowed";
      "data-md-cursor"?: "wait" | "auto" | "pointer" | "not-allowed";
    `);
  });
});

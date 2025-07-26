import { describe, expect, test } from "bun:test";
import { CursorUtilityGenerator } from "../src/utilities";

describe("CursorUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new CursorUtilityGenerator();

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-cursor='wait'] { cursor: wait; }
      [data-cursor='auto'] { cursor: auto; }
      [data-cursor='pointer'] { cursor: pointer; }
      [data-cursor='not-allowed'] { cursor: not-allowed; }
    `);

    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-cursor"?: "wait" | "auto" | "pointer" | "not-allowed";
    `);
  });
});

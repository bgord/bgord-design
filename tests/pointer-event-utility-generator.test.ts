import { describe, expect, test } from "bun:test";
import { PointerEventUtilityGenerator } from "../src/utilities";

describe("PointerEventUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new PointerEventUtilityGenerator();

    expect(generator.name).toEqual("Pointer event utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-pointer-events='none'] { pointer-events: none; }
      [data-pointer-events='auto'] { pointer-events: auto; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-pointer-events"?: "none" | "auto";
    `);
  });
});

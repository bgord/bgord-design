import { describe, expect, test } from "bun:test";
import { StackUtilityGenerator } from "../src/utilities";

describe("StackUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new StackUtilityGenerator();

    expect(generator.name).toEqual("Stack utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-stack='x'] { display: flex; flex-wrap: wrap; }
      [data-stack='y'] { display: flex; flex-wrap: wrap; flex-direction: column; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-stack"?: "x" | "y";
   `);
  });
});

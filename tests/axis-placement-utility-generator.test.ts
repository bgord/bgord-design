import { describe, expect, test } from "bun:test";
import { AxisPlacementUtilityGenerator } from "../src/utilities";

describe("AxisPlacementUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new AxisPlacementUtilityGenerator();

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-main='start'] { justify-content: flex-start; }
      [data-cross='start'] { align-items: flex-start; }
      [data-main='end'] { justify-content: flex-end; }
      [data-cross='end'] { align-items: flex-end; }
      [data-main='around'] { justify-content: space-around; }
      [data-cross='around'] { align-items: space-around; }
      [data-main='evenly'] { justify-content: space-evenly; }
      [data-cross='evenly'] { align-items: space-evenly; }
      [data-main='between'] { justify-content: space-between; }
      [data-cross='between'] { align-items: space-between; }
      [data-main='center'] { justify-content: center; }
      [data-cross='center'] { align-items: center; }
      [data-main='baseline'] { justify-content: baseline; }
      [data-cross='baseline'] { align-items: baseline; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-main"?: "start" | "end" | "around" | "evenly" | "between" | "center" | "baseline"; "data-cross"?: "start" | "end" | "around" | "evenly" | "between" | "center" | "baseline";
    `);
  });
});

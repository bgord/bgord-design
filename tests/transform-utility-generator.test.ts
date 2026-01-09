import { describe, expect, test } from "bun:test";
import { TransformUtilityGenerator } from "../src/utilities";

describe("TransformUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new TransformUtilityGenerator();

    expect(generator.name).toEqual("Transform utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-transform~='uppercase'] { text-transform: uppercase; }
      [data-transform~='lowercase'] { text-transform: lowercase; }
      [data-transform~='capitalize'] { text-transform: capitalize; }
      [data-transform~='upper-first']:first-letter {  text-transform: uppercase; }
      [data-transform~='truncate'] {  overflow: hidden;  white-space: nowrap;  text-overflow: ellipsis; }
      [data-transform~='center'] {  text-align: center; }
      [data-transform~='nowrap'] {  white-space: nowrap; }
      [data-transform~='none'] { text-transform: none; }
      [data-transform~='line-clamp'] {  display: -webkit-box;  -webkit-box-orient: vertical;  -webkit-line-clamp: var(--lines, 2); overflow: hidden; }
      [data-transform~='font-variant-numeric'] {  font-variant-numeric: tabular-nums; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(
      `"data-transform"?: "uppercase" | "lowercase" | "capitalize" | "upper-first" | "truncate" | "center" | "nowrap" | "none" | "line-clamp" | "font-variant-numeric";`,
    );
  });
});

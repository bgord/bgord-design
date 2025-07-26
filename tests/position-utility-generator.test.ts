import { describe, expect, test } from "bun:test";
import { PositionUtilityGenerator } from "../src/utilities";

describe("PositionUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new PositionUtilityGenerator();

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-position='static'] { position: static; }
      [data-position='relative'] { position: relative; }
      [data-position='absolute'] { position: absolute; }
      [data-position='fixed'] { position: fixed; }
      [data-position='sticky'] { position: sticky; }
      [data-position='unset'] { position: unset; }
    `);

    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-position"?: "static" | "relative" | "absolute" | "fixed" | "sticky" | "unset";
    `);
  });
});

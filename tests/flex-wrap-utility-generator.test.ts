import { describe, expect, test } from "bun:test";
import { FlexWrapUtilityGenerator } from "../src/utilities";

describe("FlexWrapUtilityGenerator", () => {
  test("basic usage", () => {
    const generator = new FlexWrapUtilityGenerator();

    expect(generator.name).toEqual("Flex wrap utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-wrap='nowrap'] { flex-wrap: nowrap; }
      [data-wrap='wrap'] { flex-wrap: wrap; }
      [data-wrap='wrap-reverse'] { flex-wrap: wrap-reverse; }
      [data-wrap='unset'] { flex-wrap: unset; }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-wrap"?: "nowrap" | "wrap" | "wrap-reverse" | "unset";
    `);
  });
});

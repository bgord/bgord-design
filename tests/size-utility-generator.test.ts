import { describe, expect, test } from "bun:test";
import { SizeTokenGenerator } from "../src/tokens/size-token-generator";
import { SizeUtilityGenerator } from "../src/utilities/size-utility-generator";

describe("SizeUtilityGenerator", () => {
  test("basic usage", () => {
    const tokenGenerator = new SizeTokenGenerator();
    const generator = new SizeUtilityGenerator(tokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-size='xs'] { height: var(--size-xs); width: var(--size-xs); }
      [data-size='sm'] { height: var(--size-sm); width: var(--size-sm); }
      [data-size='md'] { height: var(--size-md); width: var(--size-md); }
      [data-size='lg'] { height: var(--size-lg); width: var(--size-lg); }
      [data-size='xl'] { height: var(--size-xl); width: var(--size-xl); }
      [data-size='2xl'] { height: var(--size-2xl); width: var(--size-2xl); }
    `);

    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-size"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    `);
  });
});

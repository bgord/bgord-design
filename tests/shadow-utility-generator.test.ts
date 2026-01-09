import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { ShadowUtilityGenerator } from "../src/utilities";

describe("ShadowUtilityGenerator", () => {
  test("basic usage", () => {
    const ShadowTokenGenerator = new Tokens.ShadowTokenGenerator();
    const generator = new ShadowUtilityGenerator(ShadowTokenGenerator);

    expect(generator.name).toEqual("Shadow utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-shadow='none'] { box-shadow: var(--shadow-none); }
      [data-shadow='xs'] { box-shadow: var(--shadow-xs); }
      [data-shadow='sm'] { box-shadow: var(--shadow-sm); }
      [data-shadow='md'] { box-shadow: var(--shadow-md); }
      [data-shadow='lg'] { box-shadow: var(--shadow-lg); }
      [data-shadow='xl'] { box-shadow: var(--shadow-xl); }
      [data-shadow='inner'] { box-shadow: var(--shadow-inner); }
      [data-shadow='unset'] { box-shadow: var(--shadow-unset); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-shadow"?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "inner" | "unset";
    `);
  });

  test("with overrides", () => {
    const ShadowTokenGenerator = new Tokens.ShadowTokenGenerator({ "shadow-huge": "10px 10px 10px black" });
    const generator = new ShadowUtilityGenerator(ShadowTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-shadow='none'] { box-shadow: var(--shadow-none); }
      [data-shadow='xs'] { box-shadow: var(--shadow-xs); }
      [data-shadow='sm'] { box-shadow: var(--shadow-sm); }
      [data-shadow='md'] { box-shadow: var(--shadow-md); }
      [data-shadow='lg'] { box-shadow: var(--shadow-lg); }
      [data-shadow='xl'] { box-shadow: var(--shadow-xl); }
      [data-shadow='inner'] { box-shadow: var(--shadow-inner); }
      [data-shadow='unset'] { box-shadow: var(--shadow-unset); }
      [data-shadow='huge'] { box-shadow: var(--shadow-huge); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-shadow"?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "inner" | "unset" | "huge";
    `);
  });
});

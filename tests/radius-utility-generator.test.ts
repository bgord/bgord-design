import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { RadiusUtilityGenerator } from "../src/utilities";

describe("RadiusUtilityGenerator", () => {
  test("basic usage", () => {
    const RadiusTokenGenerator = new Tokens.RadiusTokenGenerator();
    const generator = new RadiusUtilityGenerator(RadiusTokenGenerator);

    expect(generator.name).toEqual("Radius utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-br='none'] { border-radius: var(--radius-none); }
      [data-br='xs'] { border-radius: var(--radius-xs); }
      [data-br='sm'] { border-radius: var(--radius-sm); }
      [data-br='md'] { border-radius: var(--radius-md); }
      [data-br='lg'] { border-radius: var(--radius-lg); }
      [data-br='xl'] { border-radius: var(--radius-xl); }
      [data-br='pill'] { border-radius: var(--radius-pill); }
      [data-br='circle'] { border-radius: var(--radius-circle); }
      [data-br='unset'] { border-radius: var(--radius-unset); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-br"?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "pill" | "circle" | "unset";
    `);
  });

  test("with overrides", () => {
    const RadiusTokenGenerator = new Tokens.RadiusTokenGenerator({ "radius-egg": "50% 20%" });
    const generator = new RadiusUtilityGenerator(RadiusTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-br='none'] { border-radius: var(--radius-none); }
      [data-br='xs'] { border-radius: var(--radius-xs); }
      [data-br='sm'] { border-radius: var(--radius-sm); }
      [data-br='md'] { border-radius: var(--radius-md); }
      [data-br='lg'] { border-radius: var(--radius-lg); }
      [data-br='xl'] { border-radius: var(--radius-xl); }
      [data-br='pill'] { border-radius: var(--radius-pill); }
      [data-br='circle'] { border-radius: var(--radius-circle); }
      [data-br='unset'] { border-radius: var(--radius-unset); }
      [data-br='egg'] { border-radius: var(--radius-egg); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-br"?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "pill" | "circle" | "unset" | "egg";
    `);
  });
});

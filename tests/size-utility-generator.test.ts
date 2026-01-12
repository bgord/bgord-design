import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { SizeTokenGenerator } from "../src/tokens/size-token-generator";
import { SizeUtilityGenerator } from "../src/utilities/size-utility-generator";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("SizeUtilityGenerator", () => {
  test("basic usage", () => {
    const tokenGenerator = new SizeTokenGenerator();
    const generator = new SizeUtilityGenerator(breakpoints, tokenGenerator);

    expect(generator.name).toEqual("Size utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-size='xs'] { height: var(--size-xs); width: var(--size-xs); }
      [data-size='sm'] { height: var(--size-sm); width: var(--size-sm); }
      [data-size='md'] { height: var(--size-md); width: var(--size-md); }
      [data-size='lg'] { height: var(--size-lg); width: var(--size-lg); }
      [data-size='xl'] { height: var(--size-xl); width: var(--size-xl); }
      [data-size='2xl'] { height: var(--size-2xl); width: var(--size-2xl); }

      @media (max-width: 768px) {
        [data-md-size='xs'] { height: var(--size-xs); width: var(--size-xs); }
        [data-md-size='sm'] { height: var(--size-sm); width: var(--size-sm); }
        [data-md-size='md'] { height: var(--size-md); width: var(--size-md); }
        [data-md-size='lg'] { height: var(--size-lg); width: var(--size-lg); }
        [data-md-size='xl'] { height: var(--size-xl); width: var(--size-xl); }
        [data-md-size='2xl'] { height: var(--size-2xl); width: var(--size-2xl); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-size"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
      "data-md-size"?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    `);
  });
});

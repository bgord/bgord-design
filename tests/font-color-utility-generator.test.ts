import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { FontColorUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("FontColorUtilityGenerator", () => {
  test("basic usage", () => {
    const GrayscaleTokenGenerator = new Tokens.GrayscaleTokenGenerator();
    const BrandTokenGenerator = new Tokens.BrandTokenGenerator();
    const PositiveTokenGenerator = new Tokens.PositiveTokenGenerator();
    const DangerTokenGenerator = new Tokens.DangerTokenGenerator();
    const WarningTokenGenerator = new Tokens.WarningTokenGenerator();
    const generator = new FontColorUtilityGenerator(
      breakpoints,
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );

    expect(generator.name).toEqual("Font-color utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-color='neutral-0'] { color: var(--color-neutral-0); }
      [data-color='neutral-50'] { color: var(--color-neutral-50); }
      [data-color='neutral-100'] { color: var(--color-neutral-100); }
      [data-color='neutral-200'] { color: var(--color-neutral-200); }
      [data-color='neutral-300'] { color: var(--color-neutral-300); }
      [data-color='neutral-400'] { color: var(--color-neutral-400); }
      [data-color='neutral-500'] { color: var(--color-neutral-500); }
      [data-color='neutral-600'] { color: var(--color-neutral-600); }
      [data-color='neutral-700'] { color: var(--color-neutral-700); }
      [data-color='neutral-800'] { color: var(--color-neutral-800); }
      [data-color='neutral-900'] { color: var(--color-neutral-900); }
      [data-color='neutral-950'] { color: var(--color-neutral-950); }

      [data-color='brand-50'] { color: var(--color-brand-50); }
      [data-color='brand-100'] { color: var(--color-brand-100); }
      [data-color='brand-200'] { color: var(--color-brand-200); }
      [data-color='brand-300'] { color: var(--color-brand-300); }
      [data-color='brand-400'] { color: var(--color-brand-400); }
      [data-color='brand-500'] { color: var(--color-brand-500); }
      [data-color='brand-600'] { color: var(--color-brand-600); }
      [data-color='brand-700'] { color: var(--color-brand-700); }
      [data-color='brand-800'] { color: var(--color-brand-800); }
      [data-color='brand-900'] { color: var(--color-brand-900); }

      [data-color='positive-0'] { color: var(--color-positive-0); }
      [data-color='positive-100'] { color: var(--color-positive-100); }
      [data-color='positive-200'] { color: var(--color-positive-200); }
      [data-color='positive-400'] { color: var(--color-positive-400); }
      [data-color='positive-600'] { color: var(--color-positive-600); }
      [data-color='positive-800'] { color: var(--color-positive-800); }
      [data-color='positive-900'] { color: var(--color-positive-900); }

      [data-color='danger-0'] { color: var(--color-danger-0); }
      [data-color='danger-100'] { color: var(--color-danger-100); }
      [data-color='danger-200'] { color: var(--color-danger-200); }
      [data-color='danger-400'] { color: var(--color-danger-400); }
      [data-color='danger-600'] { color: var(--color-danger-600); }
      [data-color='danger-800'] { color: var(--color-danger-800); }
      [data-color='danger-900'] { color: var(--color-danger-900); }

      [data-color='warning-100'] { color: var(--color-warning-100); }
      [data-color='warning-300'] { color: var(--color-warning-300); }
      [data-color='warning-500'] { color: var(--color-warning-500); }
      [data-color='warning-700'] { color: var(--color-warning-700); }
      [data-color='warning-900'] { color: var(--color-warning-900); }

      @media (max-width: 768px) {
        [data-md-color='neutral-0'] { color: var(--color-neutral-0); }
        [data-md-color='neutral-50'] { color: var(--color-neutral-50); }
        [data-md-color='neutral-100'] { color: var(--color-neutral-100); }
        [data-md-color='neutral-200'] { color: var(--color-neutral-200); }
        [data-md-color='neutral-300'] { color: var(--color-neutral-300); }
        [data-md-color='neutral-400'] { color: var(--color-neutral-400); }
        [data-md-color='neutral-500'] { color: var(--color-neutral-500); }
        [data-md-color='neutral-600'] { color: var(--color-neutral-600); }
        [data-md-color='neutral-700'] { color: var(--color-neutral-700); }
        [data-md-color='neutral-800'] { color: var(--color-neutral-800); }
        [data-md-color='neutral-900'] { color: var(--color-neutral-900); }
        [data-md-color='neutral-950'] { color: var(--color-neutral-950); }

        [data-md-color='brand-50'] { color: var(--color-brand-50); }
        [data-md-color='brand-100'] { color: var(--color-brand-100); }
        [data-md-color='brand-200'] { color: var(--color-brand-200); }
        [data-md-color='brand-300'] { color: var(--color-brand-300); }
        [data-md-color='brand-400'] { color: var(--color-brand-400); }
        [data-md-color='brand-500'] { color: var(--color-brand-500); }
        [data-md-color='brand-600'] { color: var(--color-brand-600); }
        [data-md-color='brand-700'] { color: var(--color-brand-700); }
        [data-md-color='brand-800'] { color: var(--color-brand-800); }
        [data-md-color='brand-900'] { color: var(--color-brand-900); }

        [data-md-color='positive-0'] { color: var(--color-positive-0); }
        [data-md-color='positive-100'] { color: var(--color-positive-100); }
        [data-md-color='positive-200'] { color: var(--color-positive-200); }
        [data-md-color='positive-400'] { color: var(--color-positive-400); }
        [data-md-color='positive-600'] { color: var(--color-positive-600); }
        [data-md-color='positive-800'] { color: var(--color-positive-800); }
        [data-md-color='positive-900'] { color: var(--color-positive-900); }

        [data-md-color='danger-0'] { color: var(--color-danger-0); }
        [data-md-color='danger-100'] { color: var(--color-danger-100); }
        [data-md-color='danger-200'] { color: var(--color-danger-200); }
        [data-md-color='danger-400'] { color: var(--color-danger-400); }
        [data-md-color='danger-600'] { color: var(--color-danger-600); }
        [data-md-color='danger-800'] { color: var(--color-danger-800); }
        [data-md-color='danger-900'] { color: var(--color-danger-900); }

        [data-md-color='warning-100'] { color: var(--color-warning-100); }
        [data-md-color='warning-300'] { color: var(--color-warning-300); }
        [data-md-color='warning-500'] { color: var(--color-warning-500); }
        [data-md-color='warning-700'] { color: var(--color-warning-700); }
        [data-md-color='warning-900'] { color: var(--color-warning-900); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-color"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
   `);
  });

  test("with overrides", () => {
    const GrayscaleTokenGenerator = new Tokens.GrayscaleTokenGenerator({ "color-foo": "bar" });
    const BrandTokenGenerator = new Tokens.BrandTokenGenerator();
    const PositiveTokenGenerator = new Tokens.PositiveTokenGenerator();
    const DangerTokenGenerator = new Tokens.DangerTokenGenerator();
    const WarningTokenGenerator = new Tokens.WarningTokenGenerator();
    const generator = new FontColorUtilityGenerator(
      breakpoints,
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-color='neutral-0'] { color: var(--color-neutral-0); }
      [data-color='neutral-50'] { color: var(--color-neutral-50); }
      [data-color='neutral-100'] { color: var(--color-neutral-100); }
      [data-color='neutral-200'] { color: var(--color-neutral-200); }
      [data-color='neutral-300'] { color: var(--color-neutral-300); }
      [data-color='neutral-400'] { color: var(--color-neutral-400); }
      [data-color='neutral-500'] { color: var(--color-neutral-500); }
      [data-color='neutral-600'] { color: var(--color-neutral-600); }
      [data-color='neutral-700'] { color: var(--color-neutral-700); }
      [data-color='neutral-800'] { color: var(--color-neutral-800); }
      [data-color='neutral-900'] { color: var(--color-neutral-900); }
      [data-color='neutral-950'] { color: var(--color-neutral-950); }

      [data-color='foo'] { color: var(--color-foo); }

      [data-color='brand-50'] { color: var(--color-brand-50); }
      [data-color='brand-100'] { color: var(--color-brand-100); }
      [data-color='brand-200'] { color: var(--color-brand-200); }
      [data-color='brand-300'] { color: var(--color-brand-300); }
      [data-color='brand-400'] { color: var(--color-brand-400); }
      [data-color='brand-500'] { color: var(--color-brand-500); }
      [data-color='brand-600'] { color: var(--color-brand-600); }
      [data-color='brand-700'] { color: var(--color-brand-700); }
      [data-color='brand-800'] { color: var(--color-brand-800); }
      [data-color='brand-900'] { color: var(--color-brand-900); }

      [data-color='positive-0'] { color: var(--color-positive-0); }
      [data-color='positive-100'] { color: var(--color-positive-100); }
      [data-color='positive-200'] { color: var(--color-positive-200); }
      [data-color='positive-400'] { color: var(--color-positive-400); }
      [data-color='positive-600'] { color: var(--color-positive-600); }
      [data-color='positive-800'] { color: var(--color-positive-800); }
      [data-color='positive-900'] { color: var(--color-positive-900); }

      [data-color='danger-0'] { color: var(--color-danger-0); }
      [data-color='danger-100'] { color: var(--color-danger-100); }
      [data-color='danger-200'] { color: var(--color-danger-200); }
      [data-color='danger-400'] { color: var(--color-danger-400); }
      [data-color='danger-600'] { color: var(--color-danger-600); }
      [data-color='danger-800'] { color: var(--color-danger-800); }
      [data-color='danger-900'] { color: var(--color-danger-900); }

      [data-color='warning-100'] { color: var(--color-warning-100); }
      [data-color='warning-300'] { color: var(--color-warning-300); }
      [data-color='warning-500'] { color: var(--color-warning-500); }
      [data-color='warning-700'] { color: var(--color-warning-700); }
      [data-color='warning-900'] { color: var(--color-warning-900); }

      @media (max-width: 768px) {
        [data-md-color='neutral-0'] { color: var(--color-neutral-0); }
        [data-md-color='neutral-50'] { color: var(--color-neutral-50); }
        [data-md-color='neutral-100'] { color: var(--color-neutral-100); }
        [data-md-color='neutral-200'] { color: var(--color-neutral-200); }
        [data-md-color='neutral-300'] { color: var(--color-neutral-300); }
        [data-md-color='neutral-400'] { color: var(--color-neutral-400); }
        [data-md-color='neutral-500'] { color: var(--color-neutral-500); }
        [data-md-color='neutral-600'] { color: var(--color-neutral-600); }
        [data-md-color='neutral-700'] { color: var(--color-neutral-700); }
        [data-md-color='neutral-800'] { color: var(--color-neutral-800); }
        [data-md-color='neutral-900'] { color: var(--color-neutral-900); }
        [data-md-color='neutral-950'] { color: var(--color-neutral-950); }

        [data-md-color='foo'] { color: var(--color-foo); }

        [data-md-color='brand-50'] { color: var(--color-brand-50); }
        [data-md-color='brand-100'] { color: var(--color-brand-100); }
        [data-md-color='brand-200'] { color: var(--color-brand-200); }
        [data-md-color='brand-300'] { color: var(--color-brand-300); }
        [data-md-color='brand-400'] { color: var(--color-brand-400); }
        [data-md-color='brand-500'] { color: var(--color-brand-500); }
        [data-md-color='brand-600'] { color: var(--color-brand-600); }
        [data-md-color='brand-700'] { color: var(--color-brand-700); }
        [data-md-color='brand-800'] { color: var(--color-brand-800); }
        [data-md-color='brand-900'] { color: var(--color-brand-900); }

        [data-md-color='positive-0'] { color: var(--color-positive-0); }
        [data-md-color='positive-100'] { color: var(--color-positive-100); }
        [data-md-color='positive-200'] { color: var(--color-positive-200); }
        [data-md-color='positive-400'] { color: var(--color-positive-400); }
        [data-md-color='positive-600'] { color: var(--color-positive-600); }
        [data-md-color='positive-800'] { color: var(--color-positive-800); }
        [data-md-color='positive-900'] { color: var(--color-positive-900); }

        [data-md-color='danger-0'] { color: var(--color-danger-0); }
        [data-md-color='danger-100'] { color: var(--color-danger-100); }
        [data-md-color='danger-200'] { color: var(--color-danger-200); }
        [data-md-color='danger-400'] { color: var(--color-danger-400); }
        [data-md-color='danger-600'] { color: var(--color-danger-600); }
        [data-md-color='danger-800'] { color: var(--color-danger-800); }
        [data-md-color='danger-900'] { color: var(--color-danger-900); }

        [data-md-color='warning-100'] { color: var(--color-warning-100); }
        [data-md-color='warning-300'] { color: var(--color-warning-300); }
        [data-md-color='warning-500'] { color: var(--color-warning-500); }
        [data-md-color='warning-700'] { color: var(--color-warning-700); }
        [data-md-color='warning-900'] { color: var(--color-warning-900); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-color"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
    `);
  });
});

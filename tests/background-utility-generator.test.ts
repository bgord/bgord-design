import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { BackgroundUtilityGenerator } from "../src/utilities";

describe("BackgroundUtilityGenerator", () => {
  test("basic usage", () => {
    const GrayscaleTokenGenerator = new Tokens.GrayscaleTokenGenerator();
    const BrandTokenGenerator = new Tokens.BrandTokenGenerator();
    const PositiveTokenGenerator = new Tokens.PositiveTokenGenerator();
    const DangerTokenGenerator = new Tokens.DangerTokenGenerator();
    const WarningTokenGenerator = new Tokens.WarningTokenGenerator();
    const generator = new BackgroundUtilityGenerator(
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );

    expect(generator.name).toEqual("Background utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-bg='neutral-0'] { background: var(--color-neutral-0); }
      [data-bg='neutral-50'] { background: var(--color-neutral-50); }
      [data-bg='neutral-100'] { background: var(--color-neutral-100); }
      [data-bg='neutral-200'] { background: var(--color-neutral-200); }
      [data-bg='neutral-300'] { background: var(--color-neutral-300); }
      [data-bg='neutral-400'] { background: var(--color-neutral-400); }
      [data-bg='neutral-500'] { background: var(--color-neutral-500); }
      [data-bg='neutral-600'] { background: var(--color-neutral-600); }
      [data-bg='neutral-700'] { background: var(--color-neutral-700); }
      [data-bg='neutral-800'] { background: var(--color-neutral-800); }
      [data-bg='neutral-900'] { background: var(--color-neutral-900); }
      [data-bg='neutral-950'] { background: var(--color-neutral-950); }

      [data-bg='brand-50'] { background: var(--color-brand-50); }
      [data-bg='brand-100'] { background: var(--color-brand-100); }
      [data-bg='brand-200'] { background: var(--color-brand-200); }
      [data-bg='brand-300'] { background: var(--color-brand-300); }
      [data-bg='brand-400'] { background: var(--color-brand-400); }
      [data-bg='brand-500'] { background: var(--color-brand-500); }
      [data-bg='brand-600'] { background: var(--color-brand-600); }
      [data-bg='brand-700'] { background: var(--color-brand-700); }
      [data-bg='brand-800'] { background: var(--color-brand-800); }
      [data-bg='brand-900'] { background: var(--color-brand-900); }

      [data-bg='positive-0'] { background: var(--color-positive-0); }
      [data-bg='positive-100'] { background: var(--color-positive-100); }
      [data-bg='positive-200'] { background: var(--color-positive-200); }
      [data-bg='positive-400'] { background: var(--color-positive-400); }
      [data-bg='positive-600'] { background: var(--color-positive-600); }
      [data-bg='positive-800'] { background: var(--color-positive-800); }
      [data-bg='positive-900'] { background: var(--color-positive-900); }

      [data-bg='danger-0'] { background: var(--color-danger-0); }
      [data-bg='danger-100'] { background: var(--color-danger-100); }
      [data-bg='danger-200'] { background: var(--color-danger-200); }
      [data-bg='danger-400'] { background: var(--color-danger-400); }
      [data-bg='danger-600'] { background: var(--color-danger-600); }
      [data-bg='danger-800'] { background: var(--color-danger-800); }
      [data-bg='danger-900'] { background: var(--color-danger-900); }

      [data-bg='warning-100'] { background: var(--color-warning-100); }
      [data-bg='warning-300'] { background: var(--color-warning-300); }
      [data-bg='warning-500'] { background: var(--color-warning-500); }
      [data-bg='warning-700'] { background: var(--color-warning-700); }
      [data-bg='warning-900'] { background: var(--color-warning-900); }
    `);

    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-bg"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
   `);
  });

  test("with overrides", () => {
    const GrayscaleTokenGenerator = new Tokens.GrayscaleTokenGenerator({ "color-foo": "bar" });
    const BrandTokenGenerator = new Tokens.BrandTokenGenerator();
    const PositiveTokenGenerator = new Tokens.PositiveTokenGenerator();
    const DangerTokenGenerator = new Tokens.DangerTokenGenerator();
    const WarningTokenGenerator = new Tokens.WarningTokenGenerator();
    const generator = new BackgroundUtilityGenerator(
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-bg='neutral-0'] { background: var(--color-neutral-0); }
      [data-bg='neutral-50'] { background: var(--color-neutral-50); }
      [data-bg='neutral-100'] { background: var(--color-neutral-100); }
      [data-bg='neutral-200'] { background: var(--color-neutral-200); }
      [data-bg='neutral-300'] { background: var(--color-neutral-300); }
      [data-bg='neutral-400'] { background: var(--color-neutral-400); }
      [data-bg='neutral-500'] { background: var(--color-neutral-500); }
      [data-bg='neutral-600'] { background: var(--color-neutral-600); }
      [data-bg='neutral-700'] { background: var(--color-neutral-700); }
      [data-bg='neutral-800'] { background: var(--color-neutral-800); }
      [data-bg='neutral-900'] { background: var(--color-neutral-900); }
      [data-bg='neutral-950'] { background: var(--color-neutral-950); }

      [data-bg='foo'] { background: var(--color-foo); }

      [data-bg='brand-50'] { background: var(--color-brand-50); }
      [data-bg='brand-100'] { background: var(--color-brand-100); }
      [data-bg='brand-200'] { background: var(--color-brand-200); }
      [data-bg='brand-300'] { background: var(--color-brand-300); }
      [data-bg='brand-400'] { background: var(--color-brand-400); }
      [data-bg='brand-500'] { background: var(--color-brand-500); }
      [data-bg='brand-600'] { background: var(--color-brand-600); }
      [data-bg='brand-700'] { background: var(--color-brand-700); }
      [data-bg='brand-800'] { background: var(--color-brand-800); }
      [data-bg='brand-900'] { background: var(--color-brand-900); }

      [data-bg='positive-0'] { background: var(--color-positive-0); }
      [data-bg='positive-100'] { background: var(--color-positive-100); }
      [data-bg='positive-200'] { background: var(--color-positive-200); }
      [data-bg='positive-400'] { background: var(--color-positive-400); }
      [data-bg='positive-600'] { background: var(--color-positive-600); }
      [data-bg='positive-800'] { background: var(--color-positive-800); }
      [data-bg='positive-900'] { background: var(--color-positive-900); }

      [data-bg='danger-0'] { background: var(--color-danger-0); }
      [data-bg='danger-100'] { background: var(--color-danger-100); }
      [data-bg='danger-200'] { background: var(--color-danger-200); }
      [data-bg='danger-400'] { background: var(--color-danger-400); }
      [data-bg='danger-600'] { background: var(--color-danger-600); }
      [data-bg='danger-800'] { background: var(--color-danger-800); }
      [data-bg='danger-900'] { background: var(--color-danger-900); }

      [data-bg='warning-100'] { background: var(--color-warning-100); }
      [data-bg='warning-300'] { background: var(--color-warning-300); }
      [data-bg='warning-500'] { background: var(--color-warning-500); }
      [data-bg='warning-700'] { background: var(--color-warning-700); }
      [data-bg='warning-900'] { background: var(--color-warning-900); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-bg"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
    `);
  });
});

import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { FontColorUtilityGenerator } from "../src/utilities";

describe("FontColorUtilityGenerator", () => {
  test("basic usage", () => {
    const GrayscaleTokenGenerator = new Tokens.GrayscaleTokenGenerator();
    const BrandTokenGenerator = new Tokens.BrandTokenGenerator();
    const PositiveTokenGenerator = new Tokens.PositiveTokenGenerator();
    const DangerTokenGenerator = new Tokens.DangerTokenGenerator();
    const WarningTokenGenerator = new Tokens.WarningTokenGenerator();

    const generator = new FontColorUtilityGenerator(
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );

    const css = generator.css();
    expect(css).toContain("[data-color='neutral-900'] { color: var(--color-neutral-900); }");
    expect(css).toContain("[data-color='brand-500'] { color: var(--color-brand-500); }");
    expect(css).toContain("[data-color='positive-500'] { color: var(--color-positive-500); }");
    expect(css).toContain("[data-color='danger-500'] { color: var(--color-danger-500); }");
    expect(css).toContain("[data-color='warning-500'] { color: var(--color-warning-500); }");

    const ts = generator.toTypeScript();
    expect(ts).toContain('"neutral-900"');
    expect(ts).toContain('"brand-500"');
    expect(ts).toContain('"positive-500"');
    expect(ts).toContain('"danger-500"');
    expect(ts).toContain('"warning-500"');
    expect(ts).toMatch(/^"data-color"\?:/);
  });

  test("with overrides", () => {
    const GrayscaleTokenGenerator = new Tokens.GrayscaleTokenGenerator({ "color-foo": "bar" });
    const BrandTokenGenerator = new Tokens.BrandTokenGenerator();
    const PositiveTokenGenerator = new Tokens.PositiveTokenGenerator();
    const DangerTokenGenerator = new Tokens.DangerTokenGenerator();
    const WarningTokenGenerator = new Tokens.WarningTokenGenerator();

    const generator = new FontColorUtilityGenerator(
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );

    const css = generator.css();
    expect(css).toContain("[data-color='foo'] { color: var(--color-foo); }");

    const ts = generator.toTypeScript();
    expect(ts).toContain('"foo"');
  });
});

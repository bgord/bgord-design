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

    const css = generator.css();

    expect(generator.name).toEqual("Background utilities");
    expect(css).toContain("[data-bg='neutral-900'] { background: var(--color-neutral-900); }");
    expect(css).toContain("[data-bg='brand-500'] { background: var(--color-brand-500); }");
    expect(css).toContain("[data-bg='positive-600'] { background: var(--color-positive-600); }");
    expect(css).toContain("[data-bg='danger-600'] { background: var(--color-danger-600); }");
    expect(css).toContain("[data-bg='warning-500'] { background: var(--color-warning-500); }");

    const ts = generator.toTypeScript();

    expect(ts).toContain('"neutral-900"');
    expect(ts).toContain('"brand-500"');
    expect(ts).toContain('"positive-600"');
    expect(ts).toContain('"danger-600"');
    expect(ts).toContain('"warning-500"');
    expect(ts).toMatch(/^"data-bg"\?:/);
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

    const css = generator.css();

    expect(css).toContain("[data-bg='foo'] { background: var(--color-foo); }");

    const ts = generator.toTypeScript();

    expect(ts).toContain('"foo"');
  });
});

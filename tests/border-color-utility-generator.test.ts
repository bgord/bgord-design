import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { BorderColorUtilityGenerator } from "../src/utilities";

describe("BorderColorUtilityGenerator", () => {
  test("basic usage", () => {
    const GrayscaleTokenGenerator = new Tokens.GrayscaleTokenGenerator();
    const BrandTokenGenerator = new Tokens.BrandTokenGenerator();
    const PositiveTokenGenerator = new Tokens.PositiveTokenGenerator();
    const DangerTokenGenerator = new Tokens.DangerTokenGenerator();
    const WarningTokenGenerator = new Tokens.WarningTokenGenerator();

    const generator = new BorderColorUtilityGenerator(
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );

    const css = generator.css();
    expect(css).toContain("[data-bc='neutral-900'] { border-color: var(--color-neutral-900); }");
    expect(css).toContain("[data-bc='brand-500'] { border-color: var(--color-brand-500); }");
    expect(css).toContain("[data-bc='positive-500'] { border-color: var(--color-positive-500); }");
    expect(css).toContain("[data-bc='danger-500'] { border-color: var(--color-danger-500); }");
    expect(css).toContain("[data-bc='warning-500'] { border-color: var(--color-warning-500); }");

    const ts = generator.toTypeScript();
    expect(ts).toContain('"neutral-900"');
    expect(ts).toContain('"brand-500"');
    expect(ts).toContain('"positive-500"');
    expect(ts).toContain('"danger-500"');
    expect(ts).toContain('"warning-500"');
    expect(ts).toMatch(/^"data-bc"\?:/);
  });

  test("with overrides", () => {
    const GrayscaleTokenGenerator = new Tokens.GrayscaleTokenGenerator({ "color-foo": "bar" });
    const BrandTokenGenerator = new Tokens.BrandTokenGenerator();
    const PositiveTokenGenerator = new Tokens.PositiveTokenGenerator();
    const DangerTokenGenerator = new Tokens.DangerTokenGenerator();
    const WarningTokenGenerator = new Tokens.WarningTokenGenerator();

    const generator = new BorderColorUtilityGenerator(
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );

    const css = generator.css();
    expect(css).toContain("[data-bc='foo'] { border-color: var(--color-foo); }");

    const ts = generator.toTypeScript();
    expect(ts).toContain('"foo"');
  });
});

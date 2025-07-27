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
    expect(css).toContain(
      "[data-bc='neutral-900'] { border-color: var(--color-neutral-900); border-style: solid; }",
    );
    expect(css).toContain(
      "[data-bct='neutral-900'] { border-top-color: var(--color-neutral-900); border-top-style: solid; }",
    );
    expect(css).toContain(
      "[data-bcr='neutral-900'] { border-right-color: var(--color-neutral-900); border-right-style: solid; }",
    );
    expect(css).toContain(
      "[data-bcb='neutral-900'] { border-bottom-color: var(--color-neutral-900); border-bottom-style: solid; }",
    );
    expect(css).toContain(
      "[data-bcl='neutral-900'] { border-left-color: var(--color-neutral-900); border-left-style: solid; }",
    );
    expect(css).toContain(
      "[data-bcx='neutral-900'] { border-left-color: var(--color-neutral-900); border-right-color: var(--color-neutral-900); border-left-style: solid; border-right-style: solid; }",
    );
    expect(css).toContain(
      "[data-bcy='neutral-900'] { border-top-color: var(--color-neutral-900); border-bottom-color: var(--color-neutral-900); border-top-style: solid; border-bottom-style: solid; }",
    );

    const ts = generator.toTypeScript();
    expect(ts).toContain('"neutral-900"');
    expect(ts).toContain('"brand-500"');
    expect(ts).toContain('"positive-600"');
    expect(ts).toContain('"danger-600"');
    expect(ts).toContain('"warning-500"');
    expect(ts).toContain('"data-bc"?:');
    expect(ts).toContain('"data-bct"?:');
    expect(ts).toContain('"data-bcr"?:');
    expect(ts).toContain('"data-bcb"?:');
    expect(ts).toContain('"data-bcl"?:');
    expect(ts).toContain('"data-bcx"?:');
    expect(ts).toContain('"data-bcy"?:');
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
    expect(css).toContain("[data-bc='foo'] { border-color: var(--color-foo); border-style: solid; }");

    const ts = generator.toTypeScript();
    expect(ts).toContain('"foo"');
  });
});

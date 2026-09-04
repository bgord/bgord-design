import { describe, expect, test } from "bun:test";
import { SemanticTokenGenerator } from "../src/tokens";

describe("SemanticTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new SemanticTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --color-scheme: dark;
      --surface-base: var(--color-neutral-950);
      --surface-raised: var(--color-neutral-900);
      --surface-overlay: var(--color-neutral-850);
      --surface-sunken: var(--color-neutral-950);
      --text-strong: var(--color-neutral-100);
      --text-primary: var(--color-neutral-200);
      --text-secondary: var(--color-neutral-300);
      --text-muted: var(--color-neutral-400);
      --text-disabled: var(--color-neutral-500);
      --text-inverted: var(--color-neutral-950);
      --border-subtle: var(--color-alpha-subtle);
      --border-default: var(--color-alpha-soft);
      --border-strong: var(--color-alpha-medium);
      --interactive-rest: var(--color-neutral-850);
      --interactive-hover: var(--color-neutral-800);
      --interactive-active: var(--color-neutral-700);
      --interactive-disabled: var(--color-neutral-900);
      --fill-muted: var(--color-neutral-800);
      --fill-strong: var(--color-neutral-700);
      --fill-inverted: var(--color-neutral-200);
      --fill-inverted-hover: var(--color-neutral-0);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const SemanticTokens = {
        "color-scheme": "dark",
        "surface-base": "var(--color-neutral-950)",
        "surface-raised": "var(--color-neutral-900)",
        "surface-overlay": "var(--color-neutral-850)",
        "surface-sunken": "var(--color-neutral-950)",
        "text-strong": "var(--color-neutral-100)",
        "text-primary": "var(--color-neutral-200)",
        "text-secondary": "var(--color-neutral-300)",
        "text-muted": "var(--color-neutral-400)",
        "text-disabled": "var(--color-neutral-500)",
        "text-inverted": "var(--color-neutral-950)",
        "border-subtle": "var(--color-alpha-subtle)",
        "border-default": "var(--color-alpha-soft)",
        "border-strong": "var(--color-alpha-medium)",
        "interactive-rest": "var(--color-neutral-850)",
        "interactive-hover": "var(--color-neutral-800)",
        "interactive-active": "var(--color-neutral-700)",
        "interactive-disabled": "var(--color-neutral-900)",
        "fill-muted": "var(--color-neutral-800)",
        "fill-strong": "var(--color-neutral-700)",
        "fill-inverted": "var(--color-neutral-200)",
        "fill-inverted-hover": "var(--color-neutral-0)"
      } as const;

      export type SemanticTokenType = keyof typeof SemanticTokens;
    `);
  });

  test("light theme", () => {
    const generator = new SemanticTokenGenerator();

    expect(generator.getLightConfig()).toEqual(generator.light);
    expect(Object.keys(generator.light)).toEqual(Object.keys(generator.base));
    expect(generator.getLightTokens()).toEqualIgnoringWhitespace(`
      --color-scheme: light;
      --surface-base: var(--color-neutral-50);
      --surface-raised: var(--color-neutral-0);
      --surface-overlay: var(--color-neutral-0);
      --surface-sunken: var(--color-neutral-100);
      --text-strong: var(--color-neutral-950);
      --text-primary: var(--color-neutral-900);
      --text-secondary: var(--color-neutral-700);
      --text-muted: var(--color-neutral-600);
      --text-disabled: var(--color-neutral-500);
      --text-inverted: var(--color-neutral-0);
      --border-subtle: var(--color-alpha-subtle);
      --border-default: var(--color-alpha-soft);
      --border-strong: var(--color-alpha-medium);
      --interactive-rest: var(--color-neutral-0);
      --interactive-hover: var(--color-neutral-50);
      --interactive-active: var(--color-neutral-100);
      --interactive-disabled: var(--color-neutral-50);
      --fill-muted: var(--color-neutral-100);
      --fill-strong: var(--color-neutral-200);
      --fill-inverted: var(--color-neutral-900);
      --fill-inverted-hover: var(--color-neutral-950);
    `);
  });

  test("with light overrides", () => {
    const lightOverrides = { "surface-base": "var(--color-neutral-0)" };
    const generator = new SemanticTokenGenerator({}, lightOverrides);

    expect(generator.getLightConfig()).toEqual({ ...generator.light, ...lightOverrides });
    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getLightTokens()).toContain("--surface-base: var(--color-neutral-0);");
  });

  test("with overrides", () => {
    const overrides = { "surface-base": "var(--color-neutral-900)" };
    const generator = new SemanticTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toContain("--surface-base: var(--color-neutral-900);");
    expect(generator.getTokens()).toContain("--surface-raised: var(--color-neutral-900);");
    expect(generator.toTypeScript()).toContain(`"surface-base": "var(--color-neutral-900)"`);
  });
});

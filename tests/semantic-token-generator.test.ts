import { describe, expect, test } from "bun:test";
import { SemanticTokenGenerator } from "../src/tokens";

describe("SemanticTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new SemanticTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
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
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const SemanticTokens = {
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
        "interactive-disabled": "var(--color-neutral-900)"
      } as const;

      export type SemanticTokenType = keyof typeof SemanticTokens;
    `);
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

/* cSpell:ignore Roboto Cambria Segoe Menlo Consolas monospace BlinkMacSystemFont Neue */
import { describe, expect, test } from "bun:test";
import { FontFamilyTokenGenerator } from "../src/tokens";

const SANS =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';
const SERIF = 'Georgia, Cambria, "Times New Roman", Times, serif';
const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace';

describe("FontFamilyTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new FontFamilyTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);

    expect(generator.base["font-family-sans"]).toEqual(SANS);
    expect(generator.base["font-family-serif"]).toEqual(SERIF);
    expect(generator.base["font-family-mono"]).toEqual(MONO);

    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --font-family-sans: ${SANS};
      --font-family-serif: ${SERIF};
      --font-family-mono: ${MONO};
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const FontFamilyTokens = {
        "font-family-sans": ${JSON.stringify(SANS)},
        "font-family-serif": ${JSON.stringify(SERIF)},
        "font-family-mono": ${JSON.stringify(MONO)}
      } as const;

      export type FontFamilyTokenType = keyof typeof FontFamilyTokens;
    `);
  });

  test("every stack ends in a generic family", () => {
    const generator = new FontFamilyTokenGenerator();

    expect(SANS.endsWith('"Segoe UI Emoji"')).toBe(true);
    expect(SANS).toContain("sans-serif,");
    expect(SERIF.endsWith("serif")).toBe(true);
    expect(MONO.endsWith("monospace")).toBe(true);
    expect(Object.keys(generator.base)).toEqual([
      "font-family-sans",
      "font-family-serif",
      "font-family-mono",
    ]);
  });

  test("with overrides", () => {
    const overrides = { "font-family-custom": "Comic Sans MS" };
    const generator = new FontFamilyTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
      --font-family-sans: ${SANS};
      --font-family-serif: ${SERIF};
      --font-family-mono: ${MONO};
      --font-family-custom: Comic Sans MS;
    `);
    expect(generator.toTypeScript()).toContain(`"font-family-custom": "Comic Sans MS"`);
  });
});

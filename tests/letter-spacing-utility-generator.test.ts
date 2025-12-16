import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { LetterSpacingUtilityGenerator } from "../src/utilities";

describe("LetterSpacingUtilityGenerator", () => {
  test("basic usage", () => {
    const LetterSpacingTokenGenerator = new Tokens.LetterSpacingTokenGenerator();
    const generator = new LetterSpacingUtilityGenerator(LetterSpacingTokenGenerator);

    const css = generator.css();

    expect(css).toContain("[data-ls='tight'] { letter-spacing: var(--letter-spacing-tight); }");
    expect(css).toContain("[data-ls='normal'] { letter-spacing: var(--letter-spacing-normal); }");
    expect(css).toContain("[data-ls='wide'] { letter-spacing: var(--letter-spacing-wide); }");
    expect(css).toContain("[data-ls='wider'] { letter-spacing: var(--letter-spacing-wider); }");
    expect(css).toContain("[data-ls='widest'] { letter-spacing: var(--letter-spacing-widest); }");
    expect(css).toContain("[data-ls='unset'] { letter-spacing: var(--letter-spacing-unset); }");

    const ts = generator.toTypeScript();

    expect(ts).toEqualIgnoringWhitespace(`
      "data-ls"?: "tight" | "normal" | "wide" | "wider" | "widest" | "unset";
    `);
  });

  test("with overrides", () => {
    const LetterSpacingTokenGenerator = new Tokens.LetterSpacingTokenGenerator({
      "letter-spacing-insane": "1em",
    });
    const generator = new LetterSpacingUtilityGenerator(LetterSpacingTokenGenerator);

    expect(generator.css()).toContain("[data-ls='insane'] { letter-spacing: var(--letter-spacing-insane); }");
    expect(generator.toTypeScript()).toContain('"insane"');
  });
});

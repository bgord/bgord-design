import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { LetterSpacingUtilityGenerator } from "../src/utilities";

describe("LetterSpacingUtilityGenerator", () => {
  test("basic usage", () => {
    const LetterSpacingTokenGenerator = new Tokens.LetterSpacingTokenGenerator();
    const generator = new LetterSpacingUtilityGenerator(LetterSpacingTokenGenerator);

    expect(generator.name).toEqual("Letter spacing utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-ls='tight'] { letter-spacing: var(--letter-spacing-tight); }
      [data-ls='normal'] { letter-spacing: var(--letter-spacing-normal); }
      [data-ls='wide'] { letter-spacing: var(--letter-spacing-wide); }
      [data-ls='wider'] { letter-spacing: var(--letter-spacing-wider); }
      [data-ls='widest'] { letter-spacing: var(--letter-spacing-widest); }
      [data-ls='unset'] { letter-spacing: var(--letter-spacing-unset); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-ls"?: "tight" | "normal" | "wide" | "wider" | "widest" | "unset";
    `);
  });

  test("with overrides", () => {
    const LetterSpacingTokenGenerator = new Tokens.LetterSpacingTokenGenerator({
      "letter-spacing-insane": "1em",
    });
    const generator = new LetterSpacingUtilityGenerator(LetterSpacingTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-ls='tight'] { letter-spacing: var(--letter-spacing-tight); }
      [data-ls='normal'] { letter-spacing: var(--letter-spacing-normal); }
      [data-ls='wide'] { letter-spacing: var(--letter-spacing-wide); }
      [data-ls='wider'] { letter-spacing: var(--letter-spacing-wider); }
      [data-ls='widest'] { letter-spacing: var(--letter-spacing-widest); }
      [data-ls='unset'] { letter-spacing: var(--letter-spacing-unset); }
      [data-ls='insane'] { letter-spacing: var(--letter-spacing-insane); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-ls"?: "tight" | "normal" | "wide" | "wider" | "widest" | "unset" | "insane";
    `);
  });
});

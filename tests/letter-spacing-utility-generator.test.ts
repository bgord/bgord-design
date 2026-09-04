import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { LetterSpacingUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("LetterSpacingUtilityGenerator", () => {
  test("basic usage", () => {
    const LetterSpacingTokenGenerator = new Tokens.LetterSpacingTokenGenerator();
    const generator = new LetterSpacingUtilityGenerator(breakpoints, LetterSpacingTokenGenerator);

    expect(generator.name).toEqual("Letter spacing utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-ls='tighter'] { letter-spacing: var(--letter-spacing-tighter); }
      [data-ls='tight'] { letter-spacing: var(--letter-spacing-tight); }
      [data-ls='snug'] { letter-spacing: var(--letter-spacing-snug); }
      [data-ls='normal'] { letter-spacing: var(--letter-spacing-normal); }
      [data-ls='wide'] { letter-spacing: var(--letter-spacing-wide); }
      [data-ls='wider'] { letter-spacing: var(--letter-spacing-wider); }
      [data-ls='widest'] { letter-spacing: var(--letter-spacing-widest); }
      [data-ls='unset'] { letter-spacing: var(--letter-spacing-unset); }

      @media (max-width: 768px) {
        [data-md-ls='tighter'] { letter-spacing: var(--letter-spacing-tighter); }
        [data-md-ls='tight'] { letter-spacing: var(--letter-spacing-tight); }
        [data-md-ls='snug'] { letter-spacing: var(--letter-spacing-snug); }
        [data-md-ls='normal'] { letter-spacing: var(--letter-spacing-normal); }
        [data-md-ls='wide'] { letter-spacing: var(--letter-spacing-wide); }
        [data-md-ls='wider'] { letter-spacing: var(--letter-spacing-wider); }
        [data-md-ls='widest'] { letter-spacing: var(--letter-spacing-widest); }
        [data-md-ls='unset'] { letter-spacing: var(--letter-spacing-unset); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-ls"?: "tighter" | "tight" | "snug" | "normal" | "wide" | "wider" | "widest" | "unset";
      "data-md-ls"?: "tighter" | "tight" | "snug" | "normal" | "wide" | "wider" | "widest" | "unset";
    `);
  });

  test("with overrides", () => {
    const LetterSpacingTokenGenerator = new Tokens.LetterSpacingTokenGenerator({
      "letter-spacing-insane": "1em",
    });
    const generator = new LetterSpacingUtilityGenerator(breakpoints, LetterSpacingTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-ls='tighter'] { letter-spacing: var(--letter-spacing-tighter); }
      [data-ls='tight'] { letter-spacing: var(--letter-spacing-tight); }
      [data-ls='snug'] { letter-spacing: var(--letter-spacing-snug); }
      [data-ls='normal'] { letter-spacing: var(--letter-spacing-normal); }
      [data-ls='wide'] { letter-spacing: var(--letter-spacing-wide); }
      [data-ls='wider'] { letter-spacing: var(--letter-spacing-wider); }
      [data-ls='widest'] { letter-spacing: var(--letter-spacing-widest); }
      [data-ls='unset'] { letter-spacing: var(--letter-spacing-unset); }
      [data-ls='insane'] { letter-spacing: var(--letter-spacing-insane); }

      @media (max-width: 768px) {
        [data-md-ls='tighter'] { letter-spacing: var(--letter-spacing-tighter); }
        [data-md-ls='tight'] { letter-spacing: var(--letter-spacing-tight); }
        [data-md-ls='snug'] { letter-spacing: var(--letter-spacing-snug); }
        [data-md-ls='normal'] { letter-spacing: var(--letter-spacing-normal); }
        [data-md-ls='wide'] { letter-spacing: var(--letter-spacing-wide); }
        [data-md-ls='wider'] { letter-spacing: var(--letter-spacing-wider); }
        [data-md-ls='widest'] { letter-spacing: var(--letter-spacing-widest); }
        [data-md-ls='unset'] { letter-spacing: var(--letter-spacing-unset); }
        [data-md-ls='insane'] { letter-spacing: var(--letter-spacing-insane); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-ls"?: "tighter" | "tight" | "snug" | "normal" | "wide" | "wider" | "widest" | "unset" | "insane";
      "data-md-ls"?: "tighter" | "tight" | "snug" | "normal" | "wide" | "wider" | "widest" | "unset" | "insane";
    `);
  });
});

import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { GapUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("GapUtilityGenerator", () => {
  test("basic usage", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator();
    const generator = new GapUtilityGenerator(breakpoints, SpacingTokenGenerator);

    expect(generator.name).toEqual("Gap utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-gap='0'] { gap: var(--spacing-0); }
      [data-gap='0-5'] { gap: var(--spacing-0-5); }
      [data-gap='1'] { gap: var(--spacing-1); }
      [data-gap='1-5'] { gap: var(--spacing-1-5); }
      [data-gap='2'] { gap: var(--spacing-2); }
      [data-gap='2-5'] { gap: var(--spacing-2-5); }
      [data-gap='3'] { gap: var(--spacing-3); }
      [data-gap='4'] { gap: var(--spacing-4); }
      [data-gap='5'] { gap: var(--spacing-5); }
      [data-gap='6'] { gap: var(--spacing-6); }
      [data-gap='8'] { gap: var(--spacing-8); }
      [data-gap='12'] { gap: var(--spacing-12); }
      [data-gap='16'] { gap: var(--spacing-16); }
      [data-gap='auto'] { gap: var(--spacing-auto); }

      @media (max-width: 768px) {
        [data-md-gap='0'] { gap: var(--spacing-0); }
        [data-md-gap='0-5'] { gap: var(--spacing-0-5); }
        [data-md-gap='1'] { gap: var(--spacing-1); }
        [data-md-gap='1-5'] { gap: var(--spacing-1-5); }
        [data-md-gap='2'] { gap: var(--spacing-2); }
        [data-md-gap='2-5'] { gap: var(--spacing-2-5); }
        [data-md-gap='3'] { gap: var(--spacing-3); }
        [data-md-gap='4'] { gap: var(--spacing-4); }
        [data-md-gap='5'] { gap: var(--spacing-5); }
        [data-md-gap='6'] { gap: var(--spacing-6); }
        [data-md-gap='8'] { gap: var(--spacing-8); }
        [data-md-gap='12'] { gap: var(--spacing-12); }
        [data-md-gap='16'] { gap: var(--spacing-16); }
        [data-md-gap='auto'] { gap: var(--spacing-auto); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-gap"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
    `);
  });

  test("with overrides", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator({ "spacing-huge": "100rem" });
    const generator = new GapUtilityGenerator(breakpoints, SpacingTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-gap='0'] { gap: var(--spacing-0); }
      [data-gap='0-5'] { gap: var(--spacing-0-5); }
      [data-gap='1'] { gap: var(--spacing-1); }
      [data-gap='1-5'] { gap: var(--spacing-1-5); }
      [data-gap='2'] { gap: var(--spacing-2); }
      [data-gap='2-5'] { gap: var(--spacing-2-5); }
      [data-gap='3'] { gap: var(--spacing-3); }
      [data-gap='4'] { gap: var(--spacing-4); }
      [data-gap='5'] { gap: var(--spacing-5); }
      [data-gap='6'] { gap: var(--spacing-6); }
      [data-gap='8'] { gap: var(--spacing-8); }
      [data-gap='12'] { gap: var(--spacing-12); }
      [data-gap='16'] { gap: var(--spacing-16); }
      [data-gap='auto'] { gap: var(--spacing-auto); }
      [data-gap='huge'] { gap: var(--spacing-huge); }

      @media (max-width: 768px) {
        [data-md-gap='0'] { gap: var(--spacing-0); }
        [data-md-gap='0-5'] { gap: var(--spacing-0-5); }
        [data-md-gap='1'] { gap: var(--spacing-1); }
        [data-md-gap='1-5'] { gap: var(--spacing-1-5); }
        [data-md-gap='2'] { gap: var(--spacing-2); }
        [data-md-gap='2-5'] { gap: var(--spacing-2-5); }
        [data-md-gap='3'] { gap: var(--spacing-3); }
        [data-md-gap='4'] { gap: var(--spacing-4); }
        [data-md-gap='5'] { gap: var(--spacing-5); }
        [data-md-gap='6'] { gap: var(--spacing-6); }
        [data-md-gap='8'] { gap: var(--spacing-8); }
        [data-md-gap='12'] { gap: var(--spacing-12); }
        [data-md-gap='16'] { gap: var(--spacing-16); }
        [data-md-gap='auto'] { gap: var(--spacing-auto); }
        [data-md-gap='huge'] { gap: var(--spacing-huge); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-gap"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
    `);
  });
});

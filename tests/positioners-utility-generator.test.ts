import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { PositionersUtilityGenerator } from "../src/utilities";

describe("PositionersUtilityGenerator", () => {
  test("basic usage", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator();
    const generator = new PositionersUtilityGenerator(SpacingTokenGenerator);

    expect(generator.name).toEqual("Positioners utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-top='0'] { top: var(--spacing-0); }
      [data-top='0-5'] { top: var(--spacing-0-5); }
      [data-top='1'] { top: var(--spacing-1); }
      [data-top='1-5'] { top: var(--spacing-1-5); }
      [data-top='2'] { top: var(--spacing-2); }
      [data-top='2-5'] { top: var(--spacing-2-5); }
      [data-top='3'] { top: var(--spacing-3); }
      [data-top='4'] { top: var(--spacing-4); }
      [data-top='5'] { top: var(--spacing-5); }
      [data-top='6'] { top: var(--spacing-6); }
      [data-top='8'] { top: var(--spacing-8); }
      [data-top='12'] { top: var(--spacing-12); }
      [data-top='16'] { top: var(--spacing-16); }
      [data-top='auto'] { top: var(--spacing-auto); }

      [data-right='0'] { right: var(--spacing-0); }
      [data-right='0-5'] { right: var(--spacing-0-5); }
      [data-right='1'] { right: var(--spacing-1); }
      [data-right='1-5'] { right: var(--spacing-1-5); }
      [data-right='2'] { right: var(--spacing-2); }
      [data-right='2-5'] { right: var(--spacing-2-5); }
      [data-right='3'] { right: var(--spacing-3); }
      [data-right='4'] { right: var(--spacing-4); }
      [data-right='5'] { right: var(--spacing-5); }
      [data-right='6'] { right: var(--spacing-6); }
      [data-right='8'] { right: var(--spacing-8); }
      [data-right='12'] { right: var(--spacing-12); }
      [data-right='16'] { right: var(--spacing-16); }
      [data-right='auto'] { right: var(--spacing-auto); }

      [data-bottom='0'] { bottom: var(--spacing-0); }
      [data-bottom='0-5'] { bottom: var(--spacing-0-5); }
      [data-bottom='1'] { bottom: var(--spacing-1); }
      [data-bottom='1-5'] { bottom: var(--spacing-1-5); }
      [data-bottom='2'] { bottom: var(--spacing-2); }
      [data-bottom='2-5'] { bottom: var(--spacing-2-5); }
      [data-bottom='3'] { bottom: var(--spacing-3); }
      [data-bottom='4'] { bottom: var(--spacing-4); }
      [data-bottom='5'] { bottom: var(--spacing-5); }
      [data-bottom='6'] { bottom: var(--spacing-6); }
      [data-bottom='8'] { bottom: var(--spacing-8); }
      [data-bottom='12'] { bottom: var(--spacing-12); }
      [data-bottom='16'] { bottom: var(--spacing-16); }
      [data-bottom='auto'] { bottom: var(--spacing-auto); }

      [data-left='0'] { left: var(--spacing-0); }
      [data-left='0-5'] { left: var(--spacing-0-5); }
      [data-left='1'] { left: var(--spacing-1); }
      [data-left='1-5'] { left: var(--spacing-1-5); }
      [data-left='2'] { left: var(--spacing-2); }
      [data-left='2-5'] { left: var(--spacing-2-5); }
      [data-left='3'] { left: var(--spacing-3); }
      [data-left='4'] { left: var(--spacing-4); }
      [data-left='5'] { left: var(--spacing-5); }
      [data-left='6'] { left: var(--spacing-6); }
      [data-left='8'] { left: var(--spacing-8); }
      [data-left='12'] { left: var(--spacing-12); }
      [data-left='16'] { left: var(--spacing-16); }
      [data-left='auto'] { left: var(--spacing-auto); }

      [data-inset='0'] { inset: var(--spacing-0); }
      [data-inset='0-5'] { inset: var(--spacing-0-5); }
      [data-inset='1'] { inset: var(--spacing-1); }
      [data-inset='1-5'] { inset: var(--spacing-1-5); }
      [data-inset='2'] { inset: var(--spacing-2); }
      [data-inset='2-5'] { inset: var(--spacing-2-5); }
      [data-inset='3'] { inset: var(--spacing-3); }
      [data-inset='4'] { inset: var(--spacing-4); }
      [data-inset='5'] { inset: var(--spacing-5); }
      [data-inset='6'] { inset: var(--spacing-6); }
      [data-inset='8'] { inset: var(--spacing-8); }
      [data-inset='12'] { inset: var(--spacing-12); }
      [data-inset='16'] { inset: var(--spacing-16); }
      [data-inset='auto'] { inset: var(--spacing-auto); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-top"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-right"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-bottom"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-left"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-inset"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
    `);
  });

  test("with overrides", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator({ "spacing-huge": "100rem" });
    const generator = new PositionersUtilityGenerator(SpacingTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-top='0'] { top: var(--spacing-0); }
      [data-top='0-5'] { top: var(--spacing-0-5); }
      [data-top='1'] { top: var(--spacing-1); }
      [data-top='1-5'] { top: var(--spacing-1-5); }
      [data-top='2'] { top: var(--spacing-2); }
      [data-top='2-5'] { top: var(--spacing-2-5); }
      [data-top='3'] { top: var(--spacing-3); }
      [data-top='4'] { top: var(--spacing-4); }
      [data-top='5'] { top: var(--spacing-5); }
      [data-top='6'] { top: var(--spacing-6); }
      [data-top='8'] { top: var(--spacing-8); }
      [data-top='12'] { top: var(--spacing-12); }
      [data-top='16'] { top: var(--spacing-16); }
      [data-top='auto'] { top: var(--spacing-auto); }
      [data-top='huge'] { top: var(--spacing-huge); }

      [data-right='0'] { right: var(--spacing-0); }
      [data-right='0-5'] { right: var(--spacing-0-5); }
      [data-right='1'] { right: var(--spacing-1); }
      [data-right='1-5'] { right: var(--spacing-1-5); }
      [data-right='2'] { right: var(--spacing-2); }
      [data-right='2-5'] { right: var(--spacing-2-5); }
      [data-right='3'] { right: var(--spacing-3); }
      [data-right='4'] { right: var(--spacing-4); }
      [data-right='5'] { right: var(--spacing-5); }
      [data-right='6'] { right: var(--spacing-6); }
      [data-right='8'] { right: var(--spacing-8); }
      [data-right='12'] { right: var(--spacing-12); }
      [data-right='16'] { right: var(--spacing-16); }
      [data-right='auto'] { right: var(--spacing-auto); }
      [data-right='huge'] { right: var(--spacing-huge); }

      [data-bottom='0'] { bottom: var(--spacing-0); }
      [data-bottom='0-5'] { bottom: var(--spacing-0-5); }
      [data-bottom='1'] { bottom: var(--spacing-1); }
      [data-bottom='1-5'] { bottom: var(--spacing-1-5); }
      [data-bottom='2'] { bottom: var(--spacing-2); }
      [data-bottom='2-5'] { bottom: var(--spacing-2-5); }
      [data-bottom='3'] { bottom: var(--spacing-3); }
      [data-bottom='4'] { bottom: var(--spacing-4); }
      [data-bottom='5'] { bottom: var(--spacing-5); }
      [data-bottom='6'] { bottom: var(--spacing-6); }
      [data-bottom='8'] { bottom: var(--spacing-8); }
      [data-bottom='12'] { bottom: var(--spacing-12); }
      [data-bottom='16'] { bottom: var(--spacing-16); }
      [data-bottom='auto'] { bottom: var(--spacing-auto); }
      [data-bottom='huge'] { bottom: var(--spacing-huge); }

      [data-left='0'] { left: var(--spacing-0); }
      [data-left='0-5'] { left: var(--spacing-0-5); }
      [data-left='1'] { left: var(--spacing-1); }
      [data-left='1-5'] { left: var(--spacing-1-5); }
      [data-left='2'] { left: var(--spacing-2); }
      [data-left='2-5'] { left: var(--spacing-2-5); }
      [data-left='3'] { left: var(--spacing-3); }
      [data-left='4'] { left: var(--spacing-4); }
      [data-left='5'] { left: var(--spacing-5); }
      [data-left='6'] { left: var(--spacing-6); }
      [data-left='8'] { left: var(--spacing-8); }
      [data-left='12'] { left: var(--spacing-12); }
      [data-left='16'] { left: var(--spacing-16); }
      [data-left='auto'] { left: var(--spacing-auto); }
      [data-left='huge'] { left: var(--spacing-huge); }

      [data-inset='0'] { inset: var(--spacing-0); }
      [data-inset='0-5'] { inset: var(--spacing-0-5); }
      [data-inset='1'] { inset: var(--spacing-1); }
      [data-inset='1-5'] { inset: var(--spacing-1-5); }
      [data-inset='2'] { inset: var(--spacing-2); }
      [data-inset='2-5'] { inset: var(--spacing-2-5); }
      [data-inset='3'] { inset: var(--spacing-3); }
      [data-inset='4'] { inset: var(--spacing-4); }
      [data-inset='5'] { inset: var(--spacing-5); }
      [data-inset='6'] { inset: var(--spacing-6); }
      [data-inset='8'] { inset: var(--spacing-8); }
      [data-inset='12'] { inset: var(--spacing-12); }
      [data-inset='16'] { inset: var(--spacing-16); }
      [data-inset='auto'] { inset: var(--spacing-auto); }
      [data-inset='huge'] { inset: var(--spacing-huge); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-top"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-right"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-bottom"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-left"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-inset"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
    `);
  });
});

import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { PaddingUtilityGenerator } from "../src/utilities";

describe("PaddingUtilityGenerator", () => {
  test("basic usage", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator();
    const generator = new PaddingUtilityGenerator(SpacingTokenGenerator);

    expect(generator.name).toEqual("Padding utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-p='0'] { padding: var(--spacing-0); }
      [data-p='0-5'] { padding: var(--spacing-0-5); }
      [data-p='1'] { padding: var(--spacing-1); }
      [data-p='1-5'] { padding: var(--spacing-1-5); }
      [data-p='2'] { padding: var(--spacing-2); }
      [data-p='2-5'] { padding: var(--spacing-2-5); }
      [data-p='3'] { padding: var(--spacing-3); }
      [data-p='4'] { padding: var(--spacing-4); }
      [data-p='5'] { padding: var(--spacing-5); }
      [data-p='6'] { padding: var(--spacing-6); }
      [data-p='8'] { padding: var(--spacing-8); }
      [data-p='12'] { padding: var(--spacing-12); }
      [data-p='16'] { padding: var(--spacing-16); }
      [data-p='auto'] { padding: var(--spacing-auto); }
      [data-px='0'] { padding-left: var(--spacing-0); padding-right: var(--spacing-0); }
      [data-px='0-5'] { padding-left: var(--spacing-0-5); padding-right: var(--spacing-0-5); }
      [data-px='1'] { padding-left: var(--spacing-1); padding-right: var(--spacing-1); }
      [data-px='1-5'] { padding-left: var(--spacing-1-5); padding-right: var(--spacing-1-5); }
      [data-px='2'] { padding-left: var(--spacing-2); padding-right: var(--spacing-2); }
      [data-px='2-5'] { padding-left: var(--spacing-2-5); padding-right: var(--spacing-2-5); }
      [data-px='3'] { padding-left: var(--spacing-3); padding-right: var(--spacing-3); }
      [data-px='4'] { padding-left: var(--spacing-4); padding-right: var(--spacing-4); }
      [data-px='5'] { padding-left: var(--spacing-5); padding-right: var(--spacing-5); }
      [data-px='6'] { padding-left: var(--spacing-6); padding-right: var(--spacing-6); }
      [data-px='8'] { padding-left: var(--spacing-8); padding-right: var(--spacing-8); }
      [data-px='12'] { padding-left: var(--spacing-12); padding-right: var(--spacing-12); }
      [data-px='16'] { padding-left: var(--spacing-16); padding-right: var(--spacing-16); }
      [data-px='auto'] { padding-left: var(--spacing-auto); padding-right: var(--spacing-auto); }
      [data-py='0'] { padding-top: var(--spacing-0); padding-bottom: var(--spacing-0); }
      [data-py='0-5'] { padding-top: var(--spacing-0-5); padding-bottom: var(--spacing-0-5); }
      [data-py='1'] { padding-top: var(--spacing-1); padding-bottom: var(--spacing-1); }
      [data-py='1-5'] { padding-top: var(--spacing-1-5); padding-bottom: var(--spacing-1-5); }
      [data-py='2'] { padding-top: var(--spacing-2); padding-bottom: var(--spacing-2); }
      [data-py='2-5'] { padding-top: var(--spacing-2-5); padding-bottom: var(--spacing-2-5); }
      [data-py='3'] { padding-top: var(--spacing-3); padding-bottom: var(--spacing-3); }
      [data-py='4'] { padding-top: var(--spacing-4); padding-bottom: var(--spacing-4); }
      [data-py='5'] { padding-top: var(--spacing-5); padding-bottom: var(--spacing-5); }
      [data-py='6'] { padding-top: var(--spacing-6); padding-bottom: var(--spacing-6); }
      [data-py='8'] { padding-top: var(--spacing-8); padding-bottom: var(--spacing-8); }
      [data-py='12'] { padding-top: var(--spacing-12); padding-bottom: var(--spacing-12); }
      [data-py='16'] { padding-top: var(--spacing-16); padding-bottom: var(--spacing-16); }
      [data-py='auto'] { padding-top: var(--spacing-auto); padding-bottom: var(--spacing-auto); }
      [data-pt='0'] { padding-top: var(--spacing-0); }
      [data-pr='0'] { padding-right: var(--spacing-0); }
      [data-pb='0'] { padding-bottom: var(--spacing-0); }
      [data-pl='0'] { padding-left: var(--spacing-0); }
      [data-pt='0-5'] { padding-top: var(--spacing-0-5); }
      [data-pr='0-5'] { padding-right: var(--spacing-0-5); }
      [data-pb='0-5'] { padding-bottom: var(--spacing-0-5); }
      [data-pl='0-5'] { padding-left: var(--spacing-0-5); }
      [data-pt='1'] { padding-top: var(--spacing-1); }
      [data-pr='1'] { padding-right: var(--spacing-1); }
      [data-pb='1'] { padding-bottom: var(--spacing-1); }
      [data-pl='1'] { padding-left: var(--spacing-1); }
      [data-pt='1-5'] { padding-top: var(--spacing-1-5); }
      [data-pr='1-5'] { padding-right: var(--spacing-1-5); }
      [data-pb='1-5'] { padding-bottom: var(--spacing-1-5); }
      [data-pl='1-5'] { padding-left: var(--spacing-1-5); }
      [data-pt='2'] { padding-top: var(--spacing-2); }
      [data-pr='2'] { padding-right: var(--spacing-2); }
      [data-pb='2'] { padding-bottom: var(--spacing-2); }
      [data-pl='2'] { padding-left: var(--spacing-2); }
      [data-pt='2-5'] { padding-top: var(--spacing-2-5); }
      [data-pr='2-5'] { padding-right: var(--spacing-2-5); }
      [data-pb='2-5'] { padding-bottom: var(--spacing-2-5); }
      [data-pl='2-5'] { padding-left: var(--spacing-2-5); }
      [data-pt='3'] { padding-top: var(--spacing-3); }
      [data-pr='3'] { padding-right: var(--spacing-3); }
      [data-pb='3'] { padding-bottom: var(--spacing-3); }
      [data-pl='3'] { padding-left: var(--spacing-3); }
      [data-pt='4'] { padding-top: var(--spacing-4); }
      [data-pr='4'] { padding-right: var(--spacing-4); }
      [data-pb='4'] { padding-bottom: var(--spacing-4); }
      [data-pl='4'] { padding-left: var(--spacing-4); }
      [data-pt='5'] { padding-top: var(--spacing-5); }
      [data-pr='5'] { padding-right: var(--spacing-5); }
      [data-pb='5'] { padding-bottom: var(--spacing-5); }
      [data-pl='5'] { padding-left: var(--spacing-5); }
      [data-pt='6'] { padding-top: var(--spacing-6); }
      [data-pr='6'] { padding-right: var(--spacing-6); }
      [data-pb='6'] { padding-bottom: var(--spacing-6); }
      [data-pl='6'] { padding-left: var(--spacing-6); }
      [data-pt='8'] { padding-top: var(--spacing-8); }
      [data-pr='8'] { padding-right: var(--spacing-8); }
      [data-pb='8'] { padding-bottom: var(--spacing-8); }
      [data-pl='8'] { padding-left: var(--spacing-8); }
      [data-pt='12'] { padding-top: var(--spacing-12); }
      [data-pr='12'] { padding-right: var(--spacing-12); }
      [data-pb='12'] { padding-bottom: var(--spacing-12); }
      [data-pl='12'] { padding-left: var(--spacing-12); }
      [data-pt='16'] { padding-top: var(--spacing-16); }
      [data-pr='16'] { padding-right: var(--spacing-16); }
      [data-pb='16'] { padding-bottom: var(--spacing-16); }
      [data-pl='16'] { padding-left: var(--spacing-16); }
      [data-pt='auto'] { padding-top: var(--spacing-auto); }
      [data-pr='auto'] { padding-right: var(--spacing-auto); }
      [data-pb='auto'] { padding-bottom: var(--spacing-auto); }
      [data-pl='auto'] { padding-left: var(--spacing-auto); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-p"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-pt"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-pr"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-pb"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-pl"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-px"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-py"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
    `);
  });

  test("with overrides", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator({ "spacing-huge": "100rem" });
    const generator = new PaddingUtilityGenerator(SpacingTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-p='0'] { padding: var(--spacing-0); }
      [data-p='0-5'] { padding: var(--spacing-0-5); }
      [data-p='1'] { padding: var(--spacing-1); }
      [data-p='1-5'] { padding: var(--spacing-1-5); }
      [data-p='2'] { padding: var(--spacing-2); }
      [data-p='2-5'] { padding: var(--spacing-2-5); }
      [data-p='3'] { padding: var(--spacing-3); }
      [data-p='4'] { padding: var(--spacing-4); }
      [data-p='5'] { padding: var(--spacing-5); }
      [data-p='6'] { padding: var(--spacing-6); }
      [data-p='8'] { padding: var(--spacing-8); }
      [data-p='12'] { padding: var(--spacing-12); }
      [data-p='16'] { padding: var(--spacing-16); }
      [data-p='auto'] { padding: var(--spacing-auto); }
      [data-p='huge'] { padding: var(--spacing-huge); }
      [data-px='0'] { padding-left: var(--spacing-0); padding-right: var(--spacing-0); }
      [data-px='0-5'] { padding-left: var(--spacing-0-5); padding-right: var(--spacing-0-5); }
      [data-px='1'] { padding-left: var(--spacing-1); padding-right: var(--spacing-1); }
      [data-px='1-5'] { padding-left: var(--spacing-1-5); padding-right: var(--spacing-1-5); }
      [data-px='2'] { padding-left: var(--spacing-2); padding-right: var(--spacing-2); }
      [data-px='2-5'] { padding-left: var(--spacing-2-5); padding-right: var(--spacing-2-5); }
      [data-px='3'] { padding-left: var(--spacing-3); padding-right: var(--spacing-3); }
      [data-px='4'] { padding-left: var(--spacing-4); padding-right: var(--spacing-4); }
      [data-px='5'] { padding-left: var(--spacing-5); padding-right: var(--spacing-5); }
      [data-px='6'] { padding-left: var(--spacing-6); padding-right: var(--spacing-6); }
      [data-px='8'] { padding-left: var(--spacing-8); padding-right: var(--spacing-8); }
      [data-px='12'] { padding-left: var(--spacing-12); padding-right: var(--spacing-12); }
      [data-px='16'] { padding-left: var(--spacing-16); padding-right: var(--spacing-16); }
      [data-px='auto'] { padding-left: var(--spacing-auto); padding-right: var(--spacing-auto); }
      [data-px='huge'] { padding-left: var(--spacing-huge); padding-right: var(--spacing-huge); }
      [data-py='0'] { padding-top: var(--spacing-0); padding-bottom: var(--spacing-0); }
      [data-py='0-5'] { padding-top: var(--spacing-0-5); padding-bottom: var(--spacing-0-5); }
      [data-py='1'] { padding-top: var(--spacing-1); padding-bottom: var(--spacing-1); }
      [data-py='1-5'] { padding-top: var(--spacing-1-5); padding-bottom: var(--spacing-1-5); }
      [data-py='2'] { padding-top: var(--spacing-2); padding-bottom: var(--spacing-2); }
      [data-py='2-5'] { padding-top: var(--spacing-2-5); padding-bottom: var(--spacing-2-5); }
      [data-py='3'] { padding-top: var(--spacing-3); padding-bottom: var(--spacing-3); }
      [data-py='4'] { padding-top: var(--spacing-4); padding-bottom: var(--spacing-4); }
      [data-py='5'] { padding-top: var(--spacing-5); padding-bottom: var(--spacing-5); }
      [data-py='6'] { padding-top: var(--spacing-6); padding-bottom: var(--spacing-6); }
      [data-py='8'] { padding-top: var(--spacing-8); padding-bottom: var(--spacing-8); }
      [data-py='12'] { padding-top: var(--spacing-12); padding-bottom: var(--spacing-12); }
      [data-py='16'] { padding-top: var(--spacing-16); padding-bottom: var(--spacing-16); }
      [data-py='auto'] { padding-top: var(--spacing-auto); padding-bottom: var(--spacing-auto); }
      [data-py='huge'] { padding-top: var(--spacing-huge); padding-bottom: var(--spacing-huge); }
      [data-pt='0'] { padding-top: var(--spacing-0); }
      [data-pr='0'] { padding-right: var(--spacing-0); }
      [data-pb='0'] { padding-bottom: var(--spacing-0); }
      [data-pl='0'] { padding-left: var(--spacing-0); }
      [data-pt='0-5'] { padding-top: var(--spacing-0-5); }
      [data-pr='0-5'] { padding-right: var(--spacing-0-5); }
      [data-pb='0-5'] { padding-bottom: var(--spacing-0-5); }
      [data-pl='0-5'] { padding-left: var(--spacing-0-5); }
      [data-pt='1'] { padding-top: var(--spacing-1); }
      [data-pr='1'] { padding-right: var(--spacing-1); }
      [data-pb='1'] { padding-bottom: var(--spacing-1); }
      [data-pl='1'] { padding-left: var(--spacing-1); }
      [data-pt='1-5'] { padding-top: var(--spacing-1-5); }
      [data-pr='1-5'] { padding-right: var(--spacing-1-5); }
      [data-pb='1-5'] { padding-bottom: var(--spacing-1-5); }
      [data-pl='1-5'] { padding-left: var(--spacing-1-5); }
      [data-pt='2'] { padding-top: var(--spacing-2); }
      [data-pr='2'] { padding-right: var(--spacing-2); }
      [data-pb='2'] { padding-bottom: var(--spacing-2); }
      [data-pl='2'] { padding-left: var(--spacing-2); }
      [data-pt='2-5'] { padding-top: var(--spacing-2-5); }
      [data-pr='2-5'] { padding-right: var(--spacing-2-5); }
      [data-pb='2-5'] { padding-bottom: var(--spacing-2-5); }
      [data-pl='2-5'] { padding-left: var(--spacing-2-5); }
      [data-pt='3'] { padding-top: var(--spacing-3); }
      [data-pr='3'] { padding-right: var(--spacing-3); }
      [data-pb='3'] { padding-bottom: var(--spacing-3); }
      [data-pl='3'] { padding-left: var(--spacing-3); }
      [data-pt='4'] { padding-top: var(--spacing-4); }
      [data-pr='4'] { padding-right: var(--spacing-4); }
      [data-pb='4'] { padding-bottom: var(--spacing-4); }
      [data-pl='4'] { padding-left: var(--spacing-4); }
      [data-pt='5'] { padding-top: var(--spacing-5); }
      [data-pr='5'] { padding-right: var(--spacing-5); }
      [data-pb='5'] { padding-bottom: var(--spacing-5); }
      [data-pl='5'] { padding-left: var(--spacing-5); }
      [data-pt='6'] { padding-top: var(--spacing-6); }
      [data-pr='6'] { padding-right: var(--spacing-6); }
      [data-pb='6'] { padding-bottom: var(--spacing-6); }
      [data-pl='6'] { padding-left: var(--spacing-6); }
      [data-pt='8'] { padding-top: var(--spacing-8); }
      [data-pr='8'] { padding-right: var(--spacing-8); }
      [data-pb='8'] { padding-bottom: var(--spacing-8); }
      [data-pl='8'] { padding-left: var(--spacing-8); }
      [data-pt='12'] { padding-top: var(--spacing-12); }
      [data-pr='12'] { padding-right: var(--spacing-12); }
      [data-pb='12'] { padding-bottom: var(--spacing-12); }
      [data-pl='12'] { padding-left: var(--spacing-12); }
      [data-pt='16'] { padding-top: var(--spacing-16); }
      [data-pr='16'] { padding-right: var(--spacing-16); }
      [data-pb='16'] { padding-bottom: var(--spacing-16); }
      [data-pl='16'] { padding-left: var(--spacing-16); }
      [data-pt='auto'] { padding-top: var(--spacing-auto); }
      [data-pr='auto'] { padding-right: var(--spacing-auto); }
      [data-pb='auto'] { padding-bottom: var(--spacing-auto); }
      [data-pl='auto'] { padding-left: var(--spacing-auto); }
      [data-pt='huge'] { padding-top: var(--spacing-huge); }
      [data-pr='huge'] { padding-right: var(--spacing-huge); }
      [data-pb='huge'] { padding-bottom: var(--spacing-huge); }
      [data-pl='huge'] { padding-left: var(--spacing-huge); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-p"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-pt"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-pr"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-pb"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-pl"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-px"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-py"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
    `);
  });
});

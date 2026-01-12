import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { PaddingUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("PaddingUtilityGenerator", () => {
  test("basic usage", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator();
    const generator = new PaddingUtilityGenerator(breakpoints, SpacingTokenGenerator);

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
      [data-pt='0-5'] { padding-top: var(--spacing-0-5); }
      [data-pt='1'] { padding-top: var(--spacing-1); }
      [data-pt='1-5'] { padding-top: var(--spacing-1-5); }
      [data-pt='2'] { padding-top: var(--spacing-2); }
      [data-pt='2-5'] { padding-top: var(--spacing-2-5); }
      [data-pt='3'] { padding-top: var(--spacing-3); }
      [data-pt='4'] { padding-top: var(--spacing-4); }
      [data-pt='5'] { padding-top: var(--spacing-5); }
      [data-pt='6'] { padding-top: var(--spacing-6); }
      [data-pt='8'] { padding-top: var(--spacing-8); }
      [data-pt='12'] { padding-top: var(--spacing-12); }
      [data-pt='16'] { padding-top: var(--spacing-16); }
      [data-pt='auto'] { padding-top: var(--spacing-auto); }

      [data-pr='0'] { padding-right: var(--spacing-0); }
      [data-pr='0-5'] { padding-right: var(--spacing-0-5); }
      [data-pr='1'] { padding-right: var(--spacing-1); }
      [data-pr='1-5'] { padding-right: var(--spacing-1-5); }
      [data-pr='2'] { padding-right: var(--spacing-2); }
      [data-pr='2-5'] { padding-right: var(--spacing-2-5); }
      [data-pr='3'] { padding-right: var(--spacing-3); }
      [data-pr='4'] { padding-right: var(--spacing-4); }
      [data-pr='5'] { padding-right: var(--spacing-5); }
      [data-pr='6'] { padding-right: var(--spacing-6); }
      [data-pr='8'] { padding-right: var(--spacing-8); }
      [data-pr='12'] { padding-right: var(--spacing-12); }
      [data-pr='16'] { padding-right: var(--spacing-16); }
      [data-pr='auto'] { padding-right: var(--spacing-auto); }

      [data-pb='0'] { padding-bottom: var(--spacing-0); }
      [data-pb='0-5'] { padding-bottom: var(--spacing-0-5); }
      [data-pb='1'] { padding-bottom: var(--spacing-1); }
      [data-pb='1-5'] { padding-bottom: var(--spacing-1-5); }
      [data-pb='2'] { padding-bottom: var(--spacing-2); }
      [data-pb='2-5'] { padding-bottom: var(--spacing-2-5); }
      [data-pb='3'] { padding-bottom: var(--spacing-3); }
      [data-pb='4'] { padding-bottom: var(--spacing-4); }
      [data-pb='5'] { padding-bottom: var(--spacing-5); }
      [data-pb='6'] { padding-bottom: var(--spacing-6); }
      [data-pb='8'] { padding-bottom: var(--spacing-8); }
      [data-pb='12'] { padding-bottom: var(--spacing-12); }
      [data-pb='16'] { padding-bottom: var(--spacing-16); }
      [data-pb='auto'] { padding-bottom: var(--spacing-auto); }

      [data-pl='0'] { padding-left: var(--spacing-0); }
      [data-pl='0-5'] { padding-left: var(--spacing-0-5); }
      [data-pl='1'] { padding-left: var(--spacing-1); }
      [data-pl='1-5'] { padding-left: var(--spacing-1-5); }
      [data-pl='2'] { padding-left: var(--spacing-2); }
      [data-pl='2-5'] { padding-left: var(--spacing-2-5); }
      [data-pl='3'] { padding-left: var(--spacing-3); }
      [data-pl='4'] { padding-left: var(--spacing-4); }
      [data-pl='5'] { padding-left: var(--spacing-5); }
      [data-pl='6'] { padding-left: var(--spacing-6); }
      [data-pl='8'] { padding-left: var(--spacing-8); }
      [data-pl='12'] { padding-left: var(--spacing-12); }
      [data-pl='16'] { padding-left: var(--spacing-16); }
      [data-pl='auto'] { padding-left: var(--spacing-auto); }

      @media (max-width: 768px) {
        [data-md-p='0'] { padding: var(--spacing-0); }
        [data-md-p='0-5'] { padding: var(--spacing-0-5); }
        [data-md-p='1'] { padding: var(--spacing-1); }
        [data-md-p='1-5'] { padding: var(--spacing-1-5); }
        [data-md-p='2'] { padding: var(--spacing-2); }
        [data-md-p='2-5'] { padding: var(--spacing-2-5); }
        [data-md-p='3'] { padding: var(--spacing-3); }
        [data-md-p='4'] { padding: var(--spacing-4); }
        [data-md-p='5'] { padding: var(--spacing-5); }
        [data-md-p='6'] { padding: var(--spacing-6); }
        [data-md-p='8'] { padding: var(--spacing-8); }
        [data-md-p='12'] { padding: var(--spacing-12); }
        [data-md-p='16'] { padding: var(--spacing-16); }
        [data-md-p='auto'] { padding: var(--spacing-auto); }

        [data-md-px='0'] { padding-left: var(--spacing-0); padding-right: var(--spacing-0); }
        [data-md-px='0-5'] { padding-left: var(--spacing-0-5); padding-right: var(--spacing-0-5); }
        [data-md-px='1'] { padding-left: var(--spacing-1); padding-right: var(--spacing-1); }
        [data-md-px='1-5'] { padding-left: var(--spacing-1-5); padding-right: var(--spacing-1-5); }
        [data-md-px='2'] { padding-left: var(--spacing-2); padding-right: var(--spacing-2); }
        [data-md-px='2-5'] { padding-left: var(--spacing-2-5); padding-right: var(--spacing-2-5); }
        [data-md-px='3'] { padding-left: var(--spacing-3); padding-right: var(--spacing-3); }
        [data-md-px='4'] { padding-left: var(--spacing-4); padding-right: var(--spacing-4); }
        [data-md-px='5'] { padding-left: var(--spacing-5); padding-right: var(--spacing-5); }
        [data-md-px='6'] { padding-left: var(--spacing-6); padding-right: var(--spacing-6); }
        [data-md-px='8'] { padding-left: var(--spacing-8); padding-right: var(--spacing-8); }
        [data-md-px='12'] { padding-left: var(--spacing-12); padding-right: var(--spacing-12); }
        [data-md-px='16'] { padding-left: var(--spacing-16); padding-right: var(--spacing-16); }
        [data-md-px='auto'] { padding-left: var(--spacing-auto); padding-right: var(--spacing-auto); }

        [data-md-py='0'] { padding-top: var(--spacing-0); padding-bottom: var(--spacing-0); }
        [data-md-py='0-5'] { padding-top: var(--spacing-0-5); padding-bottom: var(--spacing-0-5); }
        [data-md-py='1'] { padding-top: var(--spacing-1); padding-bottom: var(--spacing-1); }
        [data-md-py='1-5'] { padding-top: var(--spacing-1-5); padding-bottom: var(--spacing-1-5); }
        [data-md-py='2'] { padding-top: var(--spacing-2); padding-bottom: var(--spacing-2); }
        [data-md-py='2-5'] { padding-top: var(--spacing-2-5); padding-bottom: var(--spacing-2-5); }
        [data-md-py='3'] { padding-top: var(--spacing-3); padding-bottom: var(--spacing-3); }
        [data-md-py='4'] { padding-top: var(--spacing-4); padding-bottom: var(--spacing-4); }
        [data-md-py='5'] { padding-top: var(--spacing-5); padding-bottom: var(--spacing-5); }
        [data-md-py='6'] { padding-top: var(--spacing-6); padding-bottom: var(--spacing-6); }
        [data-md-py='8'] { padding-top: var(--spacing-8); padding-bottom: var(--spacing-8); }
        [data-md-py='12'] { padding-top: var(--spacing-12); padding-bottom: var(--spacing-12); }
        [data-md-py='16'] { padding-top: var(--spacing-16); padding-bottom: var(--spacing-16); }
        [data-md-py='auto'] { padding-top: var(--spacing-auto); padding-bottom: var(--spacing-auto); }

        [data-md-pt='0'] { padding-top: var(--spacing-0); }
        [data-md-pt='0-5'] { padding-top: var(--spacing-0-5); }
        [data-md-pt='1'] { padding-top: var(--spacing-1); }
        [data-md-pt='1-5'] { padding-top: var(--spacing-1-5); }
        [data-md-pt='2'] { padding-top: var(--spacing-2); }
        [data-md-pt='2-5'] { padding-top: var(--spacing-2-5); }
        [data-md-pt='3'] { padding-top: var(--spacing-3); }
        [data-md-pt='4'] { padding-top: var(--spacing-4); }
        [data-md-pt='5'] { padding-top: var(--spacing-5); }
        [data-md-pt='6'] { padding-top: var(--spacing-6); }
        [data-md-pt='8'] { padding-top: var(--spacing-8); }
        [data-md-pt='12'] { padding-top: var(--spacing-12); }
        [data-md-pt='16'] { padding-top: var(--spacing-16); }
        [data-md-pt='auto'] { padding-top: var(--spacing-auto); }

        [data-md-pr='0'] { padding-right: var(--spacing-0); }
        [data-md-pr='0-5'] { padding-right: var(--spacing-0-5); }
        [data-md-pr='1'] { padding-right: var(--spacing-1); }
        [data-md-pr='1-5'] { padding-right: var(--spacing-1-5); }
        [data-md-pr='2'] { padding-right: var(--spacing-2); }
        [data-md-pr='2-5'] { padding-right: var(--spacing-2-5); }
        [data-md-pr='3'] { padding-right: var(--spacing-3); }
        [data-md-pr='4'] { padding-right: var(--spacing-4); }
        [data-md-pr='5'] { padding-right: var(--spacing-5); }
        [data-md-pr='6'] { padding-right: var(--spacing-6); }
        [data-md-pr='8'] { padding-right: var(--spacing-8); }
        [data-md-pr='12'] { padding-right: var(--spacing-12); }
        [data-md-pr='16'] { padding-right: var(--spacing-16); }
        [data-md-pr='auto'] { padding-right: var(--spacing-auto); }

        [data-md-pb='0'] { padding-bottom: var(--spacing-0); }
        [data-md-pb='0-5'] { padding-bottom: var(--spacing-0-5); }
        [data-md-pb='1'] { padding-bottom: var(--spacing-1); }
        [data-md-pb='1-5'] { padding-bottom: var(--spacing-1-5); }
        [data-md-pb='2'] { padding-bottom: var(--spacing-2); }
        [data-md-pb='2-5'] { padding-bottom: var(--spacing-2-5); }
        [data-md-pb='3'] { padding-bottom: var(--spacing-3); }
        [data-md-pb='4'] { padding-bottom: var(--spacing-4); }
        [data-md-pb='5'] { padding-bottom: var(--spacing-5); }
        [data-md-pb='6'] { padding-bottom: var(--spacing-6); }
        [data-md-pb='8'] { padding-bottom: var(--spacing-8); }
        [data-md-pb='12'] { padding-bottom: var(--spacing-12); }
        [data-md-pb='16'] { padding-bottom: var(--spacing-16); }
        [data-md-pb='auto'] { padding-bottom: var(--spacing-auto); }

        [data-md-pl='0'] { padding-left: var(--spacing-0); }
        [data-md-pl='0-5'] { padding-left: var(--spacing-0-5); }
        [data-md-pl='1'] { padding-left: var(--spacing-1); }
        [data-md-pl='1-5'] { padding-left: var(--spacing-1-5); }
        [data-md-pl='2'] { padding-left: var(--spacing-2); }
        [data-md-pl='2-5'] { padding-left: var(--spacing-2-5); }
        [data-md-pl='3'] { padding-left: var(--spacing-3); }
        [data-md-pl='4'] { padding-left: var(--spacing-4); }
        [data-md-pl='5'] { padding-left: var(--spacing-5); }
        [data-md-pl='6'] { padding-left: var(--spacing-6); }
        [data-md-pl='8'] { padding-left: var(--spacing-8); }
        [data-md-pl='12'] { padding-left: var(--spacing-12); }
        [data-md-pl='16'] { padding-left: var(--spacing-16); }
        [data-md-pl='auto'] { padding-left: var(--spacing-auto); }
      }
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
    const generator = new PaddingUtilityGenerator(breakpoints, SpacingTokenGenerator);

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
      [data-pt='0-5'] { padding-top: var(--spacing-0-5); }
      [data-pt='1'] { padding-top: var(--spacing-1); }
      [data-pt='1-5'] { padding-top: var(--spacing-1-5); }
      [data-pt='2'] { padding-top: var(--spacing-2); }
      [data-pt='2-5'] { padding-top: var(--spacing-2-5); }
      [data-pt='3'] { padding-top: var(--spacing-3); }
      [data-pt='4'] { padding-top: var(--spacing-4); }
      [data-pt='5'] { padding-top: var(--spacing-5); }
      [data-pt='6'] { padding-top: var(--spacing-6); }
      [data-pt='8'] { padding-top: var(--spacing-8); }
      [data-pt='12'] { padding-top: var(--spacing-12); }
      [data-pt='16'] { padding-top: var(--spacing-16); }
      [data-pt='auto'] { padding-top: var(--spacing-auto); }
      [data-pt='huge'] { padding-top: var(--spacing-huge); }

      [data-pr='0'] { padding-right: var(--spacing-0); }
      [data-pr='0-5'] { padding-right: var(--spacing-0-5); }
      [data-pr='1'] { padding-right: var(--spacing-1); }
      [data-pr='1-5'] { padding-right: var(--spacing-1-5); }
      [data-pr='2'] { padding-right: var(--spacing-2); }
      [data-pr='2-5'] { padding-right: var(--spacing-2-5); }
      [data-pr='3'] { padding-right: var(--spacing-3); }
      [data-pr='4'] { padding-right: var(--spacing-4); }
      [data-pr='5'] { padding-right: var(--spacing-5); }
      [data-pr='6'] { padding-right: var(--spacing-6); }
      [data-pr='8'] { padding-right: var(--spacing-8); }
      [data-pr='12'] { padding-right: var(--spacing-12); }
      [data-pr='16'] { padding-right: var(--spacing-16); }
      [data-pr='auto'] { padding-right: var(--spacing-auto); }
      [data-pr='huge'] { padding-right: var(--spacing-huge); }

      [data-pb='0'] { padding-bottom: var(--spacing-0); }
      [data-pb='0-5'] { padding-bottom: var(--spacing-0-5); }
      [data-pb='1'] { padding-bottom: var(--spacing-1); }
      [data-pb='1-5'] { padding-bottom: var(--spacing-1-5); }
      [data-pb='2'] { padding-bottom: var(--spacing-2); }
      [data-pb='2-5'] { padding-bottom: var(--spacing-2-5); }
      [data-pb='3'] { padding-bottom: var(--spacing-3); }
      [data-pb='4'] { padding-bottom: var(--spacing-4); }
      [data-pb='5'] { padding-bottom: var(--spacing-5); }
      [data-pb='6'] { padding-bottom: var(--spacing-6); }
      [data-pb='8'] { padding-bottom: var(--spacing-8); }
      [data-pb='12'] { padding-bottom: var(--spacing-12); }
      [data-pb='16'] { padding-bottom: var(--spacing-16); }
      [data-pb='auto'] { padding-bottom: var(--spacing-auto); }
      [data-pb='huge'] { padding-bottom: var(--spacing-huge); }

      [data-pl='0'] { padding-left: var(--spacing-0); }
      [data-pl='0-5'] { padding-left: var(--spacing-0-5); }
      [data-pl='1'] { padding-left: var(--spacing-1); }
      [data-pl='1-5'] { padding-left: var(--spacing-1-5); }
      [data-pl='2'] { padding-left: var(--spacing-2); }
      [data-pl='2-5'] { padding-left: var(--spacing-2-5); }
      [data-pl='3'] { padding-left: var(--spacing-3); }
      [data-pl='4'] { padding-left: var(--spacing-4); }
      [data-pl='5'] { padding-left: var(--spacing-5); }
      [data-pl='6'] { padding-left: var(--spacing-6); }
      [data-pl='8'] { padding-left: var(--spacing-8); }
      [data-pl='12'] { padding-left: var(--spacing-12); }
      [data-pl='16'] { padding-left: var(--spacing-16); }
      [data-pl='auto'] { padding-left: var(--spacing-auto); }
      [data-pl='huge'] { padding-left: var(--spacing-huge); }

      @media (max-width: 768px) {
        [data-md-p='0'] { padding: var(--spacing-0); }
        [data-md-p='0-5'] { padding: var(--spacing-0-5); }
        [data-md-p='1'] { padding: var(--spacing-1); }
        [data-md-p='1-5'] { padding: var(--spacing-1-5); }
        [data-md-p='2'] { padding: var(--spacing-2); }
        [data-md-p='2-5'] { padding: var(--spacing-2-5); }
        [data-md-p='3'] { padding: var(--spacing-3); }
        [data-md-p='4'] { padding: var(--spacing-4); }
        [data-md-p='5'] { padding: var(--spacing-5); }
        [data-md-p='6'] { padding: var(--spacing-6); }
        [data-md-p='8'] { padding: var(--spacing-8); }
        [data-md-p='12'] { padding: var(--spacing-12); }
        [data-md-p='16'] { padding: var(--spacing-16); }
        [data-md-p='auto'] { padding: var(--spacing-auto); }
        [data-md-p='huge'] { padding: var(--spacing-huge); }

        [data-md-px='0'] { padding-left: var(--spacing-0); padding-right: var(--spacing-0); }
        [data-md-px='0-5'] { padding-left: var(--spacing-0-5); padding-right: var(--spacing-0-5); }
        [data-md-px='1'] { padding-left: var(--spacing-1); padding-right: var(--spacing-1); }
        [data-md-px='1-5'] { padding-left: var(--spacing-1-5); padding-right: var(--spacing-1-5); }
        [data-md-px='2'] { padding-left: var(--spacing-2); padding-right: var(--spacing-2); }
        [data-md-px='2-5'] { padding-left: var(--spacing-2-5); padding-right: var(--spacing-2-5); }
        [data-md-px='3'] { padding-left: var(--spacing-3); padding-right: var(--spacing-3); }
        [data-md-px='4'] { padding-left: var(--spacing-4); padding-right: var(--spacing-4); }
        [data-md-px='5'] { padding-left: var(--spacing-5); padding-right: var(--spacing-5); }
        [data-md-px='6'] { padding-left: var(--spacing-6); padding-right: var(--spacing-6); }
        [data-md-px='8'] { padding-left: var(--spacing-8); padding-right: var(--spacing-8); }
        [data-md-px='12'] { padding-left: var(--spacing-12); padding-right: var(--spacing-12); }
        [data-md-px='16'] { padding-left: var(--spacing-16); padding-right: var(--spacing-16); }
        [data-md-px='auto'] { padding-left: var(--spacing-auto); padding-right: var(--spacing-auto); }
        [data-md-px='huge'] { padding-left: var(--spacing-huge); padding-right: var(--spacing-huge); }

        [data-md-py='0'] { padding-top: var(--spacing-0); padding-bottom: var(--spacing-0); }
        [data-md-py='0-5'] { padding-top: var(--spacing-0-5); padding-bottom: var(--spacing-0-5); }
        [data-md-py='1'] { padding-top: var(--spacing-1); padding-bottom: var(--spacing-1); }
        [data-md-py='1-5'] { padding-top: var(--spacing-1-5); padding-bottom: var(--spacing-1-5); }
        [data-md-py='2'] { padding-top: var(--spacing-2); padding-bottom: var(--spacing-2); }
        [data-md-py='2-5'] { padding-top: var(--spacing-2-5); padding-bottom: var(--spacing-2-5); }
        [data-md-py='3'] { padding-top: var(--spacing-3); padding-bottom: var(--spacing-3); }
        [data-md-py='4'] { padding-top: var(--spacing-4); padding-bottom: var(--spacing-4); }
        [data-md-py='5'] { padding-top: var(--spacing-5); padding-bottom: var(--spacing-5); }
        [data-md-py='6'] { padding-top: var(--spacing-6); padding-bottom: var(--spacing-6); }
        [data-md-py='8'] { padding-top: var(--spacing-8); padding-bottom: var(--spacing-8); }
        [data-md-py='12'] { padding-top: var(--spacing-12); padding-bottom: var(--spacing-12); }
        [data-md-py='16'] { padding-top: var(--spacing-16); padding-bottom: var(--spacing-16); }
        [data-md-py='auto'] { padding-top: var(--spacing-auto); padding-bottom: var(--spacing-auto); }
        [data-md-py='huge'] { padding-top: var(--spacing-huge); padding-bottom: var(--spacing-huge); }

        [data-md-pt='0'] { padding-top: var(--spacing-0); }
        [data-md-pt='0-5'] { padding-top: var(--spacing-0-5); }
        [data-md-pt='1'] { padding-top: var(--spacing-1); }
        [data-md-pt='1-5'] { padding-top: var(--spacing-1-5); }
        [data-md-pt='2'] { padding-top: var(--spacing-2); }
        [data-md-pt='2-5'] { padding-top: var(--spacing-2-5); }
        [data-md-pt='3'] { padding-top: var(--spacing-3); }
        [data-md-pt='4'] { padding-top: var(--spacing-4); }
        [data-md-pt='5'] { padding-top: var(--spacing-5); }
        [data-md-pt='6'] { padding-top: var(--spacing-6); }
        [data-md-pt='8'] { padding-top: var(--spacing-8); }
        [data-md-pt='12'] { padding-top: var(--spacing-12); }
        [data-md-pt='16'] { padding-top: var(--spacing-16); }
        [data-md-pt='auto'] { padding-top: var(--spacing-auto); }
        [data-md-pt='huge'] { padding-top: var(--spacing-huge); }

        [data-md-pr='0'] { padding-right: var(--spacing-0); }
        [data-md-pr='0-5'] { padding-right: var(--spacing-0-5); }
        [data-md-pr='1'] { padding-right: var(--spacing-1); }
        [data-md-pr='1-5'] { padding-right: var(--spacing-1-5); }
        [data-md-pr='2'] { padding-right: var(--spacing-2); }
        [data-md-pr='2-5'] { padding-right: var(--spacing-2-5); }
        [data-md-pr='3'] { padding-right: var(--spacing-3); }
        [data-md-pr='4'] { padding-right: var(--spacing-4); }
        [data-md-pr='5'] { padding-right: var(--spacing-5); }
        [data-md-pr='6'] { padding-right: var(--spacing-6); }
        [data-md-pr='8'] { padding-right: var(--spacing-8); }
        [data-md-pr='12'] { padding-right: var(--spacing-12); }
        [data-md-pr='16'] { padding-right: var(--spacing-16); }
        [data-md-pr='auto'] { padding-right: var(--spacing-auto); }
        [data-md-pr='huge'] { padding-right: var(--spacing-huge); }

        [data-md-pb='0'] { padding-bottom: var(--spacing-0); }
        [data-md-pb='0-5'] { padding-bottom: var(--spacing-0-5); }
        [data-md-pb='1'] { padding-bottom: var(--spacing-1); }
        [data-md-pb='1-5'] { padding-bottom: var(--spacing-1-5); }
        [data-md-pb='2'] { padding-bottom: var(--spacing-2); }
        [data-md-pb='2-5'] { padding-bottom: var(--spacing-2-5); }
        [data-md-pb='3'] { padding-bottom: var(--spacing-3); }
        [data-md-pb='4'] { padding-bottom: var(--spacing-4); }
        [data-md-pb='5'] { padding-bottom: var(--spacing-5); }
        [data-md-pb='6'] { padding-bottom: var(--spacing-6); }
        [data-md-pb='8'] { padding-bottom: var(--spacing-8); }
        [data-md-pb='12'] { padding-bottom: var(--spacing-12); }
        [data-md-pb='16'] { padding-bottom: var(--spacing-16); }
        [data-md-pb='auto'] { padding-bottom: var(--spacing-auto); }
        [data-md-pb='huge'] { padding-bottom: var(--spacing-huge); }

        [data-md-pl='0'] { padding-left: var(--spacing-0); }
        [data-md-pl='0-5'] { padding-left: var(--spacing-0-5); }
        [data-md-pl='1'] { padding-left: var(--spacing-1); }
        [data-md-pl='1-5'] { padding-left: var(--spacing-1-5); }
        [data-md-pl='2'] { padding-left: var(--spacing-2); }
        [data-md-pl='2-5'] { padding-left: var(--spacing-2-5); }
        [data-md-pl='3'] { padding-left: var(--spacing-3); }
        [data-md-pl='4'] { padding-left: var(--spacing-4); }
        [data-md-pl='5'] { padding-left: var(--spacing-5); }
        [data-md-pl='6'] { padding-left: var(--spacing-6); }
        [data-md-pl='8'] { padding-left: var(--spacing-8); }
        [data-md-pl='12'] { padding-left: var(--spacing-12); }
        [data-md-pl='16'] { padding-left: var(--spacing-16); }
        [data-md-pl='auto'] { padding-left: var(--spacing-auto); }
        [data-md-pl='huge'] { padding-left: var(--spacing-huge); }
      }
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

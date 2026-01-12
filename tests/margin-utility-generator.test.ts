import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { MarginUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("MarginUtilityGenerator", () => {
  test("basic usage", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator();
    const generator = new MarginUtilityGenerator(breakpoints, SpacingTokenGenerator);

    expect(generator.name).toEqual("Margin utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-m='0'] { margin: var(--spacing-0); }
      [data-m='0-5'] { margin: var(--spacing-0-5); }
      [data-m='1'] { margin: var(--spacing-1); }
      [data-m='1-5'] { margin: var(--spacing-1-5); }
      [data-m='2'] { margin: var(--spacing-2); }
      [data-m='2-5'] { margin: var(--spacing-2-5); }
      [data-m='3'] { margin: var(--spacing-3); }
      [data-m='4'] { margin: var(--spacing-4); }
      [data-m='5'] { margin: var(--spacing-5); }
      [data-m='6'] { margin: var(--spacing-6); }
      [data-m='8'] { margin: var(--spacing-8); }
      [data-m='12'] { margin: var(--spacing-12); }
      [data-m='16'] { margin: var(--spacing-16); }
      [data-m='auto'] { margin: var(--spacing-auto); }

      [data-mx='0'] { margin-left: var(--spacing-0); margin-right: var(--spacing-0); }
      [data-mx='0-5'] { margin-left: var(--spacing-0-5); margin-right: var(--spacing-0-5); }
      [data-mx='1'] { margin-left: var(--spacing-1); margin-right: var(--spacing-1); }
      [data-mx='1-5'] { margin-left: var(--spacing-1-5); margin-right: var(--spacing-1-5); }
      [data-mx='2'] { margin-left: var(--spacing-2); margin-right: var(--spacing-2); }
      [data-mx='2-5'] { margin-left: var(--spacing-2-5); margin-right: var(--spacing-2-5); }
      [data-mx='3'] { margin-left: var(--spacing-3); margin-right: var(--spacing-3); }
      [data-mx='4'] { margin-left: var(--spacing-4); margin-right: var(--spacing-4); }
      [data-mx='5'] { margin-left: var(--spacing-5); margin-right: var(--spacing-5); }
      [data-mx='6'] { margin-left: var(--spacing-6); margin-right: var(--spacing-6); }
      [data-mx='8'] { margin-left: var(--spacing-8); margin-right: var(--spacing-8); }
      [data-mx='12'] { margin-left: var(--spacing-12); margin-right: var(--spacing-12); }
      [data-mx='16'] { margin-left: var(--spacing-16); margin-right: var(--spacing-16); }
      [data-mx='auto'] { margin-left: var(--spacing-auto); margin-right: var(--spacing-auto); }

      [data-my='0'] { margin-top: var(--spacing-0); margin-bottom: var(--spacing-0); }
      [data-my='0-5'] { margin-top: var(--spacing-0-5); margin-bottom: var(--spacing-0-5); }
      [data-my='1'] { margin-top: var(--spacing-1); margin-bottom: var(--spacing-1); }
      [data-my='1-5'] { margin-top: var(--spacing-1-5); margin-bottom: var(--spacing-1-5); }
      [data-my='2'] { margin-top: var(--spacing-2); margin-bottom: var(--spacing-2); }
      [data-my='2-5'] { margin-top: var(--spacing-2-5); margin-bottom: var(--spacing-2-5); }
      [data-my='3'] { margin-top: var(--spacing-3); margin-bottom: var(--spacing-3); }
      [data-my='4'] { margin-top: var(--spacing-4); margin-bottom: var(--spacing-4); }
      [data-my='5'] { margin-top: var(--spacing-5); margin-bottom: var(--spacing-5); }
      [data-my='6'] { margin-top: var(--spacing-6); margin-bottom: var(--spacing-6); }
      [data-my='8'] { margin-top: var(--spacing-8); margin-bottom: var(--spacing-8); }
      [data-my='12'] { margin-top: var(--spacing-12); margin-bottom: var(--spacing-12); }
      [data-my='16'] { margin-top: var(--spacing-16); margin-bottom: var(--spacing-16); }
      [data-my='auto'] { margin-top: var(--spacing-auto); margin-bottom: var(--spacing-auto); }

      [data-mt='0'] { margin-top: var(--spacing-0); }
      [data-mt='0-5'] { margin-top: var(--spacing-0-5); }
      [data-mt='1'] { margin-top: var(--spacing-1); }
      [data-mt='1-5'] { margin-top: var(--spacing-1-5); }
      [data-mt='2'] { margin-top: var(--spacing-2); }
      [data-mt='2-5'] { margin-top: var(--spacing-2-5); }
      [data-mt='3'] { margin-top: var(--spacing-3); }
      [data-mt='4'] { margin-top: var(--spacing-4); }
      [data-mt='5'] { margin-top: var(--spacing-5); }
      [data-mt='6'] { margin-top: var(--spacing-6); }
      [data-mt='8'] { margin-top: var(--spacing-8); }
      [data-mt='12'] { margin-top: var(--spacing-12); }
      [data-mt='16'] { margin-top: var(--spacing-16); }
      [data-mt='auto'] { margin-top: var(--spacing-auto); }

      [data-mr='0'] { margin-right: var(--spacing-0); }
      [data-mr='0-5'] { margin-right: var(--spacing-0-5); }
      [data-mr='1'] { margin-right: var(--spacing-1); }
      [data-mr='1-5'] { margin-right: var(--spacing-1-5); }
      [data-mr='2'] { margin-right: var(--spacing-2); }
      [data-mr='2-5'] { margin-right: var(--spacing-2-5); }
      [data-mr='3'] { margin-right: var(--spacing-3); }
      [data-mr='4'] { margin-right: var(--spacing-4); }
      [data-mr='5'] { margin-right: var(--spacing-5); }
      [data-mr='6'] { margin-right: var(--spacing-6); }
      [data-mr='8'] { margin-right: var(--spacing-8); }
      [data-mr='12'] { margin-right: var(--spacing-12); }
      [data-mr='16'] { margin-right: var(--spacing-16); }
      [data-mr='auto'] { margin-right: var(--spacing-auto); }

      [data-mb='0'] { margin-bottom: var(--spacing-0); }
      [data-mb='0-5'] { margin-bottom: var(--spacing-0-5); }
      [data-mb='1'] { margin-bottom: var(--spacing-1); }
      [data-mb='1-5'] { margin-bottom: var(--spacing-1-5); }
      [data-mb='2'] { margin-bottom: var(--spacing-2); }
      [data-mb='2-5'] { margin-bottom: var(--spacing-2-5); }
      [data-mb='3'] { margin-bottom: var(--spacing-3); }
      [data-mb='4'] { margin-bottom: var(--spacing-4); }
      [data-mb='5'] { margin-bottom: var(--spacing-5); }
      [data-mb='6'] { margin-bottom: var(--spacing-6); }
      [data-mb='8'] { margin-bottom: var(--spacing-8); }
      [data-mb='12'] { margin-bottom: var(--spacing-12); }
      [data-mb='16'] { margin-bottom: var(--spacing-16); }
      [data-mb='auto'] { margin-bottom: var(--spacing-auto); }

      [data-ml='0'] { margin-left: var(--spacing-0); }
      [data-ml='0-5'] { margin-left: var(--spacing-0-5); }
      [data-ml='1'] { margin-left: var(--spacing-1); }
      [data-ml='1-5'] { margin-left: var(--spacing-1-5); }
      [data-ml='2'] { margin-left: var(--spacing-2); }
      [data-ml='2-5'] { margin-left: var(--spacing-2-5); }
      [data-ml='3'] { margin-left: var(--spacing-3); }
      [data-ml='4'] { margin-left: var(--spacing-4); }
      [data-ml='5'] { margin-left: var(--spacing-5); }
      [data-ml='6'] { margin-left: var(--spacing-6); }
      [data-ml='8'] { margin-left: var(--spacing-8); }
      [data-ml='12'] { margin-left: var(--spacing-12); }
      [data-ml='16'] { margin-left: var(--spacing-16); }
      [data-ml='auto'] { margin-left: var(--spacing-auto); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-m"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-mt"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-mr"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-mb"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-ml"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-mx"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
      "data-my"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto";
    `);
  });

  test("with overrides", () => {
    const SpacingTokenGenerator = new Tokens.SpacingTokenGenerator({ "spacing-huge": "100rem" });
    const generator = new MarginUtilityGenerator(breakpoints, SpacingTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-m='0'] { margin: var(--spacing-0); }
      [data-m='0-5'] { margin: var(--spacing-0-5); }
      [data-m='1'] { margin: var(--spacing-1); }
      [data-m='1-5'] { margin: var(--spacing-1-5); }
      [data-m='2'] { margin: var(--spacing-2); }
      [data-m='2-5'] { margin: var(--spacing-2-5); }
      [data-m='3'] { margin: var(--spacing-3); }
      [data-m='4'] { margin: var(--spacing-4); }
      [data-m='5'] { margin: var(--spacing-5); }
      [data-m='6'] { margin: var(--spacing-6); }
      [data-m='8'] { margin: var(--spacing-8); }
      [data-m='12'] { margin: var(--spacing-12); }
      [data-m='16'] { margin: var(--spacing-16); }
      [data-m='auto'] { margin: var(--spacing-auto); }
      [data-m='huge'] { margin: var(--spacing-huge); }

      [data-mx='0'] { margin-left: var(--spacing-0); margin-right: var(--spacing-0); }
      [data-mx='0-5'] { margin-left: var(--spacing-0-5); margin-right: var(--spacing-0-5); }
      [data-mx='1'] { margin-left: var(--spacing-1); margin-right: var(--spacing-1); }
      [data-mx='1-5'] { margin-left: var(--spacing-1-5); margin-right: var(--spacing-1-5); }
      [data-mx='2'] { margin-left: var(--spacing-2); margin-right: var(--spacing-2); }
      [data-mx='2-5'] { margin-left: var(--spacing-2-5); margin-right: var(--spacing-2-5); }
      [data-mx='3'] { margin-left: var(--spacing-3); margin-right: var(--spacing-3); }
      [data-mx='4'] { margin-left: var(--spacing-4); margin-right: var(--spacing-4); }
      [data-mx='5'] { margin-left: var(--spacing-5); margin-right: var(--spacing-5); }
      [data-mx='6'] { margin-left: var(--spacing-6); margin-right: var(--spacing-6); }
      [data-mx='8'] { margin-left: var(--spacing-8); margin-right: var(--spacing-8); }
      [data-mx='12'] { margin-left: var(--spacing-12); margin-right: var(--spacing-12); }
      [data-mx='16'] { margin-left: var(--spacing-16); margin-right: var(--spacing-16); }
      [data-mx='auto'] { margin-left: var(--spacing-auto); margin-right: var(--spacing-auto); }
      [data-mx='huge'] { margin-left: var(--spacing-huge); margin-right: var(--spacing-huge); }

      [data-my='0'] { margin-top: var(--spacing-0); margin-bottom: var(--spacing-0); }
      [data-my='0-5'] { margin-top: var(--spacing-0-5); margin-bottom: var(--spacing-0-5); }
      [data-my='1'] { margin-top: var(--spacing-1); margin-bottom: var(--spacing-1); }
      [data-my='1-5'] { margin-top: var(--spacing-1-5); margin-bottom: var(--spacing-1-5); }
      [data-my='2'] { margin-top: var(--spacing-2); margin-bottom: var(--spacing-2); }
      [data-my='2-5'] { margin-top: var(--spacing-2-5); margin-bottom: var(--spacing-2-5); }
      [data-my='3'] { margin-top: var(--spacing-3); margin-bottom: var(--spacing-3); }
      [data-my='4'] { margin-top: var(--spacing-4); margin-bottom: var(--spacing-4); }
      [data-my='5'] { margin-top: var(--spacing-5); margin-bottom: var(--spacing-5); }
      [data-my='6'] { margin-top: var(--spacing-6); margin-bottom: var(--spacing-6); }
      [data-my='8'] { margin-top: var(--spacing-8); margin-bottom: var(--spacing-8); }
      [data-my='12'] { margin-top: var(--spacing-12); margin-bottom: var(--spacing-12); }
      [data-my='16'] { margin-top: var(--spacing-16); margin-bottom: var(--spacing-16); }
      [data-my='auto'] { margin-top: var(--spacing-auto); margin-bottom: var(--spacing-auto); }
      [data-my='huge'] { margin-top: var(--spacing-huge); margin-bottom: var(--spacing-huge); }

      [data-mt='0'] { margin-top: var(--spacing-0); }
      [data-mt='0-5'] { margin-top: var(--spacing-0-5); }
      [data-mt='1'] { margin-top: var(--spacing-1); }
      [data-mt='1-5'] { margin-top: var(--spacing-1-5); }
      [data-mt='2'] { margin-top: var(--spacing-2); }
      [data-mt='2-5'] { margin-top: var(--spacing-2-5); }
      [data-mt='3'] { margin-top: var(--spacing-3); }
      [data-mt='4'] { margin-top: var(--spacing-4); }
      [data-mt='5'] { margin-top: var(--spacing-5); }
      [data-mt='6'] { margin-top: var(--spacing-6); }
      [data-mt='8'] { margin-top: var(--spacing-8); }
      [data-mt='12'] { margin-top: var(--spacing-12); }
      [data-mt='16'] { margin-top: var(--spacing-16); }
      [data-mt='auto'] { margin-top: var(--spacing-auto); }
      [data-mt='huge'] { margin-top: var(--spacing-huge); }

      [data-mr='0'] { margin-right: var(--spacing-0); }
      [data-mr='0-5'] { margin-right: var(--spacing-0-5); }
      [data-mr='1'] { margin-right: var(--spacing-1); }
      [data-mr='1-5'] { margin-right: var(--spacing-1-5); }
      [data-mr='2'] { margin-right: var(--spacing-2); }
      [data-mr='2-5'] { margin-right: var(--spacing-2-5); }
      [data-mr='3'] { margin-right: var(--spacing-3); }
      [data-mr='4'] { margin-right: var(--spacing-4); }
      [data-mr='5'] { margin-right: var(--spacing-5); }
      [data-mr='6'] { margin-right: var(--spacing-6); }
      [data-mr='8'] { margin-right: var(--spacing-8); }
      [data-mr='12'] { margin-right: var(--spacing-12); }
      [data-mr='16'] { margin-right: var(--spacing-16); }
      [data-mr='auto'] { margin-right: var(--spacing-auto); }
      [data-mr='huge'] { margin-right: var(--spacing-huge); }

      [data-mb='0'] { margin-bottom: var(--spacing-0); }
      [data-mb='0-5'] { margin-bottom: var(--spacing-0-5); }
      [data-mb='1'] { margin-bottom: var(--spacing-1); }
      [data-mb='1-5'] { margin-bottom: var(--spacing-1-5); }
      [data-mb='2'] { margin-bottom: var(--spacing-2); }
      [data-mb='2-5'] { margin-bottom: var(--spacing-2-5); }
      [data-mb='3'] { margin-bottom: var(--spacing-3); }
      [data-mb='4'] { margin-bottom: var(--spacing-4); }
      [data-mb='5'] { margin-bottom: var(--spacing-5); }
      [data-mb='6'] { margin-bottom: var(--spacing-6); }
      [data-mb='8'] { margin-bottom: var(--spacing-8); }
      [data-mb='12'] { margin-bottom: var(--spacing-12); }
      [data-mb='16'] { margin-bottom: var(--spacing-16); }
      [data-mb='auto'] { margin-bottom: var(--spacing-auto); }
      [data-mb='huge'] { margin-bottom: var(--spacing-huge); }

      [data-ml='0'] { margin-left: var(--spacing-0); }
      [data-ml='0-5'] { margin-left: var(--spacing-0-5); }
      [data-ml='1'] { margin-left: var(--spacing-1); }
      [data-ml='1-5'] { margin-left: var(--spacing-1-5); }
      [data-ml='2'] { margin-left: var(--spacing-2); }
      [data-ml='2-5'] { margin-left: var(--spacing-2-5); }
      [data-ml='3'] { margin-left: var(--spacing-3); }
      [data-ml='4'] { margin-left: var(--spacing-4); }
      [data-ml='5'] { margin-left: var(--spacing-5); }
      [data-ml='6'] { margin-left: var(--spacing-6); }
      [data-ml='8'] { margin-left: var(--spacing-8); }
      [data-ml='12'] { margin-left: var(--spacing-12); }
      [data-ml='16'] { margin-left: var(--spacing-16); }
      [data-ml='auto'] { margin-left: var(--spacing-auto); }
      [data-ml='huge'] { margin-left: var(--spacing-huge); }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-m"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-mt"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-mr"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-mb"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-ml"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-mx"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
      "data-my"?: "0" | "0-5" | "1" | "1-5" | "2" | "2-5" | "3" | "4" | "5" | "6" | "8" | "12" | "16" | "auto" | "huge";
    `);
  });
});

import { describe, expect, jest, spyOn, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { GenerateCSS } from "../src/generate-css";
import * as TokensGenerators from "../src/tokens";
import * as UtilityGenerators from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

const BackdropsTokenGenerator = new TokensGenerators.BackdropsTokenGenerator();
const AxisPlacementUtilityGenerator = new UtilityGenerators.AxisPlacementUtilityGenerator(breakpoints);

const generators = [BackdropsTokenGenerator];
const tokens = [AxisPlacementUtilityGenerator];

describe("GenerateCSS", async () => {
  test("process", async () => {
    // @ts-expect-error
    using bunFile = spyOn(Bun, "file").mockImplementation(() => ({ text: () => "" }));
    using bunWrite = spyOn(Bun, "write").mockImplementation(jest.fn());

    await GenerateCSS.process(generators, tokens);

    expect(bunFile.mock.calls.map((call) => call[0])).toEqual([
      "src/defaults.css",

      "src/ui/button.css",
      "src/ui/input.css",
      "src/ui/label.css",
      "src/ui/textarea.css",
      "src/ui/select.css",
      "src/ui/prose.css",
      "src/ui/visually-hidden.css",
      "src/ui/card.css",
      "src/ui/badge.css",
      "src/ui/link.css",
      "src/ui/checkbox.css",
      "src/ui/range.css",

      "src/animations/grow-fade-in.css",
      "src/animations/shrink-fade-out.css",

      "src/interactions/grow.css",
      "src/interactions/rotate-into-focus.css",
      "src/interactions/subtle-scale.css",
    ]);

    expect(bunWrite.mock.calls[0][0]).toEqual("dist/main.css");
    expect(bunWrite.mock.calls[0][1]).toEqualIgnoringWhitespace(`
      @import "../src/normalize.css" layer(reset);

      :root {
        --backdrop-none: none;
        --backdrop-weak: rgba(0 0 0 / 0.35);
        --backdrop-medium: rgba(0 0 0 / 0.6);
        --backdrop-strong: rgba(0 0 0 / 0.75);
        --backdrop-stronger: rgba(0 0 0 / 0.85);
      }

      @layer defaults {}

      @layer components {}

      @layer utilities {
        [data-main='start'] { justify-content: flex-start; }
        [data-main='end'] { justify-content: flex-end; }
        [data-main='around'] { justify-content: space-around; }
        [data-main='evenly'] { justify-content: space-evenly; }
        [data-main='between'] { justify-content: space-between; }
        [data-main='center'] { justify-content: center; }
        [data-main='baseline'] { justify-content: baseline; }

        [data-cross='start'] { align-items: flex-start; }
        [data-cross='end'] { align-items: flex-end; }
        [data-cross='around'] { align-items: space-around; }
        [data-cross='evenly'] { align-items: space-evenly; }
        [data-cross='between'] { align-items: space-between; }
        [data-cross='center'] { align-items: center; }
        [data-cross='baseline'] { align-items: baseline; }

        @media (max-width: 768px) {
          [data-md-main='start'] { justify-content: flex-start; }
          [data-md-main='end'] { justify-content: flex-end; }
          [data-md-main='around'] { justify-content: space-around; }
          [data-md-main='evenly'] { justify-content: space-evenly; }
          [data-md-main='between'] { justify-content: space-between; }
          [data-md-main='center'] { justify-content: center; }
          [data-md-main='baseline'] { justify-content: baseline; }

          [data-md-cross='start'] { align-items: flex-start; }
          [data-md-cross='end'] { align-items: flex-end; }
          [data-md-cross='around'] { align-items: space-around; }
          [data-md-cross='evenly'] { align-items: space-evenly; }
          [data-md-cross='between'] { align-items: space-between; }
          [data-md-cross='center'] { align-items: center; }
          [data-md-cross='baseline'] { align-items: baseline; }
        }
      }
    `);
  });
});

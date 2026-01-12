import { describe, expect, jest, spyOn, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { GenerateCSS } from "../src/generate-css";
import * as TokensGenerators from "../src/tokens";
import * as UtilityGenerators from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

const BackdropsTokenGenerator = new TokensGenerators.BackdropsTokenGenerator();
const AxisPlacementUtilityGenerator = new UtilityGenerators.AxisPlacementUtilityGenerator(breakpoints);

const generators = [BackdropsTokenGenerator];
const tokens = [AxisPlacementUtilityGenerator];

describe("GenerateCSS", async () => {
  test("process", async () => {
    // @ts-expect-error
    const bunFile = spyOn(Bun, "file").mockImplementation(() => ({ text: () => "" }));
    const bunWrite = spyOn(Bun, "write").mockImplementation(jest.fn());

    await GenerateCSS.process(generators, tokens);

    expect(bunFile).toHaveBeenCalledTimes(16);
    // @ts-expect-error
    expect(bunFile.mock.calls[0][0]).toEqual("src/ui/button.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[1][0]).toEqual("src/ui/input.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[2][0]).toEqual("src/ui/label.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[3][0]).toEqual("src/ui/textarea.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[4][0]).toEqual("src/ui/select.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[5][0]).toEqual("src/ui/visually-hidden.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[6][0]).toEqual("src/ui/badge.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[7][0]).toEqual("src/ui/link.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[8][0]).toEqual("src/ui/checkbox.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[9][0]).toEqual("src/ui/file-explorer.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[10][0]).toEqual("src/ui/range.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[11][0]).toEqual("src/animations/grow-fade-in.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[12][0]).toEqual("src/animations/shrink-fade-out.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[13][0]).toEqual("src/interactions/grow.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[14][0]).toEqual("src/interactions/rotate-into-focus.css");
    // @ts-expect-error
    expect(bunFile.mock.calls[15][0]).toEqual("src/interactions/subtle-scale.css");

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

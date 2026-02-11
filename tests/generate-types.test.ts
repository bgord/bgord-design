import { describe, expect, jest, spyOn, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { GenerateTypes } from "../src/generate-types";
import * as UtilityGenerators from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

const AxisPlacementUtilityGenerator = new UtilityGenerators.AxisPlacementUtilityGenerator(breakpoints);

const generators = [AxisPlacementUtilityGenerator];

describe("GenerateTypes", async () => {
  test("process", async () => {
    // @ts-expect-error
    using _ = spyOn(Bun, "file").mockImplementation(() => ({}));
    using bunWrite = spyOn(Bun, "write").mockImplementation(jest.fn());

    await GenerateTypes.process(generators);

    expect(bunWrite.mock.calls[0][0]).toEqual("dist/index.d.ts");
    expect(bunWrite.mock.calls[0][1]).toEqualIgnoringWhitespace(`
      export * from "./lib";
      export {};
      import "react";

      declare module "react" {
        interface HTMLAttributes<T> {
          "data-main"?: "start" | "end" | "around" | "evenly" | "between" | "center" | "baseline";
          "data-cross"?: "start" | "end" | "around" | "evenly" | "between" | "center" | "baseline";
          "data-md-main"?: "start" | "end" | "around" | "evenly" | "between" | "center" | "baseline";
          "data-md-cross"?: "start" | "end" | "around" | "evenly" | "between" | "center" | "baseline";
          "data-animation"?: "grow-fade-in" | "shrink-fade-out";
          "data-interaction"?: "grow" | "rotate-into-focus" | "subtle-scale";
        }
      }
    `);
  });
});

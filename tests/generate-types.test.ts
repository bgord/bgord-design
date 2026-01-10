import { describe, expect, jest, spyOn, test } from "bun:test";
import { GenerateTypes } from "../src/generate-types";
import * as UtilityGenerators from "../src/utilities";

const AxisPlacementUtilityGenerator = new UtilityGenerators.AxisPlacementUtilityGenerator();

const generators = [AxisPlacementUtilityGenerator];

describe("GenerateTypes", async () => {
  test("process", async () => {
    // @ts-expect-error
    spyOn(Bun, "file").mockImplementation(() => ({}));
    const bunWrite = spyOn(Bun, "write").mockImplementation(jest.fn());

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
          "data-animation"?: "grow-fade-in" | "shrink-fade-out";
          "data-interaction"?: "grow" | "rotate-into-focus" | "subtle-scale";
        }
      }
    `);
  });
});

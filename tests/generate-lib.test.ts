import { describe, expect, jest, spyOn, test } from "bun:test";
import { GenerateLib } from "../src/generate-lib";
import * as TokensGenerators from "../src/tokens";

const BackdropsTokenGenerator = new TokensGenerators.BackdropsTokenGenerator();

const generators = [BackdropsTokenGenerator];

describe("GenerateLib", async () => {
  test("process", async () => {
    // @ts-expect-error
    spyOn(Bun, "file").mockImplementation(() => ({}));
    const bunWrite = spyOn(Bun, "write").mockImplementation(jest.fn());

    await GenerateLib.process(generators);

    expect(bunWrite.mock.calls[0][0]).toEqual("dist/lib.ts");
    expect(bunWrite.mock.calls[0][1]).toEqualIgnoringWhitespace(`
      export const BackdropsTokens = {
        "backdrop-none": "none",
        "backdrop-weak": "rgba(0 0 0 / 0.35)",
        "backdrop-medium": "rgba(0 0 0 / 0.6)",
        "backdrop-strong": "rgba(0 0 0 / 0.75)",
        "backdrop-stronger": "rgba(0 0 0 / 0.85)"
      } as const;

      export type BackdropsTokenType = keyof typeof BackdropsTokens;
    `);
  });
});

import { describe, expect, test } from "bun:test";
import { MotionTokenGenerator } from "../src/tokens";

describe("MotionTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new MotionTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
        --motion-instant: 75ms;
        --motion-fast: 150ms;
        --motion-medium: 300ms;
        --motion-slow: 400ms;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const MotionTokens = {
        "motion-instant": "75ms",
        "motion-fast": "150ms",
        "motion-medium": "300ms",
        "motion-slow": "400ms"
      } as const;

      export type MotionTokenType = keyof typeof MotionTokens;
    `);
  });

  test("with overrides", () => {
    const overrides = { "motion-custom": "10rem" };
    const generator = new MotionTokenGenerator(overrides);

    expect(generator.getConfig()).toEqual({ ...generator.base, ...overrides });
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
        --motion-instant: 75ms;
        --motion-fast: 150ms;
        --motion-medium: 300ms;
        --motion-slow: 400ms;
        --motion-custom: 10rem;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const MotionTokens = {
        "motion-instant": "75ms",
        "motion-fast": "150ms",
        "motion-medium": "300ms",
        "motion-slow": "400ms",
        "motion-custom": "10rem"
      } as const;

      export type MotionTokenType = keyof typeof MotionTokens;
    `);
  });
});

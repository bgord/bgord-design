import { describe, expect, test } from "bun:test";
import { MotionTokenGenerator } from "../src/tokens";

describe("MotionTokenGenerator", () => {
  test("basic usage", () => {
    const generator = new MotionTokenGenerator();

    expect(generator.getConfig()).toEqual(generator.base);
    expect(generator.getTokens()).toEqualIgnoringWhitespace(`
        --motion-instant: 75ms;
        --motion-fast: 120ms;
        --motion-medium: 200ms;
        --motion-slow: 320ms;
        --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
        --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
        --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const MotionTokens = {
        "motion-instant": "75ms",
        "motion-fast": "120ms",
        "motion-medium": "200ms",
        "motion-slow": "320ms",
        "ease-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-in-out": "cubic-bezier(0.65, 0, 0.35, 1)",
        "ease-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)"
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
        --motion-fast: 120ms;
        --motion-medium: 200ms;
        --motion-slow: 320ms;
        --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
        --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
        --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
        --motion-custom: 10rem;
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      export const MotionTokens = {
        "motion-instant": "75ms",
        "motion-fast": "120ms",
        "motion-medium": "200ms",
        "motion-slow": "320ms",
        "ease-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-in-out": "cubic-bezier(0.65, 0, 0.35, 1)",
        "ease-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "motion-custom": "10rem"
      } as const;

      export type MotionTokenType = keyof typeof MotionTokens;
    `);
  });
});

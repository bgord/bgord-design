import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { BackdropUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: 768 });

describe("BackdropUtilityGenerator", () => {
  test("basic usage", () => {
    const BackdropsTokenGenerator = new Tokens.BackdropsTokenGenerator();
    const generator = new BackdropUtilityGenerator(breakpoints, BackdropsTokenGenerator);

    expect(generator.name).toEqual("Backdrop utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-backdrop='none']::backdrop { background: var(--backdrop-none); }
      [data-backdrop='weak']::backdrop { background: var(--backdrop-weak); }
      [data-backdrop='medium']::backdrop { background: var(--backdrop-medium); }
      [data-backdrop='strong']::backdrop { background: var(--backdrop-strong); }
      [data-backdrop='stronger']::backdrop { background: var(--backdrop-stronger); }

      @media (max-width: 768px) {
        [data-md-backdrop='none']::backdrop { background: var(--backdrop-none); }
        [data-md-backdrop='weak']::backdrop { background: var(--backdrop-weak); }
        [data-md-backdrop='medium']::backdrop { background: var(--backdrop-medium); }
        [data-md-backdrop='strong']::backdrop { background: var(--backdrop-strong); }
        [data-md-backdrop='stronger']::backdrop { background: var(--backdrop-stronger); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(
      `"data-backdrop"?: "none" | "weak" | "medium" | "strong" | "stronger";`,
    );
  });

  test("with overrides", () => {
    const BackdropsTokenGenerator = new Tokens.BackdropsTokenGenerator({ "backdrop-new": "new-value" });
    const generator = new BackdropUtilityGenerator(breakpoints, BackdropsTokenGenerator);

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-backdrop='none']::backdrop { background: var(--backdrop-none); }
      [data-backdrop='weak']::backdrop { background: var(--backdrop-weak); }
      [data-backdrop='medium']::backdrop { background: var(--backdrop-medium); }
      [data-backdrop='strong']::backdrop { background: var(--backdrop-strong); }
      [data-backdrop='stronger']::backdrop { background: var(--backdrop-stronger); }
      [data-backdrop='new']::backdrop { background: var(--backdrop-new); }

      @media (max-width: 768px) {
        [data-md-backdrop='none']::backdrop { background: var(--backdrop-none); }
        [data-md-backdrop='weak']::backdrop { background: var(--backdrop-weak); }
        [data-md-backdrop='medium']::backdrop { background: var(--backdrop-medium); }
        [data-md-backdrop='strong']::backdrop { background: var(--backdrop-strong); }
        [data-md-backdrop='stronger']::backdrop { background: var(--backdrop-stronger); }
        [data-md-backdrop='new']::backdrop { background: var(--backdrop-new); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(
      `"data-backdrop"?: "none" | "weak" | "medium" | "strong" | "stronger" | "new";`,
    );
  });
});

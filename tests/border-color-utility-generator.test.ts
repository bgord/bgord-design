import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import { StateRegistry } from "../src/state-registry";
import * as Tokens from "../src/tokens";
import { BorderColorUtilityGenerator } from "../src/utilities";

const states = new StateRegistry({ hover: true, focus: true });
const breakpoints = new BreakpointRegistry({ md: "768" });

describe("BorderColorUtilityGenerator", () => {
  test("basic usage", () => {
    const GrayscaleTokenGenerator = new Tokens.GrayscaleTokenGenerator();
    const BrandTokenGenerator = new Tokens.BrandTokenGenerator();
    const PositiveTokenGenerator = new Tokens.PositiveTokenGenerator();
    const DangerTokenGenerator = new Tokens.DangerTokenGenerator();
    const WarningTokenGenerator = new Tokens.WarningTokenGenerator();
    const generator = new BorderColorUtilityGenerator(
      breakpoints,
      states,
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );

    expect(generator.name).toEqual("Border color utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-bc='neutral-0'] { border-color: var(--color-neutral-0); }
      [data-bc='neutral-50'] { border-color: var(--color-neutral-50); }
      [data-bc='neutral-100'] { border-color: var(--color-neutral-100); }
      [data-bc='neutral-200'] { border-color: var(--color-neutral-200); }
      [data-bc='neutral-300'] { border-color: var(--color-neutral-300); }
      [data-bc='neutral-400'] { border-color: var(--color-neutral-400); }
      [data-bc='neutral-500'] { border-color: var(--color-neutral-500); }
      [data-bc='neutral-600'] { border-color: var(--color-neutral-600); }
      [data-bc='neutral-700'] { border-color: var(--color-neutral-700); }
      [data-bc='neutral-800'] { border-color: var(--color-neutral-800); }
      [data-bc='neutral-900'] { border-color: var(--color-neutral-900); }
      [data-bc='neutral-950'] { border-color: var(--color-neutral-950); }

      [data-bc='brand-50'] { border-color: var(--color-brand-50); }
      [data-bc='brand-100'] { border-color: var(--color-brand-100); }
      [data-bc='brand-200'] { border-color: var(--color-brand-200); }
      [data-bc='brand-300'] { border-color: var(--color-brand-300); }
      [data-bc='brand-400'] { border-color: var(--color-brand-400); }
      [data-bc='brand-500'] { border-color: var(--color-brand-500); }
      [data-bc='brand-600'] { border-color: var(--color-brand-600); }
      [data-bc='brand-700'] { border-color: var(--color-brand-700); }
      [data-bc='brand-800'] { border-color: var(--color-brand-800); }
      [data-bc='brand-900'] { border-color: var(--color-brand-900); }

      [data-bc='positive-0'] { border-color: var(--color-positive-0); }
      [data-bc='positive-100'] { border-color: var(--color-positive-100); }
      [data-bc='positive-200'] { border-color: var(--color-positive-200); }
      [data-bc='positive-400'] { border-color: var(--color-positive-400); }
      [data-bc='positive-600'] { border-color: var(--color-positive-600); }
      [data-bc='positive-800'] { border-color: var(--color-positive-800); }
      [data-bc='positive-900'] { border-color: var(--color-positive-900); }

      [data-bc='danger-0'] { border-color: var(--color-danger-0); }
      [data-bc='danger-100'] { border-color: var(--color-danger-100); }
      [data-bc='danger-200'] { border-color: var(--color-danger-200); }
      [data-bc='danger-400'] { border-color: var(--color-danger-400); }
      [data-bc='danger-600'] { border-color: var(--color-danger-600); }
      [data-bc='danger-800'] { border-color: var(--color-danger-800); }
      [data-bc='danger-900'] { border-color: var(--color-danger-900); }

      [data-bc='warning-100'] { border-color: var(--color-warning-100); }
      [data-bc='warning-300'] { border-color: var(--color-warning-300); }
      [data-bc='warning-500'] { border-color: var(--color-warning-500); }
      [data-bc='warning-700'] { border-color: var(--color-warning-700); }
      [data-bc='warning-900'] { border-color: var(--color-warning-900); }

      [data-bcx='neutral-0'] { border-left-color: var(--color-neutral-0); border-right-color: var(--color-neutral-0); }
      [data-bcx='neutral-50'] { border-left-color: var(--color-neutral-50); border-right-color: var(--color-neutral-50); }
      [data-bcx='neutral-100'] { border-left-color: var(--color-neutral-100); border-right-color: var(--color-neutral-100); }
      [data-bcx='neutral-200'] { border-left-color: var(--color-neutral-200); border-right-color: var(--color-neutral-200); }
      [data-bcx='neutral-300'] { border-left-color: var(--color-neutral-300); border-right-color: var(--color-neutral-300); }
      [data-bcx='neutral-400'] { border-left-color: var(--color-neutral-400); border-right-color: var(--color-neutral-400); }
      [data-bcx='neutral-500'] { border-left-color: var(--color-neutral-500); border-right-color: var(--color-neutral-500); }
      [data-bcx='neutral-600'] { border-left-color: var(--color-neutral-600); border-right-color: var(--color-neutral-600); }
      [data-bcx='neutral-700'] { border-left-color: var(--color-neutral-700); border-right-color: var(--color-neutral-700); }
      [data-bcx='neutral-800'] { border-left-color: var(--color-neutral-800); border-right-color: var(--color-neutral-800); }
      [data-bcx='neutral-900'] { border-left-color: var(--color-neutral-900); border-right-color: var(--color-neutral-900); }
      [data-bcx='neutral-950'] { border-left-color: var(--color-neutral-950); border-right-color: var(--color-neutral-950); }

      [data-bcx='brand-50'] { border-left-color: var(--color-brand-50); border-right-color: var(--color-brand-50); }
      [data-bcx='brand-100'] { border-left-color: var(--color-brand-100); border-right-color: var(--color-brand-100); }
      [data-bcx='brand-200'] { border-left-color: var(--color-brand-200); border-right-color: var(--color-brand-200); }
      [data-bcx='brand-300'] { border-left-color: var(--color-brand-300); border-right-color: var(--color-brand-300); }
      [data-bcx='brand-400'] { border-left-color: var(--color-brand-400); border-right-color: var(--color-brand-400); }
      [data-bcx='brand-500'] { border-left-color: var(--color-brand-500); border-right-color: var(--color-brand-500); }
      [data-bcx='brand-600'] { border-left-color: var(--color-brand-600); border-right-color: var(--color-brand-600); }
      [data-bcx='brand-700'] { border-left-color: var(--color-brand-700); border-right-color: var(--color-brand-700); }
      [data-bcx='brand-800'] { border-left-color: var(--color-brand-800); border-right-color: var(--color-brand-800); }
      [data-bcx='brand-900'] { border-left-color: var(--color-brand-900); border-right-color: var(--color-brand-900); }

      [data-bcx='positive-0'] { border-left-color: var(--color-positive-0); border-right-color: var(--color-positive-0); }
      [data-bcx='positive-100'] { border-left-color: var(--color-positive-100); border-right-color: var(--color-positive-100); }
      [data-bcx='positive-200'] { border-left-color: var(--color-positive-200); border-right-color: var(--color-positive-200); }
      [data-bcx='positive-400'] { border-left-color: var(--color-positive-400); border-right-color: var(--color-positive-400); }
      [data-bcx='positive-600'] { border-left-color: var(--color-positive-600); border-right-color: var(--color-positive-600); }
      [data-bcx='positive-800'] { border-left-color: var(--color-positive-800); border-right-color: var(--color-positive-800); }
      [data-bcx='positive-900'] { border-left-color: var(--color-positive-900); border-right-color: var(--color-positive-900); }

      [data-bcx='danger-0'] { border-left-color: var(--color-danger-0); border-right-color: var(--color-danger-0); }
      [data-bcx='danger-100'] { border-left-color: var(--color-danger-100); border-right-color: var(--color-danger-100); }
      [data-bcx='danger-200'] { border-left-color: var(--color-danger-200); border-right-color: var(--color-danger-200); }
      [data-bcx='danger-400'] { border-left-color: var(--color-danger-400); border-right-color: var(--color-danger-400); }
      [data-bcx='danger-600'] { border-left-color: var(--color-danger-600); border-right-color: var(--color-danger-600); }
      [data-bcx='danger-800'] { border-left-color: var(--color-danger-800); border-right-color: var(--color-danger-800); }
      [data-bcx='danger-900'] { border-left-color: var(--color-danger-900); border-right-color: var(--color-danger-900); }

      [data-bcx='warning-100'] { border-left-color: var(--color-warning-100); border-right-color: var(--color-warning-100); }
      [data-bcx='warning-300'] { border-left-color: var(--color-warning-300); border-right-color: var(--color-warning-300); }
      [data-bcx='warning-500'] { border-left-color: var(--color-warning-500); border-right-color: var(--color-warning-500); }
      [data-bcx='warning-700'] { border-left-color: var(--color-warning-700); border-right-color: var(--color-warning-700); }
      [data-bcx='warning-900'] { border-left-color: var(--color-warning-900); border-right-color: var(--color-warning-900); }

      [data-bcy='neutral-0'] { border-top-color: var(--color-neutral-0); border-bottom-color: var(--color-neutral-0); }
      [data-bcy='neutral-50'] { border-top-color: var(--color-neutral-50); border-bottom-color: var(--color-neutral-50); }
      [data-bcy='neutral-100'] { border-top-color: var(--color-neutral-100); border-bottom-color: var(--color-neutral-100); }
      [data-bcy='neutral-200'] { border-top-color: var(--color-neutral-200); border-bottom-color: var(--color-neutral-200); }
      [data-bcy='neutral-300'] { border-top-color: var(--color-neutral-300); border-bottom-color: var(--color-neutral-300); }
      [data-bcy='neutral-400'] { border-top-color: var(--color-neutral-400); border-bottom-color: var(--color-neutral-400); }
      [data-bcy='neutral-500'] { border-top-color: var(--color-neutral-500); border-bottom-color: var(--color-neutral-500); }
      [data-bcy='neutral-600'] { border-top-color: var(--color-neutral-600); border-bottom-color: var(--color-neutral-600); }
      [data-bcy='neutral-700'] { border-top-color: var(--color-neutral-700); border-bottom-color: var(--color-neutral-700); }
      [data-bcy='neutral-800'] { border-top-color: var(--color-neutral-800); border-bottom-color: var(--color-neutral-800); }
      [data-bcy='neutral-900'] { border-top-color: var(--color-neutral-900); border-bottom-color: var(--color-neutral-900); }
      [data-bcy='neutral-950'] { border-top-color: var(--color-neutral-950); border-bottom-color: var(--color-neutral-950); }

      [data-bcy='brand-50'] { border-top-color: var(--color-brand-50); border-bottom-color: var(--color-brand-50); }
      [data-bcy='brand-100'] { border-top-color: var(--color-brand-100); border-bottom-color: var(--color-brand-100); }
      [data-bcy='brand-200'] { border-top-color: var(--color-brand-200); border-bottom-color: var(--color-brand-200); }
      [data-bcy='brand-300'] { border-top-color: var(--color-brand-300); border-bottom-color: var(--color-brand-300); }
      [data-bcy='brand-400'] { border-top-color: var(--color-brand-400); border-bottom-color: var(--color-brand-400); }
      [data-bcy='brand-500'] { border-top-color: var(--color-brand-500); border-bottom-color: var(--color-brand-500); }
      [data-bcy='brand-600'] { border-top-color: var(--color-brand-600); border-bottom-color: var(--color-brand-600); }
      [data-bcy='brand-700'] { border-top-color: var(--color-brand-700); border-bottom-color: var(--color-brand-700); }
      [data-bcy='brand-800'] { border-top-color: var(--color-brand-800); border-bottom-color: var(--color-brand-800); }
      [data-bcy='brand-900'] { border-top-color: var(--color-brand-900); border-bottom-color: var(--color-brand-900); }

      [data-bcy='positive-0'] { border-top-color: var(--color-positive-0); border-bottom-color: var(--color-positive-0); }
      [data-bcy='positive-100'] { border-top-color: var(--color-positive-100); border-bottom-color: var(--color-positive-100); }
      [data-bcy='positive-200'] { border-top-color: var(--color-positive-200); border-bottom-color: var(--color-positive-200); }
      [data-bcy='positive-400'] { border-top-color: var(--color-positive-400); border-bottom-color: var(--color-positive-400); }
      [data-bcy='positive-600'] { border-top-color: var(--color-positive-600); border-bottom-color: var(--color-positive-600); }
      [data-bcy='positive-800'] { border-top-color: var(--color-positive-800); border-bottom-color: var(--color-positive-800); }
      [data-bcy='positive-900'] { border-top-color: var(--color-positive-900); border-bottom-color: var(--color-positive-900); }

      [data-bcy='danger-0'] { border-top-color: var(--color-danger-0); border-bottom-color: var(--color-danger-0); }
      [data-bcy='danger-100'] { border-top-color: var(--color-danger-100); border-bottom-color: var(--color-danger-100); }
      [data-bcy='danger-200'] { border-top-color: var(--color-danger-200); border-bottom-color: var(--color-danger-200); }
      [data-bcy='danger-400'] { border-top-color: var(--color-danger-400); border-bottom-color: var(--color-danger-400); }
      [data-bcy='danger-600'] { border-top-color: var(--color-danger-600); border-bottom-color: var(--color-danger-600); }
      [data-bcy='danger-800'] { border-top-color: var(--color-danger-800); border-bottom-color: var(--color-danger-800); }
      [data-bcy='danger-900'] { border-top-color: var(--color-danger-900); border-bottom-color: var(--color-danger-900); }

      [data-bcy='warning-100'] { border-top-color: var(--color-warning-100); border-bottom-color: var(--color-warning-100); }
      [data-bcy='warning-300'] { border-top-color: var(--color-warning-300); border-bottom-color: var(--color-warning-300); }
      [data-bcy='warning-500'] { border-top-color: var(--color-warning-500); border-bottom-color: var(--color-warning-500); }
      [data-bcy='warning-700'] { border-top-color: var(--color-warning-700); border-bottom-color: var(--color-warning-700); }
      [data-bcy='warning-900'] { border-top-color: var(--color-warning-900); border-bottom-color: var(--color-warning-900); }

      [data-bct='neutral-0'] { border-top-color: var(--color-neutral-0); }
      [data-bct='neutral-50'] { border-top-color: var(--color-neutral-50); }
      [data-bct='neutral-100'] { border-top-color: var(--color-neutral-100); }
      [data-bct='neutral-200'] { border-top-color: var(--color-neutral-200); }
      [data-bct='neutral-300'] { border-top-color: var(--color-neutral-300); }
      [data-bct='neutral-400'] { border-top-color: var(--color-neutral-400); }
      [data-bct='neutral-500'] { border-top-color: var(--color-neutral-500); }
      [data-bct='neutral-600'] { border-top-color: var(--color-neutral-600); }
      [data-bct='neutral-700'] { border-top-color: var(--color-neutral-700); }
      [data-bct='neutral-800'] { border-top-color: var(--color-neutral-800); }
      [data-bct='neutral-900'] { border-top-color: var(--color-neutral-900); }
      [data-bct='neutral-950'] { border-top-color: var(--color-neutral-950); }

      [data-bct='brand-50'] { border-top-color: var(--color-brand-50); }
      [data-bct='brand-100'] { border-top-color: var(--color-brand-100); }
      [data-bct='brand-200'] { border-top-color: var(--color-brand-200); }
      [data-bct='brand-300'] { border-top-color: var(--color-brand-300); }
      [data-bct='brand-400'] { border-top-color: var(--color-brand-400); }
      [data-bct='brand-500'] { border-top-color: var(--color-brand-500); }
      [data-bct='brand-600'] { border-top-color: var(--color-brand-600); }
      [data-bct='brand-700'] { border-top-color: var(--color-brand-700); }
      [data-bct='brand-800'] { border-top-color: var(--color-brand-800); }
      [data-bct='brand-900'] { border-top-color: var(--color-brand-900); }

      [data-bct='positive-0'] { border-top-color: var(--color-positive-0); }
      [data-bct='positive-100'] { border-top-color: var(--color-positive-100); }
      [data-bct='positive-200'] { border-top-color: var(--color-positive-200); }
      [data-bct='positive-400'] { border-top-color: var(--color-positive-400); }
      [data-bct='positive-600'] { border-top-color: var(--color-positive-600); }
      [data-bct='positive-800'] { border-top-color: var(--color-positive-800); }
      [data-bct='positive-900'] { border-top-color: var(--color-positive-900); }

      [data-bct='danger-0'] { border-top-color: var(--color-danger-0); }
      [data-bct='danger-100'] { border-top-color: var(--color-danger-100); }
      [data-bct='danger-200'] { border-top-color: var(--color-danger-200); }
      [data-bct='danger-400'] { border-top-color: var(--color-danger-400); }
      [data-bct='danger-600'] { border-top-color: var(--color-danger-600); }
      [data-bct='danger-800'] { border-top-color: var(--color-danger-800); }
      [data-bct='danger-900'] { border-top-color: var(--color-danger-900); }

      [data-bct='warning-100'] { border-top-color: var(--color-warning-100); }
      [data-bct='warning-300'] { border-top-color: var(--color-warning-300); }
      [data-bct='warning-500'] { border-top-color: var(--color-warning-500); }
      [data-bct='warning-700'] { border-top-color: var(--color-warning-700); }
      [data-bct='warning-900'] { border-top-color: var(--color-warning-900); }

      [data-bcr='neutral-0'] { border-right-color: var(--color-neutral-0); }
      [data-bcr='neutral-50'] { border-right-color: var(--color-neutral-50); }
      [data-bcr='neutral-100'] { border-right-color: var(--color-neutral-100); }
      [data-bcr='neutral-200'] { border-right-color: var(--color-neutral-200); }
      [data-bcr='neutral-300'] { border-right-color: var(--color-neutral-300); }
      [data-bcr='neutral-400'] { border-right-color: var(--color-neutral-400); }
      [data-bcr='neutral-500'] { border-right-color: var(--color-neutral-500); }
      [data-bcr='neutral-600'] { border-right-color: var(--color-neutral-600); }
      [data-bcr='neutral-700'] { border-right-color: var(--color-neutral-700); }
      [data-bcr='neutral-800'] { border-right-color: var(--color-neutral-800); }
      [data-bcr='neutral-900'] { border-right-color: var(--color-neutral-900); }
      [data-bcr='neutral-950'] { border-right-color: var(--color-neutral-950); }

      [data-bcr='brand-50'] { border-right-color: var(--color-brand-50); }
      [data-bcr='brand-100'] { border-right-color: var(--color-brand-100); }
      [data-bcr='brand-200'] { border-right-color: var(--color-brand-200); }
      [data-bcr='brand-300'] { border-right-color: var(--color-brand-300); }
      [data-bcr='brand-400'] { border-right-color: var(--color-brand-400); }
      [data-bcr='brand-500'] { border-right-color: var(--color-brand-500); }
      [data-bcr='brand-600'] { border-right-color: var(--color-brand-600); }
      [data-bcr='brand-700'] { border-right-color: var(--color-brand-700); }
      [data-bcr='brand-800'] { border-right-color: var(--color-brand-800); }
      [data-bcr='brand-900'] { border-right-color: var(--color-brand-900); }

      [data-bcr='positive-0'] { border-right-color: var(--color-positive-0); }
      [data-bcr='positive-100'] { border-right-color: var(--color-positive-100); }
      [data-bcr='positive-200'] { border-right-color: var(--color-positive-200); }
      [data-bcr='positive-400'] { border-right-color: var(--color-positive-400); }
      [data-bcr='positive-600'] { border-right-color: var(--color-positive-600); }
      [data-bcr='positive-800'] { border-right-color: var(--color-positive-800); }
      [data-bcr='positive-900'] { border-right-color: var(--color-positive-900); }

      [data-bcr='danger-0'] { border-right-color: var(--color-danger-0); }
      [data-bcr='danger-100'] { border-right-color: var(--color-danger-100); }
      [data-bcr='danger-200'] { border-right-color: var(--color-danger-200); }
      [data-bcr='danger-400'] { border-right-color: var(--color-danger-400); }
      [data-bcr='danger-600'] { border-right-color: var(--color-danger-600); }
      [data-bcr='danger-800'] { border-right-color: var(--color-danger-800); }
      [data-bcr='danger-900'] { border-right-color: var(--color-danger-900); }

      [data-bcr='warning-100'] { border-right-color: var(--color-warning-100); }
      [data-bcr='warning-300'] { border-right-color: var(--color-warning-300); }
      [data-bcr='warning-500'] { border-right-color: var(--color-warning-500); }
      [data-bcr='warning-700'] { border-right-color: var(--color-warning-700); }
      [data-bcr='warning-900'] { border-right-color: var(--color-warning-900); }

      [data-bcb='neutral-0'] { border-bottom-color: var(--color-neutral-0); }
      [data-bcb='neutral-50'] { border-bottom-color: var(--color-neutral-50); }
      [data-bcb='neutral-100'] { border-bottom-color: var(--color-neutral-100); }
      [data-bcb='neutral-200'] { border-bottom-color: var(--color-neutral-200); }
      [data-bcb='neutral-300'] { border-bottom-color: var(--color-neutral-300); }
      [data-bcb='neutral-400'] { border-bottom-color: var(--color-neutral-400); }
      [data-bcb='neutral-500'] { border-bottom-color: var(--color-neutral-500); }
      [data-bcb='neutral-600'] { border-bottom-color: var(--color-neutral-600); }
      [data-bcb='neutral-700'] { border-bottom-color: var(--color-neutral-700); }
      [data-bcb='neutral-800'] { border-bottom-color: var(--color-neutral-800); }
      [data-bcb='neutral-900'] { border-bottom-color: var(--color-neutral-900); }
      [data-bcb='neutral-950'] { border-bottom-color: var(--color-neutral-950); }

      [data-bcb='brand-50'] { border-bottom-color: var(--color-brand-50); }
      [data-bcb='brand-100'] { border-bottom-color: var(--color-brand-100); }
      [data-bcb='brand-200'] { border-bottom-color: var(--color-brand-200); }
      [data-bcb='brand-300'] { border-bottom-color: var(--color-brand-300); }
      [data-bcb='brand-400'] { border-bottom-color: var(--color-brand-400); }
      [data-bcb='brand-500'] { border-bottom-color: var(--color-brand-500); }
      [data-bcb='brand-600'] { border-bottom-color: var(--color-brand-600); }
      [data-bcb='brand-700'] { border-bottom-color: var(--color-brand-700); }
      [data-bcb='brand-800'] { border-bottom-color: var(--color-brand-800); }
      [data-bcb='brand-900'] { border-bottom-color: var(--color-brand-900); }

      [data-bcb='positive-0'] { border-bottom-color: var(--color-positive-0); }
      [data-bcb='positive-100'] { border-bottom-color: var(--color-positive-100); }
      [data-bcb='positive-200'] { border-bottom-color: var(--color-positive-200); }
      [data-bcb='positive-400'] { border-bottom-color: var(--color-positive-400); }
      [data-bcb='positive-600'] { border-bottom-color: var(--color-positive-600); }
      [data-bcb='positive-800'] { border-bottom-color: var(--color-positive-800); }
      [data-bcb='positive-900'] { border-bottom-color: var(--color-positive-900); }

      [data-bcb='danger-0'] { border-bottom-color: var(--color-danger-0); }
      [data-bcb='danger-100'] { border-bottom-color: var(--color-danger-100); }
      [data-bcb='danger-200'] { border-bottom-color: var(--color-danger-200); }
      [data-bcb='danger-400'] { border-bottom-color: var(--color-danger-400); }
      [data-bcb='danger-600'] { border-bottom-color: var(--color-danger-600); }
      [data-bcb='danger-800'] { border-bottom-color: var(--color-danger-800); }
      [data-bcb='danger-900'] { border-bottom-color: var(--color-danger-900); }

      [data-bcb='warning-100'] { border-bottom-color: var(--color-warning-100); }
      [data-bcb='warning-300'] { border-bottom-color: var(--color-warning-300); }
      [data-bcb='warning-500'] { border-bottom-color: var(--color-warning-500); }
      [data-bcb='warning-700'] { border-bottom-color: var(--color-warning-700); }
      [data-bcb='warning-900'] { border-bottom-color: var(--color-warning-900); }

      [data-bcl='neutral-0'] { border-left-color: var(--color-neutral-0); }
      [data-bcl='neutral-50'] { border-left-color: var(--color-neutral-50); }
      [data-bcl='neutral-100'] { border-left-color: var(--color-neutral-100); }
      [data-bcl='neutral-200'] { border-left-color: var(--color-neutral-200); }
      [data-bcl='neutral-300'] { border-left-color: var(--color-neutral-300); }
      [data-bcl='neutral-400'] { border-left-color: var(--color-neutral-400); }
      [data-bcl='neutral-500'] { border-left-color: var(--color-neutral-500); }
      [data-bcl='neutral-600'] { border-left-color: var(--color-neutral-600); }
      [data-bcl='neutral-700'] { border-left-color: var(--color-neutral-700); }
      [data-bcl='neutral-800'] { border-left-color: var(--color-neutral-800); }
      [data-bcl='neutral-900'] { border-left-color: var(--color-neutral-900); }
      [data-bcl='neutral-950'] { border-left-color: var(--color-neutral-950); }

      [data-bcl='brand-50'] { border-left-color: var(--color-brand-50); }
      [data-bcl='brand-100'] { border-left-color: var(--color-brand-100); }
      [data-bcl='brand-200'] { border-left-color: var(--color-brand-200); }
      [data-bcl='brand-300'] { border-left-color: var(--color-brand-300); }
      [data-bcl='brand-400'] { border-left-color: var(--color-brand-400); }
      [data-bcl='brand-500'] { border-left-color: var(--color-brand-500); }
      [data-bcl='brand-600'] { border-left-color: var(--color-brand-600); }
      [data-bcl='brand-700'] { border-left-color: var(--color-brand-700); }
      [data-bcl='brand-800'] { border-left-color: var(--color-brand-800); }
      [data-bcl='brand-900'] { border-left-color: var(--color-brand-900); }

      [data-bcl='positive-0'] { border-left-color: var(--color-positive-0); }
      [data-bcl='positive-100'] { border-left-color: var(--color-positive-100); }
      [data-bcl='positive-200'] { border-left-color: var(--color-positive-200); }
      [data-bcl='positive-400'] { border-left-color: var(--color-positive-400); }
      [data-bcl='positive-600'] { border-left-color: var(--color-positive-600); }
      [data-bcl='positive-800'] { border-left-color: var(--color-positive-800); }
      [data-bcl='positive-900'] { border-left-color: var(--color-positive-900); }

      [data-bcl='danger-0'] { border-left-color: var(--color-danger-0); }
      [data-bcl='danger-100'] { border-left-color: var(--color-danger-100); }
      [data-bcl='danger-200'] { border-left-color: var(--color-danger-200); }
      [data-bcl='danger-400'] { border-left-color: var(--color-danger-400); }
      [data-bcl='danger-600'] { border-left-color: var(--color-danger-600); }
      [data-bcl='danger-800'] { border-left-color: var(--color-danger-800); }
      [data-bcl='danger-900'] { border-left-color: var(--color-danger-900); }

      [data-bcl='warning-100'] { border-left-color: var(--color-warning-100); }
      [data-bcl='warning-300'] { border-left-color: var(--color-warning-300); }
      [data-bcl='warning-500'] { border-left-color: var(--color-warning-500); }
      [data-bcl='warning-700'] { border-left-color: var(--color-warning-700); }
      [data-bcl='warning-900'] { border-left-color: var(--color-warning-900); }


      [data-hover-bc='neutral-0']:hover:not(:disabled) { border-color: var(--color-neutral-0); }
      [data-hover-bc='neutral-50']:hover:not(:disabled) { border-color: var(--color-neutral-50); }
      [data-hover-bc='neutral-100']:hover:not(:disabled) { border-color: var(--color-neutral-100); }
      [data-hover-bc='neutral-200']:hover:not(:disabled) { border-color: var(--color-neutral-200); }
      [data-hover-bc='neutral-300']:hover:not(:disabled) { border-color: var(--color-neutral-300); }
      [data-hover-bc='neutral-400']:hover:not(:disabled) { border-color: var(--color-neutral-400); }
      [data-hover-bc='neutral-500']:hover:not(:disabled) { border-color: var(--color-neutral-500); }
      [data-hover-bc='neutral-600']:hover:not(:disabled) { border-color: var(--color-neutral-600); }
      [data-hover-bc='neutral-700']:hover:not(:disabled) { border-color: var(--color-neutral-700); }
      [data-hover-bc='neutral-800']:hover:not(:disabled) { border-color: var(--color-neutral-800); }
      [data-hover-bc='neutral-900']:hover:not(:disabled) { border-color: var(--color-neutral-900); }
      [data-hover-bc='neutral-950']:hover:not(:disabled) { border-color: var(--color-neutral-950); }

      [data-hover-bc='brand-50']:hover:not(:disabled) { border-color: var(--color-brand-50); }
      [data-hover-bc='brand-100']:hover:not(:disabled) { border-color: var(--color-brand-100); }
      [data-hover-bc='brand-200']:hover:not(:disabled) { border-color: var(--color-brand-200); }
      [data-hover-bc='brand-300']:hover:not(:disabled) { border-color: var(--color-brand-300); }
      [data-hover-bc='brand-400']:hover:not(:disabled) { border-color: var(--color-brand-400); }
      [data-hover-bc='brand-500']:hover:not(:disabled) { border-color: var(--color-brand-500); }
      [data-hover-bc='brand-600']:hover:not(:disabled) { border-color: var(--color-brand-600); }
      [data-hover-bc='brand-700']:hover:not(:disabled) { border-color: var(--color-brand-700); }
      [data-hover-bc='brand-800']:hover:not(:disabled) { border-color: var(--color-brand-800); }
      [data-hover-bc='brand-900']:hover:not(:disabled) { border-color: var(--color-brand-900); }

      [data-hover-bc='positive-0']:hover:not(:disabled) { border-color: var(--color-positive-0); }
      [data-hover-bc='positive-100']:hover:not(:disabled) { border-color: var(--color-positive-100); }
      [data-hover-bc='positive-200']:hover:not(:disabled) { border-color: var(--color-positive-200); }
      [data-hover-bc='positive-400']:hover:not(:disabled) { border-color: var(--color-positive-400); }
      [data-hover-bc='positive-600']:hover:not(:disabled) { border-color: var(--color-positive-600); }
      [data-hover-bc='positive-800']:hover:not(:disabled) { border-color: var(--color-positive-800); }
      [data-hover-bc='positive-900']:hover:not(:disabled) { border-color: var(--color-positive-900); }

      [data-hover-bc='danger-0']:hover:not(:disabled) { border-color: var(--color-danger-0); }
      [data-hover-bc='danger-100']:hover:not(:disabled) { border-color: var(--color-danger-100); }
      [data-hover-bc='danger-200']:hover:not(:disabled) { border-color: var(--color-danger-200); }
      [data-hover-bc='danger-400']:hover:not(:disabled) { border-color: var(--color-danger-400); }
      [data-hover-bc='danger-600']:hover:not(:disabled) { border-color: var(--color-danger-600); }
      [data-hover-bc='danger-800']:hover:not(:disabled) { border-color: var(--color-danger-800); }
      [data-hover-bc='danger-900']:hover:not(:disabled) { border-color: var(--color-danger-900); }

      [data-hover-bc='warning-100']:hover:not(:disabled) { border-color: var(--color-warning-100); }
      [data-hover-bc='warning-300']:hover:not(:disabled) { border-color: var(--color-warning-300); }
      [data-hover-bc='warning-500']:hover:not(:disabled) { border-color: var(--color-warning-500); }
      [data-hover-bc='warning-700']:hover:not(:disabled) { border-color: var(--color-warning-700); }
      [data-hover-bc='warning-900']:hover:not(:disabled) { border-color: var(--color-warning-900); }


      [data-focus-bc='neutral-0']:focus-visible { border-color: var(--color-neutral-0); }
      [data-focus-bc='neutral-50']:focus-visible { border-color: var(--color-neutral-50); }
      [data-focus-bc='neutral-100']:focus-visible { border-color: var(--color-neutral-100); }
      [data-focus-bc='neutral-200']:focus-visible { border-color: var(--color-neutral-200); }
      [data-focus-bc='neutral-300']:focus-visible { border-color: var(--color-neutral-300); }
      [data-focus-bc='neutral-400']:focus-visible { border-color: var(--color-neutral-400); }
      [data-focus-bc='neutral-500']:focus-visible { border-color: var(--color-neutral-500); }
      [data-focus-bc='neutral-600']:focus-visible { border-color: var(--color-neutral-600); }
      [data-focus-bc='neutral-700']:focus-visible { border-color: var(--color-neutral-700); }
      [data-focus-bc='neutral-800']:focus-visible { border-color: var(--color-neutral-800); }
      [data-focus-bc='neutral-900']:focus-visible { border-color: var(--color-neutral-900); }
      [data-focus-bc='neutral-950']:focus-visible { border-color: var(--color-neutral-950); }

      [data-focus-bc='brand-50']:focus-visible { border-color: var(--color-brand-50); }
      [data-focus-bc='brand-100']:focus-visible { border-color: var(--color-brand-100); }
      [data-focus-bc='brand-200']:focus-visible { border-color: var(--color-brand-200); }
      [data-focus-bc='brand-300']:focus-visible { border-color: var(--color-brand-300); }
      [data-focus-bc='brand-400']:focus-visible { border-color: var(--color-brand-400); }
      [data-focus-bc='brand-500']:focus-visible { border-color: var(--color-brand-500); }
      [data-focus-bc='brand-600']:focus-visible { border-color: var(--color-brand-600); }
      [data-focus-bc='brand-700']:focus-visible { border-color: var(--color-brand-700); }
      [data-focus-bc='brand-800']:focus-visible { border-color: var(--color-brand-800); }
      [data-focus-bc='brand-900']:focus-visible { border-color: var(--color-brand-900); }

      [data-focus-bc='positive-0']:focus-visible { border-color: var(--color-positive-0); }
      [data-focus-bc='positive-100']:focus-visible { border-color: var(--color-positive-100); }
      [data-focus-bc='positive-200']:focus-visible { border-color: var(--color-positive-200); }
      [data-focus-bc='positive-400']:focus-visible { border-color: var(--color-positive-400); }
      [data-focus-bc='positive-600']:focus-visible { border-color: var(--color-positive-600); }
      [data-focus-bc='positive-800']:focus-visible { border-color: var(--color-positive-800); }
      [data-focus-bc='positive-900']:focus-visible { border-color: var(--color-positive-900); }

      [data-focus-bc='danger-0']:focus-visible { border-color: var(--color-danger-0); }
      [data-focus-bc='danger-100']:focus-visible { border-color: var(--color-danger-100); }
      [data-focus-bc='danger-200']:focus-visible { border-color: var(--color-danger-200); }
      [data-focus-bc='danger-400']:focus-visible { border-color: var(--color-danger-400); }
      [data-focus-bc='danger-600']:focus-visible { border-color: var(--color-danger-600); }
      [data-focus-bc='danger-800']:focus-visible { border-color: var(--color-danger-800); }
      [data-focus-bc='danger-900']:focus-visible { border-color: var(--color-danger-900); }

      [data-focus-bc='warning-100']:focus-visible { border-color: var(--color-warning-100); }
      [data-focus-bc='warning-300']:focus-visible { border-color: var(--color-warning-300); }
      [data-focus-bc='warning-500']:focus-visible { border-color: var(--color-warning-500); }
      [data-focus-bc='warning-700']:focus-visible { border-color: var(--color-warning-700); }
      [data-focus-bc='warning-900']:focus-visible { border-color: var(--color-warning-900); }


      @media (max-width: 768px) {
        [data-md-bc='neutral-0'] { border-color: var(--color-neutral-0); }
        [data-md-bc='neutral-50'] { border-color: var(--color-neutral-50); }
        [data-md-bc='neutral-100'] { border-color: var(--color-neutral-100); }
        [data-md-bc='neutral-200'] { border-color: var(--color-neutral-200); }
        [data-md-bc='neutral-300'] { border-color: var(--color-neutral-300); }
        [data-md-bc='neutral-400'] { border-color: var(--color-neutral-400); }
        [data-md-bc='neutral-500'] { border-color: var(--color-neutral-500); }
        [data-md-bc='neutral-600'] { border-color: var(--color-neutral-600); }
        [data-md-bc='neutral-700'] { border-color: var(--color-neutral-700); }
        [data-md-bc='neutral-800'] { border-color: var(--color-neutral-800); }
        [data-md-bc='neutral-900'] { border-color: var(--color-neutral-900); }
        [data-md-bc='neutral-950'] { border-color: var(--color-neutral-950); }

        [data-md-bc='brand-50'] { border-color: var(--color-brand-50); }
        [data-md-bc='brand-100'] { border-color: var(--color-brand-100); }
        [data-md-bc='brand-200'] { border-color: var(--color-brand-200); }
        [data-md-bc='brand-300'] { border-color: var(--color-brand-300); }
        [data-md-bc='brand-400'] { border-color: var(--color-brand-400); }
        [data-md-bc='brand-500'] { border-color: var(--color-brand-500); }
        [data-md-bc='brand-600'] { border-color: var(--color-brand-600); }
        [data-md-bc='brand-700'] { border-color: var(--color-brand-700); }
        [data-md-bc='brand-800'] { border-color: var(--color-brand-800); }
        [data-md-bc='brand-900'] { border-color: var(--color-brand-900); }

        [data-md-bc='positive-0'] { border-color: var(--color-positive-0); }
        [data-md-bc='positive-100'] { border-color: var(--color-positive-100); }
        [data-md-bc='positive-200'] { border-color: var(--color-positive-200); }
        [data-md-bc='positive-400'] { border-color: var(--color-positive-400); }
        [data-md-bc='positive-600'] { border-color: var(--color-positive-600); }
        [data-md-bc='positive-800'] { border-color: var(--color-positive-800); }
        [data-md-bc='positive-900'] { border-color: var(--color-positive-900); }

        [data-md-bc='danger-0'] { border-color: var(--color-danger-0); }
        [data-md-bc='danger-100'] { border-color: var(--color-danger-100); }
        [data-md-bc='danger-200'] { border-color: var(--color-danger-200); }
        [data-md-bc='danger-400'] { border-color: var(--color-danger-400); }
        [data-md-bc='danger-600'] { border-color: var(--color-danger-600); }
        [data-md-bc='danger-800'] { border-color: var(--color-danger-800); }
        [data-md-bc='danger-900'] { border-color: var(--color-danger-900); }

        [data-md-bc='warning-100'] { border-color: var(--color-warning-100); }
        [data-md-bc='warning-300'] { border-color: var(--color-warning-300); }
        [data-md-bc='warning-500'] { border-color: var(--color-warning-500); }
        [data-md-bc='warning-700'] { border-color: var(--color-warning-700); }
        [data-md-bc='warning-900'] { border-color: var(--color-warning-900); }

        [data-md-bcx='neutral-0'] { border-left-color: var(--color-neutral-0); border-right-color: var(--color-neutral-0); }
        [data-md-bcx='neutral-50'] { border-left-color: var(--color-neutral-50); border-right-color: var(--color-neutral-50); }
        [data-md-bcx='neutral-100'] { border-left-color: var(--color-neutral-100); border-right-color: var(--color-neutral-100); }
        [data-md-bcx='neutral-200'] { border-left-color: var(--color-neutral-200); border-right-color: var(--color-neutral-200); }
        [data-md-bcx='neutral-300'] { border-left-color: var(--color-neutral-300); border-right-color: var(--color-neutral-300); }
        [data-md-bcx='neutral-400'] { border-left-color: var(--color-neutral-400); border-right-color: var(--color-neutral-400); }
        [data-md-bcx='neutral-500'] { border-left-color: var(--color-neutral-500); border-right-color: var(--color-neutral-500); }
        [data-md-bcx='neutral-600'] { border-left-color: var(--color-neutral-600); border-right-color: var(--color-neutral-600); }
        [data-md-bcx='neutral-700'] { border-left-color: var(--color-neutral-700); border-right-color: var(--color-neutral-700); }
        [data-md-bcx='neutral-800'] { border-left-color: var(--color-neutral-800); border-right-color: var(--color-neutral-800); }
        [data-md-bcx='neutral-900'] { border-left-color: var(--color-neutral-900); border-right-color: var(--color-neutral-900); }
        [data-md-bcx='neutral-950'] { border-left-color: var(--color-neutral-950); border-right-color: var(--color-neutral-950); }

        [data-md-bcx='brand-50'] { border-left-color: var(--color-brand-50); border-right-color: var(--color-brand-50); }
        [data-md-bcx='brand-100'] { border-left-color: var(--color-brand-100); border-right-color: var(--color-brand-100); }
        [data-md-bcx='brand-200'] { border-left-color: var(--color-brand-200); border-right-color: var(--color-brand-200); }
        [data-md-bcx='brand-300'] { border-left-color: var(--color-brand-300); border-right-color: var(--color-brand-300); }
        [data-md-bcx='brand-400'] { border-left-color: var(--color-brand-400); border-right-color: var(--color-brand-400); }
        [data-md-bcx='brand-500'] { border-left-color: var(--color-brand-500); border-right-color: var(--color-brand-500); }
        [data-md-bcx='brand-600'] { border-left-color: var(--color-brand-600); border-right-color: var(--color-brand-600); }
        [data-md-bcx='brand-700'] { border-left-color: var(--color-brand-700); border-right-color: var(--color-brand-700); }
        [data-md-bcx='brand-800'] { border-left-color: var(--color-brand-800); border-right-color: var(--color-brand-800); }
        [data-md-bcx='brand-900'] { border-left-color: var(--color-brand-900); border-right-color: var(--color-brand-900); }

        [data-md-bcx='positive-0'] { border-left-color: var(--color-positive-0); border-right-color: var(--color-positive-0); }
        [data-md-bcx='positive-100'] { border-left-color: var(--color-positive-100); border-right-color: var(--color-positive-100); }
        [data-md-bcx='positive-200'] { border-left-color: var(--color-positive-200); border-right-color: var(--color-positive-200); }
        [data-md-bcx='positive-400'] { border-left-color: var(--color-positive-400); border-right-color: var(--color-positive-400); }
        [data-md-bcx='positive-600'] { border-left-color: var(--color-positive-600); border-right-color: var(--color-positive-600); }
        [data-md-bcx='positive-800'] { border-left-color: var(--color-positive-800); border-right-color: var(--color-positive-800); }
        [data-md-bcx='positive-900'] { border-left-color: var(--color-positive-900); border-right-color: var(--color-positive-900); }

        [data-md-bcx='danger-0'] { border-left-color: var(--color-danger-0); border-right-color: var(--color-danger-0); }
        [data-md-bcx='danger-100'] { border-left-color: var(--color-danger-100); border-right-color: var(--color-danger-100); }
        [data-md-bcx='danger-200'] { border-left-color: var(--color-danger-200); border-right-color: var(--color-danger-200); }
        [data-md-bcx='danger-400'] { border-left-color: var(--color-danger-400); border-right-color: var(--color-danger-400); }
        [data-md-bcx='danger-600'] { border-left-color: var(--color-danger-600); border-right-color: var(--color-danger-600); }
        [data-md-bcx='danger-800'] { border-left-color: var(--color-danger-800); border-right-color: var(--color-danger-800); }
        [data-md-bcx='danger-900'] { border-left-color: var(--color-danger-900); border-right-color: var(--color-danger-900); }

        [data-md-bcx='warning-100'] { border-left-color: var(--color-warning-100); border-right-color: var(--color-warning-100); }
        [data-md-bcx='warning-300'] { border-left-color: var(--color-warning-300); border-right-color: var(--color-warning-300); }
        [data-md-bcx='warning-500'] { border-left-color: var(--color-warning-500); border-right-color: var(--color-warning-500); }
        [data-md-bcx='warning-700'] { border-left-color: var(--color-warning-700); border-right-color: var(--color-warning-700); }
        [data-md-bcx='warning-900'] { border-left-color: var(--color-warning-900); border-right-color: var(--color-warning-900); }

        [data-md-bcy='neutral-0'] { border-top-color: var(--color-neutral-0); border-bottom-color: var(--color-neutral-0); }
        [data-md-bcy='neutral-50'] { border-top-color: var(--color-neutral-50); border-bottom-color: var(--color-neutral-50); }
        [data-md-bcy='neutral-100'] { border-top-color: var(--color-neutral-100); border-bottom-color: var(--color-neutral-100); }
        [data-md-bcy='neutral-200'] { border-top-color: var(--color-neutral-200); border-bottom-color: var(--color-neutral-200); }
        [data-md-bcy='neutral-300'] { border-top-color: var(--color-neutral-300); border-bottom-color: var(--color-neutral-300); }
        [data-md-bcy='neutral-400'] { border-top-color: var(--color-neutral-400); border-bottom-color: var(--color-neutral-400); }
        [data-md-bcy='neutral-500'] { border-top-color: var(--color-neutral-500); border-bottom-color: var(--color-neutral-500); }
        [data-md-bcy='neutral-600'] { border-top-color: var(--color-neutral-600); border-bottom-color: var(--color-neutral-600); }
        [data-md-bcy='neutral-700'] { border-top-color: var(--color-neutral-700); border-bottom-color: var(--color-neutral-700); }
        [data-md-bcy='neutral-800'] { border-top-color: var(--color-neutral-800); border-bottom-color: var(--color-neutral-800); }
        [data-md-bcy='neutral-900'] { border-top-color: var(--color-neutral-900); border-bottom-color: var(--color-neutral-900); }
        [data-md-bcy='neutral-950'] { border-top-color: var(--color-neutral-950); border-bottom-color: var(--color-neutral-950); }

        [data-md-bcy='brand-50'] { border-top-color: var(--color-brand-50); border-bottom-color: var(--color-brand-50); }
        [data-md-bcy='brand-100'] { border-top-color: var(--color-brand-100); border-bottom-color: var(--color-brand-100); }
        [data-md-bcy='brand-200'] { border-top-color: var(--color-brand-200); border-bottom-color: var(--color-brand-200); }
        [data-md-bcy='brand-300'] { border-top-color: var(--color-brand-300); border-bottom-color: var(--color-brand-300); }
        [data-md-bcy='brand-400'] { border-top-color: var(--color-brand-400); border-bottom-color: var(--color-brand-400); }
        [data-md-bcy='brand-500'] { border-top-color: var(--color-brand-500); border-bottom-color: var(--color-brand-500); }
        [data-md-bcy='brand-600'] { border-top-color: var(--color-brand-600); border-bottom-color: var(--color-brand-600); }
        [data-md-bcy='brand-700'] { border-top-color: var(--color-brand-700); border-bottom-color: var(--color-brand-700); }
        [data-md-bcy='brand-800'] { border-top-color: var(--color-brand-800); border-bottom-color: var(--color-brand-800); }
        [data-md-bcy='brand-900'] { border-top-color: var(--color-brand-900); border-bottom-color: var(--color-brand-900); }

        [data-md-bcy='positive-0'] { border-top-color: var(--color-positive-0); border-bottom-color: var(--color-positive-0); }
        [data-md-bcy='positive-100'] { border-top-color: var(--color-positive-100); border-bottom-color: var(--color-positive-100); }
        [data-md-bcy='positive-200'] { border-top-color: var(--color-positive-200); border-bottom-color: var(--color-positive-200); }
        [data-md-bcy='positive-400'] { border-top-color: var(--color-positive-400); border-bottom-color: var(--color-positive-400); }
        [data-md-bcy='positive-600'] { border-top-color: var(--color-positive-600); border-bottom-color: var(--color-positive-600); }
        [data-md-bcy='positive-800'] { border-top-color: var(--color-positive-800); border-bottom-color: var(--color-positive-800); }
        [data-md-bcy='positive-900'] { border-top-color: var(--color-positive-900); border-bottom-color: var(--color-positive-900); }

        [data-md-bcy='danger-0'] { border-top-color: var(--color-danger-0); border-bottom-color: var(--color-danger-0); }
        [data-md-bcy='danger-100'] { border-top-color: var(--color-danger-100); border-bottom-color: var(--color-danger-100); }
        [data-md-bcy='danger-200'] { border-top-color: var(--color-danger-200); border-bottom-color: var(--color-danger-200); }
        [data-md-bcy='danger-400'] { border-top-color: var(--color-danger-400); border-bottom-color: var(--color-danger-400); }
        [data-md-bcy='danger-600'] { border-top-color: var(--color-danger-600); border-bottom-color: var(--color-danger-600); }
        [data-md-bcy='danger-800'] { border-top-color: var(--color-danger-800); border-bottom-color: var(--color-danger-800); }
        [data-md-bcy='danger-900'] { border-top-color: var(--color-danger-900); border-bottom-color: var(--color-danger-900); }

        [data-md-bcy='warning-100'] { border-top-color: var(--color-warning-100); border-bottom-color: var(--color-warning-100); }
        [data-md-bcy='warning-300'] { border-top-color: var(--color-warning-300); border-bottom-color: var(--color-warning-300); }
        [data-md-bcy='warning-500'] { border-top-color: var(--color-warning-500); border-bottom-color: var(--color-warning-500); }
        [data-md-bcy='warning-700'] { border-top-color: var(--color-warning-700); border-bottom-color: var(--color-warning-700); }
        [data-md-bcy='warning-900'] { border-top-color: var(--color-warning-900); border-bottom-color: var(--color-warning-900); }

        [data-md-bct='neutral-0'] { border-top-color: var(--color-neutral-0); }
        [data-md-bct='neutral-50'] { border-top-color: var(--color-neutral-50); }
        [data-md-bct='neutral-100'] { border-top-color: var(--color-neutral-100); }
        [data-md-bct='neutral-200'] { border-top-color: var(--color-neutral-200); }
        [data-md-bct='neutral-300'] { border-top-color: var(--color-neutral-300); }
        [data-md-bct='neutral-400'] { border-top-color: var(--color-neutral-400); }
        [data-md-bct='neutral-500'] { border-top-color: var(--color-neutral-500); }
        [data-md-bct='neutral-600'] { border-top-color: var(--color-neutral-600); }
        [data-md-bct='neutral-700'] { border-top-color: var(--color-neutral-700); }
        [data-md-bct='neutral-800'] { border-top-color: var(--color-neutral-800); }
        [data-md-bct='neutral-900'] { border-top-color: var(--color-neutral-900); }
        [data-md-bct='neutral-950'] { border-top-color: var(--color-neutral-950); }

        [data-md-bct='brand-50'] { border-top-color: var(--color-brand-50); }
        [data-md-bct='brand-100'] { border-top-color: var(--color-brand-100); }
        [data-md-bct='brand-200'] { border-top-color: var(--color-brand-200); }
        [data-md-bct='brand-300'] { border-top-color: var(--color-brand-300); }
        [data-md-bct='brand-400'] { border-top-color: var(--color-brand-400); }
        [data-md-bct='brand-500'] { border-top-color: var(--color-brand-500); }
        [data-md-bct='brand-600'] { border-top-color: var(--color-brand-600); }
        [data-md-bct='brand-700'] { border-top-color: var(--color-brand-700); }
        [data-md-bct='brand-800'] { border-top-color: var(--color-brand-800); }
        [data-md-bct='brand-900'] { border-top-color: var(--color-brand-900); }

        [data-md-bct='positive-0'] { border-top-color: var(--color-positive-0); }
        [data-md-bct='positive-100'] { border-top-color: var(--color-positive-100); }
        [data-md-bct='positive-200'] { border-top-color: var(--color-positive-200); }
        [data-md-bct='positive-400'] { border-top-color: var(--color-positive-400); }
        [data-md-bct='positive-600'] { border-top-color: var(--color-positive-600); }
        [data-md-bct='positive-800'] { border-top-color: var(--color-positive-800); }
        [data-md-bct='positive-900'] { border-top-color: var(--color-positive-900); }

        [data-md-bct='danger-0'] { border-top-color: var(--color-danger-0); }
        [data-md-bct='danger-100'] { border-top-color: var(--color-danger-100); }
        [data-md-bct='danger-200'] { border-top-color: var(--color-danger-200); }
        [data-md-bct='danger-400'] { border-top-color: var(--color-danger-400); }
        [data-md-bct='danger-600'] { border-top-color: var(--color-danger-600); }
        [data-md-bct='danger-800'] { border-top-color: var(--color-danger-800); }
        [data-md-bct='danger-900'] { border-top-color: var(--color-danger-900); }

        [data-md-bct='warning-100'] { border-top-color: var(--color-warning-100); }
        [data-md-bct='warning-300'] { border-top-color: var(--color-warning-300); }
        [data-md-bct='warning-500'] { border-top-color: var(--color-warning-500); }
        [data-md-bct='warning-700'] { border-top-color: var(--color-warning-700); }
        [data-md-bct='warning-900'] { border-top-color: var(--color-warning-900); }

        [data-md-bcr='neutral-0'] { border-right-color: var(--color-neutral-0); }
        [data-md-bcr='neutral-50'] { border-right-color: var(--color-neutral-50); }
        [data-md-bcr='neutral-100'] { border-right-color: var(--color-neutral-100); }
        [data-md-bcr='neutral-200'] { border-right-color: var(--color-neutral-200); }
        [data-md-bcr='neutral-300'] { border-right-color: var(--color-neutral-300); }
        [data-md-bcr='neutral-400'] { border-right-color: var(--color-neutral-400); }
        [data-md-bcr='neutral-500'] { border-right-color: var(--color-neutral-500); }
        [data-md-bcr='neutral-600'] { border-right-color: var(--color-neutral-600); }
        [data-md-bcr='neutral-700'] { border-right-color: var(--color-neutral-700); }
        [data-md-bcr='neutral-800'] { border-right-color: var(--color-neutral-800); }
        [data-md-bcr='neutral-900'] { border-right-color: var(--color-neutral-900); }
        [data-md-bcr='neutral-950'] { border-right-color: var(--color-neutral-950); }

        [data-md-bcr='brand-50'] { border-right-color: var(--color-brand-50); }
        [data-md-bcr='brand-100'] { border-right-color: var(--color-brand-100); }
        [data-md-bcr='brand-200'] { border-right-color: var(--color-brand-200); }
        [data-md-bcr='brand-300'] { border-right-color: var(--color-brand-300); }
        [data-md-bcr='brand-400'] { border-right-color: var(--color-brand-400); }
        [data-md-bcr='brand-500'] { border-right-color: var(--color-brand-500); }
        [data-md-bcr='brand-600'] { border-right-color: var(--color-brand-600); }
        [data-md-bcr='brand-700'] { border-right-color: var(--color-brand-700); }
        [data-md-bcr='brand-800'] { border-right-color: var(--color-brand-800); }
        [data-md-bcr='brand-900'] { border-right-color: var(--color-brand-900); }

        [data-md-bcr='positive-0'] { border-right-color: var(--color-positive-0); }
        [data-md-bcr='positive-100'] { border-right-color: var(--color-positive-100); }
        [data-md-bcr='positive-200'] { border-right-color: var(--color-positive-200); }
        [data-md-bcr='positive-400'] { border-right-color: var(--color-positive-400); }
        [data-md-bcr='positive-600'] { border-right-color: var(--color-positive-600); }
        [data-md-bcr='positive-800'] { border-right-color: var(--color-positive-800); }
        [data-md-bcr='positive-900'] { border-right-color: var(--color-positive-900); }

        [data-md-bcr='danger-0'] { border-right-color: var(--color-danger-0); }
        [data-md-bcr='danger-100'] { border-right-color: var(--color-danger-100); }
        [data-md-bcr='danger-200'] { border-right-color: var(--color-danger-200); }
        [data-md-bcr='danger-400'] { border-right-color: var(--color-danger-400); }
        [data-md-bcr='danger-600'] { border-right-color: var(--color-danger-600); }
        [data-md-bcr='danger-800'] { border-right-color: var(--color-danger-800); }
        [data-md-bcr='danger-900'] { border-right-color: var(--color-danger-900); }

        [data-md-bcr='warning-100'] { border-right-color: var(--color-warning-100); }
        [data-md-bcr='warning-300'] { border-right-color: var(--color-warning-300); }
        [data-md-bcr='warning-500'] { border-right-color: var(--color-warning-500); }
        [data-md-bcr='warning-700'] { border-right-color: var(--color-warning-700); }
        [data-md-bcr='warning-900'] { border-right-color: var(--color-warning-900); }

        [data-md-bcb='neutral-0'] { border-bottom-color: var(--color-neutral-0); }
        [data-md-bcb='neutral-50'] { border-bottom-color: var(--color-neutral-50); }
        [data-md-bcb='neutral-100'] { border-bottom-color: var(--color-neutral-100); }
        [data-md-bcb='neutral-200'] { border-bottom-color: var(--color-neutral-200); }
        [data-md-bcb='neutral-300'] { border-bottom-color: var(--color-neutral-300); }
        [data-md-bcb='neutral-400'] { border-bottom-color: var(--color-neutral-400); }
        [data-md-bcb='neutral-500'] { border-bottom-color: var(--color-neutral-500); }
        [data-md-bcb='neutral-600'] { border-bottom-color: var(--color-neutral-600); }
        [data-md-bcb='neutral-700'] { border-bottom-color: var(--color-neutral-700); }
        [data-md-bcb='neutral-800'] { border-bottom-color: var(--color-neutral-800); }
        [data-md-bcb='neutral-900'] { border-bottom-color: var(--color-neutral-900); }
        [data-md-bcb='neutral-950'] { border-bottom-color: var(--color-neutral-950); }

        [data-md-bcb='brand-50'] { border-bottom-color: var(--color-brand-50); }
        [data-md-bcb='brand-100'] { border-bottom-color: var(--color-brand-100); }
        [data-md-bcb='brand-200'] { border-bottom-color: var(--color-brand-200); }
        [data-md-bcb='brand-300'] { border-bottom-color: var(--color-brand-300); }
        [data-md-bcb='brand-400'] { border-bottom-color: var(--color-brand-400); }
        [data-md-bcb='brand-500'] { border-bottom-color: var(--color-brand-500); }
        [data-md-bcb='brand-600'] { border-bottom-color: var(--color-brand-600); }
        [data-md-bcb='brand-700'] { border-bottom-color: var(--color-brand-700); }
        [data-md-bcb='brand-800'] { border-bottom-color: var(--color-brand-800); }
        [data-md-bcb='brand-900'] { border-bottom-color: var(--color-brand-900); }

        [data-md-bcb='positive-0'] { border-bottom-color: var(--color-positive-0); }
        [data-md-bcb='positive-100'] { border-bottom-color: var(--color-positive-100); }
        [data-md-bcb='positive-200'] { border-bottom-color: var(--color-positive-200); }
        [data-md-bcb='positive-400'] { border-bottom-color: var(--color-positive-400); }
        [data-md-bcb='positive-600'] { border-bottom-color: var(--color-positive-600); }
        [data-md-bcb='positive-800'] { border-bottom-color: var(--color-positive-800); }
        [data-md-bcb='positive-900'] { border-bottom-color: var(--color-positive-900); }

        [data-md-bcb='danger-0'] { border-bottom-color: var(--color-danger-0); }
        [data-md-bcb='danger-100'] { border-bottom-color: var(--color-danger-100); }
        [data-md-bcb='danger-200'] { border-bottom-color: var(--color-danger-200); }
        [data-md-bcb='danger-400'] { border-bottom-color: var(--color-danger-400); }
        [data-md-bcb='danger-600'] { border-bottom-color: var(--color-danger-600); }
        [data-md-bcb='danger-800'] { border-bottom-color: var(--color-danger-800); }
        [data-md-bcb='danger-900'] { border-bottom-color: var(--color-danger-900); }

        [data-md-bcb='warning-100'] { border-bottom-color: var(--color-warning-100); }
        [data-md-bcb='warning-300'] { border-bottom-color: var(--color-warning-300); }
        [data-md-bcb='warning-500'] { border-bottom-color: var(--color-warning-500); }
        [data-md-bcb='warning-700'] { border-bottom-color: var(--color-warning-700); }
        [data-md-bcb='warning-900'] { border-bottom-color: var(--color-warning-900); }

        [data-md-bcl='neutral-0'] { border-left-color: var(--color-neutral-0); }
        [data-md-bcl='neutral-50'] { border-left-color: var(--color-neutral-50); }
        [data-md-bcl='neutral-100'] { border-left-color: var(--color-neutral-100); }
        [data-md-bcl='neutral-200'] { border-left-color: var(--color-neutral-200); }
        [data-md-bcl='neutral-300'] { border-left-color: var(--color-neutral-300); }
        [data-md-bcl='neutral-400'] { border-left-color: var(--color-neutral-400); }
        [data-md-bcl='neutral-500'] { border-left-color: var(--color-neutral-500); }
        [data-md-bcl='neutral-600'] { border-left-color: var(--color-neutral-600); }
        [data-md-bcl='neutral-700'] { border-left-color: var(--color-neutral-700); }
        [data-md-bcl='neutral-800'] { border-left-color: var(--color-neutral-800); }
        [data-md-bcl='neutral-900'] { border-left-color: var(--color-neutral-900); }
        [data-md-bcl='neutral-950'] { border-left-color: var(--color-neutral-950); }

        [data-md-bcl='brand-50'] { border-left-color: var(--color-brand-50); }
        [data-md-bcl='brand-100'] { border-left-color: var(--color-brand-100); }
        [data-md-bcl='brand-200'] { border-left-color: var(--color-brand-200); }
        [data-md-bcl='brand-300'] { border-left-color: var(--color-brand-300); }
        [data-md-bcl='brand-400'] { border-left-color: var(--color-brand-400); }
        [data-md-bcl='brand-500'] { border-left-color: var(--color-brand-500); }
        [data-md-bcl='brand-600'] { border-left-color: var(--color-brand-600); }
        [data-md-bcl='brand-700'] { border-left-color: var(--color-brand-700); }
        [data-md-bcl='brand-800'] { border-left-color: var(--color-brand-800); }
        [data-md-bcl='brand-900'] { border-left-color: var(--color-brand-900); }

        [data-md-bcl='positive-0'] { border-left-color: var(--color-positive-0); }
        [data-md-bcl='positive-100'] { border-left-color: var(--color-positive-100); }
        [data-md-bcl='positive-200'] { border-left-color: var(--color-positive-200); }
        [data-md-bcl='positive-400'] { border-left-color: var(--color-positive-400); }
        [data-md-bcl='positive-600'] { border-left-color: var(--color-positive-600); }
        [data-md-bcl='positive-800'] { border-left-color: var(--color-positive-800); }
        [data-md-bcl='positive-900'] { border-left-color: var(--color-positive-900); }

        [data-md-bcl='danger-0'] { border-left-color: var(--color-danger-0); }
        [data-md-bcl='danger-100'] { border-left-color: var(--color-danger-100); }
        [data-md-bcl='danger-200'] { border-left-color: var(--color-danger-200); }
        [data-md-bcl='danger-400'] { border-left-color: var(--color-danger-400); }
        [data-md-bcl='danger-600'] { border-left-color: var(--color-danger-600); }
        [data-md-bcl='danger-800'] { border-left-color: var(--color-danger-800); }
        [data-md-bcl='danger-900'] { border-left-color: var(--color-danger-900); }

        [data-md-bcl='warning-100'] { border-left-color: var(--color-warning-100); }
        [data-md-bcl='warning-300'] { border-left-color: var(--color-warning-300); }
        [data-md-bcl='warning-500'] { border-left-color: var(--color-warning-500); }
        [data-md-bcl='warning-700'] { border-left-color: var(--color-warning-700); }
        [data-md-bcl='warning-900'] { border-left-color: var(--color-warning-900); }


        [data-md-hover-bc='neutral-0']:hover:not(:disabled) { border-color: var(--color-neutral-0); }
        [data-md-hover-bc='neutral-50']:hover:not(:disabled) { border-color: var(--color-neutral-50); }
        [data-md-hover-bc='neutral-100']:hover:not(:disabled) { border-color: var(--color-neutral-100); }
        [data-md-hover-bc='neutral-200']:hover:not(:disabled) { border-color: var(--color-neutral-200); }
        [data-md-hover-bc='neutral-300']:hover:not(:disabled) { border-color: var(--color-neutral-300); }
        [data-md-hover-bc='neutral-400']:hover:not(:disabled) { border-color: var(--color-neutral-400); }
        [data-md-hover-bc='neutral-500']:hover:not(:disabled) { border-color: var(--color-neutral-500); }
        [data-md-hover-bc='neutral-600']:hover:not(:disabled) { border-color: var(--color-neutral-600); }
        [data-md-hover-bc='neutral-700']:hover:not(:disabled) { border-color: var(--color-neutral-700); }
        [data-md-hover-bc='neutral-800']:hover:not(:disabled) { border-color: var(--color-neutral-800); }
        [data-md-hover-bc='neutral-900']:hover:not(:disabled) { border-color: var(--color-neutral-900); }
        [data-md-hover-bc='neutral-950']:hover:not(:disabled) { border-color: var(--color-neutral-950); }

        [data-md-hover-bc='brand-50']:hover:not(:disabled) { border-color: var(--color-brand-50); }
        [data-md-hover-bc='brand-100']:hover:not(:disabled) { border-color: var(--color-brand-100); }
        [data-md-hover-bc='brand-200']:hover:not(:disabled) { border-color: var(--color-brand-200); }
        [data-md-hover-bc='brand-300']:hover:not(:disabled) { border-color: var(--color-brand-300); }
        [data-md-hover-bc='brand-400']:hover:not(:disabled) { border-color: var(--color-brand-400); }
        [data-md-hover-bc='brand-500']:hover:not(:disabled) { border-color: var(--color-brand-500); }
        [data-md-hover-bc='brand-600']:hover:not(:disabled) { border-color: var(--color-brand-600); }
        [data-md-hover-bc='brand-700']:hover:not(:disabled) { border-color: var(--color-brand-700); }
        [data-md-hover-bc='brand-800']:hover:not(:disabled) { border-color: var(--color-brand-800); }
        [data-md-hover-bc='brand-900']:hover:not(:disabled) { border-color: var(--color-brand-900); }

        [data-md-hover-bc='positive-0']:hover:not(:disabled) { border-color: var(--color-positive-0); }
        [data-md-hover-bc='positive-100']:hover:not(:disabled) { border-color: var(--color-positive-100); }
        [data-md-hover-bc='positive-200']:hover:not(:disabled) { border-color: var(--color-positive-200); }
        [data-md-hover-bc='positive-400']:hover:not(:disabled) { border-color: var(--color-positive-400); }
        [data-md-hover-bc='positive-600']:hover:not(:disabled) { border-color: var(--color-positive-600); }
        [data-md-hover-bc='positive-800']:hover:not(:disabled) { border-color: var(--color-positive-800); }
        [data-md-hover-bc='positive-900']:hover:not(:disabled) { border-color: var(--color-positive-900); }

        [data-md-hover-bc='danger-0']:hover:not(:disabled) { border-color: var(--color-danger-0); }
        [data-md-hover-bc='danger-100']:hover:not(:disabled) { border-color: var(--color-danger-100); }
        [data-md-hover-bc='danger-200']:hover:not(:disabled) { border-color: var(--color-danger-200); }
        [data-md-hover-bc='danger-400']:hover:not(:disabled) { border-color: var(--color-danger-400); }
        [data-md-hover-bc='danger-600']:hover:not(:disabled) { border-color: var(--color-danger-600); }
        [data-md-hover-bc='danger-800']:hover:not(:disabled) { border-color: var(--color-danger-800); }
        [data-md-hover-bc='danger-900']:hover:not(:disabled) { border-color: var(--color-danger-900); }

        [data-md-hover-bc='warning-100']:hover:not(:disabled) { border-color: var(--color-warning-100); }
        [data-md-hover-bc='warning-300']:hover:not(:disabled) { border-color: var(--color-warning-300); }
        [data-md-hover-bc='warning-500']:hover:not(:disabled) { border-color: var(--color-warning-500); }
        [data-md-hover-bc='warning-700']:hover:not(:disabled) { border-color: var(--color-warning-700); }
        [data-md-hover-bc='warning-900']:hover:not(:disabled) { border-color: var(--color-warning-900); }


        [data-md-focus-bc='neutral-0']:focus-visible { border-color: var(--color-neutral-0); }
        [data-md-focus-bc='neutral-50']:focus-visible { border-color: var(--color-neutral-50); }
        [data-md-focus-bc='neutral-100']:focus-visible { border-color: var(--color-neutral-100); }
        [data-md-focus-bc='neutral-200']:focus-visible { border-color: var(--color-neutral-200); }
        [data-md-focus-bc='neutral-300']:focus-visible { border-color: var(--color-neutral-300); }
        [data-md-focus-bc='neutral-400']:focus-visible { border-color: var(--color-neutral-400); }
        [data-md-focus-bc='neutral-500']:focus-visible { border-color: var(--color-neutral-500); }
        [data-md-focus-bc='neutral-600']:focus-visible { border-color: var(--color-neutral-600); }
        [data-md-focus-bc='neutral-700']:focus-visible { border-color: var(--color-neutral-700); }
        [data-md-focus-bc='neutral-800']:focus-visible { border-color: var(--color-neutral-800); }
        [data-md-focus-bc='neutral-900']:focus-visible { border-color: var(--color-neutral-900); }
        [data-md-focus-bc='neutral-950']:focus-visible { border-color: var(--color-neutral-950); }

        [data-md-focus-bc='brand-50']:focus-visible { border-color: var(--color-brand-50); }
        [data-md-focus-bc='brand-100']:focus-visible { border-color: var(--color-brand-100); }
        [data-md-focus-bc='brand-200']:focus-visible { border-color: var(--color-brand-200); }
        [data-md-focus-bc='brand-300']:focus-visible { border-color: var(--color-brand-300); }
        [data-md-focus-bc='brand-400']:focus-visible { border-color: var(--color-brand-400); }
        [data-md-focus-bc='brand-500']:focus-visible { border-color: var(--color-brand-500); }
        [data-md-focus-bc='brand-600']:focus-visible { border-color: var(--color-brand-600); }
        [data-md-focus-bc='brand-700']:focus-visible { border-color: var(--color-brand-700); }
        [data-md-focus-bc='brand-800']:focus-visible { border-color: var(--color-brand-800); }
        [data-md-focus-bc='brand-900']:focus-visible { border-color: var(--color-brand-900); }

        [data-md-focus-bc='positive-0']:focus-visible { border-color: var(--color-positive-0); }
        [data-md-focus-bc='positive-100']:focus-visible { border-color: var(--color-positive-100); }
        [data-md-focus-bc='positive-200']:focus-visible { border-color: var(--color-positive-200); }
        [data-md-focus-bc='positive-400']:focus-visible { border-color: var(--color-positive-400); }
        [data-md-focus-bc='positive-600']:focus-visible { border-color: var(--color-positive-600); }
        [data-md-focus-bc='positive-800']:focus-visible { border-color: var(--color-positive-800); }
        [data-md-focus-bc='positive-900']:focus-visible { border-color: var(--color-positive-900); }

        [data-md-focus-bc='danger-0']:focus-visible { border-color: var(--color-danger-0); }
        [data-md-focus-bc='danger-100']:focus-visible { border-color: var(--color-danger-100); }
        [data-md-focus-bc='danger-200']:focus-visible { border-color: var(--color-danger-200); }
        [data-md-focus-bc='danger-400']:focus-visible { border-color: var(--color-danger-400); }
        [data-md-focus-bc='danger-600']:focus-visible { border-color: var(--color-danger-600); }
        [data-md-focus-bc='danger-800']:focus-visible { border-color: var(--color-danger-800); }
        [data-md-focus-bc='danger-900']:focus-visible { border-color: var(--color-danger-900); }

        [data-md-focus-bc='warning-100']:focus-visible { border-color: var(--color-warning-100); }
        [data-md-focus-bc='warning-300']:focus-visible { border-color: var(--color-warning-300); }
        [data-md-focus-bc='warning-500']:focus-visible { border-color: var(--color-warning-500); }
        [data-md-focus-bc='warning-700']:focus-visible { border-color: var(--color-warning-700); }
        [data-md-focus-bc='warning-900']:focus-visible { border-color: var(--color-warning-900); }
      }
   `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-bct"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-bcr"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-bcb"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-bcl"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-bcx"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-bcy"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-hover-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-focus-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bct"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bcr"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bcb"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bcl"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bcx"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bcy"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-hover-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-focus-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
    `);
  });

  test("with overrides", () => {
    const GrayscaleTokenGenerator = new Tokens.GrayscaleTokenGenerator({ "color-foo": "bar" });
    const BrandTokenGenerator = new Tokens.BrandTokenGenerator();
    const PositiveTokenGenerator = new Tokens.PositiveTokenGenerator();
    const DangerTokenGenerator = new Tokens.DangerTokenGenerator();
    const WarningTokenGenerator = new Tokens.WarningTokenGenerator();
    const generator = new BorderColorUtilityGenerator(
      breakpoints,
      states,
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-bc='neutral-0'] { border-color: var(--color-neutral-0); }
      [data-bc='neutral-50'] { border-color: var(--color-neutral-50); }
      [data-bc='neutral-100'] { border-color: var(--color-neutral-100); }
      [data-bc='neutral-200'] { border-color: var(--color-neutral-200); }
      [data-bc='neutral-300'] { border-color: var(--color-neutral-300); }
      [data-bc='neutral-400'] { border-color: var(--color-neutral-400); }
      [data-bc='neutral-500'] { border-color: var(--color-neutral-500); }
      [data-bc='neutral-600'] { border-color: var(--color-neutral-600); }
      [data-bc='neutral-700'] { border-color: var(--color-neutral-700); }
      [data-bc='neutral-800'] { border-color: var(--color-neutral-800); }
      [data-bc='neutral-900'] { border-color: var(--color-neutral-900); }
      [data-bc='neutral-950'] { border-color: var(--color-neutral-950); }

      [data-bc='foo'] { border-color: var(--color-foo); }

      [data-bc='brand-50'] { border-color: var(--color-brand-50); }
      [data-bc='brand-100'] { border-color: var(--color-brand-100); }
      [data-bc='brand-200'] { border-color: var(--color-brand-200); }
      [data-bc='brand-300'] { border-color: var(--color-brand-300); }
      [data-bc='brand-400'] { border-color: var(--color-brand-400); }
      [data-bc='brand-500'] { border-color: var(--color-brand-500); }
      [data-bc='brand-600'] { border-color: var(--color-brand-600); }
      [data-bc='brand-700'] { border-color: var(--color-brand-700); }
      [data-bc='brand-800'] { border-color: var(--color-brand-800); }
      [data-bc='brand-900'] { border-color: var(--color-brand-900); }

      [data-bc='positive-0'] { border-color: var(--color-positive-0); }
      [data-bc='positive-100'] { border-color: var(--color-positive-100); }
      [data-bc='positive-200'] { border-color: var(--color-positive-200); }
      [data-bc='positive-400'] { border-color: var(--color-positive-400); }
      [data-bc='positive-600'] { border-color: var(--color-positive-600); }
      [data-bc='positive-800'] { border-color: var(--color-positive-800); }
      [data-bc='positive-900'] { border-color: var(--color-positive-900); }

      [data-bc='danger-0'] { border-color: var(--color-danger-0); }
      [data-bc='danger-100'] { border-color: var(--color-danger-100); }
      [data-bc='danger-200'] { border-color: var(--color-danger-200); }
      [data-bc='danger-400'] { border-color: var(--color-danger-400); }
      [data-bc='danger-600'] { border-color: var(--color-danger-600); }
      [data-bc='danger-800'] { border-color: var(--color-danger-800); }
      [data-bc='danger-900'] { border-color: var(--color-danger-900); }

      [data-bc='warning-100'] { border-color: var(--color-warning-100); }
      [data-bc='warning-300'] { border-color: var(--color-warning-300); }
      [data-bc='warning-500'] { border-color: var(--color-warning-500); }
      [data-bc='warning-700'] { border-color: var(--color-warning-700); }
      [data-bc='warning-900'] { border-color: var(--color-warning-900); }

      [data-bcx='neutral-0'] { border-left-color: var(--color-neutral-0); border-right-color: var(--color-neutral-0); }
      [data-bcx='neutral-50'] { border-left-color: var(--color-neutral-50); border-right-color: var(--color-neutral-50); }
      [data-bcx='neutral-100'] { border-left-color: var(--color-neutral-100); border-right-color: var(--color-neutral-100); }
      [data-bcx='neutral-200'] { border-left-color: var(--color-neutral-200); border-right-color: var(--color-neutral-200); }
      [data-bcx='neutral-300'] { border-left-color: var(--color-neutral-300); border-right-color: var(--color-neutral-300); }
      [data-bcx='neutral-400'] { border-left-color: var(--color-neutral-400); border-right-color: var(--color-neutral-400); }
      [data-bcx='neutral-500'] { border-left-color: var(--color-neutral-500); border-right-color: var(--color-neutral-500); }
      [data-bcx='neutral-600'] { border-left-color: var(--color-neutral-600); border-right-color: var(--color-neutral-600); }
      [data-bcx='neutral-700'] { border-left-color: var(--color-neutral-700); border-right-color: var(--color-neutral-700); }
      [data-bcx='neutral-800'] { border-left-color: var(--color-neutral-800); border-right-color: var(--color-neutral-800); }
      [data-bcx='neutral-900'] { border-left-color: var(--color-neutral-900); border-right-color: var(--color-neutral-900); }
      [data-bcx='neutral-950'] { border-left-color: var(--color-neutral-950); border-right-color: var(--color-neutral-950); }

      [data-bcx='foo'] { border-left-color: var(--color-foo); border-right-color: var(--color-foo); }

      [data-bcx='brand-50'] { border-left-color: var(--color-brand-50); border-right-color: var(--color-brand-50); }
      [data-bcx='brand-100'] { border-left-color: var(--color-brand-100); border-right-color: var(--color-brand-100); }
      [data-bcx='brand-200'] { border-left-color: var(--color-brand-200); border-right-color: var(--color-brand-200); }
      [data-bcx='brand-300'] { border-left-color: var(--color-brand-300); border-right-color: var(--color-brand-300); }
      [data-bcx='brand-400'] { border-left-color: var(--color-brand-400); border-right-color: var(--color-brand-400); }
      [data-bcx='brand-500'] { border-left-color: var(--color-brand-500); border-right-color: var(--color-brand-500); }
      [data-bcx='brand-600'] { border-left-color: var(--color-brand-600); border-right-color: var(--color-brand-600); }
      [data-bcx='brand-700'] { border-left-color: var(--color-brand-700); border-right-color: var(--color-brand-700); }
      [data-bcx='brand-800'] { border-left-color: var(--color-brand-800); border-right-color: var(--color-brand-800); }
      [data-bcx='brand-900'] { border-left-color: var(--color-brand-900); border-right-color: var(--color-brand-900); }

      [data-bcx='positive-0'] { border-left-color: var(--color-positive-0); border-right-color: var(--color-positive-0); }
      [data-bcx='positive-100'] { border-left-color: var(--color-positive-100); border-right-color: var(--color-positive-100); }
      [data-bcx='positive-200'] { border-left-color: var(--color-positive-200); border-right-color: var(--color-positive-200); }
      [data-bcx='positive-400'] { border-left-color: var(--color-positive-400); border-right-color: var(--color-positive-400); }
      [data-bcx='positive-600'] { border-left-color: var(--color-positive-600); border-right-color: var(--color-positive-600); }
      [data-bcx='positive-800'] { border-left-color: var(--color-positive-800); border-right-color: var(--color-positive-800); }
      [data-bcx='positive-900'] { border-left-color: var(--color-positive-900); border-right-color: var(--color-positive-900); }

      [data-bcx='danger-0'] { border-left-color: var(--color-danger-0); border-right-color: var(--color-danger-0); }
      [data-bcx='danger-100'] { border-left-color: var(--color-danger-100); border-right-color: var(--color-danger-100); }
      [data-bcx='danger-200'] { border-left-color: var(--color-danger-200); border-right-color: var(--color-danger-200); }
      [data-bcx='danger-400'] { border-left-color: var(--color-danger-400); border-right-color: var(--color-danger-400); }
      [data-bcx='danger-600'] { border-left-color: var(--color-danger-600); border-right-color: var(--color-danger-600); }
      [data-bcx='danger-800'] { border-left-color: var(--color-danger-800); border-right-color: var(--color-danger-800); }
      [data-bcx='danger-900'] { border-left-color: var(--color-danger-900); border-right-color: var(--color-danger-900); }

      [data-bcx='warning-100'] { border-left-color: var(--color-warning-100); border-right-color: var(--color-warning-100); }
      [data-bcx='warning-300'] { border-left-color: var(--color-warning-300); border-right-color: var(--color-warning-300); }
      [data-bcx='warning-500'] { border-left-color: var(--color-warning-500); border-right-color: var(--color-warning-500); }
      [data-bcx='warning-700'] { border-left-color: var(--color-warning-700); border-right-color: var(--color-warning-700); }
      [data-bcx='warning-900'] { border-left-color: var(--color-warning-900); border-right-color: var(--color-warning-900); }

      [data-bcy='neutral-0'] { border-top-color: var(--color-neutral-0); border-bottom-color: var(--color-neutral-0); }
      [data-bcy='neutral-50'] { border-top-color: var(--color-neutral-50); border-bottom-color: var(--color-neutral-50); }
      [data-bcy='neutral-100'] { border-top-color: var(--color-neutral-100); border-bottom-color: var(--color-neutral-100); }
      [data-bcy='neutral-200'] { border-top-color: var(--color-neutral-200); border-bottom-color: var(--color-neutral-200); }
      [data-bcy='neutral-300'] { border-top-color: var(--color-neutral-300); border-bottom-color: var(--color-neutral-300); }
      [data-bcy='neutral-400'] { border-top-color: var(--color-neutral-400); border-bottom-color: var(--color-neutral-400); }
      [data-bcy='neutral-500'] { border-top-color: var(--color-neutral-500); border-bottom-color: var(--color-neutral-500); }
      [data-bcy='neutral-600'] { border-top-color: var(--color-neutral-600); border-bottom-color: var(--color-neutral-600); }
      [data-bcy='neutral-700'] { border-top-color: var(--color-neutral-700); border-bottom-color: var(--color-neutral-700); }
      [data-bcy='neutral-800'] { border-top-color: var(--color-neutral-800); border-bottom-color: var(--color-neutral-800); }
      [data-bcy='neutral-900'] { border-top-color: var(--color-neutral-900); border-bottom-color: var(--color-neutral-900); }
      [data-bcy='neutral-950'] { border-top-color: var(--color-neutral-950); border-bottom-color: var(--color-neutral-950); }

      [data-bcy='foo'] { border-top-color: var(--color-foo); border-bottom-color: var(--color-foo); }

      [data-bcy='brand-50'] { border-top-color: var(--color-brand-50); border-bottom-color: var(--color-brand-50); }
      [data-bcy='brand-100'] { border-top-color: var(--color-brand-100); border-bottom-color: var(--color-brand-100); }
      [data-bcy='brand-200'] { border-top-color: var(--color-brand-200); border-bottom-color: var(--color-brand-200); }
      [data-bcy='brand-300'] { border-top-color: var(--color-brand-300); border-bottom-color: var(--color-brand-300); }
      [data-bcy='brand-400'] { border-top-color: var(--color-brand-400); border-bottom-color: var(--color-brand-400); }
      [data-bcy='brand-500'] { border-top-color: var(--color-brand-500); border-bottom-color: var(--color-brand-500); }
      [data-bcy='brand-600'] { border-top-color: var(--color-brand-600); border-bottom-color: var(--color-brand-600); }
      [data-bcy='brand-700'] { border-top-color: var(--color-brand-700); border-bottom-color: var(--color-brand-700); }
      [data-bcy='brand-800'] { border-top-color: var(--color-brand-800); border-bottom-color: var(--color-brand-800); }
      [data-bcy='brand-900'] { border-top-color: var(--color-brand-900); border-bottom-color: var(--color-brand-900); }

      [data-bcy='positive-0'] { border-top-color: var(--color-positive-0); border-bottom-color: var(--color-positive-0); }
      [data-bcy='positive-100'] { border-top-color: var(--color-positive-100); border-bottom-color: var(--color-positive-100); }
      [data-bcy='positive-200'] { border-top-color: var(--color-positive-200); border-bottom-color: var(--color-positive-200); }
      [data-bcy='positive-400'] { border-top-color: var(--color-positive-400); border-bottom-color: var(--color-positive-400); }
      [data-bcy='positive-600'] { border-top-color: var(--color-positive-600); border-bottom-color: var(--color-positive-600); }
      [data-bcy='positive-800'] { border-top-color: var(--color-positive-800); border-bottom-color: var(--color-positive-800); }
      [data-bcy='positive-900'] { border-top-color: var(--color-positive-900); border-bottom-color: var(--color-positive-900); }

      [data-bcy='danger-0'] { border-top-color: var(--color-danger-0); border-bottom-color: var(--color-danger-0); }
      [data-bcy='danger-100'] { border-top-color: var(--color-danger-100); border-bottom-color: var(--color-danger-100); }
      [data-bcy='danger-200'] { border-top-color: var(--color-danger-200); border-bottom-color: var(--color-danger-200); }
      [data-bcy='danger-400'] { border-top-color: var(--color-danger-400); border-bottom-color: var(--color-danger-400); }
      [data-bcy='danger-600'] { border-top-color: var(--color-danger-600); border-bottom-color: var(--color-danger-600); }
      [data-bcy='danger-800'] { border-top-color: var(--color-danger-800); border-bottom-color: var(--color-danger-800); }
      [data-bcy='danger-900'] { border-top-color: var(--color-danger-900); border-bottom-color: var(--color-danger-900); }

      [data-bcy='warning-100'] { border-top-color: var(--color-warning-100); border-bottom-color: var(--color-warning-100); }
      [data-bcy='warning-300'] { border-top-color: var(--color-warning-300); border-bottom-color: var(--color-warning-300); }
      [data-bcy='warning-500'] { border-top-color: var(--color-warning-500); border-bottom-color: var(--color-warning-500); }
      [data-bcy='warning-700'] { border-top-color: var(--color-warning-700); border-bottom-color: var(--color-warning-700); }
      [data-bcy='warning-900'] { border-top-color: var(--color-warning-900); border-bottom-color: var(--color-warning-900); }

      [data-bct='neutral-0'] { border-top-color: var(--color-neutral-0); }
      [data-bct='neutral-50'] { border-top-color: var(--color-neutral-50); }
      [data-bct='neutral-100'] { border-top-color: var(--color-neutral-100); }
      [data-bct='neutral-200'] { border-top-color: var(--color-neutral-200); }
      [data-bct='neutral-300'] { border-top-color: var(--color-neutral-300); }
      [data-bct='neutral-400'] { border-top-color: var(--color-neutral-400); }
      [data-bct='neutral-500'] { border-top-color: var(--color-neutral-500); }
      [data-bct='neutral-600'] { border-top-color: var(--color-neutral-600); }
      [data-bct='neutral-700'] { border-top-color: var(--color-neutral-700); }
      [data-bct='neutral-800'] { border-top-color: var(--color-neutral-800); }
      [data-bct='neutral-900'] { border-top-color: var(--color-neutral-900); }
      [data-bct='neutral-950'] { border-top-color: var(--color-neutral-950); }

      [data-bct='foo'] { border-top-color: var(--color-foo); }

      [data-bct='brand-50'] { border-top-color: var(--color-brand-50); }
      [data-bct='brand-100'] { border-top-color: var(--color-brand-100); }
      [data-bct='brand-200'] { border-top-color: var(--color-brand-200); }
      [data-bct='brand-300'] { border-top-color: var(--color-brand-300); }
      [data-bct='brand-400'] { border-top-color: var(--color-brand-400); }
      [data-bct='brand-500'] { border-top-color: var(--color-brand-500); }
      [data-bct='brand-600'] { border-top-color: var(--color-brand-600); }
      [data-bct='brand-700'] { border-top-color: var(--color-brand-700); }
      [data-bct='brand-800'] { border-top-color: var(--color-brand-800); }
      [data-bct='brand-900'] { border-top-color: var(--color-brand-900); }

      [data-bct='positive-0'] { border-top-color: var(--color-positive-0); }
      [data-bct='positive-100'] { border-top-color: var(--color-positive-100); }
      [data-bct='positive-200'] { border-top-color: var(--color-positive-200); }
      [data-bct='positive-400'] { border-top-color: var(--color-positive-400); }
      [data-bct='positive-600'] { border-top-color: var(--color-positive-600); }
      [data-bct='positive-800'] { border-top-color: var(--color-positive-800); }
      [data-bct='positive-900'] { border-top-color: var(--color-positive-900); }

      [data-bct='danger-0'] { border-top-color: var(--color-danger-0); }
      [data-bct='danger-100'] { border-top-color: var(--color-danger-100); }
      [data-bct='danger-200'] { border-top-color: var(--color-danger-200); }
      [data-bct='danger-400'] { border-top-color: var(--color-danger-400); }
      [data-bct='danger-600'] { border-top-color: var(--color-danger-600); }
      [data-bct='danger-800'] { border-top-color: var(--color-danger-800); }
      [data-bct='danger-900'] { border-top-color: var(--color-danger-900); }

      [data-bct='warning-100'] { border-top-color: var(--color-warning-100); }
      [data-bct='warning-300'] { border-top-color: var(--color-warning-300); }
      [data-bct='warning-500'] { border-top-color: var(--color-warning-500); }
      [data-bct='warning-700'] { border-top-color: var(--color-warning-700); }
      [data-bct='warning-900'] { border-top-color: var(--color-warning-900); }

      [data-bcr='neutral-0'] { border-right-color: var(--color-neutral-0); }
      [data-bcr='neutral-50'] { border-right-color: var(--color-neutral-50); }
      [data-bcr='neutral-100'] { border-right-color: var(--color-neutral-100); }
      [data-bcr='neutral-200'] { border-right-color: var(--color-neutral-200); }
      [data-bcr='neutral-300'] { border-right-color: var(--color-neutral-300); }
      [data-bcr='neutral-400'] { border-right-color: var(--color-neutral-400); }
      [data-bcr='neutral-500'] { border-right-color: var(--color-neutral-500); }
      [data-bcr='neutral-600'] { border-right-color: var(--color-neutral-600); }
      [data-bcr='neutral-700'] { border-right-color: var(--color-neutral-700); }
      [data-bcr='neutral-800'] { border-right-color: var(--color-neutral-800); }
      [data-bcr='neutral-900'] { border-right-color: var(--color-neutral-900); }
      [data-bcr='neutral-950'] { border-right-color: var(--color-neutral-950); }

      [data-bcr='foo'] { border-right-color: var(--color-foo); }

      [data-bcr='brand-50'] { border-right-color: var(--color-brand-50); }
      [data-bcr='brand-100'] { border-right-color: var(--color-brand-100); }
      [data-bcr='brand-200'] { border-right-color: var(--color-brand-200); }
      [data-bcr='brand-300'] { border-right-color: var(--color-brand-300); }
      [data-bcr='brand-400'] { border-right-color: var(--color-brand-400); }
      [data-bcr='brand-500'] { border-right-color: var(--color-brand-500); }
      [data-bcr='brand-600'] { border-right-color: var(--color-brand-600); }
      [data-bcr='brand-700'] { border-right-color: var(--color-brand-700); }
      [data-bcr='brand-800'] { border-right-color: var(--color-brand-800); }
      [data-bcr='brand-900'] { border-right-color: var(--color-brand-900); }

      [data-bcr='positive-0'] { border-right-color: var(--color-positive-0); }
      [data-bcr='positive-100'] { border-right-color: var(--color-positive-100); }
      [data-bcr='positive-200'] { border-right-color: var(--color-positive-200); }
      [data-bcr='positive-400'] { border-right-color: var(--color-positive-400); }
      [data-bcr='positive-600'] { border-right-color: var(--color-positive-600); }
      [data-bcr='positive-800'] { border-right-color: var(--color-positive-800); }
      [data-bcr='positive-900'] { border-right-color: var(--color-positive-900); }

      [data-bcr='danger-0'] { border-right-color: var(--color-danger-0); }
      [data-bcr='danger-100'] { border-right-color: var(--color-danger-100); }
      [data-bcr='danger-200'] { border-right-color: var(--color-danger-200); }
      [data-bcr='danger-400'] { border-right-color: var(--color-danger-400); }
      [data-bcr='danger-600'] { border-right-color: var(--color-danger-600); }
      [data-bcr='danger-800'] { border-right-color: var(--color-danger-800); }
      [data-bcr='danger-900'] { border-right-color: var(--color-danger-900); }

      [data-bcr='warning-100'] { border-right-color: var(--color-warning-100); }
      [data-bcr='warning-300'] { border-right-color: var(--color-warning-300); }
      [data-bcr='warning-500'] { border-right-color: var(--color-warning-500); }
      [data-bcr='warning-700'] { border-right-color: var(--color-warning-700); }
      [data-bcr='warning-900'] { border-right-color: var(--color-warning-900); }

      [data-bcb='neutral-0'] { border-bottom-color: var(--color-neutral-0); }
      [data-bcb='neutral-50'] { border-bottom-color: var(--color-neutral-50); }
      [data-bcb='neutral-100'] { border-bottom-color: var(--color-neutral-100); }
      [data-bcb='neutral-200'] { border-bottom-color: var(--color-neutral-200); }
      [data-bcb='neutral-300'] { border-bottom-color: var(--color-neutral-300); }
      [data-bcb='neutral-400'] { border-bottom-color: var(--color-neutral-400); }
      [data-bcb='neutral-500'] { border-bottom-color: var(--color-neutral-500); }
      [data-bcb='neutral-600'] { border-bottom-color: var(--color-neutral-600); }
      [data-bcb='neutral-700'] { border-bottom-color: var(--color-neutral-700); }
      [data-bcb='neutral-800'] { border-bottom-color: var(--color-neutral-800); }
      [data-bcb='neutral-900'] { border-bottom-color: var(--color-neutral-900); }
      [data-bcb='neutral-950'] { border-bottom-color: var(--color-neutral-950); }

      [data-bcb='foo'] { border-bottom-color: var(--color-foo); }

      [data-bcb='brand-50'] { border-bottom-color: var(--color-brand-50); }
      [data-bcb='brand-100'] { border-bottom-color: var(--color-brand-100); }
      [data-bcb='brand-200'] { border-bottom-color: var(--color-brand-200); }
      [data-bcb='brand-300'] { border-bottom-color: var(--color-brand-300); }
      [data-bcb='brand-400'] { border-bottom-color: var(--color-brand-400); }
      [data-bcb='brand-500'] { border-bottom-color: var(--color-brand-500); }
      [data-bcb='brand-600'] { border-bottom-color: var(--color-brand-600); }
      [data-bcb='brand-700'] { border-bottom-color: var(--color-brand-700); }
      [data-bcb='brand-800'] { border-bottom-color: var(--color-brand-800); }
      [data-bcb='brand-900'] { border-bottom-color: var(--color-brand-900); }

      [data-bcb='positive-0'] { border-bottom-color: var(--color-positive-0); }
      [data-bcb='positive-100'] { border-bottom-color: var(--color-positive-100); }
      [data-bcb='positive-200'] { border-bottom-color: var(--color-positive-200); }
      [data-bcb='positive-400'] { border-bottom-color: var(--color-positive-400); }
      [data-bcb='positive-600'] { border-bottom-color: var(--color-positive-600); }
      [data-bcb='positive-800'] { border-bottom-color: var(--color-positive-800); }
      [data-bcb='positive-900'] { border-bottom-color: var(--color-positive-900); }

      [data-bcb='danger-0'] { border-bottom-color: var(--color-danger-0); }
      [data-bcb='danger-100'] { border-bottom-color: var(--color-danger-100); }
      [data-bcb='danger-200'] { border-bottom-color: var(--color-danger-200); }
      [data-bcb='danger-400'] { border-bottom-color: var(--color-danger-400); }
      [data-bcb='danger-600'] { border-bottom-color: var(--color-danger-600); }
      [data-bcb='danger-800'] { border-bottom-color: var(--color-danger-800); }
      [data-bcb='danger-900'] { border-bottom-color: var(--color-danger-900); }

      [data-bcb='warning-100'] { border-bottom-color: var(--color-warning-100); }
      [data-bcb='warning-300'] { border-bottom-color: var(--color-warning-300); }
      [data-bcb='warning-500'] { border-bottom-color: var(--color-warning-500); }
      [data-bcb='warning-700'] { border-bottom-color: var(--color-warning-700); }
      [data-bcb='warning-900'] { border-bottom-color: var(--color-warning-900); }

      [data-bcl='neutral-0'] { border-left-color: var(--color-neutral-0); }
      [data-bcl='neutral-50'] { border-left-color: var(--color-neutral-50); }
      [data-bcl='neutral-100'] { border-left-color: var(--color-neutral-100); }
      [data-bcl='neutral-200'] { border-left-color: var(--color-neutral-200); }
      [data-bcl='neutral-300'] { border-left-color: var(--color-neutral-300); }
      [data-bcl='neutral-400'] { border-left-color: var(--color-neutral-400); }
      [data-bcl='neutral-500'] { border-left-color: var(--color-neutral-500); }
      [data-bcl='neutral-600'] { border-left-color: var(--color-neutral-600); }
      [data-bcl='neutral-700'] { border-left-color: var(--color-neutral-700); }
      [data-bcl='neutral-800'] { border-left-color: var(--color-neutral-800); }
      [data-bcl='neutral-900'] { border-left-color: var(--color-neutral-900); }
      [data-bcl='neutral-950'] { border-left-color: var(--color-neutral-950); }

      [data-bcl='foo'] { border-left-color: var(--color-foo); }

      [data-bcl='brand-50'] { border-left-color: var(--color-brand-50); }
      [data-bcl='brand-100'] { border-left-color: var(--color-brand-100); }
      [data-bcl='brand-200'] { border-left-color: var(--color-brand-200); }
      [data-bcl='brand-300'] { border-left-color: var(--color-brand-300); }
      [data-bcl='brand-400'] { border-left-color: var(--color-brand-400); }
      [data-bcl='brand-500'] { border-left-color: var(--color-brand-500); }
      [data-bcl='brand-600'] { border-left-color: var(--color-brand-600); }
      [data-bcl='brand-700'] { border-left-color: var(--color-brand-700); }
      [data-bcl='brand-800'] { border-left-color: var(--color-brand-800); }
      [data-bcl='brand-900'] { border-left-color: var(--color-brand-900); }

      [data-bcl='positive-0'] { border-left-color: var(--color-positive-0); }
      [data-bcl='positive-100'] { border-left-color: var(--color-positive-100); }
      [data-bcl='positive-200'] { border-left-color: var(--color-positive-200); }
      [data-bcl='positive-400'] { border-left-color: var(--color-positive-400); }
      [data-bcl='positive-600'] { border-left-color: var(--color-positive-600); }
      [data-bcl='positive-800'] { border-left-color: var(--color-positive-800); }
      [data-bcl='positive-900'] { border-left-color: var(--color-positive-900); }

      [data-bcl='danger-0'] { border-left-color: var(--color-danger-0); }
      [data-bcl='danger-100'] { border-left-color: var(--color-danger-100); }
      [data-bcl='danger-200'] { border-left-color: var(--color-danger-200); }
      [data-bcl='danger-400'] { border-left-color: var(--color-danger-400); }
      [data-bcl='danger-600'] { border-left-color: var(--color-danger-600); }
      [data-bcl='danger-800'] { border-left-color: var(--color-danger-800); }
      [data-bcl='danger-900'] { border-left-color: var(--color-danger-900); }

      [data-bcl='warning-100'] { border-left-color: var(--color-warning-100); }
      [data-bcl='warning-300'] { border-left-color: var(--color-warning-300); }
      [data-bcl='warning-500'] { border-left-color: var(--color-warning-500); }
      [data-bcl='warning-700'] { border-left-color: var(--color-warning-700); }
      [data-bcl='warning-900'] { border-left-color: var(--color-warning-900); }


      [data-hover-bc='neutral-0']:hover:not(:disabled) { border-color: var(--color-neutral-0); }
      [data-hover-bc='neutral-50']:hover:not(:disabled) { border-color: var(--color-neutral-50); }
      [data-hover-bc='neutral-100']:hover:not(:disabled) { border-color: var(--color-neutral-100); }
      [data-hover-bc='neutral-200']:hover:not(:disabled) { border-color: var(--color-neutral-200); }
      [data-hover-bc='neutral-300']:hover:not(:disabled) { border-color: var(--color-neutral-300); }
      [data-hover-bc='neutral-400']:hover:not(:disabled) { border-color: var(--color-neutral-400); }
      [data-hover-bc='neutral-500']:hover:not(:disabled) { border-color: var(--color-neutral-500); }
      [data-hover-bc='neutral-600']:hover:not(:disabled) { border-color: var(--color-neutral-600); }
      [data-hover-bc='neutral-700']:hover:not(:disabled) { border-color: var(--color-neutral-700); }
      [data-hover-bc='neutral-800']:hover:not(:disabled) { border-color: var(--color-neutral-800); }
      [data-hover-bc='neutral-900']:hover:not(:disabled) { border-color: var(--color-neutral-900); }
      [data-hover-bc='neutral-950']:hover:not(:disabled) { border-color: var(--color-neutral-950); }

      [data-hover-bc='foo']:hover:not(:disabled) { border-color: var(--color-foo); }

      [data-hover-bc='brand-50']:hover:not(:disabled) { border-color: var(--color-brand-50); }
      [data-hover-bc='brand-100']:hover:not(:disabled) { border-color: var(--color-brand-100); }
      [data-hover-bc='brand-200']:hover:not(:disabled) { border-color: var(--color-brand-200); }
      [data-hover-bc='brand-300']:hover:not(:disabled) { border-color: var(--color-brand-300); }
      [data-hover-bc='brand-400']:hover:not(:disabled) { border-color: var(--color-brand-400); }
      [data-hover-bc='brand-500']:hover:not(:disabled) { border-color: var(--color-brand-500); }
      [data-hover-bc='brand-600']:hover:not(:disabled) { border-color: var(--color-brand-600); }
      [data-hover-bc='brand-700']:hover:not(:disabled) { border-color: var(--color-brand-700); }
      [data-hover-bc='brand-800']:hover:not(:disabled) { border-color: var(--color-brand-800); }
      [data-hover-bc='brand-900']:hover:not(:disabled) { border-color: var(--color-brand-900); }

      [data-hover-bc='positive-0']:hover:not(:disabled) { border-color: var(--color-positive-0); }
      [data-hover-bc='positive-100']:hover:not(:disabled) { border-color: var(--color-positive-100); }
      [data-hover-bc='positive-200']:hover:not(:disabled) { border-color: var(--color-positive-200); }
      [data-hover-bc='positive-400']:hover:not(:disabled) { border-color: var(--color-positive-400); }
      [data-hover-bc='positive-600']:hover:not(:disabled) { border-color: var(--color-positive-600); }
      [data-hover-bc='positive-800']:hover:not(:disabled) { border-color: var(--color-positive-800); }
      [data-hover-bc='positive-900']:hover:not(:disabled) { border-color: var(--color-positive-900); }

      [data-hover-bc='danger-0']:hover:not(:disabled) { border-color: var(--color-danger-0); }
      [data-hover-bc='danger-100']:hover:not(:disabled) { border-color: var(--color-danger-100); }
      [data-hover-bc='danger-200']:hover:not(:disabled) { border-color: var(--color-danger-200); }
      [data-hover-bc='danger-400']:hover:not(:disabled) { border-color: var(--color-danger-400); }
      [data-hover-bc='danger-600']:hover:not(:disabled) { border-color: var(--color-danger-600); }
      [data-hover-bc='danger-800']:hover:not(:disabled) { border-color: var(--color-danger-800); }
      [data-hover-bc='danger-900']:hover:not(:disabled) { border-color: var(--color-danger-900); }

      [data-hover-bc='warning-100']:hover:not(:disabled) { border-color: var(--color-warning-100); }
      [data-hover-bc='warning-300']:hover:not(:disabled) { border-color: var(--color-warning-300); }
      [data-hover-bc='warning-500']:hover:not(:disabled) { border-color: var(--color-warning-500); }
      [data-hover-bc='warning-700']:hover:not(:disabled) { border-color: var(--color-warning-700); }
      [data-hover-bc='warning-900']:hover:not(:disabled) { border-color: var(--color-warning-900); }


      [data-focus-bc='neutral-0']:focus-visible { border-color: var(--color-neutral-0); }
      [data-focus-bc='neutral-50']:focus-visible { border-color: var(--color-neutral-50); }
      [data-focus-bc='neutral-100']:focus-visible { border-color: var(--color-neutral-100); }
      [data-focus-bc='neutral-200']:focus-visible { border-color: var(--color-neutral-200); }
      [data-focus-bc='neutral-300']:focus-visible { border-color: var(--color-neutral-300); }
      [data-focus-bc='neutral-400']:focus-visible { border-color: var(--color-neutral-400); }
      [data-focus-bc='neutral-500']:focus-visible { border-color: var(--color-neutral-500); }
      [data-focus-bc='neutral-600']:focus-visible { border-color: var(--color-neutral-600); }
      [data-focus-bc='neutral-700']:focus-visible { border-color: var(--color-neutral-700); }
      [data-focus-bc='neutral-800']:focus-visible { border-color: var(--color-neutral-800); }
      [data-focus-bc='neutral-900']:focus-visible { border-color: var(--color-neutral-900); }
      [data-focus-bc='neutral-950']:focus-visible { border-color: var(--color-neutral-950); }

      [data-focus-bc='foo']:focus-visible { border-color: var(--color-foo); }

      [data-focus-bc='brand-50']:focus-visible { border-color: var(--color-brand-50); }
      [data-focus-bc='brand-100']:focus-visible { border-color: var(--color-brand-100); }
      [data-focus-bc='brand-200']:focus-visible { border-color: var(--color-brand-200); }
      [data-focus-bc='brand-300']:focus-visible { border-color: var(--color-brand-300); }
      [data-focus-bc='brand-400']:focus-visible { border-color: var(--color-brand-400); }
      [data-focus-bc='brand-500']:focus-visible { border-color: var(--color-brand-500); }
      [data-focus-bc='brand-600']:focus-visible { border-color: var(--color-brand-600); }
      [data-focus-bc='brand-700']:focus-visible { border-color: var(--color-brand-700); }
      [data-focus-bc='brand-800']:focus-visible { border-color: var(--color-brand-800); }
      [data-focus-bc='brand-900']:focus-visible { border-color: var(--color-brand-900); }

      [data-focus-bc='positive-0']:focus-visible { border-color: var(--color-positive-0); }
      [data-focus-bc='positive-100']:focus-visible { border-color: var(--color-positive-100); }
      [data-focus-bc='positive-200']:focus-visible { border-color: var(--color-positive-200); }
      [data-focus-bc='positive-400']:focus-visible { border-color: var(--color-positive-400); }
      [data-focus-bc='positive-600']:focus-visible { border-color: var(--color-positive-600); }
      [data-focus-bc='positive-800']:focus-visible { border-color: var(--color-positive-800); }
      [data-focus-bc='positive-900']:focus-visible { border-color: var(--color-positive-900); }

      [data-focus-bc='danger-0']:focus-visible { border-color: var(--color-danger-0); }
      [data-focus-bc='danger-100']:focus-visible { border-color: var(--color-danger-100); }
      [data-focus-bc='danger-200']:focus-visible { border-color: var(--color-danger-200); }
      [data-focus-bc='danger-400']:focus-visible { border-color: var(--color-danger-400); }
      [data-focus-bc='danger-600']:focus-visible { border-color: var(--color-danger-600); }
      [data-focus-bc='danger-800']:focus-visible { border-color: var(--color-danger-800); }
      [data-focus-bc='danger-900']:focus-visible { border-color: var(--color-danger-900); }

      [data-focus-bc='warning-100']:focus-visible { border-color: var(--color-warning-100); }
      [data-focus-bc='warning-300']:focus-visible { border-color: var(--color-warning-300); }
      [data-focus-bc='warning-500']:focus-visible { border-color: var(--color-warning-500); }
      [data-focus-bc='warning-700']:focus-visible { border-color: var(--color-warning-700); }
      [data-focus-bc='warning-900']:focus-visible { border-color: var(--color-warning-900); }


      @media (max-width: 768px) {
        [data-md-bc='neutral-0'] { border-color: var(--color-neutral-0); }
        [data-md-bc='neutral-50'] { border-color: var(--color-neutral-50); }
        [data-md-bc='neutral-100'] { border-color: var(--color-neutral-100); }
        [data-md-bc='neutral-200'] { border-color: var(--color-neutral-200); }
        [data-md-bc='neutral-300'] { border-color: var(--color-neutral-300); }
        [data-md-bc='neutral-400'] { border-color: var(--color-neutral-400); }
        [data-md-bc='neutral-500'] { border-color: var(--color-neutral-500); }
        [data-md-bc='neutral-600'] { border-color: var(--color-neutral-600); }
        [data-md-bc='neutral-700'] { border-color: var(--color-neutral-700); }
        [data-md-bc='neutral-800'] { border-color: var(--color-neutral-800); }
        [data-md-bc='neutral-900'] { border-color: var(--color-neutral-900); }
        [data-md-bc='neutral-950'] { border-color: var(--color-neutral-950); }

        [data-md-bc='foo'] { border-color: var(--color-foo); }

        [data-md-bc='brand-50'] { border-color: var(--color-brand-50); }
        [data-md-bc='brand-100'] { border-color: var(--color-brand-100); }
        [data-md-bc='brand-200'] { border-color: var(--color-brand-200); }
        [data-md-bc='brand-300'] { border-color: var(--color-brand-300); }
        [data-md-bc='brand-400'] { border-color: var(--color-brand-400); }
        [data-md-bc='brand-500'] { border-color: var(--color-brand-500); }
        [data-md-bc='brand-600'] { border-color: var(--color-brand-600); }
        [data-md-bc='brand-700'] { border-color: var(--color-brand-700); }
        [data-md-bc='brand-800'] { border-color: var(--color-brand-800); }
        [data-md-bc='brand-900'] { border-color: var(--color-brand-900); }

        [data-md-bc='positive-0'] { border-color: var(--color-positive-0); }
        [data-md-bc='positive-100'] { border-color: var(--color-positive-100); }
        [data-md-bc='positive-200'] { border-color: var(--color-positive-200); }
        [data-md-bc='positive-400'] { border-color: var(--color-positive-400); }
        [data-md-bc='positive-600'] { border-color: var(--color-positive-600); }
        [data-md-bc='positive-800'] { border-color: var(--color-positive-800); }
        [data-md-bc='positive-900'] { border-color: var(--color-positive-900); }

        [data-md-bc='danger-0'] { border-color: var(--color-danger-0); }
        [data-md-bc='danger-100'] { border-color: var(--color-danger-100); }
        [data-md-bc='danger-200'] { border-color: var(--color-danger-200); }
        [data-md-bc='danger-400'] { border-color: var(--color-danger-400); }
        [data-md-bc='danger-600'] { border-color: var(--color-danger-600); }
        [data-md-bc='danger-800'] { border-color: var(--color-danger-800); }
        [data-md-bc='danger-900'] { border-color: var(--color-danger-900); }

        [data-md-bc='warning-100'] { border-color: var(--color-warning-100); }
        [data-md-bc='warning-300'] { border-color: var(--color-warning-300); }
        [data-md-bc='warning-500'] { border-color: var(--color-warning-500); }
        [data-md-bc='warning-700'] { border-color: var(--color-warning-700); }
        [data-md-bc='warning-900'] { border-color: var(--color-warning-900); }

        [data-md-bcx='neutral-0'] { border-left-color: var(--color-neutral-0); border-right-color: var(--color-neutral-0); }
        [data-md-bcx='neutral-50'] { border-left-color: var(--color-neutral-50); border-right-color: var(--color-neutral-50); }
        [data-md-bcx='neutral-100'] { border-left-color: var(--color-neutral-100); border-right-color: var(--color-neutral-100); }
        [data-md-bcx='neutral-200'] { border-left-color: var(--color-neutral-200); border-right-color: var(--color-neutral-200); }
        [data-md-bcx='neutral-300'] { border-left-color: var(--color-neutral-300); border-right-color: var(--color-neutral-300); }
        [data-md-bcx='neutral-400'] { border-left-color: var(--color-neutral-400); border-right-color: var(--color-neutral-400); }
        [data-md-bcx='neutral-500'] { border-left-color: var(--color-neutral-500); border-right-color: var(--color-neutral-500); }
        [data-md-bcx='neutral-600'] { border-left-color: var(--color-neutral-600); border-right-color: var(--color-neutral-600); }
        [data-md-bcx='neutral-700'] { border-left-color: var(--color-neutral-700); border-right-color: var(--color-neutral-700); }
        [data-md-bcx='neutral-800'] { border-left-color: var(--color-neutral-800); border-right-color: var(--color-neutral-800); }
        [data-md-bcx='neutral-900'] { border-left-color: var(--color-neutral-900); border-right-color: var(--color-neutral-900); }
        [data-md-bcx='neutral-950'] { border-left-color: var(--color-neutral-950); border-right-color: var(--color-neutral-950); }

        [data-md-bcx='foo'] { border-left-color: var(--color-foo); border-right-color: var(--color-foo); }

        [data-md-bcx='brand-50'] { border-left-color: var(--color-brand-50); border-right-color: var(--color-brand-50); }
        [data-md-bcx='brand-100'] { border-left-color: var(--color-brand-100); border-right-color: var(--color-brand-100); }
        [data-md-bcx='brand-200'] { border-left-color: var(--color-brand-200); border-right-color: var(--color-brand-200); }
        [data-md-bcx='brand-300'] { border-left-color: var(--color-brand-300); border-right-color: var(--color-brand-300); }
        [data-md-bcx='brand-400'] { border-left-color: var(--color-brand-400); border-right-color: var(--color-brand-400); }
        [data-md-bcx='brand-500'] { border-left-color: var(--color-brand-500); border-right-color: var(--color-brand-500); }
        [data-md-bcx='brand-600'] { border-left-color: var(--color-brand-600); border-right-color: var(--color-brand-600); }
        [data-md-bcx='brand-700'] { border-left-color: var(--color-brand-700); border-right-color: var(--color-brand-700); }
        [data-md-bcx='brand-800'] { border-left-color: var(--color-brand-800); border-right-color: var(--color-brand-800); }
        [data-md-bcx='brand-900'] { border-left-color: var(--color-brand-900); border-right-color: var(--color-brand-900); }

        [data-md-bcx='positive-0'] { border-left-color: var(--color-positive-0); border-right-color: var(--color-positive-0); }
        [data-md-bcx='positive-100'] { border-left-color: var(--color-positive-100); border-right-color: var(--color-positive-100); }
        [data-md-bcx='positive-200'] { border-left-color: var(--color-positive-200); border-right-color: var(--color-positive-200); }
        [data-md-bcx='positive-400'] { border-left-color: var(--color-positive-400); border-right-color: var(--color-positive-400); }
        [data-md-bcx='positive-600'] { border-left-color: var(--color-positive-600); border-right-color: var(--color-positive-600); }
        [data-md-bcx='positive-800'] { border-left-color: var(--color-positive-800); border-right-color: var(--color-positive-800); }
        [data-md-bcx='positive-900'] { border-left-color: var(--color-positive-900); border-right-color: var(--color-positive-900); }

        [data-md-bcx='danger-0'] { border-left-color: var(--color-danger-0); border-right-color: var(--color-danger-0); }
        [data-md-bcx='danger-100'] { border-left-color: var(--color-danger-100); border-right-color: var(--color-danger-100); }
        [data-md-bcx='danger-200'] { border-left-color: var(--color-danger-200); border-right-color: var(--color-danger-200); }
        [data-md-bcx='danger-400'] { border-left-color: var(--color-danger-400); border-right-color: var(--color-danger-400); }
        [data-md-bcx='danger-600'] { border-left-color: var(--color-danger-600); border-right-color: var(--color-danger-600); }
        [data-md-bcx='danger-800'] { border-left-color: var(--color-danger-800); border-right-color: var(--color-danger-800); }
        [data-md-bcx='danger-900'] { border-left-color: var(--color-danger-900); border-right-color: var(--color-danger-900); }

        [data-md-bcx='warning-100'] { border-left-color: var(--color-warning-100); border-right-color: var(--color-warning-100); }
        [data-md-bcx='warning-300'] { border-left-color: var(--color-warning-300); border-right-color: var(--color-warning-300); }
        [data-md-bcx='warning-500'] { border-left-color: var(--color-warning-500); border-right-color: var(--color-warning-500); }
        [data-md-bcx='warning-700'] { border-left-color: var(--color-warning-700); border-right-color: var(--color-warning-700); }
        [data-md-bcx='warning-900'] { border-left-color: var(--color-warning-900); border-right-color: var(--color-warning-900); }

        [data-md-bcy='neutral-0'] { border-top-color: var(--color-neutral-0); border-bottom-color: var(--color-neutral-0); }
        [data-md-bcy='neutral-50'] { border-top-color: var(--color-neutral-50); border-bottom-color: var(--color-neutral-50); }
        [data-md-bcy='neutral-100'] { border-top-color: var(--color-neutral-100); border-bottom-color: var(--color-neutral-100); }
        [data-md-bcy='neutral-200'] { border-top-color: var(--color-neutral-200); border-bottom-color: var(--color-neutral-200); }
        [data-md-bcy='neutral-300'] { border-top-color: var(--color-neutral-300); border-bottom-color: var(--color-neutral-300); }
        [data-md-bcy='neutral-400'] { border-top-color: var(--color-neutral-400); border-bottom-color: var(--color-neutral-400); }
        [data-md-bcy='neutral-500'] { border-top-color: var(--color-neutral-500); border-bottom-color: var(--color-neutral-500); }
        [data-md-bcy='neutral-600'] { border-top-color: var(--color-neutral-600); border-bottom-color: var(--color-neutral-600); }
        [data-md-bcy='neutral-700'] { border-top-color: var(--color-neutral-700); border-bottom-color: var(--color-neutral-700); }
        [data-md-bcy='neutral-800'] { border-top-color: var(--color-neutral-800); border-bottom-color: var(--color-neutral-800); }
        [data-md-bcy='neutral-900'] { border-top-color: var(--color-neutral-900); border-bottom-color: var(--color-neutral-900); }
        [data-md-bcy='neutral-950'] { border-top-color: var(--color-neutral-950); border-bottom-color: var(--color-neutral-950); }

        [data-md-bcy='foo'] { border-top-color: var(--color-foo); border-bottom-color: var(--color-foo); }

        [data-md-bcy='brand-50'] { border-top-color: var(--color-brand-50); border-bottom-color: var(--color-brand-50); }
        [data-md-bcy='brand-100'] { border-top-color: var(--color-brand-100); border-bottom-color: var(--color-brand-100); }
        [data-md-bcy='brand-200'] { border-top-color: var(--color-brand-200); border-bottom-color: var(--color-brand-200); }
        [data-md-bcy='brand-300'] { border-top-color: var(--color-brand-300); border-bottom-color: var(--color-brand-300); }
        [data-md-bcy='brand-400'] { border-top-color: var(--color-brand-400); border-bottom-color: var(--color-brand-400); }
        [data-md-bcy='brand-500'] { border-top-color: var(--color-brand-500); border-bottom-color: var(--color-brand-500); }
        [data-md-bcy='brand-600'] { border-top-color: var(--color-brand-600); border-bottom-color: var(--color-brand-600); }
        [data-md-bcy='brand-700'] { border-top-color: var(--color-brand-700); border-bottom-color: var(--color-brand-700); }
        [data-md-bcy='brand-800'] { border-top-color: var(--color-brand-800); border-bottom-color: var(--color-brand-800); }
        [data-md-bcy='brand-900'] { border-top-color: var(--color-brand-900); border-bottom-color: var(--color-brand-900); }

        [data-md-bcy='positive-0'] { border-top-color: var(--color-positive-0); border-bottom-color: var(--color-positive-0); }
        [data-md-bcy='positive-100'] { border-top-color: var(--color-positive-100); border-bottom-color: var(--color-positive-100); }
        [data-md-bcy='positive-200'] { border-top-color: var(--color-positive-200); border-bottom-color: var(--color-positive-200); }
        [data-md-bcy='positive-400'] { border-top-color: var(--color-positive-400); border-bottom-color: var(--color-positive-400); }
        [data-md-bcy='positive-600'] { border-top-color: var(--color-positive-600); border-bottom-color: var(--color-positive-600); }
        [data-md-bcy='positive-800'] { border-top-color: var(--color-positive-800); border-bottom-color: var(--color-positive-800); }
        [data-md-bcy='positive-900'] { border-top-color: var(--color-positive-900); border-bottom-color: var(--color-positive-900); }

        [data-md-bcy='danger-0'] { border-top-color: var(--color-danger-0); border-bottom-color: var(--color-danger-0); }
        [data-md-bcy='danger-100'] { border-top-color: var(--color-danger-100); border-bottom-color: var(--color-danger-100); }
        [data-md-bcy='danger-200'] { border-top-color: var(--color-danger-200); border-bottom-color: var(--color-danger-200); }
        [data-md-bcy='danger-400'] { border-top-color: var(--color-danger-400); border-bottom-color: var(--color-danger-400); }
        [data-md-bcy='danger-600'] { border-top-color: var(--color-danger-600); border-bottom-color: var(--color-danger-600); }
        [data-md-bcy='danger-800'] { border-top-color: var(--color-danger-800); border-bottom-color: var(--color-danger-800); }
        [data-md-bcy='danger-900'] { border-top-color: var(--color-danger-900); border-bottom-color: var(--color-danger-900); }

        [data-md-bcy='warning-100'] { border-top-color: var(--color-warning-100); border-bottom-color: var(--color-warning-100); }
        [data-md-bcy='warning-300'] { border-top-color: var(--color-warning-300); border-bottom-color: var(--color-warning-300); }
        [data-md-bcy='warning-500'] { border-top-color: var(--color-warning-500); border-bottom-color: var(--color-warning-500); }
        [data-md-bcy='warning-700'] { border-top-color: var(--color-warning-700); border-bottom-color: var(--color-warning-700); }
        [data-md-bcy='warning-900'] { border-top-color: var(--color-warning-900); border-bottom-color: var(--color-warning-900); }

        [data-md-bct='neutral-0'] { border-top-color: var(--color-neutral-0); }
        [data-md-bct='neutral-50'] { border-top-color: var(--color-neutral-50); }
        [data-md-bct='neutral-100'] { border-top-color: var(--color-neutral-100); }
        [data-md-bct='neutral-200'] { border-top-color: var(--color-neutral-200); }
        [data-md-bct='neutral-300'] { border-top-color: var(--color-neutral-300); }
        [data-md-bct='neutral-400'] { border-top-color: var(--color-neutral-400); }
        [data-md-bct='neutral-500'] { border-top-color: var(--color-neutral-500); }
        [data-md-bct='neutral-600'] { border-top-color: var(--color-neutral-600); }
        [data-md-bct='neutral-700'] { border-top-color: var(--color-neutral-700); }
        [data-md-bct='neutral-800'] { border-top-color: var(--color-neutral-800); }
        [data-md-bct='neutral-900'] { border-top-color: var(--color-neutral-900); }
        [data-md-bct='neutral-950'] { border-top-color: var(--color-neutral-950); }

        [data-md-bct='foo'] { border-top-color: var(--color-foo); }

        [data-md-bct='brand-50'] { border-top-color: var(--color-brand-50); }
        [data-md-bct='brand-100'] { border-top-color: var(--color-brand-100); }
        [data-md-bct='brand-200'] { border-top-color: var(--color-brand-200); }
        [data-md-bct='brand-300'] { border-top-color: var(--color-brand-300); }
        [data-md-bct='brand-400'] { border-top-color: var(--color-brand-400); }
        [data-md-bct='brand-500'] { border-top-color: var(--color-brand-500); }
        [data-md-bct='brand-600'] { border-top-color: var(--color-brand-600); }
        [data-md-bct='brand-700'] { border-top-color: var(--color-brand-700); }
        [data-md-bct='brand-800'] { border-top-color: var(--color-brand-800); }
        [data-md-bct='brand-900'] { border-top-color: var(--color-brand-900); }

        [data-md-bct='positive-0'] { border-top-color: var(--color-positive-0); }
        [data-md-bct='positive-100'] { border-top-color: var(--color-positive-100); }
        [data-md-bct='positive-200'] { border-top-color: var(--color-positive-200); }
        [data-md-bct='positive-400'] { border-top-color: var(--color-positive-400); }
        [data-md-bct='positive-600'] { border-top-color: var(--color-positive-600); }
        [data-md-bct='positive-800'] { border-top-color: var(--color-positive-800); }
        [data-md-bct='positive-900'] { border-top-color: var(--color-positive-900); }

        [data-md-bct='danger-0'] { border-top-color: var(--color-danger-0); }
        [data-md-bct='danger-100'] { border-top-color: var(--color-danger-100); }
        [data-md-bct='danger-200'] { border-top-color: var(--color-danger-200); }
        [data-md-bct='danger-400'] { border-top-color: var(--color-danger-400); }
        [data-md-bct='danger-600'] { border-top-color: var(--color-danger-600); }
        [data-md-bct='danger-800'] { border-top-color: var(--color-danger-800); }
        [data-md-bct='danger-900'] { border-top-color: var(--color-danger-900); }

        [data-md-bct='warning-100'] { border-top-color: var(--color-warning-100); }
        [data-md-bct='warning-300'] { border-top-color: var(--color-warning-300); }
        [data-md-bct='warning-500'] { border-top-color: var(--color-warning-500); }
        [data-md-bct='warning-700'] { border-top-color: var(--color-warning-700); }
        [data-md-bct='warning-900'] { border-top-color: var(--color-warning-900); }

        [data-md-bcr='neutral-0'] { border-right-color: var(--color-neutral-0); }
        [data-md-bcr='neutral-50'] { border-right-color: var(--color-neutral-50); }
        [data-md-bcr='neutral-100'] { border-right-color: var(--color-neutral-100); }
        [data-md-bcr='neutral-200'] { border-right-color: var(--color-neutral-200); }
        [data-md-bcr='neutral-300'] { border-right-color: var(--color-neutral-300); }
        [data-md-bcr='neutral-400'] { border-right-color: var(--color-neutral-400); }
        [data-md-bcr='neutral-500'] { border-right-color: var(--color-neutral-500); }
        [data-md-bcr='neutral-600'] { border-right-color: var(--color-neutral-600); }
        [data-md-bcr='neutral-700'] { border-right-color: var(--color-neutral-700); }
        [data-md-bcr='neutral-800'] { border-right-color: var(--color-neutral-800); }
        [data-md-bcr='neutral-900'] { border-right-color: var(--color-neutral-900); }
        [data-md-bcr='neutral-950'] { border-right-color: var(--color-neutral-950); }

        [data-md-bcr='foo'] { border-right-color: var(--color-foo); }

        [data-md-bcr='brand-50'] { border-right-color: var(--color-brand-50); }
        [data-md-bcr='brand-100'] { border-right-color: var(--color-brand-100); }
        [data-md-bcr='brand-200'] { border-right-color: var(--color-brand-200); }
        [data-md-bcr='brand-300'] { border-right-color: var(--color-brand-300); }
        [data-md-bcr='brand-400'] { border-right-color: var(--color-brand-400); }
        [data-md-bcr='brand-500'] { border-right-color: var(--color-brand-500); }
        [data-md-bcr='brand-600'] { border-right-color: var(--color-brand-600); }
        [data-md-bcr='brand-700'] { border-right-color: var(--color-brand-700); }
        [data-md-bcr='brand-800'] { border-right-color: var(--color-brand-800); }
        [data-md-bcr='brand-900'] { border-right-color: var(--color-brand-900); }

        [data-md-bcr='positive-0'] { border-right-color: var(--color-positive-0); }
        [data-md-bcr='positive-100'] { border-right-color: var(--color-positive-100); }
        [data-md-bcr='positive-200'] { border-right-color: var(--color-positive-200); }
        [data-md-bcr='positive-400'] { border-right-color: var(--color-positive-400); }
        [data-md-bcr='positive-600'] { border-right-color: var(--color-positive-600); }
        [data-md-bcr='positive-800'] { border-right-color: var(--color-positive-800); }
        [data-md-bcr='positive-900'] { border-right-color: var(--color-positive-900); }

        [data-md-bcr='danger-0'] { border-right-color: var(--color-danger-0); }
        [data-md-bcr='danger-100'] { border-right-color: var(--color-danger-100); }
        [data-md-bcr='danger-200'] { border-right-color: var(--color-danger-200); }
        [data-md-bcr='danger-400'] { border-right-color: var(--color-danger-400); }
        [data-md-bcr='danger-600'] { border-right-color: var(--color-danger-600); }
        [data-md-bcr='danger-800'] { border-right-color: var(--color-danger-800); }
        [data-md-bcr='danger-900'] { border-right-color: var(--color-danger-900); }

        [data-md-bcr='warning-100'] { border-right-color: var(--color-warning-100); }
        [data-md-bcr='warning-300'] { border-right-color: var(--color-warning-300); }
        [data-md-bcr='warning-500'] { border-right-color: var(--color-warning-500); }
        [data-md-bcr='warning-700'] { border-right-color: var(--color-warning-700); }
        [data-md-bcr='warning-900'] { border-right-color: var(--color-warning-900); }

        [data-md-bcb='neutral-0'] { border-bottom-color: var(--color-neutral-0); }
        [data-md-bcb='neutral-50'] { border-bottom-color: var(--color-neutral-50); }
        [data-md-bcb='neutral-100'] { border-bottom-color: var(--color-neutral-100); }
        [data-md-bcb='neutral-200'] { border-bottom-color: var(--color-neutral-200); }
        [data-md-bcb='neutral-300'] { border-bottom-color: var(--color-neutral-300); }
        [data-md-bcb='neutral-400'] { border-bottom-color: var(--color-neutral-400); }
        [data-md-bcb='neutral-500'] { border-bottom-color: var(--color-neutral-500); }
        [data-md-bcb='neutral-600'] { border-bottom-color: var(--color-neutral-600); }
        [data-md-bcb='neutral-700'] { border-bottom-color: var(--color-neutral-700); }
        [data-md-bcb='neutral-800'] { border-bottom-color: var(--color-neutral-800); }
        [data-md-bcb='neutral-900'] { border-bottom-color: var(--color-neutral-900); }
        [data-md-bcb='neutral-950'] { border-bottom-color: var(--color-neutral-950); }

        [data-md-bcb='foo'] { border-bottom-color: var(--color-foo); }

        [data-md-bcb='brand-50'] { border-bottom-color: var(--color-brand-50); }
        [data-md-bcb='brand-100'] { border-bottom-color: var(--color-brand-100); }
        [data-md-bcb='brand-200'] { border-bottom-color: var(--color-brand-200); }
        [data-md-bcb='brand-300'] { border-bottom-color: var(--color-brand-300); }
        [data-md-bcb='brand-400'] { border-bottom-color: var(--color-brand-400); }
        [data-md-bcb='brand-500'] { border-bottom-color: var(--color-brand-500); }
        [data-md-bcb='brand-600'] { border-bottom-color: var(--color-brand-600); }
        [data-md-bcb='brand-700'] { border-bottom-color: var(--color-brand-700); }
        [data-md-bcb='brand-800'] { border-bottom-color: var(--color-brand-800); }
        [data-md-bcb='brand-900'] { border-bottom-color: var(--color-brand-900); }

        [data-md-bcb='positive-0'] { border-bottom-color: var(--color-positive-0); }
        [data-md-bcb='positive-100'] { border-bottom-color: var(--color-positive-100); }
        [data-md-bcb='positive-200'] { border-bottom-color: var(--color-positive-200); }
        [data-md-bcb='positive-400'] { border-bottom-color: var(--color-positive-400); }
        [data-md-bcb='positive-600'] { border-bottom-color: var(--color-positive-600); }
        [data-md-bcb='positive-800'] { border-bottom-color: var(--color-positive-800); }
        [data-md-bcb='positive-900'] { border-bottom-color: var(--color-positive-900); }

        [data-md-bcb='danger-0'] { border-bottom-color: var(--color-danger-0); }
        [data-md-bcb='danger-100'] { border-bottom-color: var(--color-danger-100); }
        [data-md-bcb='danger-200'] { border-bottom-color: var(--color-danger-200); }
        [data-md-bcb='danger-400'] { border-bottom-color: var(--color-danger-400); }
        [data-md-bcb='danger-600'] { border-bottom-color: var(--color-danger-600); }
        [data-md-bcb='danger-800'] { border-bottom-color: var(--color-danger-800); }
        [data-md-bcb='danger-900'] { border-bottom-color: var(--color-danger-900); }

        [data-md-bcb='warning-100'] { border-bottom-color: var(--color-warning-100); }
        [data-md-bcb='warning-300'] { border-bottom-color: var(--color-warning-300); }
        [data-md-bcb='warning-500'] { border-bottom-color: var(--color-warning-500); }
        [data-md-bcb='warning-700'] { border-bottom-color: var(--color-warning-700); }
        [data-md-bcb='warning-900'] { border-bottom-color: var(--color-warning-900); }

        [data-md-bcl='neutral-0'] { border-left-color: var(--color-neutral-0); }
        [data-md-bcl='neutral-50'] { border-left-color: var(--color-neutral-50); }
        [data-md-bcl='neutral-100'] { border-left-color: var(--color-neutral-100); }
        [data-md-bcl='neutral-200'] { border-left-color: var(--color-neutral-200); }
        [data-md-bcl='neutral-300'] { border-left-color: var(--color-neutral-300); }
        [data-md-bcl='neutral-400'] { border-left-color: var(--color-neutral-400); }
        [data-md-bcl='neutral-500'] { border-left-color: var(--color-neutral-500); }
        [data-md-bcl='neutral-600'] { border-left-color: var(--color-neutral-600); }
        [data-md-bcl='neutral-700'] { border-left-color: var(--color-neutral-700); }
        [data-md-bcl='neutral-800'] { border-left-color: var(--color-neutral-800); }
        [data-md-bcl='neutral-900'] { border-left-color: var(--color-neutral-900); }
        [data-md-bcl='neutral-950'] { border-left-color: var(--color-neutral-950); }

        [data-md-bcl='foo'] { border-left-color: var(--color-foo); }

        [data-md-bcl='brand-50'] { border-left-color: var(--color-brand-50); }
        [data-md-bcl='brand-100'] { border-left-color: var(--color-brand-100); }
        [data-md-bcl='brand-200'] { border-left-color: var(--color-brand-200); }
        [data-md-bcl='brand-300'] { border-left-color: var(--color-brand-300); }
        [data-md-bcl='brand-400'] { border-left-color: var(--color-brand-400); }
        [data-md-bcl='brand-500'] { border-left-color: var(--color-brand-500); }
        [data-md-bcl='brand-600'] { border-left-color: var(--color-brand-600); }
        [data-md-bcl='brand-700'] { border-left-color: var(--color-brand-700); }
        [data-md-bcl='brand-800'] { border-left-color: var(--color-brand-800); }
        [data-md-bcl='brand-900'] { border-left-color: var(--color-brand-900); }

        [data-md-bcl='positive-0'] { border-left-color: var(--color-positive-0); }
        [data-md-bcl='positive-100'] { border-left-color: var(--color-positive-100); }
        [data-md-bcl='positive-200'] { border-left-color: var(--color-positive-200); }
        [data-md-bcl='positive-400'] { border-left-color: var(--color-positive-400); }
        [data-md-bcl='positive-600'] { border-left-color: var(--color-positive-600); }
        [data-md-bcl='positive-800'] { border-left-color: var(--color-positive-800); }
        [data-md-bcl='positive-900'] { border-left-color: var(--color-positive-900); }

        [data-md-bcl='danger-0'] { border-left-color: var(--color-danger-0); }
        [data-md-bcl='danger-100'] { border-left-color: var(--color-danger-100); }
        [data-md-bcl='danger-200'] { border-left-color: var(--color-danger-200); }
        [data-md-bcl='danger-400'] { border-left-color: var(--color-danger-400); }
        [data-md-bcl='danger-600'] { border-left-color: var(--color-danger-600); }
        [data-md-bcl='danger-800'] { border-left-color: var(--color-danger-800); }
        [data-md-bcl='danger-900'] { border-left-color: var(--color-danger-900); }

        [data-md-bcl='warning-100'] { border-left-color: var(--color-warning-100); }
        [data-md-bcl='warning-300'] { border-left-color: var(--color-warning-300); }
        [data-md-bcl='warning-500'] { border-left-color: var(--color-warning-500); }
        [data-md-bcl='warning-700'] { border-left-color: var(--color-warning-700); }
        [data-md-bcl='warning-900'] { border-left-color: var(--color-warning-900); }


        [data-md-hover-bc='neutral-0']:hover:not(:disabled) { border-color: var(--color-neutral-0); }
        [data-md-hover-bc='neutral-50']:hover:not(:disabled) { border-color: var(--color-neutral-50); }
        [data-md-hover-bc='neutral-100']:hover:not(:disabled) { border-color: var(--color-neutral-100); }
        [data-md-hover-bc='neutral-200']:hover:not(:disabled) { border-color: var(--color-neutral-200); }
        [data-md-hover-bc='neutral-300']:hover:not(:disabled) { border-color: var(--color-neutral-300); }
        [data-md-hover-bc='neutral-400']:hover:not(:disabled) { border-color: var(--color-neutral-400); }
        [data-md-hover-bc='neutral-500']:hover:not(:disabled) { border-color: var(--color-neutral-500); }
        [data-md-hover-bc='neutral-600']:hover:not(:disabled) { border-color: var(--color-neutral-600); }
        [data-md-hover-bc='neutral-700']:hover:not(:disabled) { border-color: var(--color-neutral-700); }
        [data-md-hover-bc='neutral-800']:hover:not(:disabled) { border-color: var(--color-neutral-800); }
        [data-md-hover-bc='neutral-900']:hover:not(:disabled) { border-color: var(--color-neutral-900); }
        [data-md-hover-bc='neutral-950']:hover:not(:disabled) { border-color: var(--color-neutral-950); }

        [data-md-hover-bc='foo']:hover:not(:disabled) { border-color: var(--color-foo); }

        [data-md-hover-bc='brand-50']:hover:not(:disabled) { border-color: var(--color-brand-50); }
        [data-md-hover-bc='brand-100']:hover:not(:disabled) { border-color: var(--color-brand-100); }
        [data-md-hover-bc='brand-200']:hover:not(:disabled) { border-color: var(--color-brand-200); }
        [data-md-hover-bc='brand-300']:hover:not(:disabled) { border-color: var(--color-brand-300); }
        [data-md-hover-bc='brand-400']:hover:not(:disabled) { border-color: var(--color-brand-400); }
        [data-md-hover-bc='brand-500']:hover:not(:disabled) { border-color: var(--color-brand-500); }
        [data-md-hover-bc='brand-600']:hover:not(:disabled) { border-color: var(--color-brand-600); }
        [data-md-hover-bc='brand-700']:hover:not(:disabled) { border-color: var(--color-brand-700); }
        [data-md-hover-bc='brand-800']:hover:not(:disabled) { border-color: var(--color-brand-800); }
        [data-md-hover-bc='brand-900']:hover:not(:disabled) { border-color: var(--color-brand-900); }

        [data-md-hover-bc='positive-0']:hover:not(:disabled) { border-color: var(--color-positive-0); }
        [data-md-hover-bc='positive-100']:hover:not(:disabled) { border-color: var(--color-positive-100); }
        [data-md-hover-bc='positive-200']:hover:not(:disabled) { border-color: var(--color-positive-200); }
        [data-md-hover-bc='positive-400']:hover:not(:disabled) { border-color: var(--color-positive-400); }
        [data-md-hover-bc='positive-600']:hover:not(:disabled) { border-color: var(--color-positive-600); }
        [data-md-hover-bc='positive-800']:hover:not(:disabled) { border-color: var(--color-positive-800); }
        [data-md-hover-bc='positive-900']:hover:not(:disabled) { border-color: var(--color-positive-900); }

        [data-md-hover-bc='danger-0']:hover:not(:disabled) { border-color: var(--color-danger-0); }
        [data-md-hover-bc='danger-100']:hover:not(:disabled) { border-color: var(--color-danger-100); }
        [data-md-hover-bc='danger-200']:hover:not(:disabled) { border-color: var(--color-danger-200); }
        [data-md-hover-bc='danger-400']:hover:not(:disabled) { border-color: var(--color-danger-400); }
        [data-md-hover-bc='danger-600']:hover:not(:disabled) { border-color: var(--color-danger-600); }
        [data-md-hover-bc='danger-800']:hover:not(:disabled) { border-color: var(--color-danger-800); }
        [data-md-hover-bc='danger-900']:hover:not(:disabled) { border-color: var(--color-danger-900); }

        [data-md-hover-bc='warning-100']:hover:not(:disabled) { border-color: var(--color-warning-100); }
        [data-md-hover-bc='warning-300']:hover:not(:disabled) { border-color: var(--color-warning-300); }
        [data-md-hover-bc='warning-500']:hover:not(:disabled) { border-color: var(--color-warning-500); }
        [data-md-hover-bc='warning-700']:hover:not(:disabled) { border-color: var(--color-warning-700); }
        [data-md-hover-bc='warning-900']:hover:not(:disabled) { border-color: var(--color-warning-900); }


        [data-md-focus-bc='neutral-0']:focus-visible { border-color: var(--color-neutral-0); }
        [data-md-focus-bc='neutral-50']:focus-visible { border-color: var(--color-neutral-50); }
        [data-md-focus-bc='neutral-100']:focus-visible { border-color: var(--color-neutral-100); }
        [data-md-focus-bc='neutral-200']:focus-visible { border-color: var(--color-neutral-200); }
        [data-md-focus-bc='neutral-300']:focus-visible { border-color: var(--color-neutral-300); }
        [data-md-focus-bc='neutral-400']:focus-visible { border-color: var(--color-neutral-400); }
        [data-md-focus-bc='neutral-500']:focus-visible { border-color: var(--color-neutral-500); }
        [data-md-focus-bc='neutral-600']:focus-visible { border-color: var(--color-neutral-600); }
        [data-md-focus-bc='neutral-700']:focus-visible { border-color: var(--color-neutral-700); }
        [data-md-focus-bc='neutral-800']:focus-visible { border-color: var(--color-neutral-800); }
        [data-md-focus-bc='neutral-900']:focus-visible { border-color: var(--color-neutral-900); }
        [data-md-focus-bc='neutral-950']:focus-visible { border-color: var(--color-neutral-950); }

        [data-md-focus-bc='foo']:focus-visible { border-color: var(--color-foo); }

        [data-md-focus-bc='brand-50']:focus-visible { border-color: var(--color-brand-50); }
        [data-md-focus-bc='brand-100']:focus-visible { border-color: var(--color-brand-100); }
        [data-md-focus-bc='brand-200']:focus-visible { border-color: var(--color-brand-200); }
        [data-md-focus-bc='brand-300']:focus-visible { border-color: var(--color-brand-300); }
        [data-md-focus-bc='brand-400']:focus-visible { border-color: var(--color-brand-400); }
        [data-md-focus-bc='brand-500']:focus-visible { border-color: var(--color-brand-500); }
        [data-md-focus-bc='brand-600']:focus-visible { border-color: var(--color-brand-600); }
        [data-md-focus-bc='brand-700']:focus-visible { border-color: var(--color-brand-700); }
        [data-md-focus-bc='brand-800']:focus-visible { border-color: var(--color-brand-800); }
        [data-md-focus-bc='brand-900']:focus-visible { border-color: var(--color-brand-900); }

        [data-md-focus-bc='positive-0']:focus-visible { border-color: var(--color-positive-0); }
        [data-md-focus-bc='positive-100']:focus-visible { border-color: var(--color-positive-100); }
        [data-md-focus-bc='positive-200']:focus-visible { border-color: var(--color-positive-200); }
        [data-md-focus-bc='positive-400']:focus-visible { border-color: var(--color-positive-400); }
        [data-md-focus-bc='positive-600']:focus-visible { border-color: var(--color-positive-600); }
        [data-md-focus-bc='positive-800']:focus-visible { border-color: var(--color-positive-800); }
        [data-md-focus-bc='positive-900']:focus-visible { border-color: var(--color-positive-900); }

        [data-md-focus-bc='danger-0']:focus-visible { border-color: var(--color-danger-0); }
        [data-md-focus-bc='danger-100']:focus-visible { border-color: var(--color-danger-100); }
        [data-md-focus-bc='danger-200']:focus-visible { border-color: var(--color-danger-200); }
        [data-md-focus-bc='danger-400']:focus-visible { border-color: var(--color-danger-400); }
        [data-md-focus-bc='danger-600']:focus-visible { border-color: var(--color-danger-600); }
        [data-md-focus-bc='danger-800']:focus-visible { border-color: var(--color-danger-800); }
        [data-md-focus-bc='danger-900']:focus-visible { border-color: var(--color-danger-900); }

        [data-md-focus-bc='warning-100']:focus-visible { border-color: var(--color-warning-100); }
        [data-md-focus-bc='warning-300']:focus-visible { border-color: var(--color-warning-300); }
        [data-md-focus-bc='warning-500']:focus-visible { border-color: var(--color-warning-500); }
        [data-md-focus-bc='warning-700']:focus-visible { border-color: var(--color-warning-700); }
        [data-md-focus-bc='warning-900']:focus-visible { border-color: var(--color-warning-900); }
      }
   `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-bct"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" |"brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-bcr"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-bcb"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-bcl"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-bcx"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-bcy"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-hover-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-focus-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bct"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" |"brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bcr"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bcb"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bcl"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bcx"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-bcy"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-hover-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
      "data-md-focus-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
    `);
  });
});

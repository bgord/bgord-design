import { describe, expect, test } from "bun:test";
import * as Tokens from "../src/tokens";
import { BorderColorUtilityGenerator } from "../src/utilities";

describe("BorderColorUtilityGenerator", () => {
  test("basic usage", () => {
    const GrayscaleTokenGenerator = new Tokens.GrayscaleTokenGenerator();
    const BrandTokenGenerator = new Tokens.BrandTokenGenerator();
    const PositiveTokenGenerator = new Tokens.PositiveTokenGenerator();
    const DangerTokenGenerator = new Tokens.DangerTokenGenerator();
    const WarningTokenGenerator = new Tokens.WarningTokenGenerator();
    const generator = new BorderColorUtilityGenerator(
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );

    expect(generator.name).toEqual("Border color utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-bc='neutral-0'] { border-color: var(--color-neutral-0); border-style: solid; }
      [data-bc='neutral-50'] { border-color: var(--color-neutral-50); border-style: solid; }
      [data-bc='neutral-100'] { border-color: var(--color-neutral-100); border-style: solid; } 
      [data-bc='neutral-200'] { border-color: var(--color-neutral-200); border-style: solid; }
      [data-bc='neutral-300'] { border-color: var(--color-neutral-300); border-style: solid; }
      [data-bc='neutral-400'] { border-color: var(--color-neutral-400); border-style: solid; }
      [data-bc='neutral-500'] { border-color: var(--color-neutral-500); border-style: solid; }
      [data-bc='neutral-600'] { border-color: var(--color-neutral-600); border-style: solid; }
      [data-bc='neutral-700'] { border-color: var(--color-neutral-700); border-style: solid; }
      [data-bc='neutral-800'] { border-color: var(--color-neutral-800); border-style: solid; }
      [data-bc='neutral-900'] { border-color: var(--color-neutral-900); border-style: solid; }
      [data-bc='neutral-950'] { border-color: var(--color-neutral-950); border-style: solid; }

      [data-bc='brand-50'] { border-color: var(--color-brand-50); border-style: solid; }
      [data-bc='brand-100'] { border-color: var(--color-brand-100); border-style: solid; }
      [data-bc='brand-200'] { border-color: var(--color-brand-200); border-style: solid; }
      [data-bc='brand-300'] { border-color: var(--color-brand-300); border-style: solid; }
      [data-bc='brand-400'] { border-color: var(--color-brand-400); border-style: solid; }
      [data-bc='brand-500'] { border-color: var(--color-brand-500); border-style: solid; }
      [data-bc='brand-600'] { border-color: var(--color-brand-600); border-style: solid; }
      [data-bc='brand-700'] { border-color: var(--color-brand-700); border-style: solid; }
      [data-bc='brand-800'] { border-color: var(--color-brand-800); border-style: solid; }
      [data-bc='brand-900'] { border-color: var(--color-brand-900); border-style: solid; }

      [data-bc='positive-0'] { border-color: var(--color-positive-0); border-style: solid; }
      [data-bc='positive-100'] { border-color: var(--color-positive-100); border-style: solid; }
      [data-bc='positive-200'] { border-color: var(--color-positive-200); border-style: solid; }
      [data-bc='positive-400'] { border-color: var(--color-positive-400); border-style: solid; }
      [data-bc='positive-600'] { border-color: var(--color-positive-600); border-style: solid; }
      [data-bc='positive-800'] { border-color: var(--color-positive-800); border-style: solid; }
      [data-bc='positive-900'] { border-color: var(--color-positive-900); border-style: solid; }

      [data-bc='danger-0'] { border-color: var(--color-danger-0); border-style: solid; }
      [data-bc='danger-100'] { border-color: var(--color-danger-100); border-style: solid; }
      [data-bc='danger-200'] { border-color: var(--color-danger-200); border-style: solid; }
      [data-bc='danger-400'] { border-color: var(--color-danger-400); border-style: solid; }
      [data-bc='danger-600'] { border-color: var(--color-danger-600); border-style: solid; }
      [data-bc='danger-800'] { border-color: var(--color-danger-800); border-style: solid; }
      [data-bc='danger-900'] { border-color: var(--color-danger-900); border-style: solid; }

      [data-bc='warning-100'] { border-color: var(--color-warning-100); border-style: solid; }
      [data-bc='warning-300'] { border-color: var(--color-warning-300); border-style: solid; }
      [data-bc='warning-500'] { border-color: var(--color-warning-500); border-style: solid; }
      [data-bc='warning-700'] { border-color: var(--color-warning-700); border-style: solid; }
      [data-bc='warning-900'] { border-color: var(--color-warning-900); border-style: solid; }


      [data-bcx='neutral-0'] { border-left-color: var(--color-neutral-0); border-right-color: var(--color-neutral-0); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-50'] { border-left-color: var(--color-neutral-50); border-right-color: var(--color-neutral-50); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-100'] { border-left-color: var(--color-neutral-100); border-right-color: var(--color-neutral-100); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-200'] { border-left-color: var(--color-neutral-200); border-right-color: var(--color-neutral-200); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-300'] { border-left-color: var(--color-neutral-300); border-right-color: var(--color-neutral-300); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-400'] { border-left-color: var(--color-neutral-400); border-right-color: var(--color-neutral-400); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-500'] { border-left-color: var(--color-neutral-500); border-right-color: var(--color-neutral-500); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-600'] { border-left-color: var(--color-neutral-600); border-right-color: var(--color-neutral-600); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-700'] { border-left-color: var(--color-neutral-700); border-right-color: var(--color-neutral-700); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-800'] { border-left-color: var(--color-neutral-800); border-right-color: var(--color-neutral-800); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-900'] { border-left-color: var(--color-neutral-900); border-right-color: var(--color-neutral-900); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-950'] { border-left-color: var(--color-neutral-950); border-right-color: var(--color-neutral-950); border-left-style: solid; border-right-style: solid; }

      [data-bcx='brand-50'] { border-left-color: var(--color-brand-50); border-right-color: var(--color-brand-50); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-100'] { border-left-color: var(--color-brand-100); border-right-color: var(--color-brand-100); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-200'] { border-left-color: var(--color-brand-200); border-right-color: var(--color-brand-200); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-300'] { border-left-color: var(--color-brand-300); border-right-color: var(--color-brand-300); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-400'] { border-left-color: var(--color-brand-400); border-right-color: var(--color-brand-400); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-500'] { border-left-color: var(--color-brand-500); border-right-color: var(--color-brand-500); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-600'] { border-left-color: var(--color-brand-600); border-right-color: var(--color-brand-600); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-700'] { border-left-color: var(--color-brand-700); border-right-color: var(--color-brand-700); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-800'] { border-left-color: var(--color-brand-800); border-right-color: var(--color-brand-800); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-900'] { border-left-color: var(--color-brand-900); border-right-color: var(--color-brand-900); border-left-style: solid; border-right-style: solid; }

      [data-bcx='positive-0'] { border-left-color: var(--color-positive-0); border-right-color: var(--color-positive-0); border-left-style: solid; border-right-style: solid; }
      [data-bcx='positive-100'] { border-left-color: var(--color-positive-100); border-right-color: var(--color-positive-100); border-left-style: solid; border-right-style: solid; }
      [data-bcx='positive-200'] { border-left-color: var(--color-positive-200); border-right-color: var(--color-positive-200); border-left-style: solid; border-right-style: solid; }
      [data-bcx='positive-400'] { border-left-color: var(--color-positive-400); border-right-color: var(--color-positive-400); border-left-style: solid; border-right-style: solid; }
      [data-bcx='positive-600'] { border-left-color: var(--color-positive-600); border-right-color: var(--color-positive-600); border-left-style: solid; border-right-style: solid; }
      [data-bcx='positive-800'] { border-left-color: var(--color-positive-800); border-right-color: var(--color-positive-800); border-left-style: solid; border-right-style: solid; }
      [data-bcx='positive-900'] { border-left-color: var(--color-positive-900); border-right-color: var(--color-positive-900); border-left-style: solid; border-right-style: solid; }

      [data-bcx='danger-0'] { border-left-color: var(--color-danger-0); border-right-color: var(--color-danger-0); border-left-style: solid; border-right-style: solid; }
      [data-bcx='danger-100'] { border-left-color: var(--color-danger-100); border-right-color: var(--color-danger-100); border-left-style: solid; border-right-style: solid; }
      [data-bcx='danger-200'] { border-left-color: var(--color-danger-200); border-right-color: var(--color-danger-200); border-left-style: solid; border-right-style: solid; }
      [data-bcx='danger-400'] { border-left-color: var(--color-danger-400); border-right-color: var(--color-danger-400); border-left-style: solid; border-right-style: solid; }
      [data-bcx='danger-600'] { border-left-color: var(--color-danger-600); border-right-color: var(--color-danger-600); border-left-style: solid; border-right-style: solid; }
      [data-bcx='danger-800'] { border-left-color: var(--color-danger-800); border-right-color: var(--color-danger-800); border-left-style: solid; border-right-style: solid; }
      [data-bcx='danger-900'] { border-left-color: var(--color-danger-900); border-right-color: var(--color-danger-900); border-left-style: solid; border-right-style: solid; }

      [data-bcx='warning-100'] { border-left-color: var(--color-warning-100); border-right-color: var(--color-warning-100); border-left-style: solid; border-right-style: solid; }
      [data-bcx='warning-300'] { border-left-color: var(--color-warning-300); border-right-color: var(--color-warning-300); border-left-style: solid; border-right-style: solid; }
      [data-bcx='warning-500'] { border-left-color: var(--color-warning-500); border-right-color: var(--color-warning-500); border-left-style: solid; border-right-style: solid; }
      [data-bcx='warning-700'] { border-left-color: var(--color-warning-700); border-right-color: var(--color-warning-700); border-left-style: solid; border-right-style: solid; }
      [data-bcx='warning-900'] { border-left-color: var(--color-warning-900); border-right-color: var(--color-warning-900); border-left-style: solid; border-right-style: solid; }


      [data-bcy='neutral-0'] { border-top-color: var(--color-neutral-0); border-bottom-color: var(--color-neutral-0); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-50'] { border-top-color: var(--color-neutral-50); border-bottom-color: var(--color-neutral-50); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-100'] { border-top-color: var(--color-neutral-100); border-bottom-color: var(--color-neutral-100); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-200'] { border-top-color: var(--color-neutral-200); border-bottom-color: var(--color-neutral-200); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-300'] { border-top-color: var(--color-neutral-300); border-bottom-color: var(--color-neutral-300); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-400'] { border-top-color: var(--color-neutral-400); border-bottom-color: var(--color-neutral-400); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-500'] { border-top-color: var(--color-neutral-500); border-bottom-color: var(--color-neutral-500); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-600'] { border-top-color: var(--color-neutral-600); border-bottom-color: var(--color-neutral-600); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-700'] { border-top-color: var(--color-neutral-700); border-bottom-color: var(--color-neutral-700); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-800'] { border-top-color: var(--color-neutral-800); border-bottom-color: var(--color-neutral-800); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-900'] { border-top-color: var(--color-neutral-900); border-bottom-color: var(--color-neutral-900); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-950'] { border-top-color: var(--color-neutral-950); border-bottom-color: var(--color-neutral-950); border-top-style: solid; border-bottom-style: solid; }

      [data-bcy='brand-50'] { border-top-color: var(--color-brand-50); border-bottom-color: var(--color-brand-50); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-100'] { border-top-color: var(--color-brand-100); border-bottom-color: var(--color-brand-100); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-200'] { border-top-color: var(--color-brand-200); border-bottom-color: var(--color-brand-200); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-300'] { border-top-color: var(--color-brand-300); border-bottom-color: var(--color-brand-300); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-400'] { border-top-color: var(--color-brand-400); border-bottom-color: var(--color-brand-400); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-500'] { border-top-color: var(--color-brand-500); border-bottom-color: var(--color-brand-500); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-600'] { border-top-color: var(--color-brand-600); border-bottom-color: var(--color-brand-600); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-700'] { border-top-color: var(--color-brand-700); border-bottom-color: var(--color-brand-700); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-800'] { border-top-color: var(--color-brand-800); border-bottom-color: var(--color-brand-800); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-900'] { border-top-color: var(--color-brand-900); border-bottom-color: var(--color-brand-900); border-top-style: solid; border-bottom-style: solid; }

      [data-bcy='positive-0'] { border-top-color: var(--color-positive-0); border-bottom-color: var(--color-positive-0); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='positive-100'] { border-top-color: var(--color-positive-100); border-bottom-color: var(--color-positive-100); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='positive-200'] { border-top-color: var(--color-positive-200); border-bottom-color: var(--color-positive-200); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='positive-400'] { border-top-color: var(--color-positive-400); border-bottom-color: var(--color-positive-400); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='positive-600'] { border-top-color: var(--color-positive-600); border-bottom-color: var(--color-positive-600); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='positive-800'] { border-top-color: var(--color-positive-800); border-bottom-color: var(--color-positive-800); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='positive-900'] { border-top-color: var(--color-positive-900); border-bottom-color: var(--color-positive-900); border-top-style: solid; border-bottom-style: solid; }

      [data-bcy='danger-0'] { border-top-color: var(--color-danger-0); border-bottom-color: var(--color-danger-0); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='danger-100'] { border-top-color: var(--color-danger-100); border-bottom-color: var(--color-danger-100); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='danger-200'] { border-top-color: var(--color-danger-200); border-bottom-color: var(--color-danger-200); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='danger-400'] { border-top-color: var(--color-danger-400); border-bottom-color: var(--color-danger-400); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='danger-600'] { border-top-color: var(--color-danger-600); border-bottom-color: var(--color-danger-600); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='danger-800'] { border-top-color: var(--color-danger-800); border-bottom-color: var(--color-danger-800); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='danger-900'] { border-top-color: var(--color-danger-900); border-bottom-color: var(--color-danger-900); border-top-style: solid; border-bottom-style: solid; }

      [data-bcy='warning-100'] { border-top-color: var(--color-warning-100); border-bottom-color: var(--color-warning-100); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='warning-300'] { border-top-color: var(--color-warning-300); border-bottom-color: var(--color-warning-300); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='warning-500'] { border-top-color: var(--color-warning-500); border-bottom-color: var(--color-warning-500); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='warning-700'] { border-top-color: var(--color-warning-700); border-bottom-color: var(--color-warning-700); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='warning-900'] { border-top-color: var(--color-warning-900); border-bottom-color: var(--color-warning-900); border-top-style: solid; border-bottom-style: solid; }


      [data-bct='neutral-0'] { border-top-color: var(--color-neutral-0); border-top-style: solid; }
      [data-bct='neutral-50'] { border-top-color: var(--color-neutral-50); border-top-style: solid; }
      [data-bct='neutral-100'] { border-top-color: var(--color-neutral-100); border-top-style: solid; }
      [data-bct='neutral-200'] { border-top-color: var(--color-neutral-200); border-top-style: solid; }
      [data-bct='neutral-300'] { border-top-color: var(--color-neutral-300); border-top-style: solid; }
      [data-bct='neutral-400'] { border-top-color: var(--color-neutral-400); border-top-style: solid; }
      [data-bct='neutral-500'] { border-top-color: var(--color-neutral-500); border-top-style: solid; }
      [data-bct='neutral-600'] { border-top-color: var(--color-neutral-600); border-top-style: solid; }
      [data-bct='neutral-700'] { border-top-color: var(--color-neutral-700); border-top-style: solid; }
      [data-bct='neutral-800'] { border-top-color: var(--color-neutral-800); border-top-style: solid; }
      [data-bct='neutral-900'] { border-top-color: var(--color-neutral-900); border-top-style: solid; }
      [data-bct='neutral-950'] { border-top-color: var(--color-neutral-950); border-top-style: solid; }

      [data-bct='brand-50'] { border-top-color: var(--color-brand-50); border-top-style: solid; }
      [data-bct='brand-100'] { border-top-color: var(--color-brand-100); border-top-style: solid; }
      [data-bct='brand-200'] { border-top-color: var(--color-brand-200); border-top-style: solid; }
      [data-bct='brand-300'] { border-top-color: var(--color-brand-300); border-top-style: solid; }
      [data-bct='brand-400'] { border-top-color: var(--color-brand-400); border-top-style: solid; }
      [data-bct='brand-500'] { border-top-color: var(--color-brand-500); border-top-style: solid; }
      [data-bct='brand-600'] { border-top-color: var(--color-brand-600); border-top-style: solid; }
      [data-bct='brand-700'] { border-top-color: var(--color-brand-700); border-top-style: solid; }
      [data-bct='brand-800'] { border-top-color: var(--color-brand-800); border-top-style: solid; }
      [data-bct='brand-900'] { border-top-color: var(--color-brand-900); border-top-style: solid; }

      [data-bct='positive-0'] { border-top-color: var(--color-positive-0); border-top-style: solid; }
      [data-bct='positive-100'] { border-top-color: var(--color-positive-100); border-top-style: solid; }
      [data-bct='positive-200'] { border-top-color: var(--color-positive-200); border-top-style: solid; }
      [data-bct='positive-400'] { border-top-color: var(--color-positive-400); border-top-style: solid; }
      [data-bct='positive-600'] { border-top-color: var(--color-positive-600); border-top-style: solid; }
      [data-bct='positive-800'] { border-top-color: var(--color-positive-800); border-top-style: solid; }
      [data-bct='positive-900'] { border-top-color: var(--color-positive-900); border-top-style: solid; }

      [data-bct='danger-0'] { border-top-color: var(--color-danger-0); border-top-style: solid; }
      [data-bct='danger-100'] { border-top-color: var(--color-danger-100); border-top-style: solid; }
      [data-bct='danger-200'] { border-top-color: var(--color-danger-200); border-top-style: solid; }
      [data-bct='danger-400'] { border-top-color: var(--color-danger-400); border-top-style: solid; }
      [data-bct='danger-600'] { border-top-color: var(--color-danger-600); border-top-style: solid; }
      [data-bct='danger-800'] { border-top-color: var(--color-danger-800); border-top-style: solid; }
      [data-bct='danger-900'] { border-top-color: var(--color-danger-900); border-top-style: solid; }

      [data-bct='warning-100'] { border-top-color: var(--color-warning-100); border-top-style: solid; }
      [data-bct='warning-300'] { border-top-color: var(--color-warning-300); border-top-style: solid; }
      [data-bct='warning-500'] { border-top-color: var(--color-warning-500); border-top-style: solid; }
      [data-bct='warning-700'] { border-top-color: var(--color-warning-700); border-top-style: solid; }
      [data-bct='warning-900'] { border-top-color: var(--color-warning-900); border-top-style: solid; }


      [data-bcr='neutral-0'] { border-right-color: var(--color-neutral-0); border-right-style: solid; }
      [data-bcr='neutral-50'] { border-right-color: var(--color-neutral-50); border-right-style: solid; }
      [data-bcr='neutral-100'] { border-right-color: var(--color-neutral-100); border-right-style: solid; }
      [data-bcr='neutral-200'] { border-right-color: var(--color-neutral-200); border-right-style: solid; }
      [data-bcr='neutral-300'] { border-right-color: var(--color-neutral-300); border-right-style: solid; }
      [data-bcr='neutral-400'] { border-right-color: var(--color-neutral-400); border-right-style: solid; }
      [data-bcr='neutral-500'] { border-right-color: var(--color-neutral-500); border-right-style: solid; }
      [data-bcr='neutral-600'] { border-right-color: var(--color-neutral-600); border-right-style: solid; }
      [data-bcr='neutral-700'] { border-right-color: var(--color-neutral-700); border-right-style: solid; }
      [data-bcr='neutral-800'] { border-right-color: var(--color-neutral-800); border-right-style: solid; }
      [data-bcr='neutral-900'] { border-right-color: var(--color-neutral-900); border-right-style: solid; }
      [data-bcr='neutral-950'] { border-right-color: var(--color-neutral-950); border-right-style: solid; }

      [data-bcr='brand-50'] { border-right-color: var(--color-brand-50); border-right-style: solid; }
      [data-bcr='brand-100'] { border-right-color: var(--color-brand-100); border-right-style: solid; }
      [data-bcr='brand-200'] { border-right-color: var(--color-brand-200); border-right-style: solid; }
      [data-bcr='brand-300'] { border-right-color: var(--color-brand-300); border-right-style: solid; }
      [data-bcr='brand-400'] { border-right-color: var(--color-brand-400); border-right-style: solid; }
      [data-bcr='brand-500'] { border-right-color: var(--color-brand-500); border-right-style: solid; }
      [data-bcr='brand-600'] { border-right-color: var(--color-brand-600); border-right-style: solid; }
      [data-bcr='brand-700'] { border-right-color: var(--color-brand-700); border-right-style: solid; }
      [data-bcr='brand-800'] { border-right-color: var(--color-brand-800); border-right-style: solid; }
      [data-bcr='brand-900'] { border-right-color: var(--color-brand-900); border-right-style: solid; }

      [data-bcr='positive-0'] { border-right-color: var(--color-positive-0); border-right-style: solid; }
      [data-bcr='positive-100'] { border-right-color: var(--color-positive-100); border-right-style: solid; }
      [data-bcr='positive-200'] { border-right-color: var(--color-positive-200); border-right-style: solid; }
      [data-bcr='positive-400'] { border-right-color: var(--color-positive-400); border-right-style: solid; }
      [data-bcr='positive-600'] { border-right-color: var(--color-positive-600); border-right-style: solid; }
      [data-bcr='positive-800'] { border-right-color: var(--color-positive-800); border-right-style: solid; }
      [data-bcr='positive-900'] { border-right-color: var(--color-positive-900); border-right-style: solid; }

      [data-bcr='danger-0'] { border-right-color: var(--color-danger-0); border-right-style: solid; }
      [data-bcr='danger-100'] { border-right-color: var(--color-danger-100); border-right-style: solid; }
      [data-bcr='danger-200'] { border-right-color: var(--color-danger-200); border-right-style: solid; }
      [data-bcr='danger-400'] { border-right-color: var(--color-danger-400); border-right-style: solid; }
      [data-bcr='danger-600'] { border-right-color: var(--color-danger-600); border-right-style: solid; }
      [data-bcr='danger-800'] { border-right-color: var(--color-danger-800); border-right-style: solid; }
      [data-bcr='danger-900'] { border-right-color: var(--color-danger-900); border-right-style: solid; }

      [data-bcr='warning-100'] { border-right-color: var(--color-warning-100); border-right-style: solid; }
      [data-bcr='warning-300'] { border-right-color: var(--color-warning-300); border-right-style: solid; }
      [data-bcr='warning-500'] { border-right-color: var(--color-warning-500); border-right-style: solid; }
      [data-bcr='warning-700'] { border-right-color: var(--color-warning-700); border-right-style: solid; }
      [data-bcr='warning-900'] { border-right-color: var(--color-warning-900); border-right-style: solid; }


      [data-bcb='neutral-0'] { border-bottom-color: var(--color-neutral-0); border-bottom-style: solid; }
      [data-bcb='neutral-50'] { border-bottom-color: var(--color-neutral-50); border-bottom-style: solid; }
      [data-bcb='neutral-100'] { border-bottom-color: var(--color-neutral-100); border-bottom-style: solid; }
      [data-bcb='neutral-200'] { border-bottom-color: var(--color-neutral-200); border-bottom-style: solid; }
      [data-bcb='neutral-300'] { border-bottom-color: var(--color-neutral-300); border-bottom-style: solid; }
      [data-bcb='neutral-400'] { border-bottom-color: var(--color-neutral-400); border-bottom-style: solid; }
      [data-bcb='neutral-500'] { border-bottom-color: var(--color-neutral-500); border-bottom-style: solid; }
      [data-bcb='neutral-600'] { border-bottom-color: var(--color-neutral-600); border-bottom-style: solid; }
      [data-bcb='neutral-700'] { border-bottom-color: var(--color-neutral-700); border-bottom-style: solid; }
      [data-bcb='neutral-800'] { border-bottom-color: var(--color-neutral-800); border-bottom-style: solid; }
      [data-bcb='neutral-900'] { border-bottom-color: var(--color-neutral-900); border-bottom-style: solid; }
      [data-bcb='neutral-950'] { border-bottom-color: var(--color-neutral-950); border-bottom-style: solid; }

      [data-bcb='brand-50'] { border-bottom-color: var(--color-brand-50); border-bottom-style: solid; }
      [data-bcb='brand-100'] { border-bottom-color: var(--color-brand-100); border-bottom-style: solid; }
      [data-bcb='brand-200'] { border-bottom-color: var(--color-brand-200); border-bottom-style: solid; }
      [data-bcb='brand-300'] { border-bottom-color: var(--color-brand-300); border-bottom-style: solid; }
      [data-bcb='brand-400'] { border-bottom-color: var(--color-brand-400); border-bottom-style: solid; }
      [data-bcb='brand-500'] { border-bottom-color: var(--color-brand-500); border-bottom-style: solid; }
      [data-bcb='brand-600'] { border-bottom-color: var(--color-brand-600); border-bottom-style: solid; }
      [data-bcb='brand-700'] { border-bottom-color: var(--color-brand-700); border-bottom-style: solid; }
      [data-bcb='brand-800'] { border-bottom-color: var(--color-brand-800); border-bottom-style: solid; }
      [data-bcb='brand-900'] { border-bottom-color: var(--color-brand-900); border-bottom-style: solid; }

      [data-bcb='positive-0'] { border-bottom-color: var(--color-positive-0); border-bottom-style: solid; }
      [data-bcb='positive-100'] { border-bottom-color: var(--color-positive-100); border-bottom-style: solid; }
      [data-bcb='positive-200'] { border-bottom-color: var(--color-positive-200); border-bottom-style: solid; }
      [data-bcb='positive-400'] { border-bottom-color: var(--color-positive-400); border-bottom-style: solid; }
      [data-bcb='positive-600'] { border-bottom-color: var(--color-positive-600); border-bottom-style: solid; }
      [data-bcb='positive-800'] { border-bottom-color: var(--color-positive-800); border-bottom-style: solid; }
      [data-bcb='positive-900'] { border-bottom-color: var(--color-positive-900); border-bottom-style: solid; }

      [data-bcb='danger-0'] { border-bottom-color: var(--color-danger-0); border-bottom-style: solid; }
      [data-bcb='danger-100'] { border-bottom-color: var(--color-danger-100); border-bottom-style: solid; }
      [data-bcb='danger-200'] { border-bottom-color: var(--color-danger-200); border-bottom-style: solid; }
      [data-bcb='danger-400'] { border-bottom-color: var(--color-danger-400); border-bottom-style: solid; }
      [data-bcb='danger-600'] { border-bottom-color: var(--color-danger-600); border-bottom-style: solid; }
      [data-bcb='danger-800'] { border-bottom-color: var(--color-danger-800); border-bottom-style: solid; }
      [data-bcb='danger-900'] { border-bottom-color: var(--color-danger-900); border-bottom-style: solid; }

      [data-bcb='warning-100'] { border-bottom-color: var(--color-warning-100); border-bottom-style: solid; }
      [data-bcb='warning-300'] { border-bottom-color: var(--color-warning-300); border-bottom-style: solid; }
      [data-bcb='warning-500'] { border-bottom-color: var(--color-warning-500); border-bottom-style: solid; }
      [data-bcb='warning-700'] { border-bottom-color: var(--color-warning-700); border-bottom-style: solid; }
      [data-bcb='warning-900'] { border-bottom-color: var(--color-warning-900); border-bottom-style: solid; }


      [data-bcl='neutral-0'] { border-left-color: var(--color-neutral-0); border-left-style: solid; }
      [data-bcl='neutral-50'] { border-left-color: var(--color-neutral-50); border-left-style: solid; }
      [data-bcl='neutral-100'] { border-left-color: var(--color-neutral-100); border-left-style: solid; }
      [data-bcl='neutral-200'] { border-left-color: var(--color-neutral-200); border-left-style: solid; }
      [data-bcl='neutral-300'] { border-left-color: var(--color-neutral-300); border-left-style: solid; }
      [data-bcl='neutral-400'] { border-left-color: var(--color-neutral-400); border-left-style: solid; }
      [data-bcl='neutral-500'] { border-left-color: var(--color-neutral-500); border-left-style: solid; }
      [data-bcl='neutral-600'] { border-left-color: var(--color-neutral-600); border-left-style: solid; }
      [data-bcl='neutral-700'] { border-left-color: var(--color-neutral-700); border-left-style: solid; }
      [data-bcl='neutral-800'] { border-left-color: var(--color-neutral-800); border-left-style: solid; }
      [data-bcl='neutral-900'] { border-left-color: var(--color-neutral-900); border-left-style: solid; }
      [data-bcl='neutral-950'] { border-left-color: var(--color-neutral-950); border-left-style: solid; }

      [data-bcl='brand-50'] { border-left-color: var(--color-brand-50); border-left-style: solid; }
      [data-bcl='brand-100'] { border-left-color: var(--color-brand-100); border-left-style: solid; }
      [data-bcl='brand-200'] { border-left-color: var(--color-brand-200); border-left-style: solid; }
      [data-bcl='brand-300'] { border-left-color: var(--color-brand-300); border-left-style: solid; }
      [data-bcl='brand-400'] { border-left-color: var(--color-brand-400); border-left-style: solid; }
      [data-bcl='brand-500'] { border-left-color: var(--color-brand-500); border-left-style: solid; }
      [data-bcl='brand-600'] { border-left-color: var(--color-brand-600); border-left-style: solid; }
      [data-bcl='brand-700'] { border-left-color: var(--color-brand-700); border-left-style: solid; }
      [data-bcl='brand-800'] { border-left-color: var(--color-brand-800); border-left-style: solid; }
      [data-bcl='brand-900'] { border-left-color: var(--color-brand-900); border-left-style: solid; }

      [data-bcl='positive-0'] { border-left-color: var(--color-positive-0); border-left-style: solid; }
      [data-bcl='positive-100'] { border-left-color: var(--color-positive-100); border-left-style: solid; }
      [data-bcl='positive-200'] { border-left-color: var(--color-positive-200); border-left-style: solid; }
      [data-bcl='positive-400'] { border-left-color: var(--color-positive-400); border-left-style: solid; }
      [data-bcl='positive-600'] { border-left-color: var(--color-positive-600); border-left-style: solid; }
      [data-bcl='positive-800'] { border-left-color: var(--color-positive-800); border-left-style: solid; }
      [data-bcl='positive-900'] { border-left-color: var(--color-positive-900); border-left-style: solid; }

      [data-bcl='danger-0'] { border-left-color: var(--color-danger-0); border-left-style: solid; }
      [data-bcl='danger-100'] { border-left-color: var(--color-danger-100); border-left-style: solid; }
      [data-bcl='danger-200'] { border-left-color: var(--color-danger-200); border-left-style: solid; }
      [data-bcl='danger-400'] { border-left-color: var(--color-danger-400); border-left-style: solid; }
      [data-bcl='danger-600'] { border-left-color: var(--color-danger-600); border-left-style: solid; }
      [data-bcl='danger-800'] { border-left-color: var(--color-danger-800); border-left-style: solid; }
      [data-bcl='danger-900'] { border-left-color: var(--color-danger-900); border-left-style: solid; }

      [data-bcl='warning-100'] { border-left-color: var(--color-warning-100); border-left-style: solid; }
      [data-bcl='warning-300'] { border-left-color: var(--color-warning-300); border-left-style: solid; }
      [data-bcl='warning-500'] { border-left-color: var(--color-warning-500); border-left-style: solid; }
      [data-bcl='warning-700'] { border-left-color: var(--color-warning-700); border-left-style: solid; }
      [data-bcl='warning-900'] { border-left-color: var(--color-warning-900); border-left-style: solid; }
   `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";

      "data-bct"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";

      "data-bcr"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";

      "data-bcb"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";

      "data-bcl"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";

      "data-bcx"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";

      "data-bcy"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
    `);
  });

  test("with overrides", () => {
    const GrayscaleTokenGenerator = new Tokens.GrayscaleTokenGenerator({ "color-foo": "bar" });
    const BrandTokenGenerator = new Tokens.BrandTokenGenerator();
    const PositiveTokenGenerator = new Tokens.PositiveTokenGenerator();
    const DangerTokenGenerator = new Tokens.DangerTokenGenerator();
    const WarningTokenGenerator = new Tokens.WarningTokenGenerator();
    const generator = new BorderColorUtilityGenerator(
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-bc='neutral-0'] { border-color: var(--color-neutral-0); border-style: solid; }
      [data-bc='neutral-50'] { border-color: var(--color-neutral-50); border-style: solid; }
      [data-bc='neutral-100'] { border-color: var(--color-neutral-100); border-style: solid; } 
      [data-bc='neutral-200'] { border-color: var(--color-neutral-200); border-style: solid; }
      [data-bc='neutral-300'] { border-color: var(--color-neutral-300); border-style: solid; }
      [data-bc='neutral-400'] { border-color: var(--color-neutral-400); border-style: solid; }
      [data-bc='neutral-500'] { border-color: var(--color-neutral-500); border-style: solid; }
      [data-bc='neutral-600'] { border-color: var(--color-neutral-600); border-style: solid; }
      [data-bc='neutral-700'] { border-color: var(--color-neutral-700); border-style: solid; }
      [data-bc='neutral-800'] { border-color: var(--color-neutral-800); border-style: solid; }
      [data-bc='neutral-900'] { border-color: var(--color-neutral-900); border-style: solid; }
      [data-bc='neutral-950'] { border-color: var(--color-neutral-950); border-style: solid; }

      [data-bc='foo'] { border-color: var(--color-foo); border-style: solid; }

      [data-bc='brand-50'] { border-color: var(--color-brand-50); border-style: solid; }
      [data-bc='brand-100'] { border-color: var(--color-brand-100); border-style: solid; }
      [data-bc='brand-200'] { border-color: var(--color-brand-200); border-style: solid; }
      [data-bc='brand-300'] { border-color: var(--color-brand-300); border-style: solid; }
      [data-bc='brand-400'] { border-color: var(--color-brand-400); border-style: solid; }
      [data-bc='brand-500'] { border-color: var(--color-brand-500); border-style: solid; }
      [data-bc='brand-600'] { border-color: var(--color-brand-600); border-style: solid; }
      [data-bc='brand-700'] { border-color: var(--color-brand-700); border-style: solid; }
      [data-bc='brand-800'] { border-color: var(--color-brand-800); border-style: solid; }
      [data-bc='brand-900'] { border-color: var(--color-brand-900); border-style: solid; }

      [data-bc='positive-0'] { border-color: var(--color-positive-0); border-style: solid; }
      [data-bc='positive-100'] { border-color: var(--color-positive-100); border-style: solid; }
      [data-bc='positive-200'] { border-color: var(--color-positive-200); border-style: solid; }
      [data-bc='positive-400'] { border-color: var(--color-positive-400); border-style: solid; }
      [data-bc='positive-600'] { border-color: var(--color-positive-600); border-style: solid; }
      [data-bc='positive-800'] { border-color: var(--color-positive-800); border-style: solid; }
      [data-bc='positive-900'] { border-color: var(--color-positive-900); border-style: solid; }

      [data-bc='danger-0'] { border-color: var(--color-danger-0); border-style: solid; }
      [data-bc='danger-100'] { border-color: var(--color-danger-100); border-style: solid; }
      [data-bc='danger-200'] { border-color: var(--color-danger-200); border-style: solid; }
      [data-bc='danger-400'] { border-color: var(--color-danger-400); border-style: solid; }
      [data-bc='danger-600'] { border-color: var(--color-danger-600); border-style: solid; }
      [data-bc='danger-800'] { border-color: var(--color-danger-800); border-style: solid; }
      [data-bc='danger-900'] { border-color: var(--color-danger-900); border-style: solid; }

      [data-bc='warning-100'] { border-color: var(--color-warning-100); border-style: solid; }
      [data-bc='warning-300'] { border-color: var(--color-warning-300); border-style: solid; }
      [data-bc='warning-500'] { border-color: var(--color-warning-500); border-style: solid; }
      [data-bc='warning-700'] { border-color: var(--color-warning-700); border-style: solid; }
      [data-bc='warning-900'] { border-color: var(--color-warning-900); border-style: solid; }


      [data-bcx='neutral-0'] { border-left-color: var(--color-neutral-0); border-right-color: var(--color-neutral-0); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-50'] { border-left-color: var(--color-neutral-50); border-right-color: var(--color-neutral-50); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-100'] { border-left-color: var(--color-neutral-100); border-right-color: var(--color-neutral-100); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-200'] { border-left-color: var(--color-neutral-200); border-right-color: var(--color-neutral-200); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-300'] { border-left-color: var(--color-neutral-300); border-right-color: var(--color-neutral-300); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-400'] { border-left-color: var(--color-neutral-400); border-right-color: var(--color-neutral-400); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-500'] { border-left-color: var(--color-neutral-500); border-right-color: var(--color-neutral-500); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-600'] { border-left-color: var(--color-neutral-600); border-right-color: var(--color-neutral-600); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-700'] { border-left-color: var(--color-neutral-700); border-right-color: var(--color-neutral-700); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-800'] { border-left-color: var(--color-neutral-800); border-right-color: var(--color-neutral-800); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-900'] { border-left-color: var(--color-neutral-900); border-right-color: var(--color-neutral-900); border-left-style: solid; border-right-style: solid; }
      [data-bcx='neutral-950'] { border-left-color: var(--color-neutral-950); border-right-color: var(--color-neutral-950); border-left-style: solid; border-right-style: solid; }

      [data-bcx='foo'] { border-left-color: var(--color-foo); border-right-color: var(--color-foo); border-left-style: solid; border-right-style: solid; }

      [data-bcx='brand-50'] { border-left-color: var(--color-brand-50); border-right-color: var(--color-brand-50); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-100'] { border-left-color: var(--color-brand-100); border-right-color: var(--color-brand-100); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-200'] { border-left-color: var(--color-brand-200); border-right-color: var(--color-brand-200); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-300'] { border-left-color: var(--color-brand-300); border-right-color: var(--color-brand-300); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-400'] { border-left-color: var(--color-brand-400); border-right-color: var(--color-brand-400); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-500'] { border-left-color: var(--color-brand-500); border-right-color: var(--color-brand-500); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-600'] { border-left-color: var(--color-brand-600); border-right-color: var(--color-brand-600); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-700'] { border-left-color: var(--color-brand-700); border-right-color: var(--color-brand-700); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-800'] { border-left-color: var(--color-brand-800); border-right-color: var(--color-brand-800); border-left-style: solid; border-right-style: solid; }
      [data-bcx='brand-900'] { border-left-color: var(--color-brand-900); border-right-color: var(--color-brand-900); border-left-style: solid; border-right-style: solid; }

      [data-bcx='positive-0'] { border-left-color: var(--color-positive-0); border-right-color: var(--color-positive-0); border-left-style: solid; border-right-style: solid; }
      [data-bcx='positive-100'] { border-left-color: var(--color-positive-100); border-right-color: var(--color-positive-100); border-left-style: solid; border-right-style: solid; }
      [data-bcx='positive-200'] { border-left-color: var(--color-positive-200); border-right-color: var(--color-positive-200); border-left-style: solid; border-right-style: solid; }
      [data-bcx='positive-400'] { border-left-color: var(--color-positive-400); border-right-color: var(--color-positive-400); border-left-style: solid; border-right-style: solid; }
      [data-bcx='positive-600'] { border-left-color: var(--color-positive-600); border-right-color: var(--color-positive-600); border-left-style: solid; border-right-style: solid; }
      [data-bcx='positive-800'] { border-left-color: var(--color-positive-800); border-right-color: var(--color-positive-800); border-left-style: solid; border-right-style: solid; }
      [data-bcx='positive-900'] { border-left-color: var(--color-positive-900); border-right-color: var(--color-positive-900); border-left-style: solid; border-right-style: solid; }

      [data-bcx='danger-0'] { border-left-color: var(--color-danger-0); border-right-color: var(--color-danger-0); border-left-style: solid; border-right-style: solid; }
      [data-bcx='danger-100'] { border-left-color: var(--color-danger-100); border-right-color: var(--color-danger-100); border-left-style: solid; border-right-style: solid; }
      [data-bcx='danger-200'] { border-left-color: var(--color-danger-200); border-right-color: var(--color-danger-200); border-left-style: solid; border-right-style: solid; }
      [data-bcx='danger-400'] { border-left-color: var(--color-danger-400); border-right-color: var(--color-danger-400); border-left-style: solid; border-right-style: solid; }
      [data-bcx='danger-600'] { border-left-color: var(--color-danger-600); border-right-color: var(--color-danger-600); border-left-style: solid; border-right-style: solid; }
      [data-bcx='danger-800'] { border-left-color: var(--color-danger-800); border-right-color: var(--color-danger-800); border-left-style: solid; border-right-style: solid; }
      [data-bcx='danger-900'] { border-left-color: var(--color-danger-900); border-right-color: var(--color-danger-900); border-left-style: solid; border-right-style: solid; }

      [data-bcx='warning-100'] { border-left-color: var(--color-warning-100); border-right-color: var(--color-warning-100); border-left-style: solid; border-right-style: solid; }
      [data-bcx='warning-300'] { border-left-color: var(--color-warning-300); border-right-color: var(--color-warning-300); border-left-style: solid; border-right-style: solid; }
      [data-bcx='warning-500'] { border-left-color: var(--color-warning-500); border-right-color: var(--color-warning-500); border-left-style: solid; border-right-style: solid; }
      [data-bcx='warning-700'] { border-left-color: var(--color-warning-700); border-right-color: var(--color-warning-700); border-left-style: solid; border-right-style: solid; }
      [data-bcx='warning-900'] { border-left-color: var(--color-warning-900); border-right-color: var(--color-warning-900); border-left-style: solid; border-right-style: solid; }


      [data-bcy='neutral-0'] { border-top-color: var(--color-neutral-0); border-bottom-color: var(--color-neutral-0); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-50'] { border-top-color: var(--color-neutral-50); border-bottom-color: var(--color-neutral-50); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-100'] { border-top-color: var(--color-neutral-100); border-bottom-color: var(--color-neutral-100); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-200'] { border-top-color: var(--color-neutral-200); border-bottom-color: var(--color-neutral-200); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-300'] { border-top-color: var(--color-neutral-300); border-bottom-color: var(--color-neutral-300); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-400'] { border-top-color: var(--color-neutral-400); border-bottom-color: var(--color-neutral-400); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-500'] { border-top-color: var(--color-neutral-500); border-bottom-color: var(--color-neutral-500); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-600'] { border-top-color: var(--color-neutral-600); border-bottom-color: var(--color-neutral-600); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-700'] { border-top-color: var(--color-neutral-700); border-bottom-color: var(--color-neutral-700); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-800'] { border-top-color: var(--color-neutral-800); border-bottom-color: var(--color-neutral-800); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-900'] { border-top-color: var(--color-neutral-900); border-bottom-color: var(--color-neutral-900); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='neutral-950'] { border-top-color: var(--color-neutral-950); border-bottom-color: var(--color-neutral-950); border-top-style: solid; border-bottom-style: solid; }

      [data-bcy='foo'] { border-top-color: var(--color-foo); border-bottom-color: var(--color-foo); border-top-style: solid; border-bottom-style: solid; }

      [data-bcy='brand-50'] { border-top-color: var(--color-brand-50); border-bottom-color: var(--color-brand-50); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-100'] { border-top-color: var(--color-brand-100); border-bottom-color: var(--color-brand-100); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-200'] { border-top-color: var(--color-brand-200); border-bottom-color: var(--color-brand-200); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-300'] { border-top-color: var(--color-brand-300); border-bottom-color: var(--color-brand-300); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-400'] { border-top-color: var(--color-brand-400); border-bottom-color: var(--color-brand-400); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-500'] { border-top-color: var(--color-brand-500); border-bottom-color: var(--color-brand-500); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-600'] { border-top-color: var(--color-brand-600); border-bottom-color: var(--color-brand-600); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-700'] { border-top-color: var(--color-brand-700); border-bottom-color: var(--color-brand-700); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-800'] { border-top-color: var(--color-brand-800); border-bottom-color: var(--color-brand-800); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='brand-900'] { border-top-color: var(--color-brand-900); border-bottom-color: var(--color-brand-900); border-top-style: solid; border-bottom-style: solid; }

      [data-bcy='positive-0'] { border-top-color: var(--color-positive-0); border-bottom-color: var(--color-positive-0); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='positive-100'] { border-top-color: var(--color-positive-100); border-bottom-color: var(--color-positive-100); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='positive-200'] { border-top-color: var(--color-positive-200); border-bottom-color: var(--color-positive-200); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='positive-400'] { border-top-color: var(--color-positive-400); border-bottom-color: var(--color-positive-400); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='positive-600'] { border-top-color: var(--color-positive-600); border-bottom-color: var(--color-positive-600); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='positive-800'] { border-top-color: var(--color-positive-800); border-bottom-color: var(--color-positive-800); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='positive-900'] { border-top-color: var(--color-positive-900); border-bottom-color: var(--color-positive-900); border-top-style: solid; border-bottom-style: solid; }

      [data-bcy='danger-0'] { border-top-color: var(--color-danger-0); border-bottom-color: var(--color-danger-0); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='danger-100'] { border-top-color: var(--color-danger-100); border-bottom-color: var(--color-danger-100); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='danger-200'] { border-top-color: var(--color-danger-200); border-bottom-color: var(--color-danger-200); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='danger-400'] { border-top-color: var(--color-danger-400); border-bottom-color: var(--color-danger-400); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='danger-600'] { border-top-color: var(--color-danger-600); border-bottom-color: var(--color-danger-600); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='danger-800'] { border-top-color: var(--color-danger-800); border-bottom-color: var(--color-danger-800); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='danger-900'] { border-top-color: var(--color-danger-900); border-bottom-color: var(--color-danger-900); border-top-style: solid; border-bottom-style: solid; }

      [data-bcy='warning-100'] { border-top-color: var(--color-warning-100); border-bottom-color: var(--color-warning-100); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='warning-300'] { border-top-color: var(--color-warning-300); border-bottom-color: var(--color-warning-300); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='warning-500'] { border-top-color: var(--color-warning-500); border-bottom-color: var(--color-warning-500); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='warning-700'] { border-top-color: var(--color-warning-700); border-bottom-color: var(--color-warning-700); border-top-style: solid; border-bottom-style: solid; }
      [data-bcy='warning-900'] { border-top-color: var(--color-warning-900); border-bottom-color: var(--color-warning-900); border-top-style: solid; border-bottom-style: solid; }


      [data-bct='neutral-0'] { border-top-color: var(--color-neutral-0); border-top-style: solid; }
      [data-bct='neutral-50'] { border-top-color: var(--color-neutral-50); border-top-style: solid; }
      [data-bct='neutral-100'] { border-top-color: var(--color-neutral-100); border-top-style: solid; }
      [data-bct='neutral-200'] { border-top-color: var(--color-neutral-200); border-top-style: solid; }
      [data-bct='neutral-300'] { border-top-color: var(--color-neutral-300); border-top-style: solid; }
      [data-bct='neutral-400'] { border-top-color: var(--color-neutral-400); border-top-style: solid; }
      [data-bct='neutral-500'] { border-top-color: var(--color-neutral-500); border-top-style: solid; }
      [data-bct='neutral-600'] { border-top-color: var(--color-neutral-600); border-top-style: solid; }
      [data-bct='neutral-700'] { border-top-color: var(--color-neutral-700); border-top-style: solid; }
      [data-bct='neutral-800'] { border-top-color: var(--color-neutral-800); border-top-style: solid; }
      [data-bct='neutral-900'] { border-top-color: var(--color-neutral-900); border-top-style: solid; }
      [data-bct='neutral-950'] { border-top-color: var(--color-neutral-950); border-top-style: solid; }

      [data-bct='foo'] { border-top-color: var(--color-foo); border-top-style: solid; }

      [data-bct='brand-50'] { border-top-color: var(--color-brand-50); border-top-style: solid; }
      [data-bct='brand-100'] { border-top-color: var(--color-brand-100); border-top-style: solid; }
      [data-bct='brand-200'] { border-top-color: var(--color-brand-200); border-top-style: solid; }
      [data-bct='brand-300'] { border-top-color: var(--color-brand-300); border-top-style: solid; }
      [data-bct='brand-400'] { border-top-color: var(--color-brand-400); border-top-style: solid; }
      [data-bct='brand-500'] { border-top-color: var(--color-brand-500); border-top-style: solid; }
      [data-bct='brand-600'] { border-top-color: var(--color-brand-600); border-top-style: solid; }
      [data-bct='brand-700'] { border-top-color: var(--color-brand-700); border-top-style: solid; }
      [data-bct='brand-800'] { border-top-color: var(--color-brand-800); border-top-style: solid; }
      [data-bct='brand-900'] { border-top-color: var(--color-brand-900); border-top-style: solid; }

      [data-bct='positive-0'] { border-top-color: var(--color-positive-0); border-top-style: solid; }
      [data-bct='positive-100'] { border-top-color: var(--color-positive-100); border-top-style: solid; }
      [data-bct='positive-200'] { border-top-color: var(--color-positive-200); border-top-style: solid; }
      [data-bct='positive-400'] { border-top-color: var(--color-positive-400); border-top-style: solid; }
      [data-bct='positive-600'] { border-top-color: var(--color-positive-600); border-top-style: solid; }
      [data-bct='positive-800'] { border-top-color: var(--color-positive-800); border-top-style: solid; }
      [data-bct='positive-900'] { border-top-color: var(--color-positive-900); border-top-style: solid; }

      [data-bct='danger-0'] { border-top-color: var(--color-danger-0); border-top-style: solid; }
      [data-bct='danger-100'] { border-top-color: var(--color-danger-100); border-top-style: solid; }
      [data-bct='danger-200'] { border-top-color: var(--color-danger-200); border-top-style: solid; }
      [data-bct='danger-400'] { border-top-color: var(--color-danger-400); border-top-style: solid; }
      [data-bct='danger-600'] { border-top-color: var(--color-danger-600); border-top-style: solid; }
      [data-bct='danger-800'] { border-top-color: var(--color-danger-800); border-top-style: solid; }
      [data-bct='danger-900'] { border-top-color: var(--color-danger-900); border-top-style: solid; }

      [data-bct='warning-100'] { border-top-color: var(--color-warning-100); border-top-style: solid; }
      [data-bct='warning-300'] { border-top-color: var(--color-warning-300); border-top-style: solid; }
      [data-bct='warning-500'] { border-top-color: var(--color-warning-500); border-top-style: solid; }
      [data-bct='warning-700'] { border-top-color: var(--color-warning-700); border-top-style: solid; }
      [data-bct='warning-900'] { border-top-color: var(--color-warning-900); border-top-style: solid; }


      [data-bcr='neutral-0'] { border-right-color: var(--color-neutral-0); border-right-style: solid; }
      [data-bcr='neutral-50'] { border-right-color: var(--color-neutral-50); border-right-style: solid; }
      [data-bcr='neutral-100'] { border-right-color: var(--color-neutral-100); border-right-style: solid; }
      [data-bcr='neutral-200'] { border-right-color: var(--color-neutral-200); border-right-style: solid; }
      [data-bcr='neutral-300'] { border-right-color: var(--color-neutral-300); border-right-style: solid; }
      [data-bcr='neutral-400'] { border-right-color: var(--color-neutral-400); border-right-style: solid; }
      [data-bcr='neutral-500'] { border-right-color: var(--color-neutral-500); border-right-style: solid; }
      [data-bcr='neutral-600'] { border-right-color: var(--color-neutral-600); border-right-style: solid; }
      [data-bcr='neutral-700'] { border-right-color: var(--color-neutral-700); border-right-style: solid; }
      [data-bcr='neutral-800'] { border-right-color: var(--color-neutral-800); border-right-style: solid; }
      [data-bcr='neutral-900'] { border-right-color: var(--color-neutral-900); border-right-style: solid; }
      [data-bcr='neutral-950'] { border-right-color: var(--color-neutral-950); border-right-style: solid; }

      [data-bcr='foo'] { border-right-color: var(--color-foo); border-right-style: solid; }

      [data-bcr='brand-50'] { border-right-color: var(--color-brand-50); border-right-style: solid; }
      [data-bcr='brand-100'] { border-right-color: var(--color-brand-100); border-right-style: solid; }
      [data-bcr='brand-200'] { border-right-color: var(--color-brand-200); border-right-style: solid; }
      [data-bcr='brand-300'] { border-right-color: var(--color-brand-300); border-right-style: solid; }
      [data-bcr='brand-400'] { border-right-color: var(--color-brand-400); border-right-style: solid; }
      [data-bcr='brand-500'] { border-right-color: var(--color-brand-500); border-right-style: solid; }
      [data-bcr='brand-600'] { border-right-color: var(--color-brand-600); border-right-style: solid; }
      [data-bcr='brand-700'] { border-right-color: var(--color-brand-700); border-right-style: solid; }
      [data-bcr='brand-800'] { border-right-color: var(--color-brand-800); border-right-style: solid; }
      [data-bcr='brand-900'] { border-right-color: var(--color-brand-900); border-right-style: solid; }

      [data-bcr='positive-0'] { border-right-color: var(--color-positive-0); border-right-style: solid; }
      [data-bcr='positive-100'] { border-right-color: var(--color-positive-100); border-right-style: solid; }
      [data-bcr='positive-200'] { border-right-color: var(--color-positive-200); border-right-style: solid; }
      [data-bcr='positive-400'] { border-right-color: var(--color-positive-400); border-right-style: solid; }
      [data-bcr='positive-600'] { border-right-color: var(--color-positive-600); border-right-style: solid; }
      [data-bcr='positive-800'] { border-right-color: var(--color-positive-800); border-right-style: solid; }
      [data-bcr='positive-900'] { border-right-color: var(--color-positive-900); border-right-style: solid; }

      [data-bcr='danger-0'] { border-right-color: var(--color-danger-0); border-right-style: solid; }
      [data-bcr='danger-100'] { border-right-color: var(--color-danger-100); border-right-style: solid; }
      [data-bcr='danger-200'] { border-right-color: var(--color-danger-200); border-right-style: solid; }
      [data-bcr='danger-400'] { border-right-color: var(--color-danger-400); border-right-style: solid; }
      [data-bcr='danger-600'] { border-right-color: var(--color-danger-600); border-right-style: solid; }
      [data-bcr='danger-800'] { border-right-color: var(--color-danger-800); border-right-style: solid; }
      [data-bcr='danger-900'] { border-right-color: var(--color-danger-900); border-right-style: solid; }

      [data-bcr='warning-100'] { border-right-color: var(--color-warning-100); border-right-style: solid; }
      [data-bcr='warning-300'] { border-right-color: var(--color-warning-300); border-right-style: solid; }
      [data-bcr='warning-500'] { border-right-color: var(--color-warning-500); border-right-style: solid; }
      [data-bcr='warning-700'] { border-right-color: var(--color-warning-700); border-right-style: solid; }
      [data-bcr='warning-900'] { border-right-color: var(--color-warning-900); border-right-style: solid; }


      [data-bcb='neutral-0'] { border-bottom-color: var(--color-neutral-0); border-bottom-style: solid; }
      [data-bcb='neutral-50'] { border-bottom-color: var(--color-neutral-50); border-bottom-style: solid; }
      [data-bcb='neutral-100'] { border-bottom-color: var(--color-neutral-100); border-bottom-style: solid; }
      [data-bcb='neutral-200'] { border-bottom-color: var(--color-neutral-200); border-bottom-style: solid; }
      [data-bcb='neutral-300'] { border-bottom-color: var(--color-neutral-300); border-bottom-style: solid; }
      [data-bcb='neutral-400'] { border-bottom-color: var(--color-neutral-400); border-bottom-style: solid; }
      [data-bcb='neutral-500'] { border-bottom-color: var(--color-neutral-500); border-bottom-style: solid; }
      [data-bcb='neutral-600'] { border-bottom-color: var(--color-neutral-600); border-bottom-style: solid; }
      [data-bcb='neutral-700'] { border-bottom-color: var(--color-neutral-700); border-bottom-style: solid; }
      [data-bcb='neutral-800'] { border-bottom-color: var(--color-neutral-800); border-bottom-style: solid; }
      [data-bcb='neutral-900'] { border-bottom-color: var(--color-neutral-900); border-bottom-style: solid; }
      [data-bcb='neutral-950'] { border-bottom-color: var(--color-neutral-950); border-bottom-style: solid; }

      [data-bcb='foo'] { border-bottom-color: var(--color-foo); border-bottom-style: solid; }

      [data-bcb='brand-50'] { border-bottom-color: var(--color-brand-50); border-bottom-style: solid; }
      [data-bcb='brand-100'] { border-bottom-color: var(--color-brand-100); border-bottom-style: solid; }
      [data-bcb='brand-200'] { border-bottom-color: var(--color-brand-200); border-bottom-style: solid; }
      [data-bcb='brand-300'] { border-bottom-color: var(--color-brand-300); border-bottom-style: solid; }
      [data-bcb='brand-400'] { border-bottom-color: var(--color-brand-400); border-bottom-style: solid; }
      [data-bcb='brand-500'] { border-bottom-color: var(--color-brand-500); border-bottom-style: solid; }
      [data-bcb='brand-600'] { border-bottom-color: var(--color-brand-600); border-bottom-style: solid; }
      [data-bcb='brand-700'] { border-bottom-color: var(--color-brand-700); border-bottom-style: solid; }
      [data-bcb='brand-800'] { border-bottom-color: var(--color-brand-800); border-bottom-style: solid; }
      [data-bcb='brand-900'] { border-bottom-color: var(--color-brand-900); border-bottom-style: solid; }

      [data-bcb='positive-0'] { border-bottom-color: var(--color-positive-0); border-bottom-style: solid; }
      [data-bcb='positive-100'] { border-bottom-color: var(--color-positive-100); border-bottom-style: solid; }
      [data-bcb='positive-200'] { border-bottom-color: var(--color-positive-200); border-bottom-style: solid; }
      [data-bcb='positive-400'] { border-bottom-color: var(--color-positive-400); border-bottom-style: solid; }
      [data-bcb='positive-600'] { border-bottom-color: var(--color-positive-600); border-bottom-style: solid; }
      [data-bcb='positive-800'] { border-bottom-color: var(--color-positive-800); border-bottom-style: solid; }
      [data-bcb='positive-900'] { border-bottom-color: var(--color-positive-900); border-bottom-style: solid; }

      [data-bcb='danger-0'] { border-bottom-color: var(--color-danger-0); border-bottom-style: solid; }
      [data-bcb='danger-100'] { border-bottom-color: var(--color-danger-100); border-bottom-style: solid; }
      [data-bcb='danger-200'] { border-bottom-color: var(--color-danger-200); border-bottom-style: solid; }
      [data-bcb='danger-400'] { border-bottom-color: var(--color-danger-400); border-bottom-style: solid; }
      [data-bcb='danger-600'] { border-bottom-color: var(--color-danger-600); border-bottom-style: solid; }
      [data-bcb='danger-800'] { border-bottom-color: var(--color-danger-800); border-bottom-style: solid; }
      [data-bcb='danger-900'] { border-bottom-color: var(--color-danger-900); border-bottom-style: solid; }

      [data-bcb='warning-100'] { border-bottom-color: var(--color-warning-100); border-bottom-style: solid; }
      [data-bcb='warning-300'] { border-bottom-color: var(--color-warning-300); border-bottom-style: solid; }
      [data-bcb='warning-500'] { border-bottom-color: var(--color-warning-500); border-bottom-style: solid; }
      [data-bcb='warning-700'] { border-bottom-color: var(--color-warning-700); border-bottom-style: solid; }
      [data-bcb='warning-900'] { border-bottom-color: var(--color-warning-900); border-bottom-style: solid; }


      [data-bcl='neutral-0'] { border-left-color: var(--color-neutral-0); border-left-style: solid; }
      [data-bcl='neutral-50'] { border-left-color: var(--color-neutral-50); border-left-style: solid; }
      [data-bcl='neutral-100'] { border-left-color: var(--color-neutral-100); border-left-style: solid; }
      [data-bcl='neutral-200'] { border-left-color: var(--color-neutral-200); border-left-style: solid; }
      [data-bcl='neutral-300'] { border-left-color: var(--color-neutral-300); border-left-style: solid; }
      [data-bcl='neutral-400'] { border-left-color: var(--color-neutral-400); border-left-style: solid; }
      [data-bcl='neutral-500'] { border-left-color: var(--color-neutral-500); border-left-style: solid; }
      [data-bcl='neutral-600'] { border-left-color: var(--color-neutral-600); border-left-style: solid; }
      [data-bcl='neutral-700'] { border-left-color: var(--color-neutral-700); border-left-style: solid; }
      [data-bcl='neutral-800'] { border-left-color: var(--color-neutral-800); border-left-style: solid; }
      [data-bcl='neutral-900'] { border-left-color: var(--color-neutral-900); border-left-style: solid; }
      [data-bcl='neutral-950'] { border-left-color: var(--color-neutral-950); border-left-style: solid; }

      [data-bcl='foo'] { border-left-color: var(--color-foo); border-left-style: solid; }

      [data-bcl='brand-50'] { border-left-color: var(--color-brand-50); border-left-style: solid; }
      [data-bcl='brand-100'] { border-left-color: var(--color-brand-100); border-left-style: solid; }
      [data-bcl='brand-200'] { border-left-color: var(--color-brand-200); border-left-style: solid; }
      [data-bcl='brand-300'] { border-left-color: var(--color-brand-300); border-left-style: solid; }
      [data-bcl='brand-400'] { border-left-color: var(--color-brand-400); border-left-style: solid; }
      [data-bcl='brand-500'] { border-left-color: var(--color-brand-500); border-left-style: solid; }
      [data-bcl='brand-600'] { border-left-color: var(--color-brand-600); border-left-style: solid; }
      [data-bcl='brand-700'] { border-left-color: var(--color-brand-700); border-left-style: solid; }
      [data-bcl='brand-800'] { border-left-color: var(--color-brand-800); border-left-style: solid; }
      [data-bcl='brand-900'] { border-left-color: var(--color-brand-900); border-left-style: solid; }

      [data-bcl='positive-0'] { border-left-color: var(--color-positive-0); border-left-style: solid; }
      [data-bcl='positive-100'] { border-left-color: var(--color-positive-100); border-left-style: solid; }
      [data-bcl='positive-200'] { border-left-color: var(--color-positive-200); border-left-style: solid; }
      [data-bcl='positive-400'] { border-left-color: var(--color-positive-400); border-left-style: solid; }
      [data-bcl='positive-600'] { border-left-color: var(--color-positive-600); border-left-style: solid; }
      [data-bcl='positive-800'] { border-left-color: var(--color-positive-800); border-left-style: solid; }
      [data-bcl='positive-900'] { border-left-color: var(--color-positive-900); border-left-style: solid; }

      [data-bcl='danger-0'] { border-left-color: var(--color-danger-0); border-left-style: solid; }
      [data-bcl='danger-100'] { border-left-color: var(--color-danger-100); border-left-style: solid; }
      [data-bcl='danger-200'] { border-left-color: var(--color-danger-200); border-left-style: solid; }
      [data-bcl='danger-400'] { border-left-color: var(--color-danger-400); border-left-style: solid; }
      [data-bcl='danger-600'] { border-left-color: var(--color-danger-600); border-left-style: solid; }
      [data-bcl='danger-800'] { border-left-color: var(--color-danger-800); border-left-style: solid; }
      [data-bcl='danger-900'] { border-left-color: var(--color-danger-900); border-left-style: solid; }

      [data-bcl='warning-100'] { border-left-color: var(--color-warning-100); border-left-style: solid; }
      [data-bcl='warning-300'] { border-left-color: var(--color-warning-300); border-left-style: solid; }
      [data-bcl='warning-500'] { border-left-color: var(--color-warning-500); border-left-style: solid; }
      [data-bcl='warning-700'] { border-left-color: var(--color-warning-700); border-left-style: solid; }
      [data-bcl='warning-900'] { border-left-color: var(--color-warning-900); border-left-style: solid; }
   `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-bc"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";

      "data-bct"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" |"brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";

      "data-bcr"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";

      "data-bcb"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";

      "data-bcl"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";

      "data-bcx"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";

      "data-bcy"?: "neutral-0" | "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" | "foo" | "brand-50" | "brand-100" | "brand-200" | "brand-300" | "brand-400" | "brand-500" | "brand-600" | "brand-700" | "brand-800" | "brand-900" | "positive-0" | "positive-100" | "positive-200" | "positive-400" | "positive-600" | "positive-800" | "positive-900" | "danger-0" | "danger-100" | "danger-200" | "danger-400" | "danger-600" | "danger-800" | "danger-900" | "warning-100" | "warning-300" | "warning-500" | "warning-700" | "warning-900";
    `);
  });
});

import { describe, expect, test } from "bun:test";
import { BreakpointRegistry } from "../src/breakpoint-registry";
import * as Tokens from "../src/tokens";
import { BorderWidthUtilityGenerator } from "../src/utilities";

const breakpoints = new BreakpointRegistry({ md: "768" });

describe("BorderWidthUtilityGenerator", () => {
  test("basic usage", () => {
    const BorderWidthTokenGenerator = new Tokens.BorderWidthTokenGenerator();
    const generator = new BorderWidthUtilityGenerator(breakpoints, BorderWidthTokenGenerator);

    expect(generator.name).toEqual("Border width utilities");
    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-bw='none'] { border-width: var(--border-width-none); }
      [data-bw='hairline'] { border-width: var(--border-width-hairline); }
      [data-bw='thin'] { border-width: var(--border-width-thin); }
      [data-bw='base'] { border-width: var(--border-width-base); }
      [data-bw='thick'] { border-width: var(--border-width-thick); }
      [data-bw='heavy'] { border-width: var(--border-width-heavy); }
      [data-bw='unset'] { border-width: var(--border-width-unset); }

      [data-bwx='none'] { border-left-width: var(--border-width-none); border-right-width: var(--border-width-none); }
      [data-bwx='hairline'] { border-left-width: var(--border-width-hairline); border-right-width: var(--border-width-hairline); }
      [data-bwx='thin'] { border-left-width: var(--border-width-thin); border-right-width: var(--border-width-thin); }
      [data-bwx='base'] { border-left-width: var(--border-width-base); border-right-width: var(--border-width-base); }
      [data-bwx='thick'] { border-left-width: var(--border-width-thick); border-right-width: var(--border-width-thick); }
      [data-bwx='heavy'] { border-left-width: var(--border-width-heavy); border-right-width: var(--border-width-heavy); }
      [data-bwx='unset'] { border-left-width: var(--border-width-unset); border-right-width: var(--border-width-unset); }

      [data-bwy='none'] { border-top-width: var(--border-width-none); border-bottom-width: var(--border-width-none); }
      [data-bwy='hairline'] { border-top-width: var(--border-width-hairline); border-bottom-width: var(--border-width-hairline); }
      [data-bwy='thin'] { border-top-width: var(--border-width-thin); border-bottom-width: var(--border-width-thin); }
      [data-bwy='base'] { border-top-width: var(--border-width-base); border-bottom-width: var(--border-width-base); }
      [data-bwy='thick'] { border-top-width: var(--border-width-thick); border-bottom-width: var(--border-width-thick); }
      [data-bwy='heavy'] { border-top-width: var(--border-width-heavy); border-bottom-width: var(--border-width-heavy); }
      [data-bwy='unset'] { border-top-width: var(--border-width-unset); border-bottom-width: var(--border-width-unset); }

      [data-bwt='none'] { border-top-width: var(--border-width-none); }
      [data-bwt='hairline'] { border-top-width: var(--border-width-hairline); }
      [data-bwt='thin'] { border-top-width: var(--border-width-thin); }
      [data-bwt='base'] { border-top-width: var(--border-width-base); }
      [data-bwt='thick'] { border-top-width: var(--border-width-thick); }
      [data-bwt='heavy'] { border-top-width: var(--border-width-heavy); }
      [data-bwt='unset'] { border-top-width: var(--border-width-unset); }

      [data-bwr='none'] { border-right-width: var(--border-width-none); }
      [data-bwr='hairline'] { border-right-width: var(--border-width-hairline); }
      [data-bwr='thin'] { border-right-width: var(--border-width-thin); }
      [data-bwr='base'] { border-right-width: var(--border-width-base); }
      [data-bwr='thick'] { border-right-width: var(--border-width-thick); }
      [data-bwr='heavy'] { border-right-width: var(--border-width-heavy); }
      [data-bwr='unset'] { border-right-width: var(--border-width-unset); }

      [data-bwb='none'] { border-bottom-width: var(--border-width-none); }
      [data-bwb='hairline'] { border-bottom-width: var(--border-width-hairline); }
      [data-bwb='thin'] { border-bottom-width: var(--border-width-thin); }
      [data-bwb='base'] { border-bottom-width: var(--border-width-base); }
      [data-bwb='thick'] { border-bottom-width: var(--border-width-thick); }
      [data-bwb='heavy'] { border-bottom-width: var(--border-width-heavy); }
      [data-bwb='unset'] { border-bottom-width: var(--border-width-unset); }

      [data-bwl='none'] { border-left-width: var(--border-width-none); }
      [data-bwl='hairline'] { border-left-width: var(--border-width-hairline); }
      [data-bwl='thin'] { border-left-width: var(--border-width-thin); }
      [data-bwl='base'] { border-left-width: var(--border-width-base); }
      [data-bwl='thick'] { border-left-width: var(--border-width-thick); }
      [data-bwl='heavy'] { border-left-width: var(--border-width-heavy); }
      [data-bwl='unset'] { border-left-width: var(--border-width-unset); }

      @media (max-width: 768px) {
        [data-md-bw='none'] { border-width: var(--border-width-none); }
        [data-md-bw='hairline'] { border-width: var(--border-width-hairline); }
        [data-md-bw='thin'] { border-width: var(--border-width-thin); }
        [data-md-bw='base'] { border-width: var(--border-width-base); }
        [data-md-bw='thick'] { border-width: var(--border-width-thick); }
        [data-md-bw='heavy'] { border-width: var(--border-width-heavy); }
        [data-md-bw='unset'] { border-width: var(--border-width-unset); }

        [data-md-bwx='none'] { border-left-width: var(--border-width-none); border-right-width: var(--border-width-none); }
        [data-md-bwx='hairline'] { border-left-width: var(--border-width-hairline); border-right-width: var(--border-width-hairline); }
        [data-md-bwx='thin'] { border-left-width: var(--border-width-thin); border-right-width: var(--border-width-thin); }
        [data-md-bwx='base'] { border-left-width: var(--border-width-base); border-right-width: var(--border-width-base); }
        [data-md-bwx='thick'] { border-left-width: var(--border-width-thick); border-right-width: var(--border-width-thick); }
        [data-md-bwx='heavy'] { border-left-width: var(--border-width-heavy); border-right-width: var(--border-width-heavy); }
        [data-md-bwx='unset'] { border-left-width: var(--border-width-unset); border-right-width: var(--border-width-unset); }

        [data-md-bwy='none'] { border-top-width: var(--border-width-none); border-bottom-width: var(--border-width-none); }
        [data-md-bwy='hairline'] { border-top-width: var(--border-width-hairline); border-bottom-width: var(--border-width-hairline); }
        [data-md-bwy='thin'] { border-top-width: var(--border-width-thin); border-bottom-width: var(--border-width-thin); }
        [data-md-bwy='base'] { border-top-width: var(--border-width-base); border-bottom-width: var(--border-width-base); }
        [data-md-bwy='thick'] { border-top-width: var(--border-width-thick); border-bottom-width: var(--border-width-thick); }
        [data-md-bwy='heavy'] { border-top-width: var(--border-width-heavy); border-bottom-width: var(--border-width-heavy); }
        [data-md-bwy='unset'] { border-top-width: var(--border-width-unset); border-bottom-width: var(--border-width-unset); }

        [data-md-bwt='none'] { border-top-width: var(--border-width-none); }
        [data-md-bwt='hairline'] { border-top-width: var(--border-width-hairline); }
        [data-md-bwt='thin'] { border-top-width: var(--border-width-thin); }
        [data-md-bwt='base'] { border-top-width: var(--border-width-base); }
        [data-md-bwt='thick'] { border-top-width: var(--border-width-thick); }
        [data-md-bwt='heavy'] { border-top-width: var(--border-width-heavy); }
        [data-md-bwt='unset'] { border-top-width: var(--border-width-unset); }

        [data-md-bwr='none'] { border-right-width: var(--border-width-none); }
        [data-md-bwr='hairline'] { border-right-width: var(--border-width-hairline); }
        [data-md-bwr='thin'] { border-right-width: var(--border-width-thin); }
        [data-md-bwr='base'] { border-right-width: var(--border-width-base); }
        [data-md-bwr='thick'] { border-right-width: var(--border-width-thick); }
        [data-md-bwr='heavy'] { border-right-width: var(--border-width-heavy); }
        [data-md-bwr='unset'] { border-right-width: var(--border-width-unset); }

        [data-md-bwb='none'] { border-bottom-width: var(--border-width-none); }
        [data-md-bwb='hairline'] { border-bottom-width: var(--border-width-hairline); }
        [data-md-bwb='thin'] { border-bottom-width: var(--border-width-thin); }
        [data-md-bwb='base'] { border-bottom-width: var(--border-width-base); }
        [data-md-bwb='thick'] { border-bottom-width: var(--border-width-thick); }
        [data-md-bwb='heavy'] { border-bottom-width: var(--border-width-heavy); }
        [data-md-bwb='unset'] { border-bottom-width: var(--border-width-unset); }

        [data-md-bwl='none'] { border-left-width: var(--border-width-none); }
        [data-md-bwl='hairline'] { border-left-width: var(--border-width-hairline); }
        [data-md-bwl='thin'] { border-left-width: var(--border-width-thin); }
        [data-md-bwl='base'] { border-left-width: var(--border-width-base); }
        [data-md-bwl='thick'] { border-left-width: var(--border-width-thick); }
        [data-md-bwl='heavy'] { border-left-width: var(--border-width-heavy); }
        [data-md-bwl='unset'] { border-left-width: var(--border-width-unset); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-bw"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-bwx"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-bwy"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-bwt"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-bwr"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-bwb"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-bwl"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-md-bw"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-md-bwx"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-md-bwy"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-md-bwt"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-md-bwr"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-md-bwb"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
      "data-md-bwl"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset";
   `);
  });

  test("with overrides", () => {
    const BorderWidthTokenGenerator = new Tokens.BorderWidthTokenGenerator({ "border-width-huge": "10px" });
    const generator = new BorderWidthUtilityGenerator(breakpoints, BorderWidthTokenGenerator);

    expect(generator.css()).toContain("");
    expect(generator.toTypeScript()).toContain("");

    expect(generator.css()).toEqualIgnoringWhitespace(`
      [data-bw='none'] { border-width: var(--border-width-none); }
      [data-bw='hairline'] { border-width: var(--border-width-hairline); }
      [data-bw='thin'] { border-width: var(--border-width-thin); }
      [data-bw='base'] { border-width: var(--border-width-base); }
      [data-bw='thick'] { border-width: var(--border-width-thick); }
      [data-bw='heavy'] { border-width: var(--border-width-heavy); }
      [data-bw='unset'] { border-width: var(--border-width-unset); }
      [data-bw='huge'] { border-width: var(--border-width-huge); }

      [data-bwx='none'] { border-left-width: var(--border-width-none); border-right-width: var(--border-width-none); }
      [data-bwx='hairline'] { border-left-width: var(--border-width-hairline); border-right-width: var(--border-width-hairline); }
      [data-bwx='thin'] { border-left-width: var(--border-width-thin); border-right-width: var(--border-width-thin); }
      [data-bwx='base'] { border-left-width: var(--border-width-base); border-right-width: var(--border-width-base); }
      [data-bwx='thick'] { border-left-width: var(--border-width-thick); border-right-width: var(--border-width-thick); }
      [data-bwx='heavy'] { border-left-width: var(--border-width-heavy); border-right-width: var(--border-width-heavy); }
      [data-bwx='unset'] { border-left-width: var(--border-width-unset); border-right-width: var(--border-width-unset); }
      [data-bwx='huge'] { border-left-width: var(--border-width-huge); border-right-width: var(--border-width-huge); }

      [data-bwy='none'] { border-top-width: var(--border-width-none); border-bottom-width: var(--border-width-none); }
      [data-bwy='hairline'] { border-top-width: var(--border-width-hairline); border-bottom-width: var(--border-width-hairline); }
      [data-bwy='thin'] { border-top-width: var(--border-width-thin); border-bottom-width: var(--border-width-thin); }
      [data-bwy='base'] { border-top-width: var(--border-width-base); border-bottom-width: var(--border-width-base); }
      [data-bwy='thick'] { border-top-width: var(--border-width-thick); border-bottom-width: var(--border-width-thick); }
      [data-bwy='heavy'] { border-top-width: var(--border-width-heavy); border-bottom-width: var(--border-width-heavy); }
      [data-bwy='unset'] { border-top-width: var(--border-width-unset); border-bottom-width: var(--border-width-unset); }
      [data-bwy='huge'] { border-top-width: var(--border-width-huge); border-bottom-width: var(--border-width-huge); }

      [data-bwt='none'] { border-top-width: var(--border-width-none); }
      [data-bwt='hairline'] { border-top-width: var(--border-width-hairline); }
      [data-bwt='thin'] { border-top-width: var(--border-width-thin); }
      [data-bwt='base'] { border-top-width: var(--border-width-base); }
      [data-bwt='thick'] { border-top-width: var(--border-width-thick); }
      [data-bwt='heavy'] { border-top-width: var(--border-width-heavy); }
      [data-bwt='unset'] { border-top-width: var(--border-width-unset); }
      [data-bwt='huge'] { border-top-width: var(--border-width-huge); }

      [data-bwr='none'] { border-right-width: var(--border-width-none); }
      [data-bwr='hairline'] { border-right-width: var(--border-width-hairline); }
      [data-bwr='thin'] { border-right-width: var(--border-width-thin); }
      [data-bwr='base'] { border-right-width: var(--border-width-base); }
      [data-bwr='thick'] { border-right-width: var(--border-width-thick); }
      [data-bwr='heavy'] { border-right-width: var(--border-width-heavy); }
      [data-bwr='unset'] { border-right-width: var(--border-width-unset); }
      [data-bwr='huge'] { border-right-width: var(--border-width-huge); }

      [data-bwb='none'] { border-bottom-width: var(--border-width-none); }
      [data-bwb='hairline'] { border-bottom-width: var(--border-width-hairline); }
      [data-bwb='thin'] { border-bottom-width: var(--border-width-thin); }
      [data-bwb='base'] { border-bottom-width: var(--border-width-base); }
      [data-bwb='thick'] { border-bottom-width: var(--border-width-thick); }
      [data-bwb='heavy'] { border-bottom-width: var(--border-width-heavy); }
      [data-bwb='unset'] { border-bottom-width: var(--border-width-unset); }
      [data-bwb='huge'] { border-bottom-width: var(--border-width-huge); }

      [data-bwl='none'] { border-left-width: var(--border-width-none); }
      [data-bwl='hairline'] { border-left-width: var(--border-width-hairline); }
      [data-bwl='thin'] { border-left-width: var(--border-width-thin); }
      [data-bwl='base'] { border-left-width: var(--border-width-base); }
      [data-bwl='thick'] { border-left-width: var(--border-width-thick); }
      [data-bwl='heavy'] { border-left-width: var(--border-width-heavy); }
      [data-bwl='unset'] { border-left-width: var(--border-width-unset); }
      [data-bwl='huge'] { border-left-width: var(--border-width-huge); }

      @media (max-width: 768px) {
        [data-md-bw='none'] { border-width: var(--border-width-none); }
        [data-md-bw='hairline'] { border-width: var(--border-width-hairline); }
        [data-md-bw='thin'] { border-width: var(--border-width-thin); }
        [data-md-bw='base'] { border-width: var(--border-width-base); }
        [data-md-bw='thick'] { border-width: var(--border-width-thick); }
        [data-md-bw='heavy'] { border-width: var(--border-width-heavy); }
        [data-md-bw='unset'] { border-width: var(--border-width-unset); }
        [data-md-bw='huge'] { border-width: var(--border-width-huge); }

        [data-md-bwx='none'] { border-left-width: var(--border-width-none); border-right-width: var(--border-width-none); }
        [data-md-bwx='hairline'] { border-left-width: var(--border-width-hairline); border-right-width: var(--border-width-hairline); }
        [data-md-bwx='thin'] { border-left-width: var(--border-width-thin); border-right-width: var(--border-width-thin); }
        [data-md-bwx='base'] { border-left-width: var(--border-width-base); border-right-width: var(--border-width-base); }
        [data-md-bwx='thick'] { border-left-width: var(--border-width-thick); border-right-width: var(--border-width-thick); }
        [data-md-bwx='heavy'] { border-left-width: var(--border-width-heavy); border-right-width: var(--border-width-heavy); }
        [data-md-bwx='unset'] { border-left-width: var(--border-width-unset); border-right-width: var(--border-width-unset); }
        [data-md-bwx='huge'] { border-left-width: var(--border-width-huge); border-right-width: var(--border-width-huge); }

        [data-md-bwy='none'] { border-top-width: var(--border-width-none); border-bottom-width: var(--border-width-none); }
        [data-md-bwy='hairline'] { border-top-width: var(--border-width-hairline); border-bottom-width: var(--border-width-hairline); }
        [data-md-bwy='thin'] { border-top-width: var(--border-width-thin); border-bottom-width: var(--border-width-thin); }
        [data-md-bwy='base'] { border-top-width: var(--border-width-base); border-bottom-width: var(--border-width-base); }
        [data-md-bwy='thick'] { border-top-width: var(--border-width-thick); border-bottom-width: var(--border-width-thick); }
        [data-md-bwy='heavy'] { border-top-width: var(--border-width-heavy); border-bottom-width: var(--border-width-heavy); }
        [data-md-bwy='unset'] { border-top-width: var(--border-width-unset); border-bottom-width: var(--border-width-unset); }
        [data-md-bwy='huge'] { border-top-width: var(--border-width-huge); border-bottom-width: var(--border-width-huge); }

        [data-md-bwt='none'] { border-top-width: var(--border-width-none); }
        [data-md-bwt='hairline'] { border-top-width: var(--border-width-hairline); }
        [data-md-bwt='thin'] { border-top-width: var(--border-width-thin); }
        [data-md-bwt='base'] { border-top-width: var(--border-width-base); }
        [data-md-bwt='thick'] { border-top-width: var(--border-width-thick); }
        [data-md-bwt='heavy'] { border-top-width: var(--border-width-heavy); }
        [data-md-bwt='unset'] { border-top-width: var(--border-width-unset); }
        [data-md-bwt='huge'] { border-top-width: var(--border-width-huge); }

        [data-md-bwr='none'] { border-right-width: var(--border-width-none); }
        [data-md-bwr='hairline'] { border-right-width: var(--border-width-hairline); }
        [data-md-bwr='thin'] { border-right-width: var(--border-width-thin); }
        [data-md-bwr='base'] { border-right-width: var(--border-width-base); }
        [data-md-bwr='thick'] { border-right-width: var(--border-width-thick); }
        [data-md-bwr='heavy'] { border-right-width: var(--border-width-heavy); }
        [data-md-bwr='unset'] { border-right-width: var(--border-width-unset); }
        [data-md-bwr='huge'] { border-right-width: var(--border-width-huge); }

        [data-md-bwb='none'] { border-bottom-width: var(--border-width-none); }
        [data-md-bwb='hairline'] { border-bottom-width: var(--border-width-hairline); }
        [data-md-bwb='thin'] { border-bottom-width: var(--border-width-thin); }
        [data-md-bwb='base'] { border-bottom-width: var(--border-width-base); }
        [data-md-bwb='thick'] { border-bottom-width: var(--border-width-thick); }
        [data-md-bwb='heavy'] { border-bottom-width: var(--border-width-heavy); }
        [data-md-bwb='unset'] { border-bottom-width: var(--border-width-unset); }
        [data-md-bwb='huge'] { border-bottom-width: var(--border-width-huge); }

        [data-md-bwl='none'] { border-left-width: var(--border-width-none); }
        [data-md-bwl='hairline'] { border-left-width: var(--border-width-hairline); }
        [data-md-bwl='thin'] { border-left-width: var(--border-width-thin); }
        [data-md-bwl='base'] { border-left-width: var(--border-width-base); }
        [data-md-bwl='thick'] { border-left-width: var(--border-width-thick); }
        [data-md-bwl='heavy'] { border-left-width: var(--border-width-heavy); }
        [data-md-bwl='unset'] { border-left-width: var(--border-width-unset); }
        [data-md-bwl='huge'] { border-left-width: var(--border-width-huge); }
      }
    `);
    expect(generator.toTypeScript()).toEqualIgnoringWhitespace(`
      "data-bw"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-bwx"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-bwy"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-bwt"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-bwr"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-bwb"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-bwl"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-md-bw"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-md-bwx"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-md-bwy"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-md-bwt"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-md-bwr"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-md-bwb"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
      "data-md-bwl"?: "none" | "hairline" | "thin" | "base" | "thick" | "heavy" | "unset" | "huge";
   `);
  });
});

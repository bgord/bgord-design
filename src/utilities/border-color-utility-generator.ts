import type { BreakpointRegistry } from "../breakpoint-registry";
import type { BrandTokenGenerator } from "../tokens/brand-token-generator";
import type { DangerTokenGenerator } from "../tokens/danger-token-generator";
import type { GrayscaleTokenGenerator } from "../tokens/grayscale-token-generator";
import type { PositiveTokenGenerator } from "../tokens/positive-token-generator";
import type { WarningTokenGenerator } from "../tokens/warning-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class BorderColorUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    GrayscaleTokenGenerator: GrayscaleTokenGenerator,
    BrandTokenGenerator: BrandTokenGenerator,
    PositiveTokenGenerator: PositiveTokenGenerator,
    DangerTokenGenerator: DangerTokenGenerator,
    WarningTokenGenerator: WarningTokenGenerator,
  ) {
    super("Border color utilities");

    this.config = {
      ...GrayscaleTokenGenerator.getConfig(),
      ...BrandTokenGenerator.getConfig(),
      ...PositiveTokenGenerator.getConfig(),
      ...DangerTokenGenerator.getConfig(),
      ...WarningTokenGenerator.getConfig(),
    };
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("color-", "");

      regular.push(
        new CssRuleRegular(`[data-bc='${key}']`, [
          ["border-color", `var(--${variable})`],
          ["border-style", "solid"],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("color-", "");

      regular.push(
        new CssRuleRegular(`[data-bcx='${key}']`, [
          ["border-left-color", `var(--${variable})`],
          ["border-right-color", `var(--${variable})`],
          ["border-left-style", "solid"],
          ["border-right-style", "solid"],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("color-", "");

      regular.push(
        new CssRuleRegular(`[data-bcy='${key}']`, [
          ["border-top-color", `var(--${variable})`],
          ["border-bottom-color", `var(--${variable})`],
          ["border-top-style", "solid"],
          ["border-bottom-style", "solid"],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("color-", "");

      regular.push(
        new CssRuleRegular(`[data-bct='${key}']`, [
          ["border-top-color", `var(--${variable})`],
          ["border-top-style", "solid"],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("color-", "");

      regular.push(
        new CssRuleRegular(`[data-bcr='${key}']`, [
          ["border-right-color", `var(--${variable})`],
          ["border-right-style", "solid"],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("color-", "");

      regular.push(
        new CssRuleRegular(`[data-bcb='${key}']`, [
          ["border-bottom-color", `var(--${variable})`],
          ["border-bottom-style", "solid"],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("color-", "");

      regular.push(
        new CssRuleRegular(`[data-bcl='${key}']`, [
          ["border-left-color", `var(--${variable})`],
          ["border-left-style", "solid"],
        ]),
      );
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("color-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-bc='${key}']`, [
            ["border-color", `var(--${variable})`],
            ["border-style", "solid"],
          ]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("color-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-bcx='${key}']`, [
            ["border-left-color", `var(--${variable})`],
            ["border-right-color", `var(--${variable})`],
            ["border-left-style", "solid"],
            ["border-right-style", "solid"],
          ]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("color-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-bcy='${key}']`, [
            ["border-top-color", `var(--${variable})`],
            ["border-bottom-color", `var(--${variable})`],
            ["border-top-style", "solid"],
            ["border-bottom-style", "solid"],
          ]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("color-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-bct='${key}']`, [
            ["border-top-color", `var(--${variable})`],
            ["border-top-style", "solid"],
          ]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("color-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-bcr='${key}']`, [
            ["border-right-color", `var(--${variable})`],
            ["border-right-style", "solid"],
          ]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("color-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-bcb='${key}']`, [
            ["border-bottom-color", `var(--${variable})`],
            ["border-bottom-style", "solid"],
          ]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("color-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-bcl='${key}']`, [
            ["border-left-color", `var(--${variable})`],
            ["border-left-style", "solid"],
          ]),
        );
      }

      // Stryker disable all
      result += responsive.map((rule) => rule.get()).join("\n");
      // Stryker restore all

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("color-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return [
      "bc",
      "bct",
      "bcr",
      "bcb",
      "bcl",
      "bcx",
      "bcy",
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bc`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bct`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bcr`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bcb`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bcl`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bcx`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bcy`),
    ]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

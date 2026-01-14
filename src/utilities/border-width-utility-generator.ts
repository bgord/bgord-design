import type { BreakpointRegistry } from "../breakpoint-registry";
import type { BorderWidthTokenGenerator } from "../tokens/border-width-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class BorderWidthUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    BorderWidthTokenGenerator: BorderWidthTokenGenerator,
  ) {
    super("Border width utilities");
    this.config = BorderWidthTokenGenerator.getConfig();
  }

  css() {
    const config = Object.keys(this.config);

    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of config) {
      const key = variable.replace("border-width-", "");
      regular.push(new CssRuleRegular(`[data-bw='${key}']`, { "border-width": `var(--${variable})` }));
    }

    for (const variable of config) {
      const key = variable.replace("border-width-", "");
      regular.push(
        new CssRuleRegular(`[data-bwx='${key}']`, {
          "border-left-width": `var(--${variable})`,
          "border-right-width": `var(--${variable})`,
        }),
      );
    }

    for (const variable of config) {
      const key = variable.replace("border-width-", "");
      regular.push(
        new CssRuleRegular(`[data-bwy='${key}']`, {
          "border-top-width": `var(--${variable})`,
          "border-bottom-width": `var(--${variable})`,
        }),
      );
    }

    for (const variable of config) {
      const key = variable.replace("border-width-", "");
      regular.push(new CssRuleRegular(`[data-bwt='${key}']`, { "border-top-width": `var(--${variable})` }));
    }

    for (const variable of config) {
      const key = variable.replace("border-width-", "");
      regular.push(new CssRuleRegular(`[data-bwr='${key}']`, { "border-right-width": `var(--${variable})` }));
    }

    for (const variable of config) {
      const key = variable.replace("border-width-", "");
      regular.push(
        new CssRuleRegular(`[data-bwb='${key}']`, { "border-bottom-width": `var(--${variable})` }),
      );
    }

    for (const variable of config) {
      const key = variable.replace("border-width-", "");
      regular.push(new CssRuleRegular(`[data-bwl='${key}']`, { "border-left-width": `var(--${variable})` }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of config) {
        const key = variable.replace("border-width-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-bw='${key}']`, { "border-width": `var(--${variable})` }),
        );
      }

      for (const variable of config) {
        const key = variable.replace("border-width-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-bwx='${key}']`, {
            "border-left-width": `var(--${variable})`,
            "border-right-width": `var(--${variable})`,
          }),
        );
      }

      for (const variable of config) {
        const key = variable.replace("border-width-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-bwy='${key}']`, {
            "border-top-width": `var(--${variable})`,
            "border-bottom-width": `var(--${variable})`,
          }),
        );
      }

      for (const variable of config) {
        const key = variable.replace("border-width-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-bwt='${key}']`, { "border-top-width": `var(--${variable})` }),
        );
      }

      for (const variable of config) {
        const key = variable.replace("border-width-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-bwr='${key}']`, { "border-right-width": `var(--${variable})` }),
        );
      }

      for (const variable of config) {
        const key = variable.replace("border-width-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-bwb='${key}']`, { "border-bottom-width": `var(--${variable})` }),
        );
      }

      for (const variable of config) {
        const key = variable.replace("border-width-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-bwl='${key}']`, { "border-left-width": `var(--${variable})` }),
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
      .map((key) => key.replace("border-width-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return [
      "bw",
      "bwx",
      "bwy",
      "bwt",
      "bwr",
      "bwb",
      "bwl",
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bw`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bwx`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bwy`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bwt`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bwr`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bwb`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bwl`),
    ]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

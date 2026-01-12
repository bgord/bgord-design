import type { BreakpointRegistry } from "../breakpoint-registry";
import type { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class PositionersUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    SpacingTokenGenerator: SpacingTokenGenerator,
  ) {
    super("Positioners utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-top='${key}']`, ["top", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-right='${key}']`, ["right", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-bottom='${key}']`, ["bottom", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-left='${key}']`, ["left", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-inset='${key}']`, ["inset", `var(--${variable})`]));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(new CssRuleRegular(`[data-${name}-top='${key}']`, ["top", `var(--${variable})`]));
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(new CssRuleRegular(`[data-${name}-right='${key}']`, ["right", `var(--${variable})`]));
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-bottom='${key}']`, ["bottom", `var(--${variable})`]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(new CssRuleRegular(`[data-${name}-left='${key}']`, ["left", `var(--${variable})`]));
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(new CssRuleRegular(`[data-${name}-inset='${key}']`, ["inset", `var(--${variable})`]));
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
      .map((key) => key.replace("spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return [
      "top",
      "right",
      "bottom",
      "left",
      "inset",
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-top`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-right`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bottom`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-left`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-inset`),
    ]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

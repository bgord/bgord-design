import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class AxisPlacementUtilityGenerator extends UtilityGenerator {
  config = {
    start: "flex-start",
    end: "flex-end",
    around: "space-around",
    evenly: "space-evenly",
    between: "space-between",
    center: "center",
    baseline: "baseline",
  };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Axis placement utilities");
  }

  css() {
    const config = Object.entries(this.config);

    let result = "";

    const regular: CssRuleRegular[] = [];

    for (const [key, value] of config) {
      regular.push(new CssRuleRegular(`[data-main='${key}']`, { "justify-content": value }));
    }

    for (const [key, value] of config) {
      regular.push(new CssRuleRegular(`[data-cross='${key}']`, { "align-items": value }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of config) {
        responsive.push(new CssRuleRegular(`[data-${name}-main='${key}']`, { "justify-content": value }));
      }

      for (const [key, value] of config) {
        responsive.push(new CssRuleRegular(`[data-${name}-cross='${key}']`, { "align-items": value }));
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
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return [
      "main",
      "cross",
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-main`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-cross`),
    ]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

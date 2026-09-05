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
  };

  crossConfig = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline",
  };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Axis placement utilities");
  }

  css() {
    const main = Object.entries(this.config);
    const cross = Object.entries(this.crossConfig);

    let result = "";

    const regular: Array<CssRuleRegular> = [];

    for (const [key, value] of main) {
      regular.push(new CssRuleRegular(`[data-main='${key}']`, { "justify-content": value }));
    }

    for (const [key, value] of cross) {
      regular.push(new CssRuleRegular(`[data-cross='${key}']`, { "align-items": value }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: Array<CssRuleRegular> = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of main) {
        responsive.push(new CssRuleRegular(`[data-${name}-main='${key}']`, { "justify-content": value }));
      }

      for (const [key, value] of cross) {
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
    const main = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    const cross = Object.keys(this.crossConfig)
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return [
      ["main", main],
      ["cross", cross],
      ...this.breakpointRegistry.entries.map(([name]) => [`${name}-main`, main]),
      ...this.breakpointRegistry.entries.map(([name]) => [`${name}-cross`, cross]),
    ]
      .map(([key, type]) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

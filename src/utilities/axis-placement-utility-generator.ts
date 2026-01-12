import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, CssRuleResponsive } from "./css-rule.strategy";
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
    let result = "";

    const regular: CssRuleRegular[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      regular.push(new CssRuleRegular(`[data-main='${key}']`, ["justify-content", value]));
    }

    for (const [key, value] of Object.entries(this.config)) {
      regular.push(new CssRuleRegular(`[data-cross='${key}']`, ["align-items", value]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of Object.entries(this.breakpointRegistry.breakpoints)) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (min-width: ${breakpoint}px) { `;

      for (const [key, value] of Object.entries(this.config)) {
        responsive.push(new CssRuleRegular(`[data-${name}-main='${key}']`, ["justify-content", value]));
      }

      for (const [key, value] of Object.entries(this.config)) {
        responsive.push(new CssRuleRegular(`[data-${name}-cross='${key}']`, ["align-items", value]));
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return [`"data-main"?: ${type};`, `"data-cross"?: ${type};`].join(" ");
  }
}

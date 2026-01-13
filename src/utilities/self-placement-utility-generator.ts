import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class SelfPlacementUtilityGenerator extends UtilityGenerator {
  config = {
    auto: "auto",
    start: "flex-start",
    end: "flex-end",
    center: "center",
    stretch: "stretch",
    baseline: "baseline",
  };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Self placement utilities");
  }

  css() {
    let result = "";

    const regular: CssRuleRegular[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      regular.push(new CssRuleRegular(`[data-self='${key}']`, ["align-self", value]));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of Object.entries(this.config)) {
        responsive.push(new CssRuleRegular(`[data-${name}-self='${key}']`, ["align-self", value]));
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
    return ["self", ...this.breakpointRegistry.entries.map(([name]) => `${name}-self`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

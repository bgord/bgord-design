import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class FlexShrinkUtilityGenerator extends UtilityGenerator {
  config = { "0": "0", unset: "unset" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Flex shrink utilities");
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      regular.push(new CssRuleRegular(`[data-shrink='${key}']`, ["flex-shrink", value]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of Object.entries(this.config)) {
        responsive.push(new CssRuleRegular(`[data-${name}-shrink='${key}']`, ["flex-shrink", value]));
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

    return ["shrink", ...this.breakpointRegistry.entries.map(([name]) => `${name}-shrink`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
  }
}

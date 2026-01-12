import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class PositionUtilityGenerator extends UtilityGenerator {
  config = {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky",
    unset: "unset",
  };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Position utilities");
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      regular.push(new CssRuleRegular(`[data-position='${key}']`, ["position", value]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of Object.entries(this.breakpointRegistry.breakpoints)) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of Object.entries(this.config)) {
        responsive.push(new CssRuleRegular(`[data-${name}-position='${key}']`, ["position", value]));
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

    return `"data-position"?: ${type};`;
  }
}

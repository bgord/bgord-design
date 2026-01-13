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
    const config = Object.entries(this.config);

    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [key, value] of config) {
      regular.push(new CssRuleRegular(`[data-position='${key}']`, { position: value }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of config) {
        responsive.push(new CssRuleRegular(`[data-${name}-position='${key}']`, { position: value }));
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
    return ["position", ...this.breakpointRegistry.entries.map(([name]) => `${name}-position`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

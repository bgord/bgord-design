import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class DisplayUtilityGenerator extends UtilityGenerator {
  config = { flex: "flex", block: "block", "inline-block": "inline-block", none: "none" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Display utilities");
  }

  css() {
    const config = Object.entries(this.config);

    let result = "";

    const regular: Array<CssRuleStrategy> = [];

    for (const [key, value] of config) {
      if (key === "flex") {
        regular.push(new CssRuleRegular(`[data-disp='${key}']`, { display: value, "flex-wrap": "wrap" }));
      }
      regular.push(new CssRuleRegular(`[data-disp='${key}']`, { display: value }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: Array<CssRuleRegular> = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of config) {
        if (key === "flex") {
          responsive.push(
            new CssRuleRegular(`[data-${name}-disp='${key}']`, { display: value, "flex-wrap": "wrap" }),
          );
        }
        responsive.push(new CssRuleRegular(`[data-${name}-disp='${key}']`, { display: value }));
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
    return ["disp", ...this.breakpointRegistry.entries.map(([name]) => `${name}-disp`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

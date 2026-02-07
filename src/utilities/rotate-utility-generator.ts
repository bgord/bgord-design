import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class RotateUtilityGenerator extends UtilityGenerator {
  config = { "0": "0", "90": "90", "180": "180", "270": "270" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Rotate utilities");
  }

  css() {
    const config = Object.entries(this.config);

    let result = "";

    const regular: Array<CssRuleStrategy> = [];

    for (const [key, value] of config) {
      regular.push(new CssRuleRegular(`[data-rotate='${key}']`, { transform: `rotate(${value}deg)` }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: Array<CssRuleRegular> = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of config) {
        responsive.push(
          new CssRuleRegular(`[data-${name}-rotate='${key}']`, { transform: `rotate(${value}deg)` }),
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
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return ["rotate", ...this.breakpointRegistry.entries.map(([name]) => `${name}-rotate`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

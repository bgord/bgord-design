import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class FlexGrowUtilityGenerator extends UtilityGenerator {
  config = { "1": "1", unset: "unset" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Flex grow utilities");
  }

  css() {
    const config = Object.entries(this.config);

    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [key, value] of config) {
      regular.push(new CssRuleRegular(`[data-grow='${key}']`, { "flex-grow": value }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of config) {
        responsive.push(new CssRuleRegular(`[data-${name}-grow='${key}']`, { "flex-grow": value }));
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
    return ["grow", ...this.breakpointRegistry.entries.map(([name]) => `${name}-grow`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

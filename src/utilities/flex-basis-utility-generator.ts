import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class FlexBasisUtilityGenerator extends UtilityGenerator {
  config = { "0": "0", unset: "unset" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Flex basis utilities");
  }

  css() {
    const config = Object.entries(this.config);

    let result = "";

    const regular: Array<CssRuleStrategy> = [];

    for (const [key, value] of config) {
      regular.push(new CssRuleRegular(`[data-basis='${key}']`, { "flex-basis": value }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: Array<CssRuleRegular> = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of config) {
        responsive.push(new CssRuleRegular(`[data-${name}-basis='${key}']`, { "flex-basis": value }));
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
    return ["basis", ...this.breakpointRegistry.entries.map(([name]) => `${name}-basis`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

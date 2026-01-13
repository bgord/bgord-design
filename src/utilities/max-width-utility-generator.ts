import type { BreakpointRegistry } from "../breakpoint-registry";
import type { BreakpointTokenGenerator } from "../tokens/breakpoint-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class MaxWidthUtilityGenerator extends UtilityGenerator {
  config = { "100%": "100%", unset: "unset" };

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    BreakpointTokenGenerator: BreakpointTokenGenerator,
  ) {
    super("Max width utilities");
    this.config = { ...this.config, ...BreakpointTokenGenerator.getConfig() };
  }

  css() {
    const config = Object.entries(this.config);

    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [variable, value] of config) {
      const key = variable.replace("breakpoint-", "");

      regular.push(new CssRuleRegular(`[data-maxw='${key}']`, { "max-width": value }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [variable, value] of config) {
        const key = variable.replace("breakpoint-", "");

        responsive.push(new CssRuleRegular(`[data-${name}-maxw='${key}']`, { "max-width": value }));
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
      .map((key) => key.replace("breakpoint-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return ["maxw", ...this.breakpointRegistry.entries.map(([name]) => `${name}-maxw`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

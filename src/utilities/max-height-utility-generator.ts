import type { BreakpointRegistry } from "../breakpoint-registry";
import type { BreakpointTokenGenerator } from "../tokens/breakpoint-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class MaxHeightUtilityGenerator extends UtilityGenerator {
  config = { "100%": "100%", unset: "unset" };

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    BreakpointTokenGenerator: BreakpointTokenGenerator,
  ) {
    super("Max height utilities");
    this.config = { ...this.config, ...BreakpointTokenGenerator.getConfig() };
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [variable, value] of Object.entries(this.config)) {
      const key = variable.replace("breakpoint-", "");

      regular.push(new CssRuleRegular(`[data-maxh='${key}']`, ["max-height", value]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [variable, value] of Object.entries(this.config)) {
        const key = variable.replace("breakpoint-", "");

        responsive.push(new CssRuleRegular(`[data-${name}-maxh='${key}']`, ["max-height", value]));
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("breakpoint-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return [`"data-maxh"?: ${type};`].join(" ");
  }
}

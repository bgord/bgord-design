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
    const rules: CssRuleStrategy[] = [];

    for (const [variable, value] of Object.entries(this.config)) {
      const key = variable.replace("breakpoint-", "");

      rules.push(new CssRuleRegular(`[data-maxw='${key}']`, [["max-width", value]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("breakpoint-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-maxw"?: ${type};`;
  }
}

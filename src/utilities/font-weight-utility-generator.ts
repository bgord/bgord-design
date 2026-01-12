import type { BreakpointRegistry } from "../breakpoint-registry";
import type { FontWeightTokenGenerator } from "../tokens/font-weight-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class FontWeightUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    FontWeightTokenGenerator: FontWeightTokenGenerator,
  ) {
    super("Font-weight utilities");
    this.config = FontWeightTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("font-weight-", "");

      rules.push(new CssRuleRegular(`[data-fw='${key}']`, ["font-weight", `var(--${variable})`]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("font-weight-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-fw"?: ${type};`;
  }
}

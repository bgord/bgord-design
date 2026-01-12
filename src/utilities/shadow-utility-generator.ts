import type { BreakpointRegistry } from "../breakpoint-registry";
import type { ShadowTokenGenerator } from "../tokens/shadow-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class ShadowUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    ShadowTokenGenerator: ShadowTokenGenerator,
  ) {
    super("Shadow utilities");
    this.config = ShadowTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("shadow-", "");

      rules.push(new CssRuleRegular(`[data-shadow='${key}']`, [["box-shadow", `var(--${variable})`]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("shadow-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-shadow"?: ${type};`;
  }
}

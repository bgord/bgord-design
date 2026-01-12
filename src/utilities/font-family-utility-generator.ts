import type { BreakpointRegistry } from "../breakpoint-registry";
import type { FontFamilyTokenGenerator } from "../tokens/font-family-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class FontFamilyUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    FontFamilyTokenGenerator: FontFamilyTokenGenerator,
  ) {
    super("Font-family utilities");
    this.config = FontFamilyTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("font-family-", "");

      rules.push(new CssRuleRegular(`[data-ff='${key}']`, [["font-family", `var(--${variable})`]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("font-family-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-ff"?: ${type};`;
  }
}

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
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("font-family-", "");

      regular.push(new CssRuleRegular(`[data-ff='${key}']`, ["font-family", `var(--${variable})`]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("font-family-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-ff"?: ${type};`;
  }
}

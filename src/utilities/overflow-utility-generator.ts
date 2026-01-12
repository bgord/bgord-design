import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class OverflowUtilityGenerator extends UtilityGenerator {
  config = { auto: "auto", scroll: "scroll", hidden: "hidden" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Overflow utilities");
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      rules.push(new CssRuleRegular(`[data-overflow='${key}']`, ["overflow", value]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-overflow"?: ${type};`;
  }
}

import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class RotateUtilityGenerator extends UtilityGenerator {
  config = { "0": "0", "90": "90", "180": "180", "270": "270" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Rotate utilities");
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      rules.push(new CssRuleRegular(`[data-rotate='${key}']`, ["transform", `rotate(${value}deg)`]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-rotate"?: ${type};`;
  }
}

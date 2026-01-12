import type { BreakpointRegistry } from "../breakpoint-registry";
import type { LineHeightTokenGenerator } from "../tokens/line-height-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class LineHeightUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    LineHeightTokenGenerator: LineHeightTokenGenerator,
  ) {
    super("Line height utilities");
    this.config = LineHeightTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("line-height-", "");

      rules.push(new CssRuleRegular(`[data-lh='${key}']`, ["line-height", `var(--${variable})`]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("line-height-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-lh"?: ${type};`;
  }
}

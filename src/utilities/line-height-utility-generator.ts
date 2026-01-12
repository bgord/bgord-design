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
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("line-height-", "");

      regular.push(new CssRuleRegular(`[data-lh='${key}']`, ["line-height", `var(--${variable})`]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("line-height-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-lh='${key}']`, ["line-height", `var(--${variable})`]),
        );
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("line-height-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-lh"?: ${type};`;
  }
}

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
    const config = Object.keys(this.config);

    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of config) {
      const key = variable.replace("line-height-", "");

      regular.push(new CssRuleRegular(`[data-lh='${key}']`, { "line-height": `var(--${variable})` }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of config) {
        const key = variable.replace("line-height-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-lh='${key}']`, { "line-height": `var(--${variable})` }),
        );
      }

      // Stryker disable all
      result += responsive.map((rule) => rule.get()).join("\n");
      // Stryker restore all

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("line-height-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return ["lh", ...this.breakpointRegistry.entries.map(([name]) => `${name}-lh`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

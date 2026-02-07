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
    const config = Object.keys(this.config);

    let result = "";

    const regular: Array<CssRuleStrategy> = [];

    for (const variable of config) {
      const key = variable.replace("font-weight-", "");

      regular.push(new CssRuleRegular(`[data-fw='${key}']`, { "font-weight": `var(--${variable})` }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: Array<CssRuleRegular> = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of config) {
        const key = variable.replace("font-weight-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-fw='${key}']`, { "font-weight": `var(--${variable})` }),
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
      .map((key) => key.replace("font-weight-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return ["fw", ...this.breakpointRegistry.entries.map(([name]) => `${name}-fw`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

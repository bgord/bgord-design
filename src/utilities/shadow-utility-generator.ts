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
    const config = Object.keys(this.config);

    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of config) {
      const key = variable.replace("shadow-", "");

      regular.push(new CssRuleRegular(`[data-shadow='${key}']`, { "box-shadow": `var(--${variable})` }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of config) {
        const key = variable.replace("shadow-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-shadow='${key}']`, { "box-shadow": `var(--${variable})` }),
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
      .map((key) => key.replace("shadow-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return ["shadow", ...this.breakpointRegistry.entries.map(([name]) => `${name}-shadow`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

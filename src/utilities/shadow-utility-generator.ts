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
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("shadow-", "");

      regular.push(new CssRuleRegular(`[data-shadow='${key}']`, ["box-shadow", `var(--${variable})`]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("shadow-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-shadow='${key}']`, ["box-shadow", `var(--${variable})`]),
        );
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("shadow-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-shadow"?: ${type};`;
  }
}

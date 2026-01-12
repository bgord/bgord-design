import type { BreakpointRegistry } from "../breakpoint-registry";
import type { OpacityTokenGenerator } from "../tokens/opacity-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class OpacityUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    OpacityTokenGenerator: OpacityTokenGenerator,
  ) {
    super("Opacity utilities");
    this.config = OpacityTokenGenerator.getConfig();
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("opacity-", "");

      regular.push(new CssRuleRegular(`[data-opacity='${key}']`, ["opacity", `var(--${variable})`]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("opacity-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-opacity='${key}']`, ["opacity", `var(--${variable})`]),
        );
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("opacity-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-opacity"?: ${type};`;
  }
}

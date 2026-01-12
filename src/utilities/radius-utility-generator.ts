import type { BreakpointRegistry } from "../breakpoint-registry";
import type { RadiusTokenGenerator } from "../tokens/radius-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class RadiusUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    RadiusTokenGenerator: RadiusTokenGenerator,
  ) {
    super("Radius utilities");
    this.config = RadiusTokenGenerator.getConfig();
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("radius-", "");

      regular.push(new CssRuleRegular(`[data-br='${key}']`, ["border-radius", `var(--${variable})`]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("radius-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-br='${key}']`, ["border-radius", `var(--${variable})`]),
        );
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("radius-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return [`"data-br"?: ${type};`].join(" ");
  }
}

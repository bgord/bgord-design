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
    const config = Object.keys(this.config);

    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of config) {
      const key = variable.replace("radius-", "");

      regular.push(new CssRuleRegular(`[data-br='${key}']`, { "border-radius": `var(--${variable})` }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of config) {
        const key = variable.replace("radius-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-br='${key}']`, { "border-radius": `var(--${variable})` }),
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
      .map((key) => key.replace("radius-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return ["br", ...this.breakpointRegistry.entries.map(([name]) => `${name}-br`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

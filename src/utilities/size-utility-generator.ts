import type { BreakpointRegistry } from "../breakpoint-registry";
import type { SizeTokenGenerator } from "../tokens/size-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class SizeUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    SizeTokenGenerator: SizeTokenGenerator,
  ) {
    super("Size utilities");
    this.config = SizeTokenGenerator.getConfig();
  }

  css() {
    const config = Object.keys(this.config);

    let result = "";

    const regular: Array<CssRuleStrategy> = [];

    for (const variable of config) {
      const key = variable.replace("size-", "");

      regular.push(
        new CssRuleRegular(`[data-size='${key}']`, {
          height: `var(--${variable})`,
          width: `var(--${variable})`,
        }),
      );
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: Array<CssRuleRegular> = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of config) {
        const key = variable.replace("size-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-size='${key}']`, {
            height: `var(--${variable})`,
            width: `var(--${variable})`,
          }),
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
      .map((key) => key.replace("size-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return ["size", ...this.breakpointRegistry.entries.map(([name]) => `${name}-size`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

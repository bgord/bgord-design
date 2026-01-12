import type { BreakpointRegistry } from "../breakpoint-registry";
import type { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class GapUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    SpacingTokenGenerator: SpacingTokenGenerator,
  ) {
    super("Gap utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");

      regular.push(new CssRuleRegular(`[data-gap='${key}']`, ["gap", `var(--${variable})`]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of Object.entries(this.breakpointRegistry.breakpoints)) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");

        responsive.push(new CssRuleRegular(`[data-${name}-gap='${key}']`, ["gap", `var(--${variable})`]));
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-gap"?: ${type};`;
  }
}

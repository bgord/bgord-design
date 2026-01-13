import type { BreakpointRegistry } from "../breakpoint-registry";
import type { StateRegistry } from "../state-registry";
import type { OpacityTokenGenerator } from "../tokens/opacity-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class OpacityUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    readonly stateRegistry: StateRegistry,
    OpacityTokenGenerator: OpacityTokenGenerator,
  ) {
    super("Opacity utilities");
    this.config = OpacityTokenGenerator.getConfig();
  }

  css() {
    const config = Object.keys(this.config);

    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of config) {
      const key = variable.replace("opacity-", "");

      regular.push(new CssRuleRegular(`[data-opacity='${key}']`, { opacity: `var(--${variable})` }));
    }

    for (const [state, selector] of this.stateRegistry.entries) {
      for (const variable of config) {
        const key = variable.replace("opacity-", "");

        regular.push(
          new CssRuleRegular(`[data-${state}-opacity='${key}']${selector}`, {
            opacity: `var(--${variable})`,
          }),
        );
      }
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of config) {
        const key = variable.replace("opacity-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-opacity='${key}']`, { opacity: `var(--${variable})` }),
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
      .map((key) => key.replace("opacity-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return [
      "opacity",
      ...this.stateRegistry.entries.map(([state]) => `${state}-opacity`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-opacity`),
    ]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

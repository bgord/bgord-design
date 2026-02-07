import type { BreakpointRegistry } from "../breakpoint-registry";
import type { StateRegistry } from "../state-registry";
import type { ShadowTokenGenerator } from "../tokens/shadow-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class ShadowUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    readonly stateRegistry: StateRegistry,
    ShadowTokenGenerator: ShadowTokenGenerator,
  ) {
    super("Shadow utilities");
    this.config = ShadowTokenGenerator.getConfig();
  }

  css() {
    const config = Object.keys(this.config);

    let result = "";

    const regular: Array<CssRuleStrategy> = [];

    for (const variable of config) {
      const key = variable.replace("shadow-", "");

      regular.push(new CssRuleRegular(`[data-shadow='${key}']`, { "box-shadow": `var(--${variable})` }));
    }

    for (const [state, selector] of this.stateRegistry.entries) {
      for (const variable of config) {
        const key = variable.replace("shadow-", "");

        regular.push(
          new CssRuleRegular(`[data-${state}-shadow='${key}']${selector}`, {
            "box-shadow": `var(--${variable})`,
          }),
        );
      }
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: Array<CssRuleRegular> = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of config) {
        const key = variable.replace("shadow-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-shadow='${key}']`, { "box-shadow": `var(--${variable})` }),
        );
      }

      for (const [state, selector] of this.stateRegistry.entries) {
        for (const variable of config) {
          const key = variable.replace("shadow-", "");

          responsive.push(
            new CssRuleRegular(`[data-${name}-${state}-shadow='${key}']${selector}`, {
              "box-shadow": `var(--${variable})`,
            }),
          );
        }
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
    return [
      "shadow",
      ...this.stateRegistry.entries.map(([state]) => `${state}-shadow`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-shadow`),
      ...this.breakpointRegistry.entries.flatMap(([name]) =>
        this.stateRegistry.entries.map(([state]) => `${name}-${state}-shadow`),
      ),
    ]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

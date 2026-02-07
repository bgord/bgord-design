import type { BreakpointRegistry } from "../breakpoint-registry";
import type { StateRegistry } from "../state-registry";
import type { BrandTokenGenerator } from "../tokens/brand-token-generator";
import type { DangerTokenGenerator } from "../tokens/danger-token-generator";
import type { GrayscaleTokenGenerator } from "../tokens/grayscale-token-generator";
import type { PositiveTokenGenerator } from "../tokens/positive-token-generator";
import type { WarningTokenGenerator } from "../tokens/warning-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class FontColorUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    readonly stateRegistry: StateRegistry,
    GrayscaleTokenGenerator: GrayscaleTokenGenerator,
    BrandTokenGenerator: BrandTokenGenerator,
    PositiveTokenGenerator: PositiveTokenGenerator,
    DangerTokenGenerator: DangerTokenGenerator,
    WarningTokenGenerator: WarningTokenGenerator,
  ) {
    super("Font-color utilities");
    this.config = {
      ...GrayscaleTokenGenerator.getConfig(),
      ...BrandTokenGenerator.getConfig(),
      ...PositiveTokenGenerator.getConfig(),
      ...DangerTokenGenerator.getConfig(),
      ...WarningTokenGenerator.getConfig(),
    };
  }

  css() {
    const config = Object.keys(this.config);

    let result = "";

    const regular: Array<CssRuleStrategy> = [];

    for (const variable of config) {
      const key = variable.replace("color-", "");

      regular.push(new CssRuleRegular(`[data-color='${key}']`, { color: `var(--${variable})` }));
    }

    for (const [state, selector] of this.stateRegistry.entries) {
      for (const variable of config) {
        const key = variable.replace("color-", "");

        regular.push(
          new CssRuleRegular(`[data-${state}-color='${key}']${selector}`, { color: `var(--${variable})` }),
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
        const key = variable.replace("color-", "");

        responsive.push(new CssRuleRegular(`[data-${name}-color='${key}']`, { color: `var(--${variable})` }));
      }

      for (const [state, selector] of this.stateRegistry.entries) {
        for (const variable of config) {
          const key = variable.replace("color-", "");

          responsive.push(
            new CssRuleRegular(`[data-${name}-${state}-color='${key}']${selector}`, {
              color: `var(--${variable})`,
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
      .map((key) => key.replace("color-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return [
      "color",
      ...this.stateRegistry.entries.map(([state]) => `${state}-color`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-color`),
      ...this.breakpointRegistry.entries.flatMap(([name]) =>
        this.stateRegistry.entries.map(([state]) => `${name}-${state}-color`),
      ),
    ]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

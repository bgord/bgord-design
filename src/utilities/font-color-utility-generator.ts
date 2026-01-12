import type { BreakpointRegistry } from "../breakpoint-registry";
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
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("color-", "");

      regular.push(new CssRuleRegular(`[data-color='${key}']`, ["color", `var(--${variable})`]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of Object.entries(this.breakpointRegistry.breakpoints)) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("color-", "");

        responsive.push(new CssRuleRegular(`[data-${name}-color='${key}']`, ["color", `var(--${variable})`]));
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("color-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-color"?: ${type};`;
  }
}

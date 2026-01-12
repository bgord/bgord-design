import type { BreakpointRegistry } from "../breakpoint-registry";
import type { BrandTokenGenerator } from "../tokens/brand-token-generator";
import type { DangerTokenGenerator } from "../tokens/danger-token-generator";
import type { GrayscaleTokenGenerator } from "../tokens/grayscale-token-generator";
import type { PositiveTokenGenerator } from "../tokens/positive-token-generator";
import type { WarningTokenGenerator } from "../tokens/warning-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class BackgroundUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    GrayscaleTokenGenerator: GrayscaleTokenGenerator,
    BrandTokenGenerator: BrandTokenGenerator,
    PositiveTokenGenerator: PositiveTokenGenerator,
    DangerTokenGenerator: DangerTokenGenerator,
    WarningTokenGenerator: WarningTokenGenerator,
  ) {
    super("Background utilities");
    this.config = {
      ...GrayscaleTokenGenerator.getConfig(),
      ...BrandTokenGenerator.getConfig(),
      ...PositiveTokenGenerator.getConfig(),
      ...DangerTokenGenerator.getConfig(),
      ...WarningTokenGenerator.getConfig(),
    };
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("color-", "");

      rules.push(new CssRuleRegular(`[data-bg='${key}']`, [["background", `var(--${variable})`]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("color-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-bg"?: ${type};`;
  }
}

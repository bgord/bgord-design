import type { BreakpointRegistry } from "../breakpoint-registry";
import type { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class PositionersUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    SpacingTokenGenerator: SpacingTokenGenerator,
  ) {
    super("Positioners utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      rules.push(new CssRuleRegular(`[data-top='${key}']`, ["top", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      rules.push(new CssRuleRegular(`[data-right='${key}']`, ["right", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      rules.push(new CssRuleRegular(`[data-bottom='${key}']`, ["bottom", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      rules.push(new CssRuleRegular(`[data-left='${key}']`, ["left", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      rules.push(new CssRuleRegular(`[data-inset='${key}']`, ["inset", `var(--${variable})`]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return [
      `"data-top"?: ${type};`,
      `"data-right"?: ${type};`,
      `"data-bottom"?: ${type};`,
      `"data-left"?: ${type};`,
      `"data-inset"?: ${type};`,
    ].join("");
  }
}

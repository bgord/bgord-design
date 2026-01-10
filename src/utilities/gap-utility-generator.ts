import type { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { CssRule, UtilityGenerator } from "./template";

export class GapUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(SpacingTokenGenerator: SpacingTokenGenerator) {
    super("Gap utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRule[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");

      rules.push(new CssRule(`[data-gap='${key}']`, [["gap", `var(--${variable})`]]));
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

    return `"data-gap"?: ${type};`;
  }
}

import type { OpacityTokenGenerator } from "../tokens/opacity-token-generator";
import { CssRule, UtilityGenerator } from "./template";

export class OpacityUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(OpacityTokenGenerator: OpacityTokenGenerator) {
    super("Opacity utilities");
    this.config = OpacityTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRule[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("opacity-", "");

      rules.push(new CssRule(`[data-opacity='${key}']`, [["opacity", `var(--${variable})`]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("opacity-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-opacity"?: ${type};`;
  }
}

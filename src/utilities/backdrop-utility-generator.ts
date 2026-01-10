import type { BackdropsTokenGenerator } from "../tokens/backdrops-token-generator";
import { CssRule, UtilityGenerator } from "./template";

export class BackdropUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(BackdropsTokenGenerator: BackdropsTokenGenerator) {
    super("Backdrop utilities");
    this.config = BackdropsTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRule[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("backdrop-", "");

      rules.push(new CssRule(`[data-backdrop='${key}']::backdrop`, [["background", `var(--${variable})`]]));
    }
    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("backdrop-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-backdrop"?: ${type};`;
  }
}

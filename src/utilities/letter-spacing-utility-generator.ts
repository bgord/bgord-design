import type { LetterSpacingTokenGenerator } from "../tokens/letter-spacing-token-generator";
import { CssRule, UtilityGenerator } from "./template";

export class LetterSpacingUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(LetterSpacingTokenGenerator: LetterSpacingTokenGenerator) {
    super("Letter spacing utilities");
    this.config = LetterSpacingTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRule[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("letter-spacing-", "");

      rules.push(new CssRule(`[data-ls='${key}']`, [["letter-spacing", `var(--${variable})`]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("letter-spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-ls"?: ${type};`;
  }
}

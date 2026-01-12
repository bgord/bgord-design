import type { BreakpointRegistry } from "../breakpoint-registry";
import type { LetterSpacingTokenGenerator } from "../tokens/letter-spacing-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class LetterSpacingUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    LetterSpacingTokenGenerator: LetterSpacingTokenGenerator,
  ) {
    super("Letter spacing utilities");
    this.config = LetterSpacingTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("letter-spacing-", "");

      rules.push(new CssRuleRegular(`[data-ls='${key}']`, ["letter-spacing", `var(--${variable})`]));
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

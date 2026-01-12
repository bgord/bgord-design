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
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("letter-spacing-", "");

      regular.push(new CssRuleRegular(`[data-ls='${key}']`, ["letter-spacing", `var(--${variable})`]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("letter-spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-ls"?: ${type};`;
  }
}

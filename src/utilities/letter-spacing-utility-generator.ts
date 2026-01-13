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
    const config = Object.keys(this.config);

    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of config) {
      const key = variable.replace("letter-spacing-", "");

      regular.push(new CssRuleRegular(`[data-ls='${key}']`, { "letter-spacing": `var(--${variable})` }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of config) {
        const key = variable.replace("letter-spacing-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-ls='${key}']`, { "letter-spacing": `var(--${variable})` }),
        );
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
      .map((key) => key.replace("letter-spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return ["ls", ...this.breakpointRegistry.entries.map(([name]) => `${name}-ls`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

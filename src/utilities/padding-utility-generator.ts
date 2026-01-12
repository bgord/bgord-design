import type { BreakpointRegistry } from "../breakpoint-registry";
import type { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class PaddingUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    SpacingTokenGenerator: SpacingTokenGenerator,
  ) {
    super("Padding utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    /* It is important to output the utils in this order,
       so the p is extendable by px/py, 
       and mx/my are extendable by pt/pr/pb/pl.
    */
    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-p='${key}']`, ["padding", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(
        new CssRuleRegular(`[data-px='${key}']`, [
          ["padding-left", `var(--${variable})`],
          ["padding-right", `var(--${variable})`],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(
        new CssRuleRegular(`[data-py='${key}']`, [
          ["padding-top", `var(--${variable})`],
          ["padding-bottom", `var(--${variable})`],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-pt='${key}']`, ["padding-top", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-pr='${key}']`, ["padding-right", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-pb='${key}']`, ["padding-bottom", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-pl='${key}']`, ["padding-left", `var(--${variable})`]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return ["p", "pt", "pr", "pb", "pl", "px", "py"].map((abbr) => `"data-${abbr}"?: ${type};`).join(" ");
  }
}

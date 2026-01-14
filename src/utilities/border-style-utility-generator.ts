import type { BreakpointRegistry } from "../breakpoint-registry";
import type { BorderStyleTokenGenerator } from "../tokens/border-style-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class BorderStyleUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    BorderStyleTokenGenerator: BorderStyleTokenGenerator,
  ) {
    super("Border style utilities");
    this.config = BorderStyleTokenGenerator.getConfig();
  }

  css() {
    const config = Object.keys(this.config);

    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of config) {
      const key = variable.replace("border-style-", "");

      regular.push(new CssRuleRegular(`[data-bs='${key}']`, { "border-style": `var(--${variable})` }));
    }

    for (const variable of config) {
      const key = variable.replace("border-style-", "");

      regular.push(new CssRuleRegular(`[data-bst='${key}']`, { "border-top-style": `var(--${variable})` }));
    }

    for (const variable of config) {
      const key = variable.replace("border-style-", "");

      regular.push(new CssRuleRegular(`[data-bsr='${key}']`, { "border-right-style": `var(--${variable})` }));
    }

    for (const variable of config) {
      const key = variable.replace("border-style-", "");

      regular.push(
        new CssRuleRegular(`[data-bsb='${key}']`, { "border-bottom-style": `var(--${variable})` }),
      );
    }

    for (const variable of config) {
      const key = variable.replace("border-style-", "");

      regular.push(new CssRuleRegular(`[data-bsl='${key}']`, { "border-left-style": `var(--${variable})` }));
    }

    for (const variable of config) {
      const key = variable.replace("border-style-", "");

      regular.push(
        new CssRuleRegular(`[data-bsx='${key}']`, {
          "border-left-style": `var(--${variable})`,
          "border-right-style": `var(--${variable})`,
        }),
      );
    }

    for (const variable of config) {
      const key = variable.replace("border-style-", "");

      regular.push(
        new CssRuleRegular(`[data-bsy='${key}']`, {
          "border-top-style": `var(--${variable})`,
          "border-bottom-style": `var(--${variable})`,
        }),
      );
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of config) {
        const key = variable.replace("border-style-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-bs='${key}']`, { "border-style": `var(--${variable})` }),
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
      .map((key) => key.replace("border-style-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return [
      "bs",
      "bst",
      "bsr",
      "bsb",
      "bsl",
      "bsx",
      "bsy",
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-bs`),
    ]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

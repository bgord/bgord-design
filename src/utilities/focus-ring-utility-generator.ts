import type { BreakpointRegistry } from "../breakpoint-registry";
import type { FocusRingTokenGenerator } from "../tokens/focus-ring-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class FocusRingUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    FocusRingTokenGenerator: FocusRingTokenGenerator,
  ) {
    super("Focus-ring utilities");
    this.config = FocusRingTokenGenerator.getConfig();
  }

  css() {
    const config = Object.entries(this.config);

    let result = "";

    const regular: Array<CssRuleStrategy> = [];

    for (const [variable, value] of config) {
      const key = variable.replace("focus-ring-", "");

      regular.push(
        new CssRuleRegular(`[data-focus-ring='${key}']:focus-visible`, {
          outline: `var(--border-width-thin) var(--border-style-solid) ${value}`,
          "outline-offset": "var(--border-width-thin)",
        }),
      );
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: Array<CssRuleRegular> = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [variable, value] of config) {
        const key = variable.replace("focus-ring-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-focus-ring='${key}']:focus-visible`, {
            outline: `var(--border-width-thin) var(--border-style-solid) ${value}`,
            "outline-offset": "var(--border-width-thin)",
          }),
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
      .map((key) => key.replace("focus-ring-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return ["focus-ring", ...this.breakpointRegistry.entries.map(([name]) => `${name}-focus-ring`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

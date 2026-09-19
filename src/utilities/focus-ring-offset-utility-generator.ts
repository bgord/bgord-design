import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class FocusRingOffsetUtilityGenerator extends UtilityGenerator {
  config = { inset: "calc(-1 * var(--border-width-thin))", none: "0" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Focus-ring offset utilities");
  }

  css() {
    const config = Object.entries(this.config);

    let result = "";

    const regular: Array<CssRuleStrategy> = [];

    for (const [key, value] of config) {
      regular.push(
        new CssRuleRegular(`[data-focus-ring-offset='${key}']:focus-visible`, { "outline-offset": value }),
      );
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: Array<CssRuleRegular> = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of config) {
        responsive.push(
          new CssRuleRegular(`[data-${name}-focus-ring-offset='${key}']:focus-visible`, {
            "outline-offset": value,
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
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return [
      "focus-ring-offset",
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-focus-ring-offset`),
    ]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

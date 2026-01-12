import type { BreakpointRegistry } from "../breakpoint-registry";
import type { FontSizeTokenGenerator } from "../tokens/font-size-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class FontSizeUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    FontSizeTokenGenerator: FontSizeTokenGenerator,
  ) {
    super("Font-size utilities");
    this.config = FontSizeTokenGenerator.getConfig();
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("font-size-", "");

      regular.push(new CssRuleRegular(`[data-fs='${key}']`, ["font-size", `var(--${variable})`]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("font-size-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-fs='${key}']`, ["font-size", `var(--${variable})`]),
        );
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key.replace("font-size-", "")}"`)
      .join(" | ");

    return [`"data-fs"?: ${type};`].join(" ");
    // return ["backdrop", ...this.breakpointRegistry.entries.map(([name]) => `${name}-backdrop`)]
    //   .map((key) => `"data-${key}"?: ${type};`)
    //   .join(" ");
  }
}

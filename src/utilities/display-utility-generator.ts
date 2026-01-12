import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class DisplayUtilityGenerator extends UtilityGenerator {
  config = { flex: "flex", block: "block", "inline-block": "inline-block", none: "none" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Display utilities");
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      if (key === "flex") {
        regular.push(
          new CssRuleRegular(`[data-disp='${key}']`, [
            ["display", value],
            ["flex-wrap", "wrap"],
          ]),
        );
      }
      regular.push(new CssRuleRegular(`[data-disp='${key}']`, ["display", value]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of Object.entries(this.config)) {
        if (key === "flex") {
          responsive.push(
            new CssRuleRegular(`[data-${name}-disp='${key}']`, [
              ["display", value],
              ["flex-wrap", "wrap"],
            ]),
          );
        }
        responsive.push(new CssRuleRegular(`[data-${name}-disp='${key}']`, ["display", value]));
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return [`"data-disp"?: ${type};`].join(" ");
  }
}

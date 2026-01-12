import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class DisplayUtilityGenerator extends UtilityGenerator {
  config = { flex: "flex", block: "block", "inline-block": "inline-block", none: "none" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Display utilities");
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      if (key === "flex") {
        rules.push(
          new CssRuleRegular(`[data-disp='${key}']`, [
            ["display", value],
            ["flex-wrap", "wrap"],
          ]),
        );
      }
      rules.push(new CssRuleRegular(`[data-disp='${key}']`, [["display", value]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-disp"?: ${type};`;
  }
}

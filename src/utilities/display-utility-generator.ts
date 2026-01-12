import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRule, UtilityGenerator } from "./template";

export class DisplayUtilityGenerator extends UtilityGenerator {
  config = { flex: "flex", block: "block", "inline-block": "inline-block", none: "none" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Display utilities");
  }

  css() {
    const rules: CssRule[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      if (key === "flex") {
        rules.push(
          new CssRule(`[data-disp='${key}']`, [
            ["display", value],
            ["flex-wrap", "wrap"],
          ]),
        );
      }
      rules.push(new CssRule(`[data-disp='${key}']`, [["display", value]]));
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

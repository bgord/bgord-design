import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRule, UtilityGenerator } from "./template";

export class FlexDirectionUtilityGenerator extends UtilityGenerator {
  config = {
    row: "row",
    "row-reverse": "row-reverse",
    column: "column",
    "column-reverse": "column-reverse",
  };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Flex direction utilities");
  }

  css() {
    const rules: CssRule[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      rules.push(new CssRule(`[data-dir='${key}']`, [["flex-direction", value]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-dir"?: ${type};`;
  }
}

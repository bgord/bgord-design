import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class ObjectFitUtilityGenerator extends UtilityGenerator {
  config = {
    contain: "contain",
    cover: "cover",
    fill: "fill",
    "scale-down": "scale-down",
    none: "none",
  };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Object fit utilities");
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      rules.push(new CssRuleRegular(`[data-object-fit='${key}']`, [["object-fit", value]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-object-fit"?: ${type};`;
  }
}

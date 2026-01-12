import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRule, UtilityGenerator } from "./template";

export class HeightUtilityGenerator extends UtilityGenerator {
  config = { "100%": "100%", auto: "auto", unset: "unset" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Heght utilities");
  }

  css() {
    const rules: CssRule[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      rules.push(new CssRule(`[data-height='${key}']`, [["height", value]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-height"?: ${type};`;
  }
}

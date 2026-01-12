import type { BreakpointRegistry } from "../breakpoint-registry";
import type { BreakpointTokenGenerator } from "../tokens/breakpoint-token-generator";
import { CssRule, UtilityGenerator } from "./template";

export class MaxHeightUtilityGenerator extends UtilityGenerator {
  config = { "100%": "100%", unset: "unset" };

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    BreakpointTokenGenerator: BreakpointTokenGenerator,
  ) {
    super("Max height utilities");
    this.config = { ...this.config, ...BreakpointTokenGenerator.getConfig() };
  }

  css() {
    const rules: CssRule[] = [];

    for (const [variable, value] of Object.entries(this.config)) {
      const key = variable.replace("breakpoint-", "");

      rules.push(new CssRule(`[data-maxh='${key}']`, [["max-height", value]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("breakpoint-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-maxh"?: ${type};`;
  }
}

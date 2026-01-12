import type { BreakpointRegistry } from "../breakpoint-registry";
import type { RadiusTokenGenerator } from "../tokens/radius-token-generator";
import { CssRule, UtilityGenerator } from "./template";

export class RadiusUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    RadiusTokenGenerator: RadiusTokenGenerator,
  ) {
    super("Radius utilities");
    this.config = RadiusTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRule[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("radius-", "");

      rules.push(new CssRule(`[data-br='${key}']`, [["border-radius", `var(--${variable})`]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("radius-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-br"?: ${type};`;
  }
}

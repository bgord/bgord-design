import type { BreakpointRegistry } from "../breakpoint-registry";
import type { FontSizeTokenGenerator } from "../tokens/font-size-token-generator";
import { CssRule, UtilityGenerator } from "./template";

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
    const rules: CssRule[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("font-size-", "");

      rules.push(new CssRule(`[data-fs='${key}']`, [["font-size", `var(--${variable})`]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key.replace("font-size-", "")}"`)
      .join(" | ");

    return `"data-fs"?: ${type};`;
  }
}

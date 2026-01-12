import type { BreakpointRegistry } from "../breakpoint-registry";
import type { SizeTokenGenerator } from "../tokens/size-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class SizeUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    SizeTokenGenerator: SizeTokenGenerator,
  ) {
    super("Size utilities");
    this.config = SizeTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("size-", "");

      rules.push(
        new CssRuleRegular(`[data-size='${key}']`, [
          ["height", `var(--${variable})`],
          ["width", `var(--${variable})`],
        ]),
      );
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("size-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-size"?: ${type};`;
  }
}

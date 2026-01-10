import { CssRule, UtilityGenerator } from "./template";

export class FlexShrinkUtilityGenerator extends UtilityGenerator {
  config = { "0": "0", unset: "unset" };

  constructor() {
    super("Flex shrink utilities");
  }

  css() {
    const rules: CssRule[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      rules.push(new CssRule(`[data-shrink='${key}']`, [["flex-shrink", value]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-shrink"?: ${type};`;
  }
}

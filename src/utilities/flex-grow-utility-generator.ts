import { CssRule, UtilityGenerator } from "./template";

export class FlexGrowUtilityGenerator extends UtilityGenerator {
  config = { "1": "1", unset: "unset" };

  constructor() {
    super("Flex grow utilities");
  }

  css() {
    const rules: CssRule[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      rules.push(new CssRule(`[data-grow='${key}']`, [["flex-grow", value]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-grow"?: ${type};`;
  }
}

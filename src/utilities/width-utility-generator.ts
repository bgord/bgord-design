import { CssRule, UtilityGenerator } from "./template";

export class WidthUtilityGenerator extends UtilityGenerator {
  config = { "100%": "100%", auto: "auto", unset: "unset" };

  constructor() {
    super("Width utilities");
  }

  css() {
    const rules: CssRule[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      rules.push(new CssRule(`[data-width='${key}']`, [["width", value]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-width"?: ${type};`;
  }
}

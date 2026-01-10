import { CssRule, UtilityGenerator } from "./template";

export class PositionUtilityGenerator extends UtilityGenerator {
  config = {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky",
    unset: "unset",
  };

  constructor() {
    super("Position utilities");
  }

  css() {
    const rules: CssRule[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      rules.push(new CssRule(`[data-position='${key}']`, [["position", value]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-position"?: ${type};`;
  }
}

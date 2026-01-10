import { CssRule, UtilityGenerator } from "./template";

export class AxisPlacementUtilityGenerator extends UtilityGenerator {
  config = {
    start: "flex-start",
    end: "flex-end",
    around: "space-around",
    evenly: "space-evenly",
    between: "space-between",
    center: "center",
    baseline: "baseline",
  };

  constructor() {
    super("Axis placement utilities");
  }

  css() {
    const rules: CssRule[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      rules.push(new CssRule(`[data-main='${key}']`, [["justify-content", value]]));
    }

    for (const [key, value] of Object.entries(this.config)) {
      rules.push(new CssRule(`[data-cross='${key}']`, [["align-items", value]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return [`"data-main"?: ${type};`, `"data-cross"?: ${type};`].join(" ");
  }
}

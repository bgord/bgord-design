import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class TransformUtilityGenerator extends UtilityGenerator {
  // Stryker disable all
  config = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "upper-first": "upper-first",
    truncate: "truncate",
    center: "center",
    nowrap: "nowrap",
    none: "none",
    "line-clamp": "line-clamp",
    "font-variant-numeric": "tabular-nums",
  };
  // Stryker restore all

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Transform utilities");
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      if (key === "truncate") {
        rules.push(
          new CssRuleRegular(`[data-transform~='${key}']`, [
            ["overflow", "hidden"],
            ["white-space", "nowrap"],
            ["text-overflow", "ellipsis"],
          ]),
        );
        continue;
      }

      if (key === "line-clamp") {
        rules.push(
          new CssRuleRegular(`[data-transform~='${key}']`, [
            ["display", "-webkit-box"],
            ["-webkit-box-orient", "vertical"],
            ["-webkit-line-clamp", "var(--lines, 2)"],
            ["overflow", "hidden"],
          ]),
        );
        continue;
      }

      if (key === "center") {
        rules.push(new CssRuleRegular(`[data-transform~='${key}']`, ["text-align", "center"]));
        continue;
      }

      if (key === "upper-first") {
        rules.push(
          new CssRuleRegular(`[data-transform~='${key}']:first-letter`, ["text-transform", "uppercase"]),
        );
        continue;
      }

      if (key === "nowrap") {
        rules.push(new CssRuleRegular(`[data-transform~='${key}']`, ["white-space", "nowrap"]));
        continue;
      }

      if (key === "font-variant-numeric") {
        rules.push(
          new CssRuleRegular(`[data-transform~='${key}']`, ["font-variant-numeric", "tabular-nums"]),
        );
        continue;
      }

      rules.push(new CssRuleRegular(`[data-transform~='${key}']`, ["text-transform", value]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-transform"?: ${type};`;
  }
}

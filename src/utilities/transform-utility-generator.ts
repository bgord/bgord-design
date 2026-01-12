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
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      if (key === "truncate") {
        regular.push(
          new CssRuleRegular(`[data-transform~='${key}']`, [
            ["overflow", "hidden"],
            ["white-space", "nowrap"],
            ["text-overflow", "ellipsis"],
          ]),
        );
        continue;
      }

      if (key === "line-clamp") {
        regular.push(
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
        regular.push(new CssRuleRegular(`[data-transform~='${key}']`, ["text-align", "center"]));
        continue;
      }

      if (key === "upper-first") {
        regular.push(
          new CssRuleRegular(`[data-transform~='${key}']:first-letter`, ["text-transform", "uppercase"]),
        );
        continue;
      }

      if (key === "nowrap") {
        regular.push(new CssRuleRegular(`[data-transform~='${key}']`, ["white-space", "nowrap"]));
        continue;
      }

      if (key === "font-variant-numeric") {
        regular.push(
          new CssRuleRegular(`[data-transform~='${key}']`, ["font-variant-numeric", "tabular-nums"]),
        );
        continue;
      }

      regular.push(new CssRuleRegular(`[data-transform~='${key}']`, ["text-transform", value]));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of Object.entries(this.config)) {
        if (key === "truncate") {
          responsive.push(
            new CssRuleRegular(`[data-${name}-transform~='${key}']`, [
              ["overflow", "hidden"],
              ["white-space", "nowrap"],
              ["text-overflow", "ellipsis"],
            ]),
          );
          continue;
        }

        if (key === "line-clamp") {
          responsive.push(
            new CssRuleRegular(`[data-${name}-transform~='${key}']`, [
              ["display", "-webkit-box"],
              ["-webkit-box-orient", "vertical"],
              ["-webkit-line-clamp", "var(--lines, 2)"],
              ["overflow", "hidden"],
            ]),
          );
          continue;
        }

        if (key === "center") {
          responsive.push(new CssRuleRegular(`[data-${name}-transform~='${key}']`, ["text-align", "center"]));
          continue;
        }

        if (key === "upper-first") {
          responsive.push(
            new CssRuleRegular(`[data-${name}-transform~='${key}']:first-letter`, [
              "text-transform",
              "uppercase",
            ]),
          );
          continue;
        }

        if (key === "nowrap") {
          responsive.push(
            new CssRuleRegular(`[data-${name}-transform~='${key}']`, ["white-space", "nowrap"]),
          );
          continue;
        }

        if (key === "font-variant-numeric") {
          responsive.push(
            new CssRuleRegular(`[data-${name}-transform~='${key}']`, [
              "font-variant-numeric",
              "tabular-nums",
            ]),
          );
          continue;
        }

        responsive.push(new CssRuleRegular(`[data-${name}-transform~='${key}']`, ["text-transform", value]));
      }

      // Stryker disable all
      result += responsive.map((rule) => rule.get()).join("\n");
      // Stryker restore all

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return ["transform", ...this.breakpointRegistry.entries.map(([name]) => `${name}-transform`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

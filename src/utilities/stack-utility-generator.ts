import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class StackUtilityGenerator extends UtilityGenerator {
  // Stryker disable all
  config = { x: "x", y: "y" };
  // Stryker restore all

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Stack utilities");
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [key] of Object.entries(this.config)) {
      if (key === "x") {
        regular.push(
          new CssRuleRegular(`[data-stack='${key}']`, [
            ["display", "flex"],
            ["flex-wrap", "wrap"],
          ]),
        );
      }

      if (key === "y") {
        regular.push(
          new CssRuleRegular(`[data-stack='${key}']`, [
            ["display", "flex"],
            ["flex-wrap", "wrap"],
            ["flex-direction", "column"],
          ]),
        );
      }
    }

    result += regular.map((rule) => rule.get()).join("\n");

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-stack"?: ${type};`;
  }
}

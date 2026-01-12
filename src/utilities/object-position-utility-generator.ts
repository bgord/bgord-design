import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class ObjectPositionUtilityGenerator extends UtilityGenerator {
  config = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    center: "center",
    "top-left": "top left",
    "top-right": "top right",
  };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Object position utilities");
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      regular.push(new CssRuleRegular(`[data-object-position='${key}']`, ["object-position", value]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of Object.entries(this.breakpointRegistry.breakpoints)) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of Object.entries(this.config)) {
        responsive.push(
          new CssRuleRegular(`[data-${name}-object-position='${key}']`, ["object-position", value]),
        );
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-object-position"?: ${type};`;
  }
}

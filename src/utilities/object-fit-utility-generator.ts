import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class ObjectFitUtilityGenerator extends UtilityGenerator {
  config = {
    contain: "contain",
    cover: "cover",
    fill: "fill",
    "scale-down": "scale-down",
    none: "none",
  };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Object fit utilities");
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      regular.push(new CssRuleRegular(`[data-object-fit='${key}']`, ["object-fit", value]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of Object.entries(this.config)) {
        responsive.push(new CssRuleRegular(`[data-${name}-object-fit='${key}']`, ["object-fit", value]));
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

    return ["object-fit", ...this.breakpointRegistry.entries.map(([name]) => `${name}-object-fit`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
  }
}

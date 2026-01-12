import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class PointerEventUtilityGenerator extends UtilityGenerator {
  config = { none: "none", auto: "auto" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Pointer event utilities");
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      regular.push(new CssRuleRegular(`[data-pointer-events='${key}']`, ["pointer-events", value]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of Object.entries(this.config)) {
        responsive.push(
          new CssRuleRegular(`[data-${name}-pointer-events='${key}']`, ["pointer-events", value]),
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

    return ["pointer-events", ...this.breakpointRegistry.entries.map(([name]) => `${name}-pointer-events`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
  }
}

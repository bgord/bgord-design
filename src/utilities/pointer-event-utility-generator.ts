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

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-pointer-events"?: ${type};`;
  }
}

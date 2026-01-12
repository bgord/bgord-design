import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class FlexWrapUtilityGenerator extends UtilityGenerator {
  config = { nowrap: "nowrap", wrap: "wrap", "wrap-reverse": "wrap-reverse", unset: "unset" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Flex wrap utilities");
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      regular.push(new CssRuleRegular(`[data-wrap='${key}']`, ["flex-wrap", value]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-wrap"?: ${type};`;
  }
}

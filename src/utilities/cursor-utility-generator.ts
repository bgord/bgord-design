import type { BreakpointRegistry } from "../breakpoint-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class CursorUtilityGenerator extends UtilityGenerator {
  config = { wait: "wait", auto: "auto", pointer: "pointer", "not-allowed": "not-allowed" };

  constructor(readonly breakpointRegistry: BreakpointRegistry) {
    super("Cursor utilities");
  }

  css() {
    const rules: CssRuleStrategy[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      rules.push(new CssRuleRegular(`[data-cursor='${key}']`, ["cursor", value]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-cursor"?: ${type};`;
  }
}

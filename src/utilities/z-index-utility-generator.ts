import type { BreakpointRegistry } from "../breakpoint-registry";
import type { ZIndexTokenGenerator } from "../tokens/z-index-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class ZIndexUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    ZIndexTokenGenerator: ZIndexTokenGenerator,
  ) {
    super("Z-index utilities");
    this.config = ZIndexTokenGenerator.getConfig();
  }

  css() {
    const config = Object.keys(this.config);

    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of config) {
      const key = variable.replace("z-index-", "");

      regular.push(new CssRuleRegular(`[data-z='${key}']`, { "z-index": `var(--${variable})` }));
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of config) {
        const key = variable.replace("z-index-", "");

        responsive.push(new CssRuleRegular(`[data-${name}-z='${key}']`, { "z-index": `var(--${variable})` }));
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
      .map((key) => key.replace("z-index-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return ["z", ...this.breakpointRegistry.entries.map(([name]) => `${name}-z`)]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}

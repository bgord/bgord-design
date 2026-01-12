import type { BreakpointRegistry } from "../breakpoint-registry";
import type { BackdropsTokenGenerator } from "../tokens/backdrops-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class BackdropUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    BackdropsTokenGenerator: BackdropsTokenGenerator,
  ) {
    super("Backdrop utilities");
    this.config = BackdropsTokenGenerator.getConfig();
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("backdrop-", "");

      regular.push(
        new CssRuleRegular(`[data-backdrop='${key}']::backdrop`, ["background", `var(--${variable})`]),
      );
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("backdrop-", "");

        responsive.push(
          new CssRuleRegular(`[data-${name}-backdrop='${key}']::backdrop`, [
            "background",
            `var(--${variable})`,
          ]),
        );
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("backdrop-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-backdrop"?: ${type};`;
  }
}

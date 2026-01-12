import type { BreakpointRegistry } from "../breakpoint-registry";
import type { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class MarginUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    SpacingTokenGenerator: SpacingTokenGenerator,
  ) {
    super("Margin utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    /* It is important to output the utils in this order,
       so the m is extendable by mx/my,
       and mx/my are extendable by mt/mr/mb/ml.
    */
    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-m='${key}']`, ["margin", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(
        new CssRuleRegular(`[data-mx='${key}']`, [
          ["margin-left", `var(--${variable})`],
          ["margin-right", `var(--${variable})`],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(
        new CssRuleRegular(`[data-my='${key}']`, [
          ["margin-top", `var(--${variable})`],
          ["margin-bottom", `var(--${variable})`],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-mt='${key}']`, ["margin-top", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-mr='${key}']`, ["margin-right", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-mb='${key}']`, ["margin-bottom", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-ml='${key}']`, ["margin-left", `var(--${variable})`]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(new CssRuleRegular(`[data-${name}-m='${key}']`, ["margin", `var(--${variable})`]));
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-mx='${key}']`, [
            ["margin-left", `var(--${variable})`],
            ["margin-right", `var(--${variable})`],
          ]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-my='${key}']`, [
            ["margin-top", `var(--${variable})`],
            ["margin-bottom", `var(--${variable})`],
          ]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-mt='${key}']`, ["margin-top", `var(--${variable})`]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-mr='${key}']`, ["margin-right", `var(--${variable})`]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-mb='${key}']`, ["margin-bottom", `var(--${variable})`]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-ml='${key}']`, ["margin-left", `var(--${variable})`]),
        );
      }

      result += responsive.map((rule) => rule.get()).join("\n");

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return ["m", "mt", "mr", "mb", "ml", "mx", "my"].map((abbr) => `"data-${abbr}"?: ${type};`).join(" ");
    // return ["backdrop", ...this.breakpointRegistry.entries.map(([name]) => `${name}-backdrop`)]
    //   .map((key) => `"data-${key}"?: ${type};`)
    //   .join(" ");
  }
}

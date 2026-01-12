import type { BreakpointRegistry } from "../breakpoint-registry";
import type { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class PaddingUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    SpacingTokenGenerator: SpacingTokenGenerator,
  ) {
    super("Padding utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    let result = "";

    const regular: CssRuleStrategy[] = [];

    /* It is important to output the utils in this order,
       so the p is extendable by px/py, 
       and mx/my are extendable by pt/pr/pb/pl.
    */
    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-p='${key}']`, ["padding", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(
        new CssRuleRegular(`[data-px='${key}']`, [
          ["padding-left", `var(--${variable})`],
          ["padding-right", `var(--${variable})`],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(
        new CssRuleRegular(`[data-py='${key}']`, [
          ["padding-top", `var(--${variable})`],
          ["padding-bottom", `var(--${variable})`],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-pt='${key}']`, ["padding-top", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-pr='${key}']`, ["padding-right", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-pb='${key}']`, ["padding-bottom", `var(--${variable})`]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      regular.push(new CssRuleRegular(`[data-pl='${key}']`, ["padding-left", `var(--${variable})`]));
    }

    result += regular.map((rule) => rule.get()).join("\n");

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(new CssRuleRegular(`[data-${name}-p='${key}']`, ["padding", `var(--${variable})`]));
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-px='${key}']`, [
            ["padding-left", `var(--${variable})`],
            ["padding-right", `var(--${variable})`],
          ]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-py='${key}']`, [
            ["padding-top", `var(--${variable})`],
            ["padding-bottom", `var(--${variable})`],
          ]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-pt='${key}']`, ["padding-top", `var(--${variable})`]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-pr='${key}']`, ["padding-right", `var(--${variable})`]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-pb='${key}']`, ["padding-bottom", `var(--${variable})`]),
        );
      }

      for (const variable of Object.keys(this.config)) {
        const key = variable.replace("spacing-", "");
        responsive.push(
          new CssRuleRegular(`[data-${name}-pl='${key}']`, ["padding-left", `var(--${variable})`]),
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

    return [
      "p",
      "pt",
      "pr",
      "pb",
      "pl",
      "px",
      "py",
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-p`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-pt`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-pr`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-pb`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-pl`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-px`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-py`),
    ]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
  }
}

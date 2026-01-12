import type { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { CssRule, UtilityGenerator } from "./template";

export class MarginUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(SpacingTokenGenerator: SpacingTokenGenerator) {
    super("Margin utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRule[] = [];

    /* It is important to output the utils in this order,
       so the m is extendable by mx/my,
       and mx/my are extendable by mt/mr/mb/ml.
    */
    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      rules.push(new CssRule(`[data-m='${key}']`, [["margin", `var(--${variable})`]]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      rules.push(
        new CssRule(`[data-mx='${key}']`, [
          ["margin-left", `var(--${variable})`],
          ["margin-right", `var(--${variable})`],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      rules.push(
        new CssRule(`[data-my='${key}']`, [
          ["margin-top", `var(--${variable})`],
          ["margin-bottom", `var(--${variable})`],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      rules.push(new CssRule(`[data-mt='${key}']`, [["margin-top", `var(--${variable})`]]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      rules.push(new CssRule(`[data-mr='${key}']`, [["margin-right", `var(--${variable})`]]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      rules.push(new CssRule(`[data-mb='${key}']`, [["margin-bottom", `var(--${variable})`]]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      rules.push(new CssRule(`[data-ml='${key}']`, [["margin-left", `var(--${variable})`]]));
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return ["m", "mt", "mr", "mb", "ml", "mx", "my"].map((abbr) => `"data-${abbr}"?: ${type};`).join(" ");
  }
}

import type { BorderWidthTokenGenerator } from "../tokens/border-width-token-generator";
import { CssRule, UtilityGenerator } from "./template";

export class BorderWidthUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(BorderWidthTokenGenerator: BorderWidthTokenGenerator) {
    super("Border width utilities");
    this.config = BorderWidthTokenGenerator.getConfig();
  }

  css() {
    const rules: CssRule[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("border-width-", "");
      rules.push(new CssRule(`[data-bw='${key}']`, [["border-width", `var(--${variable})`]]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("border-width-", "");
      rules.push(new CssRule(`[data-bwt='${key}']`, [["border-top-width", `var(--${variable})`]]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("border-width-", "");
      rules.push(new CssRule(`[data-bwr='${key}']`, [["border-right-width", `var(--${variable})`]]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("border-width-", "");
      rules.push(new CssRule(`[data-bwb='${key}']`, [["border-bottom-width", `var(--${variable})`]]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("border-width-", "");
      rules.push(new CssRule(`[data-bwl='${key}']`, [["border-left-width", `var(--${variable})`]]));
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("border-width-", "");
      rules.push(
        new CssRule(`[data-bwx='${key}']`, [
          ["border-left-width", `var(--${variable})`],
          ["border-right-width", `var(--${variable})`],
        ]),
      );
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("border-width-", "");
      rules.push(
        new CssRule(`[data-bwy='${key}']`, [
          ["border-top-width", `var(--${variable})`],
          ["border-bottom-width", `var(--${variable})`],
        ]),
      );
    }

    // Stryker disable all
    return rules.map((rule) => rule.get()).join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("border-width-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return [
      `"data-bw"?: ${type};`,
      `"data-bwt"?: ${type};`,
      `"data-bwr"?: ${type};`,
      `"data-bwb"?: ${type};`,
      `"data-bwl"?: ${type};`,
      `"data-bwx"?: ${type};`,
      `"data-bwy"?: ${type};`,
    ].join(" ");
  }
}

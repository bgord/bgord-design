import { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { UtilityGenerator } from "./template";

export class PaddingUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(SpacingTokenGenerator: SpacingTokenGenerator) {
    super("Padding utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    /* It is important to output the utils in this order,
       so the p is extendable by px/py, 
       and mx/my are extendable by pt/pr/pb/pl.
    */
    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      lines.push(`[data-p='${key}'] { padding: var(--${variable}); }`);
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      lines.push(`[data-px='${key}'] { padding: 0 var(--${variable}); }`);
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      lines.push(`[data-py='${key}'] { padding: var(--${variable}) 0; }`);
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      lines.push(`[data-pt='${key}'] { padding-top: var(--${variable}); }`);
      lines.push(`[data-pr='${key}'] { padding-right: var(--${variable}); }`);
      lines.push(`[data-pb='${key}'] { padding-bottom: var(--${variable}); }`);
      lines.push(`[data-pl='${key}'] { padding-left: var(--${variable}); }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return ["p", "pt", "pr", "pb", "pl", "px", "py"].map((abbr) => `"data-${abbr}"?: ${type};`).join(" ");
  }
}

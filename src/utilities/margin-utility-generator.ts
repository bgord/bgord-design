import type { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { UtilityGenerator } from "./template";

export class MarginUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(SpacingTokenGenerator: SpacingTokenGenerator) {
    super("Margin utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    /* It is important to output the utils in this order,
       so the m is extendable by mx/my,
       and mx/my are extendable by mt/mr/mb/ml.
    */
    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      lines.push(`[data-m='${key}'] { margin: var(--${variable}); }`);
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      lines.push(`[data-mx='${key}'] { margin-left: var(--${variable}); margin-right: var(--${variable}); }`);
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      lines.push(`[data-my='${key}'] { margin-top: var(--${variable}); margin-bottom: var(--${variable}); }`);
    }

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");
      lines.push(`[data-mt='${key}'] { margin-top: var(--${variable}); }`);
      lines.push(`[data-mr='${key}'] { margin-right: var(--${variable}); }`);
      lines.push(`[data-mb='${key}'] { margin-bottom: var(--${variable}); }`);
      lines.push(`[data-ml='${key}'] { margin-left: var(--${variable}); }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return ["m", "mt", "mr", "mb", "ml", "mx", "my"].map((abbr) => `"data-${abbr}"?: ${type};`).join(" ");
  }
}

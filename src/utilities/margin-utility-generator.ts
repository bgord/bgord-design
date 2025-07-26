import { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { UtilityGenerator } from "./template";

export class MarginUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(SpacingTokenGenerator: SpacingTokenGenerator) {
    super("Margin utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");

      lines.push(`[data-m='${key}'] { margin: var(--${variable}); }`);

      lines.push(`[data-mt='${key}'] { margin-top: var(--${variable}); }`);
      lines.push(`[data-mr='${key}'] { margin-right: var(--${variable}); }`);
      lines.push(`[data-mb='${key}'] { margin-bottom: var(--${variable}); }`);
      lines.push(`[data-ml='${key}'] { margin-left: var(--${variable}); }`);

      lines.push(`[data-mx='${key}'] { margin: 0 var(--${variable}); }`);
      lines.push(`[data-my='${key}'] { margin: var(--${variable}) 0; }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    const lines = ["m", "mt", "mr", "mb", "ml", "mx", "my"].map((abbr) => `"data-${abbr}"?: ${type};`);

    return lines.join(" ");
  }
}

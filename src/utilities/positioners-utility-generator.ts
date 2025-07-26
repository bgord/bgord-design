import { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { UtilityGenerator } from "./template";

export class PositionersUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(SpacingTokenGenerator: SpacingTokenGenerator) {
    super("Positioners utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");

      lines.push(`[data-top='${key}'] { top: var(--${variable}); }`);
      lines.push(`[data-right='${key}'] { right: var(--${variable}); }`);
      lines.push(`[data-bottom='${key}'] { bottom: var(--${variable}); }`);
      lines.push(`[data-left='${key}'] { left: var(--${variable}); }`);
      lines.push(`[data-inset='${key}'] { inset: var(--${variable}); }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return [
      `"data-top"?: ${type}`,
      `"data-right"?: ${type}`,
      `"data-bottom"?: ${type}`,
      `"data-left"?: ${type}`,
      `"data-inset"?: ${type}`,
    ].join("");
  }
}

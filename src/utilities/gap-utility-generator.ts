import { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { UtilityGenerator } from "./template";

export class GapUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(SpacingTokenGenerator: SpacingTokenGenerator) {
    super("Gap utilities");
    this.config = SpacingTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("spacing-", "");

      lines.push(`[data-gap='${key}'] { gap: var(--${variable}); }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("spacing-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-gap"?: ${type};`;
  }
}

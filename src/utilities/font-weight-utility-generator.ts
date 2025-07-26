import { FontWeightTokenGenerator } from "../tokens/font-weight-token-generator";
import { UtilityGenerator } from "./template";

export class FontWeightUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(FontWeightTokenGenerator: FontWeightTokenGenerator) {
    super("Font-weight utilities");
    this.config = FontWeightTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("font-weight-", "");

      lines.push(`[data-fw='${key}'] { font-weight: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

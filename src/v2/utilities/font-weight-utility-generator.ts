import { FontWeightTokenGenerator } from "../tokens/font-weight-token-generator";
import { UtilityGenerator } from "./template";

export class FontWeightUtilityGenerator extends UtilityGenerator {
  constructor(private readonly FontWeightTokenGenerator: FontWeightTokenGenerator) {
    super("Font-weight utilities");
  }

  css(): string {
    const tokens = this.FontWeightTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("font-weight-", "");

      lines.push(`[data-fw='${key}'] { font-weight: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

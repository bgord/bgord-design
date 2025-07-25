import { BorderWidthTokenGenerator } from "../tokens/border-width-token-generator";
import { UtilityGenerator } from "./template";

export class BorderWidthUtilityGenerator extends UtilityGenerator {
  constructor(private readonly BorderWidthTokenGenerator: BorderWidthTokenGenerator) {
    super("Border width utilities");
  }

  css(): string {
    const tokens = this.BorderWidthTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("border-width-", "");

      lines.push(`[data-bw='${key}'] { border-width: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

import { BorderWidthTokenGenerator } from "../tokens/border-width-token-generator";
import { UtilityGenerator } from "./template";

export class BorderWidthUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(BorderWidthTokenGenerator: BorderWidthTokenGenerator) {
    super("Border width utilities");
    this.config = BorderWidthTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("border-width-", "");

      lines.push(`[data-bw='${key}'] { border-width: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

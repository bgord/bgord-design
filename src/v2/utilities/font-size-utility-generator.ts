import { FontSizeTokenGenerator } from "../tokens/font-size-token-generator";
import { UtilityGenerator } from "./template";

export class FontSizeUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(FontSizeTokenGenerator: FontSizeTokenGenerator) {
    super("Font-size utilities");
    this.config = FontSizeTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("font-size-", "");

      lines.push(`[data-fs='${key}'] { font-size: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

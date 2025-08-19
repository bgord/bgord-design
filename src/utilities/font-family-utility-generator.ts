import type { FontFamilyTokenGenerator } from "../tokens/font-family-token-generator";
import { UtilityGenerator } from "./template";

export class FontFamilyUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(FontFamilyTokenGenerator: FontFamilyTokenGenerator) {
    super("Font-family utilities");
    this.config = FontFamilyTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("font-family-", "");

      lines.push(`[data-ff='${key}'] { font-family: var(--${variable}); }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("font-family-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-ff"?: ${type};`;
  }
}

import { FontFamilyTokenGenerator } from "../tokens/font-family-token-generator";
import { UtilityGenerator } from "./template";

export class FontFamilyUtilityGenerator extends UtilityGenerator {
  constructor(private readonly FontFamilyTokenGenerator: FontFamilyTokenGenerator) {
    super("Font-family utilities");
  }

  css(): string {
    const tokens = this.FontFamilyTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("font-family-", "");

      lines.push(`[data-ff='${key}'] { font-family: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

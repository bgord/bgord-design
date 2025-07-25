import { FontSizeTokenGenerator } from "../tokens/font-size-token-generator";
import { UtilityGenerator } from "./template";

export class FontSizeUtilityGenerator extends UtilityGenerator {
  constructor(private readonly FontSizeTokenGenerator: FontSizeTokenGenerator) {
    super("Font-size utilities");
  }

  css(): string {
    const tokens = this.FontSizeTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("font-size-", "");
      lines.push(`*[data-fs='${key}'] { font-size: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

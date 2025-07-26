import { LetterSpacingTokenGenerator } from "../tokens/letter-spacing-token-generator";
import { UtilityGenerator } from "./template";

export class LetterSpacingUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(LetterSpacingTokenGenerator: LetterSpacingTokenGenerator) {
    super("Letter spacing utilities");
    this.config = LetterSpacingTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("letter-spacing-", "");

      lines.push(`[data-ls='${key}'] { letter-spacing: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

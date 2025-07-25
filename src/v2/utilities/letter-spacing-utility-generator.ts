import { LetterSpacingTokenGenerator } from "../tokens/letter-spacing-token-generator";
import { UtilityGenerator } from "./template";

export class LetterSpacingUtilityGenerator extends UtilityGenerator {
  constructor(private readonly LetterSpacingTokenGenerator: LetterSpacingTokenGenerator) {
    super("Letter spacing utilities");
  }

  css(): string {
    const tokens = this.LetterSpacingTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("letter-spacing-", "");

      lines.push(`[data-ls='${key}'] { letter-spacing: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

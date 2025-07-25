import { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { UtilityGenerator } from "./template";

export class PaddingUtilityGenerator extends UtilityGenerator {
  constructor(private readonly SpacingTokenGenerator: SpacingTokenGenerator) {
    super("Padding utilities");
  }

  css(): string {
    const tokens = this.SpacingTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("spacing-", "");

      lines.push(`[data-p='${key}'] { padding: var(--${variable}); }`);

      lines.push(`[data-pt='${key}'] { padding-top: var(--${variable}); }`);
      lines.push(`[data-pr='${key}'] { padding-right: var(--${variable}); }`);
      lines.push(`[data-pb='${key}'] { padding-bottom: var(--${variable}); }`);
      lines.push(`[data-pl='${key}'] { padding-left: var(--${variable}); }`);

      lines.push(`[data-px='${key}'] { padding: 0 var(--${variable}); }`);
      lines.push(`[data-py='${key}'] { padding: var(--${variable}) 0; }`);
    }

    return lines.join("\n");
  }
}

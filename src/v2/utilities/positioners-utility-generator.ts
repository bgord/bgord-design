import { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { UtilityGenerator } from "./template";

export class PositionersUtilityGenerator extends UtilityGenerator {
  constructor(private readonly SpacingTokenGenerator: SpacingTokenGenerator) {
    super("Positioners utilities");
  }

  css(): string {
    const tokens = this.SpacingTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("spacing-", "");

      lines.push(`[data-top='${key}'] { top: var(--${variable}); }`);
      lines.push(`[data-right='${key}'] { right: var(--${variable}); }`);
      lines.push(`[data-bottom='${key}'] { bottom: var(--${variable}); }`);
      lines.push(`[data-left='${key}'] { left: var(--${variable}); }`);
      lines.push(`[data-inset='${key}'] { inset: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

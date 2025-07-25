import { SpacingTokenGenerator } from "../tokens/spacing-token-generator";
import { UtilityGenerator } from "./template";

export class GapUtilityGenerator extends UtilityGenerator {
  constructor(private readonly SpacingTokenGenerator: SpacingTokenGenerator) {
    super("Gap utilities");
  }

  css(): string {
    const tokens = this.SpacingTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("spacing-", "");

      lines.push(`[data-gap='${key}'] { gap: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

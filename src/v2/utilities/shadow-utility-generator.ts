import { ShadowTokenGenerator } from "../tokens/shadow-token-generator";
import { UtilityGenerator } from "./template";

export class ShadowUtilityGenerator extends UtilityGenerator {
  constructor(private readonly ShadowTokenGenerator: ShadowTokenGenerator) {
    super("Shadow utilities");
  }

  css(): string {
    const tokens = this.ShadowTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("shadow-", "");

      lines.push(`[data-shadow='${key}'] { box-shadow: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

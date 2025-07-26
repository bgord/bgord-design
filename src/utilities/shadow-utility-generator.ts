import { ShadowTokenGenerator } from "../tokens/shadow-token-generator";
import { UtilityGenerator } from "./template";

export class ShadowUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(ShadowTokenGenerator: ShadowTokenGenerator) {
    super("Shadow utilities");
    this.config = ShadowTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("shadow-", "");

      lines.push(`[data-shadow='${key}'] { box-shadow: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

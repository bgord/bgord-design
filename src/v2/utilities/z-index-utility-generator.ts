import { ZIndexTokenGenerator } from "../tokens/z-index-token-generator";
import { UtilityGenerator } from "./template";

export class ZIndexUtilityGenerator extends UtilityGenerator {
  constructor(private readonly ZIndexTokenGenerator: ZIndexTokenGenerator) {
    super("Z-index utilities");
  }

  css(): string {
    const tokens = this.ZIndexTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("z-index-", "");

      lines.push(`[data-z='${key}'] { z-index: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

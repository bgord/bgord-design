import { BackdropsTokenGenerator } from "../tokens/backdrops-token-generator";
import { UtilityGenerator } from "./template";

export class BackdropUtilityGenerator extends UtilityGenerator {
  constructor(private readonly BackdropsTokenGenerator: BackdropsTokenGenerator) {
    super("Backdrop utilities");
  }

  css(): string {
    const tokens = this.BackdropsTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("backdrop-", "");

      lines.push(`[data-backdrop='${key}']::backdrop { background: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

import { OpacityTokenGenerator } from "../tokens/opacity-token-generator";
import { UtilityGenerator } from "./template";

export class OpacityUtilityGenerator extends UtilityGenerator {
  constructor(private readonly OpacityTokenGenerator: OpacityTokenGenerator) {
    super("Opacity utilities");
  }

  css(): string {
    const tokens = this.OpacityTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("opacity-", "");

      lines.push(`[data-opacity='${key}'] { opacity: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

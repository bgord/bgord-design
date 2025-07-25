import { RadiusTokenGenerator } from "../tokens/radius-token-generator";
import { UtilityGenerator } from "./template";

export class RadiusUtilityGenerator extends UtilityGenerator {
  constructor(private readonly RadiusTokenGenerator: RadiusTokenGenerator) {
    super("Radius utilities");
  }

  css(): string {
    const tokens = this.RadiusTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("radius-", "");

      lines.push(`[data-br='${key}'] { border-radius: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

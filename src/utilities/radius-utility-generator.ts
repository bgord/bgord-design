import { RadiusTokenGenerator } from "../tokens/radius-token-generator";
import { UtilityGenerator } from "./template";

export class RadiusUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(RadiusTokenGenerator: RadiusTokenGenerator) {
    super("Radius utilities");
    this.config = RadiusTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("radius-", "");

      lines.push(`[data-br='${key}'] { border-radius: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

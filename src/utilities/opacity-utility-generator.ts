import { OpacityTokenGenerator } from "../tokens/opacity-token-generator";
import { UtilityGenerator } from "./template";

export class OpacityUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(OpacityTokenGenerator: OpacityTokenGenerator) {
    super("Opacity utilities");
    this.config = OpacityTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("opacity-", "");

      lines.push(`[data-opacity='${key}'] { opacity: var(--${variable}); }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("opacity-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-opacity"?: ${type};`;
  }
}

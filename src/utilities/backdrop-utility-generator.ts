import type { BackdropsTokenGenerator } from "../tokens/backdrops-token-generator";
import { UtilityGenerator } from "./template";

export class BackdropUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(BackdropsTokenGenerator: BackdropsTokenGenerator) {
    super("Backdrop utilities");
    this.config = BackdropsTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("backdrop-", "");

      lines.push(`[data-backdrop='${key}']::backdrop { background: var(--${variable}); }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("backdrop-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-backdrop"?: ${type};`;
  }
}

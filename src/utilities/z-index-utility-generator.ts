import type { ZIndexTokenGenerator } from "../tokens/z-index-token-generator";
import { UtilityGenerator } from "./template";

export class ZIndexUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(ZIndexTokenGenerator: ZIndexTokenGenerator) {
    super("Z-index utilities");
    this.config = ZIndexTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("z-index-", "");

      lines.push(`[data-z='${key}'] { z-index: var(--${variable}); }`);
    }

    // Stryker disable all
    return lines.join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("z-index-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-z"?: ${type};`;
  }
}

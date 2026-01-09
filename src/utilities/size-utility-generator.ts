import type { SizeTokenGenerator } from "../tokens/size-token-generator";
import { UtilityGenerator } from "./template";

export class SizeUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(SizeTokenGenerator: SizeTokenGenerator) {
    super("Size utilities");
    this.config = SizeTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("size-", "");

      lines.push(`[data-size='${key}'] { height: var(--${variable}); width: var(--${variable}); }`);
    }

    // Stryker disable all
    return lines.join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("size-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-size"?: ${type};`;
  }
}

import type { LineHeightTokenGenerator } from "../tokens/line-height-token-generator";
import { UtilityGenerator } from "./template";

export class LineHeightUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(LineHeightTokenGenerator: LineHeightTokenGenerator) {
    super("Line height utilities");
    this.config = LineHeightTokenGenerator.getConfig();
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("line-height-", "");

      lines.push(`[data-lh='${key}'] { line-height: var(--${variable}); }`);
    }

    // Stryker disable all
    return lines.join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("line-height-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-lh"?: ${type};`;
  }
}

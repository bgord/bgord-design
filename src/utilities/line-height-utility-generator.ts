import { LineHeightTokenGenerator } from "../tokens/line-height-token-generator";
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

    return lines.join("\n");
  }
}

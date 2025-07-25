import { LineHeightTokenGenerator } from "../tokens/line-height-token-generator";
import { UtilityGenerator } from "./template";

export class LineHeightUtilityGenerator extends UtilityGenerator {
  constructor(private readonly LineHeightTokenGenerator: LineHeightTokenGenerator) {
    super("Line height utilities");
  }

  css(): string {
    const tokens = this.LineHeightTokenGenerator.getConfig();

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("line-height-", "");

      lines.push(`[data-lh='${key}'] { line-height: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}

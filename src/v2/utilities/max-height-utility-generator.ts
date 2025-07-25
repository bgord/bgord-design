import { BreakpointTokenGenerator } from "../tokens/breakpoint-token-generator";
import { UtilityGenerator } from "./template";

export class MaxHeightUtilityGenerator extends UtilityGenerator {
  config = { "100%": "100%", unset: "unset" };

  constructor(BreakpointTokenGenerator: BreakpointTokenGenerator) {
    super("Max height utilities");
    this.config = { ...this.config, ...BreakpointTokenGenerator.getConfig() };
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-max-height='${key}'] { max-height: ${value}; }`);
    }

    return lines.join("\n");
  }
}

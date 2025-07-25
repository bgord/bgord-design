import { BreakpointTokenGenerator } from "../tokens/breakpoint-token-generator";
import { UtilityGenerator } from "./template";

export class MaxHeightUtilityGenerator extends UtilityGenerator {
  constructor(private readonly BreakpointTokenGenerator: BreakpointTokenGenerator) {
    super("Max height utilities");
  }

  css(): string {
    const breakpoints = this.BreakpointTokenGenerator.getConfig();
    const tokens = { "100%": "100%", unset: "unset", ...breakpoints };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-max-height='${key}'] { max-height: ${value}; }`);
    }

    return lines.join("\n");
  }
}

import { BreakpointTokenGenerator } from "../tokens/breakpoint-token-generator";
import { UtilityGenerator } from "./template";

export class MaxWidthUtilityGenerator extends UtilityGenerator {
  constructor(private readonly BreakpointTokenGenerator: BreakpointTokenGenerator) {
    super("Max width utilities");
  }

  css(): string {
    const breakpoints = this.BreakpointTokenGenerator.getConfig();
    const tokens = { "100%": "100%", unset: "unset", ...breakpoints };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-max-width='${key}'] { max-width: ${value}; }`);
    }

    return lines.join("\n");
  }
}

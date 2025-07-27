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

    for (const [variable, value] of Object.entries(this.config)) {
      const key = variable.replace("breakpoint-", "");
      lines.push(`[data-max-height='${key}'] { max-height: ${value}; }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("breakpoint-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-max-height"?: ${type};`;
  }
}

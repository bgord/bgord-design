import { UtilityGenerator } from "./template";

export class FlexShrinkUtilityGenerator extends UtilityGenerator {
  config = { "0": "0", unset: "unset" };

  constructor() {
    super("Flex shrink utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-shrink='${key}'] { flex-shrink: ${value}; }`);
    }

    return lines.join("\n");
  }
}

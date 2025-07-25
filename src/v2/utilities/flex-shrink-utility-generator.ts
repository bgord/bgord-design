import { UtilityGenerator } from "./template";

export class FlexShrinkUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Flex shrink");
  }

  css(): string {
    const tokens = { "0": "0", unset: "unset" };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-shrink='${key}'] { flex-shrink: ${value}; }`);
    }

    return lines.join("\n");
  }
}

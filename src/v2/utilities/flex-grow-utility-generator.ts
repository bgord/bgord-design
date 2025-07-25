import { UtilityGenerator } from "./template";

export class FlexGrowUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Flex grow utilities");
  }

  css(): string {
    const tokens = { "1": "1", unset: "unset" };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-grow='${key}'] { flex-grow: ${value}; }`);
    }

    return lines.join("\n");
  }
}

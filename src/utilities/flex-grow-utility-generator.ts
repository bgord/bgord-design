import { UtilityGenerator } from "./template";

export class FlexGrowUtilityGenerator extends UtilityGenerator {
  config = { "1": "1", unset: "unset" };

  constructor() {
    super("Flex grow utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-grow='${key}'] { flex-grow: ${value}; }`);
    }

    return lines.join("\n");
  }
}

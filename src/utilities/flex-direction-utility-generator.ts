import { UtilityGenerator } from "./template";

export class FlexDirectionUtilityGenerator extends UtilityGenerator {
  config = {
    row: "row",
    "row-reverse": "row-reverse",
    column: "column",
    "column-reverse": "column-reverse",
  };

  constructor() {
    super("Flex direction utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-direction='${key}'] { flex-direction: ${value}; }`);
    }

    return lines.join("\n");
  }
}

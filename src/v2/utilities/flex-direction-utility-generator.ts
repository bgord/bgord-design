import { UtilityGenerator } from "./template";

export class FlexDirectionUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Flex direction utilities");
  }

  css(): string {
    const tokens = {
      row: "row",
      "row-reverse": "row-reverse",
      column: "column",
      "column-reverse": "column-reverse",
    };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-direction='${key}'] { flex-direction: ${value}; }`);
    }

    return lines.join("\n");
  }
}

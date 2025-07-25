import { UtilityGenerator } from "./template";

export class OverflowUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Overflow utilities");
  }

  css(): string {
    const tokens = { auto: "auto", scroll: "scroll", hidden: "hidden" };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-overflow='${key}'] { overflow: ${value}; }`);
    }

    return lines.join("\n");
  }
}

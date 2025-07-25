import { UtilityGenerator } from "./template";

export class DisplayUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Display utilities");
  }

  css(): string {
    const tokens = { flex: "flex", block: "block", "inline-block": "inline-block", none: "none" };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      if (key === "flex") {
        lines.push(`[data-display='${key}'] { display: flex; flex-wrap: wrap; }`);
      }
      lines.push(`[data-display='${key}'] { display: ${value}; }`);
    }

    return lines.join("\n");
  }
}

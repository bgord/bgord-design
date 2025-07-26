import { UtilityGenerator } from "./template";

export class DisplayUtilityGenerator extends UtilityGenerator {
  config = { flex: "flex", block: "block", "inline-block": "inline-block", none: "none" };

  constructor() {
    super("Display utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      if (key === "flex") {
        lines.push(`[data-display='${key}'] { display: flex; flex-wrap: wrap; }`);
      }
      lines.push(`[data-display='${key}'] { display: ${value}; }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-display"?: ${type};`;
  }
}

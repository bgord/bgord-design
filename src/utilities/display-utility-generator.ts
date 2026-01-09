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
        lines.push(`[data-disp='${key}'] { display: flex; flex-wrap: wrap; }`);
      }
      lines.push(`[data-disp='${key}'] { display: ${value}; }`);
    }

    // Stryker disable all
    return lines.join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-disp"?: ${type};`;
  }
}

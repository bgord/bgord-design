import { UtilityGenerator } from "./template";

export class WidthUtilityGenerator extends UtilityGenerator {
  config = { "100%": "100%", auto: "auto", unset: "unset" };

  constructor() {
    super("Width utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-width='${key}'] { width: ${value}; }`);
    }

    return lines.join("\n");
  }
}

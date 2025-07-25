import { UtilityGenerator } from "./template";

export class WidthUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Width utilities");
  }

  css(): string {
    const tokens = { "100%": "100%", auto: "auto", unset: "unset" };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-width='${key}'] { width: ${value}; }`);
    }

    return lines.join("\n");
  }
}

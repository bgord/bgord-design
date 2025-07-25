import { UtilityGenerator } from "./template";

export class HeightUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Heght utilities");
  }

  css(): string {
    const tokens = { "100%": "100%", auto: "auto", unset: "unset" };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-height='${key}'] { height: ${value}; }`);
    }

    return lines.join("\n");
  }
}

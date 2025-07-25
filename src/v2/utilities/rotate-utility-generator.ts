import { UtilityGenerator } from "./template";

export class RotateUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Rotate utilities");
  }

  css(): string {
    const tokens = { "0": "0", "90": "90", "180": "180", "270": "270" };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-rotate='${key}'] { transform: rotate(${value}deg); }`);
    }

    return lines.join("\n");
  }
}

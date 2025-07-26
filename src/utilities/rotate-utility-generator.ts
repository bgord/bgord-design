import { UtilityGenerator } from "./template";

export class RotateUtilityGenerator extends UtilityGenerator {
  config = { "0": "0", "90": "90", "180": "180", "270": "270" };

  constructor() {
    super("Rotate utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-rotate='${key}'] { transform: rotate(${value}deg); }`);
    }

    return lines.join("\n");
  }
}

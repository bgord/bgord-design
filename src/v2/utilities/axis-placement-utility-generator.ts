import { UtilityGenerator } from "./template";

export class AxisPlacementUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Axis placement");
  }

  css(): string {
    const tokens = {
      start: "flex-start",
      end: "flex-end",
      around: "space-around",
      evenly: "space-evenly",
      between: "space-between",
      center: "center",
      baseline: "baseline",
    };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-main='${key}'] { justify-content: ${value}; }`);
      lines.push(`[data-cross='${key}'] { align-items: ${value}; }`);
    }

    return lines.join("\n");
  }
}

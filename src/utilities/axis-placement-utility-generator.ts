import { UtilityGenerator } from "./template";

export class AxisPlacementUtilityGenerator extends UtilityGenerator {
  config = {
    start: "flex-start",
    end: "flex-end",
    around: "space-around",
    evenly: "space-evenly",
    between: "space-between",
    center: "center",
    baseline: "baseline",
  };

  constructor() {
    super("Axis placement utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-main='${key}'] { justify-content: ${value}; }`);
      lines.push(`[data-cross='${key}'] { align-items: ${value}; }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-main"?: ${type}; "data-cross"?: ${type};`;
  }
}

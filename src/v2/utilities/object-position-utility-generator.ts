import { UtilityGenerator } from "./template";

export class ObjectPositionUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Object position utilities");
  }

  css(): string {
    const tokens = {
      top: "top",
      bottom: "bottom",
      left: "left",
      right: "right",
      center: "center",
      "top-left": "top left",
      "top-right": "top right",
    };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-object-position='${key}'] { object-position: ${value}; }`);
    }

    return lines.join("\n");
  }
}

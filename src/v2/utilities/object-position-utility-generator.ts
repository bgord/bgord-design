import { UtilityGenerator } from "./template";

export class ObjectPositionUtilityGenerator extends UtilityGenerator {
  config = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    center: "center",
    "top-left": "top left",
    "top-right": "top right",
  };

  constructor() {
    super("Object position utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-object-position='${key}'] { object-position: ${value}; }`);
    }

    return lines.join("\n");
  }
}

import { UtilityGenerator } from "./template";

export class ObjectFitUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Object fit utilities");
  }

  css(): string {
    const tokens = {
      contain: "contain",
      cover: "cover",
      fill: "fill",
      "scale-down": "scale-down",
      none: "none",
    };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-object-fit='${key}'] { object-fit: ${value}; }`);
    }

    return lines.join("\n");
  }
}

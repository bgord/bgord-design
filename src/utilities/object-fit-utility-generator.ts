import { UtilityGenerator } from "./template";

export class ObjectFitUtilityGenerator extends UtilityGenerator {
  config = {
    contain: "contain",
    cover: "cover",
    fill: "fill",
    "scale-down": "scale-down",
    none: "none",
  };

  constructor() {
    super("Object fit utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-object-fit='${key}'] { object-fit: ${value}; }`);
    }

    // Stryker disable all
    return lines.join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-object-fit"?: ${type};`;
  }
}

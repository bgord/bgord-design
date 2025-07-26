import { UtilityGenerator } from "./template";

export class HeightUtilityGenerator extends UtilityGenerator {
  config = { "100%": "100%", auto: "auto", unset: "unset" };

  constructor() {
    super("Heght utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-height='${key}'] { height: ${value}; }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-height"?: ${type};`;
  }
}

import { UtilityGenerator } from "./template";

export class StackUtilityGenerator extends UtilityGenerator {
  config = { x: "x", y: "y" };

  constructor() {
    super("Stack utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key] of Object.entries(this.config)) {
      if (key === "x") {
        lines.push(`[data-stack='${key}'] { display: flex; flex-wrap: wrap; }`);
        continue;
      }

      if (key === "y") {
        lines.push(`[data-stack='${key}'] { display: flex; flex-wrap: wrap; flex-direction: column; }`);
      }
    }

    // Stryker disable all
    return lines.join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-stack"?: ${type};`;
  }
}

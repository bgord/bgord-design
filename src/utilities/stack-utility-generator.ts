import { UtilityGenerator } from "./template";

export class StackUtilityGenerator extends UtilityGenerator {
  // Stryker disable all
  config = { x: "x", y: "y" };
  // Stryker restore all

  constructor() {
    super("Stack utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key] of Object.entries(this.config)) {
      if (key === "x") {
        lines.push(`[data-stack='${key}'] { display: flex; flex-wrap: wrap; }`);
      }

      // Stryker disable all
      if (key === "y") {
        // Stryker restore all
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

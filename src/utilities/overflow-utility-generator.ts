import { UtilityGenerator } from "./template";

export class OverflowUtilityGenerator extends UtilityGenerator {
  config = { auto: "auto", scroll: "scroll", hidden: "hidden" };

  constructor() {
    super("Overflow utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-overflow='${key}'] { overflow: ${value}; }`);
    }

    // Stryker disable all
    return lines.join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-overflow"?: ${type};`;
  }
}

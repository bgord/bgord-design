import { UtilityGenerator } from "./template";

export class TransformUtilityGenerator extends UtilityGenerator {
  // Stryker disable all
  config = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "upper-first": "upper-first",
    truncate: "truncate",
    center: "center",
    nowrap: "nowrap",
    none: "none",
    "line-clamp": "line-clamp",
    "font-variant-numeric": "tabular-nums",
  };
  // Stryker restore all

  constructor() {
    super("Transform utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      if (key === "truncate") {
        lines.push(
          `[data-transform~='${key}'] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n`,
        );
        continue;
      }

      if (key === "line-clamp") {
        lines.push(
          `[data-transform~='${key}'] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: var(--lines, 2); overflow: hidden;\n}\n`,
        );
        continue;
      }

      if (key === "center") {
        lines.push(`[data-transform~='${key}'] {\n  text-align: center;\n}\n`);
        continue;
      }

      if (key === "upper-first") {
        lines.push(`[data-transform~='upper-first']:first-letter {\n  text-transform: uppercase;\n}\n`);
        continue;
      }

      if (key === "nowrap") {
        lines.push(`[data-transform~='nowrap'] {\n  white-space: nowrap;\n}\n`);
        continue;
      }

      if (key === "font-variant-numeric") {
        lines.push(`[data-transform~='font-variant-numeric'] {\n  font-variant-numeric: tabular-nums;\n}\n`);
        continue;
      }

      lines.push(`[data-transform~='${key}'] {\n  text-transform: ${value};\n}\n`);
    }

    // Stryker disable all
    return lines.join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-transform"?: ${type};`;
  }
}

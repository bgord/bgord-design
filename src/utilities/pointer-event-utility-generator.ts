import { UtilityGenerator } from "./template";

export class PointerEventUtilityGenerator extends UtilityGenerator {
  config = { none: "none", auto: "auto" };

  constructor() {
    super("Pointer event utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-pointer-events='${key}'] { pointer-events: ${value}; }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-pointer-events"?: ${type};`;
  }
}

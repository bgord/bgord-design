import { UtilityGenerator } from "./template";

export class FlexWrapUtilityGenerator extends UtilityGenerator {
  config = { nowrap: "nowrap", wrap: "wrap", "wrap-reverse": "wrap-reverse", unset: "unset" };

  constructor() {
    super("Flex wrap utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-wrap='${key}'] { flex-wrap: ${value}; }`);
    }

    return lines.join("\n");
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    return `"data-wrap"?: ${type};`;
  }
}

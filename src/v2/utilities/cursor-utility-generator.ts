import { UtilityGenerator } from "./template";

export class CursorUtilityGenerator extends UtilityGenerator {
  config = { wait: "wait", auto: "auto", pointer: "pointer", "not-allowed": "not-allowed" };

  constructor() {
    super("Cursor utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-cursor='${key}'] { cursor: ${value}; }`);
    }

    return lines.join("\n");
  }
}

import { UtilityGenerator } from "./template";

export class CursorUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Cursor utilities");
  }

  css(): string {
    const tokens = { wait: "wait", auto: "auto", pointer: "pointer", "not-allowed": "not-allowed" };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-cursor='${key}'] { cursor: ${value}; }`);
    }

    return lines.join("\n");
  }
}

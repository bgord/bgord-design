import { UtilityGenerator } from "./template";

export class PositionUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Position utilities");
  }

  css(): string {
    const tokens = {
      static: "static",
      relative: "relative",
      absolute: "absolute",
      fixed: "fixed",
      sticky: "sticky",
      unset: "unset",
    };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-position='${key}'] { position: ${value}; }`);
    }

    return lines.join("\n");
  }
}

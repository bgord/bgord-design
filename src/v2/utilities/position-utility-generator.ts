import { UtilityGenerator } from "./template";

export class PositionUtilityGenerator extends UtilityGenerator {
  config = {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky",
    unset: "unset",
  };

  constructor() {
    super("Position utilities");
  }

  css() {
    const lines: string[] = [];

    for (const [key, value] of Object.entries(this.config)) {
      lines.push(`[data-position='${key}'] { position: ${value}; }`);
    }

    return lines.join("\n");
  }
}

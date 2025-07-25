import { UtilityGenerator } from "./template";

export class PointerEventUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Pointer event utilities");
  }

  css(): string {
    const tokens = { none: "none", auto: "auto" };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-pointer-events='${key}'] { pointer-events: ${value}; }`);
    }

    return lines.join("\n");
  }
}

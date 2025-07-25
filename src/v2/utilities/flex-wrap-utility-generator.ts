import { UtilityGenerator } from "./template";

export class FlexWrapUtilityGenerator extends UtilityGenerator {
  constructor() {
    super("Flex wrap");
  }

  css(): string {
    const tokens = { nowrap: "nowrap", wrap: "wrap", "wrap-reverse": "wrap-reverse", unset: "unset" };

    const lines: string[] = [];

    for (const [key, value] of Object.entries(tokens)) {
      lines.push(`[data-wrap='${key}'] { flex-wrap: ${value}; }`);
    }

    return lines.join("\n");
  }
}

import { TokenConfigType } from "../tokens/template";

export abstract class UtilityGenerator {
  abstract config: TokenConfigType;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  header(): string {
    return `\n/* ${this.name} */\n`;
  }

  abstract css(): string;

  footer(): string {
    return "\n/* ===================== */\n";
  }

  toTypeScript(): string {
    return "";
  }
}

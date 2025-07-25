export abstract class UtilityGenerator {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  header(): string {
    return `/* ${this.name} */\n\n`;
  }

  abstract css(): string;

  footer(): string {
    return "/* ===================== */\n\n";
  }
}

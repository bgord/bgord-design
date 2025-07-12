import type * as Tokens from "./tokens";

export abstract class AbstractGenerator {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  generateHeader(): string {
    return `/* ${this.name} */\n\n`;
  }
  abstract generateCss(): string;

  generateFooter(): string {
    return "/* ===================== */\n\n";
  }
}

export type GeneratorConfigType = {
  [Key in keyof typeof Tokens]: (typeof Tokens)[Key];
};
